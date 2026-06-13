import { appointmentTypes, appointmentCategories } from '../data/appointments.js';
import { nav, setupHamburger } from './home.js';

export function renderAppointmentsHome(container, navigate) {
  container.innerHTML = `
    ${nav('/appointments', navigate)}
    <div class="page-content">
      <h2 style="margin-bottom:0.25rem;">Appointment booking guide</h2>
      <p style="color:var(--ink-mid);margin-bottom:1.5rem;">Which appointment type to book, how long to allow, and what to check with the owner first.</p>

      <div style="margin-bottom:2rem;">
        <input
          type="text"
          id="appt-search"
          placeholder="Search by situation or appointment type..."
          style="width:100%;padding:10px 14px;border:1.5px solid var(--warm-dark);border-radius:var(--radius);font-family:'DM Sans',sans-serif;font-size:14px;color:var(--ink);background:white;box-sizing:border-box;"
        />
      </div>

      <div id="appt-results">
        ${appointmentCategories.map(cat => {
          const items = appointmentTypes.filter(a => a.category === cat.id);
          if (!items.length) return '';
          return `
            <div class="appt-category-block" data-cat="${cat.id}" style="margin-bottom:2rem;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:0.75rem;padding-bottom:6px;border-bottom:2px solid var(--warm-dark);">
                <span style="font-size:1.1rem;">${cat.icon}</span>
                <span style="font-size:11px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:var(--ink-light);">${cat.label}</span>
              </div>
              <div style="display:flex;flex-direction:column;gap:10px;">
                ${items.map(a => renderApptCard(a)).join('')}
              </div>
            </div>`;
        }).join('')}
      </div>
    </div>
  `;

  setupHamburger();

  // Search
  document.getElementById('appt-search').addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    if (!q) {
      document.getElementById('appt-results').innerHTML = appointmentCategories.map(cat => {
        const items = appointmentTypes.filter(a => a.category === cat.id);
        if (!items.length) return '';
        return `<div class="appt-category-block" style="margin-bottom:2rem;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:0.75rem;padding-bottom:6px;border-bottom:2px solid var(--warm-dark);">
            <span style="font-size:1.1rem;">${cat.icon}</span>
            <span style="font-size:11px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:var(--ink-light);">${cat.label}</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">${items.map(a => renderApptCard(a)).join('')}</div>
        </div>`;
      }).join('');
      return;
    }
    const matches = appointmentTypes.filter(a =>
      a.name.toLowerCase().includes(q) ||
      a.when.toLowerCase().includes(q) ||
      a.notes.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
    );
    if (matches.length === 0) {
      document.getElementById('appt-results').innerHTML = `<p style="color:var(--ink-light);font-style:italic;padding:1rem 0;">No results for "${this.value}".</p>`;
    } else {
      document.getElementById('appt-results').innerHTML = `
        <p style="font-size:13px;color:var(--ink-light);margin-bottom:1rem;">${matches.length} result${matches.length !== 1 ? 's' : ''}</p>
        <div style="display:flex;flex-direction:column;gap:10px;">${matches.map(a => renderApptCard(a)).join('')}</div>`;
    }
  });
}

function renderApptCard(a) {
  const flags = [];
  if (a.flags.includes('vet-approval')) flags.push('<span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:20px;background:#fef2f2;color:#991b1b;border:1px solid #fecaca;">⚠️ Vet approval needed</span>');
  if (a.flags.includes('advance-check')) flags.push('<span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:20px;background:#fef9c3;color:#713f12;border:1px solid #fef08a;">📋 Check with owner in advance</span>');
  if (a.flags.includes('estimate-needed')) flags.push('<span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:20px;background:#f0fdf4;color:#166534;border:1px solid #bbf7d0;">💰 Estimate needed</span>');
  if (a.flags.includes('sedation') && !a.flags.includes('sedation-required')) flags.push('<span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:20px;background:#fdf4ff;color:#7e22ce;border:1px solid #e9d5ff;">💊 Sedation may be required</span>');
  if (a.flags.includes('sedation-required')) flags.push('<span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:20px;background:#fdf4ff;color:#7e22ce;border:1px solid #e9d5ff;">💊 Sedation required</span>');
  if (a.flags.includes('fasting')) flags.push('<span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:20px;background:#fff7ed;color:#c2410c;border:1px solid #fed7aa;">🍽️ Fasting required</span>');
  if (a.flags.includes('dropoff')) flags.push('<span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:20px;background:#f0f9ff;color:#0c4a6e;border:1px solid #bae6fd;">📦 Drop-off</span>');
  if (a.flags.includes('consent')) flags.push('<span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:20px;background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;">📝 Consent form</span>');

  return `
    <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-sm);">
      <div style="background:${a.color};padding:0.85rem 1.25rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          <span style="font-weight:700;font-size:1rem;color:${a.textColor};">${a.name}</span>
          ${flags.join(' ')}
        </div>
        <span style="font-size:12.5px;font-weight:600;color:${a.textColor};opacity:0.8;white-space:nowrap;">⏱ ${a.flags.includes('dropoff') && (a.id === 'pcvc' || a.id === 'vidi') ? 'Tech appointment slot' : a.duration}</span>
      </div>
      <div style="padding:0.85rem 1.25rem;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);margin-bottom:4px;">Book when</div>
        <p style="font-size:13.5px;color:var(--ink-mid);line-height:1.6;margin-bottom:${a.notes ? '0.75rem' : '0'};">${a.when}</p>
        ${a.notes ? `<div style="background:#fef9e7;border-left:3px solid #fde047;padding:8px 12px;border-radius:0 var(--radius) var(--radius) 0;font-size:13px;color:#713f12;line-height:1.55;">${a.notes}</div>` : ''}
      </div>
    </div>`;
}
