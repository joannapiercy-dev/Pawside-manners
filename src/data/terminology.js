export const termDecks = [
  {
    id: "medical-jargon",
    title: "Medical jargon",
    icon: "🩺",
    description: "Common terms receptionists hear daily — what they mean and how to explain them to clients.",
    color: "#e8f0fe",
    colorDark: "#1a56db",
    terms: [
      {
        id: "j-01",
        term: "Alopecia",
        pronunciation: "al-oh-PEE-shuh",
        meaning: "Hair loss — partial or complete loss of fur from areas that normally have it.",
        clientExplanation: "Your pet is losing fur in patches — we call that alopecia. It can have several causes and we'll work out what's behind it.",
        category: "Dermatology"
      },
      {
        id: "j-02",
        term: "Anorexia",
        pronunciation: "an-oh-REK-see-uh",
        meaning: "Loss of appetite or refusal to eat. In veterinary medicine this is a clinical sign, not an eating disorder.",
        clientExplanation: "When we say your pet is showing anorexia, we just mean they've stopped eating or lost interest in food — it's a clinical term for loss of appetite.",
        category: "General"
      },
      {
        id: "j-03",
        term: "Ascites",
        pronunciation: "ah-SY-teez",
        meaning: "Abnormal accumulation of fluid in the abdominal cavity, causing a swollen belly.",
        clientExplanation: "There's fluid building up inside the abdomen — that's what's causing the swollen belly you've noticed. We call it ascites.",
        category: "Internal Medicine"
      },
      {
        id: "j-04",
        term: "Ataxia",
        pronunciation: "ah-TAK-see-uh",
        meaning: "Loss of coordination or balance — the animal appears wobbly, unsteady, or drunk.",
        clientExplanation: "When we say your pet is ataxic, we mean they're having trouble with balance and coordination — they may look wobbly or unsteady on their feet.",
        category: "Neurology"
      },
      {
        id: "j-05",
        term: "Benign",
        pronunciation: "beh-NINE",
        meaning: "A growth or tumour that is not cancerous and is unlikely to spread or cause serious harm.",
        clientExplanation: "The good news is the lump is benign — that means it's not cancerous and isn't likely to spread. We'll still keep an eye on it.",
        category: "Oncology"
      },
      {
        id: "j-06",
        term: "Brachycephalic",
        pronunciation: "brak-ee-seh-FAL-ik",
        meaning: "Describes breeds with shortened, flattened skulls and faces — e.g. pugs, bulldogs, Persian cats. Often associated with breathing difficulties.",
        clientExplanation: "Your pet is a brachycephalic breed — that means they have a flat face, which can sometimes make breathing harder, especially in heat or after exercise.",
        category: "Breed-specific"
      },
      {
        id: "j-07",
        term: "Cachexia",
        pronunciation: "kah-KEK-see-uh",
        meaning: "Severe muscle wasting and weight loss associated with underlying disease, even when the animal is eating adequately.",
        clientExplanation: "We're seeing significant muscle loss and weight loss — called cachexia — which often signals that something more serious is going on internally.",
        category: "General"
      },
      {
        id: "j-08",
        term: "Cystitis",
        pronunciation: "sis-TY-tis",
        meaning: "Inflammation of the bladder, commonly caused by infection, crystals, or stress (particularly in cats).",
        clientExplanation: "Your pet has cystitis, which means their bladder is inflamed. It's why they're straining to urinate or going more frequently than usual.",
        category: "Urology"
      },
      {
        id: "j-09",
        term: "Dyspnoea",
        pronunciation: "disp-NEE-uh",
        meaning: "Difficulty breathing or laboured breathing — the animal is working hard to breathe.",
        clientExplanation: "Your pet is having difficulty breathing — we call that dyspnoea. It's something we take seriously and want to assess straight away.",
        category: "Respiratory"
      },
      {
        id: "j-10",
        term: "Epistaxis",
        pronunciation: "ep-ih-STAK-sis",
        meaning: "Nosebleed — bleeding from one or both nostrils.",
        clientExplanation: "Epistaxis is just the medical term for a nosebleed. We'll want to find out what's causing it.",
        category: "General"
      },
      {
        id: "j-11",
        term: "Haematuria",
        pronunciation: "hee-mah-TYOO-ree-uh",
        meaning: "Blood in the urine — visible as pink, red, or brown discolouration.",
        clientExplanation: "We've found blood in your pet's urine — the medical term is haematuria. It has several possible causes and we'll run some tests to find out why.",
        category: "Urology"
      },
      {
        id: "j-12",
        term: "Iatrogenic",
        pronunciation: "eye-at-roh-JEN-ik",
        meaning: "A condition or complication caused by medical treatment or intervention itself.",
        clientExplanation: "This side effect actually came from the treatment rather than the original condition — that's called iatrogenic. It doesn't mean anything went wrong; it's a known risk we'll now manage.",
        category: "General"
      },
      {
        id: "j-13",
        term: "Idiopathic",
        pronunciation: "id-ee-oh-PATH-ik",
        meaning: "A disease or condition with no identifiable cause despite thorough investigation.",
        clientExplanation: "We've run the tests and haven't been able to find a specific cause — when that happens we call it idiopathic, which essentially means it's occurring on its own without an obvious reason.",
        category: "General"
      },
      {
        id: "j-14",
        term: "Malignant",
        pronunciation: "mah-LIG-nant",
        meaning: "A tumour or growth that is cancerous, invasive, and has potential to spread to other parts of the body.",
        clientExplanation: "Unfortunately the results show the growth is malignant, which means it is cancerous. We'll talk through what the options are from here.",
        category: "Oncology"
      },
      {
        id: "j-15",
        term: "Metastasis",
        pronunciation: "meh-TAS-tah-sis",
        meaning: "The spread of cancer from its original site to other organs or tissues.",
        clientExplanation: "The cancer has spread from where it started to other areas of the body — that's what we mean by metastasis. The vet will explain what that means for treatment options.",
        category: "Oncology"
      },
      {
        id: "j-16",
        term: "Nystagmus",
        pronunciation: "nih-STAG-mus",
        meaning: "Involuntary, repetitive eye movements — the eyes flicker rapidly from side to side or up and down.",
        clientExplanation: "You may have noticed your pet's eyes moving rapidly on their own — that's called nystagmus. It usually points to an inner ear or neurological issue.",
        category: "Neurology"
      },
      {
        id: "j-17",
        term: "Otitis",
        pronunciation: "oh-TY-tis",
        meaning: "Inflammation or infection of the ear. Otitis externa = outer ear; otitis media = middle ear; otitis interna = inner ear.",
        clientExplanation: "Your pet has otitis — an ear infection or inflammation. The vet will have told you which part of the ear is affected.",
        category: "ENT"
      },
      {
        id: "j-18",
        term: "Prognosis",
        pronunciation: "prog-NOH-sis",
        meaning: "The predicted likely outcome or course of a disease — how the condition is expected to develop.",
        clientExplanation: "When the vet talks about the prognosis, they mean what they expect to happen with the condition going forward — whether things are likely to improve, stay the same, or get harder.",
        category: "General"
      },
      {
        id: "j-19",
        term: "Pyrexia",
        pronunciation: "py-REK-see-uh",
        meaning: "Elevated body temperature — a fever. Normal temperature in dogs and cats is approximately 38–39°C.",
        clientExplanation: "Your pet has a fever — their temperature is higher than it should be. We call that pyrexia. It usually means the body is fighting something.",
        category: "General"
      },
      {
        id: "j-20",
        term: "Regurgitation",
        pronunciation: "reh-gur-jih-TAY-shun",
        meaning: "Passive expulsion of undigested food from the oesophagus, without the abdominal effort of vomiting. Important clinical distinction.",
        clientExplanation: "There's an important difference between vomiting and regurgitation — regurgitation is when food comes back up without much effort, usually shortly after eating. It points to a different set of causes than vomiting.",
        category: "Gastroenterology"
      },
      {
        id: "j-21",
        term: "Subcutaneous (SQ/SC)",
        pronunciation: "sub-kyoo-TAY-nee-us",
        meaning: "Under the skin. Often refers to injections given into the layer of tissue just beneath the skin.",
        clientExplanation: "A subcutaneous injection just means the medication is given under the skin rather than into a vein or muscle — it's usually quick and well-tolerated.",
        category: "Procedures"
      },
      {
        id: "j-22",
        term: "Tachycardia",
        pronunciation: "tak-ih-KAR-dee-uh",
        meaning: "An abnormally fast heart rate.",
        clientExplanation: "Your pet's heart is beating faster than normal — that's called tachycardia. There are various reasons this can happen and the vet will investigate.",
        category: "Cardiology"
      },
      {
        id: "j-23",
        term: "Urticaria",
        pronunciation: "ur-tih-KAIR-ee-uh",
        meaning: "Hives — raised, itchy welts on the skin, usually caused by an allergic reaction.",
        clientExplanation: "Your pet has come out in hives — swollen, itchy bumps on the skin. It's called urticaria and it's usually an allergic reaction to something.",
        category: "Dermatology"
      },
      {
        id: "j-24",
        term: "Vomiting vs regurgitation",
        pronunciation: "",
        meaning: "Vomiting involves active abdominal contractions and expulsion of digested stomach contents. Regurgitation is passive and involves undigested food from the oesophagus.",
        clientExplanation: "We sometimes ask clients to describe carefully what they saw — the difference between vomiting and regurgitation helps us work out where in the digestive system the problem is.",
        category: "Gastroenterology"
      },
      {
        id: "j-25",
        term: "Zoonotic",
        pronunciation: "zoo-oh-NOT-ik",
        meaning: "A disease that can be transmitted from animals to humans.",
        clientExplanation: "A zoonotic disease is one that can potentially spread from your pet to people. We'll make sure you know what precautions to take.",
        category: "Public Health"
      }
    ]
  },
  {
    id: "medications",
    title: "Common medications",
    icon: "💊",
    description: "Brand names, generic names, and what each medication is used for — so you can answer basic client questions confidently.",
    color: "#fef3c7",
    colorDark: "#b45309",
    terms: [
      {
        id: "m-01",
        term: "Amoxicillin / Clavulanate",
        pronunciation: "ah-mox-ih-SIL-in / klav-yoo-LAN-ate",
        meaning: "A broad-spectrum antibiotic combination. Brand names include Clavamox (veterinary) and Augmentin (human equivalent). Used for skin, respiratory, urinary, and soft tissue infections.",
        clientExplanation: "This is an antibiotic — it treats bacterial infections. It's important to finish the full course even if your pet seems better.",
        category: "Antibiotics"
      },
      {
        id: "m-02",
        term: "Apoquel (oclacitinib)",
        pronunciation: "AP-oh-kwel / ok-lah-SIH-tih-nib",
        meaning: "A JAK inhibitor used to control itch and inflammation associated with allergic skin disease in dogs. Fast-acting — often within 4 hours.",
        clientExplanation: "Apoquel targets the itch signal directly, so it works quickly — usually within hours. It's used for allergies and doesn't have the same side effects as steroids.",
        category: "Dermatology"
      },
      {
        id: "m-03",
        term: "Atipamezole (Antisedan)",
        pronunciation: "ah-tip-AM-eh-zole / AN-tih-SEE-dan",
        meaning: "A reversal agent for medetomidine and dexmedetomidine sedation. Used to wake animals up after procedures.",
        clientExplanation: "This is the medication we use to reverse the sedative after the procedure — it helps your pet wake up more quickly and smoothly.",
        category: "Anaesthesia"
      },
      {
        id: "m-04",
        term: "Buprenorphine (Buprenex, Simbadol)",
        pronunciation: "byoo-PREN-or-feen",
        meaning: "An opioid pain reliever used for moderate to severe pain. Simbadol is a high-concentration formulation for cats, given once daily.",
        clientExplanation: "This is a strong pain medication — it's an opioid. Your pet may seem sleepy or very calm while they're on it, which is expected.",
        category: "Pain Management"
      },
      {
        id: "m-05",
        term: "Carprofen (Rimadyl, Novox)",
        pronunciation: "kar-PROH-fen / RIM-ah-dil",
        meaning: "A non-steroidal anti-inflammatory drug (NSAID) used for pain and inflammation, commonly after surgery or for arthritis in dogs.",
        clientExplanation: "Rimadyl is an anti-inflammatory and pain reliever — similar in how it works to ibuprofen in people, though it's specifically made for dogs. Give it with food.",
        category: "Pain Management / NSAIDs"
      },
      {
        id: "m-06",
        term: "Cerenia (maropitant)",
        pronunciation: "seh-REE-nee-uh / mair-OH-pih-tant",
        meaning: "An antiemetic (anti-vomiting) medication. Also used for motion sickness and nausea from other causes.",
        clientExplanation: "Cerenia stops vomiting and nausea — it works really well and usually kicks in within a couple of hours. It can also be used before car travel.",
        category: "Gastrointestinal"
      },
      {
        id: "m-07",
        term: "Clindamycin (Antirobe)",
        pronunciation: "klin-dah-MY-sin / AN-tih-robe",
        meaning: "An antibiotic effective against dental, skin, bone, and soft tissue infections. Commonly used after dental procedures.",
        clientExplanation: "This antibiotic is particularly good for mouth and dental infections, which is why it's often prescribed after a dental procedure.",
        category: "Antibiotics"
      },
      {
        id: "m-08",
        term: "Convenia (cefovecin)",
        pronunciation: "kon-VEE-nee-uh / sef-oh-VEH-sin",
        meaning: "A long-acting injectable antibiotic that lasts 7–14 days. Useful when owners have difficulty giving oral medications.",
        clientExplanation: "Convenia is an antibiotic given as a single injection — it stays active in your pet's system for up to two weeks, so there are no tablets to give at home.",
        category: "Antibiotics"
      },
      {
        id: "m-09",
        term: "Dexamethasone / Prednisolone",
        pronunciation: "dex-ah-METH-ah-zone / pred-NIS-oh-lone",
        meaning: "Corticosteroids used to reduce inflammation and suppress the immune system. Used for allergies, inflammatory conditions, immune-mediated disease, and some cancers.",
        clientExplanation: "This is a steroid medication — it reduces inflammation and calms the immune system. It works well but can have side effects with long-term use, so we'll monitor carefully.",
        category: "Steroids"
      },
      {
        id: "m-10",
        term: "Enalapril / Benazepril",
        pronunciation: "eh-NAL-ah-pril / ben-AY-zeh-pril",
        meaning: "ACE inhibitors used to manage heart disease and high blood pressure in dogs and cats. Help reduce the workload on the heart.",
        clientExplanation: "This medication helps reduce the strain on your pet's heart and lowers blood pressure. It's an important part of managing their heart condition long-term.",
        category: "Cardiology"
      },
      {
        id: "m-11",
        term: "Fenbendazole (Panacur)",
        pronunciation: "fen-BEN-dah-zole / PAN-ah-kur",
        meaning: "A broad-spectrum dewormer effective against roundworms, hookworms, whipworms, and some tapeworms. Often given as a 3–5 day course.",
        clientExplanation: "Panacur is a deworming treatment — it's given over several days and is very safe. It covers most of the common intestinal worms.",
        category: "Parasiticides"
      },
      {
        id: "m-12",
        term: "Furosemide (Lasix, Salix)",
        pronunciation: "fyoo-ROH-seh-mide / LAY-siks",
        meaning: "A diuretic ('water pill') that helps remove excess fluid from the body. Used in heart failure and conditions causing fluid accumulation.",
        clientExplanation: "Furosemide is a water tablet — it helps the kidneys remove excess fluid that's built up, particularly around the lungs or abdomen. You may notice your pet urinating more.",
        category: "Cardiology"
      },
      {
        id: "m-13",
        term: "Gabapentin (Neurontin)",
        pronunciation: "gab-ah-PEN-tin / noo-RON-tin",
        meaning: "Used for neuropathic pain, seizures, and as a sedative/anxiolytic before procedures. Also used for anxiety in cats.",
        clientExplanation: "Gabapentin can be used for nerve pain, seizure control, or to help with anxiety. It often makes pets a bit drowsy, which is expected.",
        category: "Pain Management / Neurology"
      },
      {
        id: "m-14",
        term: "Meloxicam (Metacam)",
        pronunciation: "meh-LOX-ih-kam / MET-ah-kam",
        meaning: "An NSAID used for pain and inflammation. Common for post-surgical pain and arthritis in dogs. Use in cats requires care — only licensed for single-dose use in cats in some regions.",
        clientExplanation: "Metacam is an anti-inflammatory pain reliever — similar to how ibuprofen works. Give it with food to protect the stomach.",
        category: "Pain Management / NSAIDs"
      },
      {
        id: "m-15",
        term: "Metronidazole (Flagyl)",
        pronunciation: "meh-troh-NYE-dah-zole / FLAY-jil",
        meaning: "An antibiotic and antiprotozoal agent used for gastrointestinal infections, giardia, and anaerobic bacterial infections.",
        clientExplanation: "This medication treats gut infections and certain parasites like giardia. It can sometimes cause nausea, so giving it with a small amount of food can help.",
        category: "Antibiotics / Gastrointestinal"
      },
      {
        id: "m-16",
        term: "Ondansetron (Zofran)",
        pronunciation: "on-DAN-seh-tron / ZOH-fran",
        meaning: "An antiemetic used to control nausea and vomiting, particularly in cats and in cases where Cerenia is not appropriate.",
        clientExplanation: "This is an anti-nausea medication — the same drug used for humans undergoing chemotherapy. It's very effective at settling an upset stomach.",
        category: "Gastrointestinal"
      },
      {
        id: "m-17",
        term: "Phenobarbital",
        pronunciation: "fee-noh-BAR-bih-tal",
        meaning: "An anticonvulsant used to manage epilepsy and seizure disorders in dogs and cats. Requires regular blood monitoring.",
        clientExplanation: "Phenobarbital controls seizures — it's one of the most effective medications we have for epilepsy. Blood tests every 6 months are important to make sure the levels and liver are okay.",
        category: "Neurology"
      },
      {
        id: "m-18",
        term: "Pimobendan (Vetmedin)",
        pronunciation: "pih-MOH-ben-dan / vet-MEH-din",
        meaning: "A cardiac medication that improves heart muscle function and dilates blood vessels. Used in dogs with dilated cardiomyopathy and mitral valve disease.",
        clientExplanation: "Vetmedin helps the heart pump more effectively and reduces its workload. It's given twice daily and ideally about an hour before food.",
        category: "Cardiology"
      },
      {
        id: "m-19",
        term: "Prednisolone vs Prednisone",
        pronunciation: "pred-NIS-oh-lone / PRED-nih-zone",
        meaning: "Both are corticosteroids. Prednisolone is the active form — prednisone must be converted by the liver. Cats absorb prednisolone better, so it's preferred in feline patients.",
        clientExplanation: "Both are steroids that work in similar ways — the vet chose this specific one because it's better absorbed by your pet's body.",
        category: "Steroids"
      },
      {
        id: "m-20",
        term: "Tramadol",
        pronunciation: "TRAM-ah-dol",
        meaning: "An opioid-based analgesic used for moderate pain. Note: tramadol has limited efficacy in cats as they lack the enzyme to convert it to its active form.",
        clientExplanation: "Tramadol is a pain reliever. Give it as directed — if your pet seems uncomfortable despite it, let us know as we may need to adjust the pain management plan.",
        category: "Pain Management"
      }
    ]
  }  ,
  {
    id: "parasiticides",
    title: "Parasiticides",
    icon: "🦟",
    description: "Flea, tick, and worm prevention and treatment — what your clinic carries, what each product covers, and key client information.",
    color: "#f0fdf4",
    colorDark: "#166534",
    terms: [
      {
        id: "p-01",
        term: "Bravecto — Dogs",
        pronunciation: "BRAV-ek-toh",
        meaning: "Covers fleas and ticks. Available in three forms: injectable (lasts 1 year), oral chewable tablet (lasts 3 months), or topical spot-on (lasts 3 months). Requires a prescription. Active ingredient: fluralaner. Safety note: gloves should be worn when applying the topical form — wash hands thoroughly afterwards even if gloves are used.",
        clientExplanation: "Bravecto is one of our longer-lasting options — depending on the form, it protects against fleas and ticks for 3 months or even a full year with the injection. It's prescription-only so we'll need your dog to be a patient here. If you're using the spot-on form, please wear gloves when applying it and wash your hands well afterwards.",
        category: "Dogs — Fleas & Ticks"
      },
      {
        id: "p-02",
        term: "Nexgard — Dogs",
        pronunciation: "NEKS-gard",
        meaning: "Oral chewable tablet for dogs. Covers fleas and ticks. Given monthly. Requires a prescription. Active ingredient: afoxolaner.",
        clientExplanation: "Nexgard is a once-a-month chewable tablet — most dogs take it like a treat. It covers both fleas and ticks and needs a prescription.",
        category: "Dogs — Fleas & Ticks"
      },
      {
        id: "p-03",
        term: "Simparica Trio — Dogs",
        pronunciation: "sim-PAR-ih-kah",
        meaning: "Oral chewable tablet for dogs. Covers fleas, ticks, and intestinal worms (roundworms, hookworms, whipworms) — but NOT tapeworms. Given monthly. Requires a prescription. Active ingredients: sarolaner, moxidectin, pyrantel.",
        clientExplanation: "Simparica Trio is an all-in-one monthly chew that covers fleas, ticks, and most intestinal worms — it's a popular choice for dogs who need broad parasite coverage. It doesn't cover tapeworms, so we'd add something else if that's a concern.",
        category: "Dogs — Fleas, Ticks & Worms"
      },
      {
        id: "p-04",
        term: "Revolution — Dogs",
        pronunciation: "rev-oh-LOO-shun",
        meaning: "Topical spot-on for dogs. Covers fleas and intestinal worms (roundworms, hookworms) — but NOT ticks or tapeworms. Applied monthly. Requires a prescription. Active ingredient: selamectin.",
        clientExplanation: "Revolution is a monthly spot-on applied to the back of the neck. It covers fleas and some intestinal worms, but not ticks — so it's often used alongside a tick product if ticks are a concern in your area.",
        category: "Dogs — Fleas & Worms"
      },
      {
        id: "p-05",
        term: "Advantage II — Dogs",
        pronunciation: "",
        meaning: "Topical spot-on for dogs. Covers fleas ONLY. Applied monthly. Does NOT require a prescription — it is classified as a pesticide rather than a drug. Active ingredients: imidacloprid, pyriproxyfen.",
        clientExplanation: "Advantage II is a flea-only spot-on that you can actually buy without a prescription — it's classified as a pesticide. It's a good option if fleas are the main concern and your dog isn't due for a vet visit.",
        category: "Dogs — Fleas Only"
      },
      {
        id: "p-06",
        term: "Interceptor Plus — Dogs",
        pronunciation: "",
        meaning: "Oral chewable tablet for dogs. Covers intestinal worms including tapeworms (roundworms, hookworms, whipworms, tapeworms). No persistent effect — it kills worms present at the time of dosing only. Requires a prescription. Active ingredients: milbemycin oxime, praziquantel.",
        clientExplanation: "Interceptor Plus treats intestinal worms including tapeworms. It works at the time of dosing — it clears out whatever worms are present — rather than providing ongoing prevention, so timing matters.",
        category: "Dogs — Worms"
      },
      {
        id: "p-07",
        term: "Safe-Guard (fenbendazole) — Dogs & Cats",
        pronunciation: "FEN-ben-dah-zole",
        meaning: "Liquid dewormer for dogs and cats. Covers intestinal worms including tapeworms (roundworms, hookworms, whipworms, tapeworms). Given daily for a short course (typically 3 days). No persistent effect.",
        clientExplanation: "Safe-Guard is a liquid dewormer given daily for a few days. It's very well tolerated in both dogs and cats, and covers a broad range of worms including tapeworms. We'll tell you exactly how many days to give it.",
        category: "Dogs & Cats — Worms"
      },
      {
        id: "p-08",
        term: "Strongid T (pyrantel pamoate) — Dogs/Puppies",
        pronunciation: "PY-ran-tel PAM-oh-ate",
        meaning: "Liquid dewormer for puppies. Covers roundworms and hookworms — NOT tapeworms or whipworms. Given weekly to very young puppies. No persistent effect.",
        clientExplanation: "Strongid T is a gentle liquid dewormer we use for tiny puppies — it's given weekly while they're very young. It covers roundworms and hookworms, which are the most common worms in puppies.",
        category: "Dogs — Worms (Puppies)"
      },
      {
        id: "p-09",
        term: "Advantix — Dogs (SPECIAL ORDER — TOXIC TO CATS)",
        pronunciation: "ad-VAN-tiks",
        meaning: "Topical spot-on for dogs ONLY. Covers fleas, ticks, and mosquitoes. Applied monthly. Requires a prescription. CRITICAL: Advantix is DEADLY to cats — it must never be used on cats or applied to dogs in households with cats. Active ingredients: imidacloprid, permethrin.",
        clientExplanation: "Advantix is a special order product that covers fleas, ticks, and mosquitoes — but I need to ask one important question first: do you have any cats in your home? Advantix contains permethrin, which is extremely toxic to cats — even contact from a recently treated dog can be fatal to a cat. If there are cats in the household, we'll recommend a different product.",
        category: "Dogs — Special Order ⚠️"
      },
      {
        id: "p-10",
        term: "Nexgard Combo — Cats",
        pronunciation: "NEKS-gard KOM-boh",
        meaning: "Topical spot-on for cats. Covers fleas, ticks, and intestinal worms including tapeworms. Applied monthly. Requires a prescription. Active ingredients: afoxolaner, eprinomectin, praziquantel.",
        clientExplanation: "Nexgard Combo is our most comprehensive cat parasiticide — one monthly spot-on that covers fleas, ticks, and all the main intestinal worms including tapeworms. It's prescription-only.",
        category: "Cats — Fleas, Ticks & Worms"
      },
      {
        id: "p-11",
        term: "Revolution — Cats",
        pronunciation: "rev-oh-LOO-shun",
        meaning: "Topical spot-on for cats. Covers fleas and intestinal worms (roundworms, hookworms) — NOT ticks or tapeworms. Applied monthly. Requires a prescription. Active ingredient: selamectin.",
        clientExplanation: "Revolution for cats is a monthly spot-on that covers fleas and the most common intestinal worms. It doesn't cover ticks — if tick protection is needed, Revolution Plus would be the better choice.",
        category: "Cats — Fleas & Worms"
      },
      {
        id: "p-12",
        term: "Revolution Plus — Cats",
        pronunciation: "rev-oh-LOO-shun PLUS",
        meaning: "Topical spot-on for cats. Covers fleas, ticks, and intestinal worms (roundworms, hookworms) — NOT tapeworms. Applied monthly. Requires a prescription. Active ingredients: selamectin, sarolaner.",
        clientExplanation: "Revolution Plus adds tick coverage to regular Revolution — so it covers fleas, ticks, and intestinal worms. A good all-rounder for outdoor cats. It still doesn't cover tapeworms.",
        category: "Cats — Fleas, Ticks & Worms"
      },
      {
        id: "p-13",
        term: "Bravecto — Cats",
        pronunciation: "BRAV-ek-toh",
        meaning: "Topical spot-on for cats. Covers fleas and ticks. Applied every 3 months (longer duration than most cat products). Requires a prescription. Active ingredient: fluralaner. Safety note: gloves should be worn when applying — wash hands thoroughly afterwards.",
        clientExplanation: "Bravecto for cats is a spot-on that lasts 3 months instead of the usual one month — great for owners who find monthly applications tricky. It covers fleas and ticks. Please wear gloves when applying it and wash your hands well afterwards.",
        category: "Cats — Fleas & Ticks"
      },
      {
        id: "p-14",
        term: "Milbemax — Cats",
        pronunciation: "MIL-beh-maks",
        meaning: "Oral chewable tablet for cats. Covers intestinal worms including tapeworms (roundworms, hookworms, tapeworms). No persistent effect — treats worms present at the time of dosing only. Requires a prescription. Active ingredients: milbemycin oxime, praziquantel.",
        clientExplanation: "Milbemax is a chewable tablet that treats intestinal worms in cats, including tapeworms. It works at the time of dosing rather than providing ongoing prevention — so it's often given at the same time as a flea product.",
        category: "Cats — Worms"
      },
      {
        id: "p-15",
        term: "Profender — Cats",
        pronunciation: "PRO-fen-der",
        meaning: "Topical spot-on for cats. Covers intestinal worms including tapeworms (roundworms, hookworms, tapeworms). No persistent effect — treats worms present at the time of dosing only. Useful for cats who resist oral medication. Requires a prescription. Active ingredients: emodepside, praziquantel.",
        clientExplanation: "Profender is a spot-on dewormer — useful if your cat won't take tablets. It treats intestinal worms including tapeworms at the time of application. It doesn't provide ongoing prevention, so we often use it alongside a monthly flea/tick product.",
        category: "Cats — Worms"
      },
      {
        id: "p-16",
        term: "Strongid T (pyrantel pamoate) — Cats/Kittens",
        pronunciation: "PY-ran-tel PAM-oh-ate",
        meaning: "Liquid dewormer for kittens. Covers roundworms and hookworms — NOT tapeworms, whipworms. Given weekly to very young kittens. No persistent effect.",
        clientExplanation: "Strongid T is a gentle liquid dewormer we use for tiny kittens — given weekly while they're very young. It covers the most common worms in kittens: roundworms and hookworms.",
        category: "Cats — Worms (Kittens)"
      },
      {
        id: "p-17",
        term: "Prescription vs non-prescription parasiticides",
        pronunciation: "",
        meaning: "Most parasiticides at this clinic require a valid veterinarian-client-patient relationship (VCPR) and a prescription. The exception is Advantage II for dogs, which is classified as a pesticide and available over the counter. Clients sometimes ask why they need a prescription — the answer is that prescription products are generally more effective and some (like Bravecto injectable) require professional administration.",
        clientExplanation: "Most of our parasite prevention products are prescription-only — that means your pet needs to be a current patient here. The main exception is Advantage II, which you can pick up without a prescription. If your pet isn't due for a visit, call us and we can advise on what's available.",
        category: "General"
      },
      {
        id: "p-19",
        term: "Applying topical parasiticides — safety",
        pronunciation: "",
        meaning: "When applying any topical spot-on product — to a patient or when dispensing advice to clients — gloves should always be worn. This applies to all spot-on products but is especially important for fluralaner-based products (Bravecto) and permethrin-containing products (Advantix). Hands should be washed thoroughly afterwards even when gloves are used. Topicals should be applied to an area the animal cannot lick (typically the back of the neck between the shoulder blades) and the application site should be allowed to dry before children or other pets contact the area.",
        clientExplanation: "A few things to keep in mind when applying spot-on treatments at home: always wear gloves, apply to the back of the neck where your pet can't reach to lick, and let it dry before letting kids or other pets near the area. If you accidentally get any on your skin, wash it off promptly with soap and water.",
        category: "Safety ⚠️"
      },
      {
        id: "p-18",
        term: "Permethrin toxicity in cats",
        pronunciation: "per-METH-rin",
        meaning: "Permethrin is an insecticide found in some dog-only products (notably Advantix). It is highly toxic to cats — exposure can cause tremors, seizures, and death. Cats can be exposed by direct contact with a recently treated dog, or by owners accidentally applying a dog product to a cat. This is a veterinary emergency.",
        clientExplanation: "This is one of the most important safety points we share with multi-pet households: never use dog flea products on cats, and if a dog has been treated with Advantix, keep them separated from cats until the product has dried and the dog has been bathed. If a cat is ever exposed, call us immediately — it's an emergency.",
        category: "Safety ⚠️"
      }
    ]
  }
];

export const termQuizzes = [
  {
    id: "quiz-jargon-1",
    deckId: "medical-jargon",
    title: "Medical jargon — Quiz 1",
    questions: [
      {
        question: "A client calls saying their dog is 'ataxic'. What does this mean?",
        options: [
          "The dog has lost its appetite",
          "The dog is wobbly and uncoordinated",
          "The dog has a fever",
          "The dog is breathing with difficulty"
        ],
        correct: 1,
        explanation: "Ataxia means loss of coordination or balance — the animal appears wobbly or unsteady, often described as 'drunk-looking'."
      },
      {
        question: "A vet tells you a tumour is 'benign'. What should you tell a client this means?",
        options: [
          "The tumour is cancerous but treatable",
          "The tumour has spread to other organs",
          "The tumour is not cancerous and unlikely to spread",
          "The tumour needs immediate surgery"
        ],
        correct: 2,
        explanation: "Benign means not cancerous and unlikely to spread or cause serious harm — generally reassuring news, though monitoring is still recommended."
      },
      {
        question: "What is the correct plain English explanation of 'pyrexia'?",
        options: [
          "A type of skin rash",
          "A fever — elevated body temperature",
          "Loss of coordination",
          "Difficulty breathing"
        ],
        correct: 1,
        explanation: "Pyrexia means fever. Normal temperature in dogs and cats is approximately 38–39°C."
      },
      {
        question: "A client is confused about 'idiopathic'. What does this term mean?",
        options: [
          "Caused by medication side effects",
          "Caused by a genetic condition",
          "No identifiable cause found despite investigation",
          "Caused by an infectious disease"
        ],
        correct: 2,
        explanation: "Idiopathic means no specific cause has been identified — it occurs on its own without an obvious reason."
      },
      {
        question: "What is the clinical difference between vomiting and regurgitation?",
        options: [
          "There is no clinical difference",
          "Vomiting involves abdominal effort and digested content; regurgitation is passive and involves undigested food",
          "Regurgitation is always more serious than vomiting",
          "Vomiting only occurs in dogs; regurgitation only in cats"
        ],
        correct: 1,
        explanation: "Vomiting involves active abdominal contractions and stomach contents. Regurgitation is passive, involving undigested food from the oesophagus — an important distinction for diagnosis."
      },
      {
        question: "Which term describes the spread of cancer from its original site to other parts of the body?",
        options: ["Malignant", "Metastasis", "Iatrogenic", "Idiopathic"],
        correct: 1,
        explanation: "Metastasis is the spread of cancer from its primary site to other organs or tissues. Malignant describes a cancerous tumour, but metastasis specifically means spread."
      },
      {
        question: "A client asks what 'prognosis' means. What is the best explanation?",
        options: [
          "The diagnosis — what disease their pet has",
          "The treatment plan going forward",
          "The predicted likely outcome of the condition",
          "The cost of treatment"
        ],
        correct: 2,
        explanation: "Prognosis refers to the predicted outcome or course of a disease — what is expected to happen with the condition over time."
      },
      {
        question: "What does 'subcutaneous' mean when referring to an injection?",
        options: [
          "Injected directly into a vein",
          "Injected into a muscle",
          "Injected under the skin",
          "Injected into a joint"
        ],
        correct: 2,
        explanation: "Subcutaneous (SQ/SC) means under the skin — into the layer of tissue just beneath the skin surface."
      }
    ]
  },
  {
    id: "quiz-meds-1",
    deckId: "medications",
    title: "Medications — Quiz 1",
    questions: [
      {
        question: "A client asks what Cerenia is for. What do you tell them?",
        options: [
          "It's an antibiotic for skin infections",
          "It's an anti-vomiting and anti-nausea medication",
          "It's a pain reliever for arthritis",
          "It's a steroid for allergies"
        ],
        correct: 1,
        explanation: "Cerenia (maropitant) is an antiemetic — it prevents vomiting and treats nausea. It can also be used for motion sickness."
      },
      {
        question: "A client picking up Metacam asks if they need to give it with food. What do you say?",
        options: [
          "No, it should be given on an empty stomach",
          "Yes, always give with food to protect the stomach",
          "It doesn't matter either way",
          "Only give with food if the pet has a sensitive stomach"
        ],
        correct: 1,
        explanation: "Metacam (meloxicam) is an NSAID and should always be given with food to reduce the risk of gastrointestinal upset."
      },
      {
        question: "What is the key advantage of Convenia over regular antibiotics?",
        options: [
          "It's cheaper than tablet antibiotics",
          "It's a single injection that lasts 7–14 days — no tablets needed at home",
          "It covers a wider range of bacteria",
          "It has fewer side effects than other antibiotics"
        ],
        correct: 1,
        explanation: "Convenia (cefovecin) is a long-acting injectable antibiotic — its main advantage is that owners don't need to give tablets at home."
      },
      {
        question: "A client says their dog is on Vetmedin. When should it ideally be given?",
        options: [
          "Immediately after a meal",
          "At the same time as food",
          "About an hour before food",
          "Only when the dog shows symptoms"
        ],
        correct: 2,
        explanation: "Pimobendan (Vetmedin) is ideally given approximately one hour before feeding for optimal absorption."
      },
      {
        question: "Why is prednisolone preferred over prednisone in cats?",
        options: [
          "It has fewer side effects in cats",
          "It is cheaper",
          "Cats absorb prednisolone better as they have difficulty converting prednisone to its active form",
          "Prednisone is not licensed for veterinary use"
        ],
        correct: 2,
        explanation: "Cats lack the enzyme needed to efficiently convert prednisone to prednisolone (its active form), so prednisolone is preferred in feline patients."
      },
      {
        question: "A client's dog is on phenobarbital for epilepsy. What regular monitoring is required?",
        options: [
          "Monthly urine tests",
          "Annual X-rays",
          "Blood tests every 6 months to check drug levels and liver function",
          "Weekly weight checks"
        ],
        correct: 2,
        explanation: "Phenobarbital requires regular blood monitoring — approximately every 6 months — to check therapeutic drug levels and assess liver health, as long-term use can affect liver function."
      },
      {
        question: "What is furosemide (Lasix) used for?",
        options: [
          "Controlling seizures",
          "Treating bacterial infections",
          "Removing excess fluid from the body — a diuretic",
          "Reducing allergic skin reactions"
        ],
        correct: 2,
        explanation: "Furosemide is a diuretic — it helps the kidneys remove excess fluid, commonly used in heart failure and conditions causing fluid accumulation."
      },
      {
        question: "A client asks why their cat is being given gabapentin before an appointment. What's the most likely reason?",
        options: [
          "To treat a bacterial infection",
          "To reduce anxiety and help the cat stay calm",
          "To treat a heart condition",
          "To control vomiting during travel"
        ],
        correct: 1,
        explanation: "Gabapentin is commonly used as an anxiolytic (anti-anxiety) medication in cats before veterinary visits or stressful procedures, in addition to its uses for pain and seizures."
      }
    ]
  }
  ,
  {
    id: "quiz-parasiticides-1",
    deckId: "parasiticides",
    title: "Parasiticides — Quiz 1",
    questions: [
      {
        question: "A client calls asking for Advantix for their dog. Before dispensing, what is the most important question to ask?",
        options: [
          "How much does the dog weigh?",
          "Do you have any cats in your home?",
          "Has your dog had Advantix before?",
          "Is your dog up to date on vaccinations?"
        ],
        correct: 1,
        explanation: "Advantix contains permethrin, which is highly toxic — and potentially fatal — to cats. Even contact from a recently treated dog can be dangerous. This must always be confirmed before dispensing."
      },
      {
        question: "A client wants a single product that covers fleas, ticks, AND tapeworms for their cat. Which product do you reach for?",
        options: [
          "Revolution Plus",
          "Bravecto for cats",
          "Nexgard Combo",
          "Revolution"
        ],
        correct: 2,
        explanation: "Nexgard Combo is the only cat product that covers fleas, ticks, AND tapeworms in one monthly application. Revolution Plus covers fleas and ticks but not tapeworms."
      },
      {
        question: "A client asks which flea product they can buy without a prescription for their dog. What do you tell them?",
        options: [
          "Nexgard",
          "Bravecto",
          "Revolution",
          "Advantage II"
        ],
        correct: 3,
        explanation: "Advantage II is the only product on your formulary that doesn't require a prescription — it's classified as a pesticide rather than a drug. All other products require a valid VCPR."
      },
      {
        question: "How long does the injectable form of Bravecto protect a dog for?",
        options: [
          "1 month",
          "3 months",
          "6 months",
          "1 year"
        ],
        correct: 3,
        explanation: "Bravecto injectable provides 12 months of flea and tick protection — making it the longest-lasting option on your formulary."
      },
      {
        question: "A client has a tiny 4-week-old puppy with worms. Which product is appropriate?",
        options: [
          "Interceptor Plus",
          "Simparica Trio",
          "Strongid T",
          "Safe-Guard"
        ],
        correct: 2,
        explanation: "Strongid T (pyrantel pamoate) is the appropriate choice for very young puppies — it's a gentle liquid given weekly and is safe for tiny animals. Interceptor Plus and Simparica Trio have minimum age/weight requirements."
      },
      {
        question: "A dog owner wants comprehensive coverage — fleas, ticks, AND worms including tapeworms — in a single monthly product. What do you recommend?",
        options: [
          "Simparica Trio",
          "Revolution",
          "Interceptor Plus plus Nexgard",
          "Simparica Trio plus Interceptor Plus"
        ],
        correct: 3,
        explanation: "Simparica Trio covers fleas, ticks, and most worms — but not tapeworms. To add tapeworm coverage you'd combine it with Interceptor Plus. There is no single monthly dog product on your formulary that covers everything including tapeworms."
      },
      {
        question: "What is the key difference between Interceptor Plus and Simparica Trio in terms of worm coverage?",
        options: [
          "Interceptor Plus covers ticks; Simparica Trio does not",
          "Interceptor Plus covers tapeworms; Simparica Trio does not",
          "Simparica Trio covers tapeworms; Interceptor Plus does not",
          "They cover the same worms"
        ],
        correct: 1,
        explanation: "Interceptor Plus covers tapeworms (praziquantel component) while Simparica Trio does not. Simparica Trio does cover fleas and ticks though, which Interceptor Plus does not."
      },
      {
        question: "A client with an outdoor cat wants protection against fleas and ticks, but their cat absolutely will not take tablets. What do you suggest?",
        options: [
          "Revolution",
          "Bravecto for cats",
          "Milbemax",
          "Profender"
        ],
        correct: 1,
        explanation: "Bravecto for cats is a topical spot-on covering fleas and ticks, lasting 3 months — no tablets needed. Revolution covers fleas but not ticks. Milbemax and Profender are dewormers only."
      }
    ]
  }
];