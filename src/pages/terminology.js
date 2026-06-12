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
        term: "Amoxicillin / Clavulanate (Clavaseptin, Clavamox)",
        pronunciation: "ah-mox-ih-SIL-in / klav-yoo-LAN-ate",
        meaning: "A broad-spectrum antibiotic combination. Brand names include Clavaseptin and Clavamox. Used for skin, respiratory, urinary, and soft tissue infections.",
        clientExplanation: "This is an antibiotic — it treats bacterial infections. Always finish the full course even if your pet seems better.",
        category: "Antibiotics"
      },
      {
        id: "m-02",
        term: "Atopica (cyclosporine)",
        pronunciation: "at-OH-pih-kah / sy-kloh-SPOR-een",
        meaning: "An immunosuppressant used to control allergic skin disease in dogs and cats. Reduces the immune response driving itch. Takes 4-6 weeks to reach full effect.",
        clientExplanation: "Atopica damps down the part of the immune system causing the allergic reaction. It takes a few weeks to see the full benefit and is often reduced to every other day once controlled.",
        category: "Dermatology / Immunosuppressants"
      },
      {
        id: "m-03",
        term: "Baytril (enrofloxacin)",
        pronunciation: "BAY-tril / en-roh-FLOX-ah-sin",
        meaning: "A fluoroquinolone antibiotic used for skin, urinary, respiratory, and ear infections. Use with caution in young growing animals as it can affect cartilage development.",
        clientExplanation: "Baytril is a strong antibiotic often used for ear or urinary infections, or when other antibiotics have not worked.",
        category: "Antibiotics"
      },
      {
        id: "m-04",
        term: "Benazepril (Fortekor)",
        pronunciation: "ben-AY-zeh-pril / FOR-teh-kor",
        meaning: "An ACE inhibitor used to manage heart disease, high blood pressure, and chronic kidney disease in dogs and cats. Reduces the workload on the heart and kidneys.",
        clientExplanation: "Fortekor helps reduce the strain on your pet's heart and kidneys. It is an important part of managing these conditions long-term and is usually given once daily.",
        category: "Cardiology / Nephrology"
      },
      {
        id: "m-05",
        term: "Buprenorphine",
        pronunciation: "byoo-PREN-or-feen",
        meaning: "An opioid pain reliever used for moderate to severe pain. Commonly used post-operatively. In cats, often given as an oral transmucosal liquid absorbed through the gums.",
        clientExplanation: "This is a strong pain medication — your pet may seem sleepy or calm while on it, which is expected. In cats it is often given as a liquid absorbed through the gums.",
        category: "Pain Management"
      },
      {
        id: "m-06",
        term: "Cerenia / Emavert (maropitant)",
        pronunciation: "seh-REE-nee-uh / em-ah-VERT / mair-OH-pih-tant",
        meaning: "An antiemetic (anti-vomiting) medication. Brand names Cerenia and Emavert. Also used for motion sickness. Works within 1-2 hours.",
        clientExplanation: "Cerenia or Emavert stops vomiting and nausea quickly. It can also be used before car travel to prevent motion sickness.",
        category: "Gastrointestinal"
      },
      {
        id: "m-07",
        term: "Cephalexin (Cefaseptin)",
        pronunciation: "sef-ah-LEX-in / sef-ah-SEP-tin",
        meaning: "A first-generation cephalosporin antibiotic. Brand name Cefaseptin. Used for skin, soft tissue, and urinary tract infections. One of the most commonly used antibiotics in veterinary practice.",
        clientExplanation: "Cefaseptin is a commonly used antibiotic for skin and urinary infections. Give with food to reduce the chance of stomach upset.",
        category: "Antibiotics"
      },
      {
        id: "m-08",
        term: "Clindamycin (Antirobe)",
        pronunciation: "klin-dah-MY-sin / AN-tih-robe",
        meaning: "An antibiotic effective against dental, skin, bone, and soft tissue infections. Commonly used after dental procedures.",
        clientExplanation: "This antibiotic is particularly good for mouth and dental infections, which is why it is often prescribed after a dental procedure.",
        category: "Antibiotics"
      },
      {
        id: "m-09",
        term: "Clomicalm (clomipramine)",
        pronunciation: "KLOH-mih-kalm / kloh-MIP-rah-meen",
        meaning: "A tricyclic antidepressant used to treat separation anxiety and compulsive behaviours in dogs. Works best alongside behavioural modification. Takes several weeks to reach full effect.",
        clientExplanation: "Clomicalm helps with anxiety — particularly separation anxiety. It works best alongside training and behavioural support and takes several weeks to reach full effect.",
        category: "Behavioural / Anxiolytics"
      },
      {
        id: "m-10",
        term: "Convenia (cefovecin)",
        pronunciation: "kon-VEE-nee-uh / sef-oh-VEH-sin",
        meaning: "A long-acting injectable antibiotic that remains active for 7-14 days. Useful when owners have difficulty giving oral medications.",
        clientExplanation: "Convenia is an antibiotic given as a single injection — it stays active for up to two weeks, so there are no tablets to give at home.",
        category: "Antibiotics"
      },
      {
        id: "m-11",
        term: "Deramaxx (deracoxib)",
        pronunciation: "deh-rah-MAX / deh-rah-KOX-ib",
        meaning: "A COX-2 selective NSAID used for pain and inflammation in dogs — post-surgical pain and osteoarthritis. Do not use in cats.",
        clientExplanation: "Deramaxx is an anti-inflammatory pain reliever for dogs. Give with food. Never give to cats.",
        category: "Pain Management / NSAIDs"
      },
      {
        id: "m-12",
        term: "Dexamethasone / Prednisolone",
        pronunciation: "dex-ah-METH-ah-zone / pred-NIS-oh-lone",
        meaning: "Corticosteroids used to reduce inflammation and suppress the immune system. Used for allergies, inflammatory conditions, immune-mediated disease, and some cancers.",
        clientExplanation: "This is a steroid medication — it reduces inflammation and calms the immune system. Side effects are possible with long-term use, so we will monitor carefully.",
        category: "Steroids"
      },
      {
        id: "m-13",
        term: "Doxycycline",
        pronunciation: "dok-see-SY-kleen",
        meaning: "A broad-spectrum tetracycline antibiotic effective against tick-borne diseases (Lyme, Anaplasma), respiratory infections, and atypical bacteria. Must be given with food and water — can cause oesophageal stricture if dry-swallowed, especially in cats.",
        clientExplanation: "Doxycycline is often used for tick-borne infections and respiratory conditions. Always give with food and make sure your pet swallows it with water — never give it dry, especially to cats.",
        category: "Antibiotics"
      },
      {
        id: "m-14",
        term: "Famotidine",
        pronunciation: "fah-MOH-tih-deen",
        meaning: "An H2 blocker (antacid) used to reduce stomach acid. Helps with gastric ulcers and acid reflux. Often used alongside NSAIDs or steroids to protect the stomach lining.",
        clientExplanation: "Famotidine reduces stomach acid — it is often given alongside other medications to protect the stomach. Similar to how Pepcid works in people.",
        category: "Gastrointestinal"
      },
      {
        id: "m-15",
        term: "Felimazole (methimazole)",
        pronunciation: "feh-LIM-ah-zole / meth-IM-ah-zole",
        meaning: "An antithyroid medication used to treat hyperthyroidism in cats. Reduces thyroid hormone production. Requires regular blood monitoring for thyroid levels and kidney function.",
        clientExplanation: "Felimazole controls an overactive thyroid in cats. Regular blood tests are important — usually every few weeks at first, then every 6 months once stable.",
        category: "Endocrinology"
      },
      {
        id: "m-16",
        term: "Fluoxetine (Prozac, Reconcile)",
        pronunciation: "floo-OX-eh-teen",
        meaning: "An SSRI antidepressant used for anxiety, compulsive behaviours, and aggression in dogs and cats. Brand names Prozac and Reconcile. Takes 4-6 weeks for full effect. Best used alongside behavioural modification.",
        clientExplanation: "Fluoxetine helps with anxiety and compulsive behaviours — it is the same medication as Prozac in people. It takes several weeks to work fully, and behaviour training alongside it is important.",
        category: "Behavioural / Anxiolytics"
      },
      {
        id: "m-17",
        term: "Furosemide (Lasix)",
        pronunciation: "fyoo-ROH-seh-mide / LAY-siks",
        meaning: "A diuretic (water pill) that helps remove excess fluid from the body. Brand name Lasix. Used in heart failure and conditions causing fluid accumulation.",
        clientExplanation: "Lasix is a water tablet — it helps the kidneys remove excess fluid that has built up, particularly around the lungs or abdomen. You may notice your pet urinating more.",
        category: "Cardiology"
      },
      {
        id: "m-18",
        term: "Gabapentin",
        pronunciation: "gab-ah-PEN-tin",
        meaning: "Used for neuropathic pain, seizures, and as a sedative or anxiolytic before procedures. Widely used for anxiety in cats before veterinary visits.",
        clientExplanation: "Gabapentin can be used for nerve pain, seizure control, or to help with anxiety. It often makes pets a bit drowsy, which is expected.",
        category: "Pain Management / Neurology"
      },
      {
        id: "m-19",
        term: "Galliprant (grapiprant)",
        pronunciation: "GAL-ih-prant / grah-PIP-rant",
        meaning: "A newer piprant-class NSAID used for osteoarthritis pain in dogs. Works differently from traditional NSAIDs and is often better tolerated in dogs with GI sensitivity.",
        clientExplanation: "Galliprant is a newer type of anti-inflammatory for arthritis in dogs. It works a bit differently from traditional options and is sometimes better on the stomach.",
        category: "Pain Management / NSAIDs"
      },
      {
        id: "m-20",
        term: "GS-441524",
        pronunciation: "jee-ess four-four-one five-two-four",
        meaning: "An antiviral used off-label to treat feline infectious peritonitis (FIP) — a previously fatal coronavirus disease in cats. Treatment is typically 84 days. Not yet formally licensed in Canada but used under veterinary supervision with strong success rates.",
        clientExplanation: "GS-441524 is an antiviral treatment for FIP — a disease that used to be fatal in cats. Treatment takes about 12 weeks and requires close monitoring.",
        category: "Antivirals"
      },
      {
        id: "m-21",
        term: "Ketoconazole",
        pronunciation: "kee-toh-KON-ah-zole",
        meaning: "An antifungal used for systemic or skin fungal infections. Also used in Cushing's disease management when Vetoryl is not tolerated. Interacts with many other medications — always check for drug interactions.",
        clientExplanation: "Ketoconazole treats fungal infections. Let us know what other medications your pet is on as interactions are possible.",
        category: "Antifungals / Endocrinology"
      },
      {
        id: "m-22",
        term: "Meloxicam (Metacam, Meloxidin)",
        pronunciation: "meh-LOX-ih-kam / MET-ah-kam / mel-OX-ih-din",
        meaning: "An NSAID used for pain and inflammation. Brand names Metacam and Meloxidin. Used for post-surgical pain and osteoarthritis. Use in cats requires careful dosing and monitoring.",
        clientExplanation: "Metacam or Meloxidin is an anti-inflammatory pain reliever. Give with food to protect the stomach.",
        category: "Pain Management / NSAIDs"
      },
      {
        id: "m-23",
        term: "Metronidazole (Flagyl)",
        pronunciation: "meh-troh-NYE-dah-zole / FLAY-jil",
        meaning: "An antibiotic and antiprotozoal used for gastrointestinal infections and giardia. Can cause neurological side effects at high doses.",
        clientExplanation: "This medication treats gut infections and certain parasites like giardia. Giving it with a small amount of food can help reduce nausea.",
        category: "Antibiotics / Gastrointestinal"
      },
      {
        id: "m-24",
        term: "Mirtazapine (Mirataz)",
        pronunciation: "mir-TAZ-ah-peen / MIR-ah-taz",
        meaning: "An appetite stimulant and antiemetic used commonly in cats. Mirataz is a transdermal gel applied to the inner ear flap. Also used in dogs for appetite stimulation.",
        clientExplanation: "Mirataz is a gel applied to the inside of the ear flap to stimulate appetite. Apply a small amount as directed, rotate ears with each dose, and wash hands after applying.",
        category: "Gastrointestinal / Appetite"
      },
      {
        id: "m-25",
        term: "Numelvi",
        pronunciation: "noo-MEL-vee",
        meaning: "A veterinary medication used in the management of feline hyperthyroidism. Applied topically. Check current prescribing information for dosing and monitoring requirements.",
        clientExplanation: "Numelvi is a topical treatment for an overactive thyroid in cats. We will show you exactly how and where to apply it.",
        category: "Endocrinology"
      },
      {
        id: "m-26",
        term: "Omeprazole",
        pronunciation: "oh-MEP-rah-zole",
        meaning: "A proton pump inhibitor that reduces stomach acid more powerfully than famotidine. Used for gastric ulcers, acid reflux, and GI protection.",
        clientExplanation: "Omeprazole is a stronger acid reducer than famotidine — used when the stomach needs more protection. Similar to Losec or Prilosec in people.",
        category: "Gastrointestinal"
      },
      {
        id: "m-27",
        term: "Onsior (robenacoxib)",
        pronunciation: "ON-see-or / roh-ben-ah-KOX-ib",
        meaning: "A COX-2 selective NSAID used for short-term pain and inflammation in cats and dogs. Particularly useful in cats where long-term meloxicam use requires extra caution.",
        clientExplanation: "Onsior is an anti-inflammatory pain reliever often used for short-term pain after procedures. Give with food.",
        category: "Pain Management / NSAIDs"
      },
      {
        id: "m-28",
        term: "PEG 3350 powder (MiraLax)",
        pronunciation: "pee-ee-jee three-three-five-oh",
        meaning: "An osmotic laxative used to treat constipation — particularly in cats with megacolon or chronic constipation. Mixed into food or water. Same product as MiraLax for people.",
        clientExplanation: "PEG 3350 is a tasteless powder mixed into food or water to help with constipation. It softens stool by drawing water into the intestine.",
        category: "Gastrointestinal"
      },
      {
        id: "m-29",
        term: "Phenobarbital",
        pronunciation: "fee-noh-BAR-bih-tal",
        meaning: "An anticonvulsant used to manage epilepsy and seizure disorders in dogs and cats. Requires blood monitoring for drug levels and liver function every 6 months.",
        clientExplanation: "Phenobarbital controls seizures. Blood tests every 6 months are important to make sure the levels and liver are okay.",
        category: "Neurology"
      },
      {
        id: "m-30",
        term: "Pimobendan (Vetmedin)",
        pronunciation: "pih-MOH-ben-dan / vet-MEH-din",
        meaning: "A cardiac medication that improves heart muscle function and dilates blood vessels. Used in dogs with dilated cardiomyopathy and mitral valve disease. Ideally given one hour before feeding.",
        clientExplanation: "Vetmedin helps the heart pump more effectively. Give twice daily, ideally about an hour before food.",
        category: "Cardiology"
      },
      {
        id: "m-31",
        term: "Prednisolone vs Prednisone",
        pronunciation: "pred-NIS-oh-lone / PRED-nih-zone",
        meaning: "Both are corticosteroids. Prednisolone is the active form — prednisone must be converted by the liver. Cats absorb prednisolone better and it is the preferred form for feline patients.",
        clientExplanation: "Both are steroids that work similarly — the vet chose this specific one because it is better absorbed by your pet.",
        category: "Steroids"
      },
      {
        id: "m-32",
        term: "Proin / Propalin (phenylpropanolamine)",
        pronunciation: "PROH-in / PRO-pah-lin / fen-il-proh-PAH-nohl-ah-meen",
        meaning: "Used to treat urinary incontinence in spayed female dogs by tightening the urethral sphincter. Blood pressure monitoring recommended during treatment.",
        clientExplanation: "Proin or Propalin helps with urinary leakage — it strengthens the muscle that controls urination. Blood pressure monitoring is recommended.",
        category: "Urology"
      },
      {
        id: "m-33",
        term: "Semintra (telmisartan)",
        pronunciation: "seh-MIN-trah / tel-mih-SAR-tan",
        meaning: "An angiotensin receptor blocker used in cats to manage systemic hypertension and reduce protein loss in urine in chronic kidney disease. Given as an oral solution.",
        clientExplanation: "Semintra is an oral liquid that helps control blood pressure and protects the kidneys. Shake well before use and give the exact dose prescribed.",
        category: "Cardiology / Nephrology"
      },
      {
        id: "m-34",
        term: "Senvelgo (velagliflozin)",
        pronunciation: "sen-VEL-goh / vel-ah-GLIF-loh-zin",
        meaning: "An oral solution used to manage diabetes mellitus in cats. Causes the kidneys to excrete excess glucose in the urine. An alternative to insulin in some feline diabetics.",
        clientExplanation: "Senvelgo is a liquid medication for diabetes in cats — it helps the kidneys remove excess sugar. It can be an alternative to insulin injections for some cats.",
        category: "Endocrinology"
      },
      {
        id: "m-35",
        term: "Simplicef (cefpodoxime)",
        pronunciation: "SIM-plih-sef / sef-poh-DOX-eem",
        meaning: "A third-generation cephalosporin antibiotic used for skin infections, urinary tract infections, and wound infections in dogs. Once-daily dosing.",
        clientExplanation: "Simplicef is an antibiotic given once a day — convenient for owners. Often used for skin or urinary tract infections. Give with food.",
        category: "Antibiotics"
      },
      {
        id: "m-36",
        term: "Sulcrate / Sucralfate liquid",
        pronunciation: "SUL-krayt / soo-KRAL-fate",
        meaning: "A gastrointestinal protectant that coats and protects ulcers and irritated areas of the stomach. Works locally and is not absorbed. Best given on an empty stomach, spaced at least 2 hours from other medications.",
        clientExplanation: "Sulcrate coats and protects the stomach lining. Give on an empty stomach and space it at least 2 hours from other medications.",
        category: "Gastrointestinal"
      },
      {
        id: "m-37",
        term: "Thyro-Tabs (thyroxine / levothyroxine)",
        pronunciation: "THY-roh-tabs / thy-ROX-een",
        meaning: "Thyroid hormone replacement used to treat hypothyroidism (underactive thyroid) in dogs. Given once or twice daily. Requires regular thyroid level monitoring to adjust dose.",
        clientExplanation: "Thyro-Tabs replaces the thyroid hormone your dog is not producing enough of. Regular blood tests are needed to make sure the dose is right.",
        category: "Endocrinology"
      },
      {
        id: "m-38",
        term: "Tramadol",
        pronunciation: "TRAM-ah-dol",
        meaning: "An opioid-based analgesic for moderate pain. Limited efficacy in cats as they lack the enzyme to convert it to its active form.",
        clientExplanation: "Tramadol is a pain reliever. If your pet seems uncomfortable despite it, let us know — we may need to adjust the pain management plan.",
        category: "Pain Management"
      },
      {
        id: "m-39",
        term: "Vetoryl (trilostane)",
        pronunciation: "VET-oh-ril / try-LOH-stayn",
        meaning: "Used to treat Cushing's disease in dogs — reduces cortisol production by the adrenal glands. Requires regular ACTH stimulation testing to monitor adrenal function. Timing of monitoring relative to dosing is critical.",
        clientExplanation: "Vetoryl controls Cushing's disease by reducing steroid hormone production. Regular blood tests are essential — timing matters so we will schedule these carefully.",
        category: "Endocrinology"
      },
      {
        id: "m-40",
        term: "Zenrelia",
        pronunciation: "zen-REE-lee-ah",
        meaning: "A JAK inhibitor used to control itch and skin inflammation in cats with allergic skin disease. Fast-acting. Requires a prescription.",
        clientExplanation: "Zenrelia targets the itch signal directly in cats with skin allergies — it works quickly and does not have the same side effects as steroids.",
        category: "Dermatology"
      },
      {
        id: "m-41",
        term: "Zentonil (SAMe + milk thistle)",
        pronunciation: "zen-TOH-nil",
        meaning: "A hepatoprotectant supplement containing S-adenosylmethionine (SAMe) and milk thistle. Supports liver function and reduces oxidative stress. Used alongside treatment for liver disease or when hepatotoxic drugs are prescribed.",
        clientExplanation: "Zentonil supports liver health — it contains two natural compounds that help protect the liver. Often given alongside other treatments when the liver needs extra support.",
        category: "Hepatology / Supplements"
      }
    ]
  }
  ,
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
        clientExplanation: "Bravecto is one of our longer-lasting options — depending on the form, it protects against fleas and ticks for 3 months or even a full year with the injection. It's prescription-only. If using the spot-on, please wear gloves when applying and wash hands well afterwards.",
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
        meaning: "Oral chewable tablet for dogs. Covers fleas, ticks, and intestinal worms (roundworms, hookworms, whipworms) — but NOT tapeworms. Given monthly. Requires a prescription.",
        clientExplanation: "Simparica Trio is an all-in-one monthly chew that covers fleas, ticks, and most intestinal worms. It does not cover tapeworms, so we would add something else if that is a concern.",
        category: "Dogs — Fleas, Ticks & Worms"
      },
      {
        id: "p-04",
        term: "Revolution — Dogs",
        pronunciation: "rev-oh-LOO-shun",
        meaning: "Topical spot-on for dogs. Covers fleas and intestinal worms (roundworms, hookworms) — but NOT ticks or tapeworms. Applied monthly. Requires a prescription. Active ingredient: selamectin.",
        clientExplanation: "Revolution is a monthly spot-on that covers fleas and some intestinal worms, but not ticks. It is often used alongside a tick product if ticks are a concern.",
        category: "Dogs — Fleas & Worms"
      },
      {
        id: "p-05",
        term: "Advantage II — Dogs & Cats",
        pronunciation: "",
        meaning: "Topical spot-on for dogs and cats. Covers fleas ONLY. Applied monthly. Does NOT require a prescription — classified as a pesticide rather than a drug. Active ingredients: imidacloprid, pyriproxyfen. Safe for cats (unlike Advantix).",
        clientExplanation: "Advantage II is a flea-only spot-on that does not need a prescription. It is a good accessible option if fleas are the main concern.",
        category: "Dogs & Cats — Fleas Only"
      },
      {
        id: "p-06",
        term: "Interceptor Plus — Dogs",
        pronunciation: "",
        meaning: "Oral chewable tablet for dogs. Covers intestinal worms including tapeworms. No persistent effect — kills worms present at the time of dosing only. Requires a prescription. Active ingredients: milbemycin oxime, praziquantel.",
        clientExplanation: "Interceptor Plus treats intestinal worms including tapeworms. It clears out whatever worms are present at the time of dosing rather than providing ongoing prevention.",
        category: "Dogs — Worms"
      },
      {
        id: "p-07",
        term: "Safe-Guard (fenbendazole) — Dogs & Cats",
        pronunciation: "FEN-ben-dah-zole",
        meaning: "Liquid dewormer for dogs and cats. Covers intestinal worms including tapeworms. Given daily for a short course (typically 3 days). No persistent effect.",
        clientExplanation: "Safe-Guard is a liquid dewormer given daily for a few days. It is well tolerated in both dogs and cats and covers a broad range of worms including tapeworms.",
        category: "Dogs & Cats — Worms"
      },
      {
        id: "p-08",
        term: "Strongid T (pyrantel pamoate) — Dogs/Puppies & Cats/Kittens",
        pronunciation: "PY-ran-tel PAM-oh-ate",
        meaning: "Liquid dewormer for puppies and kittens. Covers roundworms and hookworms — NOT tapeworms or whipworms. Given weekly to very young animals. No persistent effect. The only product on the formulary labelled for animals under 6 weeks of age.",
        clientExplanation: "Strongid T is a gentle liquid dewormer for tiny puppies and kittens — given weekly while they are very young. It covers the most common worms in young animals.",
        category: "Dogs & Cats — Worms (Young Animals)"
      },
      {
        id: "p-09",
        term: "Advantix — Dogs ONLY (SPECIAL ORDER — TOXIC TO CATS)",
        pronunciation: "ad-VAN-tiks",
        meaning: "Topical spot-on for DOGS ONLY. Covers fleas, ticks, and mosquitoes. Applied monthly. Requires a prescription. CRITICAL: Advantix contains permethrin which is DEADLY to cats — never use on cats or apply to dogs in households with cats.",
        clientExplanation: "Advantix covers fleas, ticks, and mosquitoes — but I must ask first: do you have any cats at home? Advantix contains permethrin which is extremely toxic to cats. Even contact from a recently treated dog can be fatal to a cat. If there are cats in the household we will recommend a different product.",
        category: "Dogs — Special Order ONLY"
      },
      {
        id: "p-10",
        term: "Nexgard Combo — Cats",
        pronunciation: "NEKS-gard KOM-boh",
        meaning: "Topical spot-on for cats. Covers fleas, ticks, and intestinal worms including tapeworms. Applied monthly. Requires a prescription.",
        clientExplanation: "Nexgard Combo is our most comprehensive cat parasiticide — one monthly spot-on that covers fleas, ticks, and all the main intestinal worms including tapeworms.",
        category: "Cats — Fleas, Ticks & Worms"
      },
      {
        id: "p-11",
        term: "Revolution — Cats",
        pronunciation: "rev-oh-LOO-shun",
        meaning: "Topical spot-on for cats. Covers fleas and intestinal worms (roundworms, hookworms) — NOT ticks or tapeworms. Applied monthly. Requires a prescription.",
        clientExplanation: "Revolution for cats is a monthly spot-on covering fleas and the most common intestinal worms. It does not cover ticks — Revolution Plus would be needed for that.",
        category: "Cats — Fleas & Worms"
      },
      {
        id: "p-12",
        term: "Revolution Plus — Cats",
        pronunciation: "rev-oh-LOO-shun PLUS",
        meaning: "Topical spot-on for cats. Covers fleas, ticks, and intestinal worms (roundworms, hookworms) — NOT tapeworms. Applied monthly. Requires a prescription.",
        clientExplanation: "Revolution Plus adds tick coverage to regular Revolution — covering fleas, ticks, and intestinal worms. Does not cover tapeworms.",
        category: "Cats — Fleas, Ticks & Worms"
      },
      {
        id: "p-13",
        term: "Bravecto — Cats",
        pronunciation: "BRAV-ek-toh",
        meaning: "Topical spot-on for cats. Covers fleas and ticks. Applied every 3 months. Requires a prescription. Safety note: gloves should be worn when applying — wash hands thoroughly afterwards.",
        clientExplanation: "Bravecto for cats is a spot-on that lasts 3 months — great for owners who find monthly applications tricky. Please wear gloves when applying and wash hands afterwards.",
        category: "Cats — Fleas & Ticks"
      },
      {
        id: "p-14",
        term: "Milbemax — Cats",
        pronunciation: "MIL-beh-maks",
        meaning: "Oral chewable tablet for cats. Covers intestinal worms including tapeworms. No persistent effect — treats worms present at the time of dosing only. Requires a prescription.",
        clientExplanation: "Milbemax is a chewable tablet that treats intestinal worms in cats including tapeworms. It works at the time of dosing and is often given alongside a flea product.",
        category: "Cats — Worms"
      },
      {
        id: "p-15",
        term: "Profender — Cats",
        pronunciation: "PRO-fen-der",
        meaning: "Topical spot-on for cats. Covers intestinal worms including tapeworms. No persistent effect. Useful for cats who resist oral medication. Requires a prescription.",
        clientExplanation: "Profender is a spot-on dewormer — useful if your cat will not take tablets. It treats intestinal worms including tapeworms at the time of application.",
        category: "Cats — Worms"
      },
      {
        id: "p-16",
        term: "Strongid T (pyrantel pamoate) — Cats/Kittens",
        pronunciation: "PY-ran-tel PAM-oh-ate",
        meaning: "Liquid dewormer for kittens. Covers roundworms and hookworms — NOT tapeworms. Given weekly to very young kittens. No persistent effect.",
        clientExplanation: "Strongid T is a gentle liquid dewormer for tiny kittens — given weekly while they are very young.",
        category: "Cats — Worms (Kittens)"
      },
      {
        id: "p-16b",
        term: "Advantage II — Cats",
        pronunciation: "",
        meaning: "Topical spot-on for cats. Covers fleas ONLY. Applied monthly. Does NOT require a prescription. Safe for use in cats (unlike Advantix, which is toxic to cats).",
        clientExplanation: "Advantage II is a flea-only spot-on that does not need a prescription — a simple accessible option if fleas are the only concern for your cat.",
        category: "Cats — Fleas Only"
      },
      {
        id: "p-17",
        term: "Prescription vs non-prescription parasiticides",
        pronunciation: "",
        meaning: "Most parasiticides require a valid veterinarian-client-patient relationship (VCPR) and a prescription. The exception is Advantage II (for both dogs and cats), which is classified as a pesticide and available over the counter.",
        clientExplanation: "Most of our parasite prevention products are prescription-only. The main exception is Advantage II for dogs and cats, which you can pick up without a prescription.",
        category: "General"
      },
      {
        id: "p-19",
        term: "Applying topical parasiticides — safety",
        pronunciation: "",
        meaning: "Gloves should always be worn when applying any topical spot-on product. Apply to the back of the neck where the animal cannot lick. Allow to dry before children or other pets contact the area. If product contacts skin, wash with soap and water promptly.",
        clientExplanation: "When applying spot-on treatments at home: always wear gloves, apply to the back of the neck, and let it dry before letting kids or other pets near the area. Wash hands after applying even with gloves.",
        category: "Safety"
      },
      {
        id: "p-18",
        term: "Permethrin toxicity in cats",
        pronunciation: "per-METH-rin",
        meaning: "Permethrin is found in some dog-only products (notably Advantix). It is highly toxic to cats — exposure can cause tremors, seizures, and death. Cats can be exposed by direct contact with a recently treated dog. This is a veterinary emergency.",
        clientExplanation: "Never use dog flea products on cats. If a dog has been treated with Advantix, keep them separated from cats until the product has dried and the dog has been bathed. If a cat is ever exposed, call us immediately — it is an emergency.",
        category: "Safety"
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
        explanation: "Strongid T (pyrantel pamoate) is the appropriate choice for very young puppies — it's a gentle liquid given weekly and is safe for tiny animals. Importantly, it is the only product on the formulary labelled for puppies under 6 weeks of age. Interceptor Plus and Simparica Trio have minimum age and weight requirements that exclude newborns and very young animals."
      },
      {
        question: "A dog owner wants comprehensive coverage — fleas, ticks, AND worms including tapeworms. Which combination is the best choice?",
        options: [
          "Simparica Trio alone",
          "Revolution alone",
          "Interceptor Plus plus Nexgard",
          "Simparica Trio plus Interceptor Plus"
        ],
        correct: 2,
        explanation: "Interceptor Plus plus Nexgard is the ideal combination — Nexgard covers fleas and ticks, and Interceptor Plus covers all the major worms including tapeworms, with no overlap or redundancy. Simparica Trio plus Interceptor Plus would also achieve full coverage technically, but there is significant overlap: both products cover roundworms, hookworms, and whipworms. This means the owner is double-treating for several worms, which is not unsafe but is a waste of money. Neither Simparica Trio alone nor Revolution alone covers tapeworms."
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
        explanation: "Bravecto for cats is a topical spot-on covering both fleas and ticks, lasting 3 months — no tablets needed, making it ideal here. Revolution is a common wrong answer — it covers fleas but does not cover ticks reliably; you would need Revolution Plus for tick coverage. Milbemax and Profender are dewormers only and do not cover fleas or ticks at all."
      }
    ]
  }
];