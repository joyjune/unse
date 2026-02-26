const data = {
    tarot: [
        // Major Arcana (22)
        { name: "0. The Fool (광대)", icon: "🃏", desc: "새로운 여정의 시작을 알리는 카드입니다. 순수한 마음과 무한한 가능성을 상징하며, 당신에게 고정관념에서 벗어나 자유롭게 행동할 것을 권합니다. 오늘 하루는 결과에 대한 두려움보다는 과정의 즐거움에 집중해 보세요. 당신 앞에 펼쳐진 낯선 길은 생각보다 훨씬 멋진 기회를 숨기고 있습니다." },
        { name: "I. The Magician (마법사)", icon: "✨", desc: "창의력과 실천력이 최고조에 달하는 날입니다. 당신은 이미 필요한 모든 도구와 능력을 갖추고 있습니다. 미뤄왔던 아이디어가 있다면 오늘 바로 시작해 보세요. 당신의 강한 의지가 무에서 유를 창조하는 놀라운 결과로 이어질 것입니다. 자신감을 가지고 주도적으로 상황을 이끄세요." },
        { name: "II. The High Priestess (고위 여사제)", icon: "🌙", desc: "내면의 목소리에 귀를 기울여야 하는 정적인 시기입니다. 겉으로 드러난 현상보다 이면에 숨겨진 진실을 꿰뚫어 보는 직관력이 빛을 발할 것입니다. 오늘은 성급한 결정보다는 한발 물러나 상황을 관망하는 것이 현명합니다. 명상이나 독서를 통해 지혜를 쌓고 마음의 평화를 유지하세요." },
        { name: "III. The Empress (황후)", icon: "👸", desc: "풍요와 결실, 그리고 따뜻한 포용력을 상징합니다. 노력해온 일에서 만족스러운 성과를 거두거나 주변 사람들과 정서적인 풍요로움을 나누게 될 것입니다. 창의적인 활동이나 예술적인 감각을 발휘하기에도 아주 좋은 날입니다. 자신을 사랑하고 아끼는 마음이 행운을 불러오는 열쇠가 됩니다." },
        { name: "IV. The Emperor (황제)", icon: "👑", desc: "강력한 리더십과 질서, 안정성을 의미합니다. 오늘은 계획을 구체화하고 체계적으로 실행에 옮겨야 할 때입니다. 감정보다는 이성적인 판단이 필요하며, 책임감 있는 태도가 신뢰를 구축할 것입니다. 당신의 권위와 능력을 인정받을 기회가 생길 수 있으니, 당당하고 흔들림 없는 모습을 보여주세요." },
        { name: "V. The Hierophant (교황)", icon: "⛪", desc: "전통과 원칙, 그리고 현명한 가르침을 상징합니다. 혼자 고민하기보다는 경험 많은 선배나 멘토의 조언을 구하는 것이 큰 도움이 될 것입니다. 규칙을 준수하고 기본에 충실할 때 가장 안전하고 확실한 길을 찾을 수 있습니다. 주변 사람들과의 소통에서 중재자 역할을 하게 될 수도 있는 날입니다." },
        { name: "VI. The Lovers (연인)", icon: "❤️", desc: "선택과 조화, 그리고 진실한 관계를 의미합니다. 마음이 이끄는 소중한 가치를 선택해야 하는 순간이 올 수 있습니다. 오늘 가장 중요한 것은 '진심'과 '소통'입니다. 파트너나 동료와의 협력이 조화롭게 이루어질 것이며, 당신의 매력이 돋보여 사람들의 호감을 얻게 될 것입니다. 가슴이 뛰는 결정을 내리세요." },
        { name: "VII. The Chariot (전차)", icon: "🏹", desc: "강한 의지와 추진력으로 장애물을 돌파하고 승리를 쟁취하는 에너지입니다. 목표가 정해졌다면 주저하지 말고 앞만 보고 나아가세요. 서로 다른 의견이나 갈등이 있더라도 당신의 통제력으로 충분히 이겨낼 수 있습니다. 속도감 있는 전개가 예상되니 집중력을 유지하는 것이 중요합니다. 승리의 기쁨이 눈앞에 있습니다." },
        { name: "VIII. Strength (힘)", icon: "🦁", desc: "진정한 힘은 물리적인 강압이 아닌 부드러운 인내와 자애로움에서 나옵니다. 어려운 상황이나 다루기 힘든 사람을 상대하더라도 화를 내기보다 부드러운 통제력을 발휘해 보세요. 당신의 내면에는 어떤 시련도 극복할 수 있는 강인한 정신력이 있습니다. 자신을 믿고 끈기 있게 대처한다면 결국 상황은 당신의 편이 될 것입니다." },
        { name: "IX. The Hermit (은둔자)", icon: "💡", desc: "잠시 멈추어 자신을 깊이 돌아보아야 하는 성찰의 시간입니다. 세상의 소란함에서 벗어나 고요한 시간을 가질 때 비로소 진정한 답을 얻을 수 있습니다. 서두를 필요는 없습니다. 내면의 빛을 따라 천천히 답을 찾아가는 과정 자체가 성장의 발판이 됩니다. 당신이 찾고 있는 진실은 이미 당신의 마음속에 있습니다." },
        { name: "X. Wheel of Fortune (운명의 수레바퀴)", icon: "🎡", desc: "삶의 큰 흐름이 긍정적인 방향으로 바뀌는 전환점에 서 있습니다. 예상치 못한 행운이나 새로운 기회가 찾아올 수 있는 시기입니다. 변화를 두려워하며 거스르기보다 자연스럽게 흐름에 몸을 맡겨 보세요. '운명적인 만남'이나 '필연적인 사건'이 일어날 수 있으니 마음을 열고 변화를 맞이할 준비를 하세요." },
        { name: "XI. Justice (정의)", icon: "⚖️", desc: "공정함과 객관성, 그리고 인과응보를 상징합니다. 감정에 치우치지 않고 냉철하게 상황을 분석하여 올바른 판단을 내려야 하는 날입니다. 당신의 과거 노력이 정당한 평가를 받게 될 것이며, 정직한 태도가 가장 강력한 무기가 될 것입니다. 계약이나 법적인 문제에서도 균형 잡힌 시각이 행운을 가져다줄 것입니다." },
        { name: "XII. The Hanged Man (매달린 사람)", icon: "🙃", desc: "현재 상황이 정체된 것처럼 느껴질 수 있지만, 이는 더 큰 도약을 위한 필수적인 인내의 시간입니다. 세상을 다른 각도에서 바라보는 발상의 전환이 필요합니다. 억지로 상황을 바꾸려 애쓰기보다는 현재의 멈춤을 받아들이고 희생과 헌신의 의미를 되새겨 보세요. 곧 새로운 깨달음과 함께 시야가 넓어질 것입니다." },
        { name: "XIII. Death (죽음)", icon: "💀", desc: "하나의 주기가 끝나고 새로운 시작을 준비해야 하는 강력한 변화의 시기입니다. 낡은 습관이나 미련, 더 이상 도움이 되지 않는 관계를 과감히 정리해야 합니다. 비움이 있어야 새로운 채움이 가능합니다. 이 변화는 고통스러울 수 있지만, 궁극적으로는 당신을 더 나은 미래로 인도하는 정화의 과정이 될 것입니다." },
        { name: "XIV. Temperance (절제)", icon: "🍷", desc: "서로 다른 요소들을 조화롭게 섞어 최적의 균형을 찾아가는 기운입니다. 극단적인 선택보다는 중용의 미덕을 발휘해야 합니다. 감정과 이성, 일과 휴식 사이의 조율이 필요한 때입니다. 서두르지 않는 여유로움과 인내심이 평온한 하루를 만들어 줄 것입니다. 당신의 유연한 대처가 주변 사람들에게도 편안함을 줍니다." },
        { name: "XV. The Devil (악마)", icon: "😈", desc: "유혹이나 집착, 혹은 나를 억눌러온 부정적인 생각에 사로잡혀 있지는 않은지 돌아봐야 합니다. 물질적인 욕망이나 당장의 쾌락 때문에 소중한 가치를 잊고 있을 수 있습니다. 하지만 이 속박의 사슬은 당신이 마음만 먹으면 언제든 벗어날 수 있는 것입니다. 자신의 의지를 되찾고 내면의 어두운 그림자에서 당당히 걸어 나오세요." },
        { name: "XVI. The Tower (탑)", icon: "⚡", desc: "견고하다고 믿었던 가치관이나 상황이 갑작스럽게 흔들릴 수 있는 충격적인 변화를 암시합니다. 하지만 이는 부실하게 쌓아 올린 가짜를 무너뜨리고 진실한 기초를 다시 세우기 위한 필연적인 과정입니다. 갑작스러운 위기에 당황하지 마세요. 무너진 잔해 속에서 당신은 훨씬 더 자유롭고 강한 존재로 다시 태어날 기회를 얻게 될 것입니다." },
        { name: "XVII. The Star (별)", icon: "🌟", desc: "어둠 속에서 빛나는 희망과 치유의 에너지가 당신을 비추고 있습니다. 힘든 시기가 지나가고 마음의 평화와 안정을 되찾게 될 것입니다. 당신의 영감과 창의력이 풍부해지는 시기이니 미래에 대한 아름다운 꿈을 설계해 보세요. 긍정적인 믿음을 가질 때 우주의 축복이 당신의 삶 속으로 흘러들어올 것입니다." },
        { name: "XVIII. The Moon (달)", icon: "🌕", desc: "불안함과 모호함 속에서 길을 잃은 듯한 기분이 들 수 있습니다. 보이지 않는 것에 대한 막연한 두려움이 당신을 괴롭힐 수 있지만, 이는 모두 마음이 만들어낸 환상일 뿐입니다. 안개가 걷힐 때까지 무리한 결정은 피하고 직관의 목소리에 집중하세요. 곧 진실의 빛이 드러나 불안은 사라지고 명확한 길이 보일 것입니다." },
        { name: "XIX. The Sun (태양)", icon: "☀️", desc: "생명력과 성공, 그리고 순수한 기쁨이 가득한 최고의 카드입니다. 당신의 능력이 세상에 환하게 드러나고 모든 일이 활기차게 진행될 것입니다. 낙천적인 태도와 밝은 에너지는 주변 사람들까지 행복하게 만듭니다. 오늘 당신이 시작하는 일은 성공의 기운을 듬뿍 받을 것이며, 자신감 넘치는 모습이 행운을 완성할 것입니다." },
        { name: "XX. Judgement (심판)", icon: "🎺", desc: "과거의 노력이 결실을 맺고 새로운 소명이 주어지는 부활의 시기입니다. 당신을 깨우는 우주의 목소리에 귀를 기울이세요. 지난날의 과오를 반성하고 새로운 마음가짐으로 출발한다면 놀라운 변화를 경험하게 될 것입니다. 중대한 결정이나 소식이 전해질 수 있는 날이니 명확한 판단력으로 기회를 잡으세요." },
        { name: "XXI. The World (세계)", icon: "🌍", desc: "오랜 여정의 완성이자 완벽한 조화를 상징합니다. 당신이 추구해온 목표가 마침내 성공적으로 마무리되고 통합되는 순간입니다. 더 넓은 세상으로 나아갈 준비가 되었음을 의미하기도 합니다. 육체적, 정신적 풍요로움 속에서 성취감을 만끽하세요. 하나의 완성은 곧 또 다른 더 높은 차원으로의 시작이기도 합니다." },

        // Wands (지팡이)
        { name: "Ace of Wands", icon: "🔥", desc: "새로운 열정과 아이디어가 폭발하는 날입니다. 가슴 속에 불꽃이 튀는 듯한 기분 좋은 설렘을 느껴보세요. 망설임보다는 행동이 필요한 시기입니다. 당신의 에너지가 주변을 움직이고 새로운 기회의 문을 열 것입니다. 오늘 시작하는 프로젝트나 관계는 강력한 생명력을 가지고 성장할 잠재력이 큽니다." },
        { name: "Two of Wands", icon: "🔥", desc: "안정적인 현재에 만족하지 않고 더 먼 곳을 바라보는 시야가 필요한 날입니다. 이미 거둔 성취를 기반으로 다음 단계를 위한 계획을 세우세요. 세계를 무대로 꿈을 펼칠 준비를 하는 기분으로 구체적인 전략을 구상하는 것이 좋습니다. 당신의 야망을 현실로 바꿀 수 있는 선택의 기로에 서 있습니다." },
        { name: "Three of Wands", icon: "🔥", desc: "당신의 노력이 결실을 맺어 긍정적인 신호가 오기 시작합니다. 시야를 넓히고 더 큰 가능성을 향해 나아가세요. 협력자와의 파트너십이 중요해지는 시기이며, 당신의 리더십이 빛을 발할 것입니다. 해외와 관련된 일이나 장거리 이동에서 행운이 따를 수 있습니다. 자신감을 가지고 더 큰 무대로 발을 내디디세요." },
        { name: "Four of Wands", icon: "🔥", desc: "축제와 화합, 그리고 안정적인 행복이 깃든 날입니다. 가족, 친구 혹은 동료들과 기쁜 소식을 나누거나 함께 축하할 일이 생길 수 있습니다. 당신의 노력이 기초를 튼튼히 다졌음을 의미하며, 당분간 평온한 결실을 즐길 수 있습니다. 주변 사람들과 따뜻한 정을 나누며 현재의 행복을 만끽하세요." },
        { name: "Five of Wands", icon: "🔥", desc: "작은 다툼이나 경쟁, 혹은 내면의 혼란이 예상되는 날입니다. 주변 상황이 다소 시끄럽고 어수선할 수 있지만, 이는 성장을 위한 건강한 자극이 되기도 합니다. 감정적인 대립보다는 생산적인 경쟁을 지향하세요. 자신의 주장을 명확히 전달하되 타인의 의견도 존중하는 유연함이 필요합니다. 혼란 속에서 새로운 질서를 찾을 수 있습니다." },
        { name: "Six of Wands", icon: "🔥", desc: "당당한 승리와 금의환향을 상징합니다. 당신의 능력이 널리 인정받고 사람들의 찬사를 받게 될 것입니다. 자신감을 가져도 좋은 날입니다. 어려운 과제를 해결하고 마침내 목적지에 도달한 기쁨을 누리세요. 당신의 성공이 주변 사람들에게도 긍정적인 에너지를 전파할 것입니다. 승리의 기운을 타고 계속해서 전진하세요." },
        { name: "Seven of Wands", icon: "🔥", desc: "여러 가지 도전이나 압박 속에서도 당신의 자리를 굳건히 지켜내야 하는 날입니다. 상황이 당신에게 다소 불리해 보일 수도 있지만, 당신은 충분히 이겨낼 힘을 가지고 있습니다. 흔들리지 않는 신념과 용기가 필요합니다. 포기하지 않고 끝까지 방어하며 싸워나간다면 결국 당신의 주도권을 되찾게 될 것입니다." },
        { name: "Eight of Wands", icon: "🔥", desc: "상황이 매우 빠르게 전개되는 역동적인 날입니다. 오랫동안 기다려온 소식이 전해지거나 정체되었던 일이 급물살을 타기 시작할 것입니다. 기회가 왔을 때 신속하게 대처하는 기민함이 필요합니다. 목표를 향해 화살처럼 날아가는 에너지를 활용해 보세요. 바쁜 일정 속에서도 집중력을 잃지 않는다면 놀라운 진전을 보게 될 것입니다." },
        { name: "Nine of Wands", icon: "🔥", desc: "거의 목적지에 다다랐지만 마지막 관문이 남아 있습니다. 지금까지의 여정으로 다소 지쳤을 수 있지만 끝까지 경계심을 늦추지 마세요. 당신의 끈기와 인내가 시험받는 시기입니다. 마지막 힘을 짜내어 상황을 마무리한다면 곧 평온한 휴식이 찾아올 것입니다. 당신이 쌓아온 경험이 위기 극복의 강력한 방패가 되어줄 것입니다." },
        { name: "Ten of Wands", icon: "🔥", desc: "너무 많은 짐을 혼자 짊어지고 있지는 않나요? 과도한 책임감과 업무량으로 인해 몸과 마음이 무거워진 상태입니다. 모든 것을 완벽하게 해내려는 욕심을 잠시 내려놓고 우선순위를 정해 보세요. 주변에 도움을 요청하거나 짐을 나누는 용기가 필요합니다. 목적지가 코앞이니 마지막까지 힘을 내되, 자신의 한계를 인정하는 지혜도 잊지 마세요." },
        { name: "Page of Wands", icon: "🔥", desc: "새로운 소식이나 흥미로운 기회가 찾아오는 기분 좋은 시작입니다. 아이처럼 순수한 열정과 호기심이 당신을 움직일 것입니다. 아직 경험은 부족할지 몰라도 당신의 잠재력은 무궁무진합니다. 낯선 분야에 도전하거나 새로운 아이디어를 제안해 보세요. 당신의 생동감 넘치는 에너지가 행운의 문을 두드릴 것입니다." },
        { name: "Knight of Wands", icon: "🔥", desc: "앞뒤 가리지 않고 목표를 향해 돌진하는 뜨거운 열정의 소유자입니다. 오늘은 에너지가 넘치고 추진력이 강해지는 날입니다. 자신감 있게 행동하는 것은 좋지만 성급한 판단으로 인한 실수는 주의해야 합니다. 모험적인 정신이 행운을 부르니 가슴 뛰는 일을 시작해 보세요. 당신의 뜨거운 기운이 주변 사람들까지 전염시킬 것입니다." },
        { name: "Queen of Wands", icon: "🔥", desc: "따뜻한 활력과 당당한 매력이 넘치는 기운입니다. 당신의 긍정적인 에너지가 주변 사람들을 끌어당기고 상황을 활기차게 만들 것입니다. 창의적인 능력을 발휘하고 사람들과 적극적으로 소통해 보세요. 당신의 자신감 있는 태도가 큰 영향력을 발휘할 것입니다. 독립적이고 주도적인 행동이 성공적인 결과를 가져다줄 것입니다." },
        { name: "King of Wands", icon: "🔥", desc: "강력한 비전과 리더십을 갖춘 최고의 권위자입니다. 당신의 카리스마가 빛을 발하며 중요한 결정을 내리기에 아주 좋은 날입니다. 원대한 목표를 세우고 사람들을 독려하여 함께 나아가세요. 당신의 열정적인 기운은 불가능해 보이던 일도 가능하게 만들 것입니다. 확신을 가지고 상황을 주도한다면 놀라운 성취를 거두게 될 것입니다." },

        // Cups (컵)
        { name: "Ace of Cups", icon: "🍷", desc: "풍부한 감정과 새로운 사랑의 시작을 의미하는 축복의 카드입니다. 마음속에 사랑과 행복이 가득 차오르는 평온한 하루가 예상됩니다. 새로운 인연이 시작되거나 기존의 관계가 더욱 깊어질 수 있습니다. 당신의 감수성이 예민해지는 날이니 예술적인 활동을 하거나 진심 어린 대화를 나눠보세요. 마음의 문을 열면 더 큰 행복이 찾아옵니다." },
        { name: "Two of Cups", icon: "🍷", desc: "마음이 통하는 사람과의 완벽한 소통과 결합을 의미합니다. 파트너와의 신뢰가 깊어지거나 비즈니스에서 아주 좋은 협력자를 만나게 될 것입니다. 서로의 가치를 인정하고 존중할 때 최고의 시너지가 발생합니다. 오늘은 화해와 용서, 그리고 사랑을 나누기에 더없이 좋은 날입니다. 진실한 마음이 모든 문제를 해결하는 열쇠가 됩니다." },
        { name: "Three of Cups", icon: "🍷", desc: "축하와 우정, 그리고 공동체의 즐거움이 가득한 날입니다. 마음 맞는 친구들과 즐거운 시간을 보내거나 함께 성과를 축하할 일이 생길 수 있습니다. 당신의 밝은 사회성이 돋보이며 사람들의 관계에서 큰 에너지를 얻게 될 것입니다. 행복을 나누면 배가 됩니다. 오늘 하루는 사람들과 어울리며 유쾌한 기분을 만끽하세요." },
        { name: "Four of Cups", icon: "🍷", desc: "현재의 상황에 권태로움을 느끼거나 내면에 침잠해 있는 모습입니다. 누군가 내미는 새로운 기회의 손길을 보지 못하고 있을 수 있습니다. 잠시 휴식을 취하며 마음을 정돈하는 것은 좋지만, 무기력함에 빠져 소중한 것을 놓치지 않도록 주의하세요. 마음의 눈을 뜨고 주변을 살핀다면 생각지 못한 해결책이 이미 당신 곁에 있음을 알게 될 것입니다." },
        { name: "Five of Cups", icon: "🍷", desc: "실망감이나 상실감으로 인해 슬픔에 잠겨 있는 시기입니다. 하지만 무너진 컵 세 개만 바라보지 마세요. 당신 뒤에는 여전히 채워져 있는 두 개의 컵이 남아 있습니다. 과거의 아픔이나 실패에 매몰되지 말고 남은 가능성에 집중해야 합니다. 이 슬픔을 딛고 일어선다면 당신은 한층 더 성숙하고 깊은 내면을 갖게 될 것입니다." },
        { name: "Six of Cups", icon: "🍷", desc: "과거의 소중한 추억이나 순수했던 어린 시절의 감정이 힘이 되어주는 날입니다. 예전 친구로부터 소식이 오거나 우연히 추억의 장소를 방문하게 될 수도 있습니다. 누군가에게 순수한 호의를 베풀거나 받게 되는 따뜻한 하루가 예상됩니다. 과거의 긍정적인 경험을 발판 삼아 현재의 긴장을 풀고 마음의 안식을 찾아보세요." },
        { name: "Seven of Cups", icon: "🍷", desc: "수많은 선택지가 화려한 환상들 사이에서 고민이 깊어지는 날입니다. 이것저것 하고 싶은 일은 많지만 현실적인 근거가 부족할 수 있습니다. 오늘은 막연한 상상보다는 우선순위를 정하고 실현 가능한 것에 집중하는 명확함이 필요합니다. 겉모습에 현혹되지 말고 자신의 진심이 무엇을 원하는지 냉정하게 들여다보세요." },
        { name: "Eight of Cups", icon: "🍷", desc: "익숙하고 안정적이었던 것을 뒤로하고 더 높은 가치를 찾아 떠나야 하는 시점입니다. 당장은 아쉽고 허전할 수 있지만 이 떠남은 당신의 영적 성장을 위해 필수적인 선택입니다. 현실적인 안주보다는 진정한 자아를 찾기 위한 여정을 시작해 보세요. 당신이 용기 있게 내디딘 발걸음은 결국 더 깊은 평화와 완성으로 인도할 것입니다." },
        { name: "Nine of Cups", icon: "🍷", desc: "소원 성취와 정서적 만족감이 정점에 달하는 기분 좋은 날입니다. 당신이 노력해온 결과에 스스로 만족하며 안락함을 누리게 될 것입니다. '행복한 상상'이 현실이 되는 놀라운 경험을 할 수도 있습니다. 현재 누리고 있는 풍요로움에 감사하며 자신을 위한 작은 선물을 해보는 건 어떨까요? 당신은 충분히 그럴 자격이 있습니다." },
        { name: "Ten of Cups", icon: "🍷", desc: "가정의 평화와 완벽한 감정적 행복을 의미하는 최고의 카드입니다. 주변 사람들, 특히 가족과의 관계에서 더할 나위 없는 안락함과 조화를 느끼게 될 것입니다. 당신의 사랑이 결실을 맺고 평온한 일상이 축복처럼 느껴지는 날입니다. 진정한 행복은 가장 가까운 사람들과의 조화로운 관계에서 시작됨을 잊지 마세요." },
        { name: "Page of Cups", icon: "🍷", desc: "감수성이 풍부해지고 새로운 감정적인 소식이 찾아오는 날입니다. 어린아이 같은 순수한 호기심과 상상력이 당신의 일상에 활력을 불어넣어 줄 것입니다. 예술적인 영감이 떠오르거나 누군가로부터 설레는 고백이나 제안을 받을 수도 있습니다. 논리보다는 감정에 충실하며 다가오는 소중한 메시지를 열린 마음으로 받아들이세요." },
        { name: "Knight of Cups", icon: "🍷", desc: "부드러운 매력과 로맨틱한 제안을 가져다주는 기운입니다. 평화주의자 같은 태도로 주변 사람들과 소통하며 조화를 이루는 날이 될 것입니다. 당신에게 다가오는 달콤한 유혹이나 제안이 있다면 신중하되 긍정적으로 검토해 보세요. 감정이 앞서 현실적인 면을 간과할 수도 있으니 중심을 잘 잡는 것이 중요합니다." },
        { name: "Queen of Cups", icon: "🍷", desc: "깊은 통찰력과 자애로운 마음으로 주변을 돌보는 치유의 여왕입니다. 당신의 따뜻한 공감 능력이 사람들에게 큰 위로가 되고 신뢰를 쌓게 해줄 것입니다. 직관력이 매우 날카로워지는 날이니 자신의 느낌을 믿고 행동해 보세요. 예술적인 감각이나 영적인 탐구에서 큰 만족을 얻을 수 있는 평온한 시기입니다." },
        { name: "King of Cups", icon: "🍷", desc: "요동치는 감정의 파도를 다스리는 성숙하고 지혜로운 리더입니다. 오늘은 어떤 상황에서도 평정심을 잃지 않는 넓은 포용력이 필요합니다. 냉철한 이성보다는 따뜻한 이해심으로 사람들을 대할 때 당신의 권위가 더욱 빛날 것입니다. 당신의 깊은 내공과 감정 조절 능력이 큰 문제를 평화롭게 해결하는 힘이 됩니다." },

        // Swords (검)
        { name: "Ace of Swords", icon: "⚔️", desc: "명확한 이성과 결단력으로 새로운 돌파구를 찾는 날입니다. 복잡하게 얽혀있던 문제의 핵심을 꿰뚫는 통찰력이 빛을 발할 것입니다. 객관적인 진실을 마주하고 과감한 선택을 내리기에 최적의 시기입니다. 당신의 날카로운 지성이 승리를 가져다줄 것이니, 두려움 없이 자신의 생각을 실천에 옮기세요." },
        { name: "Two of Swords", icon: "⚔️", desc: "두 가지 선택지 사이에서 팽팽한 균형을 유지하며 결정을 유보하고 있는 상태입니다. 감정을 차단하고 이성적으로 판단하려 애쓰고 있지만, 마음속의 갈등은 여전할 수 있습니다. 억지로 답을 내리기보다는 잠시 멈추어 상황을 더 냉정하게 관찰해 보세요. 눈가리개를 벗고 진실을 직시할 때 비로소 올바른 길로 나아갈 수 있습니다." },
        { name: "Three of Swords", icon: "⚔️", desc: "마음 아픈 소식이나 이별, 혹은 생각지 못한 갈등으로 상처를 입을 수 있는 날입니다. 하지만 이 고통은 당신이 한 단계 더 성장하기 위해 거쳐야 하는 정화의 과정이기도 합니다. 아픔을 억누르기보다 충분히 슬퍼하고 마음을 씻어내세요. 비 온 뒤 땅이 굳어지듯, 이 시련을 견뎌낸 당신은 더욱 강인한 내면을 갖게 될 것입니다." },
        { name: "Four of Swords", icon: "⚔️", desc: "치열한 경쟁과 소란함에서 벗어나 반드시 휴식을 취해야 하는 시기입니다. 지친 몸과 마음을 회복하기 위한 고요한 시간이 필요합니다. 오늘은 새로운 계획을 세우기보다 현재의 에너지를 비축하는 데 집중하세요. 잠시 동안의 멈춤은 포기가 아니라 다음 전투를 위한 현명한 전략입니다. 고요함 속에서 진정한 안식을 찾으세요." },
        { name: "Five of Swords", icon: "⚔️", desc: "논쟁이나 경쟁에서 이기더라도 상처뿐인 승리가 될 수 있는 날입니다. 자신의 주장만 고집하다가 소중한 사람을 잃거나 관계가 악화될 수 있으니 주의해야 합니다. 진정으로 얻고자 하는 것이 무엇인지 다시 한번 생각해보세요. 때로는 한발 물러나 양보하는 것이 장기적으로는 더 큰 이익과 평화를 가져다주는 지름길이 될 수 있습니다." },
        { name: "Six of Swords", icon: "⚔️", desc: "힘들었던 과거를 뒤로하고 점차 안정적이고 평온한 곳으로 이동하는 중입니다. 아직 마음의 상처가 다 아물지는 않았지만 상황은 분명 나아지고 있습니다. 주변의 도움을 받아 새로운 환경에 적응해 보세요. 이 여정은 당신에게 필요한 변화이며, 곧 도달할 목적지에는 지금보다 훨씬 더 밝은 미래가 기다리고 있을 것입니다." },
        { name: "Seven of Swords", icon: "⚔️", desc: "정면 돌파보다는 기민한 전략과 신중한 대처가 필요한 날입니다. 혼자서 조용히 일을 처리하거나 비정상적인 경로를 통해 이득을 보려는 유혹이 생길 수 있습니다. 자신의 계획이 허점이 없는지 철저히 점검하고 비밀 유지에 신경 쓰세요. 하지만 부정한 방법은 결국 부메랑이 되어 돌아올 수 있으니 정직함을 잃지 않도록 주의해야 합니다." },
        { name: "Eight of Swords", icon: "⚔️", desc: "스스로 만든 고정관념이나 두려움이라는 감옥에 갇혀 무기력함을 느끼고 있는 모습입니다. 하지만 당신을 묶고 있는 밧줄은 느슨하며 발밑에는 빠져나갈 길이 열려 있습니다. 두려움의 눈가리개를 벗고 용기를 내어 한 발만 움직여 보세요. 당신이 믿고 있는 한계는 실제가 아니라 당신의 생각이 만들어낸 허상일 뿐입니다." },
        { name: "Nine of Swords", icon: "⚔️", desc: "과도한 걱정과 불안, 그리고 밤잠을 설칠 정도의 스트레스가 당신을 괴롭히고 있습니다. 하지만 실제 상황은 당신이 상상하는 것만큼 최악은 아닐 수 있습니다. 마음속의 괴물을 키우지 말고 객관적인 사실에 집중하세요. 혼자 고민하기보다 믿을 만한 사람에게 속마음을 털어놓는 것만으로도 무거운 마음의 짐이 훨씬 가벼워질 것입니다." },
        { name: "Ten of Swords", icon: "⚔️", desc: "더 이상 나빠질 수 없는 바닥에 도달한 상태입니다. 하지만 이는 곧 고통스러운 상황이 완전히 끝났음을 의미하기도 합니다. 이제 올라갈 일만 남았습니다. 과거의 실패나 아픔을 깨끗이 인정하고 미련 없이 보내주세요. 어두운 밤이 지나면 반드시 해가 뜨듯, 당신의 삶에도 곧 새로운 희망의 새벽이 밝아올 것입니다." },
        { name: "Page of Swords", icon: "⚔️", desc: "지적 호기심이 왕성해지고 주변 상황을 날카롭게 관찰하게 되는 기운입니다. 새로운 정보를 수집하거나 계획을 세우기에 좋은 시기입니다. 하지만 아직 경험이 부족하여 말이 앞서거나 경솔한 판단을 내릴 수도 있으니 신중함이 필요합니다. 주변의 변화에 기민하게 반응하되, 차분하고 논리적인 태도를 유지하는 것이 행운을 부릅니다." },
        { name: "Knight of Swords", icon: "⚔️", desc: "단호한 결단력과 빠른 행동력으로 목표를 향해 거침없이 돌진하는 기운입니다. 정체되었던 일을 해결하거나 중요한 결정을 내리기에 아주 역동적인 날입니다. 하지만 너무 속도에만 치중하다가 세세한 부분을 놓치거나 주변 사람들에게 상처를 줄 수 있으니 주의하세요. 냉철한 이성과 민첩함을 조화롭게 발휘해야 성공할 수 있습니다." },
        { name: "Queen of Swords", icon: "⚔️", desc: "객관적인 진실을 꿰뚫어 보는 날카로운 지성과 독립심을 가진 여왕입니다. 감정에 휘둘리지 않고 공정하고 명확한 태도로 상황을 판단해야 하는 날입니다. 당신의 논리적인 조언이 큰 힘을 발휘할 것이며, 어려운 문제에서도 핵심을 찾아낼 것입니다. 때로는 다소 차갑게 보일 수 있으나 진실을 말하는 당당함이 당신의 진정한 가치입니다." },
        { name: "King of Swords", icon: "⚔️", desc: "높은 지적 권위와 공정함을 갖춘 최고의 전략가입니다. 이성적인 분석력과 명확한 원칙을 바탕으로 상황을 주도해 나가세요. 당신의 지적 리더십이 빛을 발하며 복잡한 갈등 상황을 명쾌하게 해결하게 될 것입니다. 감상에 젖기보다 전문성을 발휘하여 결과로 증명하는 하루를 만드세요. 당신의 판단이 곧 법이 되는 강력한 기운입니다." },

        // Pentacles (펜타클)
        { name: "Ace of Pentacles", icon: "💰", desc: "현실적인 풍요로움과 새로운 물질적 기회가 찾아오는 행운의 카드입니다. 새로운 사업, 투자, 혹은 취업 등에서 긍정적인 시작을 예고합니다. 당신의 노력이 구체적인 성과로 나타나기 시작하는 시점이니, 찾아온 기회를 놓치지 말고 확실히 잡으세요. 오늘 뿌린 씨앗은 머지않아 아주 튼튼하고 풍성한 나무로 자라날 것입니다." },
        { name: "Two of Pentacles", icon: "💰", desc: "변화하는 상황 속에서 여러 가지 일을 동시에 능숙하게 조율해야 하는 날입니다. 일과 가정, 지출과 수입 사이에서 균형을 잡는 유연함이 필요합니다. 다소 바쁘고 혼란스러울 수 있지만, 즐거운 마음으로 대처한다면 충분히 잘해낼 수 있습니다. 융통성 있는 태도가 행운을 가져다주며, 위기를 기회로 바꾸는 재치를 발휘해 보세요." },
        { name: "Three of Pentacles", icon: "💰", desc: "당신의 전문적인 능력을 인정받고 협동을 통해 훌륭한 성과를 거두는 날입니다. 혼자 일하기보다 각 분야의 전문가들과 의견을 나누며 팀워크를 발휘해 보세요. 당신의 꼼꼼한 솜씨와 성실함이 빛을 발하며 주변의 신뢰를 얻게 될 것입니다. 기초를 튼튼히 다지는 과정에서 큰 보람과 성공의 가능성을 발견하게 됩니다." },
        { name: "Four of Pentacles", icon: "💰", desc: "이미 가진 것을 지키려는 안정적인 심리와 동시에 소유욕이 강해지는 날입니다. 경제적인 안정을 유지하는 것은 좋지만, 지나치게 보수적인 태도로 인해 새로운 기회를 놓치거나 주변 사람들에게 인색하다는 인상을 줄 수 있습니다. 마음의 문을 조금만 열고 유연하게 대처해 보세요. 진정한 풍요는 나눔과 흐름 속에서 더 커지는 법입니다." },
        { name: "Five of Pentacles", icon: "💰", desc: "경제적으로나 심리적으로 다소 위축되고 결핍을 느낄 수 있는 시기입니다. 추운 겨울 속에서 길을 잃은 듯한 기분이 들 수도 있지만, 조금만 고개를 돌려보면 당신을 도와줄 안식처와 온기가 가까운 곳에 있습니다. 자존심 때문에 도움의 손길을 거부하지 마세요. 이 시련은 영원하지 않으며, 함께 이겨낼 동료가 곁에 있음을 잊지 마세요." },
        { name: "Six of Pentacles", icon: "💰", desc: "베풀고 받는 과정에서 조화로운 균형이 이루어지는 날입니다. 경제적인 지원을 받게 되거나 혹은 당신이 누군가에게 도움을 주며 큰 보람을 느끼게 될 것입니다. 정당한 보상이 주어지는 시기이며, 자비롭고 관대한 마음이 더 큰 행운을 불러옵니다. 당신의 선한 영향력이 주변으로 퍼져나가 모두가 만족스러운 결과를 얻게 될 것입니다." },
        { name: "Seven of Pentacles", icon: "💰", desc: "지금까지 달려온 길을 잠시 멈추고 거둔 수확물을 바라보며 점검해야 하는 시간입니다. 노력이 헛되지 않았는지, 목표를 향해 올바르게 가고 있는지 신중하게 평가해 보세요. 당장 눈에 보이는 결과가 작더라도 조급해할 필요는 없습니다. 인내심을 가지고 마지막 결실이 맺힐 때까지 차분히 기다리는 지혜가 필요한 때입니다." },
        { name: "Eight of Pentacles", icon: "💰", desc: "성실함과 꾸준함이 최고의 미덕인 날입니다. 자신의 분야에서 묵묵히 실력을 닦고 완성도를 높이는 데 집중하세요. 요행을 바라기보다 정직한 노력으로 승부할 때 당신의 가치는 더욱 높아질 것입니다. 장인 정신을 가지고 맡은 바 소임을 다한다면, 당신은 곧 그 분야의 대체 불가능한 전문가로 인정받게 될 것입니다." },
        { name: "Nine of Pentacles", icon: "💰", desc: "스스로 일궈낸 성공과 독립적인 풍요로움을 만끽하는 여유로운 날입니다. 타인에게 의존하지 않고 자신의 능력으로 안락한 생활과 품위를 유지하게 될 것입니다. 주변의 시선에 흔들리지 않는 내적인 평화와 자신감이 돋보이는 시기입니다. 당신의 아름답고 풍요로운 현재를 마음껏 즐기며 우아한 휴식을 취해 보세요." },
        { name: "Ten of Pentacles", icon: "💰", desc: "가정의 평화와 물질적인 완성, 그리고 안정적인 유산을 상징하는 카드입니다. 장기적인 관점에서 추진해온 일들이 견고한 성공의 토대를 마련하게 될 것입니다. 가족 혹은 동료들과의 유대가 깊어지고 공동의 이익이 극대화되는 날입니다. 전통과 경험을 소중히 여기며 현재의 풍요를 지속 가능한 성공으로 이어가려는 노력이 필요합니다." },
        { name: "Page of Pentacles", icon: "💰", desc: "새로운 배움이나 현실적인 목표를 향해 첫발을 내딛는 신중한 시작입니다. 아직 서툴 수 있지만 당신의 학구열과 성실함은 성공적인 미래를 보장합니다. 구체적인 계획을 세우고 차근차근 실력을 쌓아 나가세요. 작은 소식이나 기회라도 소중히 여기며 정직하게 대처할 때 당신의 잠재력은 현실적인 부와 성공으로 꽃피울 것입니다." },
        { name: "Knight of Pentacles", icon: "💰", desc: "느리지만 가장 확실하고 신뢰할 수 있는 전진입니다. 서두르지 않고 꼼꼼하게 계획을 실행하며 맡은 일을 완수하는 책임감 있는 기운입니다. 오늘은 요령을 피우기보다 기본에 충실하며 성실한 태도를 유지하는 것이 중요합니다. 당신의 인내심과 끈기는 결국 누구보다 견고하고 확실한 성공의 목적지에 도달하게 해줄 것입니다." },
        { name: "Queen of Pentacles", icon: "💰", desc: "현실적인 지혜와 풍요로움으로 주변을 풍성하게 만드는 안주인 같은 기운입니다. 당신의 실무 능력과 따뜻한 배려심이 조화를 이루어 주변 사람들에게 큰 안정감을 줄 것입니다. 자원을 효율적으로 관리하고 실질적인 성과를 내기에 아주 좋은 날입니다. 내면의 평화와 외부의 풍요가 조화를 이루는 안정적인 하루를 보내세요." },
        { name: "King of Pentacles", icon: "💰", desc: "물질적인 성공의 정점에 도달한 노련하고 실력 있는 리더입니다. 확고한 재력을 기반으로 영향력을 행사하며 현실적인 문제를 해결하는 데 탁월한 능력을 발휘할 것입니다. 당신의 전문성을 바탕으로 큰 수익을 창출하거나 안정적인 기반을 다지기에 최적의 날입니다. 여유롭고 관대한 태도로 상황을 주도하며 성취의 기쁨을 누리세요." }
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
        { name: "염소자리 (12.25-1.19)", icon: "♑", representative: "🐐", jp: "야기座" },
        { name: "물병자리 (1.20-2.18)", icon: "♒", representative: "🏺", jp: "みずがめ座" },
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
    ]
};

function hashText(text) {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = ((hash << 5) - hash) + text.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

async function translateText(text) {
    if (!text || text === '-') return text;
    const cacheKey = `translate_ko_${hashText(text)}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) return cached;

    try {
        const resp = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const data = await resp.json();
        if (data.translated) {
            localStorage.setItem(cacheKey, data.translated);
            return data.translated;
        }
        throw new Error(data.error || 'No translation returned');
    } catch (e) {
        console.error("Translate error:", e);
    }
    return text;
}

// Global State
let globalBirthdate = "";
let isTarotDrawn = false;
let ohaasaUpdateTimer = null;
let currentView = "home";
let lastTarotIndex = null;

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
        const res = await fetch("/api/ohaasa");
        const json = await res.json();
        if (json.error) throw new Error(json.error);

        const { onairDate, data: resultData } = json;
        const formattedDate = `${onairDate.slice(0,4)}-${onairDate.slice(4,6)}-${onairDate.slice(6,8)}`;
        const prevOnairDate = localStorage.getItem('ohaasa_onair_date');
        localStorage.setItem('ohaasa_html_changed', formattedDate !== prevOnairDate ? 'true' : 'false');
        localStorage.setItem('ohaasa_onair_date', formattedDate);

        localStorage.setItem('ohaasa_data', JSON.stringify(resultData));
        localStorage.setItem('ohaasa_date', today);
        return resultData;
    } catch (e) {
        console.error("Ohaasa Fetch Error:", e);
        return cachedData ? JSON.parse(cachedData) : null;
    }
}

// ---- 오하아사 자동 업데이트 스케줄링 ----

function scheduleOhaasaAt(hour, minute, callback) {
    if (ohaasaUpdateTimer) clearTimeout(ohaasaUpdateTimer);
    const now = new Date();
    const target = new Date(now);
    target.setHours(hour, minute, 0, 0);
    const delay = Math.max(0, target - now);
    ohaasaUpdateTimer = setTimeout(callback, delay);
}

function scheduleNextBroadcastDay() {
    if (ohaasaUpdateTimer) clearTimeout(ohaasaUpdateTimer);
    const next = new Date();
    next.setDate(next.getDate() + 1);
    next.setHours(8, 0, 0, 0);
    if (next.getDay() === 0) {
        next.setDate(next.getDate() + 1);
    }
    const delay = next - new Date();
    ohaasaUpdateTimer = setTimeout(() => triggerOhaasaUpdate('8am'), delay);
}

async function triggerOhaasaUpdate(slot) {
    const today = new Date().toISOString().split('T')[0];
    await fetchOhaasaData(true);
    const htmlChanged = localStorage.getItem('ohaasa_html_changed') === 'true';
    localStorage.setItem(`ohaasa_done_${slot}`, today);

    const constSection = document.getElementById('constellation-section');
    if (constSection && !constSection.classList.contains('hidden')) {
        await updateFortune('constellation');
    }

    if (slot === '8am') {
        if (htmlChanged) {
            scheduleNextBroadcastDay();
        } else {
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
        scheduleNextBroadcastDay();
    }
}

async function scheduleOhaasaAutoUpdate() {
    const now = new Date();
    const today = now.toISOString().split('T')[0];

    if (now.getDay() === 0) {
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
        scheduleOhaasaAt(8, 0, () => triggerOhaasaUpdate('8am'));
    } else if (!done8am) {
        await triggerOhaasaUpdate('8am');
    } else if (!done9am) {
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
        scheduleNextBroadcastDay();
    }
}

// 생년월일 입력값 조합 헬퍼
function getBirthdateValue() {
    const y = document.getElementById('birth-year').value.trim();
    const m = document.getElementById('birth-month').value.trim();
    const d = document.getElementById('birth-day').value.trim();
    if (!y || !m || !d) return '';
    return `${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
}

// 연→월→일 자동 포커스 이동
document.getElementById('birth-year').addEventListener('input', function() {
    if (this.value.length === 4) document.getElementById('birth-month').focus();
});
document.getElementById('birth-month').addEventListener('input', function() {
    if (this.value.length >= 2 || parseInt(this.value) > 1) {
        const v = parseInt(this.value);
        if (v >= 1 && v <= 12 && this.value.length >= 2) document.getElementById('birth-day').focus();
    }
});

// 양력/음력 변경 시 globalBirthdate 업데이트
document.querySelectorAll('input[name="calendar-type"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const birthInput = getBirthdateValue();
        if (birthInput && birthInput.split('-')[0].length === 4) {
            globalBirthdate = birthInput;
        }
    });
});

// Navigation
const navItems = document.querySelectorAll('.nav-item, .menu-card');
const views = document.querySelectorAll('.view');

function switchView(target) {
    const prevView = currentView;
    views.forEach(v => v.classList.add('hidden'));
    const targetView = document.getElementById(`${target}-section`);
    if (targetView) targetView.classList.remove('hidden');
    currentView = target;

    if (target === 'home') {
        history.replaceState(null, "", location.pathname);
    } else if (location.hash !== `#${target}`) {
        history.pushState(null, "", `#${target}`);
    }

    window.scrollTo(0, 0);

    document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.toggle('active', n.getAttribute('data-target') === target);
    });

    if (target !== 'home' && prevView !== target) updateFortune(target);
}

function getTargetFromHash() {
    const hash = location.hash.replace('#', '');
    if (!hash) return 'home';
    const allowed = ['home', 'tarot', 'constellation', 'saju', 'zodiac'];
    return allowed.includes(hash) ? hash : 'home';
}

function handleHashChange() {
    const target = getTargetFromHash();
    const birthInput = getBirthdateValue();
    if (target !== 'home' && (!birthInput || birthInput.split('-')[0].length !== 4)) {
        history.replaceState(null, "", location.pathname);
        switchView('home');
        return;
    }
    if (target !== 'home') globalBirthdate = birthInput;
    switchView(target);
}

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.getAttribute('data-target');
        const birthInput = getBirthdateValue();
        if (target !== 'home' && (!birthInput || birthInput.split('-')[0].length !== 4)) {
            alert('올바른 생년월일을 입력해주세요!');
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
        document.getElementById('const-name').innerText = constellation.name;
        document.getElementById('const-desc').innerText = '오늘의 별자리 정보를 가져오는 중...';

        const ohaasaData = await fetchOhaasaData();
        const myFortune = ohaasaData ? ohaasaData[constellation.jp] : null;

        if (myFortune) {
            document.getElementById('const-name').innerText = `${constellation.name} (${myFortune.rank}위)`;
            const combinedText = `${myFortune.content}|||${myFortune.item || "-"}`;
            const translated = await translateText(combinedText);
            
            // 구분자 주변의 공백을 고려한 분리
            let content = translated;
            let item = "-";
            if (translated.includes("|||")) {
                const parts = translated.split("|||");
                content = parts[0].trim();
                item = parts[1].trim();
            }
            
            document.getElementById('const-desc').innerText = content;
            document.getElementById('luck-item').innerText = item;
        } else {
            document.getElementById('const-desc').innerText = '데이터를 가져오지 못했습니다. 잠시 후 다시 시도해주세요.';
            document.getElementById('luck-item').innerText = '-';
        }
        drawConstellation(constellation);
    }

    if (type === 'saju') {
        const elements = ["🌳 나무 (木)", "🔥 불 (火)", "⛰️ 흙 (土)", "💎 금 (金)", "💧 물 (水)"];
        const sajuIdx = Math.abs(seed) % 5;
        document.getElementById('elem-value').innerText = elements[sajuIdx];
        document.getElementById('saju-desc').innerText = '운세를 분석하는 중...';
        await fetchAIFortune('saju', document.getElementById('saju-desc'));
    }

    if (type === 'zodiac') {
        const year = parseInt(globalBirthdate.split('-')[0]);
        const zodiacIdx = (year - 4) % 12;
        const zodiac = data.zodiacs[zodiacIdx];
        document.getElementById('zodiac-icon').innerText = zodiac.icon;
        document.getElementById('zodiac-name').innerText = `${zodiac.name} (출생연도 기준)`;
        document.getElementById('zodiac-desc').innerText = '운세를 분석하는 중...';
        await fetchAIFortune('zodiac', document.getElementById('zodiac-desc'));
    }
}

function drawConstellation(constellation) {
    const container = document.getElementById('const-visual');
    if (!container) return;
    container.innerHTML = `<div class="representative-icon" style="font-size: 8rem; animation: float 3s ease-in-out infinite;">${constellation.representative}</div>`;
}

function getCalendarType() {
    return document.querySelector('input[name="calendar-type"]:checked').value;
}

async function fetchAIFortune(type, targetEl) {
    const today = new Date().toISOString().split('T')[0];
    const calendarType = getCalendarType();
    const cacheKey = `ai_fortune_${type}_${globalBirthdate}_${calendarType}_${today}_ko`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
        targetEl.innerText = cached;
        return;
    }

    try {
        const resp = await fetch('/api/fortune', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type, birthdate: globalBirthdate, calendarType, today, lang: 'ko' })
        });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const result = await resp.json();
        if (result.fortune) {
            targetEl.innerText = result.fortune;
            try { localStorage.setItem(cacheKey, result.fortune); } catch (_) {}
        } else {
            targetEl.innerText = '운세를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.';
        }
    } catch (e) {
        console.error("AI fortune fetch error:", e);
        targetEl.innerText = '운세를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.';
    }
}

function getSeed() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}${mm}${dd}`;
    const birthStr = globalBirthdate ? globalBirthdate.replace(/-/g, '') : "0";
    return parseInt(birthStr) + parseInt(todayStr);
}

function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function renderTarot(card) {
    document.getElementById('tarot-name').innerText = card.name;
    document.getElementById('tarot-card-image').innerText = card.icon;
    document.getElementById('tarot-desc').innerText = card.desc;
}

const tarotCard = document.getElementById('tarot-card');
const tarotResult = document.getElementById('tarot-result');
if (tarotCard) {
    tarotCard.addEventListener('click', async function() {
        if (isTarotDrawn) return;
        isTarotDrawn = true;
        const seed = getSeed() + 777;
        const tarotIdx = Math.floor(seededRandom(seed) * data.tarot.length);
        const card = data.tarot[tarotIdx];
        renderTarot(card);
        this.classList.add('flipped');
        setTimeout(() => tarotResult.classList.remove('hidden'), 800);
    });
}

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

window.addEventListener('hashchange', handleHashChange);
handleHashChange();
scheduleOhaasaAutoUpdate();
