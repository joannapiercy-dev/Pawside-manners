import { getSupabase, getProfile } from '../lib/supabase.js';
import { nav, setupHamburger } from './home.js';

export async function renderAdminRxLog(container, navigate) {
  const profile = await getProfile();
  if (!profile || profile.role !== 'admin') {
    container.innerHTML = `
      ${nav('/admin/rx-log', navigate)}
      <div class="page-content" style="text-align:center;padding-top:3rem;">
        <p style="color:var(--ink-mid);">⛔ You don't have permission to view this page.</p>
        <button class="btn-ghost" onclick="history.back()">← Go back</button>
      </div>`;
    setupHamburger();
    return;
  }

  container.innerHTML = `
    ${nav('/admin/rx-log', navigate)}
    <div class="page-content">
      <div class="breadcrumb"><a href="#/">Home</a> › Admin › Prescription check log</div>
      <h2 style="margin-bottom:0.25rem;">💊 Prescription check log</h2>
      <p style="color:var(--ink-mid);margin-bottom:2rem;">Every prescription double-check performed by staff — matches and mismatches.</p>
      <div id="rx-log-content" style="color:var(--ink-mid);font-style:italic;">Loading…</div>
    </div>`;
  setupHamburger();

  try {
    const sb = await getSupabase();

    const { data: logs, error } = await sb
      .from('rx_checks')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    if (!logs || logs.length === 0) {
      document.getElementById('rx-log-content').innerHTML =
        `<div style="text-align:center;padding:3rem;color:var(--ink-light);">No prescription checks have been logged yet.</div>`;
      return;
    }

    const total     = logs.length;
    const matches   = logs.filter(l => l.result === 'match').length;
    const mismatches = logs.filter(l => l.result === 'mismatch').length;
    const unclear   = logs.filter(l => l.result === 'unclear').length;

    const resultBadge = (result) => {
      if (result === 'match')    return '<span style="background:#f0fdf4;color:#15803d;border:1px solid #bbf7d0;border-radius:20px;padding:3px 10px;font-size:12px;font-weight:600;">✅ Match</span>';
      if (result === 'mismatch') return '<span style="background:#fef2f2;color:#b91c1c;border:1px solid #fca5a5;border-radius:20px;padding:3px 10px;font-size:12px;font-weight:600;">🚨 Mismatch</span>';
      return '<span style="background:#fefce8;color:#a16207;border:1px solid #fde047;border-radius:20px;padding:3px 10px;font-size:12px;font-weight:600;">⚠️ Unclear</span>';
    };

    const rows = logs.map((log, i) => {
      const date = new Date(log.created_at);
      const dateStr = date.toLocaleDateString('en-CA', { day: 'numeric', month: 'short', year: 'numeric' });
      const timeStr = date.toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit' });
      return `
        <tr style="border-bottom:1px solid var(--warm-mid);${i % 2 === 0 ? '' : 'background:var(--warm);'}${log.result === 'mismatch' ? 'background:#fff5f5;' : ''}">
          <td style="padding:12px 16px;">
            <div style="font-size:13.5px;font-weight:600;color:var(--ink);">${log.staff_name || '—'}</div>
          </td>
          <td style="padding:12px 16px;font-size:13.5px;color:var(--ink);">${log.patient_name || '—'}</td>
          <td style="padding:12px 16px;font-size:13.5px;color:var(--ink);">${log.rx_number || '—'}</td>
          <td style="padding:12px 16px;font-size:13.5px;color:var(--ink);">${log.drug_name || '—'}</td>
          <td style="padding:12px 16px;font-size:13.5px;color:var(--ink);">${log.concentration || '—'}</td>
          <td style="padding:12px 16px;">${resultBadge(log.result)}</td>
          <td style="padding:12px 16px;font-size:12px;color:var(--ink-light);">
            <div>${dateStr}</div>
            <div>${timeStr}</div>
          </td>
          ${log.result !== 'match' ? `<td style="padding:12px 16px;font-size:12px;color:var(--ink-mid);max-width:200px;">${log.ai_notes || '—'}</td>` : '<td style="padding:12px 16px;"></td>'}
        </tr>`;
    }).join('');

    document.getElementById('rx-log-content').innerHTML = `
      <!-- Summary -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-bottom:2rem;">
        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius);padding:14px;text-align:center;">
          <div style="font-size:1.5rem;font-weight:700;color:var(--ink);">${total}</div>
          <div style="font-size:12px;color:var(--ink-light);margin-top:2px;">Total checks</div>
        </div>
        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:var(--radius);padding:14px;text-align:center;">
          <div style="font-size:1.5rem;font-weight:700;color:#15803d;">${matches}</div>
          <div style="font-size:12px;color:#15803d;margin-top:2px;">Matches</div>
        </div>
        <div style="background:#fef2f2;border:1px solid #fca5a5;border-radius:var(--radius);padding:14px;text-align:center;">
          <div style="font-size:1.5rem;font-weight:700;color:#b91c1c;">${mismatches}</div>
          <div style="font-size:12px;color:#b91c1c;margin-top:2px;">Mismatches</div>
        </div>
        <div style="background:#fefce8;border:1px solid #fde047;border-radius:var(--radius);padding:14px;text-align:center;">
          <div style="font-size:1.5rem;font-weight:700;color:#a16207;">${unclear}</div>
          <div style="font-size:12px;color:#a16207;margin-top:2px;">Unclear</div>
        </div>
      </div>

      <!-- Log table -->
      <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);overflow:hidden;overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;min-width:600px;">
          <thead>
            <tr style="background:#1e3a5f;color:white;">
              <th style="padding:10px 16px;text-align:left;font-size:12px;font-weight:600;">Staff</th>
              <th style="padding:10px 16px;text-align:left;font-size:12px;font-weight:600;">Pet</th>
              <th style="padding:10px 16px;text-align:left;font-size:12px;font-weight:600;">Rx #</th>
              <th style="padding:10px 16px;text-align:left;font-size:12px;font-weight:600;">Drug</th>
              <th style="padding:10px 16px;text-align:left;font-size:12px;font-weight:600;">Concentration</th>
              <th style="padding:10px 16px;text-align:left;font-size:12px;font-weight:600;">Result</th>
              <th style="padding:10px 16px;text-align:left;font-size:12px;font-weight:600;">Date / Time</th>
              <th style="padding:10px 16px;text-align:left;font-size:12px;font-weight:600;">Notes</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <p style="font-size:12px;color:var(--ink-light);margin-top:1rem;text-align:right;">
        Showing ${total} check${total !== 1 ? 's' : ''} · Last updated ${new Date().toLocaleString('en-CA', { dateStyle: 'medium', timeStyle: 'short' })}
      </p>`;

  } catch (err) {
    document.getElementById('rx-log-content').innerHTML =
      `<div style="color:#b91c1c;background:#fef2f2;border:1px solid #fca5a5;border-radius:var(--radius);padding:12px 16px;">
        Could not load the log. Please try refreshing.
      </div>`;
    console.error('Rx log error:', err);
  }
}
