const data = {
    tarot: [
        // Major Arcana (22)
        { name: "0. The Fool (광대)", icon: "🃏", desc: "새로운 시작, 자유로운 영혼, 모험, 순수함. 두려워 말고 새로운 길을 나서보세요." },
        { name: "I. The Magician (마법사)", icon: "✨", desc: "창의력, 능력, 실천력, 의지. 당신에겐 이미 모든 준비가 되어 있습니다." },
        { name: "II. The High Priestess (고위 여사제)", icon: "🌙", desc: "직관, 신비, 지혜, 무의식. 내면의 소리에 귀를 기울여야 할 때입니다." },
        { name: "III. The Empress (황후)", icon: "👸", desc: "풍요, 모성, 창조, 자연. 주변의 아름다움과 풍요를 만끽하세요." },
        { name: "IV. The Emperor (황제)", icon: "👑", desc: "권위, 구조, 안정성, 리더십. 계획을 세우고 상황을 통제하세요." },
        { name: "V. The Hierophant (교황)", icon: "⛪", desc: "전통, 교육, 신념, 영적 조언. 지혜로운 조언자에게 도움을 구해보세요." },
        { name: "VI. The Lovers (연인)", icon: "❤️", desc: "사랑, 조화, 선택, 파트너십. 마음이 이끄는 대로 결단을 내리세요." },
        { name: "VII. The Chariot (전차)", icon: "🏹", desc: "승리, 의지, 전진, 극복. 강한 추진력으로 목표를 향해 나아가세요." },
        { name: "VIII. Strength (힘)", icon: "🦁", desc: "용기, 인내, 부드러운 통제. 육체적인 힘보다 내면의 힘이 필요한 때입니다." },
        { name: "IX. The Hermit (은둔자)", icon: "💡", desc: "성찰, 고독, 내면의 탐구, 인도. 잠시 멈추어 자신을 돌아보세요." },
        { name: "X. Wheel of Fortune (운명의 수레바퀴)", icon: "🎡", desc: "운명, 변화, 순환, 행운. 변화의 흐름을 받아들이고 순응하세요." },
        { name: "XI. Justice (정의)", icon: "⚖️", desc: "공정, 진실, 인과응보, 균형. 객관적인 시각으로 상황을 판단하세요." },
        { name: "XII. The Hanged Man (매달린 사람)", icon: "🙃", desc: "희생, 새로운 시각, 정체, 인내. 상황을 다른 각도에서 바라보세요." },
        { name: "XIII. Death (죽음)", icon: "💀", desc: "끝, 새로운 시작, 변화, 변형. 과거를 보내주고 새로운 미래를 맞이하세요." },
        { name: "XIV. Temperance (절제)", icon: "🍷", desc: "균형, 조화, 인내, 중용. 서로 다른 것들을 잘 조화시켜야 합니다." },
        { name: "XV. The Devil (악마)", icon: "😈", desc: "속박, 유혹, 중독, 물질주의. 당신을 얽매고 있는 욕망에서 벗어나세요." },
        { name: "XVI. The Tower (탑)", icon: "⚡", desc: "갑작스러운 변화, 붕괴, 깨달음, 해방. 위기는 곧 새로운 기회가 됩니다." },
        { name: "XVII. The Star (별)", icon: "🌟", desc: "희망, 영감, 치유, 평온. 어둠 속에서도 빛나는 희망을 잃지 마세요." },
        { name: "XVIII. The Moon (달)", icon: "🌕", desc: "불안, 혼란, 환상, 직관. 보이지 않는 곳의 진실을 직시하세요." },
        { name: "XIX. The Sun (태양)", icon: "☀️", desc: "성공, 행복, 활력, 긍정. 밝은 에너지가 당신을 비추고 있습니다." },
        { name: "XX. Judgement (심판)", icon: "🎺", desc: "부활, 결정, 용서, 소명. 과거를 청산하고 새로운 부름에 답하세요." },
        { name: "XXI. The World (세계)", icon: "🌍", desc: "완성, 통합, 성취, 여행. 하나의 주기가 완성되고 성공을 거둡니다." },

        // Wands (지팡이)
        { name: "Ace of Wands", icon: "🪄", desc: "새로운 시작, 영감, 잠재력. 열정적인 아이디어가 떠오르는 날입니다." },
        { name: "Two of Wands", icon: "🪄", desc: "계획, 미래 지향, 결정. 더 큰 세상으로 나아갈 계획을 세우세요." },
        { name: "Three of Wands", icon: "🪄", desc: "확장, 전망, 협력. 당신의 노력이 결실을 맺기 시작합니다." },
        { name: "Four of Wands", icon: "🪄", desc: "축하, 화합, 안정. 즐거운 소식이나 축하할 일이 생길 수 있습니다." },
        { name: "Five of Wands", icon: "🪄", desc: "경쟁, 갈등, 혼란. 작은 다툼이나 경쟁이 예상되니 주의하세요." },
        { name: "Six of Wands", icon: "🪄", desc: "승리, 인정, 성취. 당신의 능력이 세상에 인정받는 날입니다." },
        { name: "Seven of Wands", icon: "🪄", desc: "방어, 저항, 인내. 자신의 신념을 지키기 위해 노력해야 합니다." },
        { name: "Eight of Wands", icon: "🪄", desc: "신속함, 소식, 이동. 상황이 빠르게 전개되니 속도를 맞추세요." },
        { name: "Nine of Wands", icon: "🪄", desc: "경계, 마지막 힘, 준비. 끝까지 포기하지 말고 마지막 힘을 내세요." },
        { name: "Ten of Wands", icon: "🪄", desc: "부담, 책임감, 과로. 너무 많은 짐을 혼자 짊어지고 있지는 않나요?" },
        { name: "Page of Wands", icon: "🪄", desc: "새로운 소식, 호기심, 모험심. 설레는 소식이 찾아올 수 있습니다." },
        { name: "Knight of Wands", icon: "🪄", desc: "열정, 추진력, 급한 성격. 앞뒤 가리지 않고 행동하는 기운입니다." },
        { name: "Queen of Wands", icon: "🪄", desc: "매력, 자신감, 사교성. 당신의 밝은 에너지가 주변을 즐겁게 합니다." },
        { name: "King of Wands", icon: "🪄", desc: "리더십, 비전, 카리스마. 강한 의지로 상황을 주도해 나가세요." },

        // Cups (컵)
        { name: "Ace of Cups", icon: "🍷", desc: "사랑의 시작, 기쁨, 감성. 새로운 감정이나 관계가 피어납니다." },
        { name: "Two of Cups", icon: "🍷", desc: "결합, 파트너십, 조화. 마음이 맞는 사람과의 깊은 교감이 예상됩니다." },
        { name: "Three of Cups", icon: "🍷", desc: "축하, 우정, 즐거움. 친구들과 즐거운 시간을 보내기에 좋은 날입니다." },
        { name: "Four of Cups", icon: "🍷", desc: "무기력, 권태, 성찰. 새로운 기회를 놓치고 있지는 않은지 확인하세요." },
        { name: "Five of Cups", icon: "🍷", desc: "상실감, 후회, 슬픔. 잃은 것보다 남은 것에 집중해야 할 때입니다." },
        { name: "Six of Cups", icon: "🍷", desc: "추억, 순수함, 재회. 과거의 인연이나 추억이 힘이 되어줍니다." },
        { name: "Seven of Cups", icon: "🍷", desc: "환상, 선택의 고민, 상상. 현실적인 판단이 필요한 시점입니다." },
        { name: "Eight of Cups", icon: "🍷", desc: "떠남, 새로운 탐구, 포기. 더 가치 있는 것을 찾아 떠날 용기가 필요합니다." },
        { name: "Nine of Cups", icon: "🍷", desc: "만족, 소원 성취, 행복. 마음먹은 대로 일이 풀리는 즐거운 날입니다." },
        { name: "Ten of Cups", icon: "🍷", desc: "가족애, 평화, 행복한 가정. 주변 사람들과 행복을 나누는 시간입니다." },
        { name: "Page of Cups", icon: "🍷", desc: "감수성, 새로운 소식, 직관. 감성적인 아이디어나 소식이 찾아옵니다." },
        { name: "Knight of Cups", icon: "🍷", desc: "로맨틱, 제안, 평화주의자. 부드러운 유혹이나 제안이 있을 수 있습니다." },
        { name: "Queen of Cups", icon: "🍷", desc: "자애로움, 직관, 공감. 타인의 마음을 어루만져주는 지혜가 빛납니다." },
        { name: "King of Cups", icon: "🍷", desc: "감정적 조절, 포용력, 평온. 요동치는 감정을 다스리고 평정을 유지하세요." },

        // Swords (검)
        { name: "Ace of Swords", icon: "⚔️", desc: "승리, 명확함, 결단. 날카로운 통찰력으로 문제를 해결할 것입니다." },
        { name: "Two of Swords", icon: "⚔️", desc: "균형, 갈등, 결정 보류. 선택의 기로에서 신중을 기하고 있습니다." },
        { name: "Three of Swords", icon: "⚔️", desc: "상처, 아픔, 이별. 마음 아픈 소식이 있을 수 있으나 성장의 기회입니다." },
        { name: "Four of Swords", icon: "⚔️", desc: "휴식, 명상, 회복. 지친 몸과 마음을 쉬게 해주어야 하는 때입니다." },
        { name: "Five of Swords", icon: "⚔️", desc: "패배, 갈등, 공허한 승리. 다툼에서 이겨도 상처만 남을 수 있습니다." },
        { name: "Six of Swords", icon: "⚔️", desc: "회복, 이동, 문제 해결. 어려운 상황에서 벗어나 안정으로 향합니다." },
        { name: "Seven of Swords", icon: "⚔️", desc: "전략, 배신, 은밀함. 신중하고 기민한 대처가 필요한 상황입니다." },
        { name: "Eight of Swords", icon: "⚔️", desc: "고립, 속박, 두려움. 스스로 만든 감옥에서 벗어날 용기를 내세요." },
        { name: "Nine of Swords", icon: "⚔️", desc: "불안, 악몽, 과도한 걱정. 생각보다 상황은 나쁘지 않을 수 있습니다." },
        { name: "Ten of Swords", icon: "⚔️", desc: "완전한 끝, 고통, 새로운 시작. 이제 바닥을 쳤으니 올라갈 일만 남았습니다." },
        { name: "Page of Swords", icon: "⚔️", desc: "경계, 지적 호기심, 새로운 정보. 주변을 살피고 정보를 수집하세요." },
        { name: "Knight of Swords", icon: "⚔️", desc: "돌격, 행동력, 논리. 망설임 없이 생각한 바를 밀어붙이세요." },
        { name: "Queen of Swords", icon: "⚔️", desc: "냉철함, 독립심, 지혜. 객관적인 시선으로 진실을 바라보세요." },
        { name: "King of Swords", icon: "⚔️", desc: "권위, 논리, 공정함. 지적인 리더십으로 상황을 판단하세요." },

        // Pentacles (펜타클)
        { name: "Ace of Pentacles", icon: "💰", desc: "기회, 풍요, 현실적 시작. 금전적인 이득이나 기회가 찾아옵니다." },
        { name: "Two of Pentacles", icon: "💰", desc: "균형, 융통성, 변화. 여러 상황을 능숙하게 조율해야 하는 날입니다." },
        { name: "Three of Pentacles", icon: "💰", desc: "협력, 기술, 성과. 팀워크를 통해 전문성을 인정받게 됩니다." },
        { name: "Four of Pentacles", icon: "💰", desc: "소유욕, 보수적, 안정. 가진 것을 지키는 것도 좋지만 집착은 금물입니다." },
        { name: "Five of Pentacles", icon: "💰", desc: "곤경, 고립, 손실. 주변에 도움을 청하면 해결책을 찾을 수 있습니다." },
        { name: "Six of Pentacles", icon: "💰", desc: "자선, 관용, 균형. 베풀고 받는 과정에서 조화를 이루는 날입니다." },
        { name: "Seven of Pentacles", icon: "💰", desc: "인내, 수확 대기, 평가. 지금까지의 노력을 돌아보고 점검하세요." },
        { name: "Eight of Pentacles", icon: "💰", desc: "숙련, 성실, 전문성. 맡은 바 일에 집중하면 큰 성과를 거듭니다." },
        { name: "Nine of Pentacles", icon: "💰", desc: "풍요, 여유, 독립적 성공. 스스로 일궈낸 성취를 마음껏 즐기세요." },
        { name: "Ten of Pentacles", icon: "💰", desc: "유산, 완성, 가정의 번영. 장기적인 관점에서 안정을 이룩하게 됩니다." },
        { name: "Page of Pentacles", icon: "💰", desc: "신중함, 기회, 배움. 현실적인 목표를 세우고 차근차근 시작하세요." },
        { name: "Knight of Pentacles", icon: "💰", desc: "성실함, 신뢰, 책임감. 서두르지 말고 꼼꼼하게 처리하는 것이 좋습니다." },
        { name: "Queen of Pentacles", icon: "💰", desc: "현실적 조언, 풍요, 실질적 도움. 따뜻하고 든든한 지원군을 얻습니다." },
        { name: "King of Pentacles", icon: "💰", desc: "부, 안정성, 실질적 성과. 노력의 대가로 큰 보상을 얻는 날입니다." }
    ],
    constellations: [
        { name: "양자리 (3.21-4.19)", en: "Aries (3.21-4.19)", ja: "牡羊座 (3.21-4.19)", icon: "♈", representative: "🐏", jp: "おひつじ座" },
        { name: "황소자리 (4.20-5.20)", en: "Taurus (4.20-5.20)", ja: "牡牛座 (4.20-5.20)", icon: "♉", representative: "🐂", jp: "おうし座" },
        { name: "쌍둥이자리 (5.21-6.21)", en: "Gemini (5.21-6.21)", ja: "双子座 (5.21-6.21)", icon: "♊", representative: "👥", jp: "ふたご座" },
        { name: "게자리 (6.22-7.22)", en: "Cancer (6.22-7.22)", ja: "蟹座 (6.22-7.22)", icon: "♋", representative: "🦀", jp: "かに座" },
        { name: "사자자리 (7.23-8.22)", en: "Leo (7.23-8.22)", ja: "獅子座 (7.23-8.22)", icon: "♌", representative: "🦁", jp: "しし座" },
        { name: "처녀자리 (8.23-9.23)", en: "Virgo (8.23-9.23)", ja: "乙女座 (8.23-9.23)", icon: "♍", representative: "👧", jp: "おとめ座" },
        { name: "천칭자리 (9.24-10.22)", en: "Libra (9.24-10.22)", ja: "天秤座 (9.24-10.22)", icon: "♎", representative: "⚖️", jp: "てんびん座" },
        { name: "전갈자리 (10.23-11.22)", en: "Scorpio (10.23-11.22)", ja: "蠍座 (10.23-11.22)", icon: "♏", representative: "🦂", jp: "さそり座" },
        { name: "사수자리 (11.23-12.24)", en: "Sagittarius (11.23-12.24)", ja: "射手座 (11.23-12.24)", icon: "♐", representative: "🏹", jp: "いて座" },
        { name: "염소자리 (12.25-1.19)", en: "Capricorn (12.25-1.19)", ja: "山羊座 (12.25-1.19)", icon: "♑", representative: "🐐", jp: "やぎ座" },
        { name: "물병자리 (1.20-2.18)", en: "Aquarius (1.20-2.18)", ja: "水瓶座 (1.20-2.18)", icon: "♒", representative: "🏺", jp: "みずがめ座" },
        { name: "물고기자리 (2.19-3.20)", en: "Pisces (2.19-3.20)", ja: "魚座 (2.19-3.20)", icon: "♓", representative: "🐟", jp: "うお座" }
    ],
    zodiacs: [
        { name: "쥐띠", icon: "🐭" },
        { name: "소띠", icon: "🐮" },
        { name: "호랑이띠", icon: "🐯" },
        { name: "토끼띠", icon: "🐰" },
        { name: "용띠", icon: "🐲" },
        { name: "뱀띠", icon: "🐍" },
        { name: "말띠", icon: "🐴" },
        { name: "양띠", icon: "🐑" },
        { name: "원숭이띠", icon: "🐵" },
        { name: "닭띠", icon: "🐔" },
        { name: "개띠", icon: "🐶" },
        { name: "돼지띠", icon: "🐷" }
    ],
    zodiacDesc: [
        "오늘은 겸손한 태도가 행운을 불러옵니다.",
        "인내심을 가지고 기다리면 좋은 결과가 있을 것입니다.",
        "자신감 있게 밀어붙이면 성공할 수 있는 날입니다.",
        "주변 사람들과의 협력이 무엇보다 중요한 시점입니다.",
        "큰 변화보다는 현재를 유지하는 것이 유리합니다.",
        "작은 지출이 큰 기쁨으로 돌아올 수 있습니다."
    ]
};

// ---- 다국어 지원 ----
const translations = {
    ko: {
        nav_home: "홈", nav_tarot: "타로", nav_ohaasa: "오하아사", nav_saju: "사주", nav_zodiac: "띠운세",
        hero_title: "당신의 운명은 무엇을 말하고 있나요?",
        hero_desc: "생년월일을 입력하고 다양한 운세를 확인해보세요.",
        menu_tarot_sub: "오늘의 한 장", menu_ohaasa_sub: "별자리 행운", menu_saju_sub: "오행 분석", menu_zodiac_sub: "12지신 조언",
        tarot_title: "오늘의 타로", tarot_desc: "마음을 가다듬고 카드 한 장을 선택하세요.",
        const_title: "오하아사 별자리 운세",
        luck_item_label: "🍀 행운의 아이템:", luck_color_label: "🎨 행운의 색상:",
        saju_title: "사주 오행 분석", zodiac_title: "띠별 운세",
        element_label: "오늘의 기운:",
        footer: "© 2026 Cosmic Destiny. 모든 운세는 재미로만 봐주세요.",
        loading_const: "오늘의 별자리 정보를 가져오는 중...",
        loading_fortune: "운세를 분석하는 중...",
        error_data: "데이터를 가져오지 못했습니다. 잠시 후 다시 시도해주세요.",
        error_fortune: "운세를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.",
        rank_suffix: "위", zodiac_basis: "출생연도 기준",
        alert_birthdate: "올바른 생년월일을 입력해주세요!",
    },
    en: {
        nav_home: "Home", nav_tarot: "Tarot", nav_ohaasa: "Ohaasa", nav_saju: "Saju", nav_zodiac: "Zodiac",
        hero_title: "What does your destiny say?",
        hero_desc: "Enter your birthdate and explore your fortune.",
        menu_tarot_sub: "Today's Card", menu_ohaasa_sub: "Star Fortune", menu_saju_sub: "Five Elements", menu_zodiac_sub: "12 Animals",
        tarot_title: "Today's Tarot", tarot_desc: "Calm your mind and draw a card.",
        const_title: "Ohaasa Star Fortune",
        luck_item_label: "🍀 Lucky Item:", luck_color_label: "🎨 Lucky Color:",
        saju_title: "Saju Five Elements", zodiac_title: "Zodiac Fortune",
        element_label: "Today's Energy:",
        footer: "© 2026 Cosmic Destiny. For entertainment purposes only.",
        loading_const: "Loading today's star fortune...",
        loading_fortune: "Analyzing your fortune...",
        error_data: "Failed to load data. Please try again later.",
        error_fortune: "Failed to load fortune. Please try again later.",
        rank_suffix: "", zodiac_basis: "Based on birth year",
        alert_birthdate: "Please enter a valid birthdate!",
    },
    ja: {
        nav_home: "ホーム", nav_tarot: "タロット", nav_ohaasa: "おは朝", nav_saju: "四柱推命", nav_zodiac: "干支占い",
        hero_title: "あなたの運命は何を告げていますか？",
        hero_desc: "生年月日を入力して、様々な運勢を確認しましょう。",
        menu_tarot_sub: "今日の一枚", menu_ohaasa_sub: "星座運勢", menu_saju_sub: "五行分析", menu_zodiac_sub: "十二支の助言",
        tarot_title: "今日のタロット", tarot_desc: "心を落ち着けて、カードを一枚選んでください。",
        const_title: "おは朝 星座運勢",
        luck_item_label: "🍀 ラッキーアイテム：", luck_color_label: "🎨 ラッキーカラー：",
        saju_title: "四柱推命 五行分析", zodiac_title: "干支別運勢",
        element_label: "今日の気：",
        footer: "© 2026 Cosmic Destiny. 運勢はエンターテインメントとしてお楽しみください。",
        loading_const: "今日の星座情報を取得中...",
        loading_fortune: "運勢を分析中...",
        error_data: "データの取得に失敗しました。しばらくしてから再試行してください。",
        error_fortune: "運勢の取得に失敗しました。しばらくしてから再試行してください。",
        rank_suffix: "位", zodiac_basis: "生まれ年基準",
        alert_birthdate: "正しい生年月日を入力してください！",
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.ko[key] || key;
}

function hashText(text) {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = ((hash << 5) - hash) + text.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

async function translateText(text, lang) {
    if (!text || text === '-' || lang === 'ko') return text;
    const cacheKey = `translate_${lang}_${hashText(text)}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) return cached;

    try {
        const resp = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, lang })
        });
        const data = await resp.json();
        if (data.translated) {
            localStorage.setItem(cacheKey, data.translated);
            return data.translated;
        }
    } catch (e) {
        console.error("Translate error:", e);
    }
    return text;
}

function getConstellationDisplayName(constellation) {
    if (currentLang === 'en') return constellation.en || constellation.name;
    if (currentLang === 'ja') return constellation.ja || constellation.name;
    return constellation.name;
}

async function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    if (isTarotDrawn && lastTarotIndex !== null) {
        await renderTarot(data.tarot[lastTarotIndex]);
    }
    if (currentView !== 'home' && globalBirthdate) {
        await updateFortune(currentView);
    }
}

// Global State
let globalBirthdate = "";
let isTarotDrawn = false;
let ohaasaUpdateTimer = null;
let currentView = "home";
let lastTarotIndex = null;

// Fetch Ohaasa Data via Cloudflare Function (Caching + Auto-Update)
async function fetchOhaasaData(forceRefresh = false) {
    const today = new Date().toISOString().split('T')[0];
    const cachedData = localStorage.getItem('ohaasa_data');
    const cachedDate = localStorage.getItem('ohaasa_date');

    // 일요일은 방송 없음 → 토요일 데이터 그대로 반환
    if (new Date().getDay() === 0 && cachedData) {
        return JSON.parse(cachedData);
    }

    if (!forceRefresh && cachedData && cachedDate === today) {
        return JSON.parse(cachedData);
    }

    try {
        const res = await fetch('/api/ohaasa');
        const json = await res.json();

        if (json.error || !json.data) throw new Error(json.error);

        // onairDate로 변경 감지 (YYYYMMDD → YYYY-MM-DD)
        const onairDate = `${json.onairDate.slice(0,4)}-${json.onairDate.slice(4,6)}-${json.onairDate.slice(6,8)}`;
        const prevOnairDate = localStorage.getItem('ohaasa_onair_date');
        localStorage.setItem('ohaasa_html_changed', onairDate !== prevOnairDate ? 'true' : 'false');
        localStorage.setItem('ohaasa_onair_date', onairDate);

        localStorage.setItem('ohaasa_data', JSON.stringify(json.data));
        localStorage.setItem('ohaasa_date', today);
        return json.data;
    } catch (e) {
        console.error("Ohaasa Fetch Error:", e);
        return cachedData ? JSON.parse(cachedData) : null;
    }
}

// ---- 오하아사 자동 업데이트 스케줄링 ----

// 오늘 특정 시각으로 setTimeout 예약
function scheduleOhaasaAt(hour, minute, callback) {
    if (ohaasaUpdateTimer) clearTimeout(ohaasaUpdateTimer);
    const now = new Date();
    const target = new Date(now);
    target.setHours(hour, minute, 0, 0);
    const delay = Math.max(0, target - now);
    const label = `${hour}:${String(minute).padStart(2, '0')}`;
    console.log(`[오하아사] ${label} 업데이트 예약 (약 ${Math.round(delay / 60000)}분 후)`);
    ohaasaUpdateTimer = setTimeout(callback, delay);
}

// 다음 방송일(월~토) 오전 8시로 예약
function scheduleNextBroadcastDay() {
    if (ohaasaUpdateTimer) clearTimeout(ohaasaUpdateTimer);
    const next = new Date();
    next.setDate(next.getDate() + 1);
    next.setHours(8, 0, 0, 0);
    // 내일이 일요일이면 월요일로
    if (next.getDay() === 0) {
        next.setDate(next.getDate() + 1);
        console.log('[오하아사] 내일은 일요일 (방송 없음), 월요일 오전 8시로 예약');
    } else {
        console.log('[오하아사] 다음 업데이트: 내일 오전 8시');
    }
    const delay = next - new Date();
    ohaasaUpdateTimer = setTimeout(() => triggerOhaasaUpdate('8am'), delay);
}

// 스케줄된 슬롯에서 강제 갱신 실행
async function triggerOhaasaUpdate(slot) {
    console.log(`[오하아사] ${slot} 업데이트 실행`);
    const today = new Date().toISOString().split('T')[0];

    await fetchOhaasaData(true);

    const htmlChanged = localStorage.getItem('ohaasa_html_changed') === 'true';
    localStorage.setItem(`ohaasa_done_${slot}`, today);

    // 별자리 섹션이 열려 있으면 UI 갱신
    const constSection = document.getElementById('constellation-section');
    if (constSection && !constSection.classList.contains('hidden')) {
        await updateFortune('constellation');
    }

    if (slot === '8am') {
        if (htmlChanged) {
            console.log('[오하아사] 8시 데이터 업데이트 확인, 내일 예약');
            scheduleNextBroadcastDay();
        } else {
            console.log('[오하아사] 8시 데이터 미변경, 9시 재시도 예약');
            const now = new Date();
            const nineAM = new Date(now);
            nineAM.setHours(9, 0, 0, 0);
            if (now < nineAM) {
                scheduleOhaasaAt(9, 0, () => triggerOhaasaUpdate('9am'));
            } else {
                await triggerOhaasaUpdate('9am');
            }
        }
    } else {
        // 9:00 슬롯 완료 — 오늘 업데이트 종료
        scheduleNextBroadcastDay();
    }
}

// 페이지 로드 시 현재 시각 기준으로 스케줄 결정
async function scheduleOhaasaAutoUpdate() {
    const now = new Date();
    const today = now.toISOString().split('T')[0];

    // 일요일은 방송 없음 → 토요일 데이터 유지, 월요일 예약
    if (now.getDay() === 0) {
        console.log('[오하아사] 오늘은 일요일 (방송 없음), 토요일 데이터 유지');
        scheduleNextBroadcastDay();
        return;
    }
    const done8am = localStorage.getItem('ohaasa_done_8am') === today;
    const done9am = localStorage.getItem('ohaasa_done_9am') === today;

    const eightAM = new Date(now);
    eightAM.setHours(8, 0, 0, 0);
    const nineAM = new Date(now);
    nineAM.setHours(9, 0, 0, 0);

    if (now < eightAM) {
        // 8시 이전 → 8시에 예약
        scheduleOhaasaAt(8, 0, () => triggerOhaasaUpdate('8am'));
    } else if (!done8am) {
        // 8시 이후이지만 오늘 8시 업데이트 미실행 → 즉시 실행
        await triggerOhaasaUpdate('8am');
    } else if (!done9am) {
        // 8시 업데이트 완료, 9시 재시도 여부 확인
        const htmlChanged = localStorage.getItem('ohaasa_html_changed') === 'true';
        if (!htmlChanged) {
            if (now < nineAM) {
                scheduleOhaasaAt(9, 0, () => triggerOhaasaUpdate('9am'));
            } else {
                await triggerOhaasaUpdate('9am');
            }
        } else {
            scheduleNextBroadcastDay();
        }
    } else {
        // 오늘 두 번 모두 완료 → 내일 예약
        scheduleNextBroadcastDay();
    }
}

// Navigation
const navItems = document.querySelectorAll('.nav-item, .menu-card');
const views = document.querySelectorAll('.view');

function switchView(target) {
    views.forEach(v => v.classList.add('hidden'));
    const targetView = document.getElementById(`${target}-section`);
    if (targetView) targetView.classList.remove('hidden');
    currentView = target;

    if (target === 'home') {
        history.replaceState(null, "", location.pathname);
    } else if (location.hash !== `#${target}`) {
        location.hash = target;
    }
    
    document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.toggle('active', n.getAttribute('data-target') === target);
    });

    if (target !== 'home') updateFortune(target);
}

function getTargetFromHash() {
    const hash = location.hash.replace('#', '');
    if (!hash) return 'home';
    const allowed = ['home', 'tarot', 'constellation', 'saju', 'zodiac'];
    return allowed.includes(hash) ? hash : 'home';
}

function handleHashChange() {
    const target = getTargetFromHash();
    const birthInput = document.getElementById('birthdate-global').value;
    if (target !== 'home' && (!birthInput || birthInput.split('-')[0].length !== 4)) {
        alert(t('alert_birthdate'));
        history.replaceState(null, "", location.pathname);
        switchView('home');
        return;
    }
    if (target !== 'home') globalBirthdate = birthInput;
    switchView(target);
}

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const target = item.getAttribute('data-target');
        const birthInput = document.getElementById('birthdate-global').value;
        if (target !== 'home' && (!birthInput || birthInput.split('-')[0].length !== 4)) {
            e.preventDefault();
            alert(t('alert_birthdate'));
            return;
        }
        if (target !== 'home') globalBirthdate = birthInput;
        switchView(target);
    });
});

document.getElementById('home-btn').addEventListener('click', () => switchView('home'));

// Fortune Logic
async function updateFortune(type) {
    const seed = getSeed();

    if (type === 'constellation') {
        const birthMonth = parseInt(globalBirthdate.split('-')[1]);
        const birthDay = parseInt(globalBirthdate.split('-')[2]);
        let constIdx = 0;
        if ((birthMonth == 3 && birthDay >= 21) || (birthMonth == 4 && birthDay <= 19)) constIdx = 0;
        else if ((birthMonth == 4 && birthDay >= 20) || (birthMonth == 5 && birthDay <= 20)) constIdx = 1;
        else if ((birthMonth == 5 && birthDay >= 21) || (birthMonth == 6 && birthDay <= 21)) constIdx = 2;
        else if ((birthMonth == 6 && birthDay >= 22) || (birthMonth == 7 && birthDay <= 22)) constIdx = 3;
        else if ((birthMonth == 7 && birthDay >= 23) || (birthMonth == 8 && birthDay <= 22)) constIdx = 4;
        else if ((birthMonth == 8 && birthDay >= 23) || (birthMonth == 9 && birthDay <= 23)) constIdx = 5;
        else if ((birthMonth == 9 && birthDay >= 24) || (birthMonth == 10 && birthDay <= 22)) constIdx = 6;
        else if ((birthMonth == 10 && birthDay >= 23) || (birthMonth == 11 && birthDay <= 22)) constIdx = 7;
        else if ((birthMonth == 11 && birthDay >= 23) || (birthMonth == 12 && birthDay <= 24)) constIdx = 8;
        else if ((birthMonth == 12 && birthDay >= 25) || (birthMonth == 1 && birthDay <= 19)) constIdx = 9;
        else if ((birthMonth == 1 && birthDay >= 20) || (birthMonth == 2 && birthDay <= 18)) constIdx = 10;
        else constIdx = 11;

        const constellation = data.constellations[constIdx];
        const displayName = getConstellationDisplayName(constellation);
        document.getElementById('const-name').innerText = displayName;
        document.getElementById('const-desc').innerText = t('loading_const');

        const ohaasaData = await fetchOhaasaData();
        const myFortune = ohaasaData ? ohaasaData[constellation.jp] : null;

        if (myFortune) {
            const rankLabel = currentLang === 'en' ? `Rank ${myFortune.rank}` : `${myFortune.rank}${t('rank_suffix')}`;
            document.getElementById('const-name').innerText = `${displayName} (${rankLabel})`;
            let content = myFortune.content;
            let item = myFortune.item || "-";
            let color = myFortune.color || "-";
            if (currentLang !== 'ko') {
                content = await translateText(content, currentLang);
                item = await translateText(item, currentLang);
                color = await translateText(color, currentLang);
            }
            document.getElementById('const-desc').innerText = content;
            document.getElementById('luck-item').innerText = item;
            document.getElementById('luck-color').innerText = color;
        } else {
            document.getElementById('const-desc').innerText = t('error_data');
        }

        drawConstellation(constellation);
    }

    if (type === 'saju') {
        const elements = ["🌳 나무 (木)", "🔥 불 (火)", "⛰️ 흙 (土)", "💎 금 (金)", "💧 물 (水)"];
        const sajuIdx = Math.floor(seededRandom(seed) * elements.length);
        document.getElementById('elem-value').innerText = elements[sajuIdx];
        document.getElementById('saju-desc').innerText = t('loading_fortune');
        await fetchAIFortune('saju', document.getElementById('saju-desc'));
    }

    if (type === 'zodiac') {
        const year = parseInt(globalBirthdate.split('-')[0]);
        const zodiacIdx = (year - 4) % 12;
        const zodiac = data.zodiacs[zodiacIdx];
        document.getElementById('zodiac-icon').innerText = zodiac.icon;
        document.getElementById('zodiac-name').innerText = `${zodiac.name} (${t('zodiac_basis')})`;
        document.getElementById('zodiac-desc').innerText = t('loading_fortune');
        await fetchAIFortune('zodiac', document.getElementById('zodiac-desc'));
    }
}

function drawConstellation(constellation) {
    const container = document.getElementById('const-visual');
    if (!container) return;
    container.innerHTML = `<div class="representative-icon" style="font-size: 8rem; animation: float 3s ease-in-out infinite;">${constellation.representative}</div>`;
}

// AI 운세 API 호출 (당일 + 언어별 캐싱)
async function fetchAIFortune(type, targetEl) {
    const today = new Date().toISOString().split('T')[0];
    const cacheKey = `ai_fortune_${type}_${globalBirthdate}_${today}_${currentLang}`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
        targetEl.innerText = cached;
        return;
    }

    try {
        const resp = await fetch('/api/fortune', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type, birthdate: globalBirthdate, today, lang: currentLang })
        });
        const data = await resp.json();
        if (data.fortune) {
            localStorage.setItem(cacheKey, data.fortune);
            targetEl.innerText = data.fortune;
        } else {
            targetEl.innerText = t('error_fortune');
        }
    } catch (e) {
        console.error("AI fortune fetch error:", e);
        targetEl.innerText = t('error_fortune');
    }
}

function getSeed() {
    const today = new Date();
    const todayStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return (globalBirthdate ? parseInt(globalBirthdate.replace(/-/g, '')) : 0) + parseInt(todayStr.replace(/-/g, ''));
}

function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

async function renderTarot(card) {
    let name = card.name;
    let desc = card.desc;
    if (currentLang !== 'ko') {
        name = await translateText(name, currentLang);
        desc = await translateText(desc, currentLang);
    }
    document.getElementById('tarot-name').innerText = name;
    document.getElementById('tarot-card-image').innerText = card.icon;
    document.getElementById('tarot-desc').innerText = desc;
}

function resetTarot() {
    isTarotDrawn = false;
    lastTarotIndex = null;
    const cardEl = document.getElementById('tarot-card');
    const resultEl = document.getElementById('tarot-result');
    if (cardEl) cardEl.classList.remove('flipped');
    if (resultEl) resultEl.classList.add('hidden');
    const nameEl = document.getElementById('tarot-name');
    const imageEl = document.getElementById('tarot-card-image');
    const descEl = document.getElementById('tarot-desc');
    if (nameEl) nameEl.innerText = "";
    if (imageEl) imageEl.innerText = "";
    if (descEl) descEl.innerText = "";
}

// Tarot
const tarotCard = document.getElementById('tarot-card');
const tarotResult = document.getElementById('tarot-result');
if (tarotCard) {
    tarotCard.addEventListener('click', async function() {
        if (isTarotDrawn) return;
        isTarotDrawn = true;
        const seed = getSeed() + 777;
        const tarotIdx = Math.floor(seededRandom(seed) * data.tarot.length);
        lastTarotIndex = tarotIdx;
        const card = data.tarot[tarotIdx];
        await renderTarot(card);
        this.classList.add('flipped');
        setTimeout(() => tarotResult.classList.remove('hidden'), 800);
    });
}

// Stars
function createStars() {
    const container = document.querySelector('.stars');
    if (!container) return;
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `left:${Math.random()*100}%; top:${Math.random()*100}%; width:${Math.random()*2+1}px; height:${Math.random()*2+1}px; opacity:${Math.random()}; position:absolute; background:white; border-radius:50%;`;
        container.appendChild(star);
    }
}
createStars();

// 언어 버튼 이벤트
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

// 초기 언어 적용
setLanguage(currentLang);

// 해시 기반 접근 처리
window.addEventListener('hashchange', handleHashChange);
handleHashChange();

// 오하아사 자동 업데이트 스케줄 시작
scheduleOhaasaAutoUpdate();
