import { triageCategories, triageTrees, OUTCOMES } from '../data/triage.js';
import { nav } from './home.js';

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

  container.querySelectorAll('[data-triage]').forEach(card => {
    card.addEventListener('click', () => navigate('/triage/' + card.dataset.triage));
  });
}

export function renderTriageTree(container, navigate, categoryId) {
  const tree = triageTrees[categoryId];
  const catMeta = triageCategories.find(c => c.id === categoryId);
  if (!tree || !catMeta) { navigate('/triage'); return; }

  let history = []; // stack of node ids visited
  let currentNode = tree.start;
  let outcome = null;

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

        <p style="font-size:13px;color:var(--ink-light);margin-bottom:1.5rem;background:var(--warm);padding:8px 12px;border-radius:8px;">${tree.disclaimer}</p>

        ${history.length > 0 ? renderHistory() : ''}

        ${outcome ? renderOutcome(outcome) : renderNode(node)}

        <div style="display:flex;gap:8px;margin-top:2rem;flex-wrap:wrap;">
          ${history.length > 0 && !outcome ? `<button class="btn-ghost" id="back-node-btn">← Previous question</button>` : ''}
          ${outcome ? `<button class="btn-secondary" id="restart-btn">🔄 Start again</button>` : ''}
          <button class="btn-ghost" id="back-triage-btn">← All categories</button>
        </div>
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

    document.getElementById('back-triage-btn')?.addEventListener('click', () => navigate('/triage'));
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
