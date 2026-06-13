import { triageCategories, triageTrees, OUTCOMES, triageQuizzes } from '../data/triage.js';
import { triageReference } from '../data/triageReference.js?v=2';
import { nav, setupHamburger } from './home.js';
import { markComplete } from '../lib/progress.js';
import { updateBadgeStat, awardBadgesAndCelebrate, showConfetti } from '../lib/gamification.js';

export function renderTriageHome(container, navigate) {
  container.innerHTML = `
    ${nav('/triage', navigate)}
    <div class="page-content">
      <h2 style="margin-bottom:0.5rem;">Triage decision trees</h2>
      <p style="color:var(--ink-mid);margin-bottom:0.5rem;">Work through each symptom category to reach a triage outcome. These trees help you ask the right questions — the clinical team always makes the final call.</p>
      <div style="background:#fef9e7;border:1px solid #f0c84a;border-radius:var(--radius);padding:10px 14px;font-size:13.5px;color:#7a6200;margin-bottom:2rem;">
        ⚠️ <strong>Important:</strong> These trees are a training guide. Always escalate to a vet or technician when you are unsure. When in doubt, treat as more urgent.
      </div>

      <p class="section-label">Choose a symptom category</p>
      <div class="card-grid">
        ${triageCategories.map(cat => `
          <div class="module-card" data-triage="${cat.id}" style="cursor:pointer;">
            <div class="module-icon" style="font-size:1.6rem;">${cat.icon}</div>
            <h3 style="font-size:1rem;">${cat.label}</h3>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  setupHamburger();
  container.querySelectorAll('[data-triage]').forEach(card => {
    card.addEventListener('click', () => navigate('/triage/' + card.dataset.triage));
  });
}

export function renderTriageTree(container, navigate, categoryId) {
  // Toxins has no decision tree — go straight to reference
  if (categoryId === 'toxins') {
    renderToxinsPage(container, navigate);
    return;
  }
  // Check for tab in URL e.g. /triage/vomiting?tab=reference
  const params = new URLSearchParams(window.location.search);
  const initialTab = params.get('tab') === 'reference' ? 'reference' : 'tree';
  const tree = triageTrees[categoryId];
  const catMeta = triageCategories.find(c => c.id === categoryId);
  if (!tree || !catMeta) { navigate('/triage'); return; }

  let history = [];
  let currentNode = tree.start;
  let outcome = null;
  let currentTab = initialTab;

  function render() {
    window.scrollTo(0, 0);
    const node = tree.nodes[currentNode];

    container.innerHTML = `
      ${nav('/triage', navigate)}
      <div class="scenario-layout">
        <div class="breadcrumb">
          <a href="#/triage">Triage</a> › ${catMeta.label}
        </div>

        <div style="display:flex;align-items:center;gap:12px;margin-bottom:0.5rem;">
          <div style="width:44px;height:44px;background:var(--warm);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">${catMeta.icon}</div>
          <h2 style="font-size:1.4rem;">${catMeta.label}</h2>
        </div>

        <p style="font-size:13px;color:var(--ink-light);margin-bottom:1.25rem;background:var(--warm);padding:8px 12px;border-radius:8px;">${tree.disclaimer}</p>

        <div style="display:flex;gap:4px;background:var(--warm);border:1px solid var(--warm-dark);border-radius:var(--radius);padding:4px;margin-bottom:1.5rem;">
          <button id="tab-tree" style="flex:1;padding:7px 12px;border-radius:8px;font-size:13.5px;font-weight:500;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;background:${currentTab==='tree'?'white':'none'};color:${currentTab==='tree'?'var(--ink)':'var(--ink-mid)'};box-shadow:${currentTab==='tree'?'var(--shadow-sm)':'none'};">🌳 Decision tree</button>
          <button id="tab-ref" style="flex:1;padding:7px 12px;border-radius:8px;font-size:13.5px;font-weight:500;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;background:${currentTab==='reference'?'white':'none'};color:${currentTab==='reference'?'var(--ink)':'var(--ink-mid)'};box-shadow:${currentTab==='reference'?'var(--shadow-sm)':'none'};">📋 Quick reference</button>
          ${triageQuizzes[categoryId] ? `<button id="tab-quiz" style="flex:1;padding:7px 12px;border-radius:8px;font-size:13.5px;font-weight:500;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;background:${currentTab==='quiz'?'white':'none'};color:${currentTab==='quiz'?'var(--ink)':'var(--ink-mid)'};box-shadow:${currentTab==='quiz'?'var(--shadow-sm)':'none'};">✅ Quiz</button>` : ''}
        </div>

        ${currentTab === 'tree' ? `
          ${history.length > 0 ? renderHistory() : ''}
          ${outcome ? renderOutcome(outcome) : renderNode(node)}
          <div style="display:flex;gap:8px;margin-top:2rem;flex-wrap:wrap;">
            ${history.length > 0 ? `<button class="btn-secondary" id="back-node-btn">← Back</button>` : ''}
            ${outcome ? `<button class="btn-ghost" id="restart-btn">🔄 Start again</button>` : ''}
            <button class="btn-ghost" id="back-triage-btn">← All categories</button>
          </div>
        ` : currentTab === 'quiz' ? `
          <div id="triage-quiz-mount"></div>
          <div style="margin-top:1rem;">
            <button class="btn-ghost" id="back-triage-btn">← All categories</button>
          </div>
        ` : `
          ${renderReferenceTable(categoryId)}
          <div style="margin-top:2rem;">
            <button class="btn-ghost" id="back-triage-btn">← All categories</button>
          </div>
        `}
      </div>
    `;

    // Attach yes/no handlers
    container.querySelectorAll('[data-answer]').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(btn.dataset.answer, node));
    });

    // Attach option handlers
    container.querySelectorAll('[data-option]').forEach(btn => {
      btn.addEventListener('click', () => handleOption(parseInt(btn.dataset.option), node));
    });

    setupHamburger();
    document.getElementById('back-triage-btn')?.addEventListener('click', () => navigate('/triage'));
    document.getElementById('tab-tree')?.addEventListener('click', () => { currentTab = 'tree'; render(); });
    document.getElementById('tab-ref')?.addEventListener('click', () => { currentTab = 'reference'; render(); });
    document.getElementById('tab-quiz')?.addEventListener('click', () => { currentTab = 'quiz'; render(); renderTriageQuiz(categoryId, catMeta); });
    if (currentTab === 'quiz') renderTriageQuiz(categoryId, catMeta);
    document.getElementById('back-node-btn')?.addEventListener('click', () => {
      if (history.length > 0) {
        currentNode = history.pop();
        outcome = null;
        render();
      }
    });
    document.getElementById('restart-btn')?.addEventListener('click', () => {
      history = [];
      currentNode = tree.start;
      outcome = null;
      render();
    });
  }

  function handleAnswer(answer, node) {
    history.push(currentNode);
    const next = answer === 'yes' ? node.yes : node.no;
    processNext(next);
  }

  function handleOption(idx, node) {
    history.push(currentNode);
    const next = node.options[idx].next;
    processNext(next);
  }

  function processNext(next) {
    if (typeof next === 'string') {
      currentNode = next;
      outcome = null;
    } else if (next && next.outcome) {
      outcome = { ...OUTCOMES[next.outcome], note: next.note, homecare: next.homecare };
      markComplete('triage-' + categoryId, 'completed');
    }
    render();
  }

  function renderHistory() {
    if (history.length === 0) return '';
    return `
      <div style="margin-bottom:1.5rem;">
        ${history.map(nodeId => {
          const n = tree.nodes[nodeId];
          if (!n) return '';
          return `<div style="font-size:13px;color:var(--ink-light);padding:6px 0;border-bottom:1px solid var(--warm-mid);display:flex;gap:8px;align-items:flex-start;">
            <span style="color:var(--ink-light);flex-shrink:0;">✓</span>
            <span>${n.question}</span>
          </div>`;
        }).join('')}
      </div>
    `;
  }

  function renderNode(node) {
    if (!node) return '';
    const isOptions = !!node.options;

    return `
      <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.75rem;box-shadow:var(--shadow-sm);">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-light);margin-bottom:0.75rem;">Question ${history.length + 1}</div>
        <p style="font-size:1.05rem;font-weight:500;color:var(--ink);line-height:1.5;margin-bottom:${node.hint ? '1rem' : '1.5rem'};">${node.question}</p>
        ${node.hint ? `<div style="font-size:13px;color:var(--ink-light);background:var(--warm);border-radius:8px;padding:8px 12px;margin-bottom:1.5rem;line-height:1.5;"><strong>💬 Ask:</strong> ${node.hint}</div>` : ''}

        ${isOptions ? `
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${node.options.map((opt, i) => `
              <button data-option="${i}" style="
                text-align:left;background:white;border:1.5px solid var(--warm-dark);
                border-radius:var(--radius);padding:12px 16px;font-size:14.5px;
                color:var(--ink);cursor:pointer;transition:all 0.15s;
                font-family:'DM Sans',sans-serif;
              " onmouseover="this.style.borderColor='var(--ink)';this.style.background='var(--warm)'"
                onmouseout="this.style.borderColor='var(--warm-dark)';this.style.background='white'">
                ${opt.label}
              </button>
            `).join('')}
          </div>
        ` : `
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <button data-answer="yes" style="
              flex:1;min-width:120px;padding:13px 24px;background:var(--ink);color:white;
              border:none;border-radius:var(--radius);font-size:15px;font-weight:600;
              cursor:pointer;font-family:'DM Sans',sans-serif;transition:opacity 0.15s;
            " onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
              Yes
            </button>
            <button data-answer="no" style="
              flex:1;min-width:120px;padding:13px 24px;background:white;color:var(--ink);
              border:1.5px solid var(--ink);border-radius:var(--radius);font-size:15px;font-weight:600;
              cursor:pointer;font-family:'DM Sans',sans-serif;transition:all 0.15s;
            " onmouseover="this.style.background='var(--warm)'" onmouseout="this.style.background='white'">
              No
            </button>
          </div>
        `}
      </div>
    `;
  }

  function renderOutcome(o) {
    return `
      <div style="background:${o.bg};border:2px solid ${o.border};border-radius:var(--radius-lg);padding:1.75rem;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem;">
          <span style="font-size:2rem;">${o.icon}</span>
          <div>
            <div style="font-size:1.2rem;font-weight:700;color:${o.color};font-family:'DM Sans',sans-serif;">${o.label}</div>
            <div style="font-size:13.5px;color:${o.color};opacity:0.8;">${o.sublabel}</div>
          </div>
        </div>

        <div style="background:white;border-radius:var(--radius);padding:1rem 1.25rem;margin-bottom:1rem;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-light);margin-bottom:6px;">What to do</div>
          <p style="font-size:14.5px;color:var(--ink);line-height:1.65;">${o.instruction}</p>
        </div>

        ${o.note ? `
          <div style="font-size:13.5px;color:var(--ink-mid);line-height:1.6;padding:10px 14px;background:rgba(255,255,255,0.6);border-radius:8px;margin-bottom:${o.homecare ? '1rem' : '0'};">
            <strong>Clinical note:</strong> ${o.note}
          </div>
        ` : ''}

        ${o.homecare ? `
          <div style="background:white;border-radius:var(--radius);padding:1rem 1.25rem;margin-top:0.5rem;">
            <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-light);margin-bottom:6px;">Home care advice for client</div>
            <p style="font-size:14px;color:var(--ink);line-height:1.65;">${o.homecare}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  render();
}

function renderReferenceTable(categoryId) {
  const ref = triageReference[categoryId];
  if (!ref) return '<p style="color:var(--ink-light);padding:1rem 0;">No reference table available for this category.</p>';

  const PILL = {
    EMERGENCY: { label: 'Emergency',        bg: '#fef2f2', color: '#991b1b' },
    URGENT:    { label: 'Same day',          bg: '#fffbeb', color: '#92400e' },
    SOON:      { label: 'Within 48 hrs',     bg: '#eff6ff', color: '#1e40af' },
    ROUTINE:   { label: 'Routine',           bg: '#f0fdf4', color: '#166534' },
    MONITOR:   { label: 'Monitor at home',   bg: '#f9fafb', color: '#374151' },
  };

  const legend = Object.values(PILL).map(p =>
    `<span style="display:inline-flex;align-items:center;gap:5px;font-size:12px;color:${p.color};">
      <span style="width:9px;height:9px;border-radius:50%;background:${p.color};opacity:0.7;flex-shrink:0;"></span>${p.label}
    </span>`
  ).join('');

  const rows = ref.rows.map(r => {
    const p = PILL[r.outcome] || PILL.MONITOR;
    return `<tr style="border-bottom:1px solid var(--warm-mid);">
      <td style="padding:10px 12px;font-size:14px;color:var(--ink);font-weight:500;vertical-align:top;width:35%;">${r.sign}</td>
      <td style="padding:10px 12px;vertical-align:top;width:18%;">
        <span style="display:inline-block;font-size:11.5px;font-weight:600;padding:3px 10px;border-radius:20px;background:${p.bg};color:${p.color};white-space:nowrap;">${p.label}</span>
      </td>
      <td style="padding:10px 12px;font-size:13px;color:var(--ink-mid);vertical-align:top;line-height:1.55;">${r.note}</td>
    </tr>`;
  }).join('');

  return `
    <div style="background:var(--warm);border-radius:var(--radius);padding:10px 14px;font-size:13px;color:var(--ink-mid);margin-bottom:1.25rem;line-height:1.6;">
      <strong style="color:var(--ink);">Key questions to ask:</strong> ${ref.askFirst}
    </div>

    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:1rem;">${legend}</div>

    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Sans',sans-serif;">
        <thead>
          <tr style="border-bottom:2px solid var(--warm-dark);">
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);padding:6px 12px;width:35%;">Sign or history</th>
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);padding:6px 12px;width:18%;">Outcome</th>
            <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);padding:6px 12px;">Notes</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function renderToxinsPage(container, navigate) {
  const ref = triageReference['toxins'];
  if (!ref) { navigate('/triage'); return; }

  const cat = { id: 'toxins', label: 'Toxins & poisons', icon: '☠️' };

  const PILL = {
    EMERGENCY: { label: 'Emergency',        bg: '#fef2f2', color: '#991b1b' },
    URGENT:    { label: 'Same day',          bg: '#fffbeb', color: '#92400e' },
    SOON:      { label: 'Within 48 hrs',     bg: '#eff6ff', color: '#1e40af' },
    ROUTINE:   { label: 'Routine',           bg: '#f0fdf4', color: '#166534' },
    MONITOR:   { label: 'Monitor at home',   bg: '#f9fafb', color: '#374151' },
  };

  const rows = ref.rows.map((r, i) => {
    const p = PILL[r.outcome] || PILL.MONITOR;
    const iscat = r.note.includes('CATS ONLY') || r.note.includes('cats only');
    const isdog = r.note.includes('dogs only') || r.note.includes('DOGS ONLY');
    const badge = iscat
      ? '<span style="font-size:10px;font-weight:700;padding:1px 6px;border-radius:10px;background:#f3e8ff;color:#6b21a8;margin-left:6px;">Cats</span>'
      : isdog
      ? '<span style="font-size:10px;font-weight:700;padding:1px 6px;border-radius:10px;background:#dbeafe;color:#1e40af;margin-left:6px;">Dogs</span>'
      : '';
    return `<tr style="border-bottom:1px solid var(--warm-mid);background:${i%2===0?'white':'var(--warm)'};">
      <td style="padding:10px 12px;font-size:13.5px;color:var(--ink);font-weight:500;vertical-align:top;width:28%;">${r.sign}${badge}</td>
      <td style="padding:10px 12px;vertical-align:top;width:17%;">
        <span style="display:inline-block;font-size:12px;font-weight:600;padding:3px 10px;border-radius:20px;background:${p.bg};color:${p.color};white-space:nowrap;">${p.label}</span>
      </td>
      <td style="padding:10px 12px;font-size:13px;color:var(--ink-mid);vertical-align:top;line-height:1.55;">${r.note}</td>
    </tr>`;
  }).join('');

  container.innerHTML = `
    ${nav('/triage', navigate)}
    <div class="page-content">
      <div class="breadcrumb"><a href="#/triage">Triage</a> › ${cat.label}</div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem;">
        <div style="width:44px;height:44px;background:var(--warm);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">${cat.icon}</div>
        <h2 style="margin:0;">${cat.label}</h2>
      </div>

      <div style="background:#fef9e7;border:1.5px solid #fde047;border-radius:var(--radius);padding:10px 14px;font-size:13px;color:#713f12;margin-bottom:1.25rem;">
        ⚠️ <strong>When in doubt, treat as emergency.</strong> Many toxins have delayed onset — an animal that seems fine now may deteriorate rapidly. Always ask what was ingested, how much, and how long ago, and escalate to the clinical team immediately.
      </div>

      <div style="display:flex;gap:4px;background:var(--warm);border:1px solid var(--warm-dark);border-radius:var(--radius);padding:4px;margin-bottom:1.25rem;" id="toxins-tabs">
        <button id="toxins-ref-btn" style="flex:1;padding:7px 12px;border-radius:8px;font-size:13.5px;font-weight:500;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;background:white;color:var(--ink);box-shadow:var(--shadow-sm);">📋 Quick reference</button>
        <button id="toxins-quiz-btn" style="flex:1;padding:7px 12px;border-radius:8px;font-size:13.5px;font-weight:500;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;background:none;color:var(--ink-mid);">✅ Quiz</button>
      </div>
      <div id="toxins-content">
      <div style="background:var(--warm);border-radius:var(--radius);padding:10px 14px;font-size:13px;color:var(--ink-mid);margin-bottom:1.25rem;">
        <strong style="color:var(--ink);">Key questions to ask:</strong> ${ref.askFirst}
      </div>

      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:1rem;">
        ${Object.values(PILL).map(p => `<span style="display:inline-flex;align-items:center;gap:5px;font-size:12px;color:${p.color};">
          <span style="width:9px;height:9px;border-radius:50%;background:${p.color};opacity:0.7;flex-shrink:0;"></span>${p.label}
        </span>`).join('')}
      </div>

      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;font-family:'DM Sans',sans-serif;">
          <thead>
            <tr style="border-bottom:2px solid var(--warm-dark);">
              <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);padding:6px 12px;width:28%;">Toxin / situation</th>
              <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);padding:6px 12px;width:17%;">Urgency</th>
              <th style="text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:var(--ink-light);padding:6px 12px;">Notes</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>

      <div style="margin-top:1.5rem;background:var(--warm);border-radius:var(--radius);padding:10px 14px;font-size:12.5px;color:var(--ink-mid);">
        🐾 <strong>Cats / Dogs badges</strong> indicate species-specific concerns. Unmarked rows apply to both species unless the note specifies otherwise.
      </div>

      </div><!-- end toxins-content -->
      <div id="toxins-quiz-mount" style="display:none;"></div>
      <div style="margin-top:1rem;">
        <button class="btn-ghost" id="back-triage-btn">← All categories</button>
      </div>
    </div>
  `;

  setupHamburger();
  document.getElementById('back-triage-btn').addEventListener('click', () => navigate('/triage'));
  document.getElementById('toxins-quiz-btn')?.addEventListener('click', () => {
    document.getElementById('toxins-content').style.display = 'none';
    document.getElementById('toxins-quiz-mount').style.display = 'block';
    document.getElementById('toxins-quiz-btn').style.background = 'white';
    document.getElementById('toxins-quiz-btn').style.boxShadow = 'var(--shadow-sm)';
    document.getElementById('toxins-ref-btn').style.background = 'none';
    document.getElementById('toxins-ref-btn').style.boxShadow = 'none';
    renderTriageQuiz('toxins', { label: 'Toxins & poisons', icon: '☠️' });
  });
  document.getElementById('toxins-ref-btn')?.addEventListener('click', () => {
    document.getElementById('toxins-content').style.display = 'block';
    document.getElementById('toxins-quiz-mount').style.display = 'none';
    document.getElementById('toxins-ref-btn').style.background = 'white';
    document.getElementById('toxins-ref-btn').style.boxShadow = 'var(--shadow-sm)';
    document.getElementById('toxins-quiz-btn').style.background = 'none';
    document.getElementById('toxins-quiz-btn').style.boxShadow = 'none';
  });
}

function renderTriageQuiz(categoryId, catMeta) {
  const questions = triageQuizzes[categoryId];
  const mount = document.getElementById('triage-quiz-mount');
  if (!questions || !mount) return;

  let qIdx = 0;
  let score = 0;
  let answered = false;

  function renderQ() {
    window.scrollTo(0, 0);
    answered = false;
    const q = questions[qIdx];
    mount.innerHTML = `
      <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:1.75rem;box-shadow:var(--shadow-sm);">
        <div style="font-size:12px;color:var(--ink-light);margin-bottom:0.5rem;">Question ${qIdx+1} of ${questions.length}</div>
        <div class="progress-bar-wrap" style="margin-bottom:1.25rem;">
          <div class="progress-bar-fill" style="width:${Math.round(qIdx/questions.length*100)}%"></div>
        </div>
        <p style="font-size:15px;font-weight:500;margin-bottom:1.25rem;line-height:1.55;">${q.q}</p>
        <div id="tq-options">
          ${q.options.map((opt, i) => `<button class="quiz-option" data-idx="${i}">${opt}</button>`).join('')}
        </div>
        <div id="tq-feedback" class="hidden"></div>
        <div id="tq-next" class="hidden" style="margin-top:1rem;">
          <button class="btn-primary" id="tq-next-btn">${qIdx < questions.length - 1 ? 'Next question →' : 'See results'}</button>
        </div>
      </div>`;

    mount.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', function() {
        if (answered) return;
        answered = true;
        const selected = parseInt(this.dataset.idx);
        mount.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
        const fb = document.getElementById('tq-feedback');
        if (selected === q.correct) {
          this.classList.add('correct');
          score++;
          fb.className = 'feedback-box feedback-correct';
          fb.innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
        } else {
          this.classList.add('incorrect');
          mount.querySelectorAll('.quiz-option')[q.correct].classList.add('correct');
          fb.className = 'feedback-box feedback-incorrect';
          fb.innerHTML = `<strong>Not quite.</strong> ${q.explanation}`;
        }
        fb.classList.remove('hidden');
        document.getElementById('tq-next').classList.remove('hidden');
        document.getElementById('tq-next-btn').addEventListener('click', () => {
          qIdx++;
          if (qIdx < questions.length) renderQ();
          else showScore();
        });
      });
    });
  }

  function showScore() {
    window.scrollTo(0, 0);
    const pct = Math.round(score / questions.length * 100);
    mount.innerHTML = `
      <div style="background:white;border:1px solid var(--warm-mid);border-radius:var(--radius-lg);padding:2rem;text-align:center;box-shadow:var(--shadow-sm);">
        <div style="font-size:3rem;font-family:'DM Serif Display',serif;color:var(--ink);">${score} / ${questions.length}</div>
        <p style="color:var(--ink-mid);margin:0.75rem 0 2rem;">
          ${pct === 100 ? 'Perfect score!' :
            pct >= 80 ? 'Great work.' :
            pct >= 60 ? 'Good effort — review the ones you missed.' :
            'Keep practising — the quick reference table is a good place to review.'}
        </p>
        <button class="btn-primary" id="tq-retry">Try again</button>
      </div>`;
    if (pct >= 80) {
      const newBadges = updateBadgeStat('triageQuizzes', 1);
      if (pct === 100) { updateBadgeStat('perfectQuizzes', 1); showConfetti(2500); }
      awardBadgesAndCelebrate(newBadges, false);
    }
    if (pct >= 80) updateBadgeStat('quizPasses', 1);
    document.getElementById('tq-retry').addEventListener('click', () => { qIdx = 0; score = 0; renderQ(); });
  }

  renderQ();
}
