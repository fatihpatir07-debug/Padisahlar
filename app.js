const app = {
    currentView: 'dashboard',
    currentCardIndex: 0,
    quiz: {
        currentQuestion: 0,
        score: 0,
        questions: [],
        ranks: [
            { threshold: 0, title: "Enderun Talebesi" },
            { threshold: 3, title: "Yeniçeri Ağası" },
            { threshold: 6, title: "Sancak Beyi" },
            { threshold: 10, title: "Beylerbeyi" },
            { threshold: 15, title: "Vezir" },
            { threshold: 20, title: "Sadrazam" }
        ]
    },

    init() {
        // Hide loader
        setTimeout(() => {
            document.getElementById('loader').style.opacity = '0';
            setTimeout(() => document.getElementById('loader').style.display = 'none', 500);
        }, 1000);

        // Load saved theme
        const savedTheme = localStorage.getItem('preferred-theme');
        if (savedTheme) this.changeTheme(savedTheme);

        this.updateCard();
        this.renderTimeline();
        this.setupEventListeners();
        this.setupPWA();
    },

    setupEventListeners() {
        // Close modal
        document.querySelector('.close-modal').onclick = () => {
            document.getElementById('install-modal').style.display = "none";
        };
    },

    switchView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(`view-${viewId}`).classList.add('active');
        this.currentView = viewId;

        if (viewId === 'cards') {
            this.updateCard();
            document.getElementById('flashcard').classList.remove('flipped');
        }
        window.scrollTo(0, 0);
    },

    updateCard() {
        const padişah = PADISAHLAR_DATA[this.currentCardIndex];

        // Front
        document.getElementById('card-name-front').textContent = padişah.name;
        document.getElementById('card-period-front').textContent = padişah.period;

        // Back
        document.getElementById('card-name-back').textContent = padişah.name;
        document.getElementById('card-reign-back').textContent = padişah.reign;

        const factsList = document.getElementById('card-facts-back');
        factsList.innerHTML = padişah.facts.map(f => `<li>${f}</li>`).join('');

        document.getElementById('card-counter').textContent = `${this.currentCardIndex + 1} / ${PADISAHLAR_DATA.length}`;
    },

    nextCard() {
        this.currentCardIndex = (this.currentCardIndex + 1) % PADISAHLAR_DATA.length;
        document.getElementById('flashcard').classList.remove('flipped');
        setTimeout(() => this.updateCard(), 150);
    },

    prevCard() {
        this.currentCardIndex = (this.currentCardIndex - 1 + PADISAHLAR_DATA.length) % PADISAHLAR_DATA.length;
        document.getElementById('flashcard').classList.remove('flipped');
        setTimeout(() => this.updateCard(), 150);
    },

    renderTimeline() {
        const container = document.getElementById('timeline-container');
        container.innerHTML = '';

        PADISAHLAR_DATA.forEach(padişah => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.style.borderLeft = "4px solid var(--gold)";
            item.style.padding = "10px 20px";
            item.style.marginBottom = "10px";
            item.style.background = "rgba(255,255,255,0.05)";
            item.innerHTML = `
                <strong>${padişah.reign}</strong>: ${padişah.name}
            `;
            container.appendChild(item);
        });
    },

    startQuiz() {
        this.quiz.score = 0;
        this.quiz.questions = this.generateQuestions();
        this.quiz.currentQuestion = 0;

        document.getElementById('quiz-start').style.display = 'none';
        document.getElementById('quiz-result').style.display = 'none';
        document.getElementById('quiz-game').style.display = 'block';

        this.showNextQuestion();
    },

    generateQuestions() {
        // Create 20 random questions from the data
        return [...PADISAHLAR_DATA].sort(() => 0.5 - Math.random()).slice(0, 20);
    },

    showNextQuestion() {
        if (this.quiz.currentQuestion >= this.quiz.questions.length) {
            this.endQuiz();
            return;
        }

        const padişah = this.quiz.questions[this.quiz.currentQuestion];
        const fact = padişah.facts[Math.floor(Math.random() * padişah.facts.length)];

        document.getElementById('question-text').textContent = `"${fact}" - Bu hangi padişahın özelliğidir?`;
        document.getElementById('quiz-score').textContent = `Puan: ${this.quiz.score}`;
        document.getElementById('quiz-rank').textContent = `Rütbe: ${this.getRank(this.quiz.score)}`;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        const options = this.getWrongOptions(padişah.name);
        options.push(padişah.name);
        options.sort(() => 0.5 - Math.random());

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => this.handleAnswer(opt === padişah.name);
            optionsContainer.appendChild(btn);
        });
    },

    handleAnswer(isCorrect) {
        if (isCorrect) {
            this.quiz.score++;
        }
        this.quiz.currentQuestion++;
        this.showNextQuestion();
    },

    getWrongOptions(correctName) {
        return [...PADISAHLAR_DATA]
            .filter(p => p.name !== correctName)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(p => p.name);
    },

    // Voice Support
    speakCurrentCard() {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stop current speech
            const padişah = PADISAHLAR_DATA[this.currentCardIndex];
            const textToSpeak = `${padişah.name}. ${padişah.reign} yılları arasında hüküm sürmüştür. ${padişah.facts.join(' ')}`;

            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.lang = 'tr-TR';
            utterance.rate = document.getElementById('speech-rate')?.value || 1;
            window.speechSynthesis.speak(utterance);
        }
    },

    // Theme Support
    changeTheme(theme) {
        document.body.className = `theme-${theme}`;
        localStorage.setItem('preferred-theme', theme);
    },

    getRank(score) {
        return this.quiz.ranks.slice().reverse().find(r => score >= r.threshold).title;
    },

    endQuiz() {
        document.getElementById('quiz-game').style.display = 'none';
        document.getElementById('quiz-result').style.display = 'block';
        document.getElementById('final-score').textContent = `Toplam Puan: ${this.quiz.score} / 20`;
        document.getElementById('final-rank').textContent = `Nihai Rütbe: ${this.getRank(this.quiz.score)}`;
    },

    setupPWA() {
        let deferredPrompt;
        const installBtn = document.getElementById('pwa-install-btn');

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            installBtn.style.display = 'block';
        });

        installBtn.onclick = () => {
            const modal = document.getElementById('install-modal');
            modal.style.display = 'block';

            // Detect platform for guide
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            if (isIOS) {
                modal.querySelector('.apple').style.display = 'block';
                modal.querySelector('#pwa-install-confirm').style.display = 'none';
            } else {
                modal.querySelector('.android').style.display = 'block';
            }
        };

        const confirmBtn = document.getElementById('pwa-install-confirm');
        confirmBtn.onclick = async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    installBtn.style.display = 'none';
                }
                deferredPrompt = null;
                document.getElementById('install-modal').style.display = "none";
            }
        };

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js');
        }
    }
};

window.onload = () => app.init();
