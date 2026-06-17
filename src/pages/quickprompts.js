import { quickPrompts, promptCategories } from '../data/quickprompts.js';
import { getQuickPromptFeedback } from '../lib/quickprompt-api.js';
import { nav, setupHamburger } from './home.js';
import { updateBadgeStat, awardBadgesAndCelebrate } from '../lib/gamification.js';
import { awardQuickPromptPoints } from '../lib/points.js';

const DIFF_LABELS = { starter: '🟢 Starter', intermediate: '🟡 Intermediate', advanced: '🔴 Advanced' };
const DIFF_COLORS = { starter: '#f0fdf4', intermediate: '#fefce8', advanced: '#fef2f2' };
const DIFF_TEXT   = { starter: '#166534', intermediate: '#713f12', advanced: '#991b1b' };

export function renderQuickPromptsHome(container, navigate) {
  let activeCategory = 'All';
  let activeDiff = 'All';

  function render() {
    const filtered = quickPrompts.filter(p =>
      (activeCategory === 'All' || p.category === activeCategory) &&
      (activeDiff === 'All' || p.difficulty === activeDiff)
    );

    container.innerHTML = `
      ${nav('/quickprompts', navigate)}
      <div class="page-content">
        <h2 style="margin-bottom:0.25rem;">💬 What would you say?</h2>
        <p style="color:var(--ink-mid);margin-bottom:1.5rem;">Real clinic situations. Write your response, get instant AI feedback. No right or wrong answer — just a chance to practise.</p>

        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0.75rem;">
          ${['All', ...promptCategories].map(cat => `
            <button class="qp-filter ${activeCategory === cat ? 'qp-filter-active' : ''}" data-cat="${cat}"
              style="font-size:12px;padding:4px 10px;border-radius:20px;border:1.5px solid ${activeCategory === cat ? 'var(--ink)' : 'var(--warm-dark)'};background:${activeCategory === cat ? 'var(--ink)' : 'white'};color:${activeCategory === cat ? 'white' : 'var(--ink-mid)'};cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:500;">
              ${cat}
            </button>`).join('')}
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:1.5rem;">
          ${['All', 'starter', 'intermediate', 'advanced'].map(d => `
            <button class="qp-diff-filter" data-diff="${d}"
              style="font-size:12px;padding:4px 10px;border-radius:20px;border:1.5px solid ${activeDiff === d ? 'var(--ink)' : 'var(--warm-dark)'};background:${activeDiff === d ? 'var(--ink)' : 'white'};color:${activeDiff === d ? 'white' : 'var(--ink-mid)'};cursor:pointer;font-family:'DM Sans',sans-serif;font-weight:500;">
              ${d === 'All' ? 'All levels' : DIFF_LABELS[d]}
            </button>`).join('')}
        </div>

        <div style="display:flex;flex-direction:column;gap:10px;">
          ${filtered.map(p => `
            <div class="qp-card" data-id="${p.id}" style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.1rem 1.25rem;cursor:pointer;box-shadow:var(--shadow-sm);transition:box-shadow 0.15s;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap;">
                <span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:20px;background:${DIFF_COLORS[p.difficulty]};color:${DIFF_TEXT[p.difficulty]};">${DIFF_LABELS[p.difficulty]}</span>
                <span style="font-size:11px;color:var(--ink-light);">${p.category}</span>
              </div>
              <p style="font-size:14px;color:var(--ink);line-height:1.6;margin:0 0 6px;">${p.setup}</p>
              <p style="font-size:13.5px;font-weight:600;color:var(--ink-mid);margin:0;">→ ${p.prompt}</p>
            </div>`).join('')}
        </div>
        ${filtered.length === 0 ? '<p style="color:var(--ink-light);font-style:italic;padding:1rem 0;">No prompts match those filters.</p>' : ''}
      </div>
    `;

    setupHamburger();

    container.querySelectorAll('.qp-filter').forEach(btn => {
      btn.addEventListener('click', () => { activeCategory = btn.dataset.cat; render(); });
    });
    container.querySelectorAll('.qp-diff-filter').forEach(btn => {
      btn.addEventListener('click', () => { activeDiff = btn.dataset.diff; render(); });
    });
    container.querySelectorAll('.qp-card').forEach(card => {
      card.addEventListener('click', () => {
        const p = quickPrompts.find(x => x.id === card.dataset.id);
        if (p) renderPrompt(container, navigate, p);
      });
    });
  }

  render();
}

function renderPrompt(container, navigate, prompt) {
  window.scrollTo(0, 0);
  let loading = false;

  function render(feedback = null) {
    container.innerHTML = `
      ${nav('/quickprompts', navigate)}
      <div class="page-content" style="max-width:640px;margin:0 auto;">
        <div class="breadcrumb"><span class="breadcrumb-link" id="bc-qp">What would you say?</span> › ${prompt.category}</div>

        <div style="display:flex;align-items:center;gap:8px;margin-bottom:1.25rem;">
          <span style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;background:${DIFF_COLORS[prompt.difficulty]};color:${DIFF_TEXT[prompt.difficulty]};">${DIFF_LABELS[prompt.difficulty]}</span>
          <span style="font-size:12px;color:var(--ink-light);">${prompt.category}</span>
        </div>

        <!-- Scenario -->
        <div style="background:var(--warm);border-radius:var(--radius-lg);padding:1.25rem 1.5rem;margin-bottom:1.25rem;border-left:3px solid var(--warm-dark);">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);margin-bottom:6px;">The situation</div>
          <p style="font-size:14.5px;color:var(--ink);line-height:1.65;margin:0;">${prompt.setup}</p>
        </div>

        <div style="background:white;border:1.5px solid var(--ink);border-radius:var(--radius-lg);padding:1.25rem 1.5rem;margin-bottom:1.25rem;">
          <p style="font-size:15px;font-weight:600;color:var(--ink);margin:0 0 1rem;">💬 ${prompt.prompt}</p>

          ${!feedback ? `
            <textarea id="qp-response" placeholder="Write what you would actually say..." style="width:100%;min-height:120px;padding:10px 14px;border:1.5px solid var(--warm-dark);border-radius:var(--radius);font-family:'DM Sans',sans-serif;font-size:14px;color:var(--ink);line-height:1.6;resize:vertical;box-sizing:border-box;"></textarea>
            ${prompt.hint ? `<div style="font-size:12.5px;color:var(--ink-light);margin-top:8px;font-style:italic;">💡 ${prompt.hint}</div>` : ''}
            <button class="btn-primary" id="submit-btn" style="margin-top:1rem;width:100%;">Get feedback →</button>
          ` : `
            <div style="background:var(--warm);border-radius:var(--radius);padding:10px 14px;font-size:14px;color:var(--ink);font-style:italic;margin-bottom:1rem;line-height:1.6;">"${feedback.userResponse}"</div>
          `}
        </div>

        ${loading ? `
          <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.5rem;text-align:center;box-shadow:var(--shadow-sm);">
            <div style="font-size:1.5rem;margin-bottom:0.5rem;">⏳</div>
            <p style="color:var(--ink-mid);font-size:14px;margin:0;">Getting your feedback...</p>
          </div>` : ''}

        ${feedback ? `
          <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.5rem;box-shadow:var(--shadow-sm);margin-bottom:1.25rem;">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);margin-bottom:1rem;">Trainer feedback</div>
            <div style="font-size:14px;color:var(--ink);line-height:1.8;white-space:pre-wrap;">${feedback.text}</div>
          </div>

          ${feedback.pointsAwarded ? '<div style="display:inline-block;background:#fefce8;border:1.5px solid #fde047;border-radius:var(--radius);padding:6px 16px;font-size:13.5px;font-weight:600;color:#a16207;margin-bottom:1rem;">⭐ +5 points earned!</div>' : ''}
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:2rem;">
            <button class="btn-primary" id="try-again-btn">Try again</button>
            <button class="btn-ghost" id="next-btn">Next prompt →</button>
            <button class="btn-ghost" id="back-btn">← All prompts</button>
          </div>` : ''}
      </div>
    `;

    setupHamburger();
    document.getElementById('bc-qp')?.addEventListener('click', () => renderQuickPromptsHome(container, navigate));
    document.getElementById('back-btn')?.addEventListener('click', () => renderQuickPromptsHome(container, navigate));
    document.getElementById('try-again-btn')?.addEventListener('click', () => renderPrompt(container, navigate, prompt));
    document.getElementById('next-btn')?.addEventListener('click', () => {
      const idx = quickPrompts.findIndex(p => p.id === prompt.id);
      const next = quickPrompts[(idx + 1) % quickPrompts.length];
      renderPrompt(container, navigate, next);
    });

    if (!feedback) {
      const ta = document.getElementById('qp-response');
      ta?.addEventListener('input', () => {
        ta.style.height = 'auto';
        ta.style.height = ta.scrollHeight + 'px';
      });

      document.getElementById('submit-btn')?.addEventListener('click', async () => {
        const response = ta?.value?.trim();
        if (!response || response.length < 10) {
          ta.style.borderColor = '#991b1b';
          ta.placeholder = 'Please write a response first...';
          return;
        }
        loading = true;
        const userResponse = response;
        render();
        try {
          const text = await getQuickPromptFeedback(prompt, userResponse);
          loading = false;
          // Award badge and points for completing a quick prompt
          const newBadges = updateBadgeStat('roleplays', 1);
          awardBadgesAndCelebrate(newBadges, false);
          const qpPoints = await awardQuickPromptPoints(prompt.id || prompt.prompt?.slice(0,40));
          render({ text, userResponse, pointsAwarded: qpPoints });
        } catch (err) {
          loading = false;
          render();
          const errDiv = document.createElement('div');
          errDiv.style.cssText = 'background:#fef2f2;border-radius:var(--radius);padding:10px 14px;color:#991b1b;font-size:13px;margin-top:0.5rem;';
          errDiv.textContent = 'Sorry, couldn\'t get feedback right now. Please try again.';
          document.getElementById('submit-btn')?.after(errDiv);
        }
      });
    }
  }

  render();
}
