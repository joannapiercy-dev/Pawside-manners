import { getProfile, signOut } from '../lib/supabase.js';
export async function renderHome(container, navigate) {
  const profile = await getProfile();
  const userName = profile?.full_name?.split(' ')[0] || 'there';
  const isAdmin = profile?.role === 'admin';
  let dqhDone = false;
  let streakCount = 0;
  try {
    const dqhState = JSON.parse(localStorage.getItem('pawside_dqh') || '{}');
    const today = new Date().toISOString().slice(0, 10);
    dqhDone = dqhState.lastCompleted === today;
    const streak = JSON.parse(localStorage.getItem('pawside_streak') || '{"count":0}');
    streakCount = streak.count || 0;
  } catch(e) {}

  container.innerHTML = `
    ${nav('/', navigate, userName)}
    <div class="page-content" style="max-width:720px;margin:0 auto;padding-top:1.5rem;">

      <!-- Daily Quick Hit banner -->
      <div id="dqh-banner" style="background:${dqhDone ? 'linear-gradient(135deg,#166534,#15803d)' : 'linear-gradient(135deg,#1e3a5f,#2d5a8e)'};border-radius:var(--radius-lg);padding:1.1rem 1.5rem;margin-bottom:1.5rem;cursor:${dqhDone ? 'default' : 'pointer'};display:flex;align-items:center;gap:14px;">
        <div style="font-size:2rem;">${dqhDone ? '✅' : '⚡'}</div>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:1rem;color:white;">${dqhDone ? "Today's Quick Hit complete!" : '⚡ Daily Quick Hit'}</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.75);">${dqhDone ? 'Come back tomorrow for a new question' : 'One question · takes 30 seconds'}</div>
        </div>
        ${streakCount > 1 ? `<div style="background:rgba(255,255,255,0.15);border-radius:20px;padding:4px 10px;display:flex;align-items:center;gap:5px;"><span style="font-size:1rem;">🔥</span><span style="font-size:13px;font-weight:700;color:white;">${streakCount}</span></div>` : ''}
        ${!dqhDone ? '<div style="color:rgba(255,255,255,0.6);font-size:1.2rem;">→</div>' : ''}
      </div>
    </div>

    <div class="hero">
      <div class="hero-logo-lockup">
        <img src="public/oaklands-logo.jpg" alt="Oaklands Veterinary Hospital logo" />
        <div class="hero-clinic-names">
          <span class="clinic-pill">Oaklands Veterinary Hospital</span>
          <span class="clinic-pill">Royal Bay Veterinary Clinic</span>
        </div>
      </div>
      <h1>Training Hub</h1>
      <p class="hero-sub">Practical training — build your clinical knowledge, sharpen your communication skills, and feel confident handling whatever the day brings.</p>


      <p style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-light);margin-bottom:1rem;">Start training</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;max-width:720px;margin:0 auto 1rem;">
        <button class="nav-card-btn" id="btn-communication">
          <span style="font-size:1.5rem;">💬</span>
          <span style="font-weight:600;">Communication</span>
          <span style="font-size:12px;color:var(--ink-light);">Scenarios, role-play & prompts</span>
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
        <button class="nav-card-btn" id="btn-diets">
          <span style="font-size:1.5rem;">🥣</span>
          <span style="font-weight:600;">Diets</span>
          <span style="font-size:12px;color:var(--ink-light);">Prescription diets</span>
        </button>
        <button class="nav-card-btn" id="btn-appointments">
          <span style="font-size:1.5rem;">📅</span>
          <span style="font-weight:600;">Booking guide</span>
          <span style="font-size:12px;color:var(--ink-light);">Which appointment to book</span>
        </button>
        <button class="nav-card-btn" id="btn-social">
          <span style="font-size:1.5rem;">🦁</span>
          <span style="font-weight:600;">Social Styles</span>
          <span style="font-size:12px;color:var(--ink-light);">Communication styles</span>
        </button>
        <button class="nav-card-btn" id="btn-rx-check" style="background:#fef2f2;border-color:#fca5a5;">
          <span style="font-size:1.5rem;">💊</span>
          <span style="font-weight:600;color:#b91c1c;">Rx double-check</span>
          <span style="font-size:12px;color:#b91c1c;">Verify label vs bottle</span>
        </button>
        <button class="nav-card-btn" id="btn-progress" style="width:100%;background:var(--ink);color:white;border-color:var(--ink);">
          <span style="font-size:1.5rem;">📊</span>
          <span style="font-weight:600;color:white;">View my progress & badges</span>
        </button>
        ${isAdmin ? `
        <button class="nav-card-btn" id="btn-admin-points" style="width:100%;background:#1e3a5f;color:white;border-color:#1e3a5f;margin-top:0.5rem;">
          <span style="font-size:1.5rem;">⭐</span>
          <span style="font-weight:600;color:white;">Admin — Points leaderboard</span>
        </button>
        <button class="nav-card-btn" id="btn-admin-rx-log" style="width:100%;background:#7f1d1d;color:white;border-color:#7f1d1d;margin-top:0.5rem;">
          <span style="font-size:1.5rem;">💊</span>
          <span style="font-weight:600;color:white;">Admin — Rx check log</span>
        </button>` : ''}
      </div>
    </div>

    </div>

    <div class="page-content">
      <hr class="section-divider">
      <p style="text-align:center; font-size:13px; color:var(--ink-light);">Oaklands Veterinary Hospital · Royal Bay Veterinary Clinic · Team Training</p>
    </div>
  `;

  setupHamburger();
  document.getElementById('btn-communication').addEventListener('click', () => navigate('/communication'));
  document.getElementById('btn-terminology').addEventListener('click', () => navigate('/terminology'));
  document.getElementById('btn-triage').addEventListener('click', () => navigate('/triage'));
  document.getElementById('btn-diagnostics').addEventListener('click', () => navigate('/tests'));
  document.getElementById('btn-social').addEventListener('click', () => navigate('/social'));
  if (!dqhDone) document.getElementById('dqh-banner')?.addEventListener('click', () => navigate('/quickhit'));
  document.getElementById('btn-appointments').addEventListener('click', () => navigate('/appointments'));
  document.getElementById('btn-diets').addEventListener('click', () => navigate('/diets'));
  document.getElementById('btn-progress').addEventListener('click', () => navigate('/progress'));
  if (isAdmin) document.getElementById('btn-admin-points')?.addEventListener('click', () => navigate('/admin/points'));
  if (isAdmin) document.getElementById('btn-admin-rx-log')?.addEventListener('click', () => navigate('/admin/rx-log'));
  document.getElementById('btn-rx-check')?.addEventListener('click', () => navigate('/rx-check'));
  document.getElementById('logout-btn').addEventListener('click', async () => {
    await signOut();
    navigate('/login');
  });
}

export function nav(current, navigate, userName = '') {
  return `<nav class="nav">
    <a class="nav-logo" href="#/">
      <img src="public/oaklands-logo.jpg" alt="Oaklands logo" />
      <div class="nav-logo-text">
        <span class="nav-logo-name">Oaklands &amp; Royal Bay</span>
        <span class="nav-logo-sub">Team Training</span>
      </div>
    </a>
    <div class="nav-links nav-desktop">
      <a class="nav-btn ${current === '/' ? 'active' : ''}" href="#/">Home</a>
      <a class="nav-btn ${['/communication','/train','/quickprompts'].includes(current) ? 'active' : ''}" href="#/communication">Communication</a>
      <a class="nav-btn ${current === '/terminology' ? 'active' : ''}" href="#/terminology">Terminology</a>
      <a class="nav-btn ${current === '/triage' ? 'active' : ''}" href="#/triage">Triage</a>
      <a class="nav-btn ${current === '/tests' ? 'active' : ''}" href="#/tests">Diagnostics</a>
      <a class="nav-btn ${current === '/diets' ? 'active' : ''}" href="#/diets">Diets</a>
      <a class="nav-btn ${current === '/appointments' ? 'active' : ''}" href="#/appointments">Booking</a>
      <a class="nav-btn ${current === '/social' ? 'active' : ''}" href="#/social">Social Styles</a>
      <a class="nav-btn ${current === '/progress' ? 'active' : ''}" href="#/progress">Progress</a>
    </div>
    <div class="nav-user nav-desktop" style="display:flex;align-items:center;gap:10px;margin-left:auto;padding-left:1rem;">
      <span style="font-size:13px;color:var(--ink-mid);white-space:nowrap;">👋 <strong>${userName}</strong></span>
      <button id="logout-btn" style="font-size:12px;color:var(--ink-light);background:none;border:1px solid var(--warm-dark);border-radius:20px;padding:4px 12px;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;">Sign out</button>
    </div>
    <button class="nav-hamburger" id="nav-hamburger-btn" aria-label="Open menu">☰</button>
    <div class="nav-mobile-menu" id="nav-mobile-menu" style="display:none;">
      <a class="nav-mobile-item ${current === '/' ? 'active' : ''}" href="#/">🏠 Home</a>
      <a class="nav-mobile-item ${['/communication','/train','/quickprompts'].includes(current) ? 'active' : ''}" href="#/communication">💬 Communication</a>
      <a class="nav-mobile-item ${current === '/terminology' ? 'active' : ''}" href="#/terminology">🩺 Terminology</a>
      <a class="nav-mobile-item ${current === '/triage' ? 'active' : ''}" href="#/triage">🚨 Triage</a>
      <a class="nav-mobile-item ${current === '/tests' ? 'active' : ''}" href="#/tests">🔬 Diagnostics</a>
      <a class="nav-mobile-item ${current === '/quickhit' ? 'active' : ''}" href="#/quickhit">⚡ Daily Quick Hit</a>
      <a class="nav-mobile-item ${current === '/diets' ? 'active' : ''}" href="#/diets">🥣 Diets</a>
      <a class="nav-mobile-item ${current === '/appointments' ? 'active' : ''}" href="#/appointments">📅 Booking guide</a>
      <a class="nav-mobile-item ${current === '/social' ? 'active' : ''}" href="#/social">🦁 Social Styles</a>
      <a class="nav-mobile-item ${current === '/progress' ? 'active' : ''}" href="#/progress">📊 Progress</a>
    </div>
  </nav>`;
}

export function setupHamburger() {
  const btn = document.getElementById('nav-hamburger-btn');
  const menu = document.getElementById('nav-mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const isOpen = menu.style.display === 'block';
    menu.style.display = isOpen ? 'none' : 'block';
    btn.textContent = isOpen ? '☰' : '✕';
  });
  document.addEventListener('click', function() {
    menu.style.display = 'none';
    btn.textContent = '☰';
  });
  menu.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.style.display = 'none';
    btn.textContent = '☰';
  });
}
