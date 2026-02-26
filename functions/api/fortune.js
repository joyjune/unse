const ZODIACS = {
    ko: ["쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양", "원숭이", "닭", "개", "돼지"]
};

const ELEMENTS = {
    ko: ["나무 (木)", "불 (火)", "흙 (土)", "금 (金)", "물 (水)"]
};

function getElement(birthdate, calendarType, today, lang) {
    // 음력일 경우 시드값을 다르게 하여 다른 오행이 나오도록 유도 (간이 구현)
    const seed = parseInt(birthdate.replace(/-/g, "")) + parseInt(today.replace(/-/g, "")) + (calendarType === 'lunar' ? 123 : 0);
    return ELEMENTS[lang][Math.abs(seed) % 5];
}

function buildPrompt(type, birthdate, calendarType, today, lang) {
    const calName = calendarType === 'lunar' ? '음력' : '양력';

    if (type === "saju") {
        const element = getElement(birthdate, calendarType, today, lang);

        return `당신은 대한민국 최고의 사주명리학 전문가입니다. 아래 정보를 바탕으로 오늘의 사주 운세를 작성해주세요.

생년월일: ${birthdate} (${calName})
오늘 날짜: ${today}
오늘의 오행 기운: ${element}

조건:
- 2~3문장의 정중하고 신뢰감 있는 한국어로 작성
- 사용자의 생일이 ${calName}임을 고려하여 분석
- 오늘의 오행 기운(${element})이 주는 의미를 명확히 반영
- 오늘 하루를 위한 구체적이고 실질적인 조언 포함
- 제목이나 인사말 없이 본문만 출력

운세 본문:`;
    }

    if (type === "zodiac") {
        const year = parseInt(birthdate.split("-")[0]);
        const idx = (year - 4) % 12;
        const zodiacName = ZODIACS[lang][idx];

        return `당신은 대한민국 최고의 운세 전문가입니다. 12지신 동물의 특성을 반영하여 아래 띠의 오늘 운세를 작성해주세요.

띠: ${zodiacName}띠 (${year}년생, ${calName} 기준)
오늘 날짜: ${today}

조건:
- 2~3문장의 생동감 있고 희망적인 한국어로 작성
- ${zodiacName}띠의 성향과 오늘의 에너지를 조화롭게 표현
- 생년월일이 ${calName}임을 참고하여 더욱 정확하게 분석
- 구체적인 행동 지침이나 조언 1가지 포함
- 제목이나 인사말 없이 본문만 출력

운세 본문:`;
    }

    return null;
}

export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const { type, birthdate, calendarType = 'solar', today, lang = "ko" } = await request.json();

        if (!type || !birthdate || !today) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        const prompt = buildPrompt(type, birthdate, calendarType, today, lang);
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
