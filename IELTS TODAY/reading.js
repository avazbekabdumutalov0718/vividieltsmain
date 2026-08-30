(() => {
  const readingDatabase = {
    single: [
      {
        id: 'passage-1',
        title: 'The link between low light and mood',
        meta: 'Passage 1 · 13 questions · 20 min',
        description: 'Notes completion + True/False/Not Given',
        href: 'reading-test-1.html',
        source: 'Reading.pdf',
        type: 'single'
      },
      {
        id: 'passage-2',
        title: 'Bird Migration',
        meta: 'Passage 2 · 13 questions · 20 min',
        description: 'Matching headings + MCQ + Sentence completion',
        href: 'reading-test-2.html',
        source: 'Reading.pdf',
        type: 'single'
      },
      {
        id: 'passage-3',
        title: 'Listening to the Ocean',
        meta: 'Passage 1 · 13 questions · 20 min',
        description: 'True/False/Not Given + Paragraph Matching + MCQ',
        href: 'reading-test-3.html',
        source: 'Reading.pdf',
        type: 'single'
      },
      {
        id: 'passage-4',
        title: 'The Blockbuster Phenomenon',
        meta: 'Passage 1 · 13 questions · 20 min',
        description: 'Paragraph Matching + Sentence Completion + MCQ',
        href: 'reading-test-4.html',
        source: 'Reading.pdf',
        type: 'single'
      },
      {
        id: 'passage-5',
        title: 'The lost animals of Australia',
        meta: 'Passage 3 · 14 questions · 20 min',
        description: 'MCQ + Matching Sentence Endings + Yes/No/Not Given',
        href: 'reading-test-5.html',
        source: 'Reading.pdf',
        type: 'single'
      },
      {
        id: 'passage-6',
        title: 'The Blockbuster Phenomenon: a new museum trend',
        meta: 'Passage 1 · 13 questions · 20 min',
        description: 'Sentence Completion + Matching + Choose Two Letters',
        href: 'reading-test-6.html',
        source: 'Reading.pdf',
        type: 'single'
      },
      {
        id: 'passage-7',
        title: 'The Cause of Linguistic Change',
        meta: 'Passage 3 · 14 questions · 20 min',
        description: 'Summary Completion + True/False/Not Given + Matching',
        href: 'reading-test-7.html',
        source: 'PDF Passage 3',
        type: 'single'
      },
      {
        id: 'passage-8',
        title: 'Traditional Maori Medicine',
        meta: 'Passage 1 · 13 questions · 20 min',
        description: 'True/False/Not Given + Short History Notes Completion',
        href: 'reading-test-8.html',
        source: 'Diyorbek IELTS',
        type: 'single'
      }
    ]
  };

  const articleDatabase = [
    {
      id: 'article-1',
      title: 'Healing Outdoors: How Nature Helps Us Process Loss',
      meta: 'Article 1 · B2–C1 · 6 min read',
      description: 'Highlight, notes, live dictionary + 20-word vocab test',
      href: 'article-1.html'
    },
    {
      id: 'article-2',
      title: 'Post-Workout Nutrition: Simple Pillars for Recovery',
      meta: 'Article 2 · B2–C1 · 6 min read',
      description: 'Science-based reading with vocabulary clues and notes',
      href: 'article-2.html'
    },
    {
      id: 'article-3',
      title: 'How Hot Weather Accelerates Biological Ageing',
      meta: 'Article 3 · C1 · 6 min read',
      description: 'Academic style text with a short vocabulary practice round',
      href: 'article-3.html'
    },
    {
      id: 'article-4',
      title: 'Couples Who Cope Together, Stay Together',
      meta: 'Article 4 · B2–C1 · 6 min read',
      description: 'Relationship and wellbeing reading with highlighting tools',
      href: 'article-4.html'
    },
    {
      id: 'article-5',
      title: 'The Carbon-Free Energy of the Future: Fusion Breakthrough',
      meta: 'Article 5 · C1–C2 · 7 min read',
      description: 'Nuclear fusion breakthrough report from The Guardian with C1 vocabulary',
      href: 'article-5.html'
    }
  ];

  const state = {
    view: 'home',
    stack: []
  };

  const navRoot = document.getElementById('readingNavigator');
  const backBtn = document.getElementById('readingBackBtn');

  function renderHome() {
    navRoot.innerHTML = `
      <div class="unit-grid reading-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
        <button class="unit-card reading-card" type="button" data-view="single">
          <span class="unit-card-num">Reading Real Exam Practice</span>
          <span class="unit-card-title">All Passages</span>
          <span class="unit-card-count">Single-passage practice from the reading database</span>
          <span class="reading-card-cta">Open practice →</span>
        </button>

        <button class="unit-card reading-card" type="button" data-view="articles">
          <span class="unit-card-num">Article</span>
          <span class="unit-card-title">Independent reading articles</span>
          <span class="unit-card-count">Short academic-style articles with notes and vocabulary support</span>
          <span class="reading-card-cta">Open articles →</span>
        </button>

        <a class="unit-card reading-card" href="reading-rocket/index.html" style="text-decoration:none; text-align:left; cursor:pointer;">
          <span class="unit-card-num">Interactive Booster</span>
          <span class="unit-card-title">Avazbek Reader Booster</span>
          <span class="unit-card-count">30 passages, interactive audio, flashcards and 7 full mock tests</span>
          <span class="reading-card-cta">Open booster →</span>
        </a>
      </div>
    `;

    navRoot.querySelectorAll('[data-view]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-view');
        state.stack.push({ view: 'home' });
        if (target === 'single') {
          state.view = 'single';
          renderSection('single');
        } else if (target === 'articles') {
          state.view = 'articles';
          renderArticles();
        }
      });
    });
  }

  function renderSection(section) {
    const items = readingDatabase.single;
    const title = 'All Passages';

    navRoot.innerHTML = `
      <div class="dash-card" style="margin-bottom:16px;">
        <h3>${title}</h3>
        <p style="margin:8px 0 0; color:var(--text-muted);">These cards are populated from the reading database and linked to the existing reading pages.</p>
      </div>
      <div class="unit-grid reading-grid">
        ${items.map((item) => `
          <a href="${item.href}" class="unit-card reading-card">
            <span class="unit-card-num">${item.meta}</span>
            <span class="unit-card-title">${item.title}</span>
            <span class="unit-card-count">${item.description}</span>
            <span class="reading-card-cta">Open passage →</span>
          </a>
        `).join('')}
      </div>
    `;
  }

  function renderArticles() {
    navRoot.innerHTML = `
      <div class="unit-grid reading-grid">
        ${articleDatabase.map((article) => `
          <a href="${article.href}" class="unit-card reading-card">
            <span class="unit-card-num">${article.meta}</span>
            <span class="unit-card-title">${article.title}</span>
            <span class="unit-card-count">${article.description}</span>
            <span class="reading-card-cta">Read article →</span>
          </a>
        `).join('')}
      </div>
    `;
  }

  function renderCurrentView() {
    if (!navRoot) return;

    if (state.view === 'home') {
      if (backBtn) backBtn.style.display = 'none';
      renderHome();
      return;
    }

    if (state.view === 'articles') {
      if (backBtn) backBtn.style.display = 'inline-flex';
      renderArticles();
      return;
    }

    if (state.view === 'single') {
      if (backBtn) backBtn.style.display = 'inline-flex';
      renderSection('single');
    }
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (state.stack.length > 0) {
        const previous = state.stack.pop();
        state.view = previous.view;
        renderCurrentView();
        return;
      }

      state.view = 'home';
      renderCurrentView();
    });
  }

  renderCurrentView();
})();
