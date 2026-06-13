import { triageCategories, triageTrees, OUTCOMES, triageQuizzes } from '../data/triage.js';
import { triageReference } from '../data/triageReference.js';
import { nav, setupHamburger } from './home.js';
import { markComplete } from '../lib/progress.js';
import { updateBadgeStat, awardBadgesAndCelebrate, showConfetti } from '../lib/gamification.js';

const TOXINS_REF = {
    askFirst: "What did they eat/get into, and how much? How long ago? How much do they weigh? Are they showing any symptoms already? Do you still have the packaging?",
    rows: [
      { sign: "Chocolate — any amount in a small dog, or large amount in any dog", outcome: "EMERGENCY", note: "Theobromine is the toxic compound. Dark chocolate and baking chocolate are far more dangerous than milk chocolate. Dose matters — a small dog eating dark chocolate is a genuine emergency. Inducing vomiting is most effective within 1–2 hours of ingestion." },
      { sign: "Chocolate — small amount of milk chocolate in a large dog, asymptomatic", outcome: "URGENT", note: "Likely low risk but warrants same-day assessment to calculate dose and advise. Signs include vomiting, diarrhoea, hyperactivity, tremors, seizures." },
      { sign: "Marijuana / cannabis — any ingestion", outcome: "URGENT", note: "Dogs are more sensitive than humans. Signs include ataxia, dilated pupils, urinary incontinence, bradycardia, hypothermia, and occasionally seizures. Rarely fatal but can be very distressing. Edibles (especially with xylitol or chocolate) are more dangerous." },
      { sign: "Antifreeze / ethylene glycol — any suspected ingestion", outcome: "EMERGENCY", note: "Extremely toxic — causes acute kidney failure. Treatment is only effective if given within hours of ingestion. Even small amounts (a teaspoon in cats, a tablespoon in small dogs) can be fatal. Do not wait for symptoms." },
      { sign: "Grapes or raisins — any amount, any size dog", outcome: "EMERGENCY", note: "No safe dose is established. Some dogs develop acute kidney failure after small amounts; others appear unaffected by larger amounts. Mechanism is unknown. Always treat as emergency. Includes grape juice, currants, sultanas, raisins in baked goods." },
      { sign: "Onions or garlic — large amount or repeated exposure", outcome: "URGENT", note: "Causes Heinz body anaemia (destruction of red blood cells). Single small exposure unlikely to cause clinical illness. Powdered forms (garlic powder, onion soup mix) are more concentrated and more dangerous. Signs may be delayed 2–5 days. Cats are more sensitive than dogs." },
      { sign: "Tylenol / acetaminophen / paracetamol — cats (any amount)", outcome: "EMERGENCY", note: "CATS ONLY. Cats cannot metabolise acetaminophen. Even a fraction of a human tablet can cause methhaemoglobinaemia, liver failure, and death. Gums may turn brown or grey. Treat as emergency regardless of amount." },
      { sign: "Tylenol / acetaminophen / paracetamol — dogs", outcome: "URGENT", note: "Dogs can metabolise small amounts but high doses cause liver damage. Dose-dependent. Assess urgency based on weight and amount ingested." },
      { sign: "Ibuprofen / NSAIDs (Advil, Motrin, Aleve) — any ingestion", outcome: "EMERGENCY", note: "Causes GI ulceration and acute kidney failure. No safe dose in dogs or cats — any ingestion warrants emergency assessment. Signs include vomiting (often with blood), abdominal pain, lethargy, decreased urination." },
      { sign: "Easter lily / Tiger lily / Day lily — cats (any part, any amount)", outcome: "EMERGENCY", note: "CATS ONLY. True lilies (Lilium and Hemerocallis species) cause acute kidney failure in cats. Even small amounts of pollen, leaves, or water from the vase can be fatal. Dogs are not affected. Other plants called 'lily' (peace lily, calla lily) cause different but less severe signs." },
      { sign: "Fertilizer — ingestion of granules or concentrated product", outcome: "URGENT", note: "Most granular fertilizers cause GI irritation only. However, iron-containing fertilizers can cause iron toxicity (vomiting, diarrhoea, shock). Bone/blood meal fertilizers are especially attractive to dogs and can cause pancreatitis or GI obstruction in large amounts." },
      { sign: "Bone meal / blood meal — large ingestion", outcome: "URGENT", note: "Highly attractive to dogs. Can cause GI obstruction if consumed in large quantities as it forms a cement-like mass in the stomach. Also often contains iron. Any significant ingestion warrants assessment." },
      { sign: "Sand impaction — dog that has been playing on beach, now vomiting/not passing stool", outcome: "URGENT", note: "Dogs that eat sand at the beach can develop sand impaction — a firm mass of sand in the intestine causing obstruction. Signs develop over hours to days: vomiting, lethargy, abdominal pain, no faeces. X-rays confirm diagnosis. Can require surgery." },
      { sign: "Blue-green algae (cyanobacteria) — any exposure, swimming or drinking", outcome: "EMERGENCY", note: "Cyanotoxins cause rapid, severe, and often fatal liver failure and/or neurological signs. Onset can be within minutes to hours. Signs include vomiting, weakness, seizures, collapse. There is no antidote. Found in still or slow-moving fresh water in warm weather, especially late summer. Blooms look like green or blue-green paint on the water surface." },
      { sign: "Mushrooms — unknown species ingested", outcome: "EMERGENCY", note: "Always treat as emergency if species is unknown — some mushrooms (Amanita species) cause fatal liver failure with delayed onset (6–24 hours after ingestion). Even if the animal seems fine, do not wait for symptoms. If possible, photograph or bring a sample of the mushroom. Toxic species are common in BC forests." },
      { sign: "Xylitol (sugar-free gum, some peanut butters, sugar-free products)", outcome: "EMERGENCY", note: "Causes rapid hypoglycaemia and potentially liver failure in dogs. Check labels of sugar-free products, gum, some vitamins, and peanut butter. Cats appear less sensitive but still treat with caution. Signs include vomiting, weakness, collapse, seizures." },
      { sign: "Rodenticide (rat/mouse poison) — any ingestion", outcome: "EMERGENCY", note: "Most common rodenticides are anticoagulants (cause internal bleeding, delayed onset 3–7 days) or newer neurotoxic types (bromethalin — causes cerebral edema, no antidote). Always check the type — packaging is important. Anticoagulant rodenticide has an antidote (vitamin K) but must be started promptly." },
      { sign: "Slug bait / metaldehyde pellets — any ingestion", outcome: "EMERGENCY", note: "Metaldehyde causes rapid onset of severe muscle tremors, hyperthermia, and seizures. Often fatal if untreated. Blue/green pellets are very attractive to dogs. Even small amounts relative to body weight are dangerous. No antidote — treatment is supportive. Time critical." },
      { sign: "Compost or mouldy food — ingestion", outcome: "URGENT", note: "Mouldy compost contains mycotoxins (tremorgenic toxins) produced by fungi. Causes rapid onset muscle tremors, incoordination, hyperthermia, and seizures. Common and often underestimated. Dogs are attracted to compost bins. Any tremors after compost exposure = emergency." },
      { sign: "Rhododendron or azalea — any part ingested", outcome: "URGENT", note: "Grayanotoxins cause vomiting, hypersalivation, weakness, bradycardia, and low blood pressure. Can cause cardiac arrhythmias in significant ingestions. Very common garden plant in Victoria. Cats and dogs both affected." },
      { sign: "Xylitol — sugar-free gum, some peanut butters, vitamins, baked goods", outcome: "EMERGENCY", note: "Causes rapid profound hypoglycaemia and potentially acute liver failure in dogs. Check labels of any sugar-free products. Symptoms: vomiting, weakness, collapse, seizures — can develop within 30 minutes. Cats appear less sensitive but treat with caution regardless." },
      { sign: "Battery — chewed or punctured (any type)", outcome: "URGENT", note: "Alkaline batteries cause chemical burns to the mouth and GI tract from leaking alkali. Lithium coin/button batteries are the most dangerous — can cause severe electrical burns and tissue necrosis if lodged in the esophagus. X-ray to locate. Do not induce vomiting." },
      { sign: "Zinc ingestion — pennies, zinc oxide cream, zinc supplements", outcome: "URGENT", note: "Zinc causes haemolytic anaemia (destruction of red blood cells), vomiting, and lethargy. Canadian pennies minted after 1997 contain zinc. Zinc oxide creams (nappy rash cream, some sunscreens) are a common source. Signs may be delayed 12–24 hours." },
      { sign: "Recreational drugs — cocaine, methamphetamine, MDMA, opioids (any exposure)", outcome: "EMERGENCY", note: "Stimulants (cocaine, meth, MDMA) cause hyperthermia, tachycardia, hypertension, tremors, and seizures. Opioids cause sedation, respiratory depression, and pinpoint pupils — naloxone may be used. Approach the conversation non-judgementally: the owner needs to disclose what the substance was for effective treatment. Reassure them you are focused on the animal." },
      { sign: "Permethrin (some dog flea products, e.g. Advantix) — applied to or contacted by a cat", outcome: "EMERGENCY", note: "CATS ONLY. Cats cannot metabolise permethrin. Causes muscle tremors, hypersalivation, seizures, and death. Can occur from direct application or from contact with a recently treated dog. Wash the cat immediately with washing-up liquid and seek emergency treatment. Time-critical." },
    ]
  };

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
  const ref = TOXINS_REF;

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
