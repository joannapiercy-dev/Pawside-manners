import { nav, setupHamburger } from './home.js';

const STEPS = [
  {
    number: 1,
    icon: '📋',
    title: 'The Situation',
    subtitle: 'Describe what happened — just the facts',
    prompt: 'Describe the specific situation you need to address. Stick to observable facts — what actually happened, not what you think it means.',
    placeholder: 'Example: On Tuesday during the staff meeting, [name] interrupted me twice while I was mid-sentence presenting the new intake protocol...',
    tip: 'Facts only here. Not "they were rude" — but what they actually said or did.',
  },
  {
    number: 2,
    icon: '⚡',
    title: 'Why It Matters',
    subtitle: "What's at stake if you don't have this conversation?",
    prompt: "What happens if you don't address this? What does continued silence cost you, the other person, or the team?",
    placeholder: 'Example: The pattern continues, I get more resentful, other staff notice the tension, and the underlying issue never gets addressed...',
    tip: 'Being clear about the cost of avoidance is what gives you the motivation to move forward.',
  },
  {
    number: 3,
    icon: '🎯',
    title: 'What You Want',
    subtitle: 'What does a good outcome look like?',
    prompt: 'If this conversation goes well, what\'s different afterward? Be specific about the relationship, the behaviour, and/or the situation.',
    placeholder: 'Example: We understand each other\'s perspectives, the interrupting stops, and we can work together without this tension between us...',
    tip: "Don't aim to 'win.' Aim for mutual understanding and a clear path forward.",
  },
  {
    number: 4,
    icon: '🔍',
    title: 'Your Story vs. The Facts',
    subtitle: "Separate what happened from what you've told yourself about it",
    prompt: 'Write out: (1) The specific facts you observed — what would appear on a video recording. (2) The story you\'ve been telling yourself about why it happened.',
    placeholder: 'Facts: On Tuesday she interrupted me mid-sentence twice. On Thursday she didn\'t acknowledge my greeting in the hallway.\n\nMy story: She doesn\'t respect me. She\'s deliberately undermining me in front of the team...',
    tip: "You'll share the facts in the conversation. You'll share the story tentatively as your interpretation — not as truth.",
  },
  {
    number: 5,
    icon: '👁️',
    title: 'Their Perspective',
    subtitle: 'What might it look like from their side?',
    prompt: 'Set aside your story for a moment. What might they have been experiencing? What pressures, misunderstandings, or context might explain their behaviour — even if it doesn\'t excuse it?',
    placeholder: 'Example: She was probably under pressure that day. She may not have realised she was interrupting — she processes things out loud. She might not know how it landed...',
    tip: "You don't have to agree with their perspective. But genuinely considering it will make you far more effective in the conversation.",
  },
  {
    number: 6,
    icon: '🛡️',
    title: 'Safety Strategy',
    subtitle: 'How will you create safety before and during the conversation?',
    prompt: "Write your Contrasting statement — what you DON'T intend + what you DO intend. Also: where might safety break down, and what will you do if it does?",
    placeholder: "I don't intend to: blame you or make you feel attacked.\nI do intend to: understand what's been happening from both sides and figure out a way forward together.\n\nIf they get defensive, I'll: pause the content and say 'I want to make sure you know I'm not here to put you on the spot...'",
    tip: 'Say your Contrasting statement out loud before the conversation. If it sounds stiff, practise until it sounds like you.',
  },
  {
    number: 7,
    icon: '💬',
    title: 'Your Opening',
    subtitle: 'Write your first 2–3 sentences',
    prompt: 'Using STATE — lead with facts, hold your story tentatively, invite their perspective. Write the exact words you\'ll use to open the conversation.',
    placeholder: "Example: 'Hey — can I bring something up? I want to get your take on it. In the last two staff meetings, I noticed I got interrupted mid-sentence a couple of times while I was presenting — I don't know if you noticed, but I've been replaying it and I wanted to ask about it directly rather than let it sit...'",
    tip: 'Write it out. Then read it out loud. Adjust until it sounds like you — not like a textbook.',
  },
  {
    number: 8,
    icon: '✅',
    title: 'Desired Outcome & Next Steps',
    subtitle: "What's the concrete ask going forward?",
    prompt: 'What specific, observable change are you looking for? What follow-up makes sense — and when?',
    placeholder: "Example: I'd like us to agree that if either of us needs to add something, we wait for a pause rather than jumping in. I'd also like to check in about how things feel between us in a week...",
    tip: "Vague outcomes ('let's just try to get along') lead to repeated conversations. Be specific about what changes.",
  },
];

export function renderCrucial(container, navigate) {
  const answers = new Array(STEPS.length).fill('');
  let currentStep = 0;

  function renderStep() {
    window.scrollTo(0, 0);
    const step = STEPS[currentStep];
    const isLast = currentStep === STEPS.length - 1;
    const progressPct = Math.round((currentStep / STEPS.length) * 100);

    container.innerHTML = `
      ${nav('/train', navigate)}
      <div class="page-content" style="max-width:680px;margin:0 auto;">

        <div class="breadcrumb" style="margin-bottom:1.5rem;">
          <a href="#/train">Communication</a> › Crucial Conversation Prep
        </div>

        <!-- Progress header -->
        <div style="background:linear-gradient(135deg,#1e3a5f,#2d5a8e);border-radius:var(--radius-lg);padding:1.25rem 1.5rem;margin-bottom:1.5rem;color:white;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.6rem;">
            <div style="font-size:13px;opacity:0.8;">Step ${currentStep + 1} of ${STEPS.length}</div>
            <div style="font-size:13px;opacity:0.8;">${progressPct}% complete</div>
          </div>
          <div style="background:rgba(255,255,255,0.2);border-radius:20px;height:6px;overflow:hidden;">
            <div style="background:white;height:100%;width:${progressPct}%;border-radius:20px;transition:width 0.3s;"></div>
          </div>
          <div style="display:flex;gap:6px;margin-top:10px;">
            ${STEPS.map((s, i) => `
              <div style="flex:1;height:4px;border-radius:2px;background:${i < currentStep ? 'rgba(255,255,255,0.9)' : i === currentStep ? 'white' : 'rgba(255,255,255,0.25)'};"></div>
            `).join('')}
          </div>
        </div>

        <!-- Step card -->
        <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-sm);margin-bottom:1.25rem;">
          <div style="background:var(--warm);padding:1.25rem 1.5rem;border-bottom:1px solid var(--warm-mid);">
            <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-light);margin-bottom:6px;">Step ${currentStep + 1} of ${STEPS.length}</div>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="font-size:1.5rem;">${step.icon}</span>
              <div>
                <h2 style="font-size:1.2rem;margin:0 0 2px;">${step.title}</h2>
                <p style="font-size:13px;color:var(--ink-light);font-style:italic;margin:0;">${step.subtitle}</p>
              </div>
            </div>
          </div>

          <div style="padding:1.5rem;">
            <p style="font-size:14.5px;color:var(--ink);line-height:1.65;margin-bottom:1.25rem;">${step.prompt}</p>
            <textarea
              id="step-answer"
              placeholder="${step.placeholder}"
              style="width:100%;min-height:160px;padding:12px 14px;border:1.5px solid var(--warm-dark);border-radius:var(--radius);font-family:'DM Sans',sans-serif;font-size:14px;color:var(--ink);line-height:1.6;resize:vertical;box-sizing:border-box;background:var(--warm);"
            >${answers[currentStep]}</textarea>

            <div style="background:#fefce8;border-left:3px solid #fde047;padding:10px 14px;margin-top:1rem;border-radius:0 var(--radius) var(--radius) 0;">
              <span style="font-size:12px;font-weight:700;color:#713f12;">💡 TIP:</span>
              <span style="font-size:13px;color:#713f12;"> ${step.tip}</span>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div style="display:flex;gap:10px;margin-bottom:2rem;">
          ${currentStep > 0 ? `<button class="btn-ghost" id="back-btn" style="min-width:90px;">← Back</button>` : ''}
          <button class="btn-primary" id="next-btn" style="flex:1;">
            ${isLast ? 'View summary →' : 'Next →'}
          </button>
        </div>

        <!-- Reference cards -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:2rem;">
          ${refCard('🛡️', 'Safety First', 'Create Mutual Purpose before diving in')}
          ${refCard('📝', 'STATE', 'Facts → Story → Ask → Tentative → Encourage')}
          ${refCard('💡', 'AMPP', 'Ask → Mirror → Paraphrase → Prime')}
        </div>

      </div>
    `;

    setupHamburger();

    document.getElementById('back-btn')?.addEventListener('click', () => {
      saveAnswer();
      currentStep--;
      renderStep();
    });

    document.getElementById('next-btn').addEventListener('click', () => {
      saveAnswer();
      if (isLast) {
        renderSummary();
      } else {
        currentStep++;
        renderStep();
      }
    });

    // Auto-resize textarea
    const ta = document.getElementById('step-answer');
    ta.addEventListener('input', () => {
      ta.style.height = 'auto';
      ta.style.height = ta.scrollHeight + 'px';
    });
  }

  function saveAnswer() {
    const ta = document.getElementById('step-answer');
    if (ta) answers[currentStep] = ta.value;
  }

  function renderSummary() {
    window.scrollTo(0, 0);
    const filled = answers.filter(a => a.trim()).length;

    container.innerHTML = `
      ${nav('/train', navigate)}
      <div class="page-content" style="max-width:680px;margin:0 auto;">

        <div class="breadcrumb" style="margin-bottom:1.5rem;">
          <a href="#/train">Communication</a> › Crucial Conversation Prep
        </div>

        <div style="background:linear-gradient(135deg,#1e3a5f,#2d5a8e);border-radius:var(--radius-lg);padding:1.5rem;margin-bottom:1.5rem;color:white;text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.5rem;">✅</div>
          <h2 style="color:white;margin:0 0 6px;font-size:1.3rem;">You're ready</h2>
          <p style="opacity:0.8;font-size:13.5px;margin:0;">Here's your prep summary — read it back before the conversation.</p>
        </div>

        ${STEPS.map((step, i) => answers[i].trim() ? `
          <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-sm);margin-bottom:1rem;">
            <div style="background:var(--warm);padding:0.75rem 1.25rem;border-bottom:1px solid var(--warm-mid);display:flex;align-items:center;gap:8px;">
              <span style="font-size:1.1rem;">${step.icon}</span>
              <span style="font-weight:600;font-size:14px;color:var(--ink);">${step.title}</span>
            </div>
            <div style="padding:1rem 1.25rem;">
              <p style="font-size:14px;color:var(--ink-mid);line-height:1.7;white-space:pre-wrap;margin:0;">${answers[i]}</p>
            </div>
          </div>
        ` : `
          <div style="background:white;border:1px dashed var(--warm-dark);border-radius:var(--radius-lg);padding:0.75rem 1.25rem;margin-bottom:1rem;opacity:0.5;">
            <span style="font-size:1.1rem;">${step.icon}</span>
            <span style="font-size:14px;color:var(--ink-light);margin-left:8px;font-style:italic;">${step.title} — skipped</span>
          </div>
        `).join('')}

        <div style="display:flex;gap:10px;margin-top:1.5rem;margin-bottom:2rem;flex-wrap:wrap;">
          <button class="btn-ghost" id="restart-btn">🔄 Start over</button>
          <button class="btn-ghost" id="back-to-step-btn">← Edit answers</button>
          <button class="btn-ghost" id="home-btn">← Back to Communication</button>
        </div>

      </div>
    `;

    setupHamburger();
    document.getElementById('restart-btn').addEventListener('click', () => {
      answers.fill('');
      currentStep = 0;
      renderStep();
    });
    document.getElementById('back-to-step-btn').addEventListener('click', () => {
      currentStep = STEPS.length - 1;
      renderStep();
    });
    document.getElementById('home-btn').addEventListener('click', () => navigate('/train'));
  }

  function refCard(icon, title, desc) {
    return `<div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius);padding:10px;text-align:center;">
      <div style="font-size:1rem;margin-bottom:4px;">${icon}</div>
      <div style="font-size:11px;font-weight:700;color:var(--ink);margin-bottom:2px;">${title}</div>
      <div style="font-size:10.5px;color:var(--ink-light);line-height:1.4;">${desc}</div>
    </div>`;
  }

  renderStep();
}
