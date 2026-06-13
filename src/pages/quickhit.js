import { nav, setupHamburger } from './home.js';
import { termQuizzes } from '../data/terminology.js';
import { triageQuizzes } from '../data/triage.js';
import { getTodayDateStr, getDqhState, saveDqhState, hasCompletedDqhToday, updateStreak, updateBadgeStat, awardBadgesAndCelebrate, showConfetti } from '../lib/gamification.js';

// Pool all questions from all sections
function buildQuestionPool() {
  const pool = [];

  // Terminology quizzes — termQuizzes is a flat array of quiz objects each with a questions array
  (termQuizzes || []).forEach(quiz => {
    const label = quiz.deckId ? quiz.deckId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'Terminology';
    (quiz.questions || []).forEach(q => pool.push({ ...q, question: q.question || q.q, source: `Terminology — ${label}` }));
  });

  // Triage quizzes — object keyed by category
  Object.entries(triageQuizzes || {}).forEach(([cat, qs]) => {
    const label = cat.charAt(0).toUpperCase() + cat.slice(1);
    (qs || []).forEach(q => pool.push({ ...q, question: q.q || q.question, source: `Triage — ${label}` }));
  });

  return pool;
}

function getDailyQuestion(pool) {
  // Pick a deterministic question based on the date so everyone gets the same one
  const dateStr = getTodayDateStr();
  const seed = dateStr.split('-').reduce((a, b) => a * 31 + parseInt(b), 0);
  return pool[Math.abs(seed) % pool.length];
}

export function renderQuickHit(container, navigate) {
  window.scrollTo(0, 0);
  const pool = buildQuestionPool();
  if (pool.length === 0) {
    container.innerHTML = `${nav('/', navigate)}<div class="page-content"><p>No questions available yet.</p></div>`;
    setupHamburger();
    return;
  }

  const q = getDailyQuestion(pool);
  const dqhState = getDqhState();
  const alreadyDone = hasCompletedDqhToday();
  const streak = updateStreak();

  let answered = false;

  function render(selectedIdx = null) {
    window.scrollTo(0, 0);
    const isCorrect = selectedIdx !== null && selectedIdx === q.correct;

    container.innerHTML = `
      ${nav('/', navigate)}
      <div class="page-content" style="max-width:580px;margin:0 auto;">

        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:8px;">
          <div>
            <h2 style="margin:0 0 2px;">⚡ Daily Quick Hit</h2>
            <p style="font-size:13px;color:var(--ink-light);margin:0;">${getTodayDateStr()}</p>
          </div>
          ${streak.count > 1 ? `
            <div style="display:flex;align-items:center;gap:6px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:20px;padding:5px 12px;">
              <span style="font-size:1.1rem;">🔥</span>
              <span style="font-size:13px;font-weight:700;color:#c2410c;">${streak.count}-day streak</span>
            </div>` : ''}
        </div>

        <div style="background:var(--warm);border-radius:var(--radius);padding:6px 12px;margin-bottom:1.25rem;display:inline-block;">
          <span style="font-size:12px;font-weight:600;color:var(--ink-light);">${q.source}</span>
        </div>

        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.5rem;box-shadow:var(--shadow-sm);margin-bottom:1.25rem;">
          <p style="font-size:15px;font-weight:500;color:var(--ink);line-height:1.6;margin:0 0 1.25rem;">${q.question || q.q}</p>
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${q.options.map((opt, i) => {
              let bg = 'white', border = 'var(--warm-dark)', color = 'var(--ink)', fw = '400';
              if (selectedIdx !== null) {
                if (i === q.correct) { bg = '#f0fdf4'; border = '#166534'; color = '#166534'; fw = '600'; }
                else if (i === selectedIdx && i !== q.correct) { bg = '#fef2f2'; border = '#991b1b'; color = '#991b1b'; }
              }
              return `<button class="dqh-opt" data-i="${i}" style="text-align:left;padding:12px 14px;border-radius:var(--radius);border:1.5px solid ${border};background:${bg};font-size:14px;color:${color};font-weight:${fw};cursor:${selectedIdx !== null ? 'default' : 'pointer'};font-family:'DM Sans',sans-serif;line-height:1.5;">${opt}</button>`;
            }).join('')}
          </div>

          ${selectedIdx !== null ? `
            <div style="margin-top:1rem;padding:12px 14px;border-radius:var(--radius);background:${isCorrect ? '#f0fdf4' : '#fef2f2'};border-left:3px solid ${isCorrect ? '#166534' : '#991b1b'};">
              <div style="font-size:13px;font-weight:700;color:${isCorrect ? '#166534' : '#991b1b'};margin-bottom:4px;">${isCorrect ? '✅ Correct!' : '❌ Not quite.'}</div>
              <div style="font-size:13px;color:var(--ink-mid);line-height:1.55;">${q.explanation}</div>
            </div>` : ''}
        </div>

        ${selectedIdx !== null ? `
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <button class="btn-primary" id="home-btn">← Back to home</button>
          </div>` : ''}

        ${alreadyDone && selectedIdx === null ? `
          <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:var(--radius);padding:10px 14px;font-size:13px;color:#166534;margin-top:0.5rem;">
            ✅ You already completed today's Quick Hit! Come back tomorrow for a new question.
          </div>` : ''}
      </div>
    `;

    setupHamburger();

    if (selectedIdx === null && !alreadyDone) {
      container.querySelectorAll('.dqh-opt').forEach(btn => {
        btn.addEventListener('click', function() {
          if (answered) return;
          answered = true;
          const idx = parseInt(this.dataset.i);
          const correct = idx === q.correct;

          // Update state
          const state = getDqhState();
          state.lastCompleted = getTodayDateStr();
          state.totalCount = (state.totalCount || 0) + 1;
          saveDqhState(state);

          // Award badges
          const newBadges = updateBadgeStat('dqhCount', 1);
          if (correct) updateBadgeStat('quizPasses', 1);

          render(idx);

          if (correct) {
            setTimeout(() => showConfetti(2000), 200);
          }
          if (newBadges.length > 0) {
            setTimeout(() => awardBadgesAndCelebrate(newBadges, false), correct ? 1200 : 400);
          }
        });
      });
    }

    document.getElementById('home-btn')?.addEventListener('click', () => navigate('/'));
  }

  render();
}
