import { scenarios, categories } from '../data/scenarios.js';
import { termDecks } from '../data/terminology.js';
import { triageCategories } from '../data/triage.js';
import { testCategories } from '../data/tests.js';
import { getProgress } from '../lib/progress.js';
import { nav } from './home.js';

export function renderDashboard(container, navigate) {
  const p = getProgress();

  // ── Stats ──
  const scenarioTotal = scenarios.length;
  const scenarioAttempted = scenarios.filter(s => p[s.id]).length;
  const quizDone = scenarios.filter(s => p[s.id]?.quiz).length;
  const roleplayDone = scenarios.filter(s => p[s.id]?.roleplay).length;

  const termTotal = termDecks.length;
  const termFlashDone = termDecks.filter(d => p['term-' + d.id]?.flashcard).length;
  const termQuizDone = termDecks.filter(d => p['term-quiz-' + d.id]?.quiz).length;

  const triageTotal = triageCategories.length;
  const triageDone = triageCategories.filter(c => p['triage-' + c.id]?.completed).length;

  const testsTotal = testCategories.length;
  const testsViewed = testCategories.filter(c => p['tests-' + c.id]?.viewed).length;
  const testsQuizDone = p['tests-quiz']?.quiz ? 1 : 0;

  container.innerHTML = `
    ${nav('/progress', navigate)}
    <div class="page-content">
      <h2 style="margin-bottom:0.5rem;">Your progress</h2>
      <p style="color:var(--ink-mid);margin-bottom:2rem;">Track what you've covered across all sections of the training app.</p>

      ${sectionBlock('💬', 'Communication', '#f0f7ff', '#bcd4f5', [
        { label: 'Scenarios started', val: scenarioAttempted, total: scenarioTotal },
        { label: 'Quizzes completed', val: quizDone, total: scenarioTotal },
        { label: 'Role-plays done', val: roleplayDone, total: scenarioTotal }
      ], renderScenarioRows(scenarios, categories, p, navigate))}

      ${sectionBlock('🩺', 'Terminology', '#fef3c7', '#fde68a', [
        { label: 'Decks started', val: termFlashDone, total: termTotal },
        { label: 'Quizzes completed', val: termQuizDone, total: termTotal }
      ], renderTermRows(termDecks, p, navigate))}

      ${sectionBlock('🚨', 'Triage', '#fef2f2', '#fecaca', [
        { label: 'Categories completed', val: triageDone, total: triageTotal }
      ], renderTriageRows(triageCategories, p, navigate))}

      ${sectionBlock('🔬', 'Diagnostics', '#f0fdf4', '#86efac', [
        { label: 'Categories reviewed', val: testsViewed, total: testsTotal },
        { label: 'Quiz completed', val: testsQuizDone, total: 1 }
      ], renderTestRows(testCategories, p, navigate))}

      <button class="btn-ghost" id="reset-all" style="margin-top:2rem;color:var(--ink-light);">Reset all progress</button>
    </div>
  `;

  container.querySelectorAll('[data-go-scenario]').forEach(el => {
    el.addEventListener('click', () => navigate('/scenario/' + el.dataset.goScenario));
  });
  container.querySelectorAll('[data-go-term]').forEach(el => {
    el.addEventListener('click', () => navigate('/terminology/' + el.dataset.goTerm));
  });
  container.querySelectorAll('[data-go-triage]').forEach(el => {
    el.addEventListener('click', () => navigate('/triage/' + el.dataset.goTriage));
  });
  container.querySelectorAll('[data-go-tests]').forEach(el => {
    el.addEventListener('click', () => navigate('/tests/' + el.dataset.goTests));
  });

  document.getElementById('reset-all').addEventListener('click', () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      localStorage.removeItem('pawside_progress');
      renderDashboard(container, navigate);
    }
  });
}

function sectionBlock(icon, title, bgColor, borderColor, stats, rows) {
  return `
    <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-sm);margin-bottom:2rem;">
      <div style="background:${bgColor};border-bottom:1px solid ${borderColor};padding:1rem 1.5rem;display:flex;align-items:center;gap:10px;">
        <span style="font-size:1.3rem;">${icon}</span>
        <h3 style="font-family:'DM Sans',sans-serif;font-weight:600;font-size:1rem;">${title}</h3>
      </div>
      <div style="padding:1rem 1.5rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;border-bottom:1px solid var(--warm-mid);">
        ${stats.map(s => `
          <div>
            <div style="font-size:1.5rem;font-family:'DM Serif Display',serif;color:var(--ink);">${s.val}<span style="font-size:0.9rem;color:var(--ink-light);"> / ${s.total}</span></div>
            <div style="font-size:12px;color:var(--ink-light);margin-top:2px;">${s.label}</div>
            <div class="progress-bar-wrap" style="margin-top:5px;">
              <div class="progress-bar-fill" style="width:${s.total > 0 ? Math.round(s.val/s.total*100) : 0}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="padding:0.75rem 1.5rem;display:flex;flex-direction:column;gap:6px;">
        ${rows}
      </div>
    </div>`;
}

function renderScenarioRows(scenarios, categories, p, navigate) {
  return categories.map(cat => {
    const catScenarios = scenarios.filter(s => s.category === cat.id);
    return catScenarios.map(s => {
      const done = p[s.id] || {};
      const diffClass = { beginner: 'diff-beginner', intermediate: 'diff-intermediate', advanced: 'diff-advanced' }[s.difficulty];
      return `
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--warm-mid);cursor:pointer;" data-go-scenario="${s.id}">
          <span class="difficulty-badge ${diffClass}" style="margin-bottom:0;font-size:10px;">${s.difficulty}</span>
          <span style="flex:1;font-size:13.5px;">${s.title}</span>
          <div style="display:flex;gap:5px;font-size:12px;flex-shrink:0;">
            <span title="Read" style="opacity:${done.read?1:0.2};">📖</span>
            <span title="Quiz" style="opacity:${done.quiz?1:0.2};">✅</span>
            <span title="Role-play" style="opacity:${done.roleplay?1:0.2};">🎭</span>
          </div>
        </div>`;
    }).join('');
  }).join('');
}

function renderTermRows(decks, p, navigate) {
  return decks.map(deck => {
    const flashDone = p['term-' + deck.id]?.flashcard;
    const quizDone = p['term-quiz-' + deck.id]?.quiz;
    return `
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--warm-mid);cursor:pointer;" data-go-term="${deck.id}">
        <span style="font-size:1.1rem;">${deck.icon}</span>
        <span style="flex:1;font-size:13.5px;">${deck.title}</span>
        <div style="display:flex;gap:5px;font-size:12px;flex-shrink:0;">
          <span title="Flashcards" style="opacity:${flashDone?1:0.2};">🃏 Flashcards</span>
          <span title="Quiz" style="opacity:${quizDone?1:0.2};">✅ Quiz</span>
        </div>
      </div>`;
  }).join('');
}

function renderTriageRows(categories, p, navigate) {
  return categories.map(cat => {
    const done = p['triage-' + cat.id]?.completed;
    return `
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--warm-mid);cursor:pointer;" data-go-triage="${cat.id}">
        <span style="font-size:1.1rem;">${cat.icon}</span>
        <span style="flex:1;font-size:13.5px;">${cat.label}</span>
        <span style="font-size:12px;opacity:${done?1:0.2};">✅ Completed</span>
      </div>`;
  }).join('');
}

function renderTestRows(categories, p, navigate) {
  const quizDone = p['tests-quiz']?.quiz;
  const rows = categories.map(cat => {
    const viewed = p['tests-' + cat.id]?.viewed;
    return `
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--warm-mid);cursor:pointer;" data-go-tests="${cat.id}">
        <span style="font-size:1.1rem;">${cat.icon}</span>
        <span style="flex:1;font-size:13.5px;">${cat.label}</span>
        <span style="font-size:12px;opacity:${viewed?1:0.2};">👁️ Reviewed</span>
      </div>`;
  }).join('');
  return rows + `
    <div style="display:flex;align-items:center;gap:10px;padding:8px 0;cursor:pointer;" data-go-tests="quiz">
      <span style="font-size:1.1rem;">✅</span>
      <span style="flex:1;font-size:13.5px;">Tests & procedures quiz</span>
      <span style="font-size:12px;opacity:${quizDone?1:0.2};">✅ Completed</span>
    </div>`;
}
