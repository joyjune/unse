const data = {
    tarot: [
        { name: "The Fool (광대)", desc: "새로운 시작, 자유로운 영혼, 모험의 시작을 의미합니다. 두려움 없이 나아가세요." },
        { name: "The Magician (마법사)", desc: "창의력, 능력, 의지력을 상징합니다. 당신의 기술을 발휘할 때입니다." },
        { name: "The High Priestess (고위 여사제)", desc: "직관, 신비, 내면의 지혜를 의미합니다. 마음의 소리에 귀를 기울이세요." },
        { name: "The Empress (황후)", desc: "풍요, 모성, 창조를 상징합니다. 주변의 사랑과 풍요를 만끽하세요." },
        { name: "The Emperor (황제)", desc: "권위, 구조, 안정성을 의미합니다. 리더십을 발휘하여 상황을 통제하세요." },
        { name: "The Lovers (연인)", desc: "사랑, 조화, 선택을 상징합니다. 중요한 관계나 결정을 앞두고 있나요?" }
    ],
    items: ["빨간색 펜", "노트북", "은색 반지", "향수", "작은 거울", "파란색 텀블러", "이어폰", "책"],
    colors: ["금색", "보라색", "에메랄드", "진분홍", "남색", "주황색", "흰색", "검은색"],
    constellations: [
        { name: "양자리 (3.21-4.19)", desc: "오늘은 열정이 넘치는 하루입니다. 새로운 도전에 임해보세요." },
        { name: "황소자리 (4.20-5.20)", desc: "안정적인 기운이 감도는 날입니다. 금전적인 이득이 예상됩니다." },
        { name: "쌍둥이자리 (5.21-6.21)", desc: "대인관계에서 활발한 소통이 이루어지는 즐거운 날입니다." },
        { name: "게자리 (6.22-7.22)", desc: "가족이나 가까운 이들과 따뜻한 시간을 보내기에 좋습니다." },
        { name: "사자자리 (7.23-8.22)", desc: "주목받는 하루입니다. 당신의 매력을 한껏 발산해보세요." },
        { name: "처녀자리 (8.23-9.23)", desc: "꼼꼼한 일 처리가 빛을 발하는 날입니다. 성과가 좋습니다." },
        { name: "천칭자리 (9.24-10.22)", desc: "조화와 균형이 필요한 날입니다. 중재자 역할을 잘 수행할 것입니다." },
        { name: "전갈자리 (10.23-11.22)", desc: "직관력이 예리해지는 날입니다. 숨겨진 진실을 발견할 수 있습니다." },
        { name: "사수자리 (11.23-12.24)", desc: "여행이나 외출에 행운이 따릅니다. 시야를 넓혀보세요." },
        { name: "염소자리 (12.25-1.19)", desc: "목표를 향해 한 걸음 더 나아가는 성실한 하루가 될 것입니다." },
        { name: "물병자리 (1.20-2.18)", desc: "창의적인 아이디어가 돋보이는 날입니다. 독창성을 유지하세요." },
        { name: "물고기자리 (2.19-3.20)", desc: "감수성이 풍부해지는 날입니다. 예술적인 활동에 좋습니다." }
    ],
    zodiacs: ["쥐띠", "소띠", "호랑이띠", "토끼띠", "용띠", "뱀띠", "말띠", "양띠", "원숭이띠", "닭띠", "개띠", "돼지띠"],
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
    const rand = seededRandom(seed);

    if (type === 'constellation') {
        const birthMonth = parseInt(globalBirthdate.split('-')[1]);
        const birthDay = parseInt(globalBirthdate.split('-')[2]);
        let constIdx = 0;
        // Simple Constellation Logic
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

        document.getElementById('const-name').innerText = data.constellations[constIdx].name;
        document.getElementById('const-desc').innerText = data.constellations[constIdx].desc;
        document.getElementById('luck-item').innerText = data.items[Math.floor(seededRandom(seed) * data.items.length)];
        document.getElementById('luck-color').innerText = data.colors[Math.floor(seededRandom(seed + 1) * data.colors.length)];
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
        document.getElementById('zodiac-name').innerText = `${data.zodiacs[zodiacIdx]} (출생연도 기준)`;
        document.getElementById('zodiac-desc').innerText = data.zodiacDesc[Math.floor(seededRandom(seed) * data.zodiacDesc.length)];
    }
}

// Tarot Interaction
document.getElementById('draw-tarot').addEventListener('click', function() {
    const resultBox = document.getElementById('tarot-result');
    const nameDisplay = document.getElementById('tarot-name');
    const descDisplay = document.getElementById('tarot-desc');
    
    this.style.transform = "rotateY(180deg)";
    
    setTimeout(() => {
        const seed = getSeed() + 99; // Extra offset for tarot
        const tarotIdx = Math.floor(seededRandom(seed) * data.tarot.length);
        const card = data.tarot[tarotIdx];
        
        nameDisplay.innerText = card.name;
        descDisplay.innerText = card.desc;
        resultBox.classList.remove('hidden');
        this.innerText = "🃏";
    }, 500);
});

// Initial Background Stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
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
