import { testCategories, tests, testQuiz, testQuizByCategory } from '../data/tests.js';
import { updateBadgeStat, awardBadgesAndCelebrate, showConfetti } from '../lib/gamification.js';
import { nav, setupHamburger } from './home.js';
import { markComplete } from '../lib/progress.js';

const FLAG_LABELS = {
  'fast-12h':     { icon: '🍽️', label: 'Fast 12 hrs', color: '#fef3c7', border: '#fde68a', text: '#92400e' },
  'fast-8-12h':   { icon: '🍽️', label: 'Fast 8–12 hrs', color: '#fef3c7', border: '#fde68a', text: '#92400e' },
  'fast-6h':      { icon: '🍽️', label: 'Fast 6 hrs', color: '#fef3c7', border: '#fde68a', text: '#92400e' },
  'fast-preferred':{ icon: '🍽️', label: 'Fast preferred', color: '#fef9ec', border: '#fde68a', text: '#92400e' },
  'sedation':     { icon: '💉', label: 'Sedation required', color: '#fdf2f8', border: '#f0abde', text: '#831843' },
  'oral-sedation':{ icon: '💊', label: 'Oral sedation', color: '#fdf2f8', border: '#f0abde', text: '#831843' },
  'shave':        { icon: '✂️', label: 'Shaving required', color: '#f0f7ff', border: '#bcd4f5', text: '#1e3a5f' },
  'dropoff':      { icon: '🏥', label: 'Drop-off required', color: '#f0fdf4', border: '#86efac', text: '#14532d' },
  'two-samples':  { icon: '🩸', label: '2 samples', color: '#fff7ed', border: '#fed7aa', text: '#9a3412' },
  'three-samples':{ icon: '🩸', label: '3 samples over 8 hrs', color: '#fff7ed', border: '#fed7aa', text: '#9a3412' },
};

export function renderTestsHome(container, navigate) {
  container.innerHTML = `
    ${nav('/tests', navigate)}
    <div class="page-content">
      <h2 style="margin-bottom:0.5rem;">Diagnostics</h2>
      <p style="color:var(--ink-mid);margin-bottom:0.5rem;">What each diagnostic test is for, fasting requirements, sedation, and what to tell clients when booking.</p>
      <div style="background:#f0f7ff;border:1px solid #bcd4f5;border-radius:var(--radius);padding:10px 14px;font-size:13.5px;color:#1e3a5f;margin-bottom:2rem;">
        ⚠️ <strong>Key rule:</strong> If injectable sedation is required for any test or procedure, the patient must be fasted for at least 6 hours — regardless of what the test is for.
      </div>

      <p class="section-label">Choose a category</p>
      <div class="card-grid" style="margin-bottom:2.5rem;">
        ${testCategories.map(cat => `
          <div class="module-card" data-cat="${cat.id}" style="cursor:pointer;">
            <div class="module-icon" style="font-size:1.6rem;">${cat.icon}</div>
            <h3 style="font-size:1rem;">${cat.label}</h3>
            <p style="font-size:13px;color:var(--ink-light);">${(tests[cat.id] || []).length} tests</p>
          </div>
        `).join('')}
        <div class="module-card" data-cat="quiz" style="cursor:pointer;background:var(--ink);color:white;">
          <div class="module-icon" style="font-size:1.6rem;background:rgba(255,255,255,0.1);">✅</div>
          <h3 style="font-size:1rem;color:white;">Quiz — all tests</h3>
          <p style="font-size:13px;color:rgba(255,255,255,0.65);">8 questions across all categories</p>
        </div>
      </div>
    </div>
  `;

  setupHamburger();
  container.querySelectorAll('[data-cat]').forEach(card => {
    card.addEventListener('click', () => navigate('/tests/' + card.dataset.cat));
  });
}

export function renderTestCategory(container, navigate, catId) {
  if (catId === 'quiz') { renderTestQuiz(container, navigate); return; }

  const cat = testCategories.find(c => c.id === catId);
  const catTests = tests[catId];
  if (!cat || !catTests) { navigate('/tests'); return; }

  container.innerHTML = `
    ${nav('/tests', navigate)}
    <div class="page-content">
      <div class="breadcrumb"><a href="#/tests">Tests & procedures</a> › ${cat.label}</div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:1.25rem;">
        <div style="width:44px;height:44px;background:var(--warm);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">${cat.icon}</div>
        <h2>${cat.label}</h2>
      </div>

      ${testQuizByCategory[catId] ? `
      <div style="background:linear-gradient(135deg,#1e3a5f,#2d5a8e);border-radius:var(--radius-lg);padding:1.1rem 1.5rem;margin-bottom:2rem;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">
        <div>
          <div style="font-weight:700;font-size:0.95rem;color:white;">✅ Ready to test yourself?</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.75);margin-top:2px;">Take the ${cat.label} quiz — covers everything on this page.</div>
        </div>
        <button id="cat-quiz-btn" style="background:white;color:#1e3a5f;border:none;border-radius:var(--radius);padding:10px 20px;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;flex-shrink:0;">Start quiz →</button>
      </div>` : \'\'}

      <div style="display:flex;flex-direction:column;gap:16px;">
        ${catTests.map(t => renderTestCard(t)).join('')}
      </div>

      <div style="margin-top:2rem;display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
        <button class="btn-ghost" id="back-btn">← All categories</button>
        <button class="btn-secondary" id="quiz-btn">Take the full quiz →</button>
      </div>
    </div>
  `;

  setupHamburger();
  document.getElementById('back-btn').addEventListener('click', () => navigate('/tests'));
  document.getElementById('quiz-btn').addEventListener('click', () => navigate('/tests/quiz'));
  document.getElementById('cat-quiz-btn')?.addEventListener('click', () => renderCategoryQuiz(container, navigate, catId));

  // Expand/collapse handlers
  markComplete('tests-' + catId, 'viewed');
  container.querySelectorAll('[data-expand]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.expand);
      const isHidden = target.style.display === 'none';
      target.style.display = isHidden ? 'block' : 'none';
      btn.textContent = isHidden ? 'Hide client script ▲' : 'Show client script ▼';
    });
  });
}

function renderTestCard(t) {
  const flags = (t.flags || []).map(f => {
    const fl = FLAG_LABELS[f];
    if (!fl) return '';
    return `<span style="font-size:12px;font-weight:600;padding:3px 10px;border-radius:20px;background:${fl.color};border:1px solid ${fl.border};color:${fl.text};">${fl.icon} ${fl.label}</span>`;
  }).join('');

  const sedIcon = t.sedation === 'yes' ? '💉 Injectable sedation required' :
                  t.sedation === 'oral-only' ? '💊 Oral sedation only' :
                  t.sedation === 'sometimes' ? '💉 Sedation sometimes required' : null;

  return `
    <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-sm);">

      <div style="padding:1.25rem 1.5rem;border-bottom:1px solid var(--warm-mid);">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap;">
          <h3 style="font-family:'DM Sans',sans-serif;font-weight:600;font-size:1rem;color:var(--ink);">${t.name}</h3>
          ${flags ? `<div style="display:flex;gap:6px;flex-wrap:wrap;">${flags}</div>` : ''}
        </div>
        <p style="font-size:14px;color:var(--ink-mid);margin-top:6px;line-height:1.6;">${t.purpose}</p>
        ${t.labNote ? `<div style="font-size:12.5px;color:#2563eb;background:#eff6ff;border-radius:6px;padding:5px 10px;margin-top:8px;"><strong>Lab names:</strong> ${t.labNote}</div>` : ''}
      </div>

      <div style="padding:1rem 1.5rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;">

        <div style="display:flex;flex-direction:column;gap:4px;">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);">🍽️ Fasting</div>
          <div style="font-size:13.5px;color:${t.fast ? '#92400e' : t.fastNote && t.fastNote.toLowerCase().includes('preferred') ? '#92400e' : 'var(--ink-mid)'}; font-weight:${t.fast ? '600' : '400'};">
            ${t.fast ? '⚠️ Required' : t.fastNote && t.fastNote.toLowerCase().includes('preferred') ? '💡 Preferred' : '✅ Not required'}
          </div>
          ${t.fastNote ? `<div style="font-size:12.5px;color:var(--ink-light);line-height:1.5;">${t.fastNote}</div>` : ''}
        </div>

        <div style="display:flex;flex-direction:column;gap:4px;">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);">💉 Sedation</div>
          <div style="font-size:13.5px;color:var(--ink-mid);">
            ${sedIcon ? `<span style="color:#831843;font-weight:600;">${sedIcon}</span>` : '✅ None required'}
          </div>
          ${t.sedationNote ? `<div style="font-size:12.5px;color:var(--ink-light);line-height:1.5;">${t.sedationNote}</div>` : ''}
        </div>

        <div style="display:flex;flex-direction:column;gap:4px;">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);">🏥 Drop-off</div>
          <div style="font-size:13.5px;color:var(--ink-mid);">
            ${t.dropoff ? `<span style="color:#14532d;font-weight:600;">✂️ Required</span>` : '✅ Not required'}
          </div>
          ${t.dropoffNote ? `<div style="font-size:12.5px;color:var(--ink-light);line-height:1.5;">${t.dropoffNote}</div>` : ''}
        </div>

        ${t.shave ? `
        <div style="display:flex;flex-direction:column;gap:4px;">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);">✂️ Shaving</div>
          <div style="font-size:13.5px;color:#1e3a5f;font-weight:600;">Required — advise client</div>
          ${t.shaveNote ? `<div style="font-size:12.5px;color:var(--ink-light);line-height:1.5;">${t.shaveNote}</div>` : ''}
        </div>` : ''}

      </div>

      ${t.specialNote ? `
        <div style="margin:0 1.5rem 1rem;background:#fef9e7;border:1.5px solid #fde047;border-radius:var(--radius);padding:10px 14px;font-size:13px;color:#713f12;line-height:1.55;">
          ${t.specialNote}
        </div>` : ''}

      <div style="padding:0 1.5rem 1.25rem;">
        <button data-expand="script-${t.id}" style="font-size:12.5px;color:#2563eb;background:none;border:none;cursor:pointer;padding:0;font-family:'DM Sans',sans-serif;text-decoration:underline;">Show client script ▼</button>
        <div id="script-${t.id}" style="display:none;margin-top:8px;">
          <div style="background:var(--context-bg);border:1.5px solid var(--context-border);border-radius:var(--radius);padding:12px 16px;">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--context-text);opacity:0.7;margin-bottom:6px;">What to tell the client</div>
            <p style="font-size:14px;color:var(--context-text);line-height:1.65;">"${t.clientScript}"</p>
          </div>
        </div>
      </div>

    </div>`;
}

function renderTestQuiz(container, navigate) {
  let qIdx = 0;
  let score = 0;
  let answered = false;

  function renderQ() {
    window.scrollTo(0, 0);
    answered = false;
    const q = testQuiz[qIdx];

    container.innerHTML = `
      ${nav('/tests', navigate)}
      <div class="scenario-layout">
        <div class="breadcrumb"><a href="#/tests">Tests & procedures</a> › Quiz</div>
        <h2 style="margin-bottom:1.5rem;">Tests & procedures — Quiz</h2>

        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.75rem;box-shadow:var(--shadow-sm);">
          <div style="font-size:12px;color:var(--ink-light);margin-bottom:0.75rem;">Question ${qIdx+1} of ${testQuiz.length}</div>
          <div class="progress-bar-wrap" style="margin-bottom:1.25rem;">
            <div class="progress-bar-fill" style="width:${Math.round(qIdx/testQuiz.length*100)}%"></div>
          </div>
          <p style="font-size:15px;font-weight:500;margin-bottom:1.25rem;line-height:1.55;">${q.question}</p>
          <div id="options">
            ${q.options.map((opt, i) => `
              <button class="quiz-option" data-idx="${i}">${opt}</button>
            `).join('')}
          </div>
          <div id="feedback" class="hidden"></div>
          <div id="next" class="hidden" style="margin-top:1rem;">
            <button class="btn-primary" id="next-btn">${qIdx < testQuiz.length - 1 ? 'Next question →' : 'See results'}</button>
          </div>
        </div>

        <div style="margin-top:1rem;">
          <button class="btn-ghost" onclick="location.hash='/tests'">← Back to tests</button>
        </div>
      </div>
    `;

    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', function() {
        if (answered) return;
        answered = true;
        const selected = parseInt(this.dataset.idx);
        container.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
        const fb = document.getElementById('feedback');
        if (selected === q.correct) {
          this.classList.add('correct');
          score++;
          fb.className = 'feedback-box feedback-correct';
          fb.innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
        } else {
          this.classList.add('incorrect');
          container.querySelectorAll('.quiz-option')[q.correct].classList.add('correct');
          fb.className = 'feedback-box feedback-incorrect';
          fb.innerHTML = `<strong>Not quite.</strong> ${q.explanation}`;
        }
        fb.classList.remove('hidden');
        document.getElementById('next').classList.remove('hidden');
        document.getElementById('next-btn').addEventListener('click', () => {
          qIdx++;
          if (qIdx < testQuiz.length) renderQ();
          else showScore();
        });
      });
    });
  }

  function showScore() {
    window.scrollTo(0, 0);
    markComplete('tests-quiz', 'quiz');
    const pct = Math.round(score / testQuiz.length * 100);
    if (pct >= 80) {
      const nb = updateBadgeStat('quizPasses', 1);
      if (pct === 100) { updateBadgeStat('perfectQuizzes', 1); showConfetti(2500); }
      awardBadgesAndCelebrate(nb, false);
    }
    container.innerHTML = `
      ${nav('/tests', navigate)}
      <div class="scenario-layout" style="text-align:center;padding-top:3rem;">
        <div style="font-size:3.5rem;font-family:'DM Serif Display',serif;color:var(--ink);">${score} / ${testQuiz.length}</div>
        <p style="color:var(--ink-mid);margin:0.75rem 0 2rem;">
          ${pct === 100 ? 'Perfect — excellent work!' :
            pct >= 75 ? 'Strong result — well done.' :
            pct >= 50 ? 'Good effort — review the ones you missed and try again.' :
            'Keep studying the reference cards and give it another go.'}
        </p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <button class="btn-primary" id="retry-btn">Try again</button>
          <button class="btn-ghost" id="back-btn">← Back to tests</button>
        </div>
      </div>
    `;
    document.getElementById('retry-btn').addEventListener('click', () => { qIdx = 0; score = 0; renderQ(); });
    document.getElementById('back-btn').addEventListener('click', () => navigate('/tests'));
  }

  renderQ();
}

function renderCategoryQuiz(container, navigate, catId) {
  const questions = testQuizByCategory[catId];
  const cat = testCategories.find(c => c.id === catId);
  if (!questions || questions.length === 0) { navigate('/tests/' + catId); return; }

  let qIdx = 0, score = 0, answered = false;

  function renderQ() {
    window.scrollTo(0, 0);
    answered = false;
    const q = questions[qIdx];
    const pct = Math.round((qIdx / questions.length) * 100);

    container.innerHTML = `
      ${nav('/tests', navigate)}
      <div class="page-content" style="max-width:600px;margin:0 auto;">
        <div class="breadcrumb"><a href="#/tests">Diagnostics</a> › <span class="breadcrumb-link" id="bc-cat">${cat?.label}</span> › Quiz</div>

        <div style="background:linear-gradient(135deg,#1e3a5f,#2d5a8e);border-radius:var(--radius-lg);padding:1rem 1.5rem;margin-bottom:1.5rem;color:white;">
          <div style="display:flex;justify-content:space-between;margin-bottom:5px;">
            <span style="font-size:12px;opacity:0.8;">Question ${qIdx + 1} of ${questions.length}</span>
            <span style="font-size:12px;opacity:0.8;">${pct}%</span>
          </div>
          <div style="background:rgba(255,255,255,0.2);border-radius:20px;height:5px;overflow:hidden;">
            <div style="background:white;height:100%;width:${pct}%;border-radius:20px;transition:width 0.3s;"></div>
          </div>
        </div>

        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.5rem;box-shadow:var(--shadow-sm);">
          <p style="font-size:15px;font-weight:500;color:var(--ink);line-height:1.6;margin:0 0 1.25rem;">${q.question}</p>
          <div id="opts" style="display:flex;flex-direction:column;gap:8px;">
            ${q.options.map((opt, i) => `
              <button class="quiz-option" data-idx="${i}" style="text-align:left;padding:12px 14px;border-radius:var(--radius);border:1.5px solid var(--warm-dark);background:white;font-size:13.5px;color:var(--ink);cursor:pointer;font-family:'DM Sans',sans-serif;line-height:1.5;">${opt}</button>
            `).join('')}
          </div>
          <div id="feedback" class="hidden"></div>
          <div id="next-wrap" class="hidden" style="margin-top:1rem;">
            <button class="btn-primary" id="next-btn">${qIdx < questions.length - 1 ? 'Next →' : 'See results'}</button>
          </div>
        </div>

        <button class="btn-ghost" style="margin-top:1rem;" id="cancel-btn">← Back to ${cat?.label}</button>
      </div>
    `;

    setupHamburger();
    document.getElementById('bc-cat')?.addEventListener('click', () => navigate('/tests/' + catId));
    document.getElementById('cancel-btn').addEventListener('click', () => navigate('/tests/' + catId));

    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', function() {
        if (answered) return;
        answered = true;
        const sel = parseInt(this.dataset.idx);
        container.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
        const correct = sel === q.correct;
        if (correct) { this.classList.add('correct'); score++; }
        else {
          this.classList.add('incorrect');
          container.querySelectorAll('.quiz-option')[q.correct].classList.add('correct');
        }
        const fb = document.getElementById('feedback');
        fb.className = correct ? 'feedback-box feedback-correct' : 'feedback-box feedback-incorrect';
        fb.innerHTML = `<strong>${correct ? 'Correct!' : 'Not quite.'}</strong> ${q.explanation}`;
        document.getElementById('next-wrap').classList.remove('hidden');
        document.getElementById('next-btn').addEventListener('click', () => {
          qIdx++;
          if (qIdx < questions.length) renderQ();
          else showScore();
        });
      });
    });
  }

  function showScore() {
    window.scrollTo(0, 0);
    const pct = Math.round((score / questions.length) * 100);
    if (pct >= 80) {
      const nb = updateBadgeStat('quizPasses', 1);
      if (pct === 100) { updateBadgeStat('perfectQuizzes', 1); showConfetti(2500); }
      awardBadgesAndCelebrate(nb, false);
    }
    container.innerHTML = `
      ${nav('/tests', navigate)}
      <div class="page-content" style="max-width:600px;margin:0 auto;text-align:center;padding-top:2rem;">
        <div class="breadcrumb" style="text-align:left;"><a href="#/tests">Diagnostics</a> › <span class="breadcrumb-link" id="bc-cat-score">${cat?.label}</span> › Quiz</div>
        <div style="font-size:3rem;font-weight:700;color:var(--ink);margin:1.5rem 0 0.5rem;">${score} / ${questions.length}</div>
        <p style="color:var(--ink-mid);margin-bottom:2rem;">
          ${pct === 100 ? 'Perfect score!' : pct >= 80 ? 'Great work.' : pct >= 60 ? 'Good effort — review the reference cards and try again.' : 'Keep studying and give it another go.'}
        </p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <button class="btn-primary" id="retry-btn">Try again</button>
          <button class="btn-ghost" id="back-cat-btn">← Back to ${cat?.label}</button>
          <button class="btn-ghost" id="all-quiz-btn">Full quiz →</button>
        </div>
      </div>
    `;
    setupHamburger();
    document.getElementById('bc-cat-score')?.addEventListener('click', () => navigate('/tests/' + catId));
    document.getElementById('retry-btn').addEventListener('click', () => { qIdx = 0; score = 0; renderQ(); });
    document.getElementById('back-cat-btn').addEventListener('click', () => navigate('/tests/' + catId));
    document.getElementById('all-quiz-btn').addEventListener('click', () => navigate('/tests/quiz'));
  }

  renderQ();
}
