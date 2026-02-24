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
        { name: "Ace of Wands", icon: "🔥", desc: "새로운 시작, 영감, 잠재력. 열정적인 아이디어가 떠오르는 날입니다." },
        { name: "Two of Wands", icon: "🔥", desc: "계획, 미래 지향, 결정. 더 큰 세상으로 나아갈 계획을 세우세요." },
        { name: "Three of Wands", icon: "🔥", desc: "확장, 전망, 협력. 당신의 노력이 결실을 맺기 시작합니다." },
        { name: "Four of Wands", icon: "🔥", desc: "축하, 화합, 안정. 즐거운 소식이나 축하할 일이 생길 수 있습니다." },
        { name: "Five of Wands", icon: "🔥", desc: "경쟁, 갈등, 혼란. 작은 다툼이나 경쟁이 예상되니 주의하세요." },
        { name: "Six of Wands", icon: "🔥", desc: "승리, 인정, 성취. 당신의 능력이 세상에 인정받는 날입니다." },
        { name: "Seven of Wands", icon: "🔥", desc: "방어, 저항, 인내. 자신의 신념을 지키기 위해 노력해야 합니다." },
        { name: "Eight of Wands", icon: "🔥", desc: "신속함, 소식, 이동. 상황이 빠르게 전개되니 속도를 맞추세요." },
        { name: "Nine of Wands", icon: "🔥", desc: "경계, 마지막 힘, 준비. 끝까지 포기하지 말고 마지막 힘을 내세요." },
        { name: "Ten of Wands", icon: "🔥", desc: "부담, 책임감, 과로. 너무 많은 짐을 혼자 짊어지고 있지는 않나요?" },
        { name: "Page of Wands", icon: "🔥", desc: "새로운 소식, 호기심, 모험심. 설레는 소식이 찾아올 수 있습니다." },
        { name: "Knight of Wands", icon: "🔥", desc: "열정, 추진력, 급한 성격. 앞뒤 가리지 않고 행동하는 기운입니다." },
        { name: "Queen of Wands", icon: "🔥", desc: "매력, 자신감, 사교성. 당신의 밝은 에너지가 주변을 즐겁게 합니다." },
        { name: "King of Wands", icon: "🔥", desc: "리더십, 비전, 카리스마. 강한 의지로 상황을 주도해 나가세요." },

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
        { name: "쥐띠", en: "Rat", ja: "ねずみ年", icon: "🐭" },
        { name: "소띠", en: "Ox", ja: "うし年", icon: "🐮" },
        { name: "호랑이띠", en: "Tiger", ja: "とら年", icon: "🐯" },
        { name: "토끼띠", en: "Rabbit", ja: "うさぎ年", icon: "🐰" },
        { name: "용띠", en: "Dragon", ja: "たつ年", icon: "🐲" },
        { name: "뱀띠", en: "Snake", ja: "へび年", icon: "🐍" },
        { name: "말띠", en: "Horse", ja: "うま年", icon: "🐴" },
        { name: "양띠", en: "Goat", ja: "ひつじ年", icon: "🐑" },
        { name: "원숭이띠", en: "Monkey", ja: "さる年", icon: "🐵" },
        { name: "닭띠", en: "Rooster", ja: "とり年", icon: "🐔" },
        { name: "개띠", en: "Dog", ja: "いぬ年", icon: "🐶" },
        { name: "돼지띠", en: "Pig", ja: "いのしし年", icon: "🐷" }
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
        site_title: "매일운세",
        nav_home: "홈", nav_tarot: "타로", nav_ohaasa: "오하아사", nav_saju: "사주", nav_zodiac: "띠운세",
        hero_title: "당신의 운명은 무엇을 말하고 있나요?",
        hero_desc: "생년월일을 입력하고 다양한 운세를 확인해보세요.",
        menu_tarot_sub: "오늘의 한 장", menu_ohaasa_sub: "별자리 행운", menu_saju_sub: "오행 분석", menu_zodiac_sub: "12지신 조언",
        tarot_title: "오늘의 타로", tarot_desc: "마음을 가다듬고 카드 한 장을 선택하세요.",
        const_title: "오하아사 별자리 운세",
        luck_item_label: "🍀 행운의 아이템:", luck_color_label: "🎨 행운의 색상:",
        saju_title: "사주 오행 분석", zodiac_title: "띠별 운세",
        element_label: "오늘의 기운:",
        footer: "© 2026 매일운세. 모든 운세는 재미로만 봐주세요.",
        loading_const: "오늘의 별자리 정보를 가져오는 중...",
        loading_fortune: "운세를 분석하는 중...",
        error_data: "데이터를 가져오지 못했습니다. 잠시 후 다시 시도해주세요.",
        error_fortune: "운세를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.",
        rank_suffix: "위", zodiac_basis: "출생연도 기준",
        alert_birthdate: "올바른 생년월일을 입력해주세요!",
        home_about_title: "생년월일로 보는 오늘의 운세",
        home_about_body: "매일운세는 타로 카드·별자리·사주 오행·12지 띠운세를 한 곳에서 제공하는 운세 플랫폼입니다. 생년월일을 입력하면 당신만을 위한 오늘의 운세를 즉시 확인할 수 있습니다.",
        home_f_tarot: "🃏 타로 — 78장 카드의 상징으로 오늘의 에너지와 방향을 직관적으로 파악합니다.",
        home_f_ohaasa: "🌌 오하아사 — 일본 아사히TV 인기 아침 프로그램의 별자리 운세를 실시간으로 제공합니다.",
        home_f_saju: "☯️ 사주 — 동양 철학 오행(木火土金水) 이론으로 오늘의 기운을 AI가 분석합니다.",
        home_f_zodiac: "🐉 띠운세 — 12지신의 동물 기운을 AI가 해석해 오늘의 맞춤 조언을 드립니다.",
        tarot_info_title: "타로 카드란?",
        tarot_info_body: "타로는 14세기 유럽에서 시작된 78장의 카드 체계로, 오늘날 전 세계에서 자기성찰과 운세 도구로 활용됩니다. 카드에 담긴 상징과 이미지를 통해 무의식의 메시지를 끌어내고 오늘 하루의 방향을 직관적으로 파악할 수 있습니다.",
        tarot_major_title: "메이저 아르카나 22장",
        tarot_major_body: "광대(0)부터 세계(21)까지 22장으로 구성됩니다. 0~7번은 외적 성장(자아·의지·권위 형성), 8~14번은 내면 성찰(힘·정의·절제), 15~21번은 변화와 완성(악마·탑·별·달·태양·심판·세계)을 상징합니다. 메이저 카드가 나오면 삶의 중요한 전환점을 암시합니다.",
        tarot_suits_title: "마이너 아르카나 4수트 (56장)",
        tarot_suit_wands: "🔥 지팡이(Wands) — 열정·의지·창조력. 불의 원소. 일·목표·행동 영역.",
        tarot_suit_cups: "🍷 컵(Cups) — 감정·관계·직관. 물의 원소. 사랑·감성·꿈 영역.",
        tarot_suit_swords: "⚔️ 검(Swords) — 이성·갈등·진실. 공기의 원소. 생각·소통·갈등 영역.",
        tarot_suit_pentacles: "💰 펜타클(Pentacles) — 물질·안정·현실. 땅의 원소. 돈·건강·일상 영역.",
        tarot_how_title: "오늘의 타로 활용법",
        tarot_how_body: "눈을 감고 오늘 가장 신경 쓰이는 것을 떠올린 뒤 카드를 선택하세요. 카드를 뽑은 후에는 이미지를 직관적으로 느끼고, 그 메시지를 오늘 상황에 어떻게 적용할 수 있을지 생각해보세요. 타로는 미래를 예언하는 도구가 아니라 현재를 새로운 시각으로 바라보게 돕는 성찰의 도구입니다.",
        const_info_title: "오하아사 별자리 운세 안내",
        const_info_body: "오하아사(おは朝)는 일본 ABC 아사히 방송의 인기 아침 프로그램입니다. 매주 월~토 방영되며 12별자리별 오늘의 운세 순위·행운 아이템을 발표합니다. 매일운세는 당일 데이터를 실시간으로 반영해 최신 운세를 제공합니다.",
        const_tips_title: "별자리 운세 보는 법",
        const_tip1: "🏆 순위는 오늘 하루의 전반적인 운 흐름을 나타냅니다. 1위라도 방심은 금물!",
        const_tip2: "🍀 행운의 아이템을 오늘 하루 몸에 지니거나 활용해보세요.",
        saju_info_title: "사주와 오행이란?",
        saju_info_body: "사주(四柱)는 태어난 연·월·일·시의 네 기둥으로 삶의 흐름을 읽는 동양 철학입니다. 오행(五行)은 木·火·土·金·水 다섯 기운으로 우주의 모든 현상을 설명하며, 오늘 지배하는 기운을 알면 하루를 더 지혜롭게 이끌 수 있습니다.",
        saju_elements_title: "오행의 기운과 의미",
        saju_wood_desc: "🌳 木(나무) — 성장·창의력·유연성. 새로운 시작과 발전의 기운.",
        saju_fire_desc: "🔥 火(불) — 열정·활기·소통. 적극적이고 밝은 에너지.",
        saju_earth_desc: "⛰️ 土(흙) — 안정·신뢰·중용. 균형 잡힌 현실적인 기운.",
        saju_metal_desc: "💎 金(금) — 결단·정확·원칙. 날카롭고 집중적인 에너지.",
        saju_water_desc: "💧 水(물) — 지혜·적응력·깊이. 유연하고 통찰력 있는 기운.",
        zodiac_info_title: "12지 띠운세란?",
        zodiac_info_body: "12지신(十二支)은 동아시아 전통에서 시간·방위·운명을 나타내는 12가지 동물 상징입니다. 태어난 해에 따라 고유한 기운을 지니며, AI가 당신의 띠 특성과 오늘의 에너지를 융합하여 맞춤 운세를 분석합니다.",
        zodiac_animals_title: "12지 동물과 특성",
        zodiac_rat: "🐭 쥐 — 영리함·적응력·기민함", zodiac_ox: "🐮 소 — 성실함·인내·신뢰",
        zodiac_tiger: "🐯 호랑이 — 용기·패기·리더십", zodiac_rabbit: "🐰 토끼 — 온화함·예민함·행운",
        zodiac_dragon: "🐲 용 — 카리스마·창의·야망", zodiac_snake: "🐍 뱀 — 지혜·신중·직관",
        zodiac_horse: "🐴 말 — 활기·자유·독립심", zodiac_goat: "🐑 양 — 온순함·창작·공감",
        zodiac_monkey: "🐵 원숭이 — 재치·기민함·다재다능", zodiac_rooster: "🐔 닭 — 성실·자신감·꼼꼼함",
        zodiac_dog: "🐶 개 — 충직함·정의감·신뢰", zodiac_pig: "🐷 돼지 — 복·너그러움·성실",
    },
    en: {
        site_title: "Maeil Unse",
        nav_home: "Home", nav_tarot: "Tarot", nav_ohaasa: "Ohaasa", nav_saju: "Saju", nav_zodiac: "Zodiac",
        hero_title: "What does your destiny say?",
        hero_desc: "Enter your birthdate and explore your fortune.",
        menu_tarot_sub: "Today's Card", menu_ohaasa_sub: "Star Fortune", menu_saju_sub: "Five Elements", menu_zodiac_sub: "12 Animals",
        tarot_title: "Today's Tarot", tarot_desc: "Calm your mind and draw a card.",
        const_title: "Ohaasa Star Fortune",
        luck_item_label: "🍀 Lucky Item:", luck_color_label: "🎨 Lucky Color:",
        saju_title: "Saju Five Elements", zodiac_title: "Zodiac Fortune",
        element_label: "Today's Energy:",
        footer: "© 2026 Maeil Unse. For entertainment purposes only.",
        loading_const: "Loading today's star fortune...",
        loading_fortune: "Analyzing your fortune...",
        error_data: "Failed to load data. Please try again later.",
        error_fortune: "Failed to load fortune. Please try again later.",
        rank_suffix: "", zodiac_basis: "Based on birth year",
        alert_birthdate: "Please enter a valid birthdate!",
        home_about_title: "Your Daily Fortune by Birthdate",
        home_about_body: "Maeil Unse brings tarot, star fortune, saju five elements, and zodiac readings together in one place. Enter your birthdate to instantly discover what today holds for you.",
        home_f_tarot: "🃏 Tarot — Understand today's energy through the symbolism of 78 cards.",
        home_f_ohaasa: "🌌 Ohaasa — Live star fortune from Japan's popular Asahi morning TV program.",
        home_f_saju: "☯️ Saju — AI analyzes today's energy using Eastern five elements theory (Wood, Fire, Earth, Metal, Water).",
        home_f_zodiac: "🐉 Zodiac — AI-powered daily guidance based on your 12-animal zodiac sign.",
        tarot_info_title: "What is Tarot?",
        tarot_info_body: "Tarot is a 78-card symbolic system originating in 14th-century Europe, now used worldwide as a tool for self-reflection and divination. Through the symbols and imagery on each card, you can access messages from your subconscious and intuitively understand today's energy.",
        tarot_major_title: "Major Arcana — 22 Cards",
        tarot_major_body: "From The Fool (0) to The World (21). Cards 0–7 represent outer growth (identity, will, authority), 8–14 reflect inner wisdom (Strength, Justice, Temperance), and 15–21 signify transformation and completion (Devil, Tower, Star, Moon, Sun, Judgement, World). Drawing a Major Arcana card signals an important life turning point.",
        tarot_suits_title: "Minor Arcana — 4 Suits (56 Cards)",
        tarot_suit_wands: "🔥 Wands — Passion, willpower, creativity. Fire element. Work, goals, action.",
        tarot_suit_cups: "🍷 Cups — Emotions, relationships, intuition. Water element. Love, feelings, dreams.",
        tarot_suit_swords: "⚔️ Swords — Reason, conflict, truth. Air element. Thoughts, communication, conflict.",
        tarot_suit_pentacles: "💰 Pentacles — Material, stability, reality. Earth element. Money, health, daily life.",
        tarot_how_title: "How to Use Your Daily Card",
        tarot_how_body: "Close your eyes and think about what's on your mind today, then draw a card. After drawing, let the imagery speak to you intuitively, then consider how its message applies to your current situation. Tarot is not a prediction tool — it's a mirror for reflection, helping you see the present from a fresh perspective.",
        const_info_title: "About Ohaasa Star Fortune",
        const_info_body: "Ohaasa (おは朝) is a popular morning TV program on ABC Asahi in Japan, airing Monday through Saturday. Each day it reveals the star fortune ranking and lucky items for all 12 constellations. Maeil Unse delivers these results in real time.",
        const_tips_title: "How to Read Your Fortune",
        const_tip1: "🏆 Your rank reflects today's overall energy flow — even #1 means staying mindful!",
        const_tip2: "🍀 Try carrying or using your lucky item throughout the day.",
        saju_info_title: "What is Saju & Five Elements?",
        saju_info_body: "Saju (四柱) is an East Asian philosophical system that reads life's flow through four pillars based on your birth year, month, day, and hour. The Five Elements (五行) — Wood, Fire, Earth, Metal, Water — explain all phenomena in the universe. Knowing today's dominant energy helps you navigate the day wisely.",
        saju_elements_title: "The Five Elements",
        saju_wood_desc: "🌳 Wood (木) — Growth, creativity, flexibility. Energy of new beginnings.",
        saju_fire_desc: "🔥 Fire (火) — Passion, vitality, communication. Bright and active energy.",
        saju_earth_desc: "⛰️ Earth (土) — Stability, trust, balance. Grounded and practical energy.",
        saju_metal_desc: "💎 Metal (金) — Decisiveness, precision, principle. Sharp and focused energy.",
        saju_water_desc: "💧 Water (水) — Wisdom, adaptability, depth. Flexible and insightful energy.",
        zodiac_info_title: "What is Zodiac Fortune?",
        zodiac_info_body: "The 12 Zodiac animals (十二支) are symbolic animals representing time, direction, and destiny in East Asian tradition. Your birth year determines your sign and its unique energy. AI combines your zodiac characteristics with today's energy to deliver personalized guidance.",
        zodiac_animals_title: "12 Zodiac Animals",
        zodiac_rat: "🐭 Rat — Intelligence, adaptability", zodiac_ox: "🐮 Ox — Diligence, patience",
        zodiac_tiger: "🐯 Tiger — Courage, leadership", zodiac_rabbit: "🐰 Rabbit — Gentleness, good luck",
        zodiac_dragon: "🐲 Dragon — Charisma, ambition", zodiac_snake: "🐍 Snake — Wisdom, intuition",
        zodiac_horse: "🐴 Horse — Vitality, freedom", zodiac_goat: "🐑 Goat — Creativity, empathy",
        zodiac_monkey: "🐵 Monkey — Wit, versatility", zodiac_rooster: "🐔 Rooster — Diligence, precision",
        zodiac_dog: "🐶 Dog — Loyalty, justice", zodiac_pig: "🐷 Pig — Fortune, generosity",
    },
    ja: {
        site_title: "毎日運勢",
        nav_home: "ホーム", nav_tarot: "タロット", nav_ohaasa: "おは朝", nav_saju: "四柱推命", nav_zodiac: "干支占い",
        hero_title: "あなたの運命は何を告げていますか？",
        hero_desc: "生年月日を入力して、様々な運勢を確認しましょう。",
        menu_tarot_sub: "今日の一枚", menu_ohaasa_sub: "星座運勢", menu_saju_sub: "五行分析", menu_zodiac_sub: "十二支の助言",
        tarot_title: "今日のタロット", tarot_desc: "心を落ち着けて、カードを一枚選んでください。",
        const_title: "おは朝 星座運勢",
        luck_item_label: "🍀 ラッキーアイテム：", luck_color_label: "🎨 ラッキーカラー：",
        saju_title: "四柱推命 五行分析", zodiac_title: "干支別運勢",
        element_label: "今日の気：",
        footer: "© 2026 毎日運勢. 運勢はエンターテインメントとしてお楽しみください。",
        loading_const: "今日の星座情報を取得中...",
        loading_fortune: "運勢を分析中...",
        error_data: "データの取得に失敗しました。しばらくしてから再試行してください。",
        error_fortune: "運勢の取得に失敗しました。しばらくしてから再試行してください。",
        rank_suffix: "位", zodiac_basis: "生まれ年基準",
        alert_birthdate: "正しい生年月日を入力してください！",
        home_about_title: "生年月日で見る今日の運勢",
        home_about_body: "毎日運勢は、タロット・星座・四柱推命・干支占いをひとつのプラットフォームでご提供します。生年月日を入力するだけで、あなただけの今日の運勢をすぐに確認できます。",
        home_f_tarot: "🃏 タロット — 78枚のカードの象徴で、今日のエネルギーと方向性を直感的に把握します。",
        home_f_ohaasa: "🌌 おは朝 — 人気番組「おはよう朝日です」の星座運勢をリアルタイムでお届けします。",
        home_f_saju: "☯️ 四柱推命 — 五行（木・火・土・金・水）理論でAIが今日の気を分析します。",
        home_f_zodiac: "🐉 干支占い — 十二支の気をAIが解釈し、今日のアドバイスをお届けします。",
        tarot_info_title: "タロットカードとは？",
        tarot_info_body: "タロットは14世紀ヨーロッパで生まれた78枚のカード体系で、現在は世界中で自己省察と占いのツールとして活用されています。カードの象徴とイメージを通じて潜在意識のメッセージを引き出し、今日一日のエネルギーを直感的に把握できます。",
        tarot_major_title: "メジャーアルカナ 22枚",
        tarot_major_body: "愚者（0）から世界（21）まで22枚。0〜7番は外的成長（自我・意志・権威の形成）、8〜14番は内面の省察（力・正義・節制）、15〜21番は変容と完成（悪魔・塔・星・月・太陽・審判・世界）を象徴します。メジャーカードが出たときは人生の重要な転換点を示しています。",
        tarot_suits_title: "マイナーアルカナ 4スート（56枚）",
        tarot_suit_wands: "🔥 ワンド — 情熱・意志・創造力。火のエレメント。仕事・目標・行動の領域。",
        tarot_suit_cups: "🍷 カップ — 感情・関係・直感。水のエレメント。愛・感性・夢の領域。",
        tarot_suit_swords: "⚔️ ソード — 理性・葛藤・真実。風のエレメント。思考・コミュニケーション・葛藤の領域。",
        tarot_suit_pentacles: "💰 ペンタクル — 物質・安定・現実。地のエレメント。お金・健康・日常の領域。",
        tarot_how_title: "今日のタロット活用法",
        tarot_how_body: "目を閉じて今日気になっていることを思い浮かべてからカードを引きましょう。カードを引いたら、そのイメージを直感的に感じ取り、メッセージを今日の状況にどう活かせるか考えてみてください。タロットは未来を予言するツールではなく、現在を新しい視点で見つめ直すための省察のツールです。",
        const_info_title: "おは朝 星座運勢について",
        const_info_body: "「おは朝」はABC朝日放送の人気朝番組で、月〜土に放送されています。毎日12星座の運勢ランキング・ラッキーアイテムを発表しています。毎日運勢はその日のデータをリアルタイムで反映し、最新の運勢をお届けします。",
        const_tips_title: "運勢の見方",
        const_tip1: "🏆 順位は今日一日の全体的な運の流れを示します。1位でも油断は禁物！",
        const_tip2: "🍀 ラッキーアイテムを身につけたり、今日活用してみましょう。",
        saju_info_title: "四柱推命と五行とは？",
        saju_info_body: "四柱推命は、生まれた年・月・日・時の四柱をもとに人生の流れを読む東洋哲学です。五行（木・火・土・金・水）は宇宙のあらゆる現象を説明する5つのエネルギーで、今日の支配する気を知ることで一日をより賢く過ごせます。",
        saju_elements_title: "五行のエネルギーと意味",
        saju_wood_desc: "🌳 木 — 成長・創造力・柔軟性。新しい始まりと発展のエネルギー。",
        saju_fire_desc: "🔥 火 — 情熱・活気・コミュニケーション。積極的で明るいエネルギー。",
        saju_earth_desc: "⛰️ 土 — 安定・信頼・中庸。バランスのとれた現実的なエネルギー。",
        saju_metal_desc: "💎 金 — 決断・正確さ・原則。鋭く集中したエネルギー。",
        saju_water_desc: "💧 水 — 知恵・適応力・深さ。柔軟で洞察力あるエネルギー。",
        zodiac_info_title: "干支占いとは？",
        zodiac_info_body: "十二支は東アジアの伝統で時間・方位・運命を表す12の動物の象徴です。生まれた年によって固有のエネルギーを持ち、AIがあなたの干支の特性と今日のエネルギーを融合させて、オーダーメイドの運勢を分析します。",
        zodiac_animals_title: "十二支と特性",
        zodiac_rat: "🐭 子（ねずみ）— 賢さ・適応力", zodiac_ox: "🐮 丑（うし）— 勤勉・忍耐",
        zodiac_tiger: "🐯 寅（とら）— 勇気・リーダーシップ", zodiac_rabbit: "🐰 卯（うさぎ）— 温和・幸運",
        zodiac_dragon: "🐲 辰（たつ）— カリスマ・野心", zodiac_snake: "🐍 巳（へび）— 知恵・直感",
        zodiac_horse: "🐴 午（うま）— 活気・自由", zodiac_goat: "🐑 未（ひつじ）— 温順・創作",
        zodiac_monkey: "🐵 申（さる）— 機知・多才", zodiac_rooster: "🐔 酉（とり）— 勤勉・几帳面",
        zodiac_dog: "🐶 戌（いぬ）— 忠実さ・正義", zodiac_pig: "🐷 亥（いのしし）— 福・寛大さ",
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
    if (!text || text === '-') return text;
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

// Fetch Ohaasa Data via Direct Call (Firebase API bypass)
async function fetchOhaasaData(forceRefresh = false) {
    const today = new Date().toISOString().split('T')[0];
    const cachedData = localStorage.getItem('ohaasa_data');
    const cachedDate = localStorage.getItem('ohaasa_date');

    if (new Date().getDay() === 0 && cachedData) {
        return JSON.parse(cachedData);
    }

    if (!forceRefresh && cachedData && cachedDate === today) {
        return JSON.parse(cachedData);
    }

    try {
        const res = await fetch("https://www.asahi.co.jp/data/ohaasa2020/horoscope.json");
        const json = await res.json();
        const entry = json[0];
        
        const ST_TO_ZODIAC = {
            "01": "おひつじ座", "02": "おうし座", "03": "ふたご座", "04": "かに座",
            "05": "しし座", "06": "おとめ座", "07": "てんびん座", "08": "さそ리座",
            "09": "いて座", "10": "やぎ座", "11": "みずがめ座", "12": "うお座"
        };

        const onairDate = entry.onair_date;
        const formattedDate = `${onairDate.slice(0,4)}-${onairDate.slice(4,6)}-${onairDate.slice(6,8)}`;
        const prevOnairDate = localStorage.getItem('ohaasa_onair_date');
        localStorage.setItem('ohaasa_html_changed', formattedDate !== prevOnairDate ? 'true' : 'false');
        localStorage.setItem('ohaasa_onair_date', formattedDate);

        const data = {};
        for (const detail of entry.detail) {
            const zodiac = ST_TO_ZODIAC[detail.horoscope_st];
            if (!zodiac) continue;
            const parts = detail.horoscope_text.split("\t");
            data[zodiac] = {
                rank: parseInt(detail.ranking_no),
                content: parts.slice(0, 3).filter(p => p.trim()).join(" "),
                item: parts[3]?.trim() || "-",
                color: "-"
            };
        }

        localStorage.setItem('ohaasa_data', JSON.stringify(data));
        localStorage.setItem('ohaasa_date', today);
        return data;
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
            if (currentLang !== 'ja') {
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
        const elementsMap = {
            ko: ["🌳 나무 (木)", "🔥 불 (火)", "⛰️ 흙 (土)", "💎 금 (金)", "💧 물 (水)"],
            en: ["🌳 Wood (木)", "🔥 Fire (火)", "⛰️ Earth (土)", "💎 Metal (金)", "💧 Water (水)"],
            ja: ["🌳 木 (木)", "🔥 火 (火)", "⛰️ 土 (土)", "💎 金 (金)", "💧 水 (水)"]
        };
        const elements = elementsMap[currentLang] || elementsMap.ko;
        const sajuIdx = Math.floor(seededRandom(seed) * elements.length);
        document.getElementById('elem-value').innerText = elements[sajuIdx];
        document.getElementById('saju-desc').innerText = t('loading_fortune');
        await fetchAIFortune('saju', document.getElementById('saju-desc'));
    }

    if (type === 'zodiac') {
        const year = parseInt(globalBirthdate.split('-')[0]);
        const zodiacIdx = (year - 4) % 12;
        const zodiac = data.zodiacs[zodiacIdx];
        const zodiacDisplayName = currentLang === 'en' ? zodiac.en : (currentLang === 'ja' ? zodiac.ja : zodiac.name);
        document.getElementById('zodiac-icon').innerText = zodiac.icon;
        document.getElementById('zodiac-name').innerText = `${zodiacDisplayName} (${t('zodiac_basis')})`;
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
