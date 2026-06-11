import { scenarios, categories } from '../data/scenarios.js';
import { markComplete, isComplete } from '../lib/progress.js';
import { getRoleplayFeedback, getTrainerAnswer } from '../lib/api.js';
import { nav } from './home.js';

export function renderScenario(container, navigate, id) {
  const scenario = scenarios.find(s => s.id === id);
  if (!scenario) { navigate('/train'); return; }
  const cat = categories.find(c => c.id === scenario.category);
  const diffClass = { beginner: 'diff-beginner', intermediate: 'diff-intermediate', advanced: 'diff-advanced' }[scenario.difficulty];

  let currentMode = 'read';
  let trainerHistory = [];

  function render(mode) {
    window.scrollTo(0, 0);
    currentMode = mode;
    container.innerHTML = `
      ${nav('/train', navigate)}
      <div class="scenario-layout">
        <div class="breadcrumb">
          <a href="#/train">Training</a> › ${cat.label} › ${scenario.title}
        </div>
        <div class="scenario-header">
          <span class="difficulty-badge ${diffClass}">${scenario.difficulty}</span>
          <h2>${scenario.title}</h2>
        </div>

        <div class="mode-tabs">
          <button class="mode-tab ${mode==='read'?'active':''}" data-mode="read">📖 Read & study</button>
          <button class="mode-tab ${mode==='quiz'?'active':''}" data-mode="quiz">✅ Quiz</button>
          <button class="mode-tab ${mode==='roleplay'?'active':''}" data-mode="roleplay">🎭 AI role-play</button>
        </div>

        ${mode === 'read' ? renderRead(scenario) : ''}
        ${mode === 'quiz' ? renderQuiz(scenario) : ''}
        ${mode === 'roleplay' ? renderRoleplay(scenario) : ''}

        ${mode === 'roleplay' ? renderTrainerPanel(scenario) : ''}

        <div style="margin-top:2rem;display:flex;gap:8px;">
          <button class="btn-ghost" id="back-btn">← Back to scenarios</button>
          ${getNextScenario(id) ? `<button class="btn-secondary" id="next-btn">Next scenario →</button>` : ''}
        </div>
      </div>
    `;

    container.querySelectorAll('.mode-tab').forEach(tab => {
      tab.addEventListener('click', () => render(tab.dataset.mode));
    });

    document.getElementById('back-btn').addEventListener('click', () => navigate('/train'));
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => navigate('/scenario/' + getNextScenario(id)));

    if (mode === 'read') setupRead(scenario);
    if (mode === 'quiz') setupQuiz(scenario);
    if (mode === 'roleplay') setupRoleplay(scenario);
    if (mode === 'roleplay') setupTrainerPanel(scenario);
  }

  render(currentMode);
}

function getNextScenario(currentId) {
  const ids = scenarios.map(s => s.id);
  const idx = ids.indexOf(currentId);
  return idx < ids.length - 1 ? ids[idx + 1] : null;
}

// ── READ MODE ──
function renderRead(scenario) {
  return `
    <div style="background:var(--context-bg);border:1.5px solid var(--context-border);border-radius:var(--radius-lg);padding:1.5rem;margin-bottom:1rem;">
      <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:var(--context-text);opacity:0.7;margin-bottom:0.5rem;">The situation</div>
      <p style="color:var(--context-text);font-size:14.5px;margin-bottom:1.25rem;line-height:1.65;">${scenario.context}</p>
      <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:var(--client-text);opacity:0.7;margin-bottom:0.5rem;">The client says</div>
      <div class="client-message">"${scenario.clientMessage}"</div>
    </div>

    <div class="scenario-card">
      <h3>Key principles</h3>
      <ul style="padding-left:1.25rem;display:flex;flex-direction:column;gap:6px;margin-top:4px;">
        ${scenario.keyPrinciples.map(p => `<li style="font-size:14.5px;color:var(--ink-mid);">${p}</li>`).join('')}
      </ul>
    </div>

    <div id="answer-section">
      <button class="btn-secondary" id="reveal-btn" style="width:100%;margin-bottom:1rem;">Reveal model answer</button>
    </div>

    <div id="answer-content" class="hidden">
      <div class="model-answer">
        <h4>Model answer</h4>
        <p>${scenario.modelAnswer}</p>
      </div>
      ${scenario.tip ? `<div class="tip-box"><strong>💡 Trainer tip:</strong> ${scenario.tip}</div>` : ''}
    </div>
  `;
}

function setupRead(scenario) {
  document.getElementById('reveal-btn')?.addEventListener('click', function() {
    document.getElementById('answer-content').classList.remove('hidden');
    this.style.display = 'none';
    markComplete(scenario.id, 'read');
  });
}

// ── QUIZ MODE ──
function renderQuiz(scenario) {
  const done = isComplete(scenario.id, 'quiz');
  return `
    <div style="background:var(--client-bg);border:1.5px solid var(--client-border);border-radius:var(--radius-lg);padding:1.5rem;margin-bottom:1rem;">
      <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:var(--client-text);opacity:0.7;margin-bottom:0.75rem;">The client says</div>
      <p style="font-size:15px;color:var(--client-text);line-height:1.65;font-style:italic;">"${scenario.clientMessage}"</p>
    </div>
    <div class="scenario-card">
      <h3 style="margin-bottom:1rem;font-family:'DM Sans',sans-serif;font-weight:600;font-size:1rem;">Which response is most appropriate?</h3>
      <div id="quiz-options">
        ${scenario.quizOptions.map((opt, i) => `
          <button class="quiz-option" data-index="${i}">${opt.text}</button>
        `).join('')}
      </div>
      <div id="quiz-feedback" class="hidden"></div>
      <div id="quiz-next" class="hidden" style="margin-top:1rem;">
        <button class="btn-primary" id="quiz-done-btn">Continue →</button>
      </div>
    </div>
    ${done ? '<p style="text-align:center;color:var(--green-soft);font-size:13.5px;">✅ You\'ve already completed this quiz</p>' : ''}
  `;
}

function setupQuiz(scenario) {
  const optionBtns = document.querySelectorAll('.quiz-option');
  const feedbackEl = document.getElementById('quiz-feedback');
  const nextEl = document.getElementById('quiz-next');

  optionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = parseInt(this.dataset.index);
      const opt = scenario.quizOptions[idx];

      optionBtns.forEach(b => b.disabled = true);
      if (opt.correct) {
        this.classList.add('correct');
        feedbackEl.className = 'feedback-box feedback-correct';
        feedbackEl.innerHTML = `<strong>Correct!</strong> ${opt.explanation}`;
      } else {
        this.classList.add('incorrect');
        feedbackEl.className = 'feedback-box feedback-incorrect';
        feedbackEl.innerHTML = `<strong>Not quite.</strong> ${opt.explanation}`;
        optionBtns.forEach((b, i) => { if (scenario.quizOptions[i].correct) b.classList.add('correct'); });
      }
      feedbackEl.classList.remove('hidden');
      nextEl.classList.remove('hidden');
      markComplete(scenario.id, 'quiz');
    });
  });

  document.getElementById('quiz-done-btn')?.addEventListener('click', () => {
    window.location.hash = '/train';
  });
}

// ── ROLEPLAY MODE ──
let chatHistory = [];

function renderRoleplay(scenario) {
  chatHistory = [];
  return `
    <div style="background:var(--context-bg);border:1.5px solid var(--context-border);border-radius:var(--radius-lg);padding:1.5rem;margin-bottom:1rem;">
      <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.09em;color:var(--context-text);opacity:0.7;margin-bottom:0.5rem;">Your role</div>
      <p style="font-size:14.5px;color:var(--context-text);line-height:1.65;">${scenario.context}</p>
    </div>

    <div class="chat-window">
      <div class="chat-header" style="background:var(--staff-bg);">
        <span>🎭</span>
        <span>Live role-play — respond as you would in the clinic</span>
      </div>
      <div class="chat-messages" id="chat-messages">
        <div class="chat-bubble bubble-client">"${scenario.clientMessage}"</div>
      </div>
      <div class="chat-input-row">
        <button id="mic-btn" title="Speak your response" style="height:44px;width:44px;flex-shrink:0;background:var(--warm);border:1.5px solid var(--warm-dark);border-radius:8px;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;">🎤</button>
        <textarea id="staff-input" placeholder="Type or speak your response…" rows="2"></textarea>
        <button class="send-btn" id="send-btn">Send</button>
      </div>
      <div id="mic-status" style="display:none;font-size:12px;color:var(--ink-light);padding:4px 16px 8px;background:white;">🔴 Listening… speak now, then click mic again to stop</div>
    </div>

    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn-ghost" id="reset-btn">🔄 Restart scenario</button>
      <button class="btn-ghost" id="hint-btn">💡 Show hint</button>
    </div>
    <div id="hint-box" class="hidden tip-box" style="margin-top:1rem;">
      <strong>Hint:</strong> ${scenario.keyPrinciples[0]}. ${scenario.keyPrinciples[1] || ''}
    </div>
  `;
}

function setupRoleplay(scenario) {
  const input = document.getElementById('staff-input');
  const sendBtn = document.getElementById('send-btn');
  const messagesEl = document.getElementById('chat-messages');

  async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    sendBtn.disabled = true;

    const staffBubble = document.createElement('div');
    staffBubble.className = 'chat-bubble bubble-staff';
    staffBubble.textContent = text;
    messagesEl.appendChild(staffBubble);

    const loadingEl = document.createElement('div');
    loadingEl.className = 'chat-bubble bubble-client';
    loadingEl.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div>';
    messagesEl.appendChild(loadingEl);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    try {
      const { clientReply, feedback } = await getRoleplayFeedback(scenario, chatHistory, text);
      loadingEl.remove();

      const clientBubble = document.createElement('div');
      clientBubble.className = 'chat-bubble bubble-client';
      clientBubble.textContent = clientReply;
      messagesEl.appendChild(clientBubble);

      if (feedback) {
        const feedbackBubble = document.createElement('div');
        feedbackBubble.className = 'bubble-feedback';
        feedbackBubble.innerHTML = `<strong style="color:var(--gold);">Trainer feedback:</strong> ${feedback}`;
        messagesEl.appendChild(feedbackBubble);
      }

      chatHistory.push({ role: 'user', content: text });
      chatHistory.push({ role: 'assistant', content: clientReply });
      markComplete(scenario.id, 'roleplay');
    } catch (err) {
      loadingEl.textContent = 'Error: ' + err.message;
    }

    sendBtn.disabled = false;
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  document.getElementById('reset-btn').addEventListener('click', () => {
    chatHistory = [];
    messagesEl.innerHTML = `<div class="chat-bubble bubble-client">"${scenario.clientMessage}"</div>`;
  });

  document.getElementById('hint-btn').addEventListener('click', () => {
    document.getElementById('hint-box').classList.toggle('hidden');
  });

  // Speech recognition mic button
  const micBtn = document.getElementById('mic-btn');
  const micStatus = document.getElementById('mic-status');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    micBtn.title = 'Voice input not supported here. Try Chrome or Edge.';
    micBtn.style.opacity = '0.35';
    micBtn.style.cursor = 'not-allowed';
  } else {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-CA';
    recognition.continuous = true;
    recognition.interimResults = true;
    let listening = false;

    recognition.onresult = (event) => {
      let final = '', interim = '';
      for (let i = 0; i < event.results.length; i++) {
        if (event.results[i].isFinal) final += event.results[i][0].transcript;
        else interim += event.results[i][0].transcript;
      }
      input.value = final + interim;
    };

    recognition.onerror = (event) => {
      if (event.error === 'not-allowed') {
        micStatus.textContent = 'Microphone access denied. Please allow mic access in browser settings.';
        micStatus.style.display = 'block';
      }
      stopListening();
    };

    recognition.onend = () => { if (listening) recognition.start(); };

    function startListening() {
      listening = true;
      input.value = '';
      micBtn.style.background = '#fee2e2';
      micBtn.style.borderColor = '#ef4444';
      micBtn.textContent = String.fromCodePoint(0x23F9, 0xFE0F);
      micStatus.style.display = 'block';
      recognition.start();
    }

    function stopListening() {
      listening = false;
      recognition.stop();
      micBtn.style.background = 'var(--warm)';
      micBtn.style.borderColor = 'var(--warm-dark)';
      micBtn.textContent = String.fromCodePoint(0x1F3A4);
      micStatus.style.display = 'none';
      if (input.value.trim()) sendMessage();
    }

    micBtn.addEventListener('click', () => { if (listening) stopListening(); else startListening(); });
  }
}

// ── ASK THE TRAINER PANEL ──
function renderTrainerPanel(scenario) {
  return `
    <div style="margin-top:2rem;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem;">
        <div style="width:36px;height:36px;background:var(--feedback-bg);border:1.5px solid var(--feedback-border);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;">🎓</div>
        <div>
          <div style="font-weight:600;font-size:0.95rem;">Ask the trainer</div>
          <div style="font-size:12.5px;color:var(--ink-light);">Ask any "what if" or follow-up question about this scenario</div>
        </div>
      </div>

      <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);overflow:hidden;">
        <div id="trainer-messages" style="padding:1.25rem;display:flex;flex-direction:column;gap:12px;min-height:80px;max-height:420px;overflow-y:auto;">
          <div style="font-size:13.5px;color:var(--ink-light);font-style:italic;text-align:center;padding:0.5rem 0;">
            Ask anything about this scenario — "what if the client refuses?", "what if we can't accommodate overnight?", "how do I handle it if they get angry?"
          </div>
        </div>
        <div style="display:flex;gap:8px;padding:12px 16px;border-top:1px solid var(--warm-mid);">
          <button id="trainer-mic-btn" title="Speak your question" style="height:44px;width:44px;flex-shrink:0;background:var(--warm);border:1.5px solid var(--warm-dark);border-radius:8px;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;">🎤</button>
          <textarea id="trainer-input" placeholder="Type or speak your question…" rows="2"
            style="flex:1;resize:none;height:44px;padding:10px 12px;font-size:14px;line-height:1.4;border-radius:8px;"></textarea>
          <button class="send-btn" id="trainer-send-btn" style="height:44px;">Ask</button>
        </div>
        <div id="trainer-mic-status" style="display:none;font-size:12px;color:var(--ink-light);padding:4px 16px 8px;background:white;">🔴 Listening… speak your question, then click the mic again to stop</div>
      </div>

      <div id="trainer-suggestions" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">
        ${getSuggestions(scenario).map(s =>
          `<button class="btn-ghost trainer-suggestion" style="font-size:12.5px;padding:5px 12px;">${s}</button>`
        ).join('')}
      </div>
    </div>
  `;
}

function getSuggestions(scenario) {
  const base = [
    "What if the client gets angry or raises their voice?",
    "What if I don't know the answer to their question?",
    "When should I involve a manager?"
  ];
  const categoryExtras = {
    'bad-news': ["How do I end the conversation when they're still upset?", "What if they blame the clinic?"],
    'difficult-clients': ["What if they threaten to leave a bad review?", "When is it okay to end a call?"],
    'costs': ["What payment plans do most clinics offer?", "What if they simply can't pay at all?"],
    'follow-up': ["What if there's no answer when I call?", "How many times should we follow up?"],
    'scheduling': ["What counts as a true emergency vs urgent?", "What if we're fully booked all week?"]
  };
  const extras = categoryExtras[scenario.category] || [];
  return [...extras.slice(0,2), base[0]];
}

let trainerHistory = [];

function setupTrainerPanel(scenario) {
  trainerHistory = [];
  const input = document.getElementById('trainer-input');
  const sendBtn = document.getElementById('trainer-send-btn');
  const messagesEl = document.getElementById('trainer-messages');

  async function askTrainer(question) {
    if (!question.trim()) return;
    input.value = '';
    sendBtn.disabled = true;

    // Hide placeholder
    const placeholder = messagesEl.querySelector('div[style*="italic"]');
    if (placeholder) placeholder.remove();

    // User question bubble
    const qBubble = document.createElement('div');
    qBubble.style.cssText = 'background:var(--staff-bg);color:white;padding:10px 14px;border-radius:14px;border-bottom-right-radius:4px;align-self:flex-end;max-width:85%;font-size:14px;line-height:1.5;';
    qBubble.textContent = question;
    messagesEl.appendChild(qBubble);

    // Loading
    const loadingEl = document.createElement('div');
    loadingEl.style.cssText = 'background:var(--warm);padding:10px 14px;border-radius:14px;border-bottom-left-radius:4px;max-width:85%;font-size:14px;';
    loadingEl.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div>';
    messagesEl.appendChild(loadingEl);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    try {
      const answer = await getTrainerAnswer(scenario, question, trainerHistory);
      loadingEl.remove();

      const aBubble = document.createElement('div');
      aBubble.style.cssText = 'background:var(--feedback-bg);border:1.5px solid var(--feedback-border);padding:12px 16px;border-radius:14px;border-bottom-left-radius:4px;max-width:90%;font-size:14px;line-height:1.65;color:var(--feedback-text);';
      aBubble.innerHTML = `<div style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--tip-text);margin-bottom:6px;">🎓 Trainer</div>${answer.replace(/\n/g, '<br>')}`;
      messagesEl.appendChild(aBubble);

      trainerHistory.push({ role: 'user', content: question });
      trainerHistory.push({ role: 'assistant', content: answer });
    } catch (err) {
      loadingEl.textContent = 'Error: ' + err.message;
    }

    sendBtn.disabled = false;
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  sendBtn.addEventListener('click', () => askTrainer(input.value));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); askTrainer(input.value); }
  });

  document.querySelectorAll('.trainer-suggestion').forEach(btn => {
    btn.addEventListener('click', () => askTrainer(btn.textContent));
  });

  // Trainer mic button
  const trainerMicBtn = document.getElementById('trainer-mic-btn');
  const trainerMicStatus = document.getElementById('trainer-mic-status');
  const SpeechRecognitionT = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognitionT) {
    trainerMicBtn.title = 'Voice input not supported here. Try Chrome or Edge.';
    trainerMicBtn.style.opacity = '0.35';
    trainerMicBtn.style.cursor = 'not-allowed';
  } else {
    const trainerRecognition = new SpeechRecognitionT();
    trainerRecognition.lang = 'en-CA';
    trainerRecognition.continuous = true;
    trainerRecognition.interimResults = true;
    let trainerListening = false;

    trainerRecognition.onresult = (event) => {
      let final = '', interim = '';
      for (let i = 0; i < event.results.length; i++) {
        if (event.results[i].isFinal) final += event.results[i][0].transcript;
        else interim += event.results[i][0].transcript;
      }
      input.value = final + interim;
    };

    trainerRecognition.onerror = (event) => {
      if (event.error === 'not-allowed') {
        trainerMicStatus.textContent = 'Microphone access denied. Please allow mic access in browser settings.';
        trainerMicStatus.style.display = 'block';
      }
      stopTrainerListening();
    };

    trainerRecognition.onend = () => { if (trainerListening) trainerRecognition.start(); };

    function startTrainerListening() {
      trainerListening = true;
      input.value = '';
      trainerMicBtn.style.background = '#fee2e2';
      trainerMicBtn.style.borderColor = '#ef4444';
      trainerMicBtn.textContent = String.fromCodePoint(0x23F9, 0xFE0F);
      trainerMicStatus.style.display = 'block';
      trainerRecognition.start();
    }

    function stopTrainerListening() {
      trainerListening = false;
      trainerRecognition.stop();
      trainerMicBtn.style.background = 'var(--warm)';
      trainerMicBtn.style.borderColor = 'var(--warm-dark)';
      trainerMicBtn.textContent = String.fromCodePoint(0x1F3A4);
      trainerMicStatus.style.display = 'none';
      if (input.value.trim()) askTrainer(input.value);
    }

    trainerMicBtn.addEventListener('click', () => {
      if (trainerListening) stopTrainerListening();
      else startTrainerListening();
    });
  }
}
