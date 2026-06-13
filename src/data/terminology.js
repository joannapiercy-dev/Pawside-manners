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
        meaning: "Describes breeds with shortened, flattened skulls and faces — e.g. pugs, bulldogs, Persian cats. Often associated with breathing difficulties and overheating.",
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
        id: "j-07b",
        term: "Crepitus",
        pronunciation: "KREP-ih-tus",
        meaning: "A grinding, crackling, or crunching sensation or sound felt or heard when a joint or bone is moved. Indicates roughened joint surfaces, bone fragments, or damage within a joint. When felt under the skin, indicates subcutaneous air.",
        clientExplanation: "When the vet talks about crepitus, they mean a grinding or crackling feeling in the joint — it's a sign that the surfaces inside the joint are not moving smoothly, which can indicate arthritis, a fracture, or other damage.",
        category: "Orthopaedics"
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
        term: "Dyspnea",
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
        term: "Hematuria",
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
        meaning: "The spread of cancer from its original site to other distant organs or tissues.",
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
        meaning: "Passive expulsion of undigested food from the esophagus, without the abdominal effort of vomiting. Important clinical distinction.",
        clientExplanation: "There's an important difference between vomiting and regurgitation — regurgitation is when food comes back up without much effort, usually shortly after eating. It points to a different set of causes than vomiting.",
        category: "Gastroenterology"
      },
      {
        id: "j-21",
        term: "SQ/SC",
        pronunciation: "sub-kyoo-TAY-nee-us",
        meaning: "Subcutaneous — under the skin. Often refers to injections given into the layer of tissue just beneath the skin.",
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
      },
      {
        id: "j-c01",
        term: "Idiopathic cystitis",
        pronunciation: "id-ee-oh-PATH-ik sis-TY-tis",
        meaning: "Bladder inflammation with no identifiable underlying cause — no infection, no crystals, no stones found. Very common in cats, often triggered by stress (Feline Idiopathic Cystitis, or FIC). Signs include straining, frequent urination, blood in urine, and pain. Can look identical to a UTI but does not respond to antibiotics.",
        clientExplanation: "Your cat's bladder is inflamed, but we haven't found an infection or crystals causing it — in cats this is very common and is often triggered by stress. Managing stress and increasing water intake are key parts of treatment.",
        category: "Urology"
      },
      {
        id: "j-c02",
        term: "Stomatitis",
        pronunciation: "stoh-mah-TY-tis",
        meaning: "Severe, painful inflammation of the mouth and oral tissues. In cats, often immune-mediated — the immune system overreacts to dental plaque causing extreme tissue inflammation throughout the mouth. Treatment often requires full-mouth or near-full-mouth tooth extraction.",
        clientExplanation: "Stomatitis means severe inflammation of the mouth — it's extremely painful. In cats it's often caused by the immune system reacting to the teeth themselves. Treatment usually involves removing most or all of the teeth, which sounds drastic but typically provides significant relief.",
        category: "Dentistry / Oral"
      },
      {
        id: "j-p01",
        term: "Cystotomy",
        pronunciation: "sis-TOT-oh-mee",
        meaning: "Surgical opening of the bladder — performed to remove bladder stones, polyps, or masses. The bladder is sutured closed after the procedure.",
        clientExplanation: "A cystotomy is a surgery to open the bladder — usually to remove stones or growths inside. The bladder is stitched closed afterwards and the patient needs rest during recovery.",
        category: "Procedures"
      },
      {
        id: "j-p02",
        term: "Enterotomy",
        pronunciation: "en-teh-ROT-oh-mee",
        meaning: "Surgical incision into the intestine — performed to remove a foreign body, biopsy the intestinal wall, or relieve an obstruction.",
        clientExplanation: "An enterotomy means making a surgical opening in the intestine — usually to remove something stuck there.",
        category: "Procedures"
      },
      {
        id: "j-p03",
        term: "Exploratory laparotomy",
        pronunciation: "lap-ah-ROT-oh-mee",
        meaning: "A surgical procedure where the abdomen is opened to examine the organs directly. Performed when imaging has not provided a definitive diagnosis, or when a problem requires surgical correction.",
        clientExplanation: "An exploratory laparotomy means opening the abdomen to have a direct look at the organs inside — done when we need to find or fix something we can't fully assess from the outside.",
        category: "Procedures"
      },
      {
        id: "j-p04",
        term: "Splenectomy",
        pronunciation: "splen-EK-toh-mee",
        meaning: "Surgical removal of the spleen. Often performed when a splenic mass or tumour is found. Dogs and cats can live normally without a spleen.",
        clientExplanation: "A splenectomy means removing the spleen — usually because a growth has been found on it. Dogs and cats can live a normal life without their spleen.",
        category: "Procedures"
      },
      {
        id: "j-p05",
        term: "TPLO",
        pronunciation: "tee-pee-el-oh",
        meaning: "Tibial Plateau Levelling Osteotomy. A surgical procedure to stabilise the knee (stifle) after a cranial cruciate ligament (CCL) tear — the canine equivalent of an ACL tear. The tibial plateau is cut and rotated to change joint mechanics. One of the most common orthopaedic surgeries in dogs. Recovery takes 12 weeks of strict rest and physiotherapy.",
        clientExplanation: "TPLO is the surgery we do to fix a torn cruciate ligament in the knee — similar to an ACL repair in people. Recovery takes around 12 weeks of strict rest and physiotherapy.",
        category: "Procedures / Orthopaedics"
      },
      {
        id: "j-p06",
        term: "Enucleation",
        pronunciation: "eh-nyoo-klee-AY-shun",
        meaning: "Surgical removal of the eye. Performed when an eye is irreparably damaged, blind and painful, affected by tumour, or when severe glaucoma cannot be managed medically.",
        clientExplanation: "Enucleation means removing the eye. It's often the kindest option when an eye is causing ongoing pain and cannot be saved. Most pets adapt remarkably well and are much more comfortable afterwards.",
        category: "Procedures / Ophthalmology"
      },
      {
        id: "j-p07",
        term: "Ovariohysterectomy vs Ovariectomy",
        pronunciation: "oh-vair-ee-oh-his-teh-REK-toh-mee / oh-vair-ee-EK-toh-mee",
        meaning: "Both are forms of spaying. Ovariohysterectomy (OHE) removes the ovaries AND uterus. Ovariectomy removes only the ovaries. Both are considered equally safe and effective.",
        clientExplanation: "Both are spay procedures — one removes just the ovaries, the other removes the ovaries and uterus. Both prevent pregnancy and heat cycles.",
        category: "Procedures"
      },
      {
        id: "j-p08",
        term: "Cryptorchid neuter",
        pronunciation: "krip-TOR-kid",
        meaning: "Neuter of a male animal where one or both testicles have not descended. Inguinal cryptorchid = testicle in the inguinal canal. Abdominal cryptorchid = testicle inside the abdomen (requires abdominal surgery). Retained testicles carry a significantly higher cancer risk.",
        clientExplanation: "A cryptorchid neuter is for a male pet where one testicle hasn't come down into the normal position. Depending on where the testicle is, a more involved surgery may be needed to find and remove it.",
        category: "Procedures"
      },
      {
        id: "j-p09",
        term: "Anal sacculectomy",
        pronunciation: "AY-nal sak-yoo-LEK-toh-mee",
        meaning: "Surgical removal of one or both anal sacs. Performed for chronic infection, impaction, rupture, or tumour. Carries a risk of fecal incontinence if sphincter nerves are damaged.",
        clientExplanation: "Anal sacculectomy means removing the anal glands — usually because they keep getting infected or there is a growth in one of them.",
        category: "Procedures"
      },
      {
        id: "j-p10",
        term: "FHO",
        pronunciation: "eff-aitch-oh",
        meaning: "Femoral Head Ostectomy. Surgical removal of the head and neck of the femur (the ball of the hip joint). The body forms a false joint of scar tissue. Used for severe hip dysplasia, femoral head fractures, or Legg-Calvé-Perthes disease. Best suited to smaller animals.",
        clientExplanation: "FHO means removing the ball part of the hip joint and letting the body form its own replacement joint using scar tissue. Most animals regain good function with physiotherapy.",
        category: "Procedures / Orthopaedics"
      },
      {
        id: "j-p11",
        term: "Gastrotomy",
        pronunciation: "gas-TROT-oh-mee",
        meaning: "Surgical incision into the stomach — performed to remove a foreign body or gastric mass.",
        clientExplanation: "A gastrotomy means opening the stomach surgically — usually to remove something swallowed and stuck there.",
        category: "Procedures"
      },
      {
        id: "j-p12",
        term: "Gastropexy",
        pronunciation: "GAS-troh-pek-see",
        meaning: "Surgical procedure that permanently attaches the stomach to the abdominal wall to prevent rotation. Used to treat or prevent GDV (bloat) in large and giant breeds. Can be performed preventively (e.g. during a spay) or at the time of treating an acute GDV.",
        clientExplanation: "A gastropexy tacks the stomach to the body wall so it can't twist — it's used to prevent or treat bloat. Often recommended preventively in deep-chested breeds like Great Danes.",
        category: "Procedures"
      },
      {
        id: "j-p13",
        term: "Perineal urethrostomy (PU)",
        pronunciation: "peh-RIN-ee-al yoo-reeth-ROS-toh-mee",
        meaning: "Surgical procedure in male cats to widen the urethral opening and prevent recurrent urinary blockages. The narrow part of the urethra is removed and a wider opening created. The cat can urinate normally after surgery.",
        clientExplanation: "A PU surgery widens the urinary opening in male cats who keep getting blocked. It significantly reduces the chance of future blockages.",
        category: "Procedures / Urology"
      },
      {
        id: "j-p14",
        term: "Pyometra",
        pronunciation: "py-oh-MEE-trah",
        meaning: "Life-threatening infection of the uterus, most commonly in older unspayed females. Open pyometra: cervix is open, discharge visible, usually not as obviously ill. Closed pyometra: cervix is closed, no discharge, animal often more seriously ill. Emergency ovariohysterectomy is the treatment of choice.",
        clientExplanation: "Pyometra is a serious infection of the uterus — a life-threatening condition requiring emergency surgery. Most common in older unspayed females.",
        category: "Conditions / Procedures"
      },
      {
        id: "j-p15",
        term: "Esophagostomy tube (E-tube)",
        pronunciation: "eh-sof-ah-GOS-toh-mee",
        meaning: "A feeding tube placed through the skin of the neck directly into the esophagus. Used when a patient cannot or will not eat — e.g. stomatitis recovery, hepatic lipidosis. Allows the owner to feed liquid food and give medications more easily at home.",
        clientExplanation: "An E-tube is a small feeding tube in the neck that goes directly into the food pipe. It lets us feed your pet liquid food and medications through the tube at home when they won't eat on their own.",
        category: "Procedures"
      },
      {
        id: "j-p16",
        term: "Fecal transplant (FMT)",
        pronunciation: "",
        meaning: "Fecal Microbiome Transplant. Transfer of stool from a healthy donor into a recipient's GI tract to restore a healthy gut microbiome. Used for chronic diarrhea, IBD, post-antibiotic dysbiosis. Can be given orally in the form of pills, or rectally in the form of an enema.",
        clientExplanation: "A fecal transplant introduces stool from a healthy donor into your pet's gut to help restore normal gut bacteria. It can be very effective for certain chronic digestive problems.",
        category: "Procedures / Gastroenterology"
      },
      {
        id: "j-p17",
        term: "Cystocentesis",
        pronunciation: "sis-toh-sen-TEE-sis",
        meaning: "Collection of urine by inserting a needle directly through the abdominal wall into the bladder under ultrasound guidance. The gold standard for urine culture — avoids contamination from the lower urinary tract.",
        clientExplanation: "Cystocentesis means collecting urine with a small needle directly into the bladder — most pets barely notice. It gives us the cleanest possible sample for testing.",
        category: "Procedures / Diagnostics"
      },
      {
        id: "j-p18",
        term: "Thoracocentesis",
        pronunciation: "thor-ah-koh-sen-TEE-sis",
        meaning: "Insertion of a needle into the chest cavity to remove abnormal fluid or air. Performed diagnostically (to sample fluid) or therapeutically (to relieve pressure and improve breathing). Also called a pleural tap.",
        clientExplanation: "Thoracocentesis means using a needle to drain fluid or air from around the lungs — it relieves pressure and helps your pet breathe more easily.",
        category: "Procedures"
      },
      {
        id: "j-p19",
        term: "Abdominocentesis",
        pronunciation: "ab-dom-ih-noh-sen-TEE-sis",
        meaning: "Insertion of a needle into the abdominal cavity to collect or drain fluid (ascites). Used to diagnose the cause of abdominal fluid or to relieve discomfort from fluid accumulation.",
        clientExplanation: "Abdominocentesis means using a needle to collect or drain fluid from the abdomen — to find out what is causing the fluid to build up, or to make your pet more comfortable.",
        category: "Procedures"
      },
      {
        id: "j-p20",
        term: "Pericardiocentesis",
        pronunciation: "peh-ree-kar-dee-oh-sen-TEE-sis",
        meaning: "Insertion of a needle into the pericardial sac (surrounding the heart) to drain fluid. Pericardial effusion compresses the heart — a life-threatening condition called cardiac tamponade. Usually performed under ultrasound guidance.",
        clientExplanation: "Pericardiocentesis means draining fluid from around the heart with a needle — the fluid was compressing the heart and making it hard to pump properly. Usually an emergency procedure that provides immediate relief.",
        category: "Procedures / Cardiology"
      },
      {
        id: "j-a01",
        term: "ADR",
        pronunciation: "",
        meaning: "Ain't Doin' Right. Informal clinical shorthand used when a pet is clearly unwell but no specific diagnosis has been made. Used in notes to indicate the pet is off colour or lethargic without a clear cause identified.",
        clientExplanation: "ADR just means the pet is clearly not themselves — something is off, but we're still working out what.",
        category: "Acronyms"
      },
      {
        id: "j-a02",
        term: "IM / IV / PO / SQ",
        pronunciation: "",
        meaning: "Routes of medication administration. IM = intramuscular (into muscle). IV = intravenous (into a vein). PO = per os (by mouth). SQ/SC = subcutaneous (under the skin).",
        clientExplanation: "These abbreviations describe how a medication is given — by mouth, into a vein, into a muscle, or under the skin.",
        category: "Acronyms"
      },
      {
        id: "j-a03",
        term: "SID / BID / TID / QID",
        pronunciation: "",
        meaning: "Dosing frequency. SID = once daily. BID = twice daily. TID = three times daily. QID = four times daily.",
        clientExplanation: "These are shorthand for how often to give a medication — SID is once a day, BID is twice, TID is three times, QID is four times.",
        category: "Acronyms"
      },
      {
        id: "j-a03b",
        term: "EOD / PRN / q12h",
        pronunciation: "",
        meaning: "More dosing abbreviations. EOD = every other day. PRN = as needed (pro re nata). q12h = every 12 hours. q24h = every 24 hours.",
        clientExplanation: "EOD means every other day, PRN means give it when needed, q12h means every 12 hours.",
        category: "Acronyms"
      },
      {
        id: "j-a04",
        term: "DC",
        pronunciation: "",
        meaning: "Difficult Client. An internal notation placed discreetly in the patient file to flag that the owner requires careful handling — e.g. has been aggressive, abusive, or has a history of disputes. The abbreviation is intentionally non-descriptive so clients who see the screen won't know what it means.",
        clientExplanation: "This is an internal staff notation — not explained to clients.",
        category: "Acronyms (Internal)"
      },
      {
        id: "j-a05",
        term: "BAR",
        pronunciation: "",
        meaning: "Bright, Alert, Responsive. Describes a patient that is completely normal in demeanour — engaged, aware, and responding normally to stimuli. The target status.",
        clientExplanation: "BAR means your pet seems completely normal and engaged — bright, alert, and responsive.",
        category: "Acronyms"
      },
      {
        id: "j-a05b",
        term: "QAR",
        pronunciation: "",
        meaning: "Quiet, Alert, Responsive. The patient is subdued or quieter than normal but still aware of their surroundings. Slightly below BAR — mild concern.",
        clientExplanation: "QAR means your pet is a bit quieter than usual but still alert and aware of what's going on around them.",
        category: "Acronyms"
      },
      {
        id: "j-a06",
        term: "TPR",
        pronunciation: "",
        meaning: "Temperature, Pulse, Respiration. The three basic vital signs assessed in every patient.",
        clientExplanation: "TPR refers to the three basic vital signs — temperature, heart rate, and breathing rate.",
        category: "Acronyms"
      },
      {
        id: "j-a07",
        term: "BCS",
        pronunciation: "",
        meaning: "Body Condition Score. A standardised 1–9 scale assessing body fat and muscle condition. 1 = severely underweight, 5 = ideal, 9 = obese. BCS 4–5 is the target range.",
        clientExplanation: "The body condition score rates your pet's weight on a scale of 1 to 9 — 5 is ideal. It helps us track whether they need to gain or lose weight.",
        category: "Acronyms"
      },
      {
        id: "j-a08",
        term: "CRT",
        pronunciation: "",
        meaning: "Capillary Refill Time. The time for colour to return to the gums after pressing on them. Normal is less than 2 seconds. Prolonged CRT (>2 sec) suggests poor perfusion, shock, or cardiovascular compromise.",
        clientExplanation: "CRT is a quick test — the vet presses briefly on the gums and the colour should return within 2 seconds. A slow refill can signal poor circulation.",
        category: "Acronyms"
      },
      {
        id: "j-a09",
        term: "CHF",
        pronunciation: "",
        meaning: "Congestive Heart Failure. The heart cannot pump effectively, leading to fluid accumulation — most commonly in the lungs (pulmonary oedema) in left-sided failure, or in the abdomen (ascites) in right-sided failure.",
        clientExplanation: "Congestive heart failure means the heart isn't pumping effectively, causing fluid to build up — usually around the lungs. It's manageable with medication but requires careful ongoing monitoring.",
        category: "Acronyms / Conditions"
      },
      {
        id: "j-a10",
        term: "DCM",
        pronunciation: "",
        meaning: "Dilated Cardiomyopathy. A condition where the heart muscle becomes thin and weak, causing the heart to enlarge. More common in large breeds. Managed with cardiac medications.",
        clientExplanation: "DCM is a type of heart disease where the heart muscle weakens and the heart enlarges — more common in large breed dogs.",
        category: "Acronyms / Conditions"
      },
      {
        id: "j-a10b",
        term: "MVD",
        pronunciation: "",
        meaning: "Mitral Valve Disease. Degeneration of the mitral valve between the left atrium and ventricle, causing it to leak. The most common heart disease in dogs overall — especially small breeds.",
        clientExplanation: "MVD is the most common heart disease in dogs — the valve on the left side of the heart wears out and starts to leak.",
        category: "Acronyms / Conditions"
      },
      {
        id: "j-a11",
        term: "VPC",
        pronunciation: "",
        meaning: "Ventricular Premature Complex. An abnormal heartbeat originating from the ventricles earlier than expected. Can occur occasionally in normal animals or indicate serious cardiac disease. Detected on ECG.",
        clientExplanation: "A VPC is an extra heartbeat coming from the wrong part of the heart — the vet will explain whether this is significant for your pet.",
        category: "Acronyms / Cardiology"
      },
      {
        id: "j-a11b",
        term: "A fib",
        pronunciation: "",
        meaning: "Atrial Fibrillation. Rapid, chaotic electrical activity in the atria causing an irregular heartbeat. Detected on ECG. Common in large breed dogs with underlying heart disease.",
        clientExplanation: "Atrial fibrillation means the top chambers of the heart are beating chaotically instead of in a regular rhythm — it requires treatment and monitoring.",
        category: "Acronyms / Cardiology"
      },
      {
        id: "j-a12",
        term: "BG",
        pronunciation: "",
        meaning: "Blood Glucose. The level of sugar in the blood. Elevated in diabetes mellitus; critically low in hypoglycemia (especially in puppies and toy breeds).",
        clientExplanation: "BG is blood glucose — the sugar level in the blood. We monitor this closely in diabetic patients.",
        category: "Acronyms"
      },
      {
        id: "j-a12b",
        term: "BP",
        pronunciation: "",
        meaning: "Blood Pressure. Measured routinely in senior patients, cats with hyperthyroidism or kidney disease, and any patient on medications that affect blood pressure.",
        clientExplanation: "BP is blood pressure — we check this regularly in older pets and those with certain conditions like kidney disease or hyperthyroidism.",
        category: "Acronyms"
      },
      {
        id: "j-a12c",
        term: "IOP",
        pronunciation: "",
        meaning: "Intraocular Pressure. The pressure inside the eye. Elevated IOP = glaucoma. Reduced IOP = uveitis.",
        clientExplanation: "IOP is the pressure inside the eye — high pressure means glaucoma, which can be very painful and damage vision.",
        category: "Acronyms"
      },
      {
        id: "j-a12d",
        term: "USG",
        pronunciation: "",
        meaning: "Urine Specific Gravity. Measures how concentrated the urine is — an indicator of kidney function.",
        clientExplanation: "USG tells us how concentrated your pet's urine is — it's a useful indicator of how well the kidneys are working.",
        category: "Acronyms"
      },
      {
        id: "j-a12e",
        term: "RR, RRR (or SRR)",
        pronunciation: "",
        meaning: "Respiratory Rate. The number of breaths per minute. Owners of cardiac patients are often asked to monitor resting respiratory rate (RRR) or sleeping respiratory rate (SRR) at home — elevated RRR/SRR can be an early sign of heart failure.",
        clientExplanation: "RR is respiratory rate — how many breaths per minute. For heart patients we sometimes ask owners to count this at home while their pet is resting.",
        category: "Acronyms"
      },
      {
        id: "j-a12f",
        term: "HR",
        pronunciation: "",
        meaning: "Heart Rate. Beats per minute.",
        clientExplanation: "HR is heart rate — how many times the heart beats per minute.",
        category: "Acronyms"
      },
      {
        id: "j-a12g",
        term: "STT",
        pronunciation: "",
        meaning: "Schirmer Tear Test. Measures tear production. Used to diagnose keratoconjunctivitis sicca (KCS / dry eye).",
        clientExplanation: "The Schirmer tear test checks whether your pet's eyes are producing enough tears — low tear production causes dry eye, which is uncomfortable and needs treatment.",
        category: "Acronyms"
      },
      {
        id: "j-a13",
        term: "C/S/V/D",
        pronunciation: "",
        meaning: "Coughing / Sneezing / Vomiting / Diarrhea. Used in records to note which symptoms are present.",
        clientExplanation: "C/S/V/D is a quick shorthand for the main symptoms — coughing, sneezing, vomiting, and diarrhea.",
        category: "Acronyms"
      },
      {
        id: "j-a13b",
        term: "V+ / D+ / C+ / S+",
        pronunciation: "",
        meaning: "V+ = vomiting present. D+ (also Dha) = diarrhea present. C+ = coughing present. S+ = sneezing present.",
        clientExplanation: "These are quick notation symbols used in records to show which symptoms are present.",
        category: "Acronyms"
      },
      {
        id: "j-a14",
        term: "BM",
        pronunciation: "",
        meaning: "Bowel Movement.",
        clientExplanation: "BM just means bowel movement — we often note whether a pet has had one, especially after surgery.",
        category: "Acronyms"
      },
      {
        id: "j-a14b",
        term: "GI / GIT",
        pronunciation: "",
        meaning: "Gastrointestinal / Gastrointestinal Tract. Refers to the digestive system as a whole — from the esophagus to the rectum.",
        clientExplanation: "GI or GIT refers to the digestive system.",
        category: "Acronyms"
      },
      {
        id: "j-a14c",
        term: "PE",
        pronunciation: "",
        meaning: "Physical Examination. The hands-on assessment of a patient — includes observation, palpation, auscultation of heart and lungs, and assessment of vital signs.",
        clientExplanation: "PE is the physical exam — the full hands-on check the vet does at each visit.",
        category: "Acronyms"
      },
      {
        id: "j-a14d",
        term: "NAD",
        pronunciation: "",
        meaning: "No Abnormalities Detected. Used in records to indicate that a particular system or finding was examined and appeared normal.",
        clientExplanation: "NAD means nothing abnormal was found — everything checked out normal in that area.",
        category: "Acronyms"
      },
      {
        id: "j-a14e",
        term: "WNL",
        pronunciation: "",
        meaning: "Within Normal Limits. Used similarly to NAD — findings are within the expected normal range.",
        clientExplanation: "WNL means the results or findings are within the normal range.",
        category: "Acronyms"
      },
      {
        id: "j-a15",
        term: "Dx",
        pronunciation: "",
        meaning: "Diagnosis — the identified condition or disease.",
        clientExplanation: "Dx is shorthand for diagnosis.",
        category: "Acronyms"
      },
      {
        id: "j-a15b",
        term: "Ddx",
        pronunciation: "",
        meaning: "Differential Diagnosis — the list of possible diagnoses being considered before a definitive diagnosis is made.",
        clientExplanation: "Ddx is the list of possible diagnoses the vet is considering — it gets narrowed down as test results come in.",
        category: "Acronyms"
      },
      {
        id: "j-a15c",
        term: "Rx",
        pronunciation: "",
        meaning: "Prescription",
        clientExplanation: "Rx means the prescription.",
        category: "Acronyms"
      },
      {
        id: "j-a15d",
        term: "Tx",
        pronunciation: "",
        meaning: "Treatment.",
        clientExplanation: "Tx is shorthand for treatment.",
        category: "Acronyms"
      },
      {
        id: "j-a15e",
        term: "Sx",
        pronunciation: "",
        meaning: "Surgery",
        clientExplanation: "Sx means surgery.",
        category: "Acronyms"
      },
      {
        id: "j-a15f",
        term: "Hx",
        pronunciation: "",
        meaning: "History — the patient's medical background and the owner's account of the current problem.",
        clientExplanation: "Hx is the history — what's happened with your pet's health leading up to today.",
        category: "Acronyms"
      },
      {
        id: "j-a15g",
        term: "Fx",
        pronunciation: "",
        meaning: "Fracture",
        clientExplanation: "Fx means fracture — a broken bone.",
        category: "Acronyms"
      },
      {
        id: "j-a16",
        term: "ECG",
        pronunciation: "ee-see-jee",
        meaning: "Electrocardiogram. Records the electrical activity of the heart. Used to detect arrhythmias and conduction abnormalities. Also written as EKG.",
        clientExplanation: "An ECG records the heart's electrical activity — a quick, painless test using sensors placed on the skin.",
        category: "Acronyms / Diagnostics"
      },
      {
        id: "j-a17",
        term: "FAD",
        pronunciation: "",
        meaning: "Flea Allergy Dermatitis. A skin allergy to flea saliva — the most common cause of itching in dogs and cats. Even one flea bite can trigger a severe reaction in sensitised animals.",
        clientExplanation: "FAD is a flea allergy — your pet is allergic to flea saliva, so even a single flea bite can cause intense itching. Year-round prevention is important.",
        category: "Acronyms / Conditions"
      },
      {
        id: "j-a17b",
        term: "IBD",
        pronunciation: "",
        meaning: "Inflammatory Bowel Disease. Chronic inflammation of the GI tract causing ongoing vomiting, diarrhea, and/or weight loss. Managed with diet change, immunosuppressants, and sometimes B12 supplementation.",
        clientExplanation: "IBD means chronic inflammation of the digestive tract — it causes ongoing gut symptoms and needs long-term management.",
        category: "Acronyms / Conditions"
      },
      {
        id: "j-a17c",
        term: "IVDD",
        pronunciation: "",
        meaning: "Intervertebral Disc Disease. Degeneration and herniation of the discs between the vertebrae, compressing the spinal cord. Causes pain, weakness, or paralysis. Common in Dachshunds, Corgis, French Bulldogs.",
        clientExplanation: "IVDD is a slipped disc — the cushioning between the vertebrae herniates and presses on the spinal cord. It can cause pain, weakness, or in severe cases loss of the ability to walk.",
        category: "Acronyms / Conditions"
      },
      {
        id: "j-a17d",
        term: "FLUTD / FUS",
        pronunciation: "",
        meaning: "Feline Lower Urinary Tract Disease / Feline Urologic Syndrome. An umbrella term for conditions affecting the lower urinary tract in cats — includes idiopathic cystitis, urinary crystals, urethral plugs, and infection. Signs include straining, blood in urine, and frequent trips to the litter box.",
        clientExplanation: "FLUTD covers all the conditions that can cause urinary problems in cats — straining, blood in the urine, or going to the litter box frequently.",
        category: "Acronyms / Conditions"
      },
      {
        id: "j-a17e",
        term: "PUPD",
        pronunciation: "",
        meaning: "Polyuria / Polydipsia. Increased urination (PU) and increased drinking (PD). Possible causes include diabetes, kidney disease, Cushing's disease, Addison's disease, hyperthyroidism, and pyometra.",
        clientExplanation: "PUPD means your pet is drinking and urinating much more than normal — it's an important sign that warrants investigation.",
        category: "Acronyms / Conditions"
      },
      {
        id: "j-a18",
        term: "HBC",
        pronunciation: "",
        meaning: "Hit By Car. Shorthand for road traffic accident trauma. An HBC patient requires immediate triage for internal injuries, shock, fractures, and head trauma regardless of how well they appear.",
        clientExplanation: "HBC means hit by a car. Even if the pet seems okay, internal injuries can be present — immediate assessment is always needed.",
        category: "Acronyms"
      },
      {
        id: "j-a19",
        term: "hyperT4",
        pronunciation: "",
        meaning: "Hyperthyroidism — an overactive thyroid gland producing too much T4. Only in cats older than 7 years. Signs include weight loss despite good appetite, increased thirst, hyperactivity, vomiting.",
        clientExplanation: "hyperT4 means the thyroid is overactive — producing too much thyroid hormone. Common in older cats.",
        category: "Acronyms / Endocrinology"
      },
      {
        id: "j-a19b",
        term: "hypoT4",
        pronunciation: "",
        meaning: "Hypothyroidism — an underactive thyroid gland producing too little T4. Usually in dogs. Signs include weight gain, lethargy, coat changes, and cold intolerance.",
        clientExplanation: "hypoT4 means the thyroid is underactive — not producing enough thyroid hormone. More common in dogs.",
        category: "Acronyms / Endocrinology"
      },
      {
        id: "j-a20",
        term: "AG",
        pronunciation: "",
        meaning: "Anal Gland (anal sac). The small scent glands on either side of the rectum.",
        clientExplanation: "AG is shorthand for anal gland — the small glands on either side of the rectum that sometimes need to be emptied.",
        category: "Acronyms"
      },
      {
        id: "j-a21",
        term: "R lat / L lat / VD / DV",
        pronunciation: "",
        meaning: "Radiograph (X-ray) positioning. R lat = Right lateral (lying on right side). L lat = Left lateral (lying on left side). VD = Ventrodorsal (lying on back). DV = Dorsoventral (lying on stomach).",
        clientExplanation: "These describe the position your pet is in when the X-ray is taken.",
        category: "Acronyms / Imaging"
      },
      {
        id: "j-a22",
        term: "LF / RF / RH / LH",
        pronunciation: "",
        meaning: "Limb abbreviations. LF = Left Forelimb. RF = Right Forelimb. RH = Right Hindlimb. LH = Left Hindlimb.",
        clientExplanation: "These are shorthand for which leg — LF is left front, RF is right front, RH is right hind, LH is left hind.",
        category: "Acronyms"
      },
      {
        id: "j-a23",
        term: "LN",
        pronunciation: "",
        meaning: "Lymph Node. Small glands found throughout the body that filter lymphatic fluid and are part of the immune system. Enlarged lymph nodes (lymphadenopathy) can indicate infection, inflammation, or cancer.",
        clientExplanation: "LN is shorthand for lymph node — the glands that are often checked during a physical exam.",
        category: "Acronyms"
      },
      {
        id: "j-a23b",
        term: "LRS",
        pronunciation: "",
        meaning: "Lactated Ringer's Solution. The most commonly used IV fluid in veterinary medicine — a balanced crystalloid electrolyte solution used for fluid therapy, shock, and surgical patients.",
        clientExplanation: "LRS is the most common IV drip fluid we use — it replaces fluids and electrolytes.",
        category: "Acronyms"
      },
      {
        id: "j-a23c",
        term: "SQF",
        pronunciation: "",
        meaning: "Subcutaneous Fluids. Fluids given under the skin rather than into a vein. Often administered at home by owners of cats with chronic kidney disease to maintain hydration.",
        clientExplanation: "SQF means fluids given under the skin — owners of cats with kidney disease are sometimes taught to do this at home.",
        category: "Acronyms"
      },
      {
        id: "j-a23d",
        term: "ROM",
        pronunciation: "",
        meaning: "Range of Movement. How much a joint can move in each direction — assessed during orthopaedic examination. Reduced ROM suggests pain, stiffness, or joint disease.",
        clientExplanation: "ROM describes how much movement a joint has — reduced range of movement can indicate arthritis or injury.",
        category: "Acronyms"
      },
      {
        id: "j-a24",
        term: "SNC",
        pronunciation: "",
        meaning: "See New Communication. Used as the subject line of internal memos written to vets, alerting them that there is a message on file from the owner.",
        clientExplanation: "This is an internal staff notation — not visible to clients.",
        category: "Acronyms (Internal)"
      },
      {
        id: "j-a25",
        term: "o / LMOM",
        pronunciation: "",
        meaning: "Internal record shorthand. o = owner (e.g. 'o called re: medications'). LMOM = Left Message On Machine — documents a phone call attempt when no one answered.",
        clientExplanation: "These are internal notation shortcuts used in patient records.",
        category: "Acronyms (Internal)"
      },
      {
        id: "j-a26",
        term: "PVD",
        pronunciation: "",
        meaning: "Purina Veterinary Diets. Prescription food.",
        clientExplanation: "PVD is shorthand for Purina Veterinary Diets — prescription diet foods made by Purina.",
        category: "Acronyms (Internal)"
      },
      {
        id: "j-a26b",
        term: "RCVD",
        pronunciation: "",
        meaning: "Royal Canin Veterinary Diets.  Prescription food.",
        clientExplanation: "RCVD is shorthand for Royal Canin Veterinary Diets — prescription diet foods made by Royal Canin, formulated for specific medical conditions.",
        category: "Acronyms (Internal)"
      },
      {
        id: "j-a27",
        term: "rads",
        pronunciation: "",
        meaning: "Informal shorthand for radiographs (X-rays). Commonly used in verbal communication and records.",
        clientExplanation: "Rads is just an informal shorthand for X-rays.",
        category: "Acronyms"
      },
      {
        id: "j-a28",
        term: "sr buprenorphine",
        pronunciation: "",
        meaning: "Slow Release Buprenorphine. A long-acting formulation of buprenorphine (opioid pain reliever) lasting approximately 72 hours after a single injection. FOR USE IN CATS ONLY.",
        clientExplanation: "Slow-release buprenorphine is a long-acting pain medication given as a single injection that lasts about 3 days. It is only used in cats.",
        category: "Acronyms / Medications"
      },
      {
        id: "j-a29",
        term: "PE (Physical Exam)",
        pronunciation: "",
        meaning: "Physical Examination. The hands-on assessment performed at every visit — includes vital signs, auscultation of heart and lungs, palpation of abdomen, lymph nodes, and assessment of overall body condition.",
        clientExplanation: "PE is the full physical exam the vet does at each visit — checking heart, lungs, abdomen, lymph nodes and overall condition.",
        category: "Acronyms"
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
        meaning: "For skin, respiratory, urinary, and soft tissue infections. Twice daily. Give with food.",
        clientExplanation: "This is an antibiotic — it treats bacterial infections. Always finish the full course even if your pet seems better.",
        category: "Antibiotics"
      },
      {
        id: "m-01b",
        term: "Apoquel (oclacitinib)",
        pronunciation: "AP-oh-kwel / ok-lah-SIH-tih-nib",
        meaning: "To control allergic skin disease in dogs, similar to Zenrelia and Numelvi. Fast-acting — often within 4 hours. Twice daily initially, then once daily for maintenance.",
        clientExplanation: "Apoquel targets the itch signal directly in dogs with skin allergies — it works quickly, often within a few hours. Given twice daily at first, then once daily long-term.",
        category: "Dermatology"
      },
      {
        id: "m-02",
        term: "Atopica (cyclosporine)",
        pronunciation: "at-OH-pih-kah / sy-kloh-SPOR-een",
        meaning: "To control allergic skin disease in dogs and cats. Immunosuppressive.  Takes 4-6 weeks to reach full effect. Once daily.",
        clientExplanation: "Atopica damps down the part of the immune system causing the allergic reaction. It takes a few weeks to see the full benefit and is often reduced to every other day once controlled.",
        category: "Dermatology / Immunosuppressants"
      },
      {
        id: "m-03",
        term: "Baytril (enrofloxacin)",
        pronunciation: "BAY-tril / en-roh-FLOX-ah-sin",
        meaning: "For skin, urinary, respiratory, and ear infections. Use with caution in young growing animals as it can affect cartilage development. Oral version is once daily (except in exotic pets), topical version is twice daily. Oral version to be given with food.",
        clientExplanation: "Baytril is a strong antibiotic often used for ear or urinary infections, or when other antibiotics have not worked.",
        category: "Antibiotics"
      },
      {
        id: "m-04",
        term: "Benazepril (Fortekor)",
        pronunciation: "ben-AY-zeh-pril / FOR-teh-kor",
        meaning: "To manage heart disease, high blood pressure, and chronic kidney disease in dogs and cats. Usually once daily.",
        clientExplanation: "Fortekor helps reduce the strain on your pet's heart and kidneys. It is an important part of managing these conditions long-term and is usually given once daily.",
        category: "Cardiology / Nephrology"
      },
      {
        id: "m-05",
        term: "Buprenorphine",
        pronunciation: "byoo-PREN-or-feen",
        meaning: "An opioid pain reliever used for moderate to severe pain. Injectable for cats and dogs.  In cats, often given as an oral transmucosal liquid absorbed through the gums. Usually twice daily.  A slow-release version that lasts 72 hours can be used in cats only. Can cause sedation.",
        clientExplanation: "This is a strong pain medication — your pet may seem sleepy or calm while on it, which is expected. In cats it is often given as a liquid absorbed through the gums.",
        category: "Pain Management"
      },
      {
        id: "m-06",
        term: "Cerenia / Emavert (maropitant)",
        pronunciation: "seh-REE-nee-uh / em-ah-VERT / mair-OH-pih-tant",
        meaning: "An antiemetic (anti-vomiting) which also has some pain relief/antiinflammatory effect. Also used for motion sickness, sneezing and coughing (off label). Works within 1-2 hours. Once daily.",
        clientExplanation: "Most potent anti-nausea medication available in cats and dogs, stops vomiting and nausea within 1-2 hours. It can also be used before car travel to prevent motion sickness.",
        category: "Gastrointestinal"
      },
      {
        id: "m-07",
        term: "Cephalexin (Cefaseptin)",
        pronunciation: "sef-ah-LEX-in / sef-ah-SEP-tin",
        meaning: "For skin, soft tissue, and urinary tract infections. Twice daily.  Give with food.",
        clientExplanation: "Cefaseptin is the veterinary version of Cephalexin - a chewable, flavoured tablet commonly used antibiotic for skin and urinary infections. Give with food to reduce the chance of stomach upset.",
        category: "Antibiotics"
      },
      {
        id: "m-08",
        term: "Clindamycin (Antirobe/Clinacin)",
        pronunciation: "klin-dah-MY-sin / AN-tih-robe",
        meaning: "For dental, skin, bone, and soft tissue infections. Twice daily.  Give with food.",
        clientExplanation: "This antibiotic is particularly good for mouth and dental infections, which is why it is often prescribed after a dental procedure.",
        category: "Antibiotics"
      },
      {
        id: "m-09",
        term: "Clomicalm (clomipramine)",
        pronunciation: "KLOH-mih-kalm / kloh-MIP-rah-meen",
        meaning: "A tricyclic antidepressant used to treat separation anxiety and compulsive behaviours in dogs. Works best alongside behavioural modification. Takes several weeks to reach full effect. Once or twice daily.",
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
        meaning: "An NSAID used for pain and inflammation in dogs — post-surgical pain and osteoarthritis. Do not use in cats. Once daily.",
        clientExplanation: "Deramaxx is an anti-inflammatory pain reliever for dogs. Give with food. Never give to cats.",
        category: "Pain Management / NSAIDs"
      },
      {
        id: "m-12",
        term: "Prednisone /Prednisolone",
        pronunciation: "pred-NIS-one / pred-NIS-oh-lone",
        meaning: "Corticosteroids to reduce inflammation and/or suppress the immune system. Used for allergies, inflammatory conditions, immune-mediated disease, and some cancers. Twice daily.  PREDNISOLONE for CATS.",
        clientExplanation: "This is a steroid medication — it reduces inflammation and calms the immune system. Side effects are possible with long-term use, so we will monitor carefully.",
        category: "Steroids"
      },
      {
        id: "m-13",
        term: "Doxycycline",
        pronunciation: "dok-see-SY-kleen",
        meaning: "For tick-borne diseases (Lyme, Anaplasma), respiratory infections, and atypical bacteria. Must be given with food and water — can cause oesophageal stricture if dry-swallowed, especially in cats. Twice daily.",
        clientExplanation: "Doxycycline is often used for tick-borne infections and respiratory conditions. Always give with food and make sure your pet swallows it with water — never give it dry, especially to cats.",
        category: "Antibiotics"
      },
      {
        id: "m-14",
        term: "Famotidine",
        pronunciation: "fah-MOH-tih-deen",
        meaning: "An H2 blocker (antacid) to reduce stomach acid. Helps with gastric ulcers and acid reflux. Twice daily.",
        clientExplanation: "Famotidine reduces stomach acid — it is often given alongside other medications to protect the stomach. Similar to how Pepcid works in people.",
        category: "Gastrointestinal"
      },
      {
        id: "m-15",
        term: "Felimazole (methimazole)",
        pronunciation: "feh-LIM-ah-zole / meth-IM-ah-zole",
        meaning: "Antithyroid medication to treat hyperthyroidism in cats. Requires regular blood monitoring for thyroid levels and kidney function. Once or twice daily.",
        clientExplanation: "Felimazole controls an overactive thyroid in cats. Regular blood tests are important — usually every few weeks at first, then every 6 months once stable.",
        category: "Endocrinology"
      },
      {
        id: "m-16",
        term: "Fluoxetine (Prozac, Reconcile)",
        pronunciation: "floo-OX-eh-teen",
        meaning: "An SSRI antidepressant for anxiety, compulsive behaviours, and aggression in dogs and cats. Brand names Prozac and Reconcile. Takes 4-6 weeks for full effect. Best used alongside behavioural modification. Once daily.",
        clientExplanation: "Fluoxetine helps with anxiety and compulsive behaviours — it is the same medication as Prozac in people. It takes several weeks to work fully, and behaviour training alongside it is important.",
        category: "Behavioural / Anxiolytics"
      },
      {
        id: "m-17",
        term: "Furosemide (Lasix)",
        pronunciation: "fyoo-ROH-seh-mide / LAY-siks",
        meaning: "A diuretic (water pill) that helps remove excess fluid from the body. Used in heart failure and conditions causing fluid accumulation. Twice to three times daily. Must have water available at all times.",
        clientExplanation: "Lasix is a water tablet — it helps the kidneys remove excess fluid that has built up, particularly around the lungs or abdomen. You may notice your pet urinating more. ENSURE WATER IS AVAILABLE AT ALL TIMES.",
        category: "Cardiology"
      },
      {
        id: "m-18",
        term: "Gabapentin",
        pronunciation: "gab-ah-PEN-tin",
        meaning: "For neuropathic pain and as a sedative or anxiolytic before procedures/travel. Widely used for anxiety in cats before veterinary visits. Twice daily.",
        clientExplanation: "Gabapentin can be used for nerve pain or to help with anxiety. It often makes pets a bit drowsy at higher doses, which is expected.",
        category: "Pain Management / Neurology"
      },
      {
        id: "m-19",
        term: "Galliprant (grapiprant)",
        pronunciation: "GAL-ih-prant / grah-PIP-rant",
        meaning: "An NSAID used for osteoarthritis pain in dogs. Works differently from traditional NSAIDs and is often better tolerated in dogs with GI sensitivity. Once daily.   Give with food.",
        clientExplanation: "Galliprant is a newer type of anti-inflammatory for arthritis in dogs. It works a bit differently from traditional options and is sometimes better on the stomach.",
        category: "Pain Management / NSAIDs"
      },
      {
        id: "m-20",
        term: "GS-441524",
        pronunciation: "jee-ess four-four-one five-two-four",
        meaning: "An antiviral used off-label to treat feline infectious peritonitis (FIP) — a previously fatal coronavirus disease in cats. Treatment is typically 84 days. Once or twice daily.",
        clientExplanation: "GS-441524 is an antiviral treatment for FIP — a disease that used to be fatal in cats. Treatment takes about 12 weeks and requires close monitoring.",
        category: "Antivirals"
      },
      {
        id: "m-21",
        term: "Ketoconazole",
        pronunciation: "kee-toh-KON-ah-zole",
        meaning: "An antifungal used for systemic or skin fungal infections. Also used in Cushing's disease management when Vetoryl is not tolerated. Interacts with many other medications. Once or twice daily.",
        clientExplanation: "Ketoconazole treats fungal infections. Let us know what other medications your pet is on as interactions are possible.",
        category: "Antifungals / Endocrinology"
      },
      {
        id: "m-22",
        term: "Meloxicam (Metacam, Meloxidin)",
        pronunciation: "meh-LOX-ih-kam / MET-ah-kam / mel-OX-ih-din",
        meaning: "An NSAID used for pain and inflammation. Brand names Metacam and Meloxidin. Used for post-surgical pain and osteoarthritis. Use in cats requires careful dosing and monitoring. Once daily.  Give with food.",
        clientExplanation: "Metacam or Meloxidin is an anti-inflammatory pain reliever. Give with food to protect the stomach.",
        category: "Pain Management / NSAIDs"
      },
      {
        id: "m-23",
        term: "Metronidazole (Flagyl)",
        pronunciation: "meh-troh-NYE-dah-zole / FLAY-jil",
        meaning: "For gastrointestinal infections and giardia. Can cause neurological side effects at high doses. Twice daily.  Give with food.",
        clientExplanation: "This medication treats gut infections and certain parasites like giardia. Giving it with a small amount of food can help reduce nausea.",
        category: "Antibiotics / Gastrointestinal"
      },
      {
        id: "m-24",
        term: "Mirtazapine (Mirataz)",
        pronunciation: "mir-TAZ-ah-peen / MIR-ah-taz",
        meaning: "An appetite stimulant and antiemetic used commonly in cats and occasionally dogs. Mirataz is a transdermal gel applied to the inner ear flap. Once daily.",
        clientExplanation: "Mirataz is a gel applied to the inside of the ear flap to stimulate appetite. Apply a small amount as directed, rotate ears with each dose, and wash hands after applying.",
        category: "Gastrointestinal / Appetite"
      },
      {
        id: "m-25",
        term: "Numelvi (lokivetmab)",
        pronunciation: "noo-MEL-vee",
        meaning: "Tto control itch and inflammation associated with allergic skin disease in dogs, similar to Apoquel and Zenrelia. For dogs only. Once daily.",
        clientExplanation: "Numelvi is an oral allergy treatment for dogs that targets the itch signal directly. It works quickly and is given daily.",
        category: "Dermatology"
      },
      {
        id: "m-25b",
        term: "Cytopoint (lokivetmab)",
        pronunciation: "SY-toh-point",
        meaning: "A monoclonal antibody injection used to control itch and inflammation associated with allergic skin disease in dogs. For dogs only. Given as an injection at the clinic every 4–8 weeks. Fast-acting — often within 12 hours.",
        clientExplanation: "Cytopoint is an injection we give here at the clinic that directly targets the itch signal — it typically starts working within 24 hours and lasts 4–8 weeks. It's very safe and well tolerated.",
        category: "Dermatology"
      },
      {
        id: "m-26",
        term: "Omeprazole",
        pronunciation: "oh-MEP-rah-zole",
        meaning: "Reduces stomach acid more powerfully than famotidine. Used for gastric ulcers, acid reflux, and GI protection. Twice daily, given 30-45 minutes before a meal.",
        clientExplanation: "Omeprazole is a stronger acid reducer than famotidine — used when the stomach needs more protection.",
        category: "Gastrointestinal"
      },
      {
        id: "m-27",
        term: "Onsior (robenacoxib)",
        pronunciation: "ON-see-or / roh-ben-ah-KOX-ib",
        meaning: "An NSAID used for short-term pain and inflammation in cats and dogs. Particularly useful in cats where long-term meloxicam use requires extra caution. Once daily.  Give with food.",
        clientExplanation: "Onsior is an anti-inflammatory pain reliever often used for short-term pain after procedures. Give with food.",
        category: "Pain Management / NSAIDs"
      },
      {
        id: "m-28",
        term: "PEG 3350 powder (MiraLax)",
        pronunciation: "pee-ee-jee three-three-five-oh",
        meaning: "A laxative used to treat constipation — particularly in cats with megacolon or chronic constipation. Mixed into food or water. Same product as RestoraLAX for people. Once or twice daily.",
        clientExplanation: "PEG 3350 is a tasteless powder mixed into food or water to help with constipation. It softens stool by drawing water into the intestine.",
        category: "Gastrointestinal"
      },
      {
        id: "m-29",
        term: "Phenobarbital",
        pronunciation: "fee-noh-BAR-bih-tal",
        meaning: "An anticonvulsant to manage seizures in dogs and cats. Requires blood monitoring for drug levels and liver function. Twice daily.",
        clientExplanation: "Phenobarbital controls seizures. Blood tests every 6 months are important to make sure the levels and liver are okay.",
        category: "Neurology"
      },
      {
        id: "m-30",
        term: "Pimobendan (Vetmedin)",
        pronunciation: "pih-MOH-ben-dan / vet-MEH-din",
        meaning: "A heart medication that improves heart muscle function and dilates blood vessels. Used in cats and dogs. Ideally given 1-2 hours before or after feeding (i.e. on an empty stomach). Usually twice daily.",
        clientExplanation: "Vetmedin helps the heart pump more effectively. Give twice daily, ideally about an hour before food.",
        category: "Cardiology"
      },
      {
        id: "m-31",
        term: "Prednisolone vs Prednisone",
        pronunciation: "pred-NIS-oh-lone / PRED-nih-zone",
        meaning: "Corticosteroids. Prednisolone is the active form — prednisone must be converted by the liver. Cats absorb prednisolone better and it is the preferred form for feline patients. Once or twice daily.",
        clientExplanation: "Both are steroids that work similarly — the vet chose this specific one because it is better absorbed by your pet.",
        category: "Steroids"
      },
      {
        id: "m-32",
        term: "Proin / Propalin (phenylpropanolamine)",
        pronunciation: "PROH-in / PRO-pah-lin / fen-il-proh-PAH-nohl-ah-meen",
        meaning: "To treat urinary incontinence in spayed female dogs by tightening the urethral sphincter. Blood pressure monitoring recommended during treatment. Twice daily.",
        clientExplanation: "Proin or Propalin helps with urinary leakage — it strengthens the muscle that controls urination. Blood pressure monitoring is recommended.",
        category: "Urology"
      },
      {
        id: "m-33",
        term: "Semintra (telmisartan)",
        pronunciation: "seh-MIN-trah / tel-mih-SAR-tan",
        meaning: "An angiotensin receptor blocker used in cats to manage hypertension and reduce protein loss in urine in chronic kidney disease. Given as an oral solution. Once daily.",
        clientExplanation: "Semintra is an oral liquid that helps control blood pressure and protects the kidneys. Shake well before use and give the exact dose prescribed.",
        category: "Cardiology / Nephrology"
      },
      {
        id: "m-34",
        term: "Senvelgo (velagliflozin)",
        pronunciation: "sen-VEL-goh / vel-ah-GLIF-loh-zin",
        meaning: "An oral solution used to manage diabetes mellitus in cats. Causes the kidneys to excrete excess glucose in the urine. An alternative to insulin in some feline diabetics. Close monitoring for ketones is CRITICAL. Once daily.",
        clientExplanation: "Senvelgo is a liquid medication for diabetes in cats — it helps the kidneys remove excess sugar. It can be an alternative to insulin injections for some cats.",
        category: "Endocrinology"
      },
      {
        id: "m-35",
        term: "Simplicef (cefpodoxime)",
        pronunciation: "SIM-plih-sef / sef-poh-DOX-eem",
        meaning: "For skin infections, urinary tract infections, and wound infections in dogs. Once daily.  Give with food.",
        clientExplanation: "Simplicef is an antibiotic given once a day — convenient for owners. Often used for skin or urinary tract infections. Give with food.",
        category: "Antibiotics"
      },
      {
        id: "m-36",
        term: "Sulcrate / Sucralfate liquid",
        pronunciation: "SUL-krayt / soo-KRAL-fate",
        meaning: "A gastrointestinal protectant that coats and protects ulcers and irritated areas of the stomach. Best given on an empty stomach, spaced at least 2 hours from other medications since it will impair their aborption. Twice daily.",
        clientExplanation: "Sulcrate coats and protects the stomach lining. Give on an empty stomach and space it at least 2 hours from other medications.",
        category: "Gastrointestinal"
      },
      {
        id: "m-37",
        term: "Thyro-Tabs (thyroxine / levothyroxine)",
        pronunciation: "THY-roh-tabs / thy-ROX-een",
        meaning: "Thyroid hormone replacement used to treat hypothyroidism in dogs. Once or twice daily.",
        clientExplanation: "Thyro-Tabs replaces the thyroid hormone your dog is not producing enough of.",
        category: "Endocrinology"
      },
      {
        id: "m-39",
        term: "Vetoryl (trilostane)",
        pronunciation: "VET-oh-ril / try-LOH-stayn",
        meaning: "To treat Cushing's disease in dogs — reduces cortisol production by the adrenal glands. Requires regular ACTH stimulation testing (or pre-pill cortisol testing) to monitor adrenal function. Timing of monitoring relative to dosing is critical. Once or twice daily.  Give with food.  DISCONTINUE IMMEDIATELY OF NOT EATING.",
        clientExplanation: "Vetoryl controls Cushing's disease by reducing steroid hormone production. Regular blood tests are essential — timing matters so we will schedule these carefully.",
        category: "Endocrinology"
      },
      {
        id: "m-40",
        term: "Zenrelia",
        pronunciation: "zen-REE-lee-ah",
        meaning: "To control itch and skin inflammation in cats with allergic skin disease in dogs, similar to Apoquel and Numelvi. Fast-acting, works within 4-6 hours. Once daily.",
        clientExplanation: "Zenrelia targets the itch signal directly in cats with skin allergies — it works quickly and does not have the same side effects as steroids.",
        category: "Dermatology"
      },
      {
        id: "m-41",
        term: "Zentonil",
        pronunciation: "zen-TOH-nil",
        meaning: "A liver protecting supplement containing S-adenosylmethionine (SAMe) and milk thistle. Once daily.",
        clientExplanation: "Zentonil supports liver health — it contains two natural compounds that help protect the liver. Often given alongside other treatments when the liver needs extra support.",
        category: "Hepatology / Supplements"
      }
    ]
  },
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
  }  ,
  {
    id: "vaccines",
    title: "Vaccines",
    icon: "💉",
    description: "What vaccines we offer, what they protect against, who needs them, and when to give them.",
    color: "#f0fdf4",
    colorDark: "#166534",
    terms: [
      {
        id: "v-d01",
        term: "DAPP (canine)",
        pronunciation: "dee-ay-pee-pee",
        meaning: "Distemper, Adenovirus (hepatitis), Parainfluenza, Parvovirus. Core canine vaccine. Also called DA2PP, DAP, DAPPL, or DHPP depending on formulation. Recommended for any dog that will be around other animals. All four diseases can be severe and potentially fatal in unvaccinated dogs. Sometimes given as a combination product with Leptospirosis.",
        clientExplanation: "DAPP protects against four serious diseases — distemper, hepatitis, parainfluenza, and parvo. It's a core vaccine we recommend for all dogs, especially any dog that will be around other animals.",
        category: "Canine vaccines"
      },
      {
        id: "v-d02",
        term: "Rabies (canine)",
        pronunciation: "",
        meaning: "Core canine vaccine. Required for international travel. If the dog is being vaccinated for travel purposes, rabies must be given AFTER microchipping — the microchip number must be on file before the vaccine is administered. Timing of boosters is critical for overseas travel — check specific country requirements well in advance.",
        clientExplanation: "Rabies is a core vaccine we recommend for all dogs. If you're planning to travel with your dog internationally, the rabies vaccine must be given after the microchip is placed — and the timing of boosters can matter a lot for international travel, so let us know your plans early.",
        category: "Canine vaccines"
      },
      {
        id: "v-d03",
        term: "Bordetella (canine)",
        pronunciation: "bor-deh-TEL-ah",
        meaning: "Kennel cough vaccine. Recommended for dogs that will be around other dogs — boarding, grooming, dog parks, training classes, doggy daycare. Not a core vaccine but strongly recommended for social dogs. Boosted annually.",
        clientExplanation: "Bordetella is the kennel cough vaccine. We recommend it for any dog that spends time around other dogs — boarding facilities often require it. It's given once a year.",
        category: "Canine vaccines"
      },
      {
        id: "v-d04",
        term: "Leptospirosis (canine)",
        pronunciation: "lep-toh-spy-ROH-sis",
        meaning: "Bacterial disease found in wildlife, soil, and water — particularly stagnant or slow-moving water. Recommended for dogs prone to drinking from puddles, eating things off the ground, or spending time in areas frequented by wildlife (raccoons, skunks, deer). Can cause kidney and liver failure. Can be transmitted to humans (zoonotic). Sometimes given as a combination product with DAPP.",
        clientExplanation: "Lepto is a bacterial infection found in soil and water — especially puddles and anywhere wildlife has been. We recommend it for dogs that like to drink from puddles or pick things up on walks. It can also spread to people, so it's worth protecting against.",
        category: "Canine vaccines"
      },
      {
        id: "v-d05",
        term: "DAPP schedule (canine)",
        pronunciation: "",
        meaning: "Puppies: 8 weeks, 12 weeks, 16 weeks. After the 16-week dose: boost in 1 year. After the 1-year booster: boost every 3 years. Note: the series must be completed — a puppy that only receives 1 or 2 doses is not fully protected.",
        clientExplanation: "Puppies get DAPP at 8, 12, and 16 weeks. After that, a booster at 1 year, then every 3 years. It's important to complete the full puppy series.",
        category: "Canine schedule"
      },
      {
        id: "v-d06",
        term: "Rabies schedule (canine)",
        pronunciation: "",
        meaning: "Puppies: first dose at 16 weeks. After the 16-week dose: boost in 1 year. After the 1-year booster: boost every 3 years. If vaccinating for international travel, timing relative to the date of travel may be critically important — confirm country-specific requirements.",
        clientExplanation: "Puppies get their first rabies vaccine at 16 weeks, a booster at 1 year, then every 3 years. If you're planning international travel, the timing matters — let us know well in advance.",
        category: "Canine schedule"
      },
      {
        id: "v-d07",
        term: "Bordetella schedule (canine)",
        pronunciation: "",
        meaning: "Puppies: can be given at 12 or 16 weeks. Boosted annually (every 1 year) regardless of when first given.",
        clientExplanation: "Bordetella can be given from 12 weeks and is boosted every year.",
        category: "Canine schedule"
      },
      {
        id: "v-d08",
        term: "Leptospirosis schedule (canine)",
        pronunciation: "",
        meaning: "Puppies: 12 weeks and 16 weeks (two doses, 4 weeks apart). If given for the first time to an adult dog, a booster is required 4 weeks after the first dose. Once the initial series is complete: boost annually (every 1 year).",
        clientExplanation: "Lepto requires two doses given 4 weeks apart when given for the first time — whether that's a puppy or an adult dog. After that, it's once a year.",
        category: "Canine schedule"
      },
      {
        id: "v-c01",
        term: "FVRCP (feline)",
        pronunciation: "eff-vee-ar-see-pee",
        meaning: "Feline Viral Rhinotracheitis (herpesvirus), Calicivirus, Panleukopenia. Core feline vaccine. Recommended for all cats — both indoor and outdoor. Panleukopenia (feline parvovirus) is highly contagious and can be fatal. Rhinotracheitis and calicivirus cause upper respiratory disease.",
        clientExplanation: "FVRCP protects against three serious diseases — cat flu viruses and a potentially fatal disease called panleukopenia. We recommend it for all cats, even indoor ones, as some of these viruses can be carried in on clothing and shoes.",
        category: "Feline vaccines"
      },
      {
        id: "v-c02",
        term: "Rabies (feline)",
        pronunciation: "",
        meaning: "Core feline vaccine. Particularly recommended for outdoor cats or cats with any potential exposure to wildlife. Same microchip and travel timing considerations as for dogs.",
        clientExplanation: "Rabies is recommended for all cats that go outside or could potentially be exposed to wildlife. As with dogs, it must be given after microchipping if needed for travel.",
        category: "Feline vaccines"
      },
      {
        id: "v-c03",
        term: "FeLV (feline)",
        pronunciation: "fell-vee",
        meaning: "Feline Leukemia Virus. Non-core vaccine. Recommended for both indoor and outdoor cats — indoor cats may still be exposed if they have contact with other cats. FeLV is spread through saliva, mutual grooming, and shared food/water bowls. Can cause immune suppression and cancer. No cure — prevention through vaccination is important.",
        clientExplanation: "FeLV protects against feline leukemia — a serious viral disease with no cure. We recommend it for cats that go outside or have any contact with other cats. Even some indoor cats are at risk if they interact with cats that go outside.",
        category: "Feline vaccines"
      },
      {
        id: "v-c04",
        term: "FVRCP schedule (feline)",
        pronunciation: "",
        meaning: "Kittens: 8 weeks, 12 weeks, 16 weeks. After the 16-week dose: boost in 1 year. After the 1-year booster: boost every 3 years. Special rule: if a cat receives their FIRST FVRCP dose at older than 6 months, they need a booster 4 weeks after that first dose, then the 1-year clock starts.",
        clientExplanation: "Kittens get FVRCP at 8, 12, and 16 weeks, then at 1 year, then every 3 years. If an older cat has never been vaccinated before, they'll need two doses 4 weeks apart to start.",
        category: "Feline schedule"
      },
      {
        id: "v-c05",
        term: "Rabies schedule (feline)",
        pronunciation: "",
        meaning: "Kittens: first dose at 16 weeks. After the 16-week dose: boost in 1 year. After the 1-year booster: boost every 3 years.",
        clientExplanation: "First rabies vaccine at 16 weeks, a booster at 1 year, then every 3 years.",
        category: "Feline schedule"
      },
      {
        id: "v-c06",
        term: "FeLV schedule (feline)",
        pronunciation: "",
        meaning: "Kittens: 12 weeks and 16 weeks. If given for the first time at any age other than 12 weeks: a booster is needed 4 weeks after the first dose. After the initial 16-week dose (or completed initial series): boost in 1 year. After the 1-year booster: boost every 2 years.",
        clientExplanation: "Kittens get FeLV at 12 and 16 weeks, then at 1 year, then every 2 years. If an older cat is starting FeLV for the first time, they need two doses 4 weeks apart first.",
        category: "Feline schedule"
      },
      {
        id: "v-g01",
        term: "Core vs non-core vaccines",
        pronunciation: "",
        meaning: "Core vaccines are recommended for all animals regardless of lifestyle — they protect against widespread, severe, or zoonotic diseases. Non-core vaccines are recommended based on individual risk factors (lifestyle, environment, travel). Canine core: DAPP, Rabies. Canine non-core: Bordetella, Leptospirosis. Feline core: FVRCP, Rabies (outdoor cats). Feline non-core: FeLV.",
        clientExplanation: "Core vaccines are ones we recommend for every pet. Non-core vaccines are recommended based on your pet's lifestyle — whether they spend time outside, around other animals, or near wildlife.",
        category: "General"
      },
      {
        id: "v-g02",
        term: "Microchip before rabies for travel",
        pronunciation: "",
        meaning: "For international travel, the rabies vaccine must be administered AFTER the microchip is implanted and the chip number is recorded. If the vaccine is given before the microchip, the vaccine does not count for travel purposes and the series may need to be restarted. Always confirm travel plans early — some countries have waiting periods after vaccination.",
        clientExplanation: "If your pet is being vaccinated for international travel, the microchip must go in first — then the rabies vaccine. If it's done in the wrong order, the vaccine won't be valid for travel and may need to be redone. Please let us know your travel plans as early as possible.",
        category: "General"
      },
      {
        id: "v-g03",
        term: "Initial series — why two doses?",
        pronunciation: "",
        meaning: "Several vaccines (Leptospirosis, FeLV, and FVRCP in older first-time cats) require two doses given 4 weeks apart when given for the first time. The first dose primes the immune system; the second dose is needed to generate full protection. A single dose in a naive animal does not provide adequate immunity.",
        clientExplanation: "Some vaccines need two doses when given for the very first time — the first dose gets the immune system started, and the second one, given 4 weeks later, builds full protection.",
        category: "General"
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