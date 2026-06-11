export const triageCategories = [
  { id: "vomiting", label: "Vomiting", icon: "🤢" },
  { id: "diarrhea", label: "Diarrhea", icon: "💧" },
  { id: "urinary", label: "Urinary issues", icon: "🚿" },
  { id: "breathing", label: "Breathing & cardiac", icon: "🫀" },
  { id: "lameness", label: "Lameness & mobility", icon: "🦮" },
  { id: "eyes", label: "Eyes", icon: "👁️" },
  { id: "wounds", label: "Wounds & trauma", icon: "🩹" },
  { id: "neuro", label: "Neurological signs", icon: "🧠" },
  { id: "lethargy", label: "Not eating / lethargy", icon: "😴" }
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
    instruction: "This pet needs to be seen today. Find a slot, speak to a vet or tech if unsure, and advise the client to monitor closely and call back if anything worsens before the appointment."
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
        question: "Is the animal vomiting blood, or is there blood in the vomit?",
        hint: "Ask: 'Is there any red or dark brown material in the vomit — sometimes described as looking like coffee grounds?'",
        yes: { outcome: "EMERGENCY", note: "Blood in vomit (haematemesis) can indicate serious GI bleeding, ulceration, or poisoning." },
        no: "v2"
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
        yes: { outcome: "URGENT", note: "Increased urination AND increased drinking (polyuria/polydipsia) is a significant clinical sign — possible diabetes, kidney disease, Addison's, or other systemic illness. Needs prompt assessment." },
        no: { outcome: "SOON", note: "Increased urination frequency without increased thirst — likely lower urinary tract issue. Appointment within 24–48 hours, bring a urine sample if possible." }
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
          { label: "Wet, productive cough — especially at night or after exercise", next: { outcome: "URGENT", note: "Wet cough, especially positional or exercise-related, can indicate fluid on the lungs (pulmonary oedema) from heart disease. Same-day assessment." } },
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
        yes: { outcome: "URGENT", note: "Resting tachypnoea (fast breathing at rest) is a significant finding, even without obvious distress. Same-day assessment." },
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
