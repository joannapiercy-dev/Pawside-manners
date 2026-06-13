export const triageReference = {

  vomiting: {
    askFirst: "How many times today? Any blood or dark material? Tried to retch without producing anything? Belly look swollen? Still drinking? What did they eat or get into? Age and vaccination status?",
    rows: [
      { sign: "Unproductive retching — heaving repeatedly but nothing coming up", outcome: "EMERGENCY", note: "Red flag for bloat (GDV) especially in large/deep-chested dogs. Do not leave to wait." },
      { sign: "Abdomen visibly distended or hard", outcome: "EMERGENCY", note: "Possible GDV, obstruction, or ascites. Any combination with vomiting = emergency." },
      { sign: "Large amount of blood or dark coffee-ground material in vomit", outcome: "EMERGENCY", note: "Coffee-ground appearance = digested blood from upper GI. A few small flecks alongside other concerns = urgent. Flecks only in otherwise well animal = monitor." },
      { sign: "Collapse, weakness, pale or white gums", outcome: "EMERGENCY", note: "Systemic signs — possible shock, internal bleeding, or organ failure." },
      { sign: "Suspected toxin, foreign body, or medication ingestion", outcome: "EMERGENCY", note: "Time-sensitive with many toxins. Ask specifically what they may have accessed." },
      { sign: "Puppy or kitten under 12 weeks, or unvaccinated animal", outcome: "URGENT", note: "High risk of parvovirus/panleukopenia. Young and unvaccinated animals deteriorate rapidly." },
      { sign: "Vomiting more than 5 times in 24 hours", outcome: "URGENT", note: "Significant dehydration risk. Needs same-day assessment." },
      { sign: "Vomiting AND refusing water", outcome: "URGENT", note: "Combined fluid losses accelerate dehydration risk significantly." },
      { sign: "Elderly patient (10+ years) vomiting repeatedly", outcome: "URGENT", note: "Older patients have less physiological reserve." },
      { sign: "3–5 episodes, still drinking, otherwise alert", outcome: "SOON", note: "Monitor closely — if they stop drinking or worsen, call back for same-day." },
      { sign: "Vomiting started yesterday, animal seems off but stable", outcome: "SOON", note: "Any change in demeanour alongside vomiting warrants a prompt appointment." },
      { sign: "1–2 episodes, bright and alert, eating and drinking normally", outcome: "MONITOR", note: "Withhold food 2–4 hrs, offer water. Bland diet on reintroduction. Call back if continuing past 12 hrs, stops drinking, or seems unwell." },
    ]
  },

  diarrhea: {
    askFirst: "Any blood in the stool — and what colour/how much? Age and vaccination status? Vomiting as well? Still eating and drinking? How many times today? How long has it been going on?",
    rows: [
      { sign: "Dark, tarry, or black stools (melaena)", outcome: "EMERGENCY", note: "Indicates bleeding in the upper GI tract. More serious than bright red blood." },
      { sign: "Large amounts of bright red blood in stool", outcome: "EMERGENCY", note: "Significant haemorrhagic diarrhea — risk of shock and dehydration." },
      { sign: "Collapse, weakness, or pale gums alongside diarrhea", outcome: "EMERGENCY", note: "Systemic compromise — possible haemorrhagic gastroenteritis or parvovirus." },
      { sign: "Puppy or kitten under 16 weeks, or unvaccinated", outcome: "EMERGENCY", note: "Parvovirus/panleukopenia risk. Can be fatal within hours. Come in immediately." },
      { sign: "Vomiting AND diarrhea for more than 24 hours", outcome: "URGENT", note: "Significant dehydration risk from combined losses." },
      { sign: "Watery diarrhea more than 6 times today", outcome: "URGENT", note: "High frequency watery diarrhea — electrolyte imbalance and dehydration risk." },
      { sign: "Soft/loose stools 3–6 times, not eating or drinking well", outcome: "URGENT", note: "Reduced intake alongside moderate diarrhea needs same-day check." },
      { sign: "Small amount of bright red blood, otherwise well", outcome: "SOON", note: "Likely colitis or minor irritation. Appointment within 24 hours." },
      { sign: "Soft/loose stools 3–6 times, still eating and drinking", outcome: "SOON", note: "Monitor closely. Appointment within 24 hours." },
      { sign: "Soft stool 1–2 times, bright and alert, recent dietary change", outcome: "MONITOR", note: "Often dietary. Bland diet, monitor 48 hrs. Call back if blood appears, stops drinking, or worsens." },
      { sign: "Ongoing or recurring loose stools in otherwise stable animal", outcome: "ROUTINE", note: "Chronic or intermittent — needs workup. Book routine appointment." },
    ]
  },

  urinary: {
    askFirst: "Is your pet able to pass urine at all? Are they straining? Any blood visible? Drinking more than usual? Any signs of pain? Is this a male cat?",
    rows: [
      { sign: "Male cat straining with little or no urine output", outcome: "EMERGENCY", note: "Urethral obstruction until proven otherwise. Life-threatening within hours. Come in immediately." },
      { sign: "Any animal straining with no urine produced in 12+ hours", outcome: "EMERGENCY", note: "Possible obstruction or acute kidney injury. Emergency assessment." },
      { sign: "Blood in urine with signs of pain, crying, or tense abdomen", outcome: "EMERGENCY", note: "Possible obstruction, bladder rupture, or severe infection." },
      { sign: "Straining to urinate with little output — not a male cat", outcome: "URGENT", note: "Possible obstruction or severe cystitis. Same-day assessment." },
      { sign: "Blood in urine, no obvious pain signs", outcome: "URGENT", note: "Haematuria — likely cystitis or UTI. Urinalysis needed. Same-day or next-day." },
      { sign: "Urinating much more frequently AND drinking much more", outcome: "URGENT", note: "Polyuria/polydipsia — significant clinical sign. Possible diabetes, kidney disease, Addison's." },
      { sign: "Urinating more frequently, drinking normally", outcome: "SOON", note: "Lower urinary tract issue likely. Appointment within 24–48 hrs. Bring urine sample if possible." },
      { sign: "Owner noticed change in urination but pet seems otherwise well", outcome: "ROUTINE", note: "Urinalysis appropriate. Book routine appointment." },
    ]
  },

  breathing: {
    askFirst: "Is your pet working hard to breathe right now? What colour are the gums? Is there a cough — and what does it sound like? Any known heart condition? Has this come on suddenly?",
    rows: [
      { sign: "Obvious struggle to breathe, visible effort with each breath", outcome: "EMERGENCY", note: "Do not leave this animal to wait. Come in immediately." },
      { sign: "Cat breathing with mouth open", outcome: "EMERGENCY", note: "Open-mouth breathing in a cat is always an emergency — no exceptions." },
      { sign: "Gums pale, grey, blue, or white", outcome: "EMERGENCY", note: "Inadequate oxygen delivery. Cyanosis or pallor = emergency regardless of other signs." },
      { sign: "Collapse alongside breathing changes", outcome: "EMERGENCY", note: "Possible cardiac event, respiratory failure, or shock." },
      { sign: "Sudden onset coughing with distress or gagging", outcome: "EMERGENCY", note: "Possible foreign body inhalation or acute cardiac event." },
      { sign: "Known cardiac patient with any new respiratory sign", outcome: "URGENT", note: "Risk of decompensation. Same-day assessment." },
      { sign: "Wet or productive cough, especially at night or after exercise", outcome: "URGENT", note: "Possible pulmonary edema from heart disease. Same-day." },
      { sign: "Breathing faster than normal at rest", outcome: "URGENT", note: "Resting tachypnea is significant even without distress. Same-day." },
      { sign: "Dry intermittent cough, otherwise well, no cardiac history", outcome: "SOON", note: "Appointment within 24–48 hours. Monitor for worsening." },
      { sign: "Owner noticed subtle change in breathing pattern", outcome: "SOON", note: "Any change in breathing pattern warrants prompt assessment." },
    ]
  },

  lameness: {
    askFirst: "Is the pet putting any weight on the leg at all? Was there any trauma — a fall, road accident, or fight? Which leg? Any swelling, heat, or deformity? How long has it been going on?",
    rows: [
      { sign: "Cat with sudden loss of use of both back legs, cold or painful limbs", outcome: "EMERGENCY", note: "Possible aortic thromboembolism (saddle thrombus) — cardiac emergency. Time-critical." },
      { sign: "Trauma — road accident, fall from height, fight", outcome: "EMERGENCY", note: "Even if the animal seems okay, internal injuries are possible. Needs immediate assessment." },
      { sign: "Obvious deformity, abnormal limb angle, or crepitus (a grinding or crackling sensation/sound felt at the joint or along the bone)", outcome: "EMERGENCY", note: "Possible fracture or dislocation." },
      { sign: "Complete non-weight bearing with signs of shock or severe pain", outcome: "EMERGENCY", note: "Fracture, severe injury, or systemic involvement." },
      { sign: "Complete non-weight bearing, no known trauma", outcome: "URGENT", note: "Possible fracture, severe soft tissue injury, or joint problem. Same-day." },
      { sign: "Toe-touching lameness with swelling or heat at joint", outcome: "URGENT", note: "Possible joint infection, fracture, or significant soft tissue injury. Same-day." },
      { sign: "Toe-touching lameness without swelling, no trauma", outcome: "SOON", note: "Likely soft tissue injury. Rest and appointment within 24 hours." },
      { sign: "Noticeable limp, walking on it, started today", outcome: "SOON", note: "Monitor 24 hours. Book appointment if not improving." },
      { sign: "Mild limp present for 2–5 days, otherwise well", outcome: "ROUTINE", note: "Rest, avoid strenuous exercise. Routine appointment for assessment." },
      { sign: "Intermittent or chronic limp, no acute change", outcome: "ROUTINE", note: "Likely chronic musculoskeletal issue. Routine appointment, may need X-rays." },
    ]
  },

  eyes: {
    askFirst: "Is the eye open or closed? Is your pet rubbing at it? Any discharge — and what does it look like? Is the eye red? Does it look cloudy or different in size? Any injury?",
    rows: [
      { sign: "Visible injury to the eye — scratch, puncture, or foreign body", outcome: "EMERGENCY", note: "Prevent rubbing. Come in immediately. Do not attempt to remove anything." },
      { sign: "Eyeball visibly protruding or larger than the other eye", outcome: "EMERGENCY", note: "Proptosis or acute glaucoma. Permanent vision loss possible if not treated immediately." },
      { sign: "Eye completely shut, signs of significant pain", outcome: "URGENT", note: "Possible corneal ulcer, acute glaucoma, or foreign body. Eye conditions deteriorate rapidly." },
      { sign: "Red eye with cloudiness or haziness", outcome: "URGENT", note: "Possible corneal ulcer, uveitis, or glaucoma. Same-day." },
      { sign: "Brachycephalic breed (pug, bulldog, French bulldog, Persian) with any eye concern", outcome: "URGENT", note: "Higher risk of corneal exposure and injury. Err toward same-day." },
      { sign: "Red eye, no cloudiness, no pain signs", outcome: "SOON", note: "Possible conjunctivitis. Appointment within 24 hours." },
      { sign: "Thick yellow or green discharge", outcome: "SOON", note: "Suggests infection. Appointment within 24–48 hours." },
      { sign: "Clear watery discharge, otherwise comfortable", outcome: "ROUTINE", note: "Monitor. Routine appointment if persistent. Advise client to prevent rubbing." },
    ]
  },

  wounds: {
    askFirst: "Is it bleeding heavily? Was there an accident or impact involved? Was this a bite wound? How deep does it look? Where on the body is it? Any swelling, heat, or smell?",
    rows: [
      { sign: "Heavy, spurting, or uncontrolled bleeding", outcome: "EMERGENCY", note: "Apply gentle pressure with clean cloth and come in immediately. Do not remove the cloth." },
      { sign: "Road traffic accident, fall from height, or significant trauma", outcome: "EMERGENCY", note: "Internal injuries possible even if the animal appears okay. Immediate assessment." },
      { sign: "Bite wound from another animal", outcome: "URGENT", note: "Always deeper than they look. High infection risk including abscess and sepsis. All bite wounds need same-day assessment." },
      { sign: "Deep, gaping, or open wound exposing tissue", outcome: "URGENT", note: "May require suturing or debridement. Ideally closed within a few hours." },
      { sign: "Wound near head, neck, chest, or abdomen", outcome: "URGENT", note: "Proximity to vital structures. Even small wounds here may involve deeper injuries." },
      { sign: "Wound near a joint or paw", outcome: "URGENT", note: "Risk of joint cavity involvement. Infection here is serious." },
      { sign: "Signs of infection — swelling, heat, discharge, bad smell", outcome: "URGENT", note: "Possible abscess. Needs same-day wound management and likely antibiotics." },
      { sign: "Small, superficial, clean wound — animal comfortable", outcome: "ROUTINE", note: "Clean with saline, prevent licking (e-collar), monitor. Routine appointment if not healing within a few days." },
    ]
  },

  neuro: {
    askFirst: "Is your pet having a seizure right now? Are they able to walk? Are they circling or tilting their head? Is their face symmetrical? Did this come on suddenly?",
    rows: [
      { sign: "Seizure lasting more than 5 minutes, or multiple seizures within an hour", outcome: "EMERGENCY", note: "Status epilepticus — life-threatening. Keep away from hard surfaces. Come in immediately." },
      { sign: "Sudden inability to walk or dragging back legs", outcome: "EMERGENCY", note: "Possible disc herniation, spinal cord injury, or aortic thromboembolism (cats). Time-critical." },
      { sign: "Single seizure, now in post-ictal period (confused, wobbly)", outcome: "URGENT", note: "Needs same-day assessment to investigate cause." },
      { sign: "Acute onset circling, head tilt, or rolling — started in last few hours", outcome: "URGENT", note: "Acute vestibular syndrome — can be benign or indicate serious intracranial disease. Same-day to distinguish." },
      { sign: "Facial drooping or asymmetry — lip, eyelid, inability to blink", outcome: "URGENT", note: "Facial nerve paresis — possible ear disease, intracranial disease, or trauma." },
      { sign: "Sudden onset ataxia (wobbly/uncoordinated) in last few hours", outcome: "URGENT", note: "Possible toxin, vestibular disease, or intracranial problem." },
      { sign: "Ongoing head tilt or circling, not acute", outcome: "SOON", note: "Appointment within 24 hours for neurological assessment." },
      { sign: "Gradual onset ataxia over days or weeks", outcome: "SOON", note: "Progressive — appointment within 24–48 hours." },
      { sign: "Behavioural changes — confusion, getting stuck, not recognising people", outcome: "SOON", note: "Possible intracranial disease or hepatic encephalopathy. Appointment within 24 hours." },
    ]
  },

  lethargy: {
    askFirst: "Is your pet able to stand? What colour are the gums? When did they last eat? Are they still drinking? How flat are they — slightly quiet or barely responding? Any other symptoms? Age and existing health conditions?",
    rows: [
      { sign: "Collapsed or unresponsive", outcome: "EMERGENCY", note: "Come in immediately." },
      { sign: "Gums pale, white, yellow, blue, or abnormal colour", outcome: "EMERGENCY", note: "Possible anaemia, jaundice, shock, or oxygen deprivation. Emergency." },
      { sign: "Cat not eating for more than 48 hours", outcome: "URGENT", note: "Risk of hepatic lipidosis (fatty liver disease). Same-day assessment." },
      { sign: "Not eating for more than 48 hours — any species", outcome: "URGENT", note: "Same-day assessment regardless of other signs." },
      { sign: "Lethargy with vomiting, diarrhea, or other symptoms", outcome: "URGENT", note: "Multiple symptoms increase concern for significant illness." },
      { sign: "Very flat — barely interested in surroundings (7–10 out of 10)", outcome: "URGENT", note: "Significant lethargy in any patient = same-day." },
      { sign: "Young animal under 6 months, elderly over 10 years, or known medical condition", outcome: "URGENT", note: "High-risk patients deteriorate faster. Even mild lethargy warrants same-day in these groups." },
      { sign: "Lethargy with reduced or no drinking", outcome: "URGENT", note: "Dehydration risk. Same-day assessment." },
      { sign: "Noticeably quieter than normal, not eating well for 24–48 hrs, still drinking", outcome: "SOON", note: "Appointment within 24 hours. Monitor closely and call back if worsens." },
      { sign: "Slightly quieter than usual, eating and drinking normally, started today", outcome: "MONITOR", note: "Monitor closely for 12–24 hours. Note any additional symptoms. Call back if worsens or stops drinking." },
    ]
  }
};
,

  toxins: {
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
      { sign: "Permethrin (some dog flea products, e.g. Advantix) — applied to or contacted by a cat", outcome: "EMERGENCY", note: "Cats cannot metabolise permethrin. Causes muscle tremors, hypersalivation, seizures, and death. Can occur from direct application or from contact with a recently treated dog. Wash the cat immediately with washing-up liquid and seek emergency treatment. Time-critical." },
    ]
  }
