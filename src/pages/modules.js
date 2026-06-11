import { scenarios, categories } from '../data/scenarios.js';
import { getProgress } from '../lib/progress.js';
import { nav } from './home.js';

const ROLES = [
  { id: 'all', label: 'All roles' },
  { id: 'reception', label: 'Reception & front desk' },
  { id: 'tech', label: 'Vet technicians' },
  { id: 'vet', label: 'Veterinarians' }
];

const ROLE_COLORS = {
  reception: { bg: '#f0f4ff', color: '#3730a3', label: 'Reception' },
  tech: { bg: '#f0fdf4', color: '#166534', label: 'Tech' },
  vet: { bg: '#fef3c7', color: '#92400e', label: 'Vet' }
};

export function renderModules(container, navigate, activeRole = 'all') {
  const progress = getProgress();

  const filteredScenarios = activeRole === 'all'
    ? scenarios
    : scenarios.filter(s => s.roles && s.roles.includes(activeRole));

  const visibleCats = categories.filter(cat =>
    filteredScenarios.some(s => s.category === cat.id)
  );

  const categoryBlock = (cat) => {
    const catScenarios = filteredScenarios.filter(s => s.category === cat.id);
    const done = catScenarios.filter(s => progress[s.id]).length;
    return `
      <div style="margin-bottom:2.5rem;" class="cat-block">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem;">
          <span style="font-size:1.4rem;">${cat.icon}</span>
          <h2 style="font-size:1.1rem;font-family:'DM Sans',sans-serif;font-weight:600;">${cat.label}</h2>
          <span class="tag ${cat.tagColor}" style="margin-left:auto;">${done}/${catScenarios.length} done</span>
        </div>
        <div class="card-grid">
          ${catScenarios.map(s => scenarioCard(s, progress, cat)).join('')}
        </div>
      </div>`;
  };

  container.innerHTML = `
    ${nav('/train', navigate)}
    <div class="page-content">
      <h2 style="margin-bottom:0.5rem;">Training scenarios</h2>
      <p style="color:var(--ink-mid);margin-bottom:1.25rem;">Choose a scenario to practise. Each one offers three ways to learn.</p>

      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:2rem;">
        ${ROLES.map(r => `
          <button class="role-filter-btn ${activeRole === r.id ? 'active' : ''}" data-role="${r.id}"
            style="padding:7px 16px;border-radius:20px;font-size:13.5px;font-weight:500;cursor:pointer;border:1.5px solid ${activeRole === r.id ? 'var(--ink)' : 'var(--warm-dark)'};background:${activeRole === r.id ? 'var(--ink)' : 'white'};color:${activeRole === r.id ? 'white' : 'var(--ink-mid)'};font-family:'DM Sans',sans-serif;transition:all 0.15s;">
            ${r.label}
            <span style="margin-left:5px;font-size:12px;opacity:0.7;">${r.id === 'all' ? scenarios.length : scenarios.filter(s => s.roles && s.roles.includes(r.id)).length}</span>
          </button>
        `).join('')}
      </div>

      ${visibleCats.length === 0
        ? `<p style="color:var(--ink-light);text-align:center;padding:3rem 0;">No scenarios found for this role filter.</p>`
        : visibleCats.map(cat => categoryBlock(cat)).join('')
      }
    </div>
  `;

  container.querySelectorAll('[data-scenario]').forEach(card => {
    card.addEventListener('click', () => navigate('/scenario/' + card.dataset.scenario));
  });

  container.querySelectorAll('.role-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo(0, 0);
      renderModules(container, navigate, btn.dataset.role);
    });
  });
}

function scenarioCard(scenario, progress, cat) {
  const done = progress[scenario.id] || {};
  const diffClass = { beginner: 'diff-beginner', intermediate: 'diff-intermediate', advanced: 'diff-advanced' }[scenario.difficulty];
  const roles = scenario.roles || [];

  const roleBadges = roles.map(r => {
    const rc = ROLE_COLORS[r];
    return rc ? `<span style="font-size:10.5px;font-weight:600;padding:2px 8px;border-radius:20px;background:${rc.bg};color:${rc.color};">${rc.label}</span>` : '';
  }).join('');

  return `
    <div class="module-card" data-scenario="${scenario.id}">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div style="flex:1;">
          <span class="difficulty-badge ${diffClass}">${scenario.difficulty}</span>
          <h3 style="font-size:0.95rem;">${scenario.title}</h3>
        </div>
      </div>
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:2px;">
        ${roleBadges}
      </div>
      <div class="module-meta">
        ${scenario.tags.slice(0,2).map(t => `<span class="tag ${cat.tagColor}">${t}</span>`).join('')}
      </div>
      <div style="display:flex;gap:6px;margin-top:6px;font-size:12px;color:var(--ink-light);">
        <span style="opacity:${done.read?1:0.3};">📖 Read</span>
        <span style="opacity:${done.quiz?1:0.3};">✅ Quiz</span>
        <span style="opacity:${done.roleplay?1:0.3};">🎭 Role-play</span>
      </div>
    </div>`;
}
