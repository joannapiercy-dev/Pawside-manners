import { dietCategories, diets, dietQuiz } from '../data/diets.js';
import { awardQuizPoints } from '../lib/points.js';
import { markComplete } from '../lib/progress.js';
import { updateBadgeStat, awardBadgesAndCelebrate, showConfetti } from '../lib/gamification.js';
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
      <p style="color:var(--ink-mid);margin-bottom:1.5rem;">Royal Canin, Purina and Hills prescription veterinary diets — what each is used for, by condition.</p>

      <div style="background:linear-gradient(135deg,#1e3a5f,#2d5a8e);border-radius:var(--radius-lg);padding:1.1rem 1.5rem;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">
        <div>
          <div style="font-weight:700;font-size:0.95rem;color:white;">✅ Ready to test your diet knowledge?</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.75);margin-top:2px;">${dietQuiz.length} questions across all diet categories</div>
        </div>
        <button id="diet-quiz-start" style="background:white;color:#1e3a5f;border:none;border-radius:var(--radius);padding:10px 20px;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;flex-shrink:0;">Start quiz →</button>
      </div>

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
  document.getElementById('diet-quiz-start').addEventListener('click', () => renderDietQuiz(container, navigate));
}

export function renderDietsCategory(container, navigate, catId) {
  markComplete('diets-' + catId, 'viewed');
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
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.07em;color:var(--ink-light);padding:6px 10px;width:18%;">Primary protein</th>
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

function renderDietQuiz(container, navigate) {
  let current = 0;
  let score = 0;
  let answered = false;
  const questions = dietQuiz;

  function render() {
    const q = questions[current];
    const pct = Math.round((current / questions.length) * 100);
    container.innerHTML = `
      ${nav('/diets', navigate)}
      <div class="page-content" style="max-width:640px;margin:0 auto;">
        <div class="breadcrumb"><a href="#/diets">Diets</a> › Quiz</div>
        <div style="background:#1e3a5f;border-radius:var(--radius-lg);padding:0.9rem 1.25rem;margin-bottom:1.5rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span style="font-size:13px;font-weight:600;color:white;">Question ${current + 1} of ${questions.length}</span>
            <span style="font-size:12px;color:rgba(255,255,255,0.7);">${pct}%</span>
          </div>
          <div style="background:rgba(255,255,255,0.2);border-radius:4px;height:6px;">
            <div style="background:white;height:6px;border-radius:4px;width:${pct}%;transition:width 0.3s;"></div>
          </div>
        </div>
        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.5rem;margin-bottom:1rem;">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);margin-bottom:0.75rem;">${q.category}</div>
          <p style="font-size:15px;font-weight:600;color:var(--ink);line-height:1.5;margin:0;">${q.q}</p>
        </div>
        <div id="options" style="display:flex;flex-direction:column;gap:10px;"></div>
        <div id="explanation" style="display:none;background:#f0fdf4;border:1.5px solid #86efac;border-radius:var(--radius);padding:1rem;margin-top:1rem;font-size:13.5px;color:var(--ink);line-height:1.6;"></div>
        <button id="next-btn" style="display:none;margin-top:1rem;width:100%;" class="btn-primary"></button>
      </div>`;

    setupHamburger();

    const optionsEl = document.getElementById('options');
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.style.cssText = 'width:100%;text-align:left;padding:12px 16px;border:1.5px solid var(--warm-dark);border-radius:var(--radius);background:white;font-size:14px;font-family:DM Sans,sans-serif;cursor:pointer;color:var(--ink);line-height:1.4;';
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const correct = i === q.correct;
        if (correct) score++;
        optionsEl.querySelectorAll('button').forEach((b, j) => {
          if (j === q.correct) { b.style.background = '#f0fdf4'; b.style.borderColor = '#22c55e'; b.style.fontWeight = '600'; }
          else if (j === i && !correct) { b.style.background = '#fef2f2'; b.style.borderColor = '#ef4444'; }
          b.style.cursor = 'default';
        });
        document.getElementById('explanation').textContent = q.explanation;
        document.getElementById('explanation').style.display = 'block';
        const nextBtn = document.getElementById('next-btn');
        nextBtn.textContent = current < questions.length - 1 ? 'Next question →' : 'See results';
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', () => {
          if (current < questions.length - 1) { current++; answered = false; render(); }
          else { showScore(); }
        });
      });
      optionsEl.appendChild(btn);
    });
  }

  async function showScore() {
    const pct = Math.round(score / questions.length * 100);
    const pointsAwarded = pct >= 75 ? await awardQuizPoints('diets-quiz') : false;
    markComplete('diets-quiz', 'quiz');
    if (pct >= 80) {
      const nb = updateBadgeStat('quizPasses', 1);
      if (pct === 100) { updateBadgeStat('perfectQuizzes', 1); showConfetti(2500); }
      awardBadgesAndCelebrate(nb, false);
    }
    container.innerHTML = `
      ${nav('/diets', navigate)}
      <div class="page-content" style="max-width:640px;margin:0 auto;text-align:center;padding-top:2rem;">
        <div class="breadcrumb" style="text-align:left;"><a href="#/diets">Diets</a> › Quiz</div>
        <div style="font-size:3rem;font-weight:700;color:var(--ink);margin:1.5rem 0 0.5rem;">${score} / ${questions.length}</div>
        <p style="color:var(--ink-mid);margin-bottom:${pointsAwarded ? '1rem' : '2rem'};">
          ${pct === 100 ? 'Perfect score!' : pct >= 75 ? 'Great work.' : pct >= 50 ? 'Good effort — review the diet reference cards and try again.' : 'Keep studying and give it another go.'}
        </p>
        ${pointsAwarded ? '<div style="display:inline-block;background:#fefce8;border:1.5px solid #fde047;border-radius:var(--radius);padding:8px 20px;font-size:14px;font-weight:600;color:#a16207;margin-bottom:1.5rem;">⭐ +10 points earned!</div>' : ''}
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <button class="btn-primary" id="retry-btn">Try again</button>
          <button class="btn-ghost" id="back-btn">← Back to diets</button>
        </div>
      </div>`;
    setupHamburger();
    document.getElementById('retry-btn').addEventListener('click', () => renderDietQuiz(container, navigate));
    document.getElementById('back-btn').addEventListener('click', () => renderDietsHome(container, navigate));
  }

  render();
}
