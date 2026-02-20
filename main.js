const fortunes = {
    general: [
        "오늘은 새로운 시작을 하기에 아주 좋은 날입니다. 망설이지 마세요.",
        "주변 사람들의 조언에 귀를 기울이면 뜻밖의 행운이 찾아옵니다.",
        "조금 쉬어가는 것이 더 멀리 가기 위한 지름길이 될 수 있습니다.",
        "자신감을 가지고 당당하게 행동하세요. 당신의 매력이 빛나는 날입니다.",
        "뜻밖의 소식이 찾아와 당신의 하루를 즐겁게 만들어 줄 것입니다.",
        "인내심이 필요한 날입니다. 서두르면 일을 그르칠 수 있으니 주의하세요."
    ],
    love: [
        "가까운 곳에 당신을 지켜보는 따뜻한 시선이 느껴지는 날입니다.",
        "솔직한 대화가 관계를 더욱 깊게 만들어 줄 것입니다.",
        "오늘은 혼자만의 시간을 가지며 자신을 사랑하는 법을 배워보세요.",
        "새로운 인연이 나타날 가능성이 높은 날입니다. 열린 마음을 가지세요.",
        "상대방의 배려에 감사함을 표현하면 더 큰 사랑으로 돌아옵니다.",
        "사소한 오해가 생길 수 있으니 감정적인 대응은 자제하는 것이 좋습니다."
    ],
    money: [
        "금전운이 상승 곡선을 그리고 있습니다. 작은 투자도 좋습니다.",
        "불필요한 지출을 줄여야 하는 날입니다. 계획적인 소비가 필요합니다.",
        "생각지도 못한 곳에서 소소한 수익이 발생할 수 있습니다.",
        "중요한 계약이나 거래가 성사될 기운이 강한 날입니다.",
        "빌려준 돈을 돌려받거나 보너스를 기대해 볼 수 있는 날입니다.",
        "지금은 저축할 때입니다. 미래를 위한 준비를 시작하세요."
    ],
    work: [
        "당신의 능력이 인정받는 날입니다. 추진 중인 일을 마무리하세요.",
        "동료와의 협력이 큰 성과를 가져다줄 것입니다.",
        "새로운 아이디어가 샘솟는 날입니다. 메모하는 습관을 가져보세요.",
        "집중력이 최고조에 달하는 날입니다. 어려운 과제를 해결해보세요.",
        "주변의 시기나 질투가 있을 수 있으니 겸손한 태도를 유지하세요.",
        "오늘은 실수를 조심해야 합니다. 보고서나 이메일을 다시 한번 확인하세요."
    ]
};

// Seeded Random Generator to ensure same results for same date/DOB
function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

document.getElementById('get-fortune-btn').addEventListener('click', () => {
    const birthdateInput = document.getElementById('birthdate').value;
    
    if (!birthdateInput) {
        alert('생년월일을 선택해주세요!');
        return;
    }

    const today = new Date();
    const todayStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const seed = parseInt(birthdateInput.replace(/-/g, '')) + parseInt(todayStr.replace(/-/g, ''));
    
    generateFortune(seed, birthdateInput);
});

function generateFortune(seed, dob) {
    const inputSection = document.getElementById('input-section');
    const resultSection = document.getElementById('result-section');
    const userInfoDisplay = document.getElementById('user-info-display');
    const luckScoreDisplay = document.getElementById('luck-score');

    // Select fortunes based on seed
    const genIdx = Math.floor(seededRandom(seed) * fortunes.general.length);
    const loveIdx = Math.floor(seededRandom(seed + 1) * fortunes.love.length);
    const moneyIdx = Math.floor(seededRandom(seed + 2) * fortunes.money.length);
    const workIdx = Math.floor(seededRandom(seed + 3) * fortunes.work.length);
    const starCount = Math.floor(seededRandom(seed + 4) * 3) + 3; // 3 to 5 stars

    // Update DOM
    document.getElementById('general-fortune').innerText = fortunes.general[genIdx];
    document.getElementById('love-fortune').innerText = fortunes.love[loveIdx];
    document.getElementById('money-fortune').innerText = fortunes.money[moneyIdx];
    document.getElementById('work-fortune').innerText = fortunes.work[workIdx];
    
    userInfoDisplay.innerText = `${dob}생 당신의 오늘`;
    luckScoreDisplay.innerText = '★'.repeat(starCount) + '☆'.repeat(5 - starCount);

    // Toggle sections with animation
    inputSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
}

document.getElementById('retry-btn').addEventListener('click', () => {
    document.getElementById('input-section').classList.remove('hidden');
    document.getElementById('result-section').classList.add('hidden');
});

// Dynamic Stars Background
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--delay', `${delay}s`);
        
        starsContainer.appendChild(star);
    }
}

// Add Star CSS dynamically
const starStyle = document.createElement('style');
starStyle.innerHTML = `
    .star {
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        opacity: 0.5;
        animation: twinkle var(--duration) infinite ease-in-out var(--delay);
    }
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.5); box-shadow: 0 0 5px white; }
    }
`;
document.head.appendChild(starStyle);

createStars();
