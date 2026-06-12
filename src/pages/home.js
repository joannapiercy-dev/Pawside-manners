export function renderHome(container, navigate) {
  container.innerHTML = `
    ${nav('/', navigate)}
    <div class="hero">
      <div class="hero-logo-lockup">
        <img src="public/oaklands-logo.jpg" alt="Oaklands Veterinary Hospital logo" />
        <div class="hero-clinic-names">
          <span class="clinic-pill">Oaklands Veterinary Hospital</span>
          <span class="clinic-pill">Royal Bay Veterinary Clinic</span>
        </div>
      </div>
      <h1>Speak with confidence.<br><em>Connect with clients.</em></h1>
      <p class="hero-sub">Practical training for every member of your clinic team — build the skills, knowledge, and confidence to handle any situation.</p>

      <p style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-light);margin-bottom:1rem;">Start training</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;max-width:720px;margin:0 auto 1rem;">
        <button class="nav-card-btn" id="btn-communication">
          <span style="font-size:1.5rem;">💬</span>
          <span style="font-weight:600;">Communication</span>
          <span style="font-size:12px;color:var(--ink-light);">Scenarios & role-play</span>
        </button>
        <button class="nav-card-btn" id="btn-terminology">
          <span style="font-size:1.5rem;">🩺</span>
          <span style="font-weight:600;">Terminology</span>
          <span style="font-size:12px;color:var(--ink-light);">Jargon & medications</span>
        </button>
        <button class="nav-card-btn" id="btn-triage">
          <span style="font-size:1.5rem;">🚨</span>
          <span style="font-weight:600;">Triage</span>
          <span style="font-size:12px;color:var(--ink-light);">Decision trees</span>
        </button>
        <button class="nav-card-btn" id="btn-diagnostics">
          <span style="font-size:1.5rem;">🔬</span>
          <span style="font-weight:600;">Diagnostics</span>
          <span style="font-size:12px;color:var(--ink-light);">Tests & procedures</span>
        </button>
      </div>
      <div style="max-width:720px;margin:0 auto;">
        <button class="nav-card-btn" id="btn-progress" style="width:100%;background:var(--ink);color:white;border-color:var(--ink);">
          <span style="font-size:1.5rem;">📊</span>
          <span style="font-weight:600;color:white;">View my progress</span>
        </button>
      </div>
    </div>

    <div class="page-content">
      <hr class="section-divider">
      <p style="text-align:center; font-size:13px; color:var(--ink-light);">Oaklands Veterinary Hospital · Royal Bay Veterinary Clinic · Team Training</p>
    </div>
  `;

  document.getElementById('btn-communication').addEventListener('click', () => navigate('/train'));
  document.getElementById('btn-terminology').addEventListener('click', () => navigate('/terminology'));
  document.getElementById('btn-triage').addEventListener('click', () => navigate('/triage'));
  document.getElementById('btn-diagnostics').addEventListener('click', () => navigate('/tests'));
  document.getElementById('btn-progress').addEventListener('click', () => navigate('/progress'));
}

export function nav(current, navigate) {
  return `<nav class="nav">
    <a class="nav-logo" href="#/">
      <img src="public/oaklands-logo.jpg" alt="Oaklands logo" />
      <div class="nav-logo-text">
        <span class="nav-logo-name">Oaklands &amp; Royal Bay</span>
        <span class="nav-logo-sub">Team Training</span>
      </div>
    </a>
    <div class="nav-links">
      <a class="nav-btn ${current === '/' ? 'active' : ''}" href="#/">Home</a>
      <a class="nav-btn ${current === '/train' ? 'active' : ''}" href="#/train">Communication</a>
      <a class="nav-btn ${current === '/terminology' ? 'active' : ''}" href="#/terminology">Terminology</a>
      <a class="nav-btn ${current === '/triage' ? 'active' : ''}" href="#/triage">Triage</a>
      <a class="nav-btn ${current === '/tests' ? 'active' : ''}" href="#/tests">Diagnostics</a>
      <a class="nav-btn ${current === '/progress' ? 'active' : ''}" href="#/progress">Progress</a>
    </div>
  </nav>`;
}
