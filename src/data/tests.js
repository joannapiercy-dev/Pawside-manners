export const testCategories = [
  { id: "imaging", label: "Imaging", icon: "🩻" },
  { id: "blood", label: "Blood tests", icon: "🩸" },
  { id: "cardiac", label: "Cardiac tests", icon: "🫀" },
  { id: "urine", label: "Urine tests", icon: "🧪" },
  { id: "tissue", label: "Tissue testing", icon: "🔬" },
  { id: "fecal", label: "Fecal tests", icon: "🦠" }
];

export const tests = {

  imaging: [
    {
      id: "xray",
      name: "X-ray (radiograph)",
      purpose: "Evaluates the structure of bones, chest organs (heart, lungs), and abdominal organs. Common for fractures, foreign bodies, chest disease, bladder stones.",
      fast: false,
      fastNote: null,
      sedation: "sometimes",
      sedationNote: "Usually no sedation needed. May require sedation for large, wiggly, or anxious patients, or for specific positions such as extended hip views (hip dysplasia scoring). If injectable sedation is used, patient must be fasted at least 6 hours beforehand.",
      shave: false,
      dropoff: false,
      dropoffNote: "Usually quick — most X-rays are done while the owner waits or within an hour. Drop-off may be arranged if sedation is needed.",
      clientScript: "X-rays are usually quick and most pets don't need sedation. If we think sedation might be needed for your pet — for example if they're anxious or we need a specific position — we'll let you know and ask you to fast them from the night before.",
      flags: []
    },
    {
      id: "ultrasound",
      name: "Ultrasound",
      purpose: "Evaluates the internal structure of abdominal organs (liver, spleen, kidneys, intestines, bladder, lymph nodes, adrenal glands). Not useful for bone or lung detail.",
      fast: true,
      fastNote: "12 hours fasted for abdominal ultrasound. NOT required to be fasted for bladder-only or musculoskeletal ultrasound.",
      sedation: "yes",
      sedationNote: "Sedation is required. Because injectable sedation is used, the 12-hour fast applies regardless. Allows time for sedation to wear off afterwards.",
      shave: true,
      shaveNote: "The abdomen (or relevant area) will be shaved for probe contact. Please let owners know so they are not surprised.",
      dropoff: true,
      dropoffNote: "Drop off for the duration — can take several hours, particularly once sedation recovery time is factored in. Advise owners to expect a half to full day.",
      clientScript: "For an abdominal ultrasound, we'll need your pet to fast from midnight the night before — a full stomach makes it hard to see the organs clearly. We'll also need to shave a patch of fur on their belly, and because they'll have a sedative, they'll need to stay with us for several hours while it wears off.",
      flags: ["fast-12h", "sedation", "shave", "dropoff"]
    },
    {
      id: "echo",
      name: "Echocardiogram",
      purpose: "Evaluates the structure and function of the heart — chamber size, wall thickness, valve function, and pumping ability. Used to diagnose and monitor heart disease.",
      fast: false,
      fastNote: "No fasting required.",
      sedation: "oral-only",
      sedationNote: "Chill protocol only — oral sedation given 2–3 hours before the appointment. No injectable sedation. Because it is oral sedation, fasting is NOT required.",
      shave: true,
      shaveNote: "Small patches on the side of the chest will be shaved for probe contact.",
      dropoff: true,
      dropoffNote: "Drop off for the duration — can take several hours. The oral sedative is given 2–3 hours before, so early drop-off is needed.",
      clientScript: "For the echocardiogram, your pet doesn't need to be fasted — they can have a normal breakfast. We'll give them a mild oral sedative to help them stay calm and still for the scan. We'll need them dropped off a few hours before the scan is scheduled so the sedative has time to work, and they'll stay with us for the duration — plan on a half to full day.",
      flags: ["oral-sedation", "shave", "dropoff"]
    }
  ],

  blood: [
    {
      id: "cbc",
      name: "CBC (Complete Blood Count)",
      purpose: "Measures red blood cells (to check for anaemia), white blood cells (to check for infection or immune response), and platelets (clotting). A fundamental panel used in almost every workup.",
      fast: false,
      fastNote: "Fasting not required, though it may be combined with tests that do require fasting.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw — usually no drop-off needed unless combined with other tests.",
      clientScript: "A CBC is a blood test that looks at the different types of blood cells — it's one of the most common tests we run and only takes a few minutes to collect.",
      flags: []
    },
    {
      id: "chemistry",
      name: "Chemistry panel",
      purpose: "Tests a variety of organ function values including glucose, kidney values (creatinine, BUN, SDMA), liver values (ALT, ALP, GGT, bilirubin), proteins, electrolytes, and sometimes pancreatic values. Often run alongside a CBC.",
      fast: false,
      fastNote: "Fasting not required for most chemistry panels, though a light fast (4–6 hours) reduces lipemia which can interfere with some values. Check with the clinical team.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw.",
      clientScript: "A chemistry panel is a blood test that checks how the major organs — like the kidneys, liver, and pancreas — are functioning. It only takes a moment to collect the sample.",
      flags: []
    },
    {
      id: "preanesthetic",
      name: "Pre-anaesthetic panel / Presurgical profile",
      purpose: "Run before any procedure requiring anaesthesia. Checks that the patient is safe to anaesthetise. Includes CBC (red cells, white cells) and basic chemistry (kidney values, liver values, proteins). In-house or sent to Idexx (Vancouver) = 'pre-anaesthetic panel'. Sent to True North Lab (Vancouver) = 'presurgical profile'.",
      fast: false,
      fastNote: "The blood test itself does not require fasting, but the procedure it precedes will. Fasting requirements follow the procedure, not the blood test.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Usually collected at a pre-op appointment or on the morning of surgery.",
      clientScript: "Before any procedure under anaesthesia, we run a blood test to make sure your pet's kidneys and liver are functioning well enough to process the anaesthetic safely. We'll let you know when we need this done.",
      flags: [],
      labNote: "In-house or Idexx: pre-anaesthetic panel. True North: presurgical profile."
    },
    {
      id: "general-panel",
      name: "General panel / Baseline profile",
      purpose: "A broader screen than the pre-anaesthetic panel. Includes CBC plus more complete chemistry: red cells, white cells, glucose, kidney values, liver values, electrolytes. In-house or Idexx = 'general panel'. True North = 'baseline profile'.",
      fast: false,
      fastNote: "A light fast is preferred to reduce lipemia but not always required. Check with the clinical team.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw.",
      clientScript: "A general panel is a broad blood screen that looks at organ function, blood cell counts, glucose, and electrolytes — it gives us a good overall picture of your pet's health.",
      flags: [],
      labNote: "In-house or Idexx: general panel. True North: baseline profile."
    },
    {
      id: "geriatric-panel",
      name: "Geriatric panel / Senior profile",
      purpose: "The most comprehensive blood panel. Includes CBC plus full chemistry plus T4 (thyroid). In-house and Idexx also include SDMA (early kidney marker). Tests for: red cells, white cells, glucose, kidney values (including SDMA), liver values, electrolytes, pancreatic values, and thyroid function. In-house or Idexx = 'geriatric panel'. True North = 'senior profile'.",
      fast: false,
      fastNote: "A light fast is preferred. Some components (e.g. pancreatic values) may be affected by a recent meal.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw.",
      clientScript: "The senior panel is our most complete blood screen — it covers everything in the general panel, plus thyroid function. It's what we recommend as an annual check for older pets.",
      flags: [],
      labNote: "In-house or Idexx: geriatric panel (includes SDMA). True North: senior profile."
    },
    {
      id: "lytes",
      name: "Electrolytes (Lytes)",
      purpose: "Tests sodium (Na), potassium (K), and chloride (Cl). Used when electrolyte imbalance is suspected — vomiting, diarrhea, Addison's disease, kidney disease.",
      fast: false,
      fastNote: "Fasting not required.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw.",
      clientScript: "Electrolytes are minerals in the blood that affect how the body functions. We check them when a pet has been vomiting a lot or when we're investigating certain conditions.",
      flags: []
    },
    {
      id: "bile-acids",
      name: "Bile acids",
      purpose: "Tests liver function — specifically how well the liver processes bile acids from the gut. Used to investigate liver disease, portosystemic shunts, and unexplained elevated liver values.",
      fast: true,
      fastNote: "12 hours fasted before the first sample. A high-calorie meal is then given (we provide this — if pet has food allergies, owner should bring their regular food). A second blood sample is taken 2 hours after feeding. Important: even showing the pet a treat or getting them excited about food can affect the pre-meal result. Do not offer anything edible before the first sample.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: true,
      dropoffNote: "Patient stays in hospital between the two samples — the total time is at least 2 hours plus collection time. We tend to keep them for the day.",
      clientScript: "Bile acids is a two-part test that checks how well the liver is working. Your pet needs to be fasted for 12 hours before they come in — that means no food and no treats from the night before, and please don't let them sniff treats on the way in as even that can affect the result. We'll take a blood sample, feed them a meal here, and then take a second sample 2 hours later — so they'll be with us for most of the morning at minimum. If your pet has any food allergies, please bring their regular food for us to feed them.",
      flags: ["fast-12h", "dropoff", "two-samples"],
      specialNote: "⚠️ Even the sight or smell of food/treats before the first sample can affect results. Advise owners strictly — no food, no treats, and avoid situations where the dog might anticipate food on the way in."
    },
    {
      id: "acth-stim",
      name: "ACTH stimulation test",
      purpose: "Tests for Cushing's disease (hyperadrenocorticism — overproduction of cortisol/steroid) and Addison's disease (hypoadrenocorticism — underproduction of steroid). Two blood samples taken 1 hour apart.",
      fast: false,
      fastNote: "Fasting not required.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: true,
      dropoffNote: "Two blood samples taken 1 hour apart — patient stays in hospital between samples. Usually a 1.5–2 hour visit.",
      clientScript: "The ACTH stimulation test looks at how the adrenal glands respond to stimulation — it helps us diagnose certain hormonal conditions. We'll take two blood samples an hour apart, so your pet will be with us for a couple of hours. No fasting needed.",
      flags: ["dropoff", "two-samples"]
    },
    {
      id: "ldds",
      name: "Low Dose Dexamethasone Suppression (LDDS) test",
      purpose: "Tests for Cushing's disease. Three blood samples taken over 8 hours: one before the dexamethasone injection, one 4 hours after, and one 8 hours after. Timing is essential.",
      fast: false,
      fastNote: "Fasting not required.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: true,
      dropoffNote: "Three samples over 8 hours. Patient can stay in hospital all day if that is not overly stressful. Alternatively, patient can go home between samples IF the owner can bring them back at precise times — 4 hours after the injection and exactly 8 hours after. Timing is critical. Stress affects results.",
      clientScript: "This test checks for a hormonal condition called Cushing's disease and takes a full day — we collect three blood samples over 8 hours. Your pet can stay with us for the day, or if staying here would be stressful for them, you could take them home between collections and bring them back at specific times — the timing needs to be very exact though. We'll go through the options with you.",
      flags: ["dropoff", "three-samples"],
      specialNote: "⚠️ Timing is critical — 4-hour and 8-hour samples must be on time. Stress affects cortisol results, so a very anxious patient may be better at home between samples. Confirm with the clinical team which approach is preferred for each patient."
    },
    {
      id: "cpl-fpl",
      name: "Pancreatic lipase (cPL / fPL)",
      purpose: "Tests for pancreatitis. cPL = canine pancreatic lipase. fPL = feline pancreatic lipase. Can be run in-house or sent to Idexx.",
      fast: true,
      fastNote: "Fast 8–12 hours before collection.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw.",
      clientScript: "This blood test checks the pancreas for inflammation — we call that pancreatitis. Your pet will need to fast for 8–12 hours before we collect the sample, so no food from the evening before.",
      flags: ["fast-8-12h"]
    },
    {
      id: "b12-folate",
      name: "B12 (Cobalamin) & Folate",
      purpose: "Tests for small intestinal disease and malabsorption. Low B12 and/or abnormal folate can indicate conditions such as small intestinal bacterial overgrowth (SIBO), EPI, or chronic enteropathy.",
      fast: true,
      fastNote: "Fast 8–12 hours before collection.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw.",
      clientScript: "B12 and folate are vitamins absorbed in the small intestine — measuring them helps us understand how well that part of the gut is working. Your pet needs to fast for 8–12 hours before the blood draw.",
      flags: ["fast-8-12h"]
    },
    {
      id: "tli",
      name: "TLI (Trypsin-like Immunoreactivity)",
      purpose: "Tests for exocrine pancreatic insufficiency (EPI) — a condition where the pancreas does not produce enough digestive enzymes. Often causes weight loss despite a good appetite and chronic loose stools.",
      fast: true,
      fastNote: "Fast 8–12 hours before collection.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw.",
      clientScript: "This test checks whether the pancreas is producing enough digestive enzymes — a condition called EPI can cause significant weight loss and digestive problems. Your pet needs to fast for 8–12 hours before the sample is collected.",
      flags: ["fast-8-12h"]
    },
    {
      id: "probnp",
      name: "proBNP",
      purpose: "Tests for abnormal stretch in the heart muscle, which occurs when the heart is under stress. Used to screen for cardiac disease in apparently healthy animals, or to monitor known cardiac patients.",
      fast: false,
      fastNote: "Fasting not required.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw.",
      clientScript: "proBNP is a blood test that can detect early signs of heart strain — it's a useful screening test especially in breeds prone to heart disease.",
      flags: []
    },
    {
      id: "ica",
      name: "Ionized Calcium (iCa)",
      purpose: "Tests for significant elevations in calcium (hypercalcaemia). More accurate than total calcium for detecting true hypercalcaemia. Can indicate cancer, hyperparathyroidism, or other conditions.",
      fast: true,
      fastNote: "Fast 12 hours before collection.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw.",
      clientScript: "Ionized calcium is a blood test that measures the active form of calcium in the blood — a 12-hour fast is needed before we collect the sample.",
      flags: ["fast-12h"]
    },
    {
      id: "pth-ica",
      name: "PTH / iCa (Parathyroid hormone)",
      purpose: "Tests for hyperparathyroidism — a condition where the parathyroid glands produce too much PTH, causing elevated calcium. Often run alongside ionized calcium.",
      fast: true,
      fastNote: "Fast if possible — ideally 12 hours.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw — sample handling is important, check with the clinical team on how to process and ship this sample.",
      clientScript: "PTH is a hormone that regulates calcium levels — we test it alongside calcium when we're investigating why calcium is elevated. Please fast your pet for 12 hours before the appointment if possible.",
      flags: ["fast-preferred"]
    },
    {
      id: "coag",
      name: "Coagulation screen",
      purpose: "Tests for abnormalities in the blood's ability to clot. Used when bleeding disorders are suspected — e.g. before surgery in a patient with a clotting concern, or when investigating unexplained bleeding.",
      fast: true,
      fastNote: "Fast 12 hours before collection. Lipemia (fat in the blood from a recent meal) can interfere with coagulation test results.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw — sample must be handled and processed carefully. Check with the clinical team.",
      clientScript: "A coagulation screen tests how well your pet's blood clots — we use it before certain surgeries or when there are concerns about bleeding. A 12-hour fast is needed before collection.",
      flags: ["fast-12h"]
    },
    {
      id: "thyroid",
      name: "T4, fT4 (free T4), TSH",
      purpose: "Tests thyroid function. T4 is the main thyroid hormone. High T4 = hyperthyroidism (common in older cats). Low T4 with high TSH = hypothyroidism (more common in dogs). fT4 (free T4) is more sensitive and specific than total T4. TSH measures the pituitary signal to the thyroid.",
      fast: false,
      fastNote: "Fasting not required.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick blood draw.",
      clientScript: "Thyroid tests check how the thyroid gland is functioning. An overactive thyroid is common in older cats, and an underactive thyroid can affect dogs. No fasting needed.",
      flags: []
    }
  ],

  cardiac: [
    {
      id: "ecg",
      name: "ECG (Electrocardiogram)",
      purpose: "Records the electrical activity of the heart to detect arrhythmias (abnormal heart rhythms). Quick, non-invasive, and does not require sedation.",
      fast: false,
      fastNote: "No fasting required.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Usually done in the consult room — takes only a few minutes.",
      clientScript: "An ECG records the heart's electrical activity using small sensors placed on the skin. It's completely painless and takes just a few minutes — no sedation or fasting needed.",
      flags: []
    },
    {
      id: "holter",
      name: "Holter monitor",
      purpose: "Records the heart's rhythm continuously over 24 hours, allowing detection of arrhythmias that may be intermittent and not captured on a standard in-clinic ECG. Used when a patient has episodes of collapse, weakness, or suspected intermittent arrhythmia.",
      fast: false,
      fastNote: "No fasting required.",
      sedation: "no",
      sedationNote: null,
      shave: true,
      shaveNote: "A patch on the side of the chest is shaved to allow electrode placement. This is more extensive than a spot-shave — advise owners in advance.",
      dropoff: true,
      dropoffNote: "Patient is dropped off, electrodes are placed and the monitor is fitted, then they go home wearing the monitor in a neoprene jacket for 24 hours. They return the following day for monitor removal and data download.",
      clientScript: "A Holter monitor is like a continuous ECG worn at home for 24 hours — it records the heart's rhythm all day and night so we can catch any irregularities that might only happen occasionally. We'll shave a patch on the side of the chest to attach the electrodes, fit the monitor, and send your pet home in a little jacket that holds it all in place. They come back the next day for removal. Most pets tolerate it well. Just make sure they can't chew at the jacket overnight.",
      flags: ["shave", "dropoff"],
      specialNote: "Advise owners not to let the pet get wet or chew at the jacket. The data is downloaded and analysed after return."
    }
  ],

  urine: [
    {
      id: "urinalysis",
      name: "Urinalysis (UA)",
      purpose: "Tests urine for: bacteria, crystals, glucose (possible diabetes), ketones (emergency sign), protein, and concentrating ability (kidney function). One of the most informative and commonly run tests.",
      fast: false,
      fastNote: "No fasting required. For dogs, a first-morning sample is preferred for concentration assessment. For cats, timing is less important — see collection notes below.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "No drop-off needed — sample can be collected in-clinic or owner can bring a fresh sample from home. All home-collected samples should be refrigerated and delivered within 12 hours.",
      clientScript: "Dogs: if you can collect the first urine of the morning in a clean container and bring it in within a couple of hours, that's ideal — we can also collect a sample here. Cats: we sell a product called Nosorb — plastic beads you put in a cleaned, dried litterbox instead of regular litter. Your cat uses the box as normal, then you collect the urine from the box using the syringe we give you. All home samples should be kept in the fridge and brought in within 12 hours.",
      flags: [],
      specialNote: "⚠️ Ketones in urine is an emergency sign — if flagged on a urinalysis, escalate to the clinical team immediately. Home samples: must be refrigerated and delivered within 12 hours. For Nosorb collection: the litterbox must be emptied, cleaned thoroughly, and dried completely before adding the beads — any residue from regular litter will contaminate the sample."
    },
    {
      id: "upc",
      name: "UPC ratio (Urine Protein:Creatinine ratio)",
      purpose: "Tests for protein leaking into the urine, which indicates kidney damage. Used to monitor kidney disease and assess the severity of protein loss.",
      fast: false,
      fastNote: "No fasting required. A first-morning sample preferred.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Quick urine sample — no drop-off needed.",
      clientScript: "The UPC ratio checks whether the kidneys are leaking protein into the urine — it's an important test for monitoring kidney health. No fasting needed, but a first-morning sample is ideal if possible.",
      flags: []
    },
    {
      id: "urine-culture",
      name: "Urine culture",
      purpose: "Tests for bacterial infection in the urine and identifies which antibiotics will be effective (sensitivity testing). Ideally collected by cystocentesis (needle directly into the bladder under ultrasound guidance) to avoid contamination. A free-catch sample may be used if cystocentesis is not possible, but results are harder to interpret as contamination is possible.",
      fast: false,
      fastNote: "No fasting required. However, if cystocentesis is planned and the clinical team thinks sedation may be needed, fasting may be required — check.",
      sedation: "no",
      sedationNote: "Cystocentesis is usually done without sedation. Occasionally sedation or local anaesthetic is used in anxious patients.",
      shave: false,
      dropoff: false,
      dropoffNote: "Usually collected in-clinic during an appointment. Results from the lab typically take 3–5 days.",
      clientScript: "A urine culture identifies whether there's a bacterial infection and which antibiotic will treat it best. The most accurate way to collect the sample is with a small needle directly into the bladder — it sounds daunting but most pets barely notice. We'll explain the process when you come in.",
      flags: [],
      specialNote: "Cystocentesis sample = gold standard. Free-catch sample = acceptable but results should be interpreted cautiously. Always note on the request form which collection method was used."
    }
  ],
  tissue: [
    {
      id: "cytology",
      name: "Cytology",
      purpose: "Examines individual cells collected by needle poke (fine needle aspirate), impression smear, or swab. Tests for infection, inflammation, or abnormal/cancerous cells. Faster and less invasive than histology. Some samples can be evaluated in-house (ear cytology, skin cytology, some lumps) — more complex samples are sent to a lab in Vancouver.",
      fast: false,
      fastNote: "No fasting required.",
      sedation: "sometimes",
      sedationNote: "Most cytology samples are collected without sedation — a quick needle poke. Sedation may be needed for deeper masses, anxious patients, or difficult locations. If injectable sedation is used, fast for at least 6 hours.",
      shave: false,
      dropoff: false,
      dropoffNote: "Usually collected during a standard appointment. In-house results are available quickly. Send-out samples go to a lab in Vancouver — turnaround varies, typically a few days.",
      clientScript: "Cytology involves collecting a small sample of cells — usually with a quick needle poke into the lump or affected area — to look at under the microscope. It's fast and most pets tolerate it well without sedation. Some samples we can look at here in the clinic straight away; others we send to a lab in Vancouver for a specialist to review.",
      flags: [],
      specialNote: "In-house cytology: ear, skin, and some superficial lumps. Send-out to Vancouver: complex or deep masses, lymph nodes, internal organs. Always note in the record which was done and when the result is expected."
    },
    {
      id: "histology",
      name: "Histology (biopsy)",
      purpose: "Examines a chunk of tissue removed by surgical biopsy — looks at blocks of cells in their structural context rather than individual cells. More definitive than cytology for diagnosing cancer type, grading tumours, and assessing surgical margins. Samples are sent to a lab in Vancouver.",
      fast: true,
      fastNote: "Fasting required for the surgical biopsy procedure — minimum 6 hours for injectable sedation/anaesthesia. Usually 8–12 hours (overnight fast).",
      sedation: "yes",
      sedationNote: "Surgical biopsy requires anaesthesia. Patient must be fasted — minimum 6 hours for injectable sedation, typically overnight.",
      shave: true,
      shaveNote: "Surgical site will be shaved. Advise client in advance.",
      dropoff: true,
      dropoffNote: "Drop-off required for the surgical procedure and anaesthetic recovery. Usually a half to full day.",
      clientScript: "A biopsy involves surgically removing a small piece of tissue so we can send it to a specialist lab in Vancouver. Your pet will need a general anaesthetic, so they'll need to fast from the night before and be dropped off with us for the day. Results typically take over two weeks to come back — we'll contact you as soon as we hear.",
      flags: ["fast-12h", "sedation", "shave", "dropoff"],
      specialNote: "Results from histology typically take 2 weeks or more. Make sure clients are aware of this timeline at the time of booking and again at drop-off — two weeks is longer than most clients expect and worth flagging proactively."
    }
  ],
  ,
  fecal: [
    {
      id: "op",
      name: "Ova & Parasites (O&P)",
      purpose: "Tests for eggs (ova) of intestinal worms — roundworms, hookworms, whipworms, tapeworms. May also detect protozoal infections such as Giardia or Coccidia, though dedicated tests are more sensitive for these. One of the most common fecal tests run.",
      fast: false,
      fastNote: "No fasting required. A fresh fecal sample is needed — ideally collected within a few hours of the appointment and kept refrigerated if there is a delay. Advise clients to collect a small amount (about a teaspoon) in a clean container or zip-lock bag.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "No drop-off needed. Sample can be brought in by the owner or collected at the clinic.",
      clientScript: "We'll need a small fresh stool sample — about a teaspoon is plenty. Collect it in a clean container or a zip-lock bag, keep it in the fridge if you can't bring it in right away, and try to get it to us within a few hours. We can also collect a sample here if needed.",
      flags: [],
      labNote: "Available in-house, or send-out to Idexx (Vancouver) or True North Lab (Vancouver). In-house results are available same day. Send-out results typically take 2–3 days.",
      specialNote: "O&P is good for detecting worm eggs but less sensitive for Giardia and Coccidia — if these are specifically suspected, a dedicated Giardia test or PCR panel is more reliable."
    },
    {
      id: "giardia",
      name: "Giardia test",
      purpose: "Tests specifically for Giardia — a protozoal parasite commonly picked up by dogs drinking from puddles, streams, or other contaminated water sources. Causes intermittent diarrhea, soft stools, and sometimes mucus in the stool. Two main test types: direct microscopy (visual examination of the sample) or SNAP antigen test (more sensitive, tests for Giardia protein). Often bundled alongside other tests.",
      fast: false,
      fastNote: "No fasting required. Fresh fecal sample preferred.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "No drop-off needed.",
      clientScript: "We're going to test specifically for Giardia — a common intestinal parasite dogs often pick up from puddles or outdoor water sources. We just need a small fresh stool sample. If your dog drinks from puddles or streams regularly, it's worth mentioning that to the vet.",
      flags: [],
      labNote: "Available in-house (SNAP antigen test or direct microscopy) or send-out to Idexx. Often bundled with O&P or diarrhea panels.",
      specialNote: "The SNAP antigen test is generally more sensitive than direct microscopy for Giardia. If in-house microscopy is negative but Giardia is still suspected clinically, a SNAP test or send-out is worth considering."
    },
    {
      id: "diarrhea-pcr",
      name: "Diarrhea PCR panel",
      purpose: "A comprehensive molecular test that screens for a wide variety of bacterial, viral, and protozoal causes of diarrhea in a single sample — including Salmonella, Campylobacter, Clostridium, Cryptosporidium, Giardia, parvovirus, coronavirus, and more. Does NOT test for intestinal worms (eggs) unless a worm component is specifically bundled in. More sensitive than culture or microscopy for many pathogens.",
      fast: false,
      fastNote: "No fasting required. Fresh fecal sample preferred.",
      sedation: "no",
      sedationNote: null,
      shave: false,
      dropoff: false,
      dropoffNote: "Send-out test — no drop-off needed, but allow several days for results.",
      clientScript: "This is a comprehensive stool test that checks for a wide range of infections that can cause diarrhea — bacteria, viruses, and parasites. We send the sample to a lab and results usually come back within a few days. It does not check for worms specifically, so we may pair it with an O&P test if worms are also a concern.",
      flags: [],
      labNote: "Send-out to Idexx lab in Vancouver. Results typically take 3–5 days. Does not include worm eggs unless a combined panel is ordered — confirm with the clinical team which panel is being sent.",
      specialNote: "⚠️ The diarrhea PCR panel does NOT detect intestinal worm eggs. If worms are suspected alongside an infectious cause, an O&P test should be added separately."
    }
  ]
};

export const testQuiz = [
  {
    question: "A client calls to book an abdominal ultrasound. What do you tell them about preparation?",
    options: [
      "No preparation needed — just come in",
      "Fast for 12 hours, expect a shave, plan for drop-off for several hours",
      "Fast for 6 hours, no shave needed",
      "Bring a urine sample and fast for 4 hours"
    ],
    correct: 1,
    explanation: "Abdominal ultrasound requires a 12-hour fast (full stomach obscures organ views), shaving of the abdomen, sedation, and a drop-off for the day while the sedative wears off."
  },
  {
    question: "A dog is coming in for bile acids testing. The owner asks if they can give their dog a treat on the way to the clinic. What do you say?",
    options: [
      "A small treat is fine",
      "No — even the sight or smell of food before the first sample can affect the result",
      "Treats are fine as long as they're given more than 2 hours before arrival",
      "Only dry treats are okay"
    ],
    correct: 1,
    explanation: "Even the anticipation of food — seeing a treat, smelling food — can affect the pre-meal bile acids result. Advise owners strictly: no food, no treats, and avoid situations that might excite the dog about eating on the way in."
  },
  {
    question: "A client asks what the difference is between an LDDS test and an ACTH stimulation test.",
    options: [
      "They test for the same thing and are interchangeable",
      "The ACTH stim takes 8 hours; the LDDS takes 1 hour",
      "The ACTH stim tests for both Cushing's and Addison's and takes 1 hour; the LDDS tests for Cushing's only and takes 8 hours",
      "The LDDS requires fasting; the ACTH stim does not"
    ],
    correct: 2,
    explanation: "The ACTH stimulation test can diagnose both Cushing's and Addison's disease and takes about 1 hour (two samples). The LDDS tests for Cushing's only and takes 8 hours (three samples). Neither requires fasting."
  },
  {
    question: "A client is bringing their cat in for an echocardiogram. They ask if they should fast their cat. What do you say?",
    options: [
      "Yes — fast for 12 hours",
      "Yes — fast for 6 hours",
      "No — no fasting needed, but they'll receive an oral sedative to give at home beforehand, and should plan for drop-off for several hours on the day",
      "No fasting and no sedation — it's a quick scan"
    ],
    correct: 2,
    explanation: "Echocardiograms use oral sedation only (the 'chill protocol') — not injectable sedation, so fasting is not required. The owner gives the oral sedative at home 2–3 hours before the appointment. Drop-off is needed because the echo itself can take some time, not because we're administering the sedation."
  },
  {
    question: "Which urine collection method gives the most reliable culture results and why?",
    options: [
      "Free-catch sample — easier to collect",
      "Catheter sample — most common method",
      "Cystocentesis — needle directly into the bladder, avoids contamination from the lower urinary tract",
      "First-morning sample — most concentrated"
    ],
    correct: 2,
    explanation: "Cystocentesis (a needle passed directly into the bladder under ultrasound guidance) is the gold standard for urine culture because it completely avoids contamination from bacteria naturally present in the lower urinary tract and on the skin."
  },
  {
    question: "A patient is coming in for a TLI test. What fasting instructions do you give?",
    options: [
      "No fasting needed",
      "Fast for 4 hours",
      "Fast for 8–12 hours",
      "Fast for 24 hours"
    ],
    correct: 2,
    explanation: "TLI (trypsin-like immunoreactivity), which tests for exocrine pancreatic insufficiency, requires an 8–12 hour fast before collection."
  },
  {
    question: "A client's dog needs an X-ray specifically for hip scoring. Do they need to fast?",
    options: [
      "No — X-rays never require fasting",
      "Yes — fast for at least 6 hours",
      "Only if the dog is large or anxious",
      "Only if the vet decides on the day"
    ],
    correct: 1,
    explanation: "Hip scoring requires extended hip views which need precise positioning — this always requires injectable sedation. Since injectable sedation is involved, a minimum 6-hour fast is required. Always ask clients to fast before hip scoring X-rays. Note: for routine X-rays where sedation may or may not be needed, you can advise 'fast if possible' and check with the clinical team."
  },
  {
    question: "A client calls to book an ionized calcium (iCa) test. What do you tell them about preparation?",
    options: [
      "No preparation needed — just come in",
      "Fast for 4–6 hours",
      "Fast for 12 hours before the blood draw",
      "Fast for 8 hours and bring a urine sample"
    ],
    correct: 2,
    explanation: "Ionized calcium requires a 12-hour fast before collection. A recent meal can affect the result. It's a quick blood draw with no drop-off needed — just make sure the owner knows to withhold food from the night before."
  }
];
