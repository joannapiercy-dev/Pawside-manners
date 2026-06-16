import { getSupabase } from '../lib/supabase.js';

export async function renderSignup(container, navigate) {
  container.innerHTML = `
    <div style="min-height:100vh;background:var(--warm);display:flex;align-items:center;justify-content:center;padding:1.5rem;">
      <div style="background:white;border-radius:var(--radius-lg);box-shadow:var(--shadow);padding:2.5rem 2rem;width:100%;max-width:400px;">

        <div style="text-align:center;margin-bottom:2rem;">
          <div style="font-size:2.5rem;margin-bottom:0.5rem;">🐾</div>
          <h1 style="font-size:1.4rem;font-family:'DM Sans',sans-serif;font-weight:700;color:var(--ink);margin-bottom:0.25rem;">Create your account</h1>
          <p style="font-size:14px;color:var(--ink-light);">Oaklands & Royal Bay Team Training</p>
        </div>

        <div id="signup-error" style="display:none;background:#fef2f2;border:1.5px solid #fca5a5;border-radius:var(--radius);padding:10px 14px;font-size:13.5px;color:#b91c1c;margin-bottom:1.25rem;"></div>
        <div id="signup-success" style="display:none;background:#f0fdf4;border:1.5px solid #86efac;border-radius:var(--radius);padding:10px 14px;font-size:13.5px;color:#14532d;margin-bottom:1.25rem;"></div>

        <div style="display:flex;flex-direction:column;gap:1rem;">
          <div>
            <label style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);display:block;margin-bottom:5px;">Full name</label>
            <input id="signup-name" type="text" placeholder="Jane Smith" style="width:100%;box-sizing:border-box;" />
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);display:block;margin-bottom:5px;">Clinic</label>
            <select id="signup-clinic" style="width:100%;box-sizing:border-box;padding:10px 14px;font-size:14px;border:1.5px solid var(--warm-dark);border-radius:var(--radius);font-family:'DM Sans',sans-serif;color:var(--ink);background:white;">
              <option value="">Select your clinic…</option>
              <option value="oaklands">Oaklands Veterinary Hospital</option>
              <option value="royalbay">Royal Bay Veterinary Clinic</option>
            </select>
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);display:block;margin-bottom:5px;">Email</label>
            <input id="signup-email" type="email" placeholder="you@example.com" style="width:100%;box-sizing:border-box;" />
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);display:block;margin-bottom:5px;">Password</label>
            <input id="signup-password" type="password" placeholder="At least 8 characters" style="width:100%;box-sizing:border-box;" />
          </div>
          <button id="signup-btn" class="btn-primary" style="width:100%;margin-top:0.5rem;padding:12px;">Create account</button>
        </div>

        <p style="text-align:center;margin-top:1.5rem;font-size:13.5px;color:var(--ink-mid);">
          Already have an account? <a href="#/login" style="color:var(--ink);font-weight:600;text-decoration:underline;">Sign in</a>
        </p>

      </div>
    </div>
  `;

  const sb         = await getSupabase();
  const nameEl     = document.getElementById('signup-name');
  const clinicEl   = document.getElementById('signup-clinic');
  const emailEl    = document.getElementById('signup-email');
  const passwordEl = document.getElementById('signup-password');
  const btnEl      = document.getElementById('signup-btn');
  const errorEl    = document.getElementById('signup-error');
  const successEl  = document.getElementById('signup-success');

  function showError(msg) {
    errorEl.textContent = msg;
    errorEl.style.display = 'block';
    successEl.style.display = 'none';
  }

  async function doSignup() {
    const name     = nameEl.value.trim();
    const clinic   = clinicEl.value;
    const email    = emailEl.value.trim();
    const password = passwordEl.value;

    if (!name)                { showError('Please enter your full name.'); return; }
    if (!clinic)              { showError('Please select your clinic.'); return; }
    if (!email)               { showError('Please enter your email address.'); return; }
    if (password.length < 8)  { showError('Password must be at least 8 characters.'); return; }

    btnEl.textContent = 'Creating account…';
    btnEl.disabled = true;
    errorEl.style.display = 'none';

    const { data, error } = await sb.auth.signUp({ email, password });

    if (error) {
      showError(error.message);
      btnEl.textContent = 'Create account';
      btnEl.disabled = false;
      return;
    }

    if (data.user) {
      const { error: profileError } = await sb.from('profiles').insert({
        id:        data.user.id,
        full_name: name,
        clinic:    clinic,
        role:      'staff'
      });
      if (profileError) {
        showError('Account created but profile could not be saved. Please contact your admin.');
        btnEl.textContent = 'Create account';
        btnEl.disabled = false;
        return;
      }
    }

    successEl.textContent = '✅ Account created! Check your email to confirm your address, then sign in.';
    successEl.style.display = 'block';
    btnEl.textContent = 'Account created';
    setTimeout(() => navigate('/login'), 4000);
  }

  btnEl.addEventListener('click', doSignup);
}
