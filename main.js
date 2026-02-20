const data = {
    tarot: [
        // Major Arcana (22)
        { name: "0. The Fool (광대)", icon: "🃏", desc: "새로운 시작, 자유로움, 모험, 순수함. 두려워 말고 새로운 길을 나서보세요." },
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

        // Wands (지팡이 - 열정, 행동)
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

        // Cups (컵 - 감정, 관계)
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

        // Swords (검 - 이성, 논리)
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

        // Pentacles (펜타클 - 물질, 현실)
        { name: "Ace of Pentacles", icon: "💰", desc: "기회, 풍요, 현실적 시작. 금전적인 이득이나 기회가 찾아옵니다." },
        { name: "Two of Pentacles", icon: "💰", desc: "균형, 융통성, 변화. 여러 상황을 능숙하게 조율해야 하는 날입니다." },
        { name: "Three of Pentacles", icon: "💰", desc: "협력, 기술, 성과. 팀워크를 통해 전문성을 인정받게 됩니다." },
        { name: "Four of Pentacles", icon: "💰", desc: "소유욕, 보수적, 안정. 가진 것을 지키는 것도 좋지만 집착은 금물입니다." },
        { name: "Five of Pentacles", icon: "💰", desc: "곤경, 고립, 손실. 주변에 도움을 청하면 해결책을 찾을 수 있습니다." },
        { name: "Six of Pentacles", icon: "💰", desc: "자선, 관용, 균형. 베풀고 받는 과정에서 조화를 이루는 날입니다." },
        { name: "Seven of Pentacles", icon: "💰", desc: "인내, 수확 대기, 평가. 지금까지의 노력을 돌아보고 점검하세요." },
        { name: "Eight of Pentacles", icon: "💰", desc: "숙련, 성실, 전문성. 맡은 바 일에 집중하면 큰 성과를 거둡니다." },
        { name: "Nine of Pentacles", icon: "💰", desc: "풍요, 여유, 독립적 성공. 스스로 일궈낸 성취를 마음껏 즐기세요." },
        { name: "Ten of Pentacles", icon: "💰", desc: "유산, 완성, 가정의 번영. 장기적인 관점에서 안정을 이룩하게 됩니다." },
        { name: "Page of Pentacles", icon: "💰", desc: "신중함, 기회, 배움. 현실적인 목표를 세우고 차근차근 시작하세요." },
        { name: "Knight of Pentacles", icon: "💰", desc: "성실함, 신뢰, 책임감. 서두르지 말고 꼼꼼하게 처리하는 것이 좋습니다." },
        { name: "Queen of Pentacles", icon: "💰", desc: "현실적 조언, 풍요, 실질적 도움. 따뜻하고 든든한 지원군을 얻습니다." },
        { name: "King of Pentacles", icon: "💰", desc: "부, 안정성, 실질적 성과. 노력의 대가로 큰 보상을 얻는 날입니다." }
    ],
    items: ["빨간색 펜", "노트북", "은색 반지", "향수", "작은 거울", "파란색 텀블러", "이어폰", "책"],
    colors: ["금색", "보라색", "에메랄드", "진분홍", "남색", "주황색", "흰색", "검은색"],
    constellations: [
        { 
            name: "양자리 (3.21-4.19)", icon: "♈", desc: "오늘은 열정이 넘치는 하루입니다. 새로운 도전에 임해보세요.",
            points: [[20,50], [50,40], [80,45], [90,60]], lines: [[0,1], [1,2], [2,3]]
        },
        { 
            name: "황소자리 (4.20-5.20)", icon: "♉", desc: "안정적인 기운이 감도는 날입니다. 금전적인 이득이 예상됩니다.",
            points: [[10,20], [30,40], [50,50], [70,40], [90,20], [50,80]], lines: [[0,1], [1,2], [2,3], [3,4], [2,5]]
        },
        { 
            name: "쌍둥이자리 (5.21-6.21)", icon: "♊", desc: "대인관계에서 활발한 소통이 이루어지는 즐거운 날입니다.",
            points: [[30,20], [30,80], [70,20], [70,80], [30,50], [70,50]], lines: [[0,1], [2,3], [0,2], [4,5], [1,3]]
        },
        { 
            name: "게자리 (6.22-7.22)", icon: "♋", desc: "가족이나 가까운 이들과 따뜻한 시간을 보내기에 좋습니다.",
            points: [[50,10], [50,40], [20,70], [80,70]], lines: [[0,1], [1,2], [1,3]]
        },
        { 
            name: "사자자리 (7.23-8.22)", icon: "♌", desc: "주목받는 하루입니다. 당신의 매력을 한껏 발산해보세요.",
            points: [[80,80], [40,80], [20,60], [20,40], [40,20], [60,20], [80,40]], lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6]]
        },
        { 
            name: "처녀자리 (8.23-9.23)", icon: "♍", desc: "꼼꼼한 일 처리가 빛을 발하는 날입니다. 성과가 좋습니다.",
            points: [[20,20], [40,40], [60,40], [80,20], [40,70], [60,70]], lines: [[0,1], [1,2], [2,3], [1,4], [4,5], [5,2]]
        },
        { 
            name: "천칭자리 (9.24-10.22)", icon: "♎", desc: "조화와 균형이 필요한 날입니다. 중재자 역할을 잘 수행할 것입니다.",
            points: [[50,20], [20,50], [50,80], [80,50]], lines: [[0,1], [1,2], [2,3], [3,0]]
        },
        { 
            name: "전갈자리 (10.23-11.22)", icon: "♏", desc: "직관력이 예리해지는 날입니다. 숨겨진 진실을 발견할 수 있습니다.",
            points: [[20,20], [40,20], [40,50], [60,70], [80,60], [90,40]], lines: [[0,1], [1,2], [2,3], [3,4], [4,5]]
        },
        { 
            name: "사수자리 (11.23-12.24)", icon: "♐", desc: "여행이나 외출에 행운이 따릅니다. 시야를 넓혀보세요.",
            points: [[20,80], [50,20], [80,80], [30,50], [70,50]], lines: [[0,1], [1,2], [3,4]]
        },
        { 
            name: "염소자리 (12.25-1.19)", icon: "♑", desc: "목표를 향해 한 걸음 더 나아가는 성실한 하루가 될 것입니다.",
            points: [[20,30], [50,80], [80,30], [50,20]], lines: [[0,1], [1,2], [2,3], [3,0]]
        },
        { 
            name: "물병자리 (1.20-2.18)", icon: "♒", desc: "창의적인 아이디어가 돋보이는 날입니다. 독창성을 유지하세요.",
            points: [[10,30], [30,50], [50,30], [70,50], [90,30], [10,60], [30,80], [50,60], [70,80], [90,60]], lines: [[0,1], [1,2], [2,3], [3,4], [5,6], [6,7], [7,8], [8,9]]
        },
        { 
            name: "물고기자리 (2.19-3.20)", icon: "♓", desc: "감수성이 풍부해지는 날입니다. 예술적인 활동에 좋습니다.",
            points: [[20,20], [50,50], [80,20], [50,80]], lines: [[0,1], [1,2], [1,3]]
        }
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

// State
let globalBirthdate = "";
let isTarotDrawn = false;

// Helper Functions
function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function getSeed() {
    const today = new Date();
    const todayStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return (globalBirthdate ? parseInt(globalBirthdate.replace(/-/g, '')) : 0) + parseInt(todayStr.replace(/-/g, ''));
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
        const year = birthInput.split('-')[0];

        if (target !== 'home') {
            if (!birthInput) {
                alert('먼저 생년월일을 입력해주세요!');
                switchView('home');
                return;
            }
            if (year.length !== 4) {
                alert('연도는 4자리(예: 1990)로 입력해주세요!');
                switchView('home');
                return;
            }
        }
        globalBirthdate = birthInput;
        switchView(target);
    });
});

document.getElementById('home-btn').addEventListener('click', () => switchView('home'));

// Fortune Logic
function updateFortune(type) {
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
        document.getElementById('const-desc').innerText = constellation.desc;
        document.getElementById('luck-item').innerText = data.items[Math.floor(seededRandom(seed) * data.items.length)];
        document.getElementById('luck-color').innerText = data.colors[Math.floor(seededRandom(seed + 1) * data.colors.length)];

        // Draw Constellation SVG
        drawConstellation(constellation);
    }

    if (type === 'saju') {
        const elements = ["🌳 나무 (木)", "🔥 불 (火)", "⛰️ 흙 (土)", "💎 금 (金)", "💧 물 (水)"];
        const sajuIdx = Math.floor(seededRandom(seed) * elements.length);
        const sajuDescs = [
            "당신은 성장과 발전의 기운이 강합니다. 새로운 시작에 길한 날입니다.",
            "열정과 에너지가 넘치는 날입니다. 주변 사람들에게 밝은 기운을 전하세요.",
            "안정과 포용력이 돋보이는 날입니다. 기초를 튼튼히 다지기에 좋습니다.",
            "결단력과 냉철함이 필요한 날입니다. 중요한 결정을 내리기에 적기입니다.",
            "지혜와 유연함이 빛을 발하는 날입니다. 상황에 맞춰 유연하게 대처하세요."
        ];
        document.getElementById('elem-main').innerHTML = `오늘의 기운: <span>${elements[sajuIdx]}</span>`;
        document.getElementById('saju-desc').innerText = sajuDescs[sajuIdx];
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
    
    const width = 300;
    const height = 250;
    
    let svgContent = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    
    // Draw Lines
    constellation.lines.forEach(line => {
        const p1 = constellation.points[line[0]];
        const p2 = constellation.points[line[1]];
        const x1 = (p1[0] * width) / 100;
        const y1 = (p1[1] * height) / 100;
        const x2 = (p2[0] * width) / 100;
        const y2 = (p2[1] * height) / 100;
        svgContent += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="const-line" />`;
    });
    
    // Draw Dots
    constellation.points.forEach((p, i) => {
        const x = (p[0] * width) / 100;
        const y = (p[1] * height) / 100;
        svgContent += `<circle cx="${x}" cy="${y}" r="3" class="const-dot" style="animation-delay: ${i * 0.1}s" />`;
    });
    
    svgContent += `</svg>`;
    container.innerHTML = svgContent;
}

// Tarot Interaction
const tarotCard = document.getElementById('tarot-card');
const tarotResult = document.getElementById('tarot-result');
const tarotName = document.getElementById('tarot-name');
const tarotIcon = document.getElementById('tarot-card-image');
const tarotDesc = document.getElementById('tarot-desc');

if (tarotCard) {
    tarotCard.addEventListener('click', function() {
        if (isTarotDrawn) return;
        
        isTarotDrawn = true;
        const seed = getSeed() + 777;
        const tarotIdx = Math.floor(seededRandom(seed) * data.tarot.length);
        const card = data.tarot[tarotIdx];

        // Setup card content before flip completes
        tarotName.innerText = card.name;
        tarotIcon.innerText = card.icon;
        tarotDesc.innerText = card.desc;

        this.classList.add('flipped');
        
        setTimeout(() => {
            tarotResult.classList.remove('hidden');
        }, 800);
    });
}

// Initial Background Stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = star.style.height = `${Math.random() * 2 + 1}px`;
        star.style.opacity = Math.random();
        starsContainer.appendChild(star);
    }
}
createStars();
