import { scenarios, categories } from '../data/scenarios.js';
import { markComplete, isComplete } from '../lib/progress.js';
import { getRoleplayFeedback } from '../lib/api.js';
import { nav } from './home.js';

export function renderScenario(container, navigate, id) {
  const scenario = scenarios.find(s => s.id === id);
  if (!scenario) { navigate('/train'); return; }
  const cat = categories.find(c => c.id === scenario.category);
  const diffClass = { beginner: 'diff-beginner', intermediate: 'diff-intermediate', advanced: 'diff-advanced' }[scenario.difficulty];

  let currentMode = 'read';

  function render(mode) {
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

        <div style="margin-top:2rem;display:flex;gap:8px;">
          <button class="btn-ghost" id="back-btn">← Back to scenarios</button>
          ${getNextScenario(id) ? `<button class="btn-secondary" id="next-btn">Next scenario →</button>` : ''}
        </div>
      </div>
    `;

    // Tab switching
    container.querySelectorAll('.mode-tab').forEach(tab => {
      tab.addEventListener('click', () => render(tab.dataset.mode));
    });

    document.getElementById('back-btn').addEventListener('click', () => navigate('/train'));
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => navigate('/scenario/' + getNextScenario(id)));

    if (mode === 'read') setupRead(scenario);
    if (mode === 'quiz') setupQuiz(scenario);
    if (mode === 'roleplay') setupRoleplay(scenario);
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
    <div class="scenario-card">
      <h3>The situation</h3>
      <p style="color:var(--ink-mid);font-size:14.5px;margin-bottom:1rem;">${scenario.context}</p>
      <h3 style="margin-bottom:0.5rem;">The client says</h3>
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
    <div class="scenario-card">
      <h3>The situation</h3>
      <div class="client-message" style="margin-top:0.5rem;">"${scenario.clientMessage}"</div>
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
  container_quiz_setup(scenario);
}

function container_quiz_setup(scenario) {
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
        // Highlight the correct answer
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
    <div class="scenario-card" style="margin-bottom:1rem;">
      <h3>Your role</h3>
      <p style="font-size:14.5px;color:var(--ink-mid);margin-top:4px;">${scenario.context}</p>
    </div>

    <div class="chat-window">
      <div class="chat-header">
        <span>🎭</span>
        <span>Live role-play — respond as you would in the clinic</span>
      </div>
      <div class="chat-messages" id="chat-messages">
        <div class="chat-bubble bubble-client">"${scenario.clientMessage}"</div>
      </div>
      <div class="chat-input-row">
        <textarea id="staff-input" placeholder="Type your response as the staff member…" rows="2"></textarea>
        <button class="send-btn" id="send-btn">Send</button>
      </div>
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

    // Add staff bubble
    const staffBubble = document.createElement('div');
    staffBubble.className = 'chat-bubble bubble-staff';
    staffBubble.textContent = text;
    messagesEl.appendChild(staffBubble);

    // Loading dots
    const loadingEl = document.createElement('div');
    loadingEl.className = 'chat-bubble bubble-client';
    loadingEl.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div>';
    messagesEl.appendChild(loadingEl);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    try {
      const { clientReply, feedback } = await getRoleplayFeedback(scenario, chatHistory, text);

      loadingEl.remove();

      // Client reply
      const clientBubble = document.createElement('div');
      clientBubble.className = 'chat-bubble bubble-client';
      clientBubble.textContent = clientReply;
      messagesEl.appendChild(clientBubble);

      // Feedback
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
      loadingEl.textContent = 'Sorry, there was an error connecting to the AI. Please try again.';
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
}
