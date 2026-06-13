export const triageCategories = [
  { id: "vomiting", label: "Vomiting", icon: "🤢" },
  { id: "diarrhea", label: "Diarrhea", icon: "💧" },
  { id: "urinary", label: "Urinary issues", icon: "🚿" },
  { id: "breathing", label: "Breathing & cardiac", icon: "🫀" },
  { id: "lameness", label: "Lameness & mobility", icon: "🦮" },
  { id: "eyes", label: "Eyes", icon: "👁️" },
  { id: "wounds", label: "Wounds & trauma", icon: "🩹" },
  { id: "neuro", label: "Neurological signs", icon: "🧠" },
  { id: "lethargy", label: "Not eating / lethargy", icon: "😴" },
  { id: "toxins", label: "Toxins & poisons", icon: "☠️" }
];

// Outcome levels
export const OUTCOMES = {
  EMERGENCY: {
    id: "emergency",
    label: "Emergency",
    sublabel: "Come in immediately or go to emergency",
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fecaca",
    icon: "🚨",
    instruction: "Do not leave this animal to wait. Either bring them in immediately or direct the client to the nearest emergency clinic if you cannot accommodate them right now."
  },
  URGENT: {
    id: "urgent",
    label: "Same-day appointment",
    sublabel: "Needs to be seen today",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
    icon: "⚠️",
    instruction: "This pet should be seen today. Find a slot, speak to a vet or tech if unsure, and advise the client to monitor closely and call back if anything worsens before the appointment."
  },
  SOON: {
    id: "soon",
    label: "Appointment within 24–48 hours",
    sublabel: "Should be seen soon but not emergency",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
    icon: "📅",
    instruction: "Book an appointment within the next 1–2 days. Advise the client to monitor for worsening and to call back immediately if any emergency signs develop."
  },
  ROUTINE: {
    id: "routine",
    label: "Routine appointment",
    sublabel: "Can wait for a scheduled slot",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    icon: "📋",
    instruction: "Book a routine appointment within the next few days. Provide basic home care advice and advise the client to call back if the condition worsens or new symptoms develop."
  },
  MONITOR: {
    id: "monitor",
    label: "Monitor at home",
    sublabel: "Home care with clear review criteria",
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
    icon: "🏠",
    instruction: "Advise the client to monitor at home. Give clear instructions on what to watch for, and always tell them when to call back. Never say 'just watch it' without specific criteria."
  }
};

export const triageTrees = {

  vomiting: {
    id: "vomiting",
    disclaimer: "Remember: you are gathering information to help the clinical team triage — you are not diagnosing. When in doubt, always escalate to a vet or tech.",
    start: "v1",
    nodes: {
      v1: {
        question: "Is there any blood or dark brown material in the vomit?",
        hint: "Ask: 'Have you noticed any blood in the vomit — or any dark brown material that might look like coffee grounds?'",
        yes: "v1b",
        no: "v2"
      },
      v1b: {
        question: "How much blood, and what does it look like?",
        hint: "Ask: 'Is it a small amount — just a few flecks or streaks — or is there a significant amount? And is it bright red, or dark brown like coffee grounds?'",
        options: [
          { label: "Dark brown / coffee-ground material", next: { outcome: "EMERGENCY", note: "Coffee-ground material indicates digested blood from higher in the GI tract — a sign of significant bleeding. Needs immediate assessment." } },
          { label: "Large amount of bright red blood", next: { outcome: "EMERGENCY", note: "Significant fresh blood in vomit suggests active GI bleeding. Needs immediate assessment." } },
          { label: "Small amount — a few flecks or streaks of red", next: "v2" }
        ]
      },
      v2: {
        question: "Is the animal trying to vomit repeatedly but bringing nothing up — unproductive retching?",
        hint: "Ask: 'Is your pet straining or heaving repeatedly without producing anything?'",
        yes: { outcome: "EMERGENCY", note: "Unproductive retching in dogs — especially large or deep-chested breeds — is a red flag for bloat (GDV), which is life-threatening." },
        no: "v3"
      },
      v3: {
        question: "Does the abdomen look swollen or distended?",
        hint: "Ask: 'Does the belly look bigger or more rounded than normal?'",
        yes: { outcome: "EMERGENCY", note: "Abdominal distension combined with vomiting suggests possible GDV, obstruction, or ascites — all require urgent assessment." },
        no: "v4"
      },
      v4: {
        question: "Is the animal also showing signs of weakness, collapse, pale gums, or significant lethargy?",
        hint: "Ask: 'Is your pet able to stand and walk normally? Do the gums look pink?'",
        yes: { outcome: "EMERGENCY", note: "Systemic signs alongside vomiting suggest serious underlying illness — shock, internal bleeding, or organ failure." },
        no: "v5"
      },
      v5: {
        question: "Could the animal have eaten something toxic, a foreign object, or someone else's medication?",
        hint: "Ask: 'Could they have got into anything — plants, medications, cleaning products, or something they shouldn't have eaten?'",
        yes: { outcome: "EMERGENCY", note: "Suspected ingestion of toxins or foreign bodies requires immediate assessment. Time matters significantly with many toxins." },
        no: "v6"
      },
      v6: {
        question: "Is this a puppy or kitten under 12 weeks, or an elderly or unvaccinated animal?",
        hint: "Age and vaccination status significantly affect risk — young, old, and unvaccinated animals deteriorate faster.",
        yes: { outcome: "URGENT", note: "High-risk patients — young, elderly, or unvaccinated. Vomiting can lead to dangerous dehydration quickly in these groups." },
        no: "v7"
      },
      v7: {
        question: "How many times has the animal vomited in the last 24 hours?",
        hint: "Ask: 'Roughly how many times have they been sick since this started?'",
        options: [
          { label: "More than 5 times", next: { outcome: "URGENT", note: "Frequent vomiting risks dehydration and suggests an active underlying problem." } },
          { label: "3–5 times", next: "v8" },
          { label: "1–2 times", next: "v9" }
        ]
      },
      v8: {
        question: "Is the animal still drinking water?",
        hint: "Ask: 'Are they still interested in water, or are they refusing that too?'",
        yes: { outcome: "SOON", note: "Moderate vomiting with intact thirst — monitor closely but should be seen within 24 hours." },
        no: { outcome: "URGENT", note: "Vomiting combined with refusing water increases dehydration risk — needs same-day assessment." }
      },
      v9: {
        question: "Is the animal otherwise bright, alert, and behaving normally between episodes?",
        hint: "Ask: 'Apart from the vomiting, are they their usual self — interested in things, wanting to interact?'",
        yes: { outcome: "MONITOR", note: "1–2 vomiting episodes in an otherwise well animal — withhold food for 2–4 hours, offer small amounts of water. Call back if vomiting continues or new symptoms develop.", homecare: "Withhold food for 2–4 hours. Offer small amounts of water frequently. Reintroduce a bland diet (boiled chicken and rice) gradually. Do not give human medications. Call us back if vomiting continues after 12 hours, if they stop drinking, or if they seem unwell." },
        no: { outcome: "SOON", note: "Even occasional vomiting in an animal that seems off warrants a prompt appointment." }
      }
    }
  },

  diarrhea: {
    id: "diarrhea",
    disclaimer: "Remember: you are gathering information to help the clinical team triage — you are not diagnosing. When in doubt, always escalate to a vet or tech.",
    start: "d1",
    nodes: {
      d1: {
        question: "Is there blood in the diarrhea — either bright red or very dark/tarry?",
        hint: "Ask: 'Is there any blood in the stool? It might be bright red, or the stool might look very dark or black.'",
        yes: "d1b",
        no: "d2"
      },
      d1b: {
        question: "Is the blood dark/tarry (digested blood from higher up the gut) or bright red (fresh blood)?",
        hint: "Dark tarry stools (melaena) suggest bleeding higher in the GI tract and are more serious than small amounts of fresh blood.",
        options: [
          { label: "Dark, tarry, or black stools", next: { outcome: "EMERGENCY", note: "Melaena indicates bleeding in the upper GI tract — potentially serious. Needs immediate assessment." } },
          { label: "Small amounts of bright red blood", next: "d2" },
          { label: "Large amounts of bright red blood", next: { outcome: "EMERGENCY", note: "Significant haemorrhagic diarrhea requires urgent assessment — risk of shock and dehydration." } }
        ]
      },
      d2: {
        question: "Is the animal showing signs of weakness, collapse, pale gums, or significant lethargy?",
        hint: "Ask: 'Is your pet able to stand and get around? Do the gums look a normal pink colour?'",
        yes: { outcome: "EMERGENCY", note: "Systemic compromise alongside diarrhea — risk of shock, haemorrhagic gastroenteritis, or parvovirus." },
        no: "d3"
      },
      d3: {
        question: "Is this a puppy or kitten under 16 weeks, or an unvaccinated animal?",
        hint: "Parvovirus is a serious risk in young or unvaccinated dogs. Panleukopenia in cats. Both can deteriorate extremely rapidly.",
        yes: { outcome: "EMERGENCY", note: "Young or unvaccinated animals with diarrhea must be seen immediately — parvovirus/panleukopenia can be fatal within hours." },
        no: "d4"
      },
      d4: {
        question: "Is the animal vomiting as well as having diarrhea?",
        hint: "Combined vomiting and diarrhea significantly increases the risk of dehydration.",
        yes: "d4b",
        no: "d5"
      },
      d4b: {
        question: "How long has the vomiting and diarrhea been going on?",
        hint: "",
        options: [
          { label: "More than 24 hours", next: { outcome: "URGENT", note: "Combined vomiting and diarrhea for more than 24 hours — significant dehydration risk. Needs same-day assessment." } },
          { label: "Less than 24 hours", next: "d5" }
        ]
      },
      d5: {
        question: "How would you describe the frequency and severity?",
        hint: "Ask: 'How many times have they had diarrhea today, and is it watery or more solid?'",
        options: [
          { label: "Watery, very frequent (more than 6 times today)", next: { outcome: "URGENT", note: "High-frequency watery diarrhea — risk of significant dehydration and electrolyte imbalance." } },
          { label: "Soft/loose, 3–6 times today", next: "d6" },
          { label: "Soft stool, 1–2 times, otherwise normal", next: "d7" }
        ]
      },
      d6: {
        question: "Is the animal still drinking and eating?",
        hint: "Ask: 'Are they still interested in food and water, or have they gone off both?'",
        yes: { outcome: "SOON", note: "Moderate diarrhea with maintained appetite and thirst — monitor closely and aim for an appointment within 24 hours." },
        no: { outcome: "URGENT", note: "Diarrhea with reduced appetite and thirst — needs same-day assessment to check hydration." }
      },
      d7: {
        question: "Is the animal bright and alert, and has this only started in the last 24 hours?",
        hint: "Ask: 'Apart from the upset tummy, are they their normal selves?'",
        yes: { outcome: "MONITOR", note: "Mild, recent onset diarrhea in an otherwise well animal — often dietary. Monitor closely.", homecare: "Withhold food for 2–4 hours then offer small amounts of bland food (boiled chicken and rice). Ensure access to fresh water. Do not give human anti-diarrhoeal medications. Call us back if diarrhea continues beyond 48 hours, if blood appears, if they stop drinking, or if they seem unwell." },
        no: { outcome: "ROUTINE", note: "Ongoing or recurring loose stools in an otherwise stable animal — book a routine appointment for workup." }
      }
    }
  },

  urinary: {
    id: "urinary",
    disclaimer: "Urinary obstruction is a life-threatening emergency, especially in male cats. When in doubt, always treat as urgent.",
    start: "u1",
    nodes: {
      u1: {
        question: "Is the animal straining to urinate but producing little or no urine?",
        hint: "Ask: 'Is your pet squatting or posturing to urinate repeatedly but not producing much — or anything?'",
        yes: "u1b",
        no: "u2"
      },
      u1b: {
        question: "Is this a male cat?",
        hint: "Male cats are at very high risk of urethral obstruction — a rapidly fatal condition if untreated.",
        yes: { outcome: "EMERGENCY", note: "Male cat straining with little or no urine output — urethral obstruction until proven otherwise. This is a life-threatening emergency. Come in immediately." },
        no: { outcome: "URGENT", note: "Straining to urinate with little output in any animal is serious — possible obstruction or severe cystitis. Same-day assessment required." }
      },
      u2: {
        question: "Is there blood visible in the urine?",
        hint: "Ask: 'Have you noticed any pink, red, or brown colour to the urine?'",
        yes: "u2b",
        no: "u3"
      },
      u2b: {
        question: "Is the animal also showing signs of pain, crying out, or is the abdomen tense?",
        hint: "Ask: 'Is your pet showing any signs of pain — crying, hunching, a hard or tense belly?'",
        yes: { outcome: "EMERGENCY", note: "Blood in urine with pain signs — possible obstruction, bladder rupture, or severe infection. Emergency assessment needed." },
        no: { outcome: "URGENT", note: "Blood in urine (haematuria) without pain — likely cystitis or urinary tract infection. Needs same-day or next-day assessment and urinalysis." }
      },
      u3: {
        question: "Is the animal urinating much more frequently than normal?",
        hint: "Ask: 'Are they needing to go much more often than usual, or having accidents inside?'",
        yes: "u3b",
        no: "u4"
      },
      u3b: {
        question: "Is the animal also drinking significantly more water than normal?",
        hint: "Ask: 'Have you noticed them at the water bowl much more than usual?'",
        yes: "u3c",
        no: { outcome: "SOON", note: "Increased urination frequency without increased thirst — likely lower urinary tract issue. Appointment within 24–48 hours, bring a urine sample if possible." }
      },
      u3c: {
        question: "How is the animal's energy and appetite?",
        hint: "Ask: 'Is your pet eating and acting normally, or do they seem quieter or less interested in food than usual?'",
        options: [
          { label: "Energy and appetite are normal", next: { outcome: "ROUTINE", note: "Increased urination and drinking (polyuria/polydipsia) with otherwise normal energy and appetite — significant finding but stable. Book a routine appointment for bloodwork and urinalysis to investigate the underlying cause (possible early diabetes, kidney disease, or other systemic illness)." } },
          { label: "Energy or appetite are reduced", next: { outcome: "URGENT", note: "Increased urination and drinking with reduced energy or appetite — possible diabetes, kidney disease, Addison's disease, or other systemic illness. Needs same-day assessment." } }
        ]
      },
      u4: {
        question: "Has the animal urinated at all in the last 12 hours?",
        hint: "Ask: 'When did they last urinate, and did it seem normal?'",
        yes: { outcome: "ROUTINE", note: "Urinating normally without concerning signs — if owner has noticed a change, routine appointment for urinalysis is appropriate." },
        no: { outcome: "EMERGENCY", note: "No urine output for 12+ hours in any animal is an emergency — possible obstruction or acute kidney injury." }
      }
    }
  },

  breathing: {
    id: "breathing",
    disclaimer: "Breathing emergencies can deteriorate within minutes. If in any doubt, treat as emergency. Do not make a distressed animal wait.",
    start: "b1",
    nodes: {
      b1: {
        question: "Is the animal struggling to breathe, breathing with its mouth open (cats especially), or showing extreme effort with each breath?",
        hint: "Ask: 'Is your pet working hard to breathe — can you see their sides heaving, or are they breathing with their mouth open?'",
        yes: { outcome: "EMERGENCY", note: "Any animal in obvious respiratory distress needs immediate assessment. Do not leave them to wait. Open-mouth breathing in a cat is always an emergency." },
        no: "b2"
      },
      b2: {
        question: "Are the gums, tongue, or inside of the lips pale, grey, blue, or white?",
        hint: "Ask: 'Can you have a look at your pet's gums for me — do they look a normal pink colour, or are they pale, grey, or bluish?'",
        yes: { outcome: "EMERGENCY", note: "Abnormal gum colour (cyanosis or pallor) indicates inadequate oxygen delivery — immediate emergency care needed." },
        no: "b3"
      },
      b3: {
        question: "Has the animal collapsed or is it unable to stand?",
        hint: "Ask: 'Is your pet able to stand and move around, or have they collapsed?'",
        yes: { outcome: "EMERGENCY", note: "Collapse with breathing changes — possible cardiac event, severe respiratory failure, or shock." },
        no: "b4"
      },
      b4: {
        question: "Is the animal coughing — and if so, how would you describe the cough?",
        hint: "Ask: 'Is there a cough? Is it a dry honking cough, a wet productive cough, or a cough that seems to bring something up?'",
        options: [
          { label: "Sudden onset coughing with distress or gagging", next: { outcome: "EMERGENCY", note: "Possible foreign body inhalation or acute cardiac event — emergency assessment." } },
          { label: "Wet, productive cough — especially at night or after exercise", next: { outcome: "URGENT", note: "Wet cough, especially positional or exercise-related, can indicate fluid on the lungs (pulmonary edema) from heart disease. Same-day assessment." } },
          { label: "Dry, intermittent cough — otherwise well", next: "b5" },
          { label: "No cough", next: "b5" }
        ]
      },
      b5: {
        question: "Does the animal have a known heart condition, or has a murmur been previously detected?",
        hint: "Ask: 'Has a vet ever mentioned a heart murmur or heart condition?'",
        yes: { outcome: "URGENT", note: "Any new respiratory symptom in a known cardiac patient should be assessed same-day — risk of decompensation." },
        no: "b6"
      },
      b6: {
        question: "Is the animal's breathing faster than normal at rest, or has the owner noticed a change in their breathing pattern?",
        hint: "Ask: 'At rest — sitting still or sleeping — does their breathing seem faster or more laboured than it used to be?'",
        yes: { outcome: "URGENT", note: "Resting tachypnea (fast breathing at rest) is a significant finding, even without obvious distress. Same-day assessment." },
        no: { outcome: "SOON", note: "No immediate red flags — but any change in breathing pattern warrants assessment within 24–48 hours." }
      }
    }
  },

  lameness: {
    id: "lameness",
    disclaimer: "Sudden severe lameness or inability to use a limb always warrants same-day assessment at minimum.",
    start: "l1",
    nodes: {
      l1: {
        question: "Is the animal completely unable to bear weight on the limb, or has it suddenly become unable to use its back legs?",
        hint: "Ask: 'Is your pet putting any weight on it at all, or are they completely off it?'",
        yes: "l1b",
        no: "l2"
      },
      l1b: {
        question: "Is this a cat that has suddenly lost the use of both back legs, or has one or both back legs gone cold or seem painful?",
        hint: "Sudden hindlimb paralysis in cats is a red flag for aortic thromboembolism (saddle thrombus) — extremely painful and time-critical.",
        yes: { outcome: "EMERGENCY", note: "Possible aortic thromboembolism in cat — sudden hindlimb paralysis with cold, painful limbs is a cardiac emergency. Come in immediately." },
        no: { outcome: "URGENT", note: "Complete non-weight bearing lameness — possible fracture, dislocation, ligament rupture, or severe injury. Needs same-day assessment." }
      },
      l2: {
        question: "Was there a known trauma — a fall, a road accident, a fight, or a crush injury?",
        hint: "Ask: 'Did anything happen that might have caused this — a fall, being hit by a car, or a fight with another animal?'",
        yes: "l2b",
        no: "l3"
      },
      l2b: {
        question: "Is the animal showing signs of shock, severe pain, or obvious deformity of the limb?",
        hint: "Ask: 'Is there any obvious deformity or abnormal angle to the limb? Is your pet in a lot of pain?'",
        yes: { outcome: "EMERGENCY", note: "Trauma with signs of shock, severe pain, or deformity — possible fracture, internal injuries. Emergency assessment needed." },
        no: { outcome: "URGENT", note: "Known trauma even without obvious deformity — possible fracture, soft tissue injury, or internal injury. Same-day assessment needed." }
      },
      l3: {
        question: "How severe is the lameness — is the animal toe-touching (partial weight bearing) or fully off the leg?",
        hint: "Ask: 'Are they putting any weight on it at all — even just touching their toes down?'",
        options: [
          { label: "Fully off the leg — no weight bearing at all", next: { outcome: "URGENT", note: "Non-weight bearing lameness without known trauma — possible fracture, joint injury, or severe soft tissue injury. Same-day assessment." } },
          { label: "Toe-touching or minimal weight bearing", next: "l4" },
          { label: "Walking on it but with a noticeable limp", next: "l5" }
        ]
      },
      l4: {
        question: "Is there obvious swelling, heat, or deformity at the joint or along the limb?",
        hint: "Ask: 'Is there any visible swelling or heat around the joint, or does the limb look a different shape?'",
        yes: { outcome: "URGENT", note: "Toe-touching lameness with swelling or heat — possible fracture, joint infection, or significant injury. Same-day assessment." },
        no: { outcome: "SOON", note: "Toe-touching lameness without swelling — likely soft tissue injury. Appointment within 24 hours, rest in the meantime." }
      },
      l5: {
        question: "How long has the limp been present?",
        hint: "Ask: 'When did you first notice the limp?'",
        options: [
          { label: "Just started today or overnight", next: { outcome: "SOON", note: "New onset limp — monitor for 24 hours if walking on it. Book an appointment if it persists or worsens." } },
          { label: "2–5 days", next: { outcome: "ROUTINE", note: "Ongoing but mild lameness — routine appointment for assessment. Rest and avoid strenuous exercise in the meantime." } },
          { label: "More than a week or on and off for a while", next: { outcome: "ROUTINE", note: "Chronic or intermittent lameness — routine appointment, likely requires examination and possibly X-rays." } }
        ]
      }
    }
  },

  eyes: {
    id: "eyes",
    disclaimer: "Eye conditions can deteriorate rapidly. When in doubt, same-day is safer than waiting.",
    start: "e1",
    nodes: {
      e1: {
        question: "Is the animal pawing at the eye, holding it completely shut, or showing signs of significant pain?",
        hint: "Ask: 'Is your pet rubbing at their eye or keeping it closed? Do they seem to be in pain?'",
        yes: "e1b",
        no: "e2"
      },
      e1b: {
        question: "Is there any visible injury to the eye — a scratch, puncture, or something protruding?",
        hint: "Ask: 'Can you see any damage to the surface of the eye, or anything in or on it?'",
        yes: { outcome: "EMERGENCY", note: "Ocular trauma — possible corneal laceration or penetrating injury. Prevent the animal from rubbing and come in immediately." },
        no: { outcome: "URGENT", note: "Significant eye pain with a closed eye — possible corneal ulcer, acute glaucoma, or foreign body. Same-day assessment essential — eye conditions deteriorate rapidly." }
      },
      e2: {
        question: "Is the eyeball itself visibly bulging, larger than normal, or a different size to the other eye?",
        hint: "Ask: 'Does the eye look bigger than the other one, or is it protruding more than usual?'",
        yes: { outcome: "EMERGENCY", note: "Proptosis or acute glaucoma (buphthalmos) — emergency. These conditions can result in permanent vision loss if not treated immediately." },
        no: "e3"
      },
      e3: {
        question: "Is the eye red — either on the white of the eye, or is the whole eye bloodshot?",
        hint: "Ask: 'Is the white of the eye red or bloodshot, or does the eye generally look red?'",
        yes: "e3b",
        no: "e4"
      },
      e3b: {
        question: "Is there also cloudiness or haziness of the eye — does the eye look foggy or blue-grey?",
        hint: "Ask: 'Does the eye look cloudy or foggy as well as red?'",
        yes: { outcome: "URGENT", note: "Red eye with cloudiness — possible corneal ulcer, uveitis, or glaucoma. Same-day assessment." },
        no: { outcome: "SOON", note: "Red eye without cloudiness or pain — possible conjunctivitis. Appointment within 24 hours." }
      },
      e4: {
        question: "Is there discharge from the eye — and if so, what does it look like?",
        hint: "Ask: 'Is there any discharge — and is it clear and watery, or thick and coloured (yellow or green)?'",
        options: [
          { label: "Thick yellow or green discharge", next: { outcome: "SOON", note: "Purulent discharge suggests infection — appointment within 24–48 hours." } },
          { label: "Clear, watery discharge", next: "e5" },
          { label: "No discharge", next: "e5" }
        ]
      },
      e5: {
        question: "Is this a brachycephalic breed (flat-faced — e.g. pug, bulldog, Persian cat, French bulldog)?",
        hint: "Brachycephalic breeds are at higher risk of corneal exposure and eye problems.",
        yes: { outcome: "SOON", note: "Brachycephalic breeds with any eye concern should be seen promptly — their anatomy makes them higher risk." },
        no: { outcome: "ROUTINE", note: "Mild, non-painful eye concern — routine appointment. Advise client to prevent rubbing and call back if pain develops or condition worsens." }
      }
    }
  },

  wounds: {
    id: "wounds",
    disclaimer: "All bite wounds are deeper than they appear. When in doubt about a wound, same-day assessment is always appropriate.",
    start: "w1",
    nodes: {
      w1: {
        question: "Is the animal bleeding heavily — blood that is spurting, not stopping, or soaking through material?",
        hint: "Ask: 'Is it bleeding a lot? Is the bleeding stopping if you apply pressure, or is it continuing?'",
        yes: { outcome: "EMERGENCY", note: "Significant haemorrhage — apply gentle pressure with a clean cloth and come in immediately. Do not remove the cloth." },
        no: "w2"
      },
      w2: {
        question: "Is the wound the result of a road traffic accident, fall from height, or other significant trauma?",
        hint: "Ask: 'Was there an accident or impact involved — a car, a fall, anything like that?'",
        yes: { outcome: "EMERGENCY", note: "Trauma patients may have internal injuries not visible externally. Even if the animal seems okay, they need immediate assessment." },
        no: "w3"
      },
      w3: {
        question: "Is this a bite wound from another animal?",
        hint: "Ask: 'Was this caused by a bite from another animal?'",
        yes: { outcome: "URGENT", note: "Bite wounds are always deeper than they look and carry a high infection risk including abscess and sepsis. All bite wounds need same-day assessment and are usually debrided and treated regardless of apparent size." },
        no: "w4"
      },
      w4: {
        question: "Can you see into the wound — is it deep, gaping, or does it expose tissue beneath the skin?",
        hint: "Ask: 'How deep does the wound look? Can you see any yellow fat or tissue underneath?'",
        yes: { outcome: "URGENT", note: "Deep or gaping wounds may require suturing, debridement, or drain placement. Same-day assessment — wounds should ideally be closed within a few hours." },
        no: "w5"
      },
      w5: {
        question: "Is the wound showing signs of infection — swelling, heat, bad smell, or discharge?",
        hint: "Ask: 'Is there any swelling around it, does it feel warm, is there any discharge or smell?'",
        yes: { outcome: "URGENT", note: "Signs of infection or abscess — same-day assessment for wound management and likely antibiotics." },
        no: "w6"
      },
      w6: {
        question: "Where is the wound located?",
        hint: "Location affects urgency significantly — wounds near eyes, chest, abdomen, or joints are higher risk.",
        options: [
          { label: "Head, neck, chest, or abdomen", next: { outcome: "URGENT", note: "Wounds near vital structures — even small wounds in these areas can involve deeper injuries. Same-day assessment." } },
          { label: "Near a joint or paw", next: { outcome: "URGENT", note: "Wounds near joints risk joint cavity involvement — infection here is serious. Same-day assessment." } },
          { label: "Body or limb — away from joints", next: "w7" }
        ]
      },
      w7: {
        question: "Is the wound small, superficial, and clean — with no significant bleeding and the animal otherwise comfortable?",
        hint: "Ask: 'Is it a minor graze or small cut that doesn't seem to be bothering them much?'",
        yes: { outcome: "ROUTINE", note: "Small, clean, superficial wound in a comfortable animal. Advise gentle cleaning with saline or clean water, prevent licking (use a cone if available), and monitor for signs of infection. Routine appointment if not healing within a few days.", homecare: "Clean gently with saline or cooled boiled water. Keep the area clean and dry. Prevent licking — an e-collar (cone) from a pet shop works well. Do not use hydrogen peroxide or human antiseptic. Call us if it becomes swollen, hot, smells, or isn't healing within a few days." },
        no: { outcome: "SOON", note: "Wound that doesn't fit the above — appointment within 24 hours." }
      }
    }
  },

  neuro: {
    id: "neuro",
    disclaimer: "Neurological signs can worsen rapidly and many causes are time-sensitive. When in doubt, treat as urgent.",
    start: "n1",
    nodes: {
      n1: {
        question: "Is the animal having a seizure right now, or has it had a seizure in the last 30 minutes?",
        hint: "Ask: 'Is your pet fitting or convulsing right now, or did they have a seizure recently?'",
        yes: "n1b",
        no: "n2"
      },
      n1b: {
        question: "Has the seizure lasted more than 5 minutes, or has the animal had more than one seizure in the last hour?",
        hint: "A single brief seizure is serious but a seizure lasting over 5 minutes (status epilepticus) or cluster seizures are life-threatening.",
        yes: { outcome: "EMERGENCY", note: "Status epilepticus or cluster seizures — life-threatening. Come in immediately. Keep the animal away from hard surfaces and don't put hands near the mouth." },
        no: { outcome: "URGENT", note: "Post-ictal period after a seizure — the animal may be confused, wobbly, or temporarily blind. Needs same-day assessment to investigate cause." }
      },
      n2: {
        question: "Is the animal suddenly unable to walk, dragging its back legs, or showing sudden paralysis?",
        hint: "Ask: 'Is your pet able to walk normally? Are they dragging any limbs?'",
        yes: { outcome: "EMERGENCY", note: "Sudden onset paresis or paralysis — possible disc herniation, spinal cord injury, or aortic thromboembolism (cats). Time-critical for spinal cases. Come in immediately." },
        no: "n3"
      },
      n3: {
        question: "Is the animal circling, tilting its head to one side, or rolling uncontrollably?",
        hint: "Ask: 'Is your pet walking in circles, or is their head tilting to one side?'",
        yes: "n3b",
        no: "n4"
      },
      n3b: {
        question: "Did this come on suddenly within the last few hours?",
        hint: "Acute onset vestibular signs can look alarming but may be benign — however, sudden onset also warrants same-day assessment to rule out serious causes.",
        yes: { outcome: "URGENT", note: "Acute vestibular syndrome — can be idiopathic (benign) or indicate serious intracranial disease. Needs same-day assessment to distinguish." },
        no: { outcome: "SOON", note: "Ongoing vestibular signs — appointment within 24 hours for neurological assessment." }
      },
      n4: {
        question: "Is the animal showing facial asymmetry — a drooping lip, a drooping eyelid, or inability to blink one eye?",
        hint: "Ask: 'Does your pet's face look symmetrical? Is one side of the face drooping?'",
        yes: { outcome: "URGENT", note: "Facial nerve paresis — possible ear disease, intracranial disease, or trauma. Same-day assessment." },
        no: "n5"
      },
      n5: {
        question: "Is the animal wobbly, uncoordinated, or stumbling (ataxic) — but still able to walk?",
        hint: "Ask: 'Is your pet walking but seeming unsteady, clumsy, or wobbly?'",
        yes: "n5b",
        no: "n6"
      },
      n5b: {
        question: "Is this a new, sudden change — or has it been coming on gradually?",
        hint: "Sudden onset ataxia is more urgent than gradual onset.",
        options: [
          { label: "Sudden onset in the last few hours", next: { outcome: "URGENT", note: "Acute ataxia — possible toxin, vestibular disease, or intracranial problem. Same-day assessment." } },
          { label: "Gradual onset over days or weeks", next: { outcome: "SOON", note: "Progressive ataxia — needs neurological assessment soon. Appointment within 24–48 hours." } }
        ]
      },
      n6: {
        question: "Has the owner noticed any changes in behaviour — confusion, getting stuck in corners, staring into space, or not recognising familiar people?",
        hint: "Ask: 'Have you noticed any changes in how they're acting — seeming confused, getting lost, not responding to you normally?'",
        yes: { outcome: "SOON", note: "Behavioural changes suggestive of neurological involvement — appointment within 24 hours. Could indicate intracranial disease, hepatic encephalopathy, or other systemic cause." },
        no: { outcome: "ROUTINE", note: "No acute neurological signs identified — if the owner still has a concern, a routine neurological examination is appropriate." }
      }
    }
  },

  lethargy: {
    id: "lethargy",
    disclaimer: "Lethargy combined with not eating is significant in all species. Cats in particular can deteriorate quickly — always take this combination seriously.",
    start: "le1",
    nodes: {
      le1: {
        question: "Is the animal collapsed, unconscious, or unresponsive?",
        hint: "Ask: 'Is your pet completely unresponsive — unable to stand, or not reacting to you at all?'",
        yes: { outcome: "EMERGENCY", note: "Collapse or unresponsiveness — emergency. Come in immediately." },
        no: "le2"
      },
      le2: {
        question: "Are the gums pale, white, yellow, blue, or a different colour to normal pink?",
        hint: "Ask: 'Can you have a look at your pet's gums for me — do they look a normal pink colour?'",
        yes: { outcome: "EMERGENCY", note: "Abnormal gum colour is a serious systemic sign — possible anaemia, jaundice, shock, or oxygen deprivation. Emergency assessment." },
        no: "le3"
      },
      le3: {
        question: "How long has the animal not been eating?",
        hint: "Ask: 'When did they last eat a normal meal?'",
        options: [
          { label: "More than 48 hours", next: "le3b" },
          { label: "24–48 hours", next: "le4" },
          { label: "Less than 24 hours", next: "le5" }
        ]
      },
      le3b: {
        question: "Is this a cat that hasn't eaten for more than 48 hours?",
        hint: "Cats that don't eat for 48+ hours are at risk of hepatic lipidosis (fatty liver disease) — a serious condition.",
        yes: { outcome: "URGENT", note: "Cat not eating for 48+ hours — at risk of hepatic lipidosis. Same-day assessment needed." },
        no: { outcome: "URGENT", note: "Not eating for more than 48 hours in any species warrants same-day assessment." }
      },
      le4: {
        question: "Is the animal also vomiting, having diarrhea, or showing any other symptoms alongside the lethargy?",
        hint: "Ask: 'Is there anything else going on alongside the tiredness and not eating — any vomiting, loose stools, or anything else you've noticed?'",
        yes: { outcome: "URGENT", note: "Lethargy and reduced appetite with additional symptoms — same-day assessment. Multiple symptoms increase concern for significant illness." },
        no: "le5"
      },
      le5: {
        question: "Is this a young animal (under 6 months), an elderly animal (over 10 years), or an animal with a known medical condition?",
        hint: "High-risk patients deteriorate faster — age and existing conditions matter.",
        yes: { outcome: "URGENT", note: "High-risk patient — young, elderly, or medically complex. Even mild lethargy warrants same-day assessment in these groups." },
        no: "le6"
      },
      le6: {
        question: "Is the animal drinking normally?",
        hint: "Ask: 'Is your pet still drinking water normally?'",
        yes: "le7",
        no: { outcome: "URGENT", note: "Lethargy with reduced drinking — risk of dehydration and significant illness. Same-day assessment." }
      },
      le7: {
        question: "On a scale of 1–10, how lethargic does the animal seem? 1 = slightly quieter than normal, 10 = barely responsive.",
        hint: "Ask: 'How would you rate how flat they are? Are they just a bit quiet, or are they really flat and barely interested in anything?'",
        options: [
          { label: "7–10: Very flat, barely responding", next: { outcome: "URGENT", note: "Significant lethargy in an otherwise apparently healthy animal — same-day assessment." } },
          { label: "4–6: Noticeably quieter and less interested than normal", next: { outcome: "SOON", note: "Moderate lethargy without other red flags — appointment within 24 hours. Monitor closely and call back if they worsen." } },
          { label: "1–3: Slightly quieter than usual, still interactive", next: { outcome: "MONITOR", note: "Mild lethargy, eating has just started to reduce — monitor closely for 12–24 hours.", homecare: "Keep a close eye on eating, drinking, and energy levels over the next 12–24 hours. Make note of any other symptoms. Call us if they get worse, stop drinking, or if you're still concerned tomorrow." } }
        ]
      }
    }
  }
};

export const triageQuizzes = {

  vomiting: [
    {
      q: "A client calls — their large-breed dog has been retching repeatedly for 30 minutes but nothing is coming up, and his belly looks swollen. What do you do?",
      options: ["Book a same-day appointment", "Tell them to monitor for another hour", "Treat as emergency — come in immediately", "Ask if he ate anything unusual and book a routine appointment"],
      correct: 2,
      explanation: "Unproductive retching with a distended abdomen in a large-breed dog is a classic presentation of GDV (bloat) — a life-threatening emergency. Do not leave this animal to wait."
    },
    {
      q: "A puppy of 10 weeks, unvaccinated, has vomited 4 times this morning and is quiet. What urgency?",
      options: ["Monitor at home", "Routine appointment", "Within 48 hours", "Same day"],
      correct: 3,
      explanation: "Young unvaccinated puppies vomiting are at high risk of parvovirus, which can be fatal within hours. Same-day assessment is essential."
    },
    {
      q: "A 5-year-old cat vomited once this morning, is bright and alert, and eating normally. What do you advise?",
      options: ["Emergency — come in now", "Same-day appointment", "Monitor at home — call back if it continues or they stop drinking", "Routine appointment"],
      correct: 2,
      explanation: "A single vomiting episode in an otherwise well, alert cat that is still eating is low concern. Monitor at home with clear criteria to call back."
    },
    {
      q: "A client describes dark brown, coffee-ground material in her dog's vomit. What urgency?",
      options: ["Monitor at home", "Within 48 hours", "Same day", "Emergency"],
      correct: 3,
      explanation: "Coffee-ground material indicates digested blood from the upper GI tract — a sign of significant bleeding that requires immediate assessment."
    },
    {
      q: "A dog vomited 3 times yesterday, is still drinking, seems a bit quiet but not collapsed. What's appropriate?",
      options: ["Monitor at home", "Within 24–48 hours", "Same day", "Emergency"],
      correct: 1,
      explanation: "Moderate vomiting with maintained hydration and no emergency signs — appointment within 24–48 hours, with instructions to call back if worsening."
    },
  ],

  diarrhea: [
    {
      q: "A client's 8-week-old unvaccinated puppy has had watery diarrhea with blood for 12 hours and is very flat. What do you do?",
      options: ["Monitor at home", "Book within 48 hours", "Same-day appointment", "Emergency — come in immediately"],
      correct: 3,
      explanation: "Bloody watery diarrhea in an unvaccinated puppy is a parvovirus presentation until proven otherwise. This is a life-threatening emergency."
    },
    {
      q: "A dog has had 2 loose stools today, is bright, eating, and drinking normally. The owner thinks it might be from a new food. What do you advise?",
      options: ["Emergency", "Same-day appointment", "Monitor at home — bland diet, call back if worsening", "Routine appointment"],
      correct: 2,
      explanation: "Mild, recent onset diarrhea in an otherwise well animal with a likely dietary cause — monitor at home with bland diet and clear instructions to call back."
    },
    {
      q: "A dog has had loose stools for 3 weeks, but is maintaining weight and seems well. What is appropriate?",
      options: ["Emergency", "Same day", "Within 48 hours", "Routine appointment"],
      correct: 3,
      explanation: "Chronic intermittent diarrhea in a stable, well animal needs investigation but is not urgent — routine appointment for workup."
    },
    {
      q: "A client describes black, tarry stools in their dog. What urgency?",
      options: ["Monitor at home", "Within 48 hours", "Same day", "Emergency"],
      correct: 3,
      explanation: "Dark tarry stools (melena) indicate bleeding in the upper GI tract — more serious than fresh blood. Emergency assessment required."
    },
    {
      q: "A cat has had diarrhea AND vomiting for 36 hours. She is still drinking small amounts. What urgency?",
      options: ["Monitor at home", "Within 48 hours", "Same day", "Emergency"],
      correct: 2,
      explanation: "Combined vomiting and diarrhea for over 24 hours creates significant dehydration risk — same-day assessment needed."
    },
  ],

  urinary: [
    {
      q: "A client calls about her male cat who has been going in and out of the litter box all morning producing nothing. What do you do?",
      options: ["Book a same-day appointment", "Tell her to monitor until tomorrow", "Emergency — come in immediately", "Book within 48 hours"],
      correct: 2,
      explanation: "Male cat straining with no urine output is a urethral obstruction until proven otherwise — a life-threatening emergency that can cause death within hours."
    },
    {
      q: "A female dog has blood in her urine, is eating and drinking normally, and shows no signs of pain. What urgency?",
      options: ["Emergency", "Same day", "Within 48 hours", "Routine"],
      correct: 1,
      explanation: "Hematuria without pain signs — likely a UTI or cystitis. Needs urinalysis and assessment, same-day or next day."
    },
    {
      q: "A dog is drinking and urinating much more than normal, but is eating well and seems energetic. What urgency?",
      options: ["Emergency", "Same day", "Within 48 hours", "Routine appointment"],
      correct: 3,
      explanation: "PUPD with normal energy and appetite — significant finding but stable. Routine appointment for bloodwork and urinalysis to investigate the cause."
    },
    {
      q: "A dog is drinking and urinating much more than normal AND has been quieter and less interested in food for 2 days. What urgency?",
      options: ["Monitor at home", "Routine appointment", "Within 48 hours", "Same day"],
      correct: 3,
      explanation: "PUPD with reduced energy and appetite — possible diabetes, kidney disease, or Addison's disease. Same-day assessment needed."
    },
    {
      q: "A cat hasn't urinated in over 12 hours according to the owner. What urgency?",
      options: ["Monitor at home", "Within 48 hours", "Same day", "Emergency"],
      correct: 3,
      explanation: "No urine output for 12+ hours is an emergency — possible obstruction or acute kidney injury regardless of species."
    },
  ],

  breathing: [
    {
      q: "A cat is breathing with its mouth open. What do you do?",
      options: ["Book same-day appointment", "Monitor for an hour", "Emergency — come in immediately", "Book within 48 hours"],
      correct: 2,
      explanation: "Open-mouth breathing in a cat is ALWAYS an emergency — no exceptions. Cats only breathe through their mouths when in severe respiratory distress."
    },
    {
      q: "A client says her dog's gums look pale and greyish and he is breathing fast. What urgency?",
      options: ["Same day", "Within 48 hours", "Monitor at home", "Emergency"],
      correct: 3,
      explanation: "Abnormal gum colour with rapid breathing indicates inadequate oxygen delivery — immediate emergency care is needed."
    },
    {
      q: "A dog with known heart disease has started coughing at night and seems more breathless after walks than usual. What urgency?",
      options: ["Monitor at home", "Routine appointment", "Within 48 hours", "Same day"],
      correct: 3,
      explanation: "A known cardiac patient with new respiratory signs is at risk of decompensation — same-day assessment needed."
    },
    {
      q: "A dog has had a dry intermittent cough for 3 days with no other symptoms and pink gums. What urgency?",
      options: ["Emergency", "Same day", "Within 24–48 hours", "Monitor at home"],
      correct: 2,
      explanation: "Dry intermittent cough in an otherwise well dog with normal gum colour — appointment within 24–48 hours."
    },
    {
      q: "A dog is breathing faster than normal while resting but gums are pink and she is not distressed. What urgency?",
      options: ["Monitor at home", "Routine appointment", "Within 48 hours", "Same day"],
      correct: 3,
      explanation: "Elevated resting respiratory rate is significant even without visible distress — same-day assessment."
    },
  ],

  lameness: [
    {
      q: "A client's cat suddenly cannot use its back legs and the legs feel cold. What do you do?",
      options: ["Book same-day appointment", "Emergency — come in immediately", "Monitor at home", "Book within 48 hours"],
      correct: 1,
      explanation: "Sudden loss of hindlimb function with cold limbs in a cat is aortic thromboembolism (saddle thrombus) — a cardiac emergency that is time-critical."
    },
    {
      q: "A dog was hit by a car and seems to be walking, though limping. What urgency?",
      options: ["Monitor at home if walking", "Book same-day appointment", "Emergency — come in immediately", "Book within 48 hours"],
      correct: 2,
      explanation: "Any road traffic accident requires immediate assessment regardless of apparent ability to walk — internal injuries can be present with no external signs."
    },
    {
      q: "A dog has been mildly limping on one front leg for 4 days, is still bearing weight, and there is no swelling. What urgency?",
      options: ["Emergency", "Same day", "Within 48 hours", "Routine appointment"],
      correct: 3,
      explanation: "Mild chronic lameness with full weight-bearing and no swelling — routine appointment for assessment."
    },
    {
      q: "A dog is completely non-weight bearing on a hind leg with no known trauma. What urgency?",
      options: ["Monitor at home", "Within 48 hours", "Same day", "Emergency"],
      correct: 2,
      explanation: "Complete non-weight bearing without known trauma — possible fracture, dislocation, or severe soft tissue injury. Same-day assessment."
    },
    {
      q: "A limping dog has a visibly abnormal angle to its leg and you can hear a crunching sound when it moves. What urgency?",
      options: ["Same day", "Within 48 hours", "Routine", "Emergency"],
      correct: 3,
      explanation: "Obvious deformity with crepitus (crunching) suggests fracture or dislocation — emergency assessment."
    },
  ],

  eyes: [
    {
      q: "A client says her French Bulldog's eye is bulging forward and looks much larger than the other one. What do you do?",
      options: ["Book same-day appointment", "Emergency — come in immediately", "Monitor at home", "Book within 48 hours"],
      correct: 1,
      explanation: "Proptosis (eye bulging forward) or acute glaucoma causes permanent vision loss if not treated immediately — emergency."
    },
    {
      q: "A cat has one eye completely closed and is pawing at it. What urgency?",
      options: ["Monitor at home", "Within 48 hours", "Same day", "Emergency"],
      correct: 2,
      explanation: "Eye completely shut with signs of pain — possible corneal ulcer, acute glaucoma, or foreign body. Eye conditions deteriorate rapidly — same-day."
    },
    {
      q: "A dog has thick yellow-green discharge from one eye but the eye is open and the dog seems comfortable. What urgency?",
      options: ["Emergency", "Same day", "Within 24–48 hours", "Monitor at home"],
      correct: 2,
      explanation: "Thick coloured discharge suggests infection — appointment within 24–48 hours."
    },
    {
      q: "A Pug has any eye concern at all. How do you approach this compared to other breeds?",
      options: ["Same urgency as any other dog", "Slightly more urgent — brachycephalic breeds have higher corneal risk", "Less urgent — their eyes are always a bit unusual", "Only urgent if the eye is completely closed"],
      correct: 1,
      explanation: "Brachycephalic breeds (Pugs, Bulldogs, French Bulldogs, Persians) have shallow eye sockets and exposed corneas — they are at much higher risk of corneal injury and should be seen same-day for any eye concern."
    },
    {
      q: "A dog has clear watery discharge from both eyes but seems comfortable and the eyes look normal. What urgency?",
      options: ["Emergency", "Same day", "Within 48 hours", "Routine — monitor, call back if persistent"],
      correct: 3,
      explanation: "Clear watery discharge in a comfortable dog with otherwise normal eyes — routine. Advise the owner to prevent rubbing and call back if it worsens or changes character."
    },
  ],

  wounds: [
    {
      q: "A dog is bleeding heavily from a leg wound after catching it on a fence. What do you do?",
      options: ["Book same-day appointment", "Emergency — apply pressure and come in immediately", "Monitor at home", "Book within 48 hours"],
      correct: 1,
      explanation: "Heavy uncontrolled bleeding is an emergency. Advise the owner to apply gentle pressure with a clean cloth and come in immediately."
    },
    {
      q: "A cat came home with a small puncture wound on its side — the owner thinks it may have been in a fight. What urgency?",
      options: ["Monitor at home — it's small", "Routine appointment", "Within 48 hours", "Same day"],
      correct: 3,
      explanation: "Bite wounds are always deeper than they look and carry a very high infection risk including abscess and sepsis. All bite wounds need same-day assessment."
    },
    {
      q: "A dog has a small superficial graze on its leg, is not limping, and the wound looks clean. What do you advise?",
      options: ["Emergency", "Same day", "Within 48 hours", "Clean at home, monitor, routine appointment if not healing"],
      correct: 3,
      explanation: "Small, superficial, clean wounds in otherwise well animals can be managed at home with basic care and monitoring."
    },
    {
      q: "A dog has a wound near its knee joint. Why does this need same-day assessment even if it looks minor?",
      options: ["It doesn't — minor wounds near joints are fine to monitor", "Risk of joint cavity involvement — infection in a joint is very serious", "Only if the dog is limping", "Only if the wound is deep"],
      correct: 1,
      explanation: "Wounds near joints carry a risk of penetrating the joint cavity. Joint infections (septic arthritis) are extremely serious and can cause permanent damage — always assess same-day."
    },
    {
      q: "A wound has become swollen, warm, and is producing a foul-smelling discharge 3 days after the original injury. What urgency?",
      options: ["Monitor — this is normal healing", "Routine appointment", "Within 48 hours", "Same day"],
      correct: 3,
      explanation: "Signs of infection in a wound — swelling, heat, discharge, odour — need same-day assessment and likely antibiotics."
    },
  ],

  neuro: [
    {
      q: "A dog is having a seizure that has lasted 6 minutes and is still going. What do you do?",
      options: ["Tell the owner to wait and see if it stops", "Book a same-day appointment for when it stops", "Emergency — come in immediately, keep away from hard surfaces", "Book within 48 hours"],
      correct: 2,
      explanation: "A seizure lasting more than 5 minutes is status epilepticus — a life-threatening emergency. The owner should keep the pet safe from hard objects and come in immediately."
    },
    {
      q: "A dog had a single seizure 20 minutes ago and is now conscious but confused and wobbly. What urgency?",
      options: ["Monitor at home", "Routine appointment", "Within 48 hours", "Same day"],
      correct: 3,
      explanation: "A first or isolated seizure needs same-day assessment to investigate the cause, even once the post-ictal phase has passed."
    },
    {
      q: "A cat has suddenly developed a head tilt and is rolling to one side — this started an hour ago. What urgency?",
      options: ["Monitor at home", "Routine appointment", "Within 48 hours", "Same day"],
      correct: 3,
      explanation: "Acute vestibular syndrome needs same-day assessment — it can be benign peripheral disease or a serious intracranial problem, and they need to be distinguished."
    },
    {
      q: "A dog suddenly cannot walk and is dragging its back legs. What urgency?",
      options: ["Same day", "Within 48 hours", "Emergency", "Routine"],
      correct: 2,
      explanation: "Sudden inability to walk or hindlimb paralysis is a spinal emergency (possible disc herniation) or aortic thromboembolism in cats — time-critical."
    },
    {
      q: "An owner says their elderly dog seems confused, keeps walking into walls, and didn't recognise them this morning. What urgency?",
      options: ["Monitor at home", "Routine appointment", "Within 48 hours", "Same day"],
      correct: 3,
      explanation: "Acute behavioural changes including confusion and disorientation need same-day assessment — possible intracranial disease or hepatic encephalopathy."
    },
  ],

  lethargy: [
    {
      q: "A cat hasn't eaten for 3 days and is very flat. What urgency?",
      options: ["Monitor at home", "Within 48 hours", "Same day", "Emergency"],
      correct: 2,
      explanation: "Cats that don't eat for more than 48 hours are at risk of hepatic lipidosis (fatty liver disease) — same-day assessment is essential."
    },
    {
      q: "A dog's gums look white and she is collapsed on the floor. What urgency?",
      options: ["Same day", "Within 48 hours", "Monitor at home", "Emergency"],
      correct: 3,
      explanation: "Collapse with white/pale gums indicates severe anaemia, internal bleeding, or shock — immediate emergency."
    },
    {
      q: "A 12-year-old dog has been a bit quieter than usual for 2 days but is still eating and drinking. What urgency?",
      options: ["Monitor at home", "Routine appointment", "Within 48 hours", "Same day"],
      correct: 3,
      explanation: "Elderly patients have less physiological reserve — even mild lethargy warrants same-day assessment in senior animals."
    },
    {
      q: "A 3-year-old dog is slightly quieter than normal today, eating and drinking normally, no other symptoms. What do you advise?",
      options: ["Emergency", "Same day", "Within 48 hours", "Monitor for 12–24 hours, call back if worsening"],
      correct: 3,
      explanation: "Mild, very recent lethargy in an otherwise well young adult dog with no other symptoms — monitor closely at home with clear criteria to call back."
    },
    {
      q: "A dog with known Addison's disease is lethargic and vomiting. What urgency?",
      options: ["Monitor at home", "Routine appointment", "Within 48 hours", "Emergency"],
      correct: 3,
      explanation: "An Addisonian patient showing clinical signs is at risk of an Addisonian crisis — a potentially fatal emergency. Any known medical condition combined with lethargy and vomiting warrants emergency assessment."
    },
  ],

  toxins: [
    {
      q: "A dog ate a large amount of dark chocolate an hour ago. She is 5kg and seems fine so far. What urgency?",
      options: ["Monitor at home — she seems fine", "Call back if symptoms develop", "Same day", "Emergency — come in immediately"],
      correct: 3,
      explanation: "Dark chocolate in a small dog is an emergency regardless of current symptoms — theobromine toxicity has a delayed onset. Inducing vomiting is most effective within 1–2 hours, so time matters."
    },
    {
      q: "A cat has been exposed to Advantix — the owner applied their dog's flea treatment to the cat by mistake. What do you do?",
      options: ["Monitor the cat for symptoms", "Book a same-day appointment", "Tell the owner to wash it off and monitor", "Emergency — wash off immediately and come in"],
      correct: 3,
      explanation: "Permethrin (in Advantix) is rapidly fatal to cats. Instruct the owner to wash the cat immediately with washing-up liquid AND come in immediately — do not wait for symptoms."
    },
    {
      q: "A dog may have drunk from a puddle with a blue-green sheen on it while on a walk. He seems fine. What urgency?",
      options: ["Monitor at home — he seems fine", "Call back if symptoms develop", "Same day", "Emergency — come in now"],
      correct: 3,
      explanation: "Blue-green algae (cyanobacteria) can cause rapid fatal liver failure and neurological signs within minutes to hours. There is no antidote. Do not wait for symptoms."
    },
    {
      q: "A dog ate slug pellets from the garden about 30 minutes ago. No symptoms yet. What urgency?",
      options: ["Monitor at home", "Same day", "Within 48 hours", "Emergency"],
      correct: 3,
      explanation: "Metaldehyde (slug bait) causes rapid, severe, often fatal tremors and seizures. No antidote — treatment is supportive and time-critical. Emergency even before symptoms appear."
    },
    {
      q: "An owner admits their dog may have eaten some of their cannabis edibles. He's a bit wobbly. What urgency?",
      options: ["Monitor at home — cannabis isn't fatal in dogs", "Same day", "Within 48 hours", "Emergency"],
      correct: 1,
      explanation: "Cannabis ingestion in dogs needs same-day assessment. Edibles may also contain xylitol or chocolate which are more dangerous. Approach the owner non-judgementally — accurate disclosure helps treatment."
    },
    {
      q: "Any cat that has eaten any part of an Easter lily — even just chewed a leaf. What urgency?",
      options: ["Monitor for vomiting", "Same day if showing symptoms", "Emergency regardless of symptoms", "Within 48 hours"],
      correct: 2,
      explanation: "True lily ingestion in cats causes acute kidney failure — any part, any amount, even pollen. Emergency regardless of whether symptoms are present yet."
    },
  ],

};
