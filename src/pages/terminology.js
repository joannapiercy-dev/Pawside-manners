import { termDecks, termQuizzes } from '../data/terminology.js';
import { nav, setupHamburger } from './home.js';
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

  setupHamburger();
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
  let showAll = false;

  function render(m, idx = 0, isFlipped = false, showAll = false) {
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
          ${deck.id === 'medical-jargon' ? `<button class="mode-tab ${mode==='reference'?'active':''}" data-mode="reference">📋 Quick reference</button>` : ''}
        </div>

        ${mode === 'flashcards' ? renderFlashcards(deck, cardIndex, flipped, showAll) : ''}
        ${mode === 'quiz' ? renderTermQuiz(quizzes) : ''}
        ${mode === 'reference' ? renderJargonReference(deck) : ''}

        <div style="margin-top:2rem;">
          <button class="btn-ghost" id="back-btn">← Back to terminology</button>
        </div>
      </div>
    `;

    setupHamburger();
    container.querySelectorAll('.mode-tab').forEach(tab => {
      tab.addEventListener('click', () => render(tab.dataset.mode));
    });
    document.getElementById('back-btn').addEventListener('click', () => navigate('/terminology'));

    if (mode === 'flashcards') setupFlashcards(deck, cardIndex, render, showAll);
    if (mode === 'quiz') setupTermQuiz(quizzes);
  }

  render(mode);
}

// ── FLASHCARD KNOWN STATE (persisted per deck) ──
function getKnownIds(deckId) {
  try { return JSON.parse(localStorage.getItem('known-' + deckId) || '[]'); } catch { return []; }
}
function setKnownIds(deckId, ids) {
  try { localStorage.setItem('known-' + deckId, JSON.stringify(ids)); } catch {}
}
function isKnown(deckId, termId) { return getKnownIds(deckId).includes(termId); }
function toggleKnown(deckId, termId) {
  const ids = getKnownIds(deckId);
  const idx = ids.indexOf(termId);
  if (idx === -1) ids.push(termId); else ids.splice(idx, 1);
  setKnownIds(deckId, ids);
}

// ── FLASHCARDS ──
function renderFlashcards(deck, idx, flipped, showAll) {
  const knownIds = getKnownIds(deck.id);
  const activeTerms = showAll ? deck.terms : deck.terms.filter(t => !knownIds.includes(t.id));
  const displayTerms = activeTerms.length > 0 ? activeTerms : deck.terms;
  const allHidden = activeTerms.length === 0;
  const safeIdx = Math.min(idx, displayTerms.length - 1);
  const term = displayTerms[safeIdx];
  const known = knownIds.includes(term.id);
  const remaining = deck.terms.length - knownIds.length;

  return `
    <div style="margin-bottom:1rem;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;flex-wrap:wrap;gap:6px;">
        <span style="font-size:13px;color:var(--ink-light);">${safeIdx + 1} / ${displayTerms.length}${!showAll && knownIds.length > 0 ? ` <span style="color:var(--green-soft);">· ${knownIds.length} known</span>` : ''}</span>
        <div style="display:flex;gap:6px;align-items:center;">
          <span class="tag tag-mid">${term.category}</span>
          ${known ? '<span style="font-size:11px;font-weight:600;padding:3px 8px;border-radius:20px;background:var(--green-light);color:var(--green-soft);">✓ Got it</span>' : ''}
        </div>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" style="width:${Math.round((safeIdx+1)/displayTerms.length*100)}%"></div>
      </div>
    </div>

    ${allHidden ? `
      <div style="background:var(--green-light);border:1.5px solid var(--model-border);border-radius:var(--radius-lg);padding:2.5rem;text-align:center;">
        <div style="font-size:2rem;margin-bottom:0.75rem;">🎉</div>
        <div style="font-weight:600;color:var(--green-soft);margin-bottom:0.5rem;">You've marked all cards as known!</div>
        <p style="font-size:14px;color:var(--ink-mid);margin-bottom:1.25rem;">Click "Show all" to review them, or shuffle to start fresh.</p>
      </div>
    ` : `
    <div id="flashcard" style="
      background:${known ? 'var(--green-light)' : 'white'};
      border:${known ? '1.5px solid var(--model-border)' : '1px solid var(--warm-mid)'};
      border-radius:var(--radius-lg);padding:2.5rem 2rem;min-height:260px;cursor:pointer;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      text-align:center;box-shadow:var(--shadow-sm);transition:box-shadow 0.15s;
      position:relative;user-select:none;">
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
    `}

    <div style="display:flex;gap:8px;margin-top:1.25rem;justify-content:center;flex-wrap:wrap;">
      <button class="btn-ghost" id="prev-btn" ${safeIdx === 0 || allHidden ? 'disabled style="opacity:0.3;"' : ''}>← Prev</button>
      ${!allHidden ? `<button class="btn-secondary" id="flip-btn">${flipped ? 'Show term' : 'Reveal'}</button>` : ''}
      <button class="btn-ghost" id="next-btn" ${safeIdx === displayTerms.length-1 || allHidden ? 'disabled style="opacity:0.3;"' : ''}>Next →</button>
    </div>

    <div style="display:flex;gap:8px;margin-top:0.75rem;justify-content:center;flex-wrap:wrap;">
      ${!allHidden ? `<button id="got-it-btn" style="
        padding:8px 18px;border-radius:var(--radius);font-size:14px;font-weight:600;cursor:pointer;
        font-family:'DM Sans',sans-serif;border:1.5px solid;transition:all 0.15s;
        background:${known ? 'white' : 'var(--green-soft)'};
        color:${known ? 'var(--ink-mid)' : 'white'};
        border-color:${known ? 'var(--warm-dark)' : 'var(--green-soft)'};
      ">${known ? '↩ Undo' : '✓ Got it!'}</button>` : ''}
      <button class="btn-ghost" id="shuffle-btn" style="font-size:13px;">🔀 Shuffle</button>
      <button class="btn-ghost" id="show-all-btn" style="font-size:13px;">${showAll || knownIds.length === 0 ? '' : `👁 Show all (${deck.terms.length})`}</button>
    </div>
  `;
}

function setupFlashcards(deck, idx, render, showAll = false) {
  const knownIds = getKnownIds(deck.id);
  const activeTerms = showAll ? deck.terms : deck.terms.filter(t => !knownIds.includes(t.id));
  const displayTerms = activeTerms.length > 0 ? activeTerms : deck.terms;
  let currentIdx = Math.min(idx, displayTerms.length - 1);
  let currentFlipped = false;
  let currentShowAll = showAll;

  document.getElementById('flashcard')?.addEventListener('click', () => {
    currentFlipped = !currentFlipped;
    if (currentFlipped) markComplete('term-' + deck.id, 'flashcard');
    render('flashcards', currentIdx, currentFlipped, currentShowAll);
  });

  document.getElementById('flip-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentFlipped = !currentFlipped;
    render('flashcards', currentIdx, currentFlipped, currentShowAll);
  });

  document.getElementById('got-it-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const term = displayTerms[currentIdx];
    toggleKnown(deck.id, term.id);
    currentFlipped = false;
    // If marking as known and not showing all, advance to next card
    const newKnown = getKnownIds(deck.id);
    const newActive = currentShowAll ? deck.terms : deck.terms.filter(t => !newKnown.includes(t.id));
    const newDisplay = newActive.length > 0 ? newActive : deck.terms;
    const newIdx = Math.min(currentIdx, newDisplay.length - 1);
    render('flashcards', newIdx, false, currentShowAll);
    setupFlashcards(deck, newIdx, render, currentShowAll);
  });

  document.getElementById('prev-btn')?.addEventListener('click', () => {
    if (currentIdx > 0) { currentFlipped = false; render('flashcards', currentIdx - 1, false, currentShowAll); }
  });

  document.getElementById('next-btn')?.addEventListener('click', () => {
    if (currentIdx < displayTerms.length - 1) { currentFlipped = false; render('flashcards', currentIdx + 1, false, currentShowAll); }
  });

  document.getElementById('show-all-btn')?.addEventListener('click', () => {
    currentShowAll = !currentShowAll;
    currentFlipped = false;
    render('flashcards', 0, false, currentShowAll);
    setupFlashcards(deck, 0, render, currentShowAll);
  });

  document.getElementById('shuffle-btn')?.addEventListener('click', () => {
    const terms = currentShowAll ? deck.terms : deck.terms.filter(t => !getKnownIds(deck.id).includes(t.id));
    const active = terms.length > 0 ? terms : deck.terms;
    for (let i = active.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [active[i], active[j]] = [active[j], active[i]];
    }
    currentFlipped = false;
    render('flashcards', 0, false, currentShowAll);
    setupFlashcards(deck, 0, render, currentShowAll);
  });

  document.onkeydown = (e) => {
    if (e.key === 'ArrowRight' && currentIdx < displayTerms.length - 1) { currentFlipped = false; render('flashcards', currentIdx + 1, false, currentShowAll); }
    if (e.key === 'ArrowLeft' && currentIdx > 0) { currentFlipped = false; render('flashcards', currentIdx - 1, false, currentShowAll); }
    if (e.key === ' ') { e.preventDefault(); currentFlipped = !currentFlipped; render('flashcards', currentIdx, currentFlipped, currentShowAll); }
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

// ── JARGON QUICK REFERENCE ──
function renderJargonReference(deck) {
  // Group terms by top-level category
  const sectionOrder = [
    { key: 'General', label: 'General clinical terms' },
    { key: 'Conditions', label: 'Conditions' },
    { key: 'Procedures', label: 'Procedures' },
    { key: 'Acronyms', label: 'Acronyms — general' },
    { key: 'Acronyms (Internal)', label: 'Acronyms — internal clinic use' },
  ];

  // Collect all unique top-level categories from the terms
  const allCats = [...new Set(deck.terms.map(t => {
    const c = t.category || 'General';
    // Map to top-level section
    if (c.startsWith('Acronyms (Internal)')) return 'Acronyms (Internal)';
    if (c.startsWith('Acronyms')) return 'Acronyms';
    if (c.includes('Procedures') || c === 'Conditions / Procedures') return 'Procedures';
    if (c === 'Urology' || c === 'Dentistry / Oral' || c === 'Conditions / Procedures') return 'Conditions';
    if (['Dermatology','Gastroenterology','Neurology','Oncology','Cardiology',
         'Internal Medicine','Respiratory','ENT','Breed-specific','Public Health',
         'Orthopaedics','Ophthalmology'].includes(c)) return 'General';
    return 'General';
  }))];

  function termsForSection(sectionKey) {
    return deck.terms.filter(t => {
      const c = t.category || 'General';
      if (sectionKey === 'Acronyms (Internal)') return c.startsWith('Acronyms (Internal)');
      if (sectionKey === 'Acronyms') return c.startsWith('Acronyms') && !c.startsWith('Acronyms (Internal)');
      if (sectionKey === 'Procedures') return c.includes('Procedures') || c === 'Conditions / Procedures';
      if (sectionKey === 'Conditions') return c === 'Urology' || c === 'Dentistry / Oral';
      // General = everything else that isn't the above
      return !c.startsWith('Acronyms') && !c.includes('Procedures') &&
             c !== 'Urology' && c !== 'Dentistry / Oral' && c !== 'Conditions / Procedures';
    });
  }

  const sections = sectionOrder.map(s => ({
    ...s,
    terms: termsForSection(s.key)
  })).filter(s => s.terms.length > 0);

  return `
    <div style="display:flex;flex-direction:column;gap:2rem;">
      ${sections.map(section => `
        <div>
          <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;
            color:var(--ink-light);margin-bottom:0.75rem;padding-bottom:6px;
            border-bottom:2px solid var(--warm-dark);">
            ${section.label}
          </div>
          <div style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;font-family:'DM Sans',sans-serif;">
              <thead>
                <tr style="border-bottom:1px solid var(--warm-dark);">
                  <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;
                    letter-spacing:0.07em;color:var(--ink-light);padding:5px 10px;width:28%;">Term</th>
                  <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;
                    letter-spacing:0.07em;color:var(--ink-light);padding:5px 10px;">Meaning</th>
                </tr>
              </thead>
              <tbody>
                ${section.terms.map((t, i) => `
                  <tr style="border-bottom:1px solid var(--warm-mid);background:${i%2===0?'white':'var(--warm)'};">
                    <td style="padding:9px 10px;vertical-align:top;">
                      <div style="font-weight:600;font-size:13.5px;color:var(--ink);">${t.term}</div>
                      ${t.pronunciation ? `<div style="font-size:11.5px;color:var(--ink-light);font-style:italic;">/ ${t.pronunciation} /</div>` : ''}
                    </td>
                    <td style="padding:9px 10px;vertical-align:top;font-size:13px;color:var(--ink-mid);line-height:1.55;">${t.meaning}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `).join('')}
    </div>`;
}
