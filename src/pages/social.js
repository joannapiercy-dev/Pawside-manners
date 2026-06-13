import { nav, setupHamburger } from './home.js';
import { updateBadgeStat, awardBadgesAndCelebrate, showConfetti } from '../lib/gamification.js';

const STYLES = {
  analytical: {
    id: 'analytical',
    name: 'Analytical',
    animal: 'Owl',
    emoji: '🦉',
    tagline: 'Task focus · Deliberate pace',
    color: '#dbeafe',
    textColor: '#1e40af',
    accent: '#1e40af',
    traits: ['Systematic', 'Logical', 'Precise', 'Patient', 'Organised'],
    favoriteWord: 'Why?',
    summary: 'Analyticals are detail-oriented and data-driven. They take pride in accuracy and are willing to spend extra time to get things right. They tend to be reserved and prefer facts over gut feelings.',
    strengths: ['Fact-finding and research', 'Logical problem solving', 'Attention to detail', 'Patience with complex tasks'],
    cautions: ['Can appear indecisive or overly critical', 'May struggle to accept solutions that deviate from the data', 'Can come across as emotionally distant', 'May be dismissive of intuitive thinking'],
    expression: 'Reserved, few facial expressions, avoid showing feelings especially under stress.',
    bestApproach: 'Give them time to gather information. Be formal, factual, and organised. Present pros and cons. Follow up in writing. Emphasise rational and objective aspects.',
  },
  amiable: {
    id: 'amiable',
    name: 'Amiable',
    animal: 'Retriever',
    emoji: '🐕',
    tagline: 'People focus · Deliberate pace',
    color: '#dcfce7',
    textColor: '#166534',
    accent: '#166534',
    traits: ['Cooperative', 'Friendly', 'Supportive', 'Patient', 'Collaborative'],
    favoriteWord: 'We.',
    summary: 'Amiables are relationship-oriented and highly supportive. They excel at building consensus and bringing people together. They speak slowly and softly and are great listeners.',
    strengths: ['Building and maintaining relationships', 'Achieving consensus', 'Active listening', 'Facilitating groups'],
    cautions: ['May conform too easily to maintain peace', 'Avoids confrontation and conflict', 'Can be slow to make decisions', 'Struggles to assert themselves or say no'],
    expression: 'Friendly, warm eye contact, non-aggressive gestures, soft and slow-paced speech.',
    bestApproach: 'Speak at a moderate, soft pace. Ask for their opinions and encourage them to voice concerns. Avoid harsh or pushy language. Coach on how to say no when needed.',
  },
  driver: {
    id: 'driver',
    name: 'Driver',
    animal: 'Lion',
    emoji: '🦁',
    tagline: 'Task focus · Quick pace',
    color: '#fef2f2',
    textColor: '#991b1b',
    accent: '#991b1b',
    traits: ['Decisive', 'Independent', 'Results-oriented', 'Direct', 'Efficient'],
    favoriteWord: 'When?',
    summary: 'Drivers are motivated by goals and results. They are quick decision-makers who prefer direct, bottom-line communication. They are confident, independent, and highly effective under pressure.',
    strengths: ['Quick decisions', 'Time management', 'Taking charge', 'Working independently', 'High achievement'],
    cautions: ['May overlook how their actions affect others', 'Can create tension with their hard-driving approach', 'Under stress may skip details and make mistakes', 'Tends to tell rather than listen'],
    expression: 'Direct eye contact, quick purposeful movement, forceful and direct speech, minimal small talk.',
    bestApproach: 'Be direct, clear, and specific. Skip the small talk. Give them options so they can make their own decisions. Focus on results, not process. Respect their time.',
  },
  expressive: {
    id: 'expressive',
    name: 'Expressive',
    animal: 'Dolphin',
    emoji: '🐬',
    tagline: 'People focus · Quick pace',
    color: '#fdf4ff',
    textColor: '#7e22ce',
    accent: '#7e22ce',
    traits: ['Enthusiastic', 'Creative', 'Persuasive', 'Outgoing', 'Visionary'],
    favoriteWord: 'Who?',
    summary: 'Expressives are the big-picture thinkers and visionaries. They inspire energy and creativity in a team. They rely on gut feelings, love socialising, and are highly persuasive communicators.',
    strengths: ['Motivating and energising others', 'Creative problem solving', 'Building alliances', 'Seeing the big picture'],
    cautions: ['May ignore facts in favour of gut feelings', 'Lack of attention to detail', 'Can overwhelm others with high energy', 'May press forward without enough information'],
    expression: 'Animated, lively, rapid gestures, high energy, enthusiastic speech.',
    bestApproach: 'Show interest in their ideas. Focus on the big picture rather than details. Be energetic. Allow time for socialising. Use testimonials and stories to support your points.',
  },
};

// Self-assessment questions
// Each answer pushes toward one or more styles
const QUESTIONS = [
  {
    q: "When faced with a big decision at work, you tend to:",
    options: [
      { text: "Research carefully and review all the data before deciding", styles: { analytical: 3 } },
      { text: "Talk it through with the team and make sure everyone's on board", styles: { amiable: 3 } },
      { text: "Decide quickly based on what will get the best result fastest", styles: { driver: 3 } },
      { text: "Go with your gut and the option that feels most exciting", styles: { expressive: 3 } },
    ]
  },
  {
    q: "A colleague describes you as:",
    options: [
      { text: "Thorough and precise — you always check your facts", styles: { analytical: 3 } },
      { text: "Warm and supportive — people come to you when they need help", styles: { amiable: 3 } },
      { text: "Direct and results-focused — you get things done", styles: { driver: 3 } },
      { text: "Enthusiastic and creative — you bring energy to the team", styles: { expressive: 3 } },
    ]
  },
  {
    q: "In a team meeting, you are most likely to:",
    options: [
      { text: "Listen carefully and only speak when you have something accurate and well-reasoned to add", styles: { analytical: 3 } },
      { text: "Make sure everyone's voice is heard and help the group reach agreement", styles: { amiable: 3 } },
      { text: "Cut to the chase and push to get a decision made", styles: { driver: 3 } },
      { text: "Share your ideas enthusiastically and get others excited about a direction", styles: { expressive: 3 } },
    ]
  },
  {
    q: "When something goes wrong at work, your first instinct is:",
    options: [
      { text: "Figure out exactly what happened and why, step by step", styles: { analytical: 3 } },
      { text: "Check in with the people affected and make sure relationships are intact", styles: { amiable: 3 } },
      { text: "Focus on fixing it as quickly as possible and move on", styles: { driver: 3 } },
      { text: "Rally the team and think creatively about a solution", styles: { expressive: 3 } },
    ]
  },
  {
    q: "Your desk or workspace is usually:",
    options: [
      { text: "Organised and tidy — everything has a place", styles: { analytical: 2, driver: 1 } },
      { text: "Personalised with photos or things that make it feel warm and welcoming", styles: { amiable: 3 } },
      { text: "Functional and efficient — set up to get things done", styles: { driver: 3 } },
      { text: "A bit chaotic but full of ideas, notes, and inspiration", styles: { expressive: 3 } },
    ]
  },
  {
    q: "When a client or colleague is upset, you:",
    options: [
      { text: "Try to understand the facts of the situation clearly before responding", styles: { analytical: 3 } },
      { text: "Focus on how they're feeling and make sure they feel heard", styles: { amiable: 3 } },
      { text: "Get to the point and work out how to solve the problem quickly", styles: { driver: 3 } },
      { text: "Try to lift the energy and help them see a positive path forward", styles: { expressive: 3 } },
    ]
  },
  {
    q: "How do you prefer to receive feedback?",
    options: [
      { text: "In writing, with specific examples and time to process it", styles: { analytical: 3 } },
      { text: "In a relaxed conversation where you feel supported, not judged", styles: { amiable: 3 } },
      { text: "Directly and concisely — just tell me what needs to change", styles: { driver: 3 } },
      { text: "With some positive energy — acknowledge what went well too", styles: { expressive: 3 } },
    ]
  },
  {
    q: "When learning something new, you prefer to:",
    options: [
      { text: "Read the manual, understand the theory, then practise", styles: { analytical: 3 } },
      { text: "Learn alongside someone else and ask lots of questions", styles: { amiable: 3 } },
      { text: "Jump in and figure it out as you go", styles: { driver: 3 } },
      { text: "Explore creatively and make connections to things you already know", styles: { expressive: 3 } },
    ]
  },
];

export function renderSocialHome(container, navigate) {
  container.innerHTML = `
    ${nav('/social', navigate)}
    <div class="page-content">
      <h2 style="margin-bottom:0.25rem;">Social Styles</h2>
      <p style="color:var(--ink-mid);margin-bottom:2rem;">Understanding how you and your colleagues communicate — and how to adapt your style to connect more effectively.</p>

      <div style="background:var(--warm);border-radius:var(--radius-lg);padding:1.25rem 1.5rem;margin-bottom:2rem;border:1px solid var(--warm-mid);">
        <p style="font-size:14px;color:var(--ink);line-height:1.7;margin:0;">
          Based on the work of <strong>David Merrill & Roger Reid</strong>, Social Styles describes four ways people tend to think, communicate, and make decisions.
          There is no best style — each has genuine strengths. The goal is to recognise the style of the person you're talking to and adapt how you communicate to connect with them more effectively.
        </p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:2rem;">
        ${Object.values(STYLES).map(s => `
          <div data-style="${s.id}" style="background:${s.color};border-radius:var(--radius-lg);padding:1.1rem 1.25rem;cursor:pointer;border:1.5px solid transparent;transition:border-color 0.15s;">
            <div style="font-size:1.6rem;margin-bottom:4px;">${s.emoji}</div>
            <div style="font-weight:700;font-size:1rem;color:${s.textColor};">${s.name}</div>
            <div style="font-size:11px;color:${s.textColor};opacity:0.75;margin-bottom:6px;">${s.animal}</div>
            <div style="font-size:12.5px;color:${s.textColor};opacity:0.85;">${s.tagline}</div>
          </div>
        `).join('')}
      </div>

      <button class="btn-primary" id="start-quiz-btn" style="width:100%;margin-bottom:0.75rem;">🔍 Find out your social style</button>
      <p style="font-size:12.5px;color:var(--ink-light);text-align:center;">8 questions · takes about 2 minutes</p>
    </div>
  `;
  setupHamburger();

  container.querySelectorAll('[data-style]').forEach(card => {
    card.addEventListener('click', () => renderStyleDetail(container, navigate, card.dataset.style));
  });
  document.getElementById('start-quiz-btn').addEventListener('click', () => renderQuiz(container, navigate));
}

function renderStyleDetail(container, navigate, styleId) {
  const s = STYLES[styleId];
  window.scrollTo(0, 0);
  container.innerHTML = `
    ${nav('/social', navigate)}
    <div class="page-content">
      <div class="breadcrumb"><span class="breadcrumb-link" id="bc-social">Social Styles</span> › ${s.name}</div>

      <div style="background:${s.color};border-radius:var(--radius-lg);padding:1.5rem;margin-bottom:1.5rem;">
        <div style="font-size:2.5rem;margin-bottom:6px;">${s.emoji}</div>
        <h2 style="color:${s.textColor};margin:0 0 4px;">${s.name} — ${s.animal}</h2>
        <div style="font-size:13px;color:${s.textColor};opacity:0.8;">${s.tagline}</div>
      </div>

      <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.25rem 1.5rem;margin-bottom:1rem;box-shadow:var(--shadow-sm);">
        <p style="font-size:14.5px;color:var(--ink);line-height:1.7;margin:0 0 1rem;">${s.summary}</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${s.traits.map(t => `<span style="font-size:12px;font-weight:600;padding:3px 10px;border-radius:20px;background:${s.color};color:${s.textColor};">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1rem;">
        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.1rem 1.25rem;box-shadow:var(--shadow-sm);">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);margin-bottom:0.6rem;">Strengths</div>
          <ul style="margin:0;padding-left:16px;">
            ${s.strengths.map(x => `<li style="font-size:13px;color:var(--ink-mid);margin-bottom:4px;line-height:1.5;">${x}</li>`).join('')}
          </ul>
        </div>
        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.1rem 1.25rem;box-shadow:var(--shadow-sm);">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);margin-bottom:0.6rem;">Watch out for</div>
          <ul style="margin:0;padding-left:16px;">
            ${s.cautions.map(x => `<li style="font-size:13px;color:var(--ink-mid);margin-bottom:4px;line-height:1.5;">${x}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.1rem 1.25rem;margin-bottom:1rem;box-shadow:var(--shadow-sm);">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);margin-bottom:0.5rem;">How they come across</div>
        <p style="font-size:13.5px;color:var(--ink-mid);line-height:1.6;margin:0;">${s.expression}</p>
      </div>

      <div style="background:#fef9e7;border-left:3px solid #fde047;border-radius:0 var(--radius-lg) var(--radius-lg) 0;padding:1.1rem 1.25rem;margin-bottom:1.5rem;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#713f12;margin-bottom:0.5rem;">💡 How to communicate with them</div>
        <p style="font-size:13.5px;color:#713f12;line-height:1.6;margin:0;">${s.bestApproach}</p>
      </div>

      <div style="background:${s.color};border-radius:var(--radius);padding:10px 14px;font-size:13.5px;font-weight:600;color:${s.textColor};margin-bottom:1.5rem;">
        Favourite word: <em>${s.favoriteWord}</em>
      </div>

      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button class="btn-ghost" id="back-btn">← All styles</button>
        <button class="btn-primary" id="quiz-btn">🔍 Find out my style</button>
      </div>
    </div>
  `;
  setupHamburger();
  document.getElementById('bc-social')?.addEventListener('click', () => renderSocialHome(container, navigate));
  document.getElementById('back-btn').addEventListener('click', () => renderSocialHome(container, navigate));
  document.getElementById('quiz-btn').addEventListener('click', () => renderQuiz(container, navigate));
}

function renderQuiz(container, navigate) {
  window.scrollTo(0, 0);
  let qIdx = 0;
  const scores = { analytical: 0, amiable: 0, driver: 0, expressive: 0 };
  let answered = false;

  function renderQ() {
    window.scrollTo(0, 0);
    answered = false;
    const q = QUESTIONS[qIdx];
    const pct = Math.round((qIdx / QUESTIONS.length) * 100);

    container.innerHTML = `
      ${nav('/social', navigate)}
      <div class="page-content" style="max-width:600px;margin:0 auto;">
        <div class="breadcrumb"><span class="breadcrumb-link" id="bc-social">Social Styles</span> › Find your style</div>

        <div style="background:linear-gradient(135deg,#4c1d95,#7c3aed);border-radius:var(--radius-lg);padding:1.1rem 1.5rem;margin-bottom:1.5rem;color:white;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <div style="font-size:12px;opacity:0.8;">Question ${qIdx + 1} of ${QUESTIONS.length}</div>
            <div style="font-size:12px;opacity:0.8;">${pct}% complete</div>
          </div>
          <div style="background:rgba(255,255,255,0.2);border-radius:20px;height:5px;overflow:hidden;">
            <div style="background:white;height:100%;width:${pct}%;border-radius:20px;transition:width 0.3s;"></div>
          </div>
        </div>

        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.5rem;box-shadow:var(--shadow-sm);">
          <p style="font-size:15px;font-weight:500;color:var(--ink);line-height:1.6;margin-bottom:1.25rem;">${q.q}</p>
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${q.options.map((opt, i) => `
              <button class="quiz-option" data-oidx="${i}" style="text-align:left;padding:12px 14px;border-radius:var(--radius);border:1.5px solid var(--warm-dark);background:white;font-size:13.5px;color:var(--ink);cursor:pointer;font-family:'DM Sans',sans-serif;line-height:1.5;">
                ${opt.text}
              </button>
            `).join('')}
          </div>
        </div>

        <button class="btn-ghost" style="margin-top:1rem;" id="quiz-back-btn">${qIdx > 0 ? '← Previous question' : '← Cancel'}</button>
      </div>
    `;
    setupHamburger();
    document.getElementById('bc-social')?.addEventListener('click', () => renderSocialHome(container, navigate));

    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', function() {
        if (answered) return;
        answered = true;
        const opt = q.options[parseInt(this.dataset.oidx)];
        Object.entries(opt.styles).forEach(([style, pts]) => { scores[style] += pts; });
        this.style.background = '#f0fdf4';
        this.style.borderColor = '#166534';
        this.style.color = '#166534';
        this.style.fontWeight = '600';
        setTimeout(() => {
          qIdx++;
          if (qIdx < QUESTIONS.length) renderQ();
          else showResult();
        }, 400);
      });
    });

    document.getElementById('quiz-back-btn').addEventListener('click', () => {
      if (qIdx === 0) renderSocialHome(container, navigate);
      else { qIdx--; renderQ(); }
    });
  }

  function showResult() {
    window.scrollTo(0, 0);
    const top = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const primaryId = top[0][0];
    const secondaryId = top[1][0];
    const primary = STYLES[primaryId];
    const secondary = STYLES[secondaryId];
    const maxScore = QUESTIONS.length * 3;

    container.innerHTML = `
      ${nav('/social', navigate)}
      <div class="page-content" style="max-width:600px;margin:0 auto;">
        <div class="breadcrumb"><span class="breadcrumb-link" id="bc-social">Social Styles</span> › Your result</div>

        <div style="background:${primary.color};border-radius:var(--radius-lg);padding:1.75rem;margin-bottom:1.5rem;text-align:center;">
          <div style="font-size:3rem;margin-bottom:8px;">${primary.emoji}</div>
          <h2 style="color:${primary.textColor};margin:0 0 4px;font-size:1.4rem;">You are an <em>${primary.name}</em></h2>
          <div style="font-size:13px;color:${primary.textColor};opacity:0.8;margin-bottom:0.5rem;">${primary.animal} · ${primary.tagline}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:10px;">
            ${primary.traits.map(t => `<span style="font-size:11.5px;font-weight:600;padding:3px 10px;border-radius:20px;background:white;color:${primary.textColor};">${t}</span>`).join('')}
          </div>
        </div>

        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.25rem 1.5rem;margin-bottom:1rem;box-shadow:var(--shadow-sm);">
          <p style="font-size:14px;color:var(--ink);line-height:1.7;margin:0;">${primary.summary}</p>
        </div>

        <!-- Score breakdown -->
        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.25rem 1.5rem;margin-bottom:1rem;box-shadow:var(--shadow-sm);">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);margin-bottom:1rem;">Your style breakdown</div>
          ${top.map(([id, pts]) => {
            const s = STYLES[id];
            const pct = Math.round((pts / maxScore) * 100);
            return `<div style="margin-bottom:10px;">
              <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
                <span style="font-size:13px;font-weight:600;color:${s.textColor};">${s.emoji} ${s.name}</span>
                <span style="font-size:12px;color:var(--ink-light);">${pct}%</span>
              </div>
              <div style="background:var(--warm);border-radius:20px;height:8px;overflow:hidden;">
                <div style="background:${s.accent};height:100%;width:${pct}%;border-radius:20px;transition:width 0.5s;"></div>
              </div>
            </div>`;
          }).join('')}
        </div>

        ${top[1][1] > 0 ? `
        <div style="background:${secondary.color};border-radius:var(--radius-lg);padding:1rem 1.25rem;margin-bottom:1.5rem;">
          <div style="font-size:12px;font-weight:700;color:${secondary.textColor};margin-bottom:3px;">Secondary style: ${secondary.emoji} ${secondary.name}</div>
          <div style="font-size:13px;color:${secondary.textColor};opacity:0.85;">You show strong ${secondary.name} tendencies too — most people are a blend of styles.</div>
        </div>` : ''}

        <div style="background:#fef9e7;border-left:3px solid #fde047;border-radius:0 var(--radius-lg) var(--radius-lg) 0;padding:1.1rem 1.25rem;margin-bottom:1.5rem;">
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#713f12;margin-bottom:0.5rem;">💡 Remember</div>
          <p style="font-size:13.5px;color:#713f12;line-height:1.6;margin:0;">There is no best style — each has real strengths. The goal isn't to change who you are, but to recognise the style of the person you're speaking with and adapt how you communicate to connect more effectively.</p>
        </div>

        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:2rem;">
          <button class="btn-primary" id="read-more-btn">Read more about ${primary.name}s →</button>
          <button class="btn-ghost" id="retake-btn">↺ Retake quiz</button>
          <button class="btn-ghost" id="all-styles-btn">← All styles</button>
        </div>
      </div>
    `;
    setupHamburger();
    document.getElementById('bc-social')?.addEventListener('click', () => renderSocialHome(container, navigate));
    const nb = updateBadgeStat('socialQuiz', 1);
    awardBadgesAndCelebrate(nb, false);
    document.getElementById('read-more-btn').addEventListener('click', () => renderStyleDetail(container, navigate, primaryId));
    document.getElementById('retake-btn').addEventListener('click', () => renderQuiz(container, navigate));
    document.getElementById('all-styles-btn').addEventListener('click', () => renderSocialHome(container, navigate));
  }

  renderQ();
}
