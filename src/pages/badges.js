import { nav, setupHamburger } from './home.js';
import { BADGE_DEFS, getEarnedBadges, getBadgeStats } from '../lib/gamification.js';

export function renderBadges(container, navigate) {
  const earned = getEarnedBadges();
  const stats = getBadgeStats();
  const earnedCount = earned.length;
  const totalCount = BADGE_DEFS.length;

  container.innerHTML = `
    ${nav('/badges', navigate)}
    <div class="page-content">
      <h2 style="margin-bottom:0.25rem;">🏅 Badges</h2>
      <p style="color:var(--ink-mid);margin-bottom:0.5rem;">Earned by completing activities across the app.</p>

      <div style="display:flex;align-items:center;gap:12px;margin-bottom:2rem;">
        <div style="background:linear-gradient(135deg,#f59e0b,#d97706);border-radius:var(--radius-lg);padding:1rem 1.5rem;color:white;flex:1;text-align:center;">
          <div style="font-size:2rem;font-weight:700;">${earnedCount}</div>
          <div style="font-size:12px;opacity:0.85;">of ${totalCount} badges earned</div>
        </div>
        <div style="background:var(--warm);border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1rem 1.5rem;flex:2;">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
            <span style="font-size:12px;color:var(--ink-light);">Progress</span>
            <span style="font-size:12px;font-weight:600;color:var(--ink);">${Math.round(earnedCount/totalCount*100)}%</span>
          </div>
          <div style="background:var(--warm-dark);border-radius:20px;height:8px;overflow:hidden;">
            <div style="background:#f59e0b;height:100%;width:${Math.round(earnedCount/totalCount*100)}%;border-radius:20px;transition:width 0.5s;"></div>
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px;">
        ${BADGE_DEFS.map(badge => {
          const isEarned = earned.includes(badge.id);
          return `
            <div style="background:${isEarned ? 'white' : 'var(--warm)'};border:1px solid ${isEarned ? '#fde68a' : 'var(--warm-mid)'};border-radius:var(--radius-lg);padding:0.9rem 1.25rem;display:flex;align-items:center;gap:14px;opacity:${isEarned ? '1' : '0.5'};">
              <div style="font-size:2rem;width:40px;text-align:center;flex-shrink:0;${isEarned ? '' : 'filter:grayscale(1);'}">${badge.icon}</div>
              <div style="flex:1;">
                <div style="font-weight:700;font-size:14px;color:${isEarned ? 'var(--ink)' : 'var(--ink-light)'};">${badge.name}</div>
                <div style="font-size:12.5px;color:var(--ink-light);margin-top:2px;">${badge.desc}</div>
              </div>
              ${isEarned ? '<span style="font-size:1rem;">✅</span>' : '<span style="font-size:12px;color:var(--ink-light);">🔒</span>'}
            </div>`;
        }).join('')}
      </div>
    </div>
  `;
  setupHamburger();
}
