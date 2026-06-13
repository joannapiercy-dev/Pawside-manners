export const dietCategories = [
  { id: 'gi', label: 'Gastrointestinal', icon: '🫁' },
  { id: 'renal', label: 'Kidney / Renal', icon: '🫘' },
  { id: 'hepatic', label: 'Liver / Hepatic', icon: '🟤' },
  { id: 'cardiac', label: 'Cardiac / Heart', icon: '🫀' },
  { id: 'urinary', label: 'Urinary', icon: '💧' },
  { id: 'weight', label: 'Weight management', icon: '⚖️' },
  { id: 'allergy', label: 'Allergy / Dermatology', icon: '🐾' },
  { id: 'joint', label: 'Joint / Mobility', icon: '🦴' },
  { id: 'dental', label: 'Dental', icon: '🦷' },
  { id: 'diabetes', label: 'Diabetes', icon: '💉' },
  { id: 'neuro', label: 'Neurology / Cognitive', icon: '🧠' },
  { id: 'recovery', label: 'Recovery / Convalescence', icon: '🏥' },
];

export const diets = {

  // ── GASTROINTESTINAL ──
  gi: {
    dogs: [
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal',
        forms: ['dry', 'canned'],
        use: 'Acute and chronic vomiting and/or diarrhea (no fat intolerance). General GI disease, IBD, EPI (alongside enzyme supplementation). Also used for inappetence/anorexia in hospital.',
      },
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal Moderate Calorie',
        forms: ['dry', 'canned'],
        use: 'As above (Gastrointestinal) but for dogs prone to weight gain or those needing lower calorie intake.',
      },
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal High Fiber',
        forms: ['dry', 'canned'],
        use: 'Diarrhea with large bowel signs, constipation, diabetes (fibre management).',
      },
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal Low Fat',
        forms: ['dry', 'canned'],
        use: 'Pancreatitis, fat intolerance, hyperlipidemia, lymphangiectasia. Key choice when fat restriction is required.',
      },
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal Low Fat + Hydrolyzed Protein',
        forms: ['dry'],
        use: 'Fat intolerance with concurrent food allergies.',
      },
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal Puppy',
        forms: ['dry', 'canned'],
        use: 'GI disease in puppies.',
      },
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal Low Fat Liquid',
        forms: ['liquid'],
        use: 'Fat intolerance; feeding tube support.',
      },
      {
        brand: 'Purina',
        name: 'EN Gastroenteric',
        forms: ['dry', 'canned'],
        use: 'Acute and chronic GI disease, IBD, EPI, gastritis/vomiting, diarrhea (small bowel), hepatic encephalopathy support, hyperlipidemia (low fat version), lymphangiectasia.',
      },
      {
        brand: 'Purina',
        name: 'EN Gastroenteric Naturals',
        forms: ['dry', 'canned'],
        use: 'As EN Gastroenteric — natural ingredient formulation.',
      },
      {
        brand: 'Purina',
        name: 'EN Gastroenteric Low Fat',
        forms: ['dry', 'canned'],
        use: 'Pancreatitis, fat intolerance, hyperlipidemia, lymphangiectasia.',
      },
      {
        brand: 'Purina',
        name: 'EN Gastroenteric Fiber Balance',
        forms: ['dry', 'canned'],
        use: 'Large bowel diarrhea/colitis, constipation, diabetes mellitus (fibre support).',
      },
    ],
    cats: [
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal',
        forms: ['dry', 'canned'],
        use: 'Acute and chronic vomiting/diarrhea, IBD, EPI, gastritis.',
      },
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal Moderate Calorie',
        forms: ['dry', 'canned'],
        use: 'As Gastrointestinal but for cats prone to weight gain.',
      },
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal Fiber Response',
        forms: ['dry', 'canned'],
        use: 'Large bowel diarrhea, constipation, megacolon/obstipation.',
      },
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal Kitten',
        forms: ['dry', 'canned'],
        use: 'GI disease in kittens.',
      },
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal Low Fat + Hydrolyzed Protein',
        forms: ['dry'],
        use: 'Fat intolerance with concurrent food allergies.',
      },
      {
        brand: 'Purina',
        name: 'EN Gastroenteric',
        forms: ['dry', 'canned'],
        use: 'Acute and chronic GI disease, IBD, hepatic lipidosis, pancreatitis, diarrhea/enteritis.',
      },
      {
        brand: 'Purina',
        name: 'EN Gastroenteric Naturals',
        forms: ['dry', 'canned'],
        use: 'As EN Gastroenteric — natural ingredient formulation.',
      },
    ],
  },

  // ── RENAL ──
  renal: {
    dogs: [
      {
        brand: 'Royal Canin',
        name: 'Renal Support Early Consult',
        forms: ['dry', 'canned'],
        use: 'Early chronic kidney disease (CKD), IRIS Stage 1, no proteinuria. Also for healthy seniors.',
      },
      {
        brand: 'Royal Canin',
        name: 'Renal Support A / S / D / E',
        forms: ['dry', 'canned'],
        use: 'CKD with proteinuria and/or IRIS Stage 2–4. Multiple formulations (A=aromatic, S=savory, D=thin slices, E=loaf) to encourage eating in anorexic or picky patients.',
      },
      {
        brand: 'Royal Canin',
        name: 'Renal Support + Hydrolyzed Protein',
        forms: ['dry'],
        use: 'CKD (IRIS Stage 2–4) with concurrent food allergies.',
      },
      {
        brand: 'Royal Canin',
        name: 'Renal Support Liquid',
        forms: ['liquid'],
        use: 'CKD — feeding tube or oral syringe feeding.',
      },
      {
        brand: 'Purina',
        name: 'NF Kidney Function',
        forms: ['dry', 'canned'],
        use: 'Chronic kidney disease, renal failure. Reduces phosphorus and protein load on kidneys.',
      },
    ],
    cats: [
      {
        brand: 'Royal Canin',
        name: 'Renal Support Early Consult',
        forms: ['dry', 'canned'],
        use: 'Early CKD (IRIS Stage 1), no proteinuria. Also for healthy senior cats.',
      },
      {
        brand: 'Royal Canin',
        name: 'Renal Support A / S / P / D / E / T',
        forms: ['dry', 'canned'],
        use: 'CKD with proteinuria and/or IRIS Stage 2–4. Multiple palatability options (P=pâté, T=thin slices) to support cats with reduced appetite.',
      },
      {
        brand: 'Royal Canin',
        name: 'Renal Support + Hydrolyzed Protein',
        forms: ['dry'],
        use: 'CKD (IRIS Stage 2–4) with concurrent food allergies.',
      },
      {
        brand: 'Royal Canin',
        name: 'Renal Support Liquid',
        forms: ['liquid'],
        use: 'CKD — feeding tube or oral syringe feeding.',
      },
      {
        brand: 'Purina',
        name: 'NF Kidney Function',
        forms: ['dry', 'canned'],
        use: 'Chronic kidney disease, renal failure.',
      },
      {
        brand: 'Purina',
        name: 'NF Kidney Function Advanced Care',
        forms: ['dry', 'canned'],
        use: 'Advanced/later stage CKD.',
      },
    ],
  },

  // ── HEPATIC ──
  hepatic: {
    dogs: [
      {
        brand: 'Royal Canin',
        name: 'Hepatic',
        forms: ['dry', 'canned'],
        use: 'Liver disease, hepatic encephalopathy, copper storage disease (portosystemic shunts, chronic hepatitis).',
      },
      {
        brand: 'Royal Canin',
        name: 'Vegetarian',
        forms: ['dry'],
        use: 'Liver disease without hepatic encephalopathy. Copper storage disease where animal protein restriction is desired.',
      },
      {
        brand: 'Purina',
        name: 'HA Hydrolyzed Vegetarian',
        forms: ['dry'],
        use: 'Hepatic encephalopathy (plant-based protein reduces ammonia load). Also used for food allergies.',
      },
      {
        brand: 'Purina',
        name: 'EN Gastroenteric / EN Gastroenteric Naturals',
        forms: ['dry', 'canned'],
        use: 'Hepatic encephalopathy (supportive GI management).',
      },
    ],
    cats: [
      {
        brand: 'Royal Canin',
        name: 'Hepatic',
        forms: ['dry', 'canned'],
        use: 'Liver disease, hepatic lipidosis, portosystemic shunts.',
      },
      {
        brand: 'Purina',
        name: 'DM Dietetic Management',
        forms: ['dry', 'canned'],
        use: 'Hepatic lipidosis (high protein to prevent further fat mobilisation).',
      },
      {
        brand: 'Purina',
        name: 'EN Gastroenteric / EN Gastroenteric Naturals',
        forms: ['dry', 'canned'],
        use: 'Hepatic encephalopathy support.',
      },
    ],
  },

  // ── CARDIAC ──
  cardiac: {
    dogs: [
      {
        brand: 'Royal Canin',
        name: 'Mature Consult',
        forms: ['dry', 'canned'],
        use: 'Class 1–2 heart disease (early, asymptomatic). Also for healthy senior dogs.',
      },
      {
        brand: 'Purina',
        name: 'CC CardioCare',
        forms: ['dry', 'canned'],
        use: 'Mitral valve disease and other cardiomyopathies. First therapeutic diet targeting metabolomic changes in dogs with myxomatous mitral valve disease. Also for cardiovascular disease generally and conditions benefitting from moderate sodium restriction.',
      },
    ],
    cats: [
      {
        brand: 'Royal Canin',
        name: 'Renal Support Early Consult',
        forms: ['dry', 'canned'],
        use: 'Cardiac disease is often paired with renal support in cats. No dedicated cardiac diet in the RC feline range — use renal early consult for concurrent hypertension/CKD.',
      },
    ],
  },

  // ── URINARY ──
  urinary: {
    dogs: [
      {
        brand: 'Royal Canin',
        name: 'Urinary SO',
        forms: ['dry', 'canned'],
        use: 'Struvite and calcium oxalate urolithiasis and crystals. Lower urinary tract disease (LUTD). Struvite dissolution and prevention.',
      },
      {
        brand: 'Royal Canin',
        name: 'Urinary SO Moderate Calorie',
        forms: ['dry', 'canned'],
        use: 'As Urinary SO but for dogs prone to weight gain.',
      },
      {
        brand: 'Royal Canin',
        name: 'Urinary SO Small Dog',
        forms: ['dry'],
        use: 'As Urinary SO — small breed formulation.',
      },
      {
        brand: 'Royal Canin',
        name: 'Urinary SO Aging 7+',
        forms: ['dry', 'canned'],
        use: 'Senior dogs with urinary issues (struvite/calcium oxalate).',
      },
      {
        brand: 'Royal Canin',
        name: 'Urinary UC Low Purine',
        forms: ['dry'],
        use: 'Urate, xanthine, and cystine urolithiasis. Dalmatians and other breeds prone to urate stones.',
      },
      {
        brand: 'Royal Canin',
        name: 'Urinary SO + Hydrolyzed Protein',
        forms: ['dry'],
        use: 'Struvite/calcium oxalate urolithiasis with concurrent food allergies.',
      },
      {
        brand: 'Royal Canin',
        name: 'Urinary SO + Satiety',
        forms: ['dry', 'canned'],
        use: 'Urinary disease with concurrent need for weight management.',
      },
      {
        brand: 'Purina',
        name: 'UR Urinary Ox/St',
        forms: ['dry', 'canned'],
        use: 'Struvite and calcium oxalate urolithiasis. Urolithiasis prevention.',
      },
      {
        brand: 'Purina',
        name: 'HA Hydrolyzed Vegetarian',
        forms: ['dry'],
        use: 'Urate urolithiasis (low purine plant-based protein reduces uric acid).',
      },
    ],
    cats: [
      {
        brand: 'Royal Canin',
        name: 'Urinary SO',
        forms: ['dry', 'canned'],
        use: 'Struvite and calcium oxalate urolithiasis and crystals. Feline lower urinary tract disease (FLUTD). Struvite dissolution.',
      },
      {
        brand: 'Royal Canin',
        name: 'Urinary SO Moderate Calorie',
        forms: ['dry', 'canned'],
        use: 'As Urinary SO but for cats prone to weight gain.',
      },
      {
        brand: 'Royal Canin',
        name: 'Urinary SO Aging 7+',
        forms: ['dry', 'canned'],
        use: 'Senior cats with urinary issues.',
      },
      {
        brand: 'Royal Canin',
        name: 'Urinary SO + Calm',
        forms: ['dry', 'canned'],
        use: 'FIC (idiopathic cystitis), anxiety-related FLUTD, multi-cat households where stress triggers urinary issues.',
      },
      {
        brand: 'Royal Canin',
        name: 'Urinary SO + Hydrolyzed Protein',
        forms: ['dry'],
        use: 'Struvite/calcium oxalate urolithiasis with concurrent food allergies.',
      },
      {
        brand: 'Royal Canin',
        name: 'Urinary SO + Satiety',
        forms: ['dry', 'canned'],
        use: 'Urinary disease with concurrent need for weight management.',
      },
      {
        brand: 'Purina',
        name: 'UR Urinary St/Ox',
        forms: ['dry', 'canned'],
        use: 'Struvite and calcium oxalate urolithiasis. Feline LUTS.',
      },
    ],
  },

  // ── WEIGHT ──
  weight: {
    dogs: [
      {
        brand: 'Royal Canin',
        name: 'Satiety Support Weight Management',
        forms: ['dry', 'canned'],
        use: 'Overweight/obesity, weight loss programs. High fibre to increase satiety. Also useful for diabetes and constipation.',
      },
      {
        brand: 'Royal Canin',
        name: 'Satiety Support Small Dog',
        forms: ['dry'],
        use: 'As Satiety Support — small breed formulation.',
      },
      {
        brand: 'Royal Canin',
        name: 'Advanced Mobility Support + Satiety',
        forms: ['dry'],
        use: 'Obesity with concurrent joint disease.',
      },
      {
        brand: 'Purina',
        name: 'OM Overweight Management',
        forms: ['dry', 'canned'],
        use: 'Obesity, weight management, diabetes mellitus, constipation support, osteoarthritis support.',
      },
      {
        brand: 'Purina',
        name: 'OM Overweight Management Metabolic Response + Joint Mobility',
        forms: ['dry'],
        use: 'Obesity with concurrent joint disease.',
      },
      {
        brand: 'Purina',
        name: 'OM Overweight Management Select Blend',
        forms: ['dry'],
        use: 'Obesity — alternative formulation for dogs who need variety.',
      },
    ],
    cats: [
      {
        brand: 'Royal Canin',
        name: 'Satiety Support Weight Management',
        forms: ['dry', 'canned'],
        use: 'Overweight/obesity, weight loss. Also for diabetes, constipation, hairballs.',
      },
      {
        brand: 'Royal Canin',
        name: 'Satiety + Hydrolyzed Protein',
        forms: ['dry'],
        use: 'Obesity with concurrent food allergies.',
      },
      {
        brand: 'Purina',
        name: 'OM Overweight Management',
        forms: ['dry', 'canned'],
        use: 'Obesity, weight management, diabetes mellitus, constipation, hairballs.',
      },
    ],
  },

  // ── ALLERGY / DERMATOLOGY ──
  allergy: {
    dogs: [
      {
        brand: 'Royal Canin',
        name: 'Anallergenic',
        forms: ['dry'],
        use: 'Dietary elimination trial (most restricted — single hydrolyzed feather protein source). Food allergy or chronic enteropathy where other hydrolyzed diets have failed.',
      },
      {
        brand: 'Royal Canin',
        name: 'Hydrolyzed Protein HP',
        forms: ['dry', 'canned'],
        use: 'Dietary elimination trial, food allergic dermatitis, food allergic gastroenteritis, chronic enteropathy.',
      },
      {
        brand: 'Royal Canin',
        name: 'Hydrolyzed Protein Moderate Calorie',
        forms: ['dry'],
        use: 'As Hydrolyzed Protein HP but for dogs prone to weight gain.',
      },
      {
        brand: 'Royal Canin',
        name: 'Hydrolyzed Protein Small Dog',
        forms: ['dry'],
        use: 'As Hydrolyzed Protein HP — small breed formulation.',
      },
      {
        brand: 'Royal Canin',
        name: 'Hydrolyzed Protein Puppy',
        forms: ['dry'],
        use: 'Dietary elimination trial in puppies.',
      },
      {
        brand: 'Royal Canin',
        name: 'Selected Protein PD (Potato & Duck)',
        forms: ['dry', 'canned'],
        use: 'Food allergy maintenance after elimination trial. Novel protein diet.',
      },
      {
        brand: 'Royal Canin',
        name: 'Selected Protein RC (Rice & Catfish)',
        forms: ['dry'],
        use: 'Food allergy maintenance. Novel protein diet.',
      },
      {
        brand: 'Royal Canin',
        name: 'Skintopic',
        forms: ['dry', 'canned'],
        use: 'Atopic dermatitis (environmental allergy). Supports the skin barrier.',
      },
      {
        brand: 'Purina',
        name: 'HA Hydrolyzed Vegetarian / Hydrolyzed Chicken / Hydrolyzed Salmon',
        forms: ['dry'],
        use: 'Dietary elimination trial, food allergic dermatitis, food allergic gastroenteritis, atopic dermatitis support.',
      },
      {
        brand: 'Purina',
        name: 'DRM Dermatologic Management Naturals',
        forms: ['dry'],
        use: 'Atopic dermatitis, food allergic dermatitis, skin and coat support.',
      },
    ],
    cats: [
      {
        brand: 'Royal Canin',
        name: 'Anallergenic',
        forms: ['dry'],
        use: 'Dietary elimination trial (most restricted). Food allergy or chronic enteropathy where other hydrolyzed diets have failed.',
      },
      {
        brand: 'Royal Canin',
        name: 'Hydrolyzed Protein HP',
        forms: ['dry'],
        use: 'Dietary elimination trial, food allergic dermatitis, food allergic gastroenteritis.',
      },
      {
        brand: 'Royal Canin',
        name: 'Selected Protein PD (Pea & Duck)',
        forms: ['dry', 'canned'],
        use: 'Food allergy maintenance after elimination trial.',
      },
      {
        brand: 'Royal Canin',
        name: 'Selected Protein PR (Pea & Rabbit)',
        forms: ['dry', 'canned'],
        use: 'Food allergy maintenance after elimination trial.',
      },
      {
        brand: 'Purina',
        name: 'HA Hydrolyzed',
        forms: ['dry'],
        use: 'Dietary elimination trial, food allergic dermatitis, food allergic gastroenteritis.',
      },
    ],
  },

  // ── JOINT ──
  joint: {
    dogs: [
      {
        brand: 'Royal Canin',
        name: 'Advanced Mobility Support',
        forms: ['dry', 'canned'],
        use: 'Osteoarthritis and joint disease. EPA/DHA omega-3 fatty acids to help manage inflammation.',
      },
      {
        brand: 'Purina',
        name: 'JM Joint Mobility',
        forms: ['dry', 'canned'],
        use: 'Osteoarthritis, joint disease, degenerative joint disease.',
      },
    ],
    cats: [
      {
        brand: 'Royal Canin',
        name: 'Mobility Support',
        forms: ['dry'],
        use: 'Osteoarthritis and joint disease in cats.',
      },
    ],
  },

  // ── DENTAL ──
  dental: {
    dogs: [
      {
        brand: 'Royal Canin',
        name: 'Dental',
        forms: ['dry'],
        use: 'Tartar and plaque accumulation. Mechanical action of kibble shape and size helps reduce tartar. Maintenance for healthy adult dogs with dental concerns.',
      },
      {
        brand: 'Purina',
        name: 'DH Dental Health',
        forms: ['dry'],
        use: 'Dental disease, tartar accumulation. Adult dogs.',
      },
    ],
    cats: [
      {
        brand: 'Royal Canin',
        name: 'Dental',
        forms: ['dry'],
        use: 'Tartar and plaque accumulation. Adult cats.',
      },
      {
        brand: 'Purina',
        name: 'DH Dental Health',
        forms: ['dry'],
        use: 'Dental disease, tartar accumulation. Adult cats.',
      },
    ],
  },

  // ── DIABETES ──
  diabetes: {
    dogs: [
      {
        brand: 'Royal Canin',
        name: 'Glycobalance',
        forms: ['dry', 'canned'],
        use: 'Diabetes mellitus. High fibre, low glycaemic carbohydrates to help regulate blood glucose.',
      },
      {
        brand: 'Purina',
        name: 'EN Gastroenteric Fiber Balance',
        forms: ['dry', 'canned'],
        use: 'Diabetes mellitus (high fibre to slow glucose absorption).',
      },
      {
        brand: 'Purina',
        name: 'OM Overweight Management',
        forms: ['dry', 'canned'],
        use: 'Diabetes with concurrent obesity.',
      },
    ],
    cats: [
      {
        brand: 'Royal Canin',
        name: 'Glycoadvanced',
        forms: ['dry', 'canned'],
        use: 'Diabetes mellitus in cats.',
      },
      {
        brand: 'Royal Canin',
        name: 'Gastrointestinal Fiber Response',
        forms: ['dry', 'canned'],
        use: 'Diabetes with concurrent GI issues.',
      },
      {
        brand: 'Purina',
        name: 'DM Dietetic Management',
        forms: ['dry', 'canned'],
        use: 'Diabetes mellitus. High protein, low carbohydrate to help manage blood glucose.',
      },
    ],
  },

  // ── NEUROLOGY / COGNITIVE ──
  neuro: {
    dogs: [
      {
        brand: 'Purina',
        name: 'NC NeuroCare',
        forms: ['dry'],
        use: 'Cognitive dysfunction syndrome (CDS). Idiopathic epilepsy as an adjunct to veterinary therapy.',
      },
    ],
    cats: [],
  },

  // ── RECOVERY ──
  recovery: {
    dogs: [
      {
        brand: 'Royal Canin',
        name: 'Recovery',
        forms: ['canned', 'liquid'],
        use: 'Convalescence, anorexia/inappetence in hospital, critical care nutritional support. Highly palatable, energy-dense. Fed in small frequent meals (4–6 per day).',
      },
    ],
    cats: [
      {
        brand: 'Royal Canin',
        name: 'Recovery',
        forms: ['canned', 'liquid'],
        use: 'Convalescence, anorexia/inappetence (including hepatic lipidosis recovery), critical care. Highly palatable, energy-dense. Fed in small frequent meals.',
      },
    ],
  },

};
