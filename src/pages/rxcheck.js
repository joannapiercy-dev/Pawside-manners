import { getSupabase, getProfile } from '../lib/supabase.js';
import { nav, setupHamburger } from './home.js';

export async function renderRxCheck(container, navigate) {
  const profile = await getProfile();
  if (!profile) { navigate('/login'); return; }

  function renderPage(content) {
    container.innerHTML = `
      ${nav('/rx-check', navigate)}
      <div class="page-content" style="max-width:640px;margin:0 auto;">
        <h2 style="margin-bottom:0.25rem;">💊 Prescription double-check</h2>
        <p style="color:var(--ink-mid);margin-bottom:2rem;">Photo the prescription label and the medication bottle. The app will compare them and flag any mismatch before medication leaves the clinic.</p>
        ${content}
      </div>`;
    setupHamburger();
  }

  renderPage(uploadUI());

  function uploadUI() {
    return `
      <div style="display:flex;flex-direction:column;gap:1.5rem;">

        <!-- Label photo -->
        <div style="background:white;border:1.5px solid var(--warm-dark);border-radius:var(--radius-lg);padding:1.5rem;">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);margin-bottom:0.75rem;">Step 1 — Prescription label</div>
          <label for="label-input" id="label-zone" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;border:2px dashed var(--warm-dark);border-radius:var(--radius);padding:2rem;cursor:pointer;background:var(--warm);transition:border-color 0.15s;">
            <span style="font-size:2rem;">📋</span>
            <span style="font-size:14px;font-weight:600;color:var(--ink);">Tap to photo the label</span>
            <span style="font-size:12px;color:var(--ink-light);">or choose from gallery</span>
          </label>
          <input id="label-input" type="file" accept="image/*" capture="environment" style="display:none;" />
          <div id="label-preview" style="display:none;margin-top:1rem;text-align:center;">
            <img id="label-img" style="max-width:100%;max-height:200px;border-radius:var(--radius);border:1px solid var(--warm-mid);" />
            <p style="font-size:12px;color:var(--green-text, #15803d);margin-top:6px;">✅ Label photo captured</p>
          </div>
        </div>

        <!-- Bottle photo -->
        <div style="background:white;border:1.5px solid var(--warm-dark);border-radius:var(--radius-lg);padding:1.5rem;">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);margin-bottom:0.75rem;">Step 2 — Medication bottle</div>
          <label for="bottle-input" id="bottle-zone" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;border:2px dashed var(--warm-dark);border-radius:var(--radius);padding:2rem;cursor:pointer;background:var(--warm);transition:border-color 0.15s;">
            <span style="font-size:2rem;">💊</span>
            <span style="font-size:14px;font-weight:600;color:var(--ink);">Tap to photo the bottle</span>
            <span style="font-size:12px;color:var(--ink-light);">or choose from gallery</span>
          </label>
          <input id="bottle-input" type="file" accept="image/*" capture="environment" style="display:none;" />
          <div id="bottle-preview" style="display:none;margin-top:1rem;text-align:center;">
            <img id="bottle-img" style="max-width:100%;max-height:200px;border-radius:var(--radius);border:1px solid var(--warm-mid);" />
            <p style="font-size:12px;color:var(--green-text, #15803d);margin-top:6px;">✅ Bottle photo captured</p>
          </div>
        </div>

        <button id="check-btn" class="btn-primary" style="width:100%;padding:14px;font-size:1rem;opacity:0.4;pointer-events:none;" disabled>
          Check prescription →
        </button>

      </div>`;
  }

  // ── Wire up file inputs ──
  let labelData = null, bottleData = null;
  let labelType = 'image/jpeg', bottleType = 'image/jpeg';

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        // Resize to max 1200px on longest side
        const MAX = 1200;
        let w = img.width, h = img.height;
        if (w > MAX || h > MAX) {
          if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
          else       { w = Math.round(w * MAX / h); h = MAX; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        // Compress to JPEG at 80% quality
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        URL.revokeObjectURL(url);
        resolve(dataUrl.split(',')[1]);
      };
      img.onerror = reject;
      img.src = url;
    });
  }

  function updateCheckBtn() {
    const btn = document.getElementById('check-btn');
    if (btn && labelData && bottleData) {
      btn.disabled = false;
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    }
  }

  document.getElementById('label-input').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    labelType = 'image/jpeg';
    labelData = await toBase64(file);
    const preview = document.getElementById('label-preview');
    document.getElementById('label-img').src = URL.createObjectURL(file);
    preview.style.display = 'block';
    document.getElementById('label-zone').style.borderColor = '#22c55e';
    updateCheckBtn();
  });

  document.getElementById('bottle-input').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    bottleType = 'image/jpeg';
    bottleData = await toBase64(file);
    const preview = document.getElementById('bottle-preview');
    document.getElementById('bottle-img').src = URL.createObjectURL(file);
    preview.style.display = 'block';
    document.getElementById('bottle-zone').style.borderColor = '#22c55e';
    updateCheckBtn();
  });

  document.getElementById('check-btn').addEventListener('click', async () => {
    const btn = document.getElementById('check-btn');
    btn.textContent = 'Checking… ⏳';
    btn.disabled = true;

    try {
      const res = await fetch('/.netlify/functions/rx-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          labelImage: labelData,
          bottleImage: bottleData,
          labelMediaType: labelType,
          bottleMediaType: bottleType
        })
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Server error ${res.status}: ${errText.slice(0, 200)}`);
      }
      const result = await res.json();
      await showResult(result, profile);

    } catch (err) {
      renderPage(`
        <div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:var(--radius-lg);padding:1.5rem;text-align:center;">
          <p style="color:#b91c1c;font-weight:600;">Something went wrong.</p>
          <p style="color:#b91c1c;font-size:13px;margin-top:0.5rem;">${err.message || 'Unknown error'}</p>
          <button class="btn-ghost" id="retry-btn" style="margin-top:1rem;">← Try again</button>
        </div>`);
      setupHamburger();
      document.getElementById('retry-btn').addEventListener('click', () => renderRxCheck(container, navigate));
    }
  });

  async function showResult(result, profile) {
    const isMatch = result.match === true && !result.unclear;
    const isUnclear = result.unclear === true;

    // Log to Supabase regardless of outcome
    try {
      const sb = await getSupabase();
      await sb.from('rx_checks').insert({
        user_id:       profile.id,
        staff_name:    profile.full_name,
        drug_name:     result.label_drug || '',
        concentration: result.label_concentration || '',
        result:        isUnclear ? 'unclear' : isMatch ? 'match' : 'mismatch',
        ai_notes:      result.notes || '',
        patient_name:  result.patient_name || null,
        rx_number:     result.rx_number || null
      });
    } catch (e) {
      console.error('Failed to log rx check:', e);
    }

    if (isMatch) {
      renderPage(`
        <div style="background:#f0fdf4;border:2px solid #22c55e;border-radius:var(--radius-lg);padding:2rem;text-align:center;">
          <div style="font-size:3rem;margin-bottom:0.75rem;">✅</div>
          <h3 style="color:#15803d;font-size:1.3rem;margin-bottom:0.5rem;">Prescription confirmed</h3>
          <p style="color:#166534;margin-bottom:1.5rem;">The label and bottle match. This medication is safe to dispense.</p>
          <div style="background:white;border:1px solid #bbf7d0;border-radius:var(--radius);padding:1rem;text-align:left;margin-bottom:1.5rem;">
            <div style="font-size:13px;color:var(--ink-mid);display:grid;gap:6px;">
              ${result.patient_name ? `<div><strong>Pet:</strong> ${result.patient_name}</div>` : ''}
              ${result.rx_number ? `<div><strong>Rx #:</strong> ${result.rx_number}</div>` : ''}
              <div><strong>Drug:</strong> ${result.label_drug || '—'}</div>
              <div><strong>Concentration:</strong> ${result.label_concentration || '—'}</div>
              <div style="font-size:12px;color:#15803d;margin-top:4px;">${result.notes || ''}</div>
            </div>
          </div>
          <button class="btn-primary" id="new-check-btn">Check another prescription</button>
        </div>`);
      setupHamburger();
      document.getElementById('new-check-btn').addEventListener('click', () => renderRxCheck(container, navigate));

    } else if (isUnclear) {
      renderPage(`
        <div style="background:#fefce8;border:2px solid #fde047;border-radius:var(--radius-lg);padding:2rem;text-align:center;">
          <div style="font-size:3rem;margin-bottom:0.75rem;">⚠️</div>
          <h3 style="color:#a16207;font-size:1.3rem;margin-bottom:0.5rem;">Images unclear</h3>
          <p style="color:#92400e;margin-bottom:1.5rem;">${result.notes}</p>
          <button class="btn-primary" id="retry-btn">← Try again with clearer photos</button>
        </div>`);
      setupHamburger();
      document.getElementById('retry-btn').addEventListener('click', () => renderRxCheck(container, navigate));

    } else {
      // MISMATCH — require confirmation
      renderPage(`
        <div style="background:#fef2f2;border:2px solid #ef4444;border-radius:var(--radius-lg);padding:2rem;">
          <div style="text-align:center;margin-bottom:1.5rem;">
            <div style="font-size:3rem;margin-bottom:0.75rem;">🚨</div>
            <h3 style="color:#b91c1c;font-size:1.3rem;margin-bottom:0.5rem;">MISMATCH DETECTED</h3>
            <p style="color:#b91c1c;font-weight:600;">Do not dispense this medication until the discrepancy is resolved.</p>
          </div>

          <div style="background:white;border:1.5px solid #fca5a5;border-radius:var(--radius);padding:1rem;margin-bottom:1.5rem;">
            ${(result.patient_name || result.rx_number) ? `<div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #fca5a5;font-size:13px;display:grid;gap:4px;">
              ${result.patient_name ? `<div><strong>Pet:</strong> ${result.patient_name}</div>` : ''}
              ${result.rx_number ? `<div><strong>Rx #:</strong> ${result.rx_number}</div>` : ''}
            </div>` : ''}
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div>
                <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#b91c1c;margin-bottom:6px;">Prescription label</div>
                <div style="font-size:13.5px;"><strong>${result.label_drug || '—'}</strong></div>
                <div style="font-size:13px;color:var(--ink-mid);">${result.label_concentration || '—'}</div>
              </div>
              <div>
                <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#b91c1c;margin-bottom:6px;">Medication bottle</div>
                <div style="font-size:13.5px;"><strong>${result.bottle_drug || '—'}</strong></div>
                <div style="font-size:13px;color:var(--ink-mid);">${result.bottle_concentration || '—'}</div>
              </div>
            </div>
            ${result.notes ? `<div style="margin-top:10px;padding-top:10px;border-top:1px solid #fca5a5;font-size:13px;color:#b91c1c;">${result.notes}</div>` : ''}
          </div>

          <div style="background:#fff1f2;border:1px solid #fca5a5;border-radius:var(--radius);padding:1rem;margin-bottom:1.5rem;">
            <p style="font-size:13.5px;color:#b91c1c;font-weight:600;margin-bottom:0.5rem;">⚠️ Before you can continue:</p>
            <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;">
              <input type="checkbox" id="recheck-confirm" style="margin-top:3px;width:18px;height:18px;flex-shrink:0;" />
              <span style="font-size:13.5px;color:var(--ink);">I have re-checked the prescription and medication manually and I understand this mismatch has been logged.</span>
            </label>
          </div>

          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <button id="dismiss-btn" class="btn-primary" style="background:#b91c1c;border-color:#b91c1c;opacity:0.4;pointer-events:none;" disabled>
              Confirm re-check & continue
            </button>
            <button id="retry-btn" class="btn-ghost">← Re-photograph</button>
          </div>
        </div>`);
      setupHamburger();

      document.getElementById('recheck-confirm').addEventListener('change', (e) => {
        const btn = document.getElementById('dismiss-btn');
        btn.disabled = !e.target.checked;
        btn.style.opacity = e.target.checked ? '1' : '0.4';
        btn.style.pointerEvents = e.target.checked ? 'auto' : 'none';
      });

      document.getElementById('dismiss-btn').addEventListener('click', () => renderRxCheck(container, navigate));
      document.getElementById('retry-btn').addEventListener('click', () => renderRxCheck(container, navigate));
    }
  }
}
