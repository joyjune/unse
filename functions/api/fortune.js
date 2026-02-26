const ZODIACS = {
    ko: ["쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양", "원숭이", "닭", "개", "돼지"]
};

const ELEMENTS = {
    ko: ["나무 (木)", "불 (火)", "흙 (土)", "금 (金)", "물 (水)"]
};

function getElement(birthdate, calendarType, today, lang) {
    const seed = parseInt(birthdate.replace(/-/g, "")) + parseInt(today.replace(/-/g, "")) + (calendarType === 'lunar' ? 123 : 0);
    return ELEMENTS[lang][Math.abs(seed) % 5];
}

function buildPrompt(type, birthdate, calendarType, today, lang) {
    const calName = calendarType === 'lunar' ? '음력' : '양력';
    const element = getElement(birthdate, calendarType, today, lang);
    const year = parseInt(birthdate.split("-")[0]);
    const zodiacIdx = (year - 4) % 12;
    const zodiacName = ZODIACS[lang][zodiacIdx];

    // 전문적인 페르소나 설정
    const systemRole = "당신은 30년 경력의 명리학자이자 타로 마스터입니다. 사용자의 생년월일을 바탕으로 사주팔자의 원리와 오늘의 일진을 분석하여 조언합니다.";

    if (type === "saju") {
        return `${systemRole}
생년월일: ${birthdate} (${calName})
오늘 날짜: ${today}
오늘의 오행 기운: ${element}

조건:
- 명리학의 전문 용어(천간, 지지, 상생상극 등)를 자연스럽게 섞어 신뢰감을 주되, 이해하기 쉽게 풀어서 설명하세요.
- 오늘의 기운인 ${element}이 사용자의 사주와 어떻게 조화되는지 분석하세요.
- [오늘의 흐름], [주의할 점], [행운의 아이템] 순서로 출력하세요.
- 3~4문장의 품격 있는 한국어로 작성하세요.`;
    }

    if (type === "zodiac") {
        return `${systemRole}
띠: ${zodiacName}띠 (${year}년생, ${calName} 기준)
오늘 날짜: ${today}

조건:
- 12지신 동물의 특성과 오늘 일진의 충(沖), 합(合)을 고려하여 분석하세요.
- ${zodiacName}띠 특유의 성향이 오늘 하루 어떤 결과를 낼지 예측하세요.
- [오늘의 운세], [행동 지침] 순서로 3문장 이내로 작성하세요.`;
    }

    if (type === "love") {
        return `${systemRole}
생년월일: ${birthdate} (${calName})
오늘 날짜: ${today}
분석 대상: 오늘의 연애운

조건:
- 도화살, 홍염살 혹은 합의 원리를 응용하여 오늘의 연애 기운을 분석하세요.
- 솔로라면 새로운 인연의 가능성을, 커플이라면 관계의 유지나 갈등 조율에 대해 조언하세요.
- 정중하고 부드러운 말투로 3문장 이내로 작성하세요.`;
    }

    if (type === "wealth") {
        return `${systemRole}
생년월일: ${birthdate} (${calName})
오늘 날짜: ${today}
분석 대상: 오늘의 재물운

조건:
- 사주 상의 재성(財星)의 기운이 오늘 어떻게 흐르는지 분석하세요.
- 투자, 계약, 소비에 관한 실질적인 조언을 포함하세요.
- [금전 흐름], [재물 행운] 키워드를 포함하여 3문장 이내로 작성하세요.`;
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
                max_tokens: 300,
                temperature: 0.8,
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
