import { getSupabase, getProfile } from '../lib/supabase.js';
import { nav, setupHamburger } from './home.js';

export async function renderAdminLeaderboard(container, navigate) {
  // Check admin access
  const profile = await getProfile();
  if (!profile || profile.role !== 'admin') {
    container.innerHTML = `
      ${nav('/admin/points', navigate)}
      <div class="page-content" style="text-align:center;padding-top:3rem;">
        <p style="color:var(--ink-mid);">⛔ You don't have permission to view this page.</p>
        <button class="btn-ghost" onclick="history.back()">← Go back</button>
      </div>`;
    setupHamburger();
    return;
  }

  // Show loading state
  container.innerHTML = `
    ${nav('/admin/points', navigate)}
    <div class="page-content">
      <div class="breadcrumb"><a href="#/">Home</a> › Admin › Points leaderboard</div>
      <h2 style="margin-bottom:0.25rem;">⭐ Points leaderboard</h2>
      <p style="color:var(--ink-mid);margin-bottom:2rem;">Points earned by all staff across quizzes and role-plays.</p>
      <div id="leaderboard-content" style="color:var(--ink-mid);font-style:italic;">Loading…</div>
    </div>`;
  setupHamburger();

  try {
    const sb = await getSupabase();

    // Get all profiles
    const { data: profiles, error: profilesError } = await sb
      .from('profiles')
      .select('id, full_name, clinic, role')
      .order('full_name');

    if (profilesError) throw profilesError;

    // Get all points events
    const { data: events, error: eventsError } = await sb
      .from('points_events')
      .select('user_id, points, event_type, source_id, created_at');

    if (eventsError) throw eventsError;

    // Aggregate points per user
    const pointsMap = {};
    const breakdownMap = {};
    for (const e of (events || [])) {
      pointsMap[e.user_id] = (pointsMap[e.user_id] || 0) + e.points;
      if (!breakdownMap[e.user_id]) breakdownMap[e.user_id] = { quiz_pass: 0, roleplay_complete: 0 };
      breakdownMap[e.user_id][e.event_type] = (breakdownMap[e.user_id][e.event_type] || 0) + 1;
    }

    // Sort profiles by points descending
    const sorted = (profiles || []).sort((a, b) => (pointsMap[b.id] || 0) - (pointsMap[a.id] || 0));

    // Filter chips
    const clinics = ['All clinics', 'Oaklands Veterinary Hospital', 'Royal Bay Veterinary Clinic'];
    const clinicIds = ['all', 'oaklands', 'royalbay'];

    const clinicLabel = { oaklands: 'Oaklands', royalbay: 'Royal Bay' };
    const medals = ['🥇', '🥈', '🥉'];

    const rows = sorted.map((p, i) => {
      const pts = pointsMap[p.id] || 0;
      const bd = breakdownMap[p.id] || { quiz_pass: 0, roleplay_complete: 0 };
      const medal = i < 3 && pts > 0 ? medals[i] : '';
      return `
        <tr data-clinic="${p.clinic}" style="border-bottom:1px solid var(--warm-mid);${i % 2 === 0 ? '' : 'background:var(--warm);'}">
          <td style="padding:12px 16px;font-size:14px;color:var(--ink-light);width:40px;">${medal || (i + 1)}</td>
          <td style="padding:12px 16px;">
            <div style="font-weight:600;font-size:14px;color:var(--ink);">${p.full_name}</div>
            <div style="font-size:12px;color:var(--ink-light);">${clinicLabel[p.clinic] || p.clinic} · ${p.role}</div>
          </td>
          <td style="padding:12px 16px;font-size:13px;color:var(--ink-mid);">${bd.quiz_pass} quiz${bd.quiz_pass !== 1 ? 'zes' : ''}</td>
          <td style="padding:12px 16px;font-size:13px;color:var(--ink-mid);">${bd.roleplay_complete} role-play${bd.roleplay_complete !== 1 ? 's' : ''}</td>
          <td style="padding:12px 16px;text-align:right;">
            <span style="font-size:1.1rem;font-weight:700;color:${pts > 0 ? '#a16207' : 'var(--ink-light)'};">${pts}</span>
            <span style="font-size:12px;color:var(--ink-light);"> pts</span>
          </td>
        </tr>`;
    }).join('');

    const totalStaff = sorted.length;
    const activeStaff = sorted.filter(p => pointsMap[p.id] > 0).length;
    const totalPts = Object.values(pointsMap).reduce((a, b) => a + b, 0);

    document.getElementById('leaderboard-content').innerHTML = `
      <!-- Summary pills -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin-bottom:2rem;">
        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius);padding:14px;text-align:center;">
          <div style="font-size:1.5rem;font-weight:700;color:var(--ink);">${totalStaff}</div>
          <div style="font-size:12px;color:var(--ink-light);margin-top:2px;">Staff registered</div>
        </div>
        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius);padding:14px;text-align:center;">
          <div style="font-size:1.5rem;font-weight:700;color:var(--ink);">${activeStaff}</div>
          <div style="font-size:12px;color:var(--ink-light);margin-top:2px;">Have earned points</div>
        </div>
        <div style="background:#fefce8;border:1px solid #fde047;border-radius:var(--radius);padding:14px;text-align:center;">
          <div style="font-size:1.5rem;font-weight:700;color:#a16207;">${totalPts}</div>
          <div style="font-size:12px;color:#a16207;margin-top:2px;">Total points earned</div>
        </div>
      </div>

      <!-- Filter chips -->
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:1.25rem;">
        ${clinics.map((label, i) => `
          <button class="lb-filter ${i === 0 ? 'lb-active' : ''}" data-clinic="${clinicIds[i]}"
            style="padding:6px 14px;border-radius:20px;font-size:13px;font-family:'DM Sans',sans-serif;cursor:pointer;border:1.5px solid ${i === 0 ? 'var(--ink)' : 'var(--warm-dark)'};background:${i === 0 ? 'var(--ink)' : 'white'};color:${i === 0 ? 'white' : 'var(--ink-mid)'};">
            ${label}
          </button>`).join('')}
      </div>

      <!-- Table -->
      <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);overflow:hidden;">
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="background:#1e3a5f;color:white;">
              <th style="padding:10px 16px;text-align:left;font-size:12px;font-weight:600;">#</th>
              <th style="padding:10px 16px;text-align:left;font-size:12px;font-weight:600;">Name</th>
              <th style="padding:10px 16px;text-align:left;font-size:12px;font-weight:600;">Quizzes</th>
              <th style="padding:10px 16px;text-align:left;font-size:12px;font-weight:600;">Role-plays</th>
              <th style="padding:10px 16px;text-align:right;font-size:12px;font-weight:600;">Points</th>
            </tr>
          </thead>
          <tbody id="lb-tbody">${rows}</tbody>
        </table>
      </div>
      <p style="font-size:12px;color:var(--ink-light);margin-top:1rem;text-align:right;">Last updated: ${new Date().toLocaleString('en-CA', { dateStyle: 'medium', timeStyle: 'short' })}</p>
    `;

    // Filter chip logic
    document.querySelectorAll('.lb-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.lb-filter').forEach(b => {
          b.style.background = 'white';
          b.style.color = 'var(--ink-mid)';
          b.style.borderColor = 'var(--warm-dark)';
          b.classList.remove('lb-active');
        });
        btn.style.background = 'var(--ink)';
        btn.style.color = 'white';
        btn.style.borderColor = 'var(--ink)';
        btn.classList.add('lb-active');

        const clinic = btn.dataset.clinic;
        document.querySelectorAll('#lb-tbody tr').forEach(row => {
          row.style.display = (clinic === 'all' || row.dataset.clinic === clinic) ? '' : 'none';
        });
      });
    });

  } catch (err) {
    document.getElementById('leaderboard-content').innerHTML =
      `<div style="color:#b91c1c;background:#fef2f2;border:1px solid #fca5a5;border-radius:var(--radius);padding:12px 16px;">
        Could not load leaderboard data. Please try refreshing the page.
      </div>`;
    console.error('Leaderboard error:', err);
  }
}
