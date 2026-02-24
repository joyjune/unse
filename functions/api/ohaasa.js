const ST_TO_ZODIAC = {
    "01": "おひつじ座",
    "02": "おうし座",
    "03": "ふたご座",
    "04": "かに座",
    "05": "しし座",
    "06": "おとめ座",
    "07": "てんびん座",
    "08": "さそり座",
    "09": "いて座",
    "10": "やぎ座",
    "11": "みずがめ座",
    "12": "うお座"
};

export async function onRequestGet() {
    try {
        const res = await fetch("https://www.asahi.co.jp/data/ohaasa2020/horoscope.json");

        if (!res.ok) {
            return Response.json({ error: "Failed to fetch from Asahi" }, { status: 502 });
        }

        const json = await res.json();
        const entry = json[0];
        const onairDate = entry.onair_date; // "YYYYMMDD"

        const data = {};
        for (const detail of entry.detail) {
            const zodiac = ST_TO_ZODIAC[detail.horoscope_st];
            if (!zodiac) continue;

            const parts = detail.horoscope_text.split("\t");
            const content = parts.slice(0, 3).filter(p => p.trim()).join(" ");
            const item = parts[3]?.trim() || "-";

            data[zodiac] = {
                rank: parseInt(detail.ranking_no),
                content,
                item
            };
        }

        return Response.json({ onairDate, data });
    } catch (err) {
        console.error("Ohaasa error:", err);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
