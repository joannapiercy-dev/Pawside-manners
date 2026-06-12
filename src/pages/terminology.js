import { termDecks, termQuizzes } from '../data/terminology.js';
import { nav } from './home.js';
import { markComplete } from '../lib/progress.js';

export function renderTerminology(container, navigate) {
  container.innerHTML = `
    ${nav('/terminology', navigate)}
    <div class="page-content">
      <h2 style="margin-bottom:0.5rem;">Medical terminology</h2>
      <p style="color:var(--ink-mid);margin-bottom:2rem;">Learn medical jargon and common medications — what they mean and how to explain them to clients.</p>

      <p class="section-label">Choose a deck</p>
      <div class="card-grid">
        ${termDecks.map(deck => `
          <div class="module-card" data-deck="${deck.id}" style="cursor:pointer;">
            <div class="module-icon" style="background:${deck.color};font-size:1.6rem;">${deck.icon}</div>
            <h3 style="font-size:1rem;">${deck.title}</h3>
            <p>${deck.description}</p>
            <div class="module-meta">
              <span class="tag tag-mid">${deck.terms.length} terms</span>
              <span class="tag tag-mid">Flashcards + Quiz</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  container.querySelectorAll('[data-deck]').forEach(card => {
    card.addEventListener('click', () => navigate('/terminology/' + card.dataset.deck));
  });
}

export function renderDeck(container, navigate, deckId) {
  const deck = termDecks.find(d => d.id === deckId);
  if (!deck) { navigate('/terminology'); return; }
  const quizzes = termQuizzes.filter(q => q.deckId === deckId);

  let mode = 'flashcards';
  let cardIndex = 0;
  let flipped = false;

  function render(m, idx = 0, isFlipped = false) {
    window.scrollTo(0, 0);
    mode = m;
    cardIndex = idx;
    flipped = isFlipped;

    container.innerHTML = `
      ${nav('/terminology', navigate)}
      <div class="scenario-layout">
        <div class="breadcrumb">
          <a href="#/terminology">Terminology</a> › ${deck.title}
        </div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1.5rem;">
          <div style="width:44px;height:44px;background:${deck.color};border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">${deck.icon}</div>
          <h2 style="font-size:1.4rem;">${deck.title}</h2>
        </div>

        <div class="mode-tabs">
          <button class="mode-tab ${mode==='flashcards'?'active':''}" data-mode="flashcards">🃏 Flashcards</button>
          <button class="mode-tab ${mode==='quiz'?'active':''}" data-mode="quiz">✅ Quiz</button>
        </div>

        ${mode === 'flashcards' ? renderFlashcards(deck, cardIndex, flipped) : ''}
        ${mode === 'quiz' ? renderTermQuiz(quizzes) : ''}

        <div style="margin-top:2rem;">
          <button class="btn-ghost" id="back-btn">← Back to terminology</button>
        </div>
      </div>
    `;

    container.querySelectorAll('.mode-tab').forEach(tab => {
      tab.addEventListener('click', () => render(tab.dataset.mode));
    });
    document.getElementById('back-btn').addEventListener('click', () => navigate('/terminology'));

    if (mode === 'flashcards') setupFlashcards(deck, cardIndex, render);
    if (mode === 'quiz') setupTermQuiz(quizzes);
  }

  render(mode);
}

// ── FLASHCARDS ──
function renderFlashcards(deck, idx, flipped) {
  const term = deck.terms[idx];
  const progress = `${idx + 1} / ${deck.terms.length}`;

  return `
    <div style="margin-bottom:1rem;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:13px;color:var(--ink-light);">${progress}</span>
        <span class="tag tag-mid">${term.category}</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" style="width:${Math.round((idx+1)/deck.terms.length*100)}%"></div>
      </div>
    </div>

    <div id="flashcard" style="
      background:white;
      border:1px solid var(--warm-mid);
      border-radius:var(--radius-lg);
      padding:2.5rem 2rem;
      min-height:260px;
      cursor:pointer;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      text-align:center;
      box-shadow:var(--shadow-sm);
      transition:box-shadow 0.15s;
      position:relative;
      user-select:none;
    ">
      ${!flipped ? `
        <div style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-light);margin-bottom:1rem;">Term</div>
        <div style="font-size:1.8rem;font-family:'DM Serif Display',serif;color:var(--ink);margin-bottom:0.75rem;">${term.term}</div>
        ${term.pronunciation ? `<div style="font-size:13.5px;color:var(--ink-light);font-style:italic;">/ ${term.pronunciation} /</div>` : ''}
        <div style="margin-top:1.5rem;font-size:12.5px;color:var(--ink-light);">Tap to reveal</div>
      ` : `
        <div style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-light);margin-bottom:1rem;">Definition</div>
        <div style="font-size:1.1rem;font-family:'DM Serif Display',serif;color:var(--ink);margin-bottom:1.25rem;">${term.term}</div>
        <p style="font-size:14.5px;color:var(--ink-mid);line-height:1.65;margin-bottom:1.25rem;">${term.meaning}</p>
        <div style="background:${deck.color};border-radius:var(--radius);padding:1rem;width:100%;text-align:left;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${deck.colorDark};margin-bottom:5px;">How to explain to a client</div>
          <p style="font-size:14px;color:var(--ink);line-height:1.6;">"${term.clientExplanation}"</p>
        </div>
      `}
    </div>

    <div style="display:flex;gap:10px;margin-top:1.25rem;justify-content:center;">
      <button class="btn-ghost" id="prev-btn" ${idx === 0 ? 'disabled style="opacity:0.3;"' : ''}>← Previous</button>
      <button class="btn-secondary" id="flip-btn">${flipped ? 'Show term' : 'Reveal definition'}</button>
      <button class="btn-ghost" id="next-btn" ${idx === deck.terms.length-1 ? 'disabled style="opacity:0.3;"' : ''}>Next →</button>
    </div>

    <div style="margin-top:1rem;text-align:center;">
      <button class="btn-ghost" id="shuffle-btn" style="font-size:13px;">🔀 Shuffle deck</button>
    </div>
  `;
}

function setupFlashcards(deck, idx, render) {
  let currentIdx = idx;
  let deckOrder = [...Array(deck.terms.length).keys()];
  let currentFlipped = false;

  function updateCard(newIdx, flip = false) {
    currentIdx = newIdx;
    currentFlipped = flip;
    const term = deck.terms[deckOrder[currentIdx]];
    const progress = `${currentIdx + 1} / ${deck.terms.length}`;

    // Re-render just the card content
    render('flashcards', currentIdx);
  }

  document.getElementById('flashcard').addEventListener('click', () => {
    currentFlipped = !currentFlipped;
    if (currentFlipped) markComplete('term-' + deck.id, 'flashcard');
    render('flashcards', currentIdx, currentFlipped);
  });

  document.getElementById('flip-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentFlipped = !currentFlipped;
    render('flashcards', currentIdx, currentFlipped);
  });

  document.getElementById('prev-btn')?.addEventListener('click', () => {
    if (currentIdx > 0) { currentFlipped = false; render('flashcards', currentIdx - 1, false); }
  });

  document.getElementById('next-btn')?.addEventListener('click', () => {
    if (currentIdx < deck.terms.length - 1) { currentFlipped = false; render('flashcards', currentIdx + 1, false); }
  });

  document.getElementById('shuffle-btn')?.addEventListener('click', () => {
    for (let i = deck.terms.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck.terms[i], deck.terms[j]] = [deck.terms[j], deck.terms[i]];
    }
    currentFlipped = false;
    render('flashcards', 0, false);
  });

  // Keyboard navigation
  document.onkeydown = (e) => {
    if (e.key === 'ArrowRight' && currentIdx < deck.terms.length - 1) { currentFlipped = false; render('flashcards', currentIdx + 1, false); }
    if (e.key === 'ArrowLeft' && currentIdx > 0) { currentFlipped = false; render('flashcards', currentIdx - 1, false); }
    if (e.key === ' ') { e.preventDefault(); currentFlipped = !currentFlipped; render('flashcards', currentIdx, currentFlipped); }
  };
}

// ── TERM QUIZ ──
function renderTermQuiz(quizzes) {
  if (!quizzes.length) return `<div class="scenario-card"><p style="color:var(--ink-light);">No quiz available for this deck yet.</p></div>`;

  const quiz = quizzes[0];
  return `
    <div id="term-quiz-container">
      <div class="scenario-card">
        <h3 style="margin-bottom:1rem;font-family:'DM Sans',sans-serif;font-weight:600;font-size:1rem;">${quiz.title}</h3>
        <div id="tq-question-area"></div>
      </div>
      <div id="tq-score-area" class="hidden" style="text-align:center;padding:2rem;">
        <div style="font-size:3rem;font-family:'DM Serif Display',serif;" id="tq-score"></div>
        <p style="color:var(--ink-mid);margin:0.5rem 0 1.5rem;" id="tq-score-msg"></p>
        <button class="btn-primary" id="tq-restart-btn">Try again</button>
      </div>
    </div>
  `;
}

function setupTermQuiz(quizzes) {
  if (!quizzes.length) return;
  const quiz = quizzes[0];
  let qIdx = 0;
  let score = 0;
  let answered = false;

  function showQuestion() {
    answered = false;
    const q = quiz.questions[qIdx];
    const area = document.getElementById('tq-question-area');
    if (!area) return;

    area.innerHTML = `
      <div style="font-size:12px;color:var(--ink-light);margin-bottom:1rem;">Question ${qIdx+1} of ${quiz.questions.length}</div>
      <div class="progress-bar-wrap" style="margin-bottom:1.25rem;">
        <div class="progress-bar-fill" style="width:${Math.round(qIdx/quiz.questions.length*100)}%"></div>
      </div>
      <p style="font-size:15px;font-weight:500;margin-bottom:1.25rem;line-height:1.5;">${q.question}</p>
      <div id="tq-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" data-idx="${i}">${opt}</button>
        `).join('')}
      </div>
      <div id="tq-feedback" class="hidden"></div>
      <div id="tq-next" class="hidden" style="margin-top:1rem;">
        <button class="btn-primary" id="tq-next-btn">${qIdx < quiz.questions.length - 1 ? 'Next question →' : 'See results'}</button>
      </div>
    `;

    area.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', function() {
        if (answered) return;
        answered = true;
        const selected = parseInt(this.dataset.idx);
        area.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
        const feedback = document.getElementById('tq-feedback');

        if (selected === q.correct) {
          this.classList.add('correct');
          score++;
          feedback.className = 'feedback-box feedback-correct';
          feedback.innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
        } else {
          this.classList.add('incorrect');
          area.querySelectorAll('.quiz-option')[q.correct].classList.add('correct');
          feedback.className = 'feedback-box feedback-incorrect';
          feedback.innerHTML = `<strong>Not quite.</strong> ${q.explanation}`;
        }
        feedback.classList.remove('hidden');
        document.getElementById('tq-next').classList.remove('hidden');

        document.getElementById('tq-next-btn').addEventListener('click', () => {
          qIdx++;
          if (qIdx < quiz.questions.length) {
            showQuestion();
          } else {
            showScore();
          }
        });
      });
    });
  }

  function showScore() {
    document.getElementById('tq-question-area').innerHTML = '';
    const scoreArea = document.getElementById('tq-score-area');
    scoreArea.classList.remove('hidden');
    const pct = Math.round(score / quiz.questions.length * 100);
    document.getElementById('tq-score').textContent = `${score} / ${quiz.questions.length}`;
    document.getElementById('tq-score-msg').textContent =
      pct === 100 ? 'Perfect score! Excellent work.' :
      pct >= 75 ? 'Great work — you have a strong grasp of this.' :
      pct >= 50 ? 'Good effort — review the ones you missed and try again.' :
      'Keep studying the flashcards and give it another go.';

    markComplete('term-quiz-' + (quizzes[0]?.deckId || 'unknown'), 'quiz');
    document.getElementById('tq-restart-btn').addEventListener('click', () => {
      qIdx = 0; score = 0;
      scoreArea.classList.add('hidden');
      showQuestion();
    });
  }

  showQuestion();
}
