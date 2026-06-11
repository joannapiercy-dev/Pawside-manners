import { scenarios, categories } from '../data/scenarios.js';
import { getProgress, getStats } from '../lib/progress.js';
import { nav } from './home.js';

export function renderDashboard(container, navigate) {
  const progress = getProgress();
  const stats = getStats(scenarios);

  container.innerHTML = `
    ${nav('/progress', navigate)}
    <div class="page-content">
      <h2 style="margin-bottom:0.5rem;">Your progress</h2>
      <p style="color:var(--ink-mid);margin-bottom:2rem;">Track which scenarios you've read, quizzed, and role-played.</p>

      <div class="stat-row">
        <div class="stat-card">
          <div class="stat-val">${stats.attempted}</div>
          <div class="stat-lbl">Scenarios started</div>
          <div class="progress-bar-wrap" style="margin-top:8px;">
            <div class="progress-bar-fill" style="width:${Math.round(stats.attempted/stats.total*100)}%"></div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${stats.quizDone}</div>
          <div class="stat-lbl">Quizzes completed</div>
          <div class="progress-bar-wrap" style="margin-top:8px;">
            <div class="progress-bar-fill" style="width:${Math.round(stats.quizDone/stats.total*100)}%"></div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${stats.roleplayDone}</div>
          <div class="stat-lbl">Role-plays done</div>
          <div class="progress-bar-wrap" style="margin-top:8px;">
            <div class="progress-bar-fill" style="width:${Math.round(stats.roleplayDone/stats.total*100)}%"></div>
          </div>
        </div>
      </div>

      ${categories.map(cat => {
        const catScenarios = scenarios.filter(s => s.category === cat.id);
        return `
          <div style="margin-bottom:2rem;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:0.75rem;">
              <span>${cat.icon}</span>
              <h3 style="font-size:1rem;font-family:'DM Sans',sans-serif;font-weight:600;">${cat.label}</h3>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              ${catScenarios.map(s => scenarioRow(s, progress, navigate)).join('')}
            </div>
          </div>`;
      }).join('')}

      <button class="btn-ghost" id="reset-all" style="margin-top:1rem;color:var(--ink-light);">Reset all progress</button>
    </div>
  `;

  container.querySelectorAll('[data-go]').forEach(el => {
    el.addEventListener('click', () => navigate('/scenario/' + el.dataset.go));
  });

  document.getElementById('reset-all').addEventListener('click', () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      localStorage.removeItem('pawside_progress');
      renderDashboard(container, navigate);
    }
  });
}

function scenarioRow(scenario, progress, navigate) {
  const done = progress[scenario.id] || {};
  const diffClass = { beginner: 'diff-beginner', intermediate: 'diff-intermediate', advanced: 'diff-advanced' }[scenario.difficulty];

  return `
    <div style="background:white;border-radius:var(--radius);padding:12px 16px;border:1px solid var(--warm-mid);display:flex;align-items:center;gap:12px;cursor:pointer;" data-go="${scenario.id}">
      <div style="flex:1;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="difficulty-badge ${diffClass}" style="margin-bottom:0;">${scenario.difficulty}</span>
          <span style="font-size:14.5px;font-weight:500;">${scenario.title}</span>
        </div>
      </div>
      <div style="display:flex;gap:6px;font-size:12px;">
        <span title="Read" style="opacity:${done.read?1:0.25};">📖</span>
        <span title="Quiz" style="opacity:${done.quiz?1:0.25};">✅</span>
        <span title="Role-play" style="opacity:${done.roleplay?1:0.25};">🎭</span>
      </div>
    </div>`;
}
