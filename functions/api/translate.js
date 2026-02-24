export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const { text } = await request.json();

        if (!text) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        if (!env.OPENAI_API_KEY) {
            return Response.json({ error: "API key not configured" }, { status: 500 });
        }

        const prompt = `Translate the Japanese text below into natural Korean.

Rules:
- Output ONLY the Korean translation.
- NEVER include Japanese characters or sentence endings (like ね, よ, な) in the output.
- Keep the tone polite but natural (e.g., "~하세요", "~입니다").
- Preserve emojis and punctuation.
- If the text contains "|||", it is a delimiter. Preserve it exactly.

Text:
${text}`;

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
                temperature: 0.3,
            }),
        });

        if (!openaiRes.ok) {
            const err = await openaiRes.json();
            console.error("OpenAI error:", err);
            return Response.json({ error: "Failed to translate" }, { status: 500 });
        }

        const data = await openaiRes.json();
        return Response.json({ translated: data.choices[0].message.content.trim() });

    } catch (err) {
        console.error("Translate function error:", err);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
