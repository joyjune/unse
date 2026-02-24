const ZODIACS = {
    ko: ["쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양", "원숭이", "닭", "개", "돼지"]
};

const ELEMENTS = {
    ko: ["나무 (木)", "불 (火)", "흙 (土)", "금 (金)", "물 (水)"]
};

function getElement(birthdate, today, lang) {
    const seed = parseInt(birthdate.replace(/-/g, "")) + parseInt(today.replace(/-/g, ""));
    return ELEMENTS[lang][Math.abs(seed) % 5];
}

function buildPrompt(type, birthdate, today, lang) {
    if (type === "saju") {
        const element = getElement(birthdate, today, lang);

        if (lang === "en") return `You are an expert in Korean traditional Four Pillars of Destiny (Saju). Write today's fortune based on the information below.

Date of birth: ${birthdate}
Today: ${today}
Today's elemental energy: ${element}

Rules:
- Write 2~3 natural English sentences
- Reflect the Five Elements perspective in an accessible way
- Include a specific piece of advice for today
- Warm and realistic tone

Output only the fortune text, no title or explanation.`;

        if (lang === "ja") return `あなたは韓国伝統の四柱推命の専門家です。以下の情報をもとに、今日の運勢を書いてください。

生年月日: ${birthdate}
今日の日付: ${today}
今日の五行の気: ${element}

条件:
- 2〜3文の自然な日本語で記述
- 五行の観点を分かりやすく反映
- 今日のための具体的なアドバイスを含める
- 温かく現実적인トーン

運勢の本文のみ出力してください。タイトルや説明は不要です。`;

        return `당신은 대한민국 최고의 사주명리학 전문가입니다. 아래 정보를 바탕으로 오늘의 사주 운세를 작성해주세요.

생년월일: ${birthdate}
오늘 날짜: ${today}
오늘의 오행 기운: ${element}

조건:
- 2~3문장의 정중하고 신뢰감 있는 한국어로 작성
- 오늘의 오행 기운(${element})이 주는 의미를 명확히 반영
- 오늘 하루를 위한 구체적이고 실질적인 조언 포함
- 제목이나 인사말 없이 본문만 출력

운세 본문:`;
    }

    if (type === "zodiac") {
        const year = parseInt(birthdate.split("-")[0]);
        const idx = (year - 4) % 12;
        const zodiacName = ZODIACS[lang][idx];

        if (lang === "en") return `You are an expert in Korean traditional zodiac fortune-telling. Write today's fortune for the zodiac animal below.

Zodiac: ${zodiacName} (born ${year})
Today: ${today}

Rules:
- Write 2~3 natural English sentences
- Include today's overall fortune and practical advice
- Naturally reflect the characteristics of the ${zodiacName}
- Positive yet realistic

Output only the fortune text, no title or explanation.`;

        if (lang === "ja") return `あなたは韓国伝統の干支占いの専門家です。以下の干支に対する今日の運勢を書いてください。

干支: ${zodiacName}年生まれ (${year}年)
今日の日付: ${today}

条件:
- 2〜3文の自然な日本語で記述
- 今日の全体的な運勢과実用的なアドバイスを含める
- ${zodiacName}の特性を自然に反映
- ポジティブで現実感のある内容

運勢の本文のみ出力してください。タイトルや説明は不要です。`;

        return `당신은 대한민국 최고의 운세 전문가입니다. 12지신 동물의 특성을 반영하여 아래 띠의 오늘 운세를 작성해주세요.

띠: ${zodiacName}띠 (${year}년생)
오늘 날짜: ${today}

조건:
- 2~3문장의 생동감 있고 희망적인 한국어로 작성
- ${zodiacName}띠의 성향과 오늘의 에너지를 조화롭게 표현
- 구체적인 행동 지침이나 조언 1가지 포함
- 제목이나 인사말 없이 본문만 출력

운세 본문:`;
    }

    return null;
}

export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const { type, birthdate, today, lang = "ko" } = await request.json();

        if (!type || !birthdate || !today) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        const prompt = buildPrompt(type, birthdate, today, lang);
        if (!prompt) {
            return Response.json({ error: "Invalid type" }, { status: 400 });
        }

        if (!env.OPENAI_API_KEY) {
            return Response.json({ error: "API key not configured" }, { status: 500 });
        }

        const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 200,
                temperature: 0.9,
            }),
        });

        if (!openaiRes.ok) {
            const err = await openaiRes.json();
            console.error("OpenAI error:", err);
            return Response.json({ error: "Failed to generate fortune" }, { status: 500 });
        }

        const data = await openaiRes.json();
        return Response.json({ fortune: data.choices[0].message.content.trim() });

    } catch (err) {
        console.error("Function error:", err);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
