import { getSupabase } from '../lib/supabase.js';

export async function renderLogin(container, navigate) {
  container.innerHTML = `
    <div style="min-height:100vh;background:var(--warm);display:flex;align-items:center;justify-content:center;padding:1.5rem;">
      <div style="background:white;border-radius:var(--radius-lg);box-shadow:var(--shadow);padding:2.5rem 2rem;width:100%;max-width:400px;">

        <div style="text-align:center;margin-bottom:2rem;">
          <div style="font-size:2.5rem;margin-bottom:0.5rem;">🐾</div>
          <h1 style="font-size:1.4rem;font-family:'DM Sans',sans-serif;font-weight:700;color:var(--ink);margin-bottom:0.25rem;">Oaklands & Royal Bay</h1>
          <p style="font-size:14px;color:var(--ink-light);">Team Training — sign in to continue</p>
        </div>

        <div id="login-error" style="display:none;background:#fef2f2;border:1.5px solid #fca5a5;border-radius:var(--radius);padding:10px 14px;font-size:13.5px;color:#b91c1c;margin-bottom:1.25rem;"></div>

        <div style="display:flex;flex-direction:column;gap:1rem;">
          <div>
            <label style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);display:block;margin-bottom:5px;">Email</label>
            <input id="login-email" type="email" placeholder="you@example.com" style="width:100%;box-sizing:border-box;" />
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);display:block;margin-bottom:5px;">Password</label>
            <input id="login-password" type="password" placeholder="••••••••" style="width:100%;box-sizing:border-box;" />
          </div>
          <button id="login-btn" class="btn-primary" style="width:100%;margin-top:0.5rem;padding:12px;">Sign in</button>
        </div>

        <p style="text-align:center;margin-top:1.5rem;font-size:13.5px;color:var(--ink-mid);">
          New to the app? <a href="#/signup" style="color:var(--ink);font-weight:600;text-decoration:underline;">Create an account</a>
        </p>

      </div>
    </div>
  `;

  const sb         = await getSupabase();
  const emailEl    = document.getElementById('login-email');
  const passwordEl = document.getElementById('login-password');
  const btnEl      = document.getElementById('login-btn');
  const errorEl    = document.getElementById('login-error');

  function showError(msg) {
    errorEl.textContent = msg;
    errorEl.style.display = 'block';
  }

  async function doLogin() {
    const email    = emailEl.value.trim();
    const password = passwordEl.value;
    if (!email || !password) { showError('Please enter your email and password.'); return; }

    btnEl.textContent = 'Signing in…';
    btnEl.disabled = true;
    errorEl.style.display = 'none';

    const { error } = await sb.auth.signInWithPassword({ email, password });

    if (error) {
      showError('Incorrect email or password. Please try again.');
      btnEl.textContent = 'Sign in';
      btnEl.disabled = false;
    } else {
      navigate('/');
    }
  }

  btnEl.addEventListener('click', doLogin);
  passwordEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') doLogin(); });
}
