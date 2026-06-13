// ── Daily Quick Hit ──────────────────────────────────────────────
const DQH_KEY = 'pawside_dqh';

export function getTodayDateStr() {
  return new Date().toISOString().slice(0, 10);
}

export function getDqhState() {
  try { return JSON.parse(localStorage.getItem(DQH_KEY) || '{}'); }
  catch { return {}; }
}

export function saveDqhState(state) {
  localStorage.setItem(DQH_KEY, JSON.stringify(state));
}

export function hasCompletedDqhToday() {
  const s = getDqhState();
  return s.lastCompleted === getTodayDateStr();
}

// ── Streaks ──────────────────────────────────────────────────────
const STREAK_KEY = 'pawside_streak';

export function getStreak() {
  try { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
  catch { return { count: 0, lastDate: '' }; }
}

export function updateStreak() {
  const today = getTodayDateStr();
  const s = getStreak();
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (s.lastDate === today) return s; // already updated today
  if (s.lastDate === yesterday) {
    s.count++;
  } else {
    s.count = 1; // reset streak
  }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s;
}

// ── Badges ───────────────────────────────────────────────────────
const BADGES_KEY = 'pawside_badges';

export const BADGE_DEFS = [
  // Quick Hit
  { id: 'first-dqh',       icon: '⚡', name: 'First Quick Hit',    desc: 'Completed your first Daily Quick Hit',            check: (stats) => stats.dqhCount >= 1 },
  { id: 'dqh-streak-5',    icon: '🔥', name: 'On a Roll',          desc: 'Completed 5 Daily Quick Hits',                    check: (stats) => stats.dqhCount >= 5 },
  { id: 'dqh-streak-20',   icon: '🌟', name: 'Quick Hit Devotee',  desc: 'Completed 20 Daily Quick Hits',                   check: (stats) => stats.dqhCount >= 20 },
  // Quizzes
  { id: 'first-quiz',      icon: '🎯', name: 'Quiz Starter',       desc: 'Passed your first quiz with 80% or higher',       check: (stats) => stats.quizPasses >= 1 },
  { id: 'quiz-5',          icon: '🏅', name: 'Quiz Regular',       desc: 'Passed 5 quizzes with 80% or higher',             check: (stats) => stats.quizPasses >= 5 },
  { id: 'perfect-quiz',    icon: '💯', name: 'Perfect Score',      desc: 'Got 100% on any quiz',                            check: (stats) => stats.perfectQuizzes >= 1 },
  // Flashcards
  { id: 'first-deck',      icon: '🃏', name: 'Card Sharp',         desc: 'Completed a full flashcard deck',                 check: (stats) => stats.decksCompleted >= 1 },
  { id: 'all-decks',       icon: '📚', name: 'Know It All',        desc: 'Completed all four terminology decks',            check: (stats) => stats.decksCompleted >= 4 },
  // Triage
  { id: 'first-triage',    icon: '🚨', name: 'Triage Trainee',     desc: 'Completed a triage quiz',                         check: (stats) => stats.triageQuizzes >= 1 },
  { id: 'all-triage',      icon: '🏥', name: 'Triage Pro',         desc: 'Completed quizzes in all triage categories',      check: (stats) => stats.triageQuizzes >= 10 },
  // Communication
  { id: 'first-roleplay',  icon: '🎭', name: 'Scene Setter',       desc: 'Completed your first AI role-play',               check: (stats) => stats.roleplays >= 1 },
  { id: 'roleplay-5',      icon: '🌈', name: 'Conversation Pro',   desc: 'Completed 5 AI role-plays',                      check: (stats) => stats.roleplays >= 5 },
  // Streaks
  { id: 'streak-3',        icon: '🔥', name: '3-Day Streak',       desc: 'Used the app 3 days in a row',                   check: (stats) => stats.streak >= 3 },
  { id: 'streak-7',        icon: '🌶️', name: 'Week Warrior',      desc: 'Used the app 7 days in a row',                   check: (stats) => stats.streak >= 7 },
  // Social styles
  { id: 'social-quiz',     icon: '🦁', name: 'Know Thyself',       desc: 'Completed the Social Styles quiz',                check: (stats) => stats.socialQuiz >= 1 },
];

export function getEarnedBadges() {
  try { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
  catch { return []; }
}

export function getBadgeStats() {
  try { return JSON.parse(localStorage.getItem('pawside_badge_stats') || '{}'); }
  catch { return {}; }
}

export function updateBadgeStat(key, increment = 1) {
  const stats = getBadgeStats();
  stats[key] = (stats[key] || 0) + increment;
  localStorage.setItem('pawside_badge_stats', JSON.stringify(stats));
  return checkNewBadges(stats);
}

export function setBadgeStat(key, value) {
  const stats = getBadgeStats();
  stats[key] = value;
  localStorage.setItem('pawside_badge_stats', JSON.stringify(stats));
  return checkNewBadges(stats);
}

function checkNewBadges(stats) {
  const earned = getEarnedBadges();
  const newlyEarned = [];
  for (const badge of BADGE_DEFS) {
    if (!earned.includes(badge.id) && badge.check(stats)) {
      earned.push(badge.id);
      newlyEarned.push(badge);
    }
  }
  if (newlyEarned.length > 0) {
    localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
  }
  return newlyEarned;
}

// ── Confetti ─────────────────────────────────────────────────────
export function showConfetti(duration = 2500) {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: -10 - Math.random() * 200,
    r: 5 + Math.random() * 6,
    d: 2 + Math.random() * 3,
    color: ['#c8102e','#003087','#2d7a2d','#f59e0b','#7c3aed','#0ea5e9','#ec4899'][Math.floor(Math.random() * 7)],
    tilt: Math.random() * 10 - 5,
    tiltAngle: 0,
    tiltSpeed: Math.random() * 0.1 + 0.05,
    shape: Math.random() > 0.5 ? 'rect' : 'circle',
  }));

  let start = null;
  function draw(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const fade = elapsed > duration - 800 ? 1 - (elapsed - (duration - 800)) / 800 : 1;
    ctx.globalAlpha = Math.max(0, fade);
    pieces.forEach(p => {
      p.y += p.d;
      p.tiltAngle += p.tiltSpeed;
      p.tilt = Math.sin(p.tiltAngle) * 12;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      if (p.shape === 'circle') {
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      } else {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.tiltAngle);
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
        ctx.restore();
        ctx.beginPath(); // reset path
      }
      ctx.fill();
      if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }
    });
    if (elapsed < duration) requestAnimationFrame(draw);
    else canvas.remove();
  }
  requestAnimationFrame(draw);
}

// ── Badge toast notification ──────────────────────────────────────
export function showBadgeToast(badge) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(80px);
    background:white;border:2px solid #f59e0b;border-radius:16px;
    padding:12px 20px;display:flex;align-items:center;gap:12px;
    box-shadow:0 8px 30px rgba(0,0,0,0.15);z-index:10000;
    transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
    max-width:320px;width:calc(100% - 48px);
  `;
  toast.innerHTML = `
    <span style="font-size:1.8rem;">${badge.icon}</span>
    <div>
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#b45309;">Badge unlocked!</div>
      <div style="font-size:14px;font-weight:700;color:#1a1a1a;">${badge.name}</div>
      <div style="font-size:12px;color:#6b7280;">${badge.desc}</div>
    </div>
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(80px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

export function awardBadgesAndCelebrate(newBadges, perfect = false) {
  if (perfect) showConfetti();
  newBadges.forEach((badge, i) => {
    setTimeout(() => showBadgeToast(badge), perfect ? 800 + i * 500 : i * 600);
  });
}
