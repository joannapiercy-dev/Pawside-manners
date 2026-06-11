import { scenarios, categories } from '../data/scenarios.js';
import { getProgress } from '../lib/progress.js';
import { nav } from './home.js';

export function renderModules(container, navigate) {
  const progress = getProgress();

  const categoryFilter = (catId) => {
    const cat = categories.find(c => c.id === catId);
    const catScenarios = scenarios.filter(s => s.category === catId);
    const done = catScenarios.filter(s => progress[s.id]).length;

    return `
      <div style="margin-bottom:2.5rem;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem;">
          <span style="font-size:1.4rem;">${cat.icon}</span>
          <h2 style="font-size:1.1rem;font-family:'DM Sans',sans-serif;font-weight:600;">${cat.label}</h2>
          <span class="tag ${cat.tagColor}" style="margin-left:auto;">${done}/${catScenarios.length} done</span>
        </div>
        <div class="card-grid">
          ${catScenarios.map(s => scenarioCard(s, progress, cat, navigate)).join('')}
        </div>
      </div>`;
  };

  container.innerHTML = `
    ${nav('/train', navigate)}
    <div class="page-content">
      <h2 style="margin-bottom:0.5rem;">Training scenarios</h2>
      <p style="color:var(--ink-mid);margin-bottom:2rem;">Choose a scenario to practise. Each one offers three ways to learn.</p>
      ${categories.map(cat => categoryFilter(cat.id)).join('')}
    </div>
  `;

  container.querySelectorAll('[data-scenario]').forEach(card => {
    card.addEventListener('click', () => navigate('/scenario/' + card.dataset.scenario));
  });
}

function scenarioCard(scenario, progress, cat, navigate) {
  const done = progress[scenario.id] || {};
  const quizDone = done.quiz;
  const roleplayDone = done.roleplay;
  const readDone = done.read;

  const diffClass = { beginner: 'diff-beginner', intermediate: 'diff-intermediate', advanced: 'diff-advanced' }[scenario.difficulty];

  return `
    <div class="module-card" data-scenario="${scenario.id}" style="position:relative;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div>
          <span class="difficulty-badge ${diffClass}">${scenario.difficulty}</span>
          <h3 style="font-size:0.95rem;">${scenario.title}</h3>
        </div>
      </div>
      <div class="module-meta">
        ${scenario.tags.slice(0,2).map(t => `<span class="tag ${cat.tagColor}">${t}</span>`).join('')}
      </div>
      <div style="display:flex;gap:6px;margin-top:6px;font-size:12px;color:var(--ink-light);">
        <span style="opacity:${readDone?1:0.3};">📖 Read</span>
        <span style="opacity:${quizDone?1:0.3};">✅ Quiz</span>
        <span style="opacity:${roleplayDone?1:0.3};">🎭 Role-play</span>
      </div>
    </div>`;
}
