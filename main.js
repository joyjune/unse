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
        { name: "양자리 (3.21-4.19)", icon: "♈", representative: "🐏", jp: "おひつじ座" },
        { name: "황소자리 (4.20-5.20)", icon: "♉", representative: "🐂", jp: "おうし座" },
        { name: "쌍둥이자리 (5.21-6.21)", icon: "♊", representative: "👥", jp: "ふたご座" },
        { name: "게자리 (6.22-7.22)", icon: "♋", representative: "🦀", jp: "かに座" },
        { name: "사자자리 (7.23-8.22)", icon: "♌", representative: "🦁", jp: "しし座" },
        { name: "처녀자리 (8.23-9.23)", icon: "♍", representative: "👧", jp: "おとめ座" },
        { name: "천칭자리 (9.24-10.22)", icon: "♎", representative: "⚖️", jp: "てんびん座" },
        { name: "전갈자리 (10.23-11.22)", icon: "♏", representative: "🦂", jp: "さそり座" },
        { name: "사수자리 (11.23-12.24)", icon: "♐", representative: "🏹", jp: "いて座" },
        { name: "염소자리 (12.25-1.19)", icon: "♑", representative: "🐐", jp: "やぎ座" },
        { name: "물병자리 (1.20-2.18)", icon: "♒", representative: "🏺", jp: "みず가め座" },
        { name: "물고기자리 (2.19-3.20)", icon: "♓", representative: "🐟", jp: "うお座" }
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

// Global State
let globalBirthdate = "";
let isTarotDrawn = false;
let ohaasaUpdateTimer = null;

// Simple hash for HTML change detection
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return hash.toString(36);
}

// Fetch Ohaasa Data with Caching and Auto-Update
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
        const url = 'https://www.asahi.co.jp/ohaasa/week/horoscope/index.html';
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        const responseData = await response.json();
        const html = responseData.contents;

        // HTML 해시로 변경 감지
        const newHash = simpleHash(html);
        const prevHash = localStorage.getItem('ohaasa_html_hash');
        localStorage.setItem('ohaasa_html_changed', newHash !== prevHash ? 'true' : 'false');
        localStorage.setItem('ohaasa_html_hash', newHash);

        // Auto-Parsing Logic
        const results = {};
        const zodiacs = ["おひつじ座", "おうし座", "ふたご座", "かに座", "しし座", "おとめ座", "てんびん座", "さそり座", "いて座", "やぎ座", "みずがめ座", "うお座"];
        
        zodiacs.forEach(z => {
            try {
                const rankMatch = html.match(new RegExp(`(\\d+)位.*?${z}`, 's')) || 
                                  html.match(new RegExp(`${z}.*?(\\d+)位`, 's'));
                
                const contentMatch = html.match(new RegExp(`${z}.*?<p>(.*?)</p>`, 's'));
                
                if (rankMatch || contentMatch) {
                    results[z] = {
                        rank: rankMatch ? parseInt(rankMatch[1]) : 8,
                        content: contentMatch ? contentMatch[1].replace(/<[^>]*>/g, '').trim() : "운세 정보를 읽어오는 중입니다.",
                        item: "사이트 참조",
                        color: "-"
                    };
                }
            } catch (innerE) {
                console.warn(`Parsing failed for ${z}`, innerE);
            }
        });

        if (Object.keys(results).length > 5) {
            localStorage.setItem('ohaasa_data', JSON.stringify(results));
            localStorage.setItem('ohaasa_date', today);
            return results;
        }

        // Fallback Data (Last known state or default)
        const fallbackData = {
            "うお座": { rank: 1, content: "자신의 성장을 실감할 수 있는 날! 자신감을 갖고 전진하세요.", item: "새로운 필기구", color: "핑크" },
            "かに座": { rank: 2, content: "협력자가 나타나 일이 술술 풀립니다. 감사한 마음을 전하세요.", item: "손수건", color: "옐로우" },
            "さそり座": { rank: 3, content: "직관력이 날카로워지는 날. 당신의 선택이 정답입니다.", item: "안경", color: "블루" },
            "おひつじ座": { rank: 4, content: "마음에 드는 가게를 만날 수 있을 것 같아요. 배송 상품과도 인연이 있어요.", item: "러그 매트", color: "오렌지" },
            "てんびん座": { rank: 5, content: "친구의 서포트에 기대 대만족♪ 고민이 있다면 사양 말고 상담을.", item: "파카", color: "그린" },
            "みずがめ座": { rank: 6, content: "새로운 한 걸음을 내딛을 수 있는 날. 도전 정신을 소중히.", item: "방울", color: "실버" },
            "ふたご座": { rank: 7, content: "실력을 발휘할 기회! 리더 역할을 자처하면 ◎", item: "뉴스 앱", color: "화이트" },
            "しし座": { rank: 8, content: "즐거운 하루를 보낼 수 있는 예감. 마음이 맞는 동료와 교류하세요.", item: "안약", color: "레드" },
            "おとめ座": { rank: 9, content: "고액 쇼핑에 주의가 필요. 갖고 싶어도 지금은 참으세요.", item: "꽃씨", color: "베이지" },
            "やぎ座": { rank: 10, content: "자기주장이 강해질지도. 상대방의 이야기에도 귀를 기울이도록.", item: "스키야키", color: "브라운" },
            "いて座": { rank: 11, content: "미적 감각이 높아질지도. 새로운 코디를 생각해보세요.", item: "들판", color: "네이비" },
            "おうし座": { rank: 12, content: "무엇을 해도 헛수고... 일단 마음을 가라앉히고 오늘은 마이페이스로 지내자.", item: "서류 정리", color: "그레이" }
        };

        localStorage.setItem('ohaasa_data', JSON.stringify(fallbackData));
        localStorage.setItem('ohaasa_date', today);
        return fallbackData;
    } catch (e) {
        console.error("Ohaasa Fetch Error:", e);
        return null;
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
            console.log('[오하아사] 8시 데이터 미변경, 8시 30분 재시도 예약');
            const now = new Date();
            const eightThirtyAM = new Date(now);
            eightThirtyAM.setHours(8, 30, 0, 0);
            if (now < eightThirtyAM) {
                scheduleOhaasaAt(8, 30, () => triggerOhaasaUpdate('830am'));
            } else {
                await triggerOhaasaUpdate('830am');
            }
        }
    } else {
        // 8:30 슬롯 완료 — 오늘 업데이트 종료
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
    const done830am = localStorage.getItem('ohaasa_done_830am') === today;

    const eightAM = new Date(now);
    eightAM.setHours(8, 0, 0, 0);
    const eightThirtyAM = new Date(now);
    eightThirtyAM.setHours(8, 30, 0, 0);

    if (now < eightAM) {
        // 8시 이전 → 8시에 예약
        scheduleOhaasaAt(8, 0, () => triggerOhaasaUpdate('8am'));
    } else if (!done8am) {
        // 8시 이후이지만 오늘 8시 업데이트 미실행 → 즉시 실행
        await triggerOhaasaUpdate('8am');
    } else if (!done830am) {
        // 8시 업데이트 완료, 8:30 재시도 여부 확인
        const htmlChanged = localStorage.getItem('ohaasa_html_changed') === 'true';
        if (!htmlChanged) {
            if (now < eightThirtyAM) {
                scheduleOhaasaAt(8, 30, () => triggerOhaasaUpdate('830am'));
            } else {
                await triggerOhaasaUpdate('830am');
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
    
    document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.toggle('active', n.getAttribute('data-target') === target);
    });

    if (target !== 'home') updateFortune(target);
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        const birthInput = document.getElementById('birthdate-global').value;
        if (target !== 'home' && (!birthInput || birthInput.split('-')[0].length !== 4)) {
            alert('올바른 생년월일을 입력해주세요!');
            return;
        }
        globalBirthdate = birthInput;
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
        document.getElementById('const-name').innerText = constellation.name;
        document.getElementById('const-desc').innerText = "오늘의 별자리 정보를 가져오는 중...";
        
        const ohaasaData = await fetchOhaasaData();
        const myFortune = ohaasaData ? ohaasaData[constellation.jp] : null;
        
        if (myFortune) {
            document.getElementById('const-name').innerText = `${constellation.name} (순위: ${myFortune.rank}위)`;
            document.getElementById('const-desc').innerText = myFortune.content;
            document.getElementById('luck-item').innerText = myFortune.item || "사이트 참조";
            document.getElementById('luck-color').innerText = myFortune.color || "-";
        } else {
            document.getElementById('const-desc').innerText = "데이터를 가져오지 못했습니다. 잠시 후 다시 시도해주세요.";
        }

        drawConstellation(constellation);
    }

    if (type === 'saju') {
        const elements = ["🌳 나무 (木)", "🔥 불 (火)", "⛰️ 흙 (土)", "💎 금 (金)", "💧 물 (水)"];
        const sajuIdx = Math.floor(seededRandom(seed) * elements.length);
        document.getElementById('elem-main').innerHTML = `오늘의 기운: <span>${elements[sajuIdx]}</span>`;
        document.getElementById('saju-desc').innerText = "당신의 생년월일과 오늘의 기운을 분석한 결과입니다.";
    }

    if (type === 'zodiac') {
        const year = parseInt(globalBirthdate.split('-')[0]);
        const zodiacIdx = (year - 4) % 12;
        const zodiac = data.zodiacs[zodiacIdx];
        document.getElementById('zodiac-icon').innerText = zodiac.icon;
        document.getElementById('zodiac-name').innerText = `${zodiac.name} (출생연도 기준)`;
        document.getElementById('zodiac-desc').innerText = data.zodiacDesc[Math.floor(seededRandom(seed) * data.zodiacDesc.length)];
    }
}

function drawConstellation(constellation) {
    const container = document.getElementById('const-visual');
    if (!container) return;
    container.innerHTML = `<div class="representative-icon" style="font-size: 8rem; animation: float 3s ease-in-out infinite;">${constellation.representative}</div>`;
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

// Tarot
const tarotCard = document.getElementById('tarot-card');
const tarotResult = document.getElementById('tarot-result');
if (tarotCard) {
    tarotCard.addEventListener('click', function() {
        if (isTarotDrawn) return;
        isTarotDrawn = true;
        const seed = getSeed() + 777;
        const tarotIdx = Math.floor(seededRandom(seed) * data.tarot.length);
        const card = data.tarot[tarotIdx];
        document.getElementById('tarot-name').innerText = card.name;
        document.getElementById('tarot-card-image').innerText = card.icon;
        document.getElementById('tarot-desc').innerText = card.desc;
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

// 오하아사 자동 업데이트 스케줄 시작
scheduleOhaasaAutoUpdate();
