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

  function render(m, idx = 0, isFlipped = false, newShowAll = false) {
    window.scrollTo(0, 0);
    mode = m;
    cardIndex = idx;
    flipped = isFlipped;
    showAll = newShowAll;

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
          ${['medical-jargon','medications','parasiticides','vaccines'].includes(deck.id) ? `<button class="mode-tab ${mode==='reference'?'active':''}" data-mode="reference">📋 Quick reference</button>` : ''}
          <button class="mode-tab ${mode==='quiz'?'active':''}" data-mode="quiz">✅ Quiz</button>
        </div>

        ${mode === 'flashcards' ? renderFlashcards(deck, cardIndex, flipped, showAll) : ''}
        ${mode === 'quiz' ? renderTermQuiz(quizzes) : ''}
        ${mode === 'reference' && deck.id === 'medical-jargon' ? renderJargonReference(deck) : ''}
        ${mode === 'reference' && deck.id === 'medications' ? renderMedsReference(deck) : ''}
        ${mode === 'reference' && deck.id === 'parasiticides' ? renderParasiticidesReference(deck) : ''}
        ${mode === 'reference' && deck.id === 'vaccines' ? renderVaccineReference(deck) : ''}

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
    const newKnown = getKnownIds(deck.id);
    const newActive = currentShowAll ? deck.terms : deck.terms.filter(t => !newKnown.includes(t.id));
    const newDisplay = newActive.length > 0 ? newActive : deck.terms;
    const newIdx = Math.min(currentIdx, newDisplay.length - 1);
    render('flashcards', newIdx, false, currentShowAll);
  });

  document.getElementById('prev-btn')?.addEventListener('click', () => {
    if (currentIdx > 0) { currentFlipped = false; render('flashcards', currentIdx - 1, false, currentShowAll); }
  });

  document.getElementById('next-btn')?.addEventListener('click', () => {
    if (currentIdx < displayTerms.length - 1) { currentFlipped = false; render('flashcards', currentIdx + 1, false, currentShowAll); }
  });

  document.getElementById('show-all-btn')?.addEventListener('click', () => {
    currentShowAll = !currentShowAll;
    render('flashcards', 0, false, currentShowAll);
  });

  document.getElementById('shuffle-btn')?.addEventListener('click', () => {
    for (let i = deck.terms.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck.terms[i], deck.terms[j]] = [deck.terms[j], deck.terms[i]];
    }
    render('flashcards', 0, false, currentShowAll);
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
    terms: termsForSection(s.key).sort((a, b) => a.term.localeCompare(b.term))
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

// ── MEDICATIONS QUICK REFERENCE ──
function renderMedsReference(deck) {
  const sections = [
    {
      label: 'Antibiotics',
      icon: '🦠',
      ids: ['m-01','m-03','m-07','m-08','m-10','m-13','m-23','m-35'],
      note: 'Always complete the full course. Give most with food.'
    },
    {
      label: 'Pain relief — NSAIDs',
      icon: '💊',
      ids: ['m-11','m-19','m-22','m-27'],
      note: 'Always give with food. Never give to cats without specific veterinary direction. Never combine two NSAIDs.'
    },
    {
      label: 'Pain relief — opioids & other',
      icon: '💊',
      ids: ['m-05','m-18'],
      note: 'sr buprenorphine = cats only, lasts 72 hours.'
    },
    {
      label: 'Heart & blood pressure',
      icon: '🫀',
      ids: ['m-04','m-17','m-30','m-33'],
      note: 'Vetmedin ideally given 1 hour before food. Never stop cardiac medications abruptly.'
    },
    {
      label: 'Steroids & immunosuppressants',
      icon: '🛡️',
      ids: ['m-02','m-12','m-31'],
      note: 'Never stop steroids abruptly after prolonged use. Monitor for side effects with long-term use.'
    },
    {
      label: 'Dermatology & itch — dogs only',
      icon: '🐾',
      ids: ['m-01b','m-25','m-25b','m-40'],
      note: 'Apoquel, Numelvi, Cytopoint and Zenrelia are all for dogs only.'
    },
    {
      label: 'Gastrointestinal',
      icon: '🫁',
      ids: ['m-06','m-14','m-24','m-26','m-28','m-36'],
      note: 'Sulcrate: give on empty stomach, space 2 hours from other medications.'
    },
    {
      label: 'Endocrinology',
      icon: '⚗️',
      ids: ['m-15','m-25','m-34','m-37','m-39'],
      note: 'All endocrine medications require regular blood monitoring. Timing of monitoring relative to dosing is often critical (especially Vetoryl).'
    },
    {
      label: 'Neurology & behaviour',
      icon: '🧠',
      ids: ['m-16','m-09','m-29'],
      note: 'Phenobarbital: blood monitoring every 6 months. Behaviour medications work best alongside training.'
    },
    {
      label: 'Antivirals',
      icon: '🔬',
      ids: ['m-20'],
      note: 'GS-441524: 84-day treatment course. Not yet formally licensed in Canada.'
    },
    {
      label: 'Antifungals',
      icon: '🍄',
      ids: ['m-21'],
      note: 'Check for drug interactions before dispensing.'
    },
    {
      label: 'Urology',
      icon: '💧',
      ids: ['m-32'],
      note: 'Blood pressure monitoring recommended during treatment.'
    },
    {
      label: 'Liver support',
      icon: '🌿',
      ids: ['m-41'],
      note: 'Supplement — not a substitute for treating the underlying cause.'
    },
  ];

  const termMap = {};
  deck.terms.forEach(t => termMap[t.id] = t);

  return `
    <div style="display:flex;flex-direction:column;gap:1.75rem;">
      ${sections.map(s => {
        const terms = s.ids.map(id => termMap[id]).filter(Boolean);
        if (terms.length === 0) return '';
        return `
          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:0.75rem;padding-bottom:6px;border-bottom:2px solid var(--warm-dark);">
              <span style="font-size:1.1rem;">${s.icon}</span>
              <span style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-light);">${s.label}</span>
            </div>
            ${s.note ? `<div style="font-size:12.5px;color:var(--ink-light);margin-bottom:0.6rem;font-style:italic;">⚠️ ${s.note}</div>` : ''}
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;font-family:'DM Sans',sans-serif;">
                <thead>
                  <tr style="border-bottom:1px solid var(--warm-dark);">
                    <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:5px 10px;width:25%;">Name(s)</th>
                    <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:5px 10px;width:30%;">What it's for</th>
                    <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:5px 10px;width:14%;">Frequency</th>
                    <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:5px 10px;width:10%;">With food</th>
                    <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:5px 10px;">Tell the client</th>
                  </tr>
                </thead>
                <tbody>
                  ${terms.map((t, i) => {
                    const meta = medMeta[t.id] || {};
                    const foodLabel = meta.food === true ? '✅ Yes' : meta.food === 'empty' ? '⚠️ Empty stomach' : '—';
                    const foodColor = meta.food === true ? '#166534' : meta.food === 'empty' ? '#92400e' : 'var(--ink-light)';
                    return `<tr style="border-bottom:1px solid var(--warm-mid);background:${i%2===0?'white':'var(--warm)'};">
                      <td style="padding:9px 10px;vertical-align:top;font-weight:600;font-size:13px;color:var(--ink);">${t.term}</td>
                      <td style="padding:9px 10px;vertical-align:top;font-size:13px;color:var(--ink-mid);line-height:1.5;">${t.meaning.split('.')[0]}.</td>
                      <td style="padding:9px 10px;vertical-align:top;font-size:13px;color:var(--ink-mid);">${meta.freq || '—'}</td>
                      <td style="padding:9px 10px;vertical-align:top;font-size:12.5px;font-weight:600;color:${foodColor};">${foodLabel}</td>
                      <td style="padding:9px 10px;vertical-align:top;font-size:13px;color:var(--ink-mid);line-height:1.5;font-style:italic;">"${t.clientExplanation.split('.')[0]}."</td>
                    </tr>`;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

// ── PARASITICIDES QUICK REFERENCE ──
function renderParasiticidesReference(deck) {
  const dogs = [
    { name: 'Bravecto — injectable', covers: 'Fleas, Ticks', duration: '1 year', form: 'Injectable' },
    { name: 'Bravecto — oral chew', covers: 'Fleas, Ticks', duration: '3 months', form: 'Oral chew' },
    { name: 'Bravecto — topical', covers: 'Fleas, Ticks', duration: '3 months', form: 'Topical' },
    { name: 'Nexgard', covers: 'Fleas, Ticks', duration: '1 month', form: 'Oral chew' },
    { name: 'Simparica Trio', covers: 'Fleas, Ticks, Worms (not tapeworms)', duration: '1 month', form: 'Oral chew' },
    { name: 'Revolution', covers: 'Fleas, Worms (not tapeworms or ticks)', duration: '1 month', form: 'Topical' },
    { name: 'Advantage II', covers: 'Fleas only', duration: '1 month', form: 'Topical' },
    { name: 'Interceptor Plus', covers: 'Worms incl. tapeworms', duration: 'Single dose', form: 'Oral chew' },
    { name: 'Safe-Guard (fenbendazole)', covers: 'Worms incl. tapeworms', duration: '3-day course', form: 'Liquid' },
    { name: 'Strongid T', covers: 'Worms (not tapeworms) — puppies only', duration: 'Weekly (young puppies)', form: 'Liquid' },
    { name: 'Advantix ⚠️ SPECIAL ORDER', covers: 'Fleas, Ticks — DEADLY TO CATS', duration: '1 month', form: 'Topical' },
  ];
  const cats = [
    { name: 'Nexgard Combo', covers: 'Fleas, Ticks, Worms incl. tapeworms', duration: '1 month', form: 'Topical' },
    { name: 'Revolution Plus', covers: 'Fleas, Ticks, Worms (not tapeworms)', duration: '1 month', form: 'Topical' },
    { name: 'Revolution', covers: 'Fleas, Worms (not tapeworms or ticks)', duration: '1 month', form: 'Topical' },
    { name: 'Bravecto', covers: 'Fleas, Ticks', duration: '3 months', form: 'Topical' },
    { name: 'Advantage II', covers: 'Fleas only', duration: '1 month', form: 'Topical' },
    { name: 'Milbemax', covers: 'Worms incl. tapeworms', duration: 'Single dose', form: 'Oral chew' },
    { name: 'Profender', covers: 'Worms incl. tapeworms', duration: 'Single dose', form: 'Topical' },
    { name: 'Safe-Guard (fenbendazole)', covers: 'Worms incl. tapeworms', duration: '3-day course', form: 'Liquid' },
    { name: 'Strongid T', covers: 'Worms (not tapeworms) — kittens only', duration: 'Weekly (young kittens)', form: 'Liquid' },
  ];

  function table(rows) {
    return `<div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Sans',sans-serif;">
        <thead>
          <tr style="border-bottom:1px solid var(--warm-dark);">
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:6px 10px;width:28%;">Product</th>
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:6px 10px;width:32%;">Covers</th>
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:6px 10px;width:20%;">Duration</th>
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:6px 10px;">Form</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((r, i) => `
            <tr style="border-bottom:1px solid var(--warm-mid);background:${i%2===0?'white':'var(--warm)'};">
              <td style="padding:9px 10px;font-weight:600;font-size:13px;color:${r.name.includes('⚠️')?'#991b1b':'var(--ink)'};vertical-align:top;">${r.name}</td>
              <td style="padding:9px 10px;font-size:13px;color:var(--ink-mid);vertical-align:top;">${r.covers}</td>
              <td style="padding:9px 10px;font-size:13px;color:var(--ink-mid);vertical-align:top;">${r.duration}</td>
              <td style="padding:9px 10px;font-size:13px;color:var(--ink-mid);vertical-align:top;">${r.form}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  }

  return `
    <div style="display:flex;flex-direction:column;gap:2rem;">
      <div style="background:#fef9e7;border:1.5px solid #fde047;border-radius:var(--radius);padding:10px 14px;font-size:13px;color:#713f12;">
        ⚠️ <strong>Advantix (dogs only — special order):</strong> contains permethrin — <strong>DEADLY to cats</strong>. Always ask about cats in the household before dispensing.
      </div>
      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:0.75rem;padding-bottom:6px;border-bottom:2px solid var(--ink);">
          <span style="font-size:1.2rem;">🐕</span>
          <span style="font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink);">Dogs</span>
        </div>
        ${table(dogs)}
      </div>
      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:0.75rem;padding-bottom:6px;border-bottom:2px solid var(--ink);">
          <span style="font-size:1.2rem;">🐈</span>
          <span style="font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink);">Cats</span>
        </div>
        ${table(cats)}
      </div>
      <div style="background:var(--warm);border-radius:var(--radius);padding:10px 14px;font-size:12.5px;color:var(--ink-mid);">
        All products require a prescription except <strong>Advantage II</strong> (OTC).
      </div>
    </div>`;
}


// ── VACCINE QUICK REFERENCE ──
function renderVaccineReference(deck) {

  function scheduleRow(vaccine, rows, bgHeader) {
    return `
      <div style="margin-bottom:1.5rem;">
        <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;
          color:white;background:${bgHeader};border-radius:var(--radius) var(--radius) 0 0;
          padding:7px 12px;">${vaccine}</div>
        <table style="width:100%;border-collapse:collapse;font-family:'DM Sans',sans-serif;border:1px solid var(--warm-dark);border-top:none;border-radius:0 0 var(--radius) var(--radius);overflow:hidden;">
          <tbody>
            ${rows.map((r, i) => `
              <tr style="border-bottom:1px solid var(--warm-mid);background:${i%2===0?'white':'var(--warm)'};">
                <td style="padding:8px 12px;font-size:13px;font-weight:600;color:var(--ink);width:38%;vertical-align:top;">${r[0]}</td>
                <td style="padding:8px 12px;font-size:13px;color:var(--ink-mid);vertical-align:top;">${r[1]}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  }

  const dogBlue = '#1e3a5f';
  const catPurple = '#4c1d95';

  return `
    <div style="display:flex;flex-direction:column;gap:2rem;">

      <!-- DOGS -->
      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:1rem;padding-bottom:6px;border-bottom:2px solid ${dogBlue};">
          <span style="font-size:1.2rem;">🐕</span>
          <span style="font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${dogBlue};">Canine vaccines</span>
        </div>

        <div style="overflow-x:auto;margin-bottom:1.25rem;">
          <table style="width:100%;border-collapse:collapse;font-family:'DM Sans',sans-serif;">
            <thead>
              <tr style="background:${dogBlue};">
                <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:white;padding:7px 10px;width:18%;">Vaccine</th>
                <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:white;padding:7px 10px;width:12%;">Type</th>
                <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:white;padding:7px 10px;width:32%;">Protects against</th>
                <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:white;padding:7px 10px;">When to recommend</th>
              </tr>
            </thead>
            <tbody>
              ${[
                ['DAPP', 'Core', 'Distemper, Adenovirus (hepatitis), Parainfluenza, Parvovirus', 'All dogs that will be around other animals. Fatal diseases if unvaccinated.'],
                ['Rabies', 'Core', 'Rabies virus', 'All dogs. Required for travel. Must be given after microchipping if for international travel.'],
                ['Bordetella', 'Non-core', 'Kennel cough (Bordetella bronchiseptica)', 'Dogs that board, groom, attend training, dog parks, or daycare.'],
                ['Leptospirosis', 'Non-core', 'Leptospira bacteria (found in soil, water, wildlife)', 'Dogs that drink from puddles, eat things off the ground, or encounter wildlife. Zoonotic risk.'],
              ].map((r, i) => `
                <tr style="border-bottom:1px solid var(--warm-mid);background:${i%2===0?'white':'var(--warm)'};">
                  <td style="padding:9px 10px;font-weight:700;font-size:13px;color:${dogBlue};vertical-align:top;">${r[0]}</td>
                  <td style="padding:9px 10px;vertical-align:top;">
                    <span style="font-size:11.5px;font-weight:600;padding:2px 8px;border-radius:20px;
                      background:${r[1]==='Core'?'#dbeafe':'#f0fdf4'};
                      color:${r[1]==='Core'?'#1e40af':'#166534'};">${r[1]}</span>
                  </td>
                  <td style="padding:9px 10px;font-size:13px;color:var(--ink-mid);vertical-align:top;">${r[2]}</td>
                  <td style="padding:9px 10px;font-size:13px;color:var(--ink-mid);vertical-align:top;">${r[3]}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>

        <p style="font-size:11px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:var(--ink-light);margin-bottom:0.75rem;">Canine vaccination schedule</p>
        ${scheduleRow('DAPP', [
          ['8 weeks', 'First dose'],
          ['12 weeks', 'Second dose'],
          ['16 weeks', 'Third dose — series complete'],
          ['1 year after 16-week dose', 'First adult booster'],
          ['Every 3 years after', 'Ongoing booster'],
        ], dogBlue)}
        ${scheduleRow('Rabies', [
          ['16 weeks', 'First dose'],
          ['1 year after 16-week dose', 'First adult booster'],
          ['Every 3 years after', 'Ongoing booster'],
          ['⚠️ Travel note', 'Must be given after microchipping. Check country-specific timing requirements well in advance.'],
        ], dogBlue)}
        ${scheduleRow('Bordetella', [
          ['12 or 16 weeks', 'First dose (puppies)'],
          ['Every 1 year', 'Annual booster — always'],
        ], dogBlue)}
        ${scheduleRow('Leptospirosis', [
          ['12 weeks', 'First dose (puppies)'],
          ['16 weeks', 'Second dose (puppies)'],
          ['First time in adult dog', 'Two doses 4 weeks apart'],
          ['Every 1 year', 'Annual booster once series complete'],
        ], dogBlue)}
      </div>

      <!-- CATS -->
      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:1rem;padding-bottom:6px;border-bottom:2px solid ${catPurple};">
          <span style="font-size:1.2rem;">🐈</span>
          <span style="font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${catPurple};">Feline vaccines</span>
        </div>

        <div style="overflow-x:auto;margin-bottom:1.25rem;">
          <table style="width:100%;border-collapse:collapse;font-family:'DM Sans',sans-serif;">
            <thead>
              <tr style="background:${catPurple};">
                <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:white;padding:7px 10px;width:18%;">Vaccine</th>
                <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:white;padding:7px 10px;width:12%;">Type</th>
                <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:white;padding:7px 10px;width:32%;">Protects against</th>
                <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:white;padding:7px 10px;">When to recommend</th>
              </tr>
            </thead>
            <tbody>
              ${[
                ['FVRCP', 'Core', 'Rhinotracheitis (herpesvirus), Calicivirus, Panleukopenia', 'All cats — indoor and outdoor. Some viruses can be carried in on clothing.'],
                ['Rabies', 'Core', 'Rabies virus', 'All cats, especially outdoor cats. Required for travel.'],
                ['FeLV', 'Non-core', 'Feline Leukemia Virus', 'Indoor and outdoor cats with any contact with other cats. No cure — prevention is key.'],
              ].map((r, i) => `
                <tr style="border-bottom:1px solid var(--warm-mid);background:${i%2===0?'white':'var(--warm)'};">
                  <td style="padding:9px 10px;font-weight:700;font-size:13px;color:${catPurple};vertical-align:top;">${r[0]}</td>
                  <td style="padding:9px 10px;vertical-align:top;">
                    <span style="font-size:11.5px;font-weight:600;padding:2px 8px;border-radius:20px;
                      background:${r[1]==='Core'?'#ede9fe':'#f0fdf4'};
                      color:${r[1]==='Core'?'#4c1d95':'#166534'};">${r[1]}</span>
                  </td>
                  <td style="padding:9px 10px;font-size:13px;color:var(--ink-mid);vertical-align:top;">${r[2]}</td>
                  <td style="padding:9px 10px;font-size:13px;color:var(--ink-mid);vertical-align:top;">${r[3]}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>

        <p style="font-size:11px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:var(--ink-light);margin-bottom:0.75rem;">Feline vaccination schedule</p>
        ${scheduleRow('FVRCP', [
          ['8 weeks', 'First dose (kittens)'],
          ['12 weeks', 'Second dose (kittens)'],
          ['16 weeks', 'Third dose — series complete'],
          ['1 year after 16-week dose', 'First adult booster'],
          ['Every 3 years after', 'Ongoing booster'],
          ['⚠️ First vaccine over 6 months old', 'Single dose is sufficient (no booster needed to start). 1-year clock begins from that dose.'],
        ], catPurple)}
        ${scheduleRow('Rabies', [
          ['16 weeks', 'First dose (kittens)'],
          ['1 year after 16-week dose', 'First adult booster'],
          ['Every 3 years after', 'Ongoing booster'],
        ], catPurple)}
        ${scheduleRow('FeLV', [
          ['12 weeks', 'First dose (kittens)'],
          ['16 weeks', 'Second dose (kittens)'],
          ['First time at any other age', 'Two doses 4 weeks apart'],
          ['1 year after completed series', 'First booster'],
          ['Every 2 years after', 'Ongoing booster'],
        ], catPurple)}
      </div>

      <!-- GENERAL NOTES -->
      <div style="background:var(--warm);border-radius:var(--radius);padding:12px 16px;font-size:13px;color:var(--ink-mid);line-height:1.7;">
        <strong style="color:var(--ink);">Key reminders:</strong>
        <ul style="margin:6px 0 0 16px;padding:0;">
          <li>Vaccines requiring an initial series (Lepto, FeLV) need two doses 4 weeks apart when given for the first time — in any age animal</li>
          <li>Rabies must be given <strong>after</strong> microchipping for international travel</li>
          <li>Rabies booster timing is critical for international travel — advise clients to ask well in advance</li>
          <li>Booster vaccines can be given 3 to 6 weeks after the previous dose — we schedule at 4 weeks for simplicity</li>
          <li>DAPP and Leptospirosis are sometimes combined into a single injection</li>
          <li>Bats are the primary rabies reservoir in this area — relevant for both dogs and outdoor cats</li>
        </ul>
      </div>

    </div>`;
}
