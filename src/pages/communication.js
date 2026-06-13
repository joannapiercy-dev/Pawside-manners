import { nav, setupHamburger } from './home.js';
import { scenarios } from '../data/scenarios.js';
import { quickPrompts } from '../data/quickprompts.js';
import { getProgress } from '../lib/progress.js';

export function renderCommunicationHome(container, navigate) {
  const progress = getProgress();

  const scenarioDone = scenarios.filter(s => progress[s.id]?.quiz || progress[s.id]?.roleplay).length;
  const roleplayDone = scenarios.filter(s => progress[s.id]?.roleplay).length;
  const qpTotal = quickPrompts.length;

  container.innerHTML = `
    ${nav('/communication', navigate)}
    <div class="page-content" style="max-width:720px;margin:0 auto;">

      <h2 style="margin-bottom:0.25rem;">💬 Communication</h2>
      <p style="color:var(--ink-mid);margin-bottom:2rem;">Two ways to practise — work through structured scenarios or jump straight into open-ended roleplay prompts.</p>

      <!-- Sub-section 1: Scenarios -->
      <div style="background:white;border:1.5px solid var(--warm-dark);border-radius:var(--radius-lg);padding:1.5rem;margin-bottom:1.25rem;cursor:pointer;transition:all 0.15s;box-shadow:var(--shadow-sm);" id="comm-scenarios" class="comm-card">
        <div style="display:flex;align-items:flex-start;gap:16px;">
          <span style="font-size:2.5rem;line-height:1;">🎬</span>
          <div style="flex:1;">
            <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 0.35rem;font-family:'DM Sans',sans-serif;">Scenarios & role-play</h3>
            <p style="font-size:14px;color:var(--ink-mid);line-height:1.6;margin:0 0 1rem;">Structured clinic situations — read through the context, take a quiz, then practise with an AI client. Covers complaints, consent, pricing, and more.</p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;">
              <span style="font-size:13px;color:var(--ink-mid);">📋 <strong>${scenarios.length}</strong> scenarios</span>
              <span style="font-size:13px;color:var(--ink-mid);">✅ <strong>${scenarioDone}</strong> with quiz or role-play done</span>
              <span style="font-size:13px;color:var(--ink-mid);">🎭 <strong>${roleplayDone}</strong> role-plays completed</span>
            </div>
          </div>
          <span style="color:var(--ink-light);font-size:1.3rem;align-self:center;">→</span>
        </div>
      </div>

      <!-- Sub-section 2: What would you say? -->
      <div style="background:white;border:1.5px solid var(--warm-dark);border-radius:var(--radius-lg);padding:1.5rem;cursor:pointer;transition:all 0.15s;box-shadow:var(--shadow-sm);" id="comm-quickprompts" class="comm-card">
        <div style="display:flex;align-items:flex-start;gap:16px;">
          <span style="font-size:2.5rem;line-height:1;">💬</span>
          <div style="flex:1;">
            <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 0.35rem;font-family:'DM Sans',sans-serif;">What would you say?</h3>
            <p style="font-size:14px;color:var(--ink-mid);line-height:1.6;margin:0 0 1rem;">Real clinic moments — write your response and get instant AI feedback. No right or wrong answer, just a chance to practise thinking on your feet.</p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;">
              <span style="font-size:13px;color:var(--ink-mid);">💡 <strong>${qpTotal}</strong> prompts across all categories</span>
            </div>
          </div>
          <span style="color:var(--ink-light);font-size:1.3rem;align-self:center;">→</span>
        </div>
      </div>

    </div>
  `;

  setupHamburger();

  // Hover effect
  container.querySelectorAll('.comm-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'var(--ink)';
      card.style.background = 'var(--warm)';
      card.style.transform = 'translateY(-2px)';
      card.style.boxShadow = 'var(--shadow)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = 'var(--warm-dark)';
      card.style.background = 'white';
      card.style.transform = '';
      card.style.boxShadow = 'var(--shadow-sm)';
    });
  });

  document.getElementById('comm-scenarios').addEventListener('click', () => navigate('/train'));
  document.getElementById('comm-quickprompts').addEventListener('click', () => navigate('/quickprompts'));
}
