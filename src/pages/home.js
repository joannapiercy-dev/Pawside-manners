export function renderHome(container, navigate) {
  container.innerHTML = `
    ${nav('/', navigate)}
    <div class="hero">
      <div class="hero-logo-lockup">
        <img src="public/oaklands-logo.jpg" alt="Oaklands Veterinary Hospital logo" />
        <div class="hero-clinic-names">
          <span class="clinic-pill">Oaklands Veterinary Hospital</span>
          <span class="clinic-pill">Royal Bay Veterinary Hospital</span>
        </div>
      </div>
      <h1>Say the right thing<br><em>every time</em></h1>
      <p class="hero-sub">Scenario-based communication training for receptionists and new clinic staff — covering the conversations that matter most.</p>
      <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
        <button class="btn-primary" id="start-btn">Start training</button>
        <button class="btn-secondary" id="progress-btn">View my progress</button>
      </div>
    </div>

    <div class="page-content">
      <hr class="section-divider">
      <p class="section-label">What you'll practise</p>
      <div class="card-grid">
        ${featureCard('💙', 'Delivering bad news', 'Terminal diagnoses, euthanasia bookings, surgical complications — handled with genuine compassion.')}
        ${featureCard('🛡️', 'Difficult clients', 'De-escalation, complaint handling, and setting respectful boundaries without losing your cool.')}
        ${featureCard('💳', 'Costs & payment', 'Explaining invoices, discussing financial hardship, and quoting for treatment clearly and kindly.')}
        ${featureCard('📞', 'Follow-up calls', 'Welfare checks, vaccination reminders, and post-visit outreach that clients actually appreciate.')}
        ${featureCard('📅', 'Scheduling & triage', 'Booking, urgency triage, and supporting anxious first-time owners confidently.')}
      </div>

      <hr class="section-divider">
      <p class="section-label">Three ways to learn</p>
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:1.5rem; text-align:center;">
        ${howItem('📖', 'Read & study', 'Work through the scenario and model answer at your own pace.')}
        ${howItem('✅', 'Quiz', 'Test yourself with multiple-choice questions on each scenario.')}
        ${howItem('🎭', 'AI role-play', 'Have a live conversation with an AI client and get instant coaching feedback.')}
      </div>

      <hr class="section-divider">
      <p style="text-align:center; font-size:13px; color:var(--ink-light);">Oaklands Veterinary Hospital · Royal Bay Veterinary Hospital · Staff Training Portal</p>
    </div>
  `;

  document.getElementById('start-btn').addEventListener('click', () => navigate('/train'));
  document.getElementById('progress-btn').addEventListener('click', () => navigate('/progress'));
}

function featureCard(icon, title, desc) {
  return `
    <div class="module-card" style="cursor:default;">
      <div class="module-icon">${icon}</div>
      <h3>${title}</h3>
      <p>${desc}</p>
    </div>`;
}

function howItem(icon, title, desc) {
  return `<div style="background:white;border-radius:var(--radius-lg);padding:1.5rem;border:1px solid var(--warm-mid);">
    <div style="font-size:1.8rem;margin-bottom:0.75rem;">${icon}</div>
    <div style="font-weight:600;margin-bottom:6px;">${title}</div>
    <p style="font-size:13.5px;color:var(--ink-light);line-height:1.5;">${desc}</p>
  </div>`;
}

export function nav(current, navigate) {
  return `<nav class="nav">
    <a class="nav-logo" href="#/">
      <img src="public/oaklands-logo.jpg" alt="Oaklands logo" />
      <div class="nav-logo-text">
        <span class="nav-logo-name">Oaklands &amp; Royal Bay</span>
        <span class="nav-logo-sub">Staff Training</span>
      </div>
    </a>
    <div class="nav-links">
      <button class="nav-btn ${current === '/' ? 'active' : ''}" id="nav-home">Home</button>
      <button class="nav-btn ${current === '/train' ? 'active' : ''}" id="nav-train">Training</button>
      <button class="nav-btn ${current === '/progress' ? 'active' : ''}" id="nav-progress">Progress</button>
    </div>
  </nav>
  <script>
    document.getElementById('nav-home')?.addEventListener('click', () => location.hash = '/');
    document.getElementById('nav-train')?.addEventListener('click', () => location.hash = '/train');
    document.getElementById('nav-progress')?.addEventListener('click', () => location.hash = '/progress');
  <\/script>`;
}
