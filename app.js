const app = {
    currentView: 'dashboard',
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
        // Hide loader after assets are ready (simulated for now)
        setTimeout(() => {
            const loader = document.getElementById('loader');
            const progress = loader.querySelector('.progress-bar');
            progress.style.width = '100%';
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 500);
            }, 500);
        }, 1500);

        this.renderCards();
        this.renderTimeline();
        this.setupEventListeners();
        this.setupPWA();
    },

    setupEventListeners() {
        document.getElementById('period-filter').addEventListener('change', (e) => {
            this.renderCards(e.target.value);
        });

        // Close modal
        document.querySelector('.close-modal').onclick = () => {
            document.getElementById('install-modal').style.display = "none";
        };
    },

    switchView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(`view-${viewId}`).classList.add('active');
        this.currentView = viewId;
        window.scrollTo(0, 0);
    },

    renderCards(filter = 'all') {
        const container = document.getElementById('cards-container');
        container.innerHTML = '';

        const filtered = filter === 'all'
            ? PADISAHLAR_DATA
            : PADISAHLAR_DATA.filter(s => s.period === filter);

        filtered.forEach(padişah => {
            const card = document.createElement('div');
            card.className = 'padişah-card';
            card.innerHTML = `
                <h3>${padişah.id}. ${padişah.name}</h3>
                <div class="padişah-meta">
                    <span>${padişah.period}</span>
                    <span>${padişah.reign}</span>
                </div>
                <ul class="padişah-facts">
                    ${padişah.facts.map(f => `<li>${f}</li>`).join('')}
                </ul>
            `;
            container.appendChild(card);
        });
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
        return [...SULTANS_DATA].sort(() => 0.5 - Math.random()).slice(0, 20);
    },

    showNextQuestion() {
        if (this.quiz.currentQuestion >= this.quiz.questions.length) {
            this.endQuiz();
            return;
        }

        const sultan = this.quiz.questions[this.quiz.currentQuestion];
        const fact = sultan.facts[Math.floor(Math.random() * sultan.facts.length)];

        document.getElementById('question-text').textContent = `"${fact}" - Bu hangi padişahın özelliğidir?`;
        document.getElementById('quiz-score').textContent = `Puan: ${this.quiz.score}`;
        document.getElementById('quiz-rank').textContent = `Rütbe: ${this.getRank(this.quiz.score)}`;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        const options = this.getWrongOptions(sultan.name);
        options.push(sultan.name);
        options.sort(() => 0.5 - Math.random());

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => this.handleAnswer(opt === sultan.name);
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
        return [...SULTANS_DATA]
            .filter(s => s.name !== correctName)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(s => s.name);
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
