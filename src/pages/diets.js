import { dietCategories, diets } from '../data/diets.js';
import { nav, setupHamburger } from './home.js';

const RC_COLOR   = '#c8102e';
const PUR_COLOR  = '#003087';
const HILLS_COLOR = '#2d7a2d';
const FORM_LABELS = { dry: 'Dry', canned: 'Canned', liquid: 'Liquid' };

export function renderDietsHome(container, navigate) {
  container.innerHTML = `
    ${nav('/diets', navigate)}
    <div class="page-content">
      <h2 style="margin-bottom:0.25rem;">Prescription diets</h2>
      <p style="color:var(--ink-mid);margin-bottom:1.5rem;">Royal Canin and Purina veterinary diets — what each is used for, by condition.</p>

      <div class="card-grid" style="margin-bottom:2rem;">
        ${dietCategories.map(cat => `
          <div class="module-card" data-cat="${cat.id}" style="cursor:pointer;">
            <div class="module-icon" style="font-size:1.5rem;">${cat.icon}</div>
            <h3 style="font-size:0.95rem;">${cat.label}</h3>
            <p style="font-size:12px;color:var(--ink-light);">
              ${(diets[cat.id]?.dogs?.length||0) + (diets[cat.id]?.cats?.length||0)} diets
            </p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  setupHamburger();
  container.querySelectorAll('[data-cat]').forEach(card => {
    card.addEventListener('click', () => navigate('/diets/' + card.dataset.cat));
  });
}

export function renderDietsCategory(container, navigate, catId) {
  const cat = dietCategories.find(c => c.id === catId);
  const catDiets = diets[catId];
  if (!cat || !catDiets) { navigate('/diets'); return; }

  const dogDiets = catDiets.dogs || [];
  const catDietsList = catDiets.cats || [];

  function dietTable(items, species) {
    if (items.length === 0) return `<p style="color:var(--ink-light);font-style:italic;font-size:13.5px;">No specific diets in this category for ${species}.</p>`;

    return `<div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Sans',sans-serif;">
        <thead>
          <tr style="border-bottom:1.5px solid var(--warm-dark);">
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:6px 10px;width:14%;">Brand</th>
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:6px 10px;width:22%;">Diet name</th>
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:6px 10px;width:10%;">Forms</th>
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:6px 10px;width:18%;">Flavour / format</th>
            ${cat.id === 'allergy' ? '<th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:6px 10px;width:13%;">Protein type</th>' : ''}
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:6px 10px;">Used for</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((d, i) => {
            const brandColor = d.brand === 'Royal Canin' ? RC_COLOR : d.brand === 'Hills' ? HILLS_COLOR : PUR_COLOR;
            const forms = d.forms.map(f => `<span style="font-size:11px;font-weight:600;padding:2px 7px;border-radius:20px;background:var(--warm);border:1px solid var(--warm-dark);color:var(--ink-mid);white-space:nowrap;">${FORM_LABELS[f]}</span>`).join(' ');
            return `<tr style="border-bottom:1px solid var(--warm-mid);background:${i%2===0?'white':'var(--warm)'};">
              <td style="padding:10px 10px;vertical-align:top;">
                <span style="font-size:11px;font-weight:700;color:${brandColor};">${d.brand}</span>
              </td>
              <td style="padding:10px 10px;vertical-align:top;font-weight:600;font-size:13.5px;color:var(--ink);">${d.name}</td>
              <td style="padding:10px 10px;vertical-align:top;display:flex;flex-direction:column;gap:3px;">${forms}</td>
              <td style="padding:10px 10px;vertical-align:top;font-size:12.5px;color:var(--ink-mid);">${d.flavour || '—'}</td>
              ${cat.id === 'allergy' ? `<td style="padding:10px 10px;vertical-align:top;">
                ${d.tag === 'hydrolyzed' ? '<span style="font-size:11px;font-weight:700;padding:3px 9px;border-radius:20px;background:#fdf4ff;color:#7e22ce;border:1px solid #e9d5ff;white-space:nowrap;">🔬 Hydrolyzed</span>' :
                  d.tag === 'novel' ? '<span style="font-size:11px;font-weight:700;padding:3px 9px;border-radius:20px;background:#fff7ed;color:#c2410c;border:1px solid #fed7aa;white-space:nowrap;">🥩 Novel protein</span>' :
                  '<span style="font-size:11px;padding:3px 9px;color:var(--ink-light);">—</span>'}
              </td>` : ''}
              <td style="padding:10px 10px;vertical-align:top;font-size:13px;color:var(--ink-mid);line-height:1.6;">${d.use}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
  }

  container.innerHTML = `
    ${nav('/diets', navigate)}
    <div class="page-content">
      <div class="breadcrumb"><a href="#/diets">Prescription diets</a> › ${cat.label}</div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:2rem;">
        <div style="width:44px;height:44px;background:var(--warm);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">${cat.icon}</div>
        <h2 style="margin:0;">${cat.label}</h2>
      </div>

      <!-- Dogs -->
      <div style="margin-bottom:2rem;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:0.75rem;padding-bottom:6px;border-bottom:2px solid #1e3a5f;">
          <span style="font-size:1.1rem;">🐕</span>
          <span style="font-size:12px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:#1e3a5f;">Dogs</span>
        </div>
        ${dietTable(dogDiets, 'dogs')}
      </div>

      <!-- Cats -->
      <div style="margin-bottom:2rem;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:0.75rem;padding-bottom:6px;border-bottom:2px solid #4c1d95;">
          <span style="font-size:1.1rem;">🐈</span>
          <span style="font-size:12px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:#4c1d95;">Cats</span>
        </div>
        ${dietTable(catDietsList, 'cats')}
      </div>

      <!-- Brand legend -->
      <div style="background:var(--warm);border-radius:var(--radius);padding:10px 14px;font-size:12.5px;color:var(--ink-mid);display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:2rem;">
        <span><strong style="color:${RC_COLOR};">Royal Canin</strong> = RCVD</span>
        <span><strong style="color:${PUR_COLOR};">Purina</strong> = PVD</span>
        <span><strong style="color:${HILLS_COLOR};">Hills</strong> = Hill's Prescription Diet</span>
      </div>

      <button class="btn-ghost" id="back-btn">← All categories</button>
    </div>
  `;

  setupHamburger();
  document.getElementById('back-btn').addEventListener('click', () => navigate('/diets'));
}
