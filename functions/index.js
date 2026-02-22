const functions = require("firebase-functions");
const OpenAI = require("openai");

const ZODIACS = ["쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양", "원숭이", "닭", "개", "돼지"];
const ELEMENTS = ["나무 (木)", "불 (火)", "흙 (土)", "금 (金)", "물 (水)"];

function getElement(birthdate, today) {
    const seed = parseInt(birthdate.replace(/-/g, "")) + parseInt(today.replace(/-/g, ""));
    return ELEMENTS[Math.abs(seed) % 5];
}

exports.getFortune = functions.https.onRequest(async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
    }
    if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
    }

    const { type, birthdate, today } = req.body;
    if (!type || !birthdate || !today) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }

    const apiKey = functions.config().openai?.key || process.env.OPENAI_API_KEY;
    if (!apiKey) {
        res.status(500).json({ error: "API key not configured" });
        return;
    }

    const openai = new OpenAI({ apiKey });
    let prompt = "";

    if (type === "saju") {
        const element = getElement(birthdate, today);
        prompt = `당신은 한국 전통 사주명리학 전문가입니다. 아래 정보를 바탕으로 오늘의 사주 운세를 작성해주세요.

생년월일: ${birthdate}
오늘 날짜: ${today}
오늘의 오행 기운: ${element}

조건:
- 2~3문장의 자연스러운 한국어로 작성
- 사주 명리학적 관점을 반영하되 일반인도 이해하기 쉽게
- 오늘 하루를 위한 구체적인 조언 포함
- 따뜻하고 현실적인 어조

운세 내용만 출력하세요. 제목이나 부가 설명 없이 본문만 작성합니다.`;

    } else if (type === "zodiac") {
        const year = parseInt(birthdate.split("-")[0]);
        const zodiacName = ZODIACS[(year - 4) % 12];
        prompt = `당신은 한국 전통 운세 전문가입니다. 아래 띠에 대한 오늘의 운세를 작성해주세요.

띠: ${zodiacName}띠 (${year}년생)
오늘 날짜: ${today}

조건:
- 2~3문장의 자연스러운 한국어로 작성
- 오늘의 전반적인 운과 실질적인 조언 포함
- ${zodiacName}띠 동물의 특성을 자연스럽게 녹여서 표현
- 긍정적이되 현실감 있는 내용

운세 내용만 출력하세요. 제목이나 부가 설명 없이 본문만 작성합니다.`;

    } else {
        res.status(400).json({ error: "Invalid type" });
        return;
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 200,
            temperature: 0.9,
        });
        res.json({ fortune: completion.choices[0].message.content.trim() });
    } catch (err) {
        console.error("OpenAI error:", err);
        res.status(500).json({ error: "Failed to generate fortune" });
    }
});
