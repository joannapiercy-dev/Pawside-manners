import { scenarios, categories } from '../data/scenarios.js';
import { termDecks } from '../data/terminology.js';
import { triageCategories } from '../data/triage.js';
import { testCategories } from '../data/tests.js';
import { quickPrompts } from '../data/quickprompts.js';
import { getProgress } from '../lib/progress.js';
import { getEarnedBadges, getBadgeStats, BADGE_DEFS, getStreak, getDqhState, getTodayDateStr } from '../lib/gamification.js';
import { nav, setupHamburger } from './home.js';
import { getMyPoints } from '../lib/points.js';

export async function renderDashboard(container, navigate) {
  const p = getProgress();
  const totalPoints = await getMyPoints();
  const earnedBadges = getEarnedBadges();
  const badgeStats = getBadgeStats();
  const streak = getStreak();
  const dqhState = getDqhState();
  const dqhDoneToday = dqhState.lastCompleted === getTodayDateStr();
  const dqhTotal = dqhState.totalCount || 0;

  // ── Communication ──
  const scenarioTotal = scenarios.length;
  const scenarioAttempted = scenarios.filter(s => p[s.id]).length;
  const quizDone = scenarios.filter(s => p[s.id]?.quiz).length;
  const roleplayDone = scenarios.filter(s => p[s.id]?.roleplay).length;

  // ── Terminology ──
  const termTotal = termDecks.length;
  const termFlashDone = termDecks.filter(d => p['term-' + d.id]?.flashcard).length;
  const termQuizDone = termDecks.filter(d => p['term-quiz-' + d.id]?.quiz).length;

  // ── Triage ──
  const triageTotal = triageCategories.length;
  const triageDone = triageCategories.filter(c => p['triage-' + c.id]?.completed).length;

  // ── Diagnostics ──
  const testsTotal = testCategories.length;
  const testsViewed = testCategories.filter(c => p['tests-' + c.id]?.viewed).length;
  const testsQuizDone = p['tests-quiz']?.quiz ? 1 : 0;

  // ── What would you say? ──
  const qpTotal = quickPrompts.length;
  const qpDone = badgeStats.roleplays || 0;

  // ── Badges ──
  const badgesEarned = earnedBadges.length;
  const badgesTotal = BADGE_DEFS.length;

  container.innerHTML = `
    ${nav('/progress', navigate)}
    <div class="page-content">
      <h2 style="margin-bottom:0.25rem;">Your progress</h2>
      <p style="color:var(--ink-mid);margin-bottom:2rem;">Track what you've covered across all sections.</p>

      <!-- Streak + DQH summary -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:2rem;">
        ${statPill('🔥', 'Current streak', streak.count + ' day' + (streak.count !== 1 ? 's' : ''), streak.count >= 3 ? '#fff7ed' : 'var(--warm)', streak.count >= 3 ? '#c2410c' : 'var(--ink-mid)')}
        ${statPill('⚡', 'Daily Quick Hits', dqhTotal + ' completed', 'var(--warm)', 'var(--ink-mid)')}
        ${statPill('🏅', 'Badges earned', badgesEarned + ' / ' + badgesTotal, 'var(--warm)', 'var(--ink-mid)')}
        ${statPill('⭐', 'Points earned', totalPoints + ' pts', '#fefce8', '#a16207')}
        ${statPill('💬', 'Roleplay prompts', qpDone + ' attempts', 'var(--warm)', 'var(--ink-mid)')}
      </div>

      ${sectionBlock('💬', 'Communication', '#f0f7ff', '#bcd4f5', [
        { label: 'Scenarios started', val: scenarioAttempted, total: scenarioTotal },
        { label: 'Quizzes completed', val: quizDone, total: scenarioTotal },
        { label: 'Role-plays done', val: roleplayDone, total: scenarioTotal }
      ], renderScenarioRows(scenarios, categories, p))}

      ${sectionBlock('🩺', 'Terminology & drug names', '#fef3c7', '#fde68a', [
        { label: 'Decks with flashcards done', val: termFlashDone, total: termTotal },
        { label: 'Quizzes completed', val: termQuizDone, total: termTotal }
      ], renderTermRows(termDecks, p))}

      ${sectionBlock('🚨', 'Triage', '#fef2f2', '#fecaca', [
        { label: 'Categories with quiz done', val: triageDone, total: triageTotal }
      ], renderTriageRows(triageCategories, p))}

      ${sectionBlock('🔬', 'Diagnostics', '#f0fdf4', '#86efac', [
        { label: 'Categories reviewed', val: testsViewed, total: testsTotal },
        { label: 'Full quiz completed', val: testsQuizDone, total: 1 }
      ], renderTestRows(testCategories, p, navigate))}

      ${sectionBlock('💬', 'What would you say?', '#fdf4ff', '#e9d5ff', [
        { label: 'Prompts attempted', val: qpDone, total: qpTotal }
      ], renderQpRows(quickPrompts, badgeStats))}

      ${sectionBlock('🏅', 'Badges', '#fffbeb', '#fde68a', [
        { label: 'Earned', val: badgesEarned, total: badgesTotal }
      ], renderBadgeGrid(earnedBadges))}

      <button class="btn-ghost" id="reset-all" style="margin-top:2rem;color:var(--ink-light);">Reset all progress</button>
    </div>
  `;

  setupHamburger();
  container.querySelectorAll('[data-go-scenario]').forEach(el =>
    el.addEventListener('click', () => navigate('/scenario/' + el.dataset.goScenario)));
  container.querySelectorAll('[data-go-term]').forEach(el =>
    el.addEventListener('click', () => navigate('/terminology/' + el.dataset.goTerm)));
  container.querySelectorAll('[data-go-triage]').forEach(el =>
    el.addEventListener('click', () => navigate('/triage/' + el.dataset.goTriage)));
  container.querySelectorAll('[data-go-tests]').forEach(el =>
    el.addEventListener('click', () => navigate('/tests/' + el.dataset.goTests)));

  document.getElementById('reset-all').addEventListener('click', () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      localStorage.removeItem('pawside_progress');
      renderDashboard(container, navigate);
    }
  });
}

function statPill(icon, label, value, bg, color) {
  return `<div style="background:${bg};border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1rem 1.25rem;">
    <div style="font-size:1.3rem;margin-bottom:4px;">${icon}</div>
    <div style="font-size:1.1rem;font-weight:700;color:${color};">${value}</div>
    <div style="font-size:12px;color:var(--ink-light);margin-top:2px;">${label}</div>
  </div>`;
}

function sectionBlock(icon, title, bgColor, borderColor, stats, rows) {
  return `
    <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-sm);margin-bottom:2rem;">
      <div style="background:${bgColor};border-bottom:1px solid ${borderColor};padding:1rem 1.5rem;display:flex;align-items:center;gap:10px;">
        <span style="font-size:1.3rem;">${icon}</span>
        <h3 style="font-family:'DM Sans',sans-serif;font-weight:600;font-size:1rem;margin:0;">${title}</h3>
      </div>
      <div style="padding:1rem 1.5rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;border-bottom:1px solid var(--warm-mid);">
        ${stats.map(s => `
          <div>
            <div style="font-size:1.5rem;font-family:'DM Serif Display',serif;color:var(--ink);">${s.val}<span style="font-size:0.9rem;color:var(--ink-light);"> / ${s.total}</span></div>
            <div style="font-size:12px;color:var(--ink-light);margin-top:2px;">${s.label}</div>
            <div class="progress-bar-wrap" style="margin-top:5px;">
              <div class="progress-bar-fill" style="width:${s.total > 0 ? Math.round(s.val/s.total*100) : 0}%;"></div>
            </div>
          </div>`).join('')}
      </div>
      <div style="padding:0.75rem 1.5rem;display:flex;flex-direction:column;gap:8px;">${rows}</div>
    </div>`;
}

function renderScenarioRows(scenarios, categories, p) {
  return categories.map(cat => {
    const catScenarios = scenarios.filter(s => s.category === cat.id);
    return catScenarios.map(s => {
      const done = p[s.id] || {};
      const diffClass = { beginner:'diff-beginner', intermediate:'diff-intermediate', advanced:'diff-advanced' }[s.difficulty];
      return `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--warm-mid);cursor:pointer;" data-go-scenario="${s.id}">
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

function renderTermRows(decks, p) {
  return decks.map(deck => {
    const flashDone = p['term-' + deck.id]?.flashcard;
    const quizDone = p['term-quiz-' + deck.id]?.quiz;
    return `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--warm-mid);cursor:pointer;" data-go-term="${deck.id}">
      <span style="font-size:1.1rem;">${deck.icon}</span>
      <span style="flex:1;font-size:13.5px;">${deck.title}</span>
      <div style="display:flex;gap:8px;font-size:12px;flex-shrink:0;">
        <span style="opacity:${flashDone?1:0.2};">🃏 Flashcards</span>
        <span style="opacity:${quizDone?1:0.2};">✅ Quiz</span>
      </div>
    </div>`;
  }).join('');
}

function renderTriageRows(categories, p) {
  return categories.map(cat => {
    const done = p['triage-' + cat.id]?.completed;
    return `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--warm-mid);cursor:pointer;" data-go-triage="${cat.id}">
      <span style="font-size:1.1rem;">${cat.icon}</span>
      <span style="flex:1;font-size:13.5px;">${cat.label}</span>
      <span style="font-size:12px;opacity:${done?1:0.2};">✅ Quiz done</span>
    </div>`;
  }).join('');
}

function renderTestRows(categories, p, navigate) {
  const quizDone = p['tests-quiz']?.quiz;
  const rows = categories.map(cat => {
    const viewed = p['tests-' + cat.id]?.viewed;
    return `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--warm-mid);cursor:pointer;" data-go-tests="${cat.id}">
      <span style="font-size:1.1rem;">${cat.icon}</span>
      <span style="flex:1;font-size:13.5px;">${cat.label}</span>
      <span style="font-size:12px;opacity:${viewed?1:0.2};">👁️ Reviewed</span>
    </div>`;
  }).join('');
  return rows + `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;cursor:pointer;" data-go-tests="quiz">
    <span style="font-size:1.1rem;">✅</span>
    <span style="flex:1;font-size:13.5px;">Full quiz — all categories</span>
    <span style="font-size:12px;opacity:${quizDone?1:0.2};">✅ Completed</span>
  </div>`;
}

function renderQpRows(prompts, badgeStats) {
  const total = prompts.length;
  const done = badgeStats.roleplays || 0;
  return `<div style="padding:8px 0;font-size:13.5px;color:var(--ink-mid);">
    ${done === 0
      ? 'No prompts attempted yet — give one a try!'
      : `${done} prompt${done !== 1 ? 's' : ''} attempted across all categories.`}
    <span style="font-size:12px;color:var(--ink-light);display:block;margin-top:4px;">${total} prompts available across ${[...new Set(prompts.map(p=>p.category))].length} categories.</span>
  </div>`;
}

function renderBadgeGrid(earnedBadges) {
  return BADGE_DEFS.map(badge => {
    const isEarned = earnedBadges.includes(badge.id);
    return `
      <div style="background:${isEarned ? 'white' : 'var(--warm)'};border:1px solid ${isEarned ? '#fde68a' : 'var(--warm-mid)'};border-radius:var(--radius-lg);padding:0.9rem 1.25rem;display:flex;align-items:center;gap:14px;opacity:${isEarned ? '1' : '0.5'};">
        <div style="font-size:2rem;width:40px;text-align:center;flex-shrink:0;${isEarned ? '' : 'filter:grayscale(1);'}">${badge.icon}</div>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:14px;color:${isEarned ? 'var(--ink)' : 'var(--ink-light)'};">${badge.name}</div>
          <div style="font-size:12.5px;color:var(--ink-light);margin-top:2px;">${badge.desc}</div>
        </div>
        ${isEarned ? '<span style="font-size:1rem;">✅</span>' : '<span style="font-size:12px;color:var(--ink-light);">🔒</span>'}
      </div>`;
  }).join('');
}
