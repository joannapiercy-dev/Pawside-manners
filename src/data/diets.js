export const dietCategories = [
  { id: 'gi', label: 'Gastrointestinal', icon: '💩' },
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
  gi: {
    dogs: [
      {
        brand: "Royal Canin",
        name: "Gastrointestinal",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Acute and chronic vomiting and/or diarrhea (not pancreatitis or hyperlipidemia). General GI disease, IBD. Also used for inappetence/anorexia in hospital."
      },
      {
        brand: "Royal Canin",
        name: "Gastrointestinal Moderate Calorie",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "As above (Gastrointestinal) but for dogs prone to weight gain or those needing lower calorie intake."
      },
      {
        brand: "Royal Canin",
        name: "Gastrointestinal High Fiber",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Diarrhea with large bowel signs, constipation, stress diarrhea"
      },
      {
        brand: "Royal Canin",
        name: "Gastrointestinal Low Fat",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Pancreatitis, hyperlipidemia, lymphangiectasia, IBD, EPI, PLE, acute and chronic vomiting."
      },
      {
        brand: "Royal Canin",
        name: "Gastrointestinal Low Fat",
        forms: ["canned"],
        flavour: "Pork",
        use: "Pancreatitis, lymphangiectasia, IBD, EPI, PLE, acute and chronic vomiting."
      },
      {
        brand: "Royal Canin",
        name: "Gastrointestinal Low Fat + Hydrolyzed Protein",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        use: "Fat intolerance with food allergies."
      },
      {
        brand: "Royal Canin",
        name: "Gastrointestinal Puppy",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "GI disease in puppies (not pancreatitis or hyperlipidemia)."
      },
      {
        brand: "Royal Canin",
        name: "Gastrointestinal Low Fat Liquid",
        forms: ["liquid"],
        flavour: "Soy",
        use: "Fat intolerance; feeding tube support."
      },
      {
        brand: "Purina",
        name: "EN Gastroenteric",
        forms: ["dry", "canned"],
        flavour: "Turkey",
        use: "Acute and chronic GI disease, IBD, EPI, gastritis/vomiting, diarrhea (small bowel), hepatic encephalopathy support, hyperlipidemia (low fat version), lymphangiectasia."
      },
      {
        brand: "Purina",
        name: "EN Gastroenteric Naturals",
        forms: ["dry", "canned"],
        flavour: "Turkey",
        use: "As EN Gastroenteric — natural ingredient formulation."
      },
      {
        brand: "Purina",
        name: "EN Gastroenteric Low Fat",
        forms: ["dry", "canned"],
        flavour: "Turkey",
        use: "Pancreatitis, fat intolerance, hyperlipidemia, lymphangiectasia."
      },
      {
        brand: "Purina",
        name: "EN Gastroenteric Fiber Balance",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Large bowel diarrhea/colitis, constipation, diabetes mellitus (fibre support)."
      },
      {
        brand: "Hills",
        name: "Gastrointestinal Biome",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Acute and chronic diarrhea. Clinically shown to resolve canine diarrhea in 24 hours and reduce risk of recurrence. Uses ActivBiome+ technology to activate the gut microbiome. Good for complex GI issues including colitis and microbiome disruption."
      },
      {
        brand: "Hills",
        name: "i/d",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Acute and chronic vomiting and diarrhea, gastroenteritis, IBD, EPI, esophageal disorders, surgery recovery (pre and post-op). Highly digestible with ActivBiome+ prebiotic fibers. The go-to general GI diet for dogs."
      },
      {
        brand: "Hills",
        name: "i/d",
        forms: ["canned"],
        flavour: "Turkey / chicken",
        use: "Acute and chronic vomiting and diarrhea, gastroenteritis, IBD, EPI, esophageal disorders, surgery recovery (pre and post-op). Highly digestible with ActivBiome+ prebiotic fibers. The go-to general GI diet for dogs."
      },
      {
        brand: "Hills",
        name: "i/d Puppy",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "GI disease in puppies — acute and chronic diarrhea, vomiting, surgery recovery, EPI in puppies. Formulated for growing puppies."
      },
      {
        brand: "Hills",
        name: "i/d Low Fat",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Pancreatitis, fat intolerance, hyperlipidemia, lymphangiectasia, IBD where low fat is required. Use when fat restriction is specifically needed."
      },
    ],
    cats: [
      {
        brand: "Royal Canin",
        name: "Gastrointestinal",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Acute and chronic vomiting/diarrhea, IBD, gastroenteritis, colitis, pancreatitis, convalescence"
      },
      {
        brand: "Royal Canin",
        name: "Gastrointestinal Moderate Calorie",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "As Gastrointestinal but for cats prone to weight gain."
      },
      {
        brand: "Royal Canin",
        name: "Gastrointestinal Fiber Response",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Large bowel diarrhea, constipation, megacolon/obstipation."
      },
      {
        brand: "Royal Canin",
        name: "Gastrointestinal Kitten",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "GI disease in kittens."
      },
      {
        brand: "Royal Canin",
        name: "Gastrointestinal Low Fat + Hydrolyzed Protein",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        use: "Fat intolerance with concurrent food allergies."
      },
      {
        brand: "Purina",
        name: "EN Gastroenteric",
        forms: ["dry", "canned"],
        flavour: "Dry: soy; Wet: Salmon, turkey, chicken",
        use: "Acute and chronic GI disease, IBD, hepatic lipidosis, pancreatitis, diarrhea/enteritis."
      },
      {
        brand: "Purina",
        name: "EN Gastroenteric Naturals",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "As EN Gastroenteric — natural ingredient formulation."
      },
      {
        brand: "Hills",
        name: "Gastrointestinal Biome Stress",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Acute and chronic GI disease in cats, including stress-related GI upset, colitis, IBD, and microbiome disruption."
      },
      {
        brand: "Hills",
        name: "i/d",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Acute and chronic vomiting and diarrhea, IBD, EPI, gastroenteritis, hepatic lipidosis support. Highly digestible."
      },
      {
        brand: "Hills",
        name: "i/d Kitten",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "GI disease in kittens — diarrhea, vomiting, and digestive recovery."
      },
    ],
  },
  renal: {
    dogs: [
      {
        brand: "Royal Canin",
        name: "Renal Support Early Consult",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Early chronic kidney disease (CKD), IRIS Stage 1, no proteinuria. Also for healthy seniors."
      },
      {
        brand: "Royal Canin",
        name: "Renal Support A / S / D / E",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "CKD with proteinuria and/or IRIS Stage 2–4. Multiple formulations (A=aromatic, S=savory, D=thin slices, E=loaf) to encourage eating in anorexic or picky patients."
      },
      {
        brand: "Royal Canin",
        name: "Renal Support + Hydrolyzed Protein",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        use: "CKD (IRIS Stage 2–4) with concurrent food allergies."
      },
      {
        brand: "Royal Canin",
        name: "Renal Support Liquid",
        forms: ["liquid"],
        flavour: "Milk protein",
        use: "CKD — feeding tube or oral syringe feeding."
      },
      {
        brand: "Purina",
        name: "NF Kidney Function",
        forms: ["dry", "canned"],
        flavour: "Chicken / egg",
        use: "Chronic kidney disease, liver disease with encephalopathy, moderate sodium reduction"
      },
      {
        brand: "Hills",
        name: "k/d",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Chronic kidney disease (CKD) IRIS stages 2-4, or all stages if proteinuric. Also used for uremic encephalopathy."
      },
    ],
    cats: [
      {
        brand: "Royal Canin",
        name: "Renal Support Early Consult",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Early CKD (IRIS Stage 1), no proteinuria. Also for healthy senior cats."
      },
      {
        brand: "Royal Canin",
        name: "Renal Support A / S / P / D / E / T",
        forms: ["dry", "canned"],
        flavour: "Chicken / tuna / fish",
        use: "CKD with proteinuria and/or IRIS Stage 2–4. Multiple palatability options to support cats with reduced appetite."
      },
      {
        brand: "Royal Canin",
        name: "Renal Support + Hydrolyzed Protein",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        use: "CKD (IRIS Stage 2–4) with concurrent food allergies."
      },
      {
        brand: "Royal Canin",
        name: "Renal Support Liquid",
        forms: ["liquid"],
        flavour: "Milk and soy protein",
        use: "CKD — feeding tube or oral syringe feeding."
      },
      {
        brand: "Purina",
        name: "NF Kidney Function Early Care",
        forms: ["dry", "canned"],
        flavour: "Tuna / salmon",
        use: "Chronic kidney disease, IRIS stages 1-2."
      },
      {
        brand: "Purina",
        name: "NF Kidney Function Advanced Care",
        forms: ["dry", "canned"],
        flavour: "Dry: Tuna; Wet: Chicken",
        use: "Chronic kidney disease, IRIS stages 3-4."
      },
      {
        brand: "Hills",
        name: "k/d Early Support",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Early chronic kidney disease — Stage 1 CKD or early Stage 2. Lower phosphorus restriction than k/d, palatable for cats who resist dietary change."
      },
      {
        brand: "Hills",
        name: "k/d",
        forms: ["dry", "canned"],
        flavour: "Chicken / tuna",
        use: "Chronic kidney disease (CKD) Stage 2–4. Reduces phosphorus and protein. Multiple formulations available to encourage eating in anorexic cats."
      },
    ],
  },
  hepatic: {
    dogs: [
      {
        brand: "Royal Canin",
        name: "Hepatic",
        forms: ["dry"],
        flavour: "Soy",
        use: "Liver disease, hepatic encephalopathy, copper storage disease (portosystemic shunts, chronic hepatitis)."
      },
      {
        brand: "Royal Canin",
        name: "Hepatic",
        forms: ["canned"],
        flavour: "Chicken",
        use: "Liver disease, hepatic encephalopathy, copper storage disease (portosystemic shunts, chronic hepatitis)."
      },
      {
        brand: "Royal Canin",
        name: "Vegetarian",
        forms: ["dry"],
        flavour: "Vegetable",
        use: "Liver disease without hepatic encephalopathy. Copper storage disease where animal protein restriction is desired."
      },
      {
        brand: "Purina",
        name: "HA Hydrolyzed Vegetarian",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        use: "Hepatic encephalopathy (plant-based protein reduces ammonia load). Also used for food allergies."
      },
      {
        brand: "Purina",
        name: "EN Gastroenteric / EN Gastroenteric Naturals",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Hepatic encephalopathy (supportive GI management)."
      },
      {
        brand: "Hills",
        name: "l/d",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Liver disease, hepatic insufficiency, portosystemic shunts, copper storage disease. Reduced copper content. Moderate protein from high-quality sources."
      },
      {
        brand: "Hills",
        name: "Multi-Organ",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Multi-organ disease — dogs with concurrent kidney, liver, heart, urinary disease, and/or pancreatitis risk. A single diet to manage multiple concurrent conditions."
      },
    ],
    cats: [
      {
        brand: "Royal Canin",
        name: "Hepatic",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Liver disease, hepatic encephalopathy, copper metabolism disorders"
      },
      {
        brand: "Purina",
        name: "DM Dietetic Management",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Hepatic lipidosis (high protein to prevent further fat mobilisation)."
      },
      {
        brand: "Purina",
        name: "EN Gastroenteric / EN Gastroenteric Naturals",
        forms: ["dry", "canned"],
        flavour: "Chicken, salmon, turkey",
        use: "Hepatic encephalopathy support."
      },
      {
        brand: "Hills",
        name: "i/d",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Hepatic lipidosis (non-encephalopathic). High palatability and digestibility supports cats that are reluctant to eat."
      },
    ],
  },
  cardiac: {
    dogs: [
      {
        brand: "Royal Canin",
        name: "Mature Consult",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Class 1–2 heart disease (early, asymptomatic). Also for healthy senior dogs."
      },
      {
        brand: "Purina",
        name: "CC CardioCare",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Mitral valve disease and other cardiomyopathies. First therapeutic diet targeting metabolomic changes in dogs with myxomatous mitral valve disease. Also for cardiovascular disease generally and conditions benefitting from moderate sodium restriction."
      },
    ],
    cats: [
      {
        brand: "Royal Canin",
        name: "Renal Support Early Consult",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Cardiac disease is often paired with renal support in cats. No dedicated cardiac diet in the RC feline range — use renal early consult for concurrent hypertension/CKD."
      },
    ],
  },
  urinary: {
    dogs: [
      {
        brand: "Royal Canin",
        name: "Urinary SO",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Struvite and calcium oxalate urolithiasis and crystals. Lower urinary tract disease (LUTD). Struvite dissolution and prevention."
      },
      {
        brand: "Royal Canin",
        name: "Urinary SO Moderate Calorie",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "As Urinary SO but for dogs prone to weight gain."
      },
      {
        brand: "Royal Canin",
        name: "Urinary SO Small Dog",
        forms: ["dry"],
        flavour: "Chicken",
        use: "As Urinary SO — small breed formulation."
      },
      {
        brand: "Royal Canin",
        name: "Urinary SO Aging 7+",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Senior dogs with urinary issues (struvite/calcium oxalate)."
      },
      {
        brand: "Royal Canin",
        name: "Urinary UC Low Purine",
        forms: ["dry"],
        flavour: "Vegetable, egg",
        use: "Urate, xanthine, and cystine urolithiasis. Dalmatians and other breeds prone to urate stones."
      },
      {
        brand: "Royal Canin",
        name: "Urinary SO + Hydrolyzed Protein",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        use: "Struvite/calcium oxalate urolithiasis with concurrent food allergies."
      },
      {
        brand: "Royal Canin",
        name: "Urinary SO + Satiety",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Urinary disease with concurrent need for weight management."
      },
      {
        brand: "Purina",
        name: "UR Urinary Ox/St",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Struvite and calcium oxalate urolithiasis. Urolithiasis prevention."
      },
      {
        brand: "Purina",
        name: "HA Hydrolyzed Vegetarian",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        use: "Urate urolithiasis (low purine plant-based protein reduces uric acid)."
      },
      {
        brand: "Hills",
        name: "c/d Multicare",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Struvite and calcium oxalate urolithiasis and crystals. Dissolves struvite stones and reduces recurrence of both struvite and calcium oxalate. The most commonly used urinary diet for dogs."
      },
      {
        brand: "Hills",
        name: "c/d Multicare + Metabolic",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Struvite/calcium oxalate urolithiasis with concurrent obesity or weight management needs."
      },
      {
        brand: "Hills",
        name: "c/d Low Fat",
        forms: ["dry", "canned"],
        flavour: "Chicken / Turkey",
        use: "Struvite/calcium oxalate urolithiasis with concurrent pancreatitis risk or fat intolerance."
      },
      {
        brand: "Hills",
        name: "u/d",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Urate, cystine, and xanthine urolithiasis. Low protein and low purine diet. Used for Dalmatians and breeds prone to urate stones."
      },
    ],
    cats: [
      {
        brand: "Royal Canin",
        name: "Urinary SO",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Struvite and calcium oxalate urolithiasis and crystals. Feline lower urinary tract disease (FLUTD). Struvite dissolution."
      },
      {
        brand: "Royal Canin",
        name: "Urinary SO Moderate Calorie",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "As Urinary SO but for cats prone to weight gain."
      },
      {
        brand: "Royal Canin",
        name: "Urinary SO Aging 7+",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Senior cats with urinary issues."
      },
      {
        brand: "Royal Canin",
        name: "Urinary SO + Calm",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "FIC (idiopathic cystitis), anxiety-related FLUTD, multi-cat households where stress triggers urinary issues."
      },
      {
        brand: "Royal Canin",
        name: "Urinary SO + Hydrolyzed Protein",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        use: "Struvite/calcium oxalate urolithiasis with concurrent food allergies."
      },
      {
        brand: "Royal Canin",
        name: "Urinary SO + Satiety",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Urinary disease with concurrent need for weight management."
      },
      {
        brand: "Purina",
        name: "UR Urinary St/Ox",
        forms: ["dry", "canned"],
        flavour: "Dry: Chicken; Wet:  Chicken, tuna, salmon",
        use: "Struvite and calcium oxalate urolithiasis. Feline LUTS."
      },
      {
        brand: "Hills",
        name: "c/d Multicare",
        forms: ["dry", "canned"],
        flavour: "Chicken / tuna",
        use: "Struvite and calcium oxalate urolithiasis. Also helps manage idiopathic cystitis (FIC). Reduces recurrence of the most common urinary conditions in cats."
      },
      {
        brand: "Hills",
        name: "c/d Multicare + Metabolic",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Urinary disease with concurrent obesity."
      },
      {
        brand: "Hills",
        name: "c/d Stress",
        forms: ["dry", "canned"],
        flavour: "Chicken / tuna",
        use: "Feline idiopathic cystitis (FIC) where stress is a contributing factor. Contains tryptophan and hydrolyzed casein to help manage anxiety-related FLUTD."
      },
      {
        brand: "Hills",
        name: "c/d Multicare Stress + Metabolic",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Urinary disease (including stress-related FIC) with concurrent obesity."
      },
    ],
  },
  weight: {
    dogs: [
      {
        brand: "Royal Canin",
        name: "Satiety Support Weight Management",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Overweight/obesity, weight loss programs. High fibre to increase satiety. Also useful for diabetes and constipation."
      },
      {
        brand: "Royal Canin",
        name: "Satiety Support Small Dog",
        forms: ["dry"],
        flavour: "Chicken",
        use: "As Satiety Support — small breed formulation."
      },
      {
        brand: "Royal Canin",
        name: "Advanced Mobility Support + Satiety",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Obesity with concurrent joint disease."
      },
      {
        brand: "Purina",
        name: "OM Overweight Management",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Obesity, weight management, diabetes mellitus, constipation support, osteoarthritis support."
      },
      {
        brand: "Purina",
        name: "OM Overweight Management Metabolic Response + Joint Mobility",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Obesity with concurrent joint disease."
      },
      {
        brand: "Purina",
        name: "OM Overweight Management Select Blend",
        forms: ["dry"],
        flavour: "Corn protein",
        use: "Obesity — alternative formulation for dogs who need variety."
      },
      {
        brand: "Hills",
        name: "Metabolic",
        forms: ["dry", "canned"],
        flavour: "Chicken / lamb / beef",
        use: "Obesity and weight management. Clinically proven to reduce body fat. Uses a proprietary blend to help dogs feel full. Also suitable for diabetes management."
      },
      {
        brand: "Hills",
        name: "Metabolic + j/d",
        forms: ["dry", "canned"],
        flavour: "Chicken / Tuna",
        use: "Obesity with concurrent joint disease/osteoarthritis."
      },
      {
        brand: "Hills",
        name: "w/d Multi-Benefit",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Obesity, diabetes mellitus, large bowel diarrhea/colitis, constipation, hyperlipidemia. High fibre multi-benefit diet. Good when multiple conditions benefit from fibre management."
      },
    ],
    cats: [
      {
        brand: "Royal Canin",
        name: "Satiety Support Weight Management",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Overweight/obesity, weight loss. Also for diabetes, constipation, hairballs."
      },
      {
        brand: "Royal Canin",
        name: "Satiety + Hydrolyzed Protein",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        use: "Obesity with concurrent food allergies."
      },
      {
        brand: "Purina",
        name: "OM Overweight Management",
        forms: ["dry", "canned"],
        flavour: "Chicken, turkey, salmon",
        use: "Obesity, weight management, diabetes mellitus, constipation, hairballs."
      },
      {
        brand: "Hills",
        name: "Metabolic",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Obesity and weight management in cats. Clinically proven to reduce body fat. Also suitable for diabetes management."
      },
      {
        brand: "Hills",
        name: "w/d Multi-Benefit",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Obesity, diabetes, constipation, and large bowel diarrhea in cats. High fibre multi-benefit diet."
      },
    ],
  },
  allergy: {
    dogs: [
      {
        brand: "Royal Canin",
        name: "Anallergenic",
        forms: ["dry"],
        flavour: "Hydrolyzed feather",
        tag: "hydrolyzed",
        use: "Dietary elimination trial (most restricted — single hydrolyzed feather protein source). Food allergy or chronic enteropathy where other hydrolyzed diets have failed."
      },
      {
        brand: "Royal Canin",
        name: "Hydrolyzed Protein HP",
        forms: ["dry", "canned"],
        flavour: "Hydrolyzed soy",
        tag: "hydrolyzed",
        use: "Dietary elimination trial, food allergic dermatitis, food allergic gastroenteritis, chronic enteropathy."
      },
      {
        brand: "Royal Canin",
        name: "Hydrolyzed Protein Moderate Calorie",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        tag: "hydrolyzed",
        use: "As Hydrolyzed Protein HP but for dogs prone to weight gain."
      },
      {
        brand: "Royal Canin",
        name: "Hydrolyzed Protein Small Dog",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        tag: "hydrolyzed",
        use: "As Hydrolyzed Protein HP — small breed formulation."
      },
      {
        brand: "Royal Canin",
        name: "Hydrolyzed Protein Puppy",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        tag: "hydrolyzed",
        use: "Dietary elimination trial in puppies."
      },
      {
        brand: "Royal Canin",
        name: "Selected Protein PD (Potato & Duck)",
        forms: ["dry", "canned"],
        flavour: "Duck",
        tag: "novel",
        use: "Food allergy maintenance after elimination trial. Novel protein diet."
      },
      {
        brand: "Royal Canin",
        name: "Selected Protein RC (Rice & Catfish)",
        forms: ["dry"],
        flavour: "Catfish",
        tag: "novel",
        use: "Food allergy maintenance. Novel protein diet."
      },
      {
        brand: "Royal Canin",
        name: "Skintopic",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        tag: "other",
        use: "Atopic dermatitis (environmental allergy). Supports the skin barrier."
      },
      {
        brand: "Purina",
        name: "HA Hydrolyzed Vegetarian / Hydrolyzed Chicken / Hydrolyzed Salmon",
        forms: ["dry"],
        flavour: "Hydrolyzed soy / chicken / salmon",
        tag: "hydrolyzed",
        use: "Dietary elimination trial, food allergic dermatitis, food allergic gastroenteritis, atopic dermatitis support."
      },
      {
        brand: "Purina",
        name: "DRM Dermatologic Management Naturals",
        forms: ["dry"],
        flavour: "Trout",
        tag: "novel",
        use: "Atopic dermatitis, food allergic dermatitis, skin and coat support."
      },
      {
        brand: "Hills",
        name: "d/d (Venison & Rice, Duck & Rice, or Salmon & Rice)",
        forms: ["dry", "canned"],
        flavour: "Venison / duck / salmon",
        tag: "novel",
        use: "Dietary elimination trial and food allergy management. Single novel protein and single carbohydrate source. Available in Duck & Rice or Salmon & Rice. For food allergic dermatitis and food allergic GI disease."
      },
      {
        brand: "Hills",
        name: "Derm Complete",
        forms: ["dry"],
        flavour: "Egg",
        tag: "novel",
        use: "Atopic dermatitis and food allergies combined. Hydrolyzed protein with skin barrier support nutrients. For dogs with both environmental and food-triggered skin disease."
      },
      {
        brand: "Hills",
        name: "Derm Complete Puppy",
        forms: ["dry"],
        flavour: "Egg",
        tag: "novel",
        use: "Atopic dermatitis and food allergies in puppies."
      },
      {
        brand: "Hills",
        name: "z/d",
        forms: ["dry", "canned"],
        flavour: "Hydrolyzed chicken",
        tag: "hydrolyzed",
        use: "Dietary elimination trial with fully hydrolyzed protein — for cases where novel protein diets have failed or are insufficient. Extremely hypoallergenic. Also used for IBD where food sensitivity is suspected."
      },
      {
        brand: "Hills",
        name: "z/d Low Fat",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        tag: "hydrolyzed",
        use: "Fully hydrolyzed protein (as z/d) with low fat — for food allergies concurrent with pancreatitis or fat intolerance."
      },
    ],
    cats: [
      {
        brand: "Royal Canin",
        name: "Anallergenic",
        forms: ["dry"],
        flavour: "Hydrolyzed feather",
        tag: "hydrolyzed",
        use: "Dietary elimination trial (most restricted). Food allergy or chronic enteropathy where other hydrolyzed diets have failed."
      },
      {
        brand: "Royal Canin",
        name: "Hydrolyzed Protein HP",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        tag: "hydrolyzed",
        use: "Dietary elimination trial, food allergic dermatitis, food allergic gastroenteritis."
      },
      {
        brand: "Royal Canin",
        name: "Selected Protein PD (Pea & Duck)",
        forms: ["dry", "canned"],
        flavour: "Duck",
        tag: "novel",
        use: "Food allergy maintenance after elimination trial."
      },
      {
        brand: "Royal Canin",
        name: "Selected Protein PR (Pea & Rabbit)",
        forms: ["dry", "canned"],
        flavour: "Rabbit",
        tag: "novel",
        use: "Food allergy maintenance after elimination trial."
      },
      {
        brand: "Purina",
        name: "HA Hydrolyzed",
        forms: ["dry"],
        flavour: "Hydrolyzed soy",
        tag: "hydrolyzed",
        use: "Dietary elimination trial, food allergic dermatitis, food allergic gastroenteritis."
      },
      {
        brand: "Hills",
        name: "d/d (Duck & Rice)",
        forms: ["dry", "canned"],
        flavour: "Duck, venison",
        tag: "novel",
        use: "Dietary elimination trial and food allergy management. Single novel protein (Duck & Rice). For food allergic dermatitis and GI disease."
      },
      {
        brand: "Hills",
        name: "z/d",
        forms: ["dry", "canned"],
        flavour: "Hydrolyzed chicken",
        tag: "hydrolyzed",
        use: "Fully hydrolyzed protein elimination diet for cats. For cases where novel protein diets have failed. Also for IBD where food sensitivity is suspected."
      },
    ],
  },
  joint: {
    dogs: [
      {
        brand: "Royal Canin",
        name: "Advanced Mobility Support",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Osteoarthritis and joint disease. EPA/DHA omega-3 fatty acids to help manage inflammation."
      },
      {
        brand: "Purina",
        name: "JM Joint Mobility",
        forms: ["dry", "canned"],
        flavour: "Trout and Salmon",
        use: "Osteoarthritis, joint disease, degenerative joint disease."
      },
      {
        brand: "Hills",
        name: "j/d",
        forms: ["dry", "canned"],
        flavour: "Chicken, lamb",
        use: "Osteoarthritis and joint disease. High EPA omega-3 fatty acids to help manage joint inflammation. Clinically proven to improve mobility in as little as 21 days."
      },
    ],
    cats: [
      {
        brand: "Royal Canin",
        name: "Mobility Support",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Osteoarthritis and joint disease in cats."
      },
    ],
  },
  dental: {
    dogs: [
      {
        brand: "Royal Canin",
        name: "Dental",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Tartar and plaque accumulation. Mechanical action of kibble shape and size helps reduce tartar. Maintenance for healthy adult dogs with dental concerns."
      },
      {
        brand: "Purina",
        name: "DH Dental Health",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Dental disease, tartar accumulation. Adult dogs."
      },
      {
        brand: "Hills",
        name: "t/d",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Dental disease, plaque, tartar accumulation. Clinically proven to reduce plaque and tartar through mechanical action of a uniquely shaped, oversized kibble that does not crumble on contact."
      },
    ],
    cats: [
      {
        brand: "Royal Canin",
        name: "Dental",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Tartar and plaque accumulation. Adult cats."
      },
      {
        brand: "Purina",
        name: "DH Dental Health",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Dental disease, tartar accumulation. Adult cats."
      },
      {
        brand: "Hills",
        name: "t/d",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Dental disease, plaque, and tartar in cats. Same mechanical cleaning principle as canine t/d."
      },
    ],
  },
  diabetes: {
    dogs: [
      {
        brand: "Royal Canin",
        name: "Glycobalance",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Diabetes mellitus. High fibre, low glycaemic carbohydrates to help regulate blood glucose."
      },
      {
        brand: "Purina",
        name: "EN Gastroenteric Fiber Balance",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Diabetes mellitus (high fibre to slow glucose absorption)."
      },
      {
        brand: "Purina",
        name: "OM Overweight Management",
        forms: ["dry", "canned"],
        flavour: "Chicken, corn protein",
        use: "Diabetes with concurrent obesity."
      },
      {
        brand: "Hills",
        name: "w/d Multi-Benefit",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Diabetes mellitus — high fibre slows glucose absorption. Also manages concurrent obesity, colitis, and constipation."
      },
    ],
    cats: [
      {
        brand: "Royal Canin",
        name: "Glycoadvanced",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Diabetes mellitus in cats."
      },
      {
        brand: "Royal Canin",
        name: "Gastrointestinal Fiber Response",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Diabetes with concurrent GI issues."
      },
      {
        brand: "Purina",
        name: "DM Dietetic Management",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Diabetes mellitus. High protein, low carbohydrate to help manage blood glucose."
      },
      {
        brand: "Hills",
        name: "m/d",
        forms: ["dry", "canned"],
        flavour: "Chicken, liver",
        use: "Diabetes mellitus in cats. High protein, low carbohydrate formulation to manage blood glucose levels. Clinically tested to help manage glucose levels and promote healthy body weight."
      },
    ],
  },
  neuro: {
    dogs: [
      {
        brand: "Purina",
        name: "NC NeuroCare",
        forms: ["dry"],
        flavour: "Chicken",
        use: "Cognitive dysfunction syndrome (CDS). Idiopathic epilepsy as an adjunct to veterinary therapy."
      },
    ],
    cats: [
      {
        brand: "Hills",
        name: "y/d",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Hyperthyroidism in cats. Clinically proven to decrease T4 hormone levels through iodine restriction. An alternative or adjunct to medication for managing feline hyperthyroidism. Requires strict dietary compliance — no other food sources."
      },
    ],
  },
  recovery: {
    dogs: [
      {
        brand: "Royal Canin",
        name: "Recovery",
        forms: ["canned", "liquid"],
        flavour: "Chicken",
        use: "Anorexia/inappetence in hospital, critical care nutritional support. Highly palatable, energy-dense. Fed in small frequent meals (4–6 per day)."
      },
      {
        brand: "Hills",
        name: "a/d",
        forms: ["canned"],
        flavour: "Chicken",
        use: "Critical care, convalescence, anorexia/inappetence, recovery from illness or surgery. Highly palatable, energy-dense. Suitable for both dogs and cats. Can be syringe fed."
      },
      {
        brand: "Hills",
        name: "ONC Care",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Cancer patient nutritional support. High protein and fat to maintain lean body mass during cancer treatment. Anti-inflammatory omega-3 fatty acids."
      },
    ],
    cats: [
      {
        brand: "Royal Canin",
        name: "Recovery",
        forms: ["canned", "liquid"],
        flavour: "Chicken",
        use: "Anorexia/inappetence in hospital, critical care nutritional support. Highly palatable, energy-dense. Fed in small frequent meals (4–6 per day)."
      },
      {
        brand: "Hills",
        name: "a/d",
        forms: ["canned"],
        flavour: "Chicken",
        use: "Critical care, convalescence, anorexia/inappetence in cats. Suitable for both dogs and cats. Highly palatable, energy-dense, can be syringe fed."
      },
      {
        brand: "Hills",
        name: "ONC Care",
        forms: ["dry", "canned"],
        flavour: "Chicken",
        use: "Cancer patient nutritional support in cats. Maintains lean body mass during cancer treatment."
      },
    ],
  },
};
export const dietQuiz = [
  {
    q: "A dog presents with acute vomiting and diarrhoea. Which diet is the most appropriate first choice?",
    category: "Gastrointestinal",
    options: [
    "Hills i/d or Royal Canin Gastrointestinal",
    "Hills k/d",
    "Royal Canin Urinary SO",
    "Hills w/d"
    ],
    correct: 0,
    explanation: "Hills i/d and Royal Canin Gastrointestinal are the standard first-line GI diets for acute and chronic GI disease including vomiting and diarrhoea."
  },
  {
    q: "A dog has been diagnosed with pancreatitis and requires strict fat restriction. Which diet is most appropriate?",
    category: "Gastrointestinal",
    options: [
    "Royal Canin Gastrointestinal",
    "Hills i/d Low Fat or Royal Canin Gastrointestinal Low Fat",
    "Purina EN Gastroenteric Fiber Balance",
    "Royal Canin Gastrointestinal High Fiber"
    ],
    correct: 1,
    explanation: "Pancreatitis requires strict fat restriction. Hills i/d Low Fat and Royal Canin Gastrointestinal Low Fat are specifically formulated for this."
  },
  {
    q: "A client's pet has chronic constipation. Which diet would be most appropriate?",
    category: "Gastrointestinal",
    options: [
    "Hills i/d Low Fat",
    "Royal Canin Gastrointestinal High Fiber or Purina EN Gastroenteric Fiber Balance",
    "Royal Canin Gastrointestinal Moderate Calorie",
    "Hills Gastrointestinal Biome"
    ],
    correct: 1,
    explanation: "High fibre diets support gut motility and are indicated for constipation. RC Gastrointestinal High Fiber and Purina EN Fiber Balance are the key options."
  },
  {
    q: "A hospitalised patient is inappetent post-surgery and needs nutritional support. Which diet is most appropriate?",
    category: "Gastrointestinal",
    options: [
    "Hills i/d",
    "Royal Canin Gastrointestinal Low Fat Liquid or Hills a/d",
    "Royal Canin Recovery",
    "Both B and C are appropriate"
    ],
    correct: 3,
    explanation: "Royal Canin Recovery and Hills a/d are both designed for inappetent, post-surgical, or critically ill patients. Liquid options are available when solid food is not tolerated."
  },
  {
    q: "A cat has been diagnosed with Early (IRIS Stage 2) CKD. Which diet is most appropriate?",
    category: "Kidney / Renal",
    options: [
    "Hills k/d or Royal Canin Renal Support",
    "Royal Canin Urinary SO",
    "Hills i/d",
    "Purina NF Kidney Function Advanced Care"
    ],
    correct: 0,
    explanation: "Hills k/d and Royal Canin Renal Support are the standard choices for CKD management. Purina NF Advanced Care is reserved for later-stage disease. RC Urinary SO is for urinary conditions, not CKD."
  },
  {
    q: "A dog has early-stage kidney disease (IRIS Stage 1-2) with no clinical signs yet. Which diet is most appropriate?",
    category: "Kidney / Renal",
    options: [
    "Hills k/d",
    "Royal Canin Renal Support A/S/D/E",
    "Royal Canin Renal Support Early Consult or Hills k/d Early Support",
    "Purina NF Kidney Function Advanced Care"
    ],
    correct: 2,
    explanation: "Early consult/early support diets are designed for IRIS Stage 1-2, offering milder phosphorus restriction to encourage earlier dietary transition."
  },
  {
    q: "A dog has been diagnosed with hepatic encephalopathy. Which diet is most appropriate?",
    category: "Liver / Hepatic",
    options: [
    "Hills l/d or Royal Canin Hepatic",
    "Hills k/d",
    "Purina EN Gastroenteric",
    "Royal Canin Gastrointestinal High Fiber"
    ],
    correct: 0,
    explanation: "Hills l/d and Royal Canin Hepatic are specifically formulated for liver disease including hepatic encephalopathy, with controlled protein and copper levels."
  },
  {
    q: "A dog has both liver disease and a food allergy. Which diet could address both conditions?",
    category: "Liver / Hepatic",
    options: [
    "Hills l/d",
    "Royal Canin Hepatic",
    "Purina HA Hydrolyzed Vegetarian or Royal Canin Vegetarian",
    "Hills Multi-Organ"
    ],
    correct: 2,
    explanation: "Purina HA Hydrolyzed Vegetarian and Royal Canin Vegetarian can support liver disease while also avoiding common protein allergens — useful for dogs with concurrent food allergy."
  },
  {
    q: "A cat has been diagnosed with struvite and calcium oxalate urinary crystals (mixed). Which diet is most appropriate?",
    category: "Urinary",
    options: [
    "Royal Canin Urinary UC Low Purine",
    "Hills c/d Multicare",
    "Purina DM",
    "Hills u/d"
    ],
    correct: 1,
    explanation: "Hills c/d Multicare is formulated to dissolve and prevent both struvite and calcium oxalate crystals, making it ideal for mixed crystal cases."
  },
  {
    q: "A dog has been diagnosed with struvite bladder stones. Which diet is most appropriate?",
    category: "Urinary",
    options: [
    "Royal Canin Urinary SO",
    "Hills d/d",
    "Royal Canin Urinary UC Low Purine or Hills u/d",
    "Purina OM Overweight Management"
    ],
    correct: 0,
    explanation: "When there are no signs of blockage, struvite bladder stones can sometimes be dissolved with Royal Canin Urinary SO.  Emphasize wet food over dry food when possible, and encourage lots of drinking.  If at any time the dog is straining to urinate and not passing much urine, it is potentially an emergency and surgery may be required."
  },
  {
    q: "A cat with a history of urinary disease is also showing signs of stress-related cystitis (FIC). Which diet is most appropriate?",
    category: "Urinary",
    options: [
    "Royal Canin Urinary SO",
    "Hills c/d Stress",
    "Royal Canin Urinary SO + Calm",
    "Both B and C are appropriate"
    ],
    correct: 3,
    explanation: "Both Hills c/d Stress and Royal Canin Urinary SO + Calm combine urinary support with calming properties, addressing both FIC and crystal prevention."
  },
  {
    q: "An obese dog also has moderate osteoarthritis. Which diet would best address both conditions?",
    category: "Weight management",
    options: [
    "Hills Metabolic",
    "Royal Canin Satiety Support Weight Management",
    "Hills Metabolic + j/d or Purina OM + Joint Mobility",
    "Purina OM Overweight Management"
    ],
    correct: 2,
    explanation: "Hills Metabolic + j/d and Purina OM + Joint Mobility are combination diets that address both weight management and joint support simultaneously."
  },
  {
    q: "A cat has been diagnosed with diabetes and is overweight. Which diet is most appropriate?",
    category: "Weight management",
    options: [
    "Hills Metabolic",
    "Royal Canin Glycoadvanced",
    "Purina DM Dietetic Management",
    "Hills w/d Multi-Benefit"
    ],
    correct: 1,
    explanation: "Royal Canin Glycoadvanced is formulated specifically for overweight diabetic cats and has been shown to reduce the reliance on insulin.  Purina DM is also appropriate feline diabetes, with high protein and low carbohydrate content to support glycaemic control, but is better for skinny diabetic cats."
  },
  {
    q: "A dog has a suspected adverse food reaction and needs a strict elimination diet trial. Which type of diet is most appropriate?",
    category: "Allergy / Dermatology",
    options: [
    "Royal Canin Selected Protein (novel protein)",
    "Hills d/d (novel protein)",
    "Hydrolyzed protein diet such as Hills z/d, Royal Canin HP, or Purina HA",
    "Any of the above, depending on the patient's history"
    ],
    correct: 3,
    explanation: "Both novel protein and hydrolyzed protein diets can be used for elimination diet trials. The choice depends on what proteins the dog has previously been exposed to. Hydrolyzed diets are often preferred as they are less likely to cause cross-reactions."
  },
  {
    q: "A dog with a food allergy also has pancreatitis requiring fat restriction. Which diet addresses both conditions?",
    category: "Allergy / Dermatology",
    options: [
    "Hills z/d Low Fat or Royal Canin Gastrointestinal Low Fat + Hydrolyzed Protein",
    "Hills d/d Salmon",
    "Purina HA Hydrolyzed Vegetarian",
    "Royal Canin Hydrolyzed Protein HP"
    ],
    correct: 0,
    explanation: "Hills z/d Low Fat and Royal Canin Gastrointestinal Low Fat + Hydrolyzed Protein are specifically designed for patients needing both fat restriction and allergen avoidance."
  },
  {
    q: "A dog has been diagnosed with osteoarthritis. Which prescription diet is most appropriate?",
    category: "Joint / Mobility",
    options: [
    "Royal Canin Satiety Support",
    "Hills j/d, Royal Canin Advanced Mobility Support, or Purina JM Joint Mobility",
    "Hills k/d",
    "Royal Canin Renal Support"
    ],
    correct: 1,
    explanation: "Hills j/d, Royal Canin Advanced Mobility Support, and Purina JM are all formulated with omega-3 fatty acids and other joint-supportive nutrients for osteoarthritis management."
  },
  {
    q: "A client wants a prescription diet to help reduce plaque and tartar in their dog. Which diet is most appropriate?",
    category: "Dental",
    options: [
    "Hills t/d, Royal Canin Dental, or Purina DH Dental Health",
    "Hills i/d",
    "Royal Canin Gastrointestinal",
    "Purina OM Overweight Management"
    ],
    correct: 0,
    explanation: "Hills t/d, Royal Canin Dental, and Purina DH are all specifically designed for dental health, with kibble size and texture that mechanically reduces plaque accumulation."
  },
  {
    q: "A dog has been diagnosed with diabetes mellitus and no other comorbidities. Which diet is most appropriate?",
    category: "Diabetes",
    options: [
    "Hills w/d Multi-Benefit or Purina EN Fiber Balance",
    "Hills i/d",
    "Royal Canin Glycobalance",
    "Both A and C are appropriate"
    ],
    correct: 3,
    explanation: "Royal Canin Glycobalance is specifically formulated for canine diabetes. Hills w/d and Purina EN Fiber Balance are also used due to their high fibre content which helps moderate blood glucose. If there are any other illnesses at the same time (e.g. pancreatitis), it is best to feed something appropriate for that illness."
  },
  {
    q: "A cat has just undergone major surgery and has been anorexic for 3 days. Which diet is most appropriate?",
    category: "Recovery / Convalescence",
    options: [
    "Royal Canin Recovery or Hills a/d",
    "Hills i/d",
    "Royal Canin Gastrointestinal",
    "Purina EN Gastroenteric Naturals"
    ],
    correct: 0,
    explanation: "Royal Canin Recovery and Hills a/d are high calorie, highly palatable diets designed for critical care, post-surgical patients, and those with prolonged anorexia."
  },
];