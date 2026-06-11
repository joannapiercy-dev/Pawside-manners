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
      <p class="section-label">Medical knowledge</p>
      <div class="card-grid">
        ${featureCard('🩺', 'Medical jargon', 'Learn what clinical terms mean and how to explain them to clients in plain English.')}
        ${featureCard('💊', 'Common medications', 'Brand names, generics, and what each medication is used for — so you can answer client questions confidently.')}
      </div>

      <hr class="section-divider">
      <p class="section-label">Triage</p>
      <div class="card-grid">
        ${featureCard('🚨', 'Triage decision trees', 'Interactive symptom-by-symptom decision trees to help you ask the right questions and reach the right outcome — emergency, same-day, routine, or monitor at home.')}
      </div>

      <hr class="section-divider">
      <p class="section-label">Tests & procedures</p>
      <div class="card-grid">
        ${featureCard('🔬', 'Tests & procedures', 'What each test is for, fasting requirements, sedation, drop-off expectations, and what to tell clients when booking — imaging, blood, cardiac, and urine tests.')}
      </div>

      <hr class="section-divider">
      <p class="section-label">Three ways to learn</p>
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:1.5rem; text-align:center;">
        ${howItem('📖', 'Read & study', 'Work through the scenario and model answer at your own pace.')}
        ${howItem('✅', 'Quiz', 'Test yourself with multiple-choice questions on each scenario.')}
        ${howItem('🎭', 'AI role-play', 'Have a live conversation with an AI client and get instant coaching feedback.')}
      </div>

      <hr class="section-divider">
      <p style="text-align:center; font-size:13px; color:var(--ink-light);">Oaklands Veterinary Hospital · Royal Bay Veterinary Clinic · Team Training</p>
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
        <span class="nav-logo-sub">Team Training</span>
      </div>
    </a>
    <div class="nav-links">
      <a class="nav-btn ${current === '/' ? 'active' : ''}" href="#/">Home</a>
      <a class="nav-btn ${current === '/train' ? 'active' : ''}" href="#/train">Communication</a>
      <a class="nav-btn ${current === '/terminology' ? 'active' : ''}" href="#/terminology">Terminology</a>
      <a class="nav-btn ${current === '/triage' ? 'active' : ''}" href="#/triage">Triage</a>
      <a class="nav-btn ${current === '/tests' ? 'active' : ''}" href="#/tests">Tests</a>
      <a class="nav-btn ${current === '/progress' ? 'active' : ''}" href="#/progress">Progress</a>
    </div>
  </nav>`;
}
