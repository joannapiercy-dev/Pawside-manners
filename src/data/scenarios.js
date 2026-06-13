const baseScenarios = [
  // ── Bad News ──
  {
    id: "bn-3",
    roles: ["reception"],
    category: "bad-news",
    title: "Euthanasia appointment booking",
    difficulty: "intermediate",
    tags: ["empathy", "scheduling", "sensitivity"],
    clientMessage: "I need to make an appointment... for putting my dog to sleep. I think it's time.",
    context: "A client phones to book a euthanasia appointment. They sound tearful and are speaking quietly.",
    keyPrinciples: [
      "Match their quiet, gentle tone",
      "Never treat this as a routine booking",
      "Acknowledge the courage it takes to make this decision",
      "Offer a private appointment time"
    ],
    modelAnswer: "Of course — I'm really glad you called, and I'm so sorry you're facing this. Making this decision for your dog takes real love. I want to make this as gentle as possible for you both. We can arrange a private appointment at a quiet time so you have as long as you need. Would morning or afternoon work better for you?",
    tip: "Ask if they would like to bring anyone with them. Offering that option acknowledges this is a significant moment.",
    quizOptions: [
      { text: "\"Of course. I'm so sorry — let's find a time that works for you. Would you prefer morning or afternoon, and is there a day that's better?\"", correct: true, explanation: "Simple, warm, and practical. It honours the gravity of the call without overcomplicating things." },
      { text: "\"Name? Date of birth of the pet? Okay, we have a slot Thursday at 3pm.\"", correct: false, explanation: "Treating this as a routine booking misses entirely the emotional weight of the call." },
      { text: "\"Are you sure? Have you explored all options with the vet?\"", correct: false, explanation: "Questioning the client's decision is inappropriate. This is not the receptionist's role and can cause real harm." },
      { text: "\"We actually have a cancellation today at 5pm if that helps?\"", correct: false, explanation: "While offering availability is fine, leading with 'a cancellation' trivialises the appointment." }
    ]
  },
  {
    id: "bn-1",
    roles: ["reception"],
    category: "bad-news",
    title: "Terminal cancer diagnosis",
    difficulty: "advanced",
    tags: ["empathy", "euthanasia discussion", "support"],
    clientMessage: "I just got a call saying Milo has cancer and it's spread everywhere. The vet said there's nothing more they can do. I don't understand — he was fine last week. What does this mean? Is he going to die?",
    context: "A client calls in distress after receiving results over the phone from the vet. Their 10-year-old golden retriever has been diagnosed with metastatic cancer. You are the receptionist who answered.",
    keyPrinciples: [
      "Acknowledge feelings before giving information",
      "Avoid clinical jargon",
      "Never rush the client",
      "Offer a follow-up appointment to discuss options"
    ],
    modelAnswer: "Oh, I'm so sorry to hear about Milo — this must be incredibly shocking, especially when he seemed so well recently. It makes complete sense that you have a lot of questions right now. I'd really encourage you to come in and speak with Dr [name] in person; they can take all the time you need to explain the results and talk through what options might help keep Milo comfortable. Can I help arrange that for you?",
    tip: "Avoid saying 'at least' or 'everything happens for a reason'. Silence and simple acknowledgement are more comforting than trying to find a silver lining.",
    quizOptions: [
      { text: "\"I'm so sorry — this is such difficult news. Let me arrange for you to come in and speak with Dr [name] at a time that works for you, so they can walk you through everything properly.\"", correct: true, explanation: "This acknowledges emotion first, then offers a clear, compassionate next step without rushing the client." },
      { text: "\"Metastatic cancer means it has spread to multiple organs, so unfortunately the prognosis is poor. You should consider quality-of-life options.\"", correct: false, explanation: "Delivering clinical details over the phone without emotional acknowledgement first feels cold, and recapping a diagnosis isn't a receptionist's role." },
      { text: "\"Animals can sometimes surprise us! Let's see how he goes.\"", correct: false, explanation: "False hope is harmful and undermines the client's trust when things don't improve." },
      { text: "\"We're very busy today. Can you call back tomorrow to speak with the vet?\"", correct: false, explanation: "Dismissing a client in crisis damages trust and can be genuinely harmful to the client's wellbeing." }
    ]
  },
  {
    id: "bn-2",
    roles: ["reception"],
    category: "bad-news",
    title: "Pet didn't survive surgery",
    difficulty: "advanced",
    tags: ["loss", "grief", "in person"],
    clientMessage: "I'm here to pick up Chester. How did his surgery go?",
    context: "A client has arrived at the front desk to collect their cat after a routine surgery that unfortunately resulted in complications and the cat did not survive. The vet has asked you to let them know they need to speak with the client privately.",
    keyPrinciples: [
      "Do not deliver the news yourself — get the vet",
      "Lead the client somewhere private immediately",
      "Use calm, gentle body language",
      "Offer water and tissues"
    ],
    modelAnswer: "Hello — thank you for coming in. Before I say anything else, could I ask you to come with me to one of our quieter rooms for a moment? Dr [name] would very much like to speak with you directly. Can I get you a glass of water while you wait for them?",
    tip: "Your job here is not to break the news — it is to create the right conditions for the vet to do so with care. Guiding the client to a private space shows respect.",
    quizOptions: [
      { text: "\"I'll just take you through to a private room — Dr [name] would like to speak with you. Can I get you anything while you wait?\"", correct: true, explanation: "This keeps the client comfortable, creates privacy, and hands off to the vet without pre-empting the conversation." },
      { text: "\"Oh, I'm afraid Chester didn't make it through the surgery. I'm so sorry.\"", correct: false, explanation: "It is the vet's responsibility to deliver this news. Doing so at the front desk, in public, is inappropriate." },
      { text: "\"The vet will be with you in about 20 minutes, just take a seat in the waiting room.\"", correct: false, explanation: "Leaving a client in a busy waiting room when difficult news is coming shows poor judgement about the situation." },
      { text: "\"There were some complications — let me go find out what happened.\"", correct: false, explanation: "Vague hints cause anxiety and are worse than either clear information or a clear redirect." }
    ]
  },

  // ── Difficult Clients ──
  {
    id: "dc-1",
    roles: ["reception"],
    category: "difficult-clients",
    title: "Angry client in the waiting room",
    difficulty: "intermediate",
    tags: ["conflict", "de-escalation", "public setting"],
    clientMessage: "This is absolutely ridiculous. I've been waiting for 45 minutes and nobody has told me anything. My cat is sick and I'm just supposed to sit here? This is a joke.",
    context: "A client is becoming visibly agitated in a busy waiting room. Other clients are present. The clinic is running late due to an emergency case.",
    keyPrinciples: [
      "Don't be defensive — validate the frustration",
      "Give them a genuine reason for the delay (if possible)",
      "Offer something concrete",
      "Invite them somewhere quieter if the situation escalates"
    ],
    modelAnswer: "You're absolutely right to be frustrated, and I apologise for the wait and for not keeping you updated — that's on us. We had an emergency come in which pushed everything back, and I should have let you know sooner. Let me check in with the clinical team right now and get you a realistic update. Can I grab you a cup of water while you wait?",
    tip: "Never say 'there's nothing I can do'. Even if you can't change the wait, you can acknowledge, explain, and offer something small.",
    quizOptions: [
      { text: "\"I completely understand your frustration — I'm sorry we haven't kept you updated. We've had an unexpected emergency which has caused delays. Let me find out exactly how much longer it will be and come back to you.\"", correct: true, explanation: "Validation + honest explanation + a concrete action. This is the formula for de-escalation." },
      { text: "\"Everyone here is waiting — I can't help how long it takes.\"", correct: false, explanation: "Dismissive and unhelpful. This will escalate the situation." },
      { text: "\"If you're unhappy, you're welcome to go somewhere else.\"", correct: false, explanation: "This is never appropriate. It is hostile and will severely damage the clinic's reputation." },
      { text: "\"The vet is with a very sick animal, so I'm sure you understand.\"", correct: false, explanation: "Implying the client's pet is less important than another's is inflammatory even if unintentional." }
    ]
  },
  {
    id: "dc-2",
    roles: ["reception"],
    category: "difficult-clients",
    title: "Dispute over advice given",
    difficulty: "intermediate",
    tags: ["complaint", "listening", "record-keeping"],
    clientMessage: "I was told by someone at your clinic to give my dog 2 tablets twice a day, but the leaflet says 1 tablet. My dog has been really unwell and I think you've made her sick.",
    context: "A client calls to complain that medication instructions they received verbally contradicted the written instructions. The dog has been vomiting.",
    keyPrinciples: [
      "Never be defensive or dismiss the concern",
      "Take note of everything the client says",
      "Do not speculate on what was or wasn't said",
      "Prioritise the animal's welfare — advise them to come in"
    ],
    modelAnswer: "I'm really concerned to hear Bella has been unwell, and I want to make sure she gets the right help straightaway. The most important thing right now is getting her seen — can you bring her in today? Once we know she's okay, I'll make sure the clinical team is aware of your concern about the instructions, and we'll look into what happened.",
    tip: "Write down everything the client tells you. Date, time, what they were told, by whom if known, and the pet's current symptoms. This protects everyone.",
    quizOptions: [
      { text: "\"I'm sorry to hear Bella's unwell — let's get her seen today. I'll also make sure the team knows about your concern with the instructions so we can look into it properly.\"", correct: true, explanation: "Pet welfare first, acknowledgement of the complaint, no defensiveness or speculation." },
      { text: "\"I doubt anyone told you to give double the dose — that doesn't sound right.\"", correct: false, explanation: "Dismissing the client's account before investigating is defensive and disrespectful." },
      { text: "\"That's between you and whoever you spoke to — I can't speak for other staff.\"", correct: false, explanation: "The clinic is a team. Distancing yourself from colleagues in front of a client is unprofessional." },
      { text: "\"Vomiting can have lots of causes, it's probably not the tablets.\"", correct: false, explanation: "Speculating on causes without clinical knowledge is dangerous and undermines the client's legitimate concern." }
    ]
  },
  {
    id: "dc-3",
    roles: ["reception"],
    category: "difficult-clients",
    title: "Rude or abusive language",
    difficulty: "advanced",
    tags: ["boundaries", "professionalism", "self-care"],
    clientMessage: "Your staff are completely useless. I've never dealt with such incompetent idiots in my life. Just do your bloody job.",
    context: "A client on the phone is using abusive language towards you after you explained there are no same-day appointments available.",
    keyPrinciples: [
      "Stay calm — do not match their energy",
      "Name the behaviour without attacking the person",
      "Give them a clear choice to continue respectfully",
      "Know when to end the call"
    ],
    modelAnswer: "I do want to help you find a solution today, and I'll do my best to do that. But I'd ask that we keep the conversation respectful — I'll be able to help you much more effectively that way. Now, I can't offer a scheduled appointment today, but if your pet needs to be seen urgently, I can speak to the clinical team about a drop-in slot. Is that something you'd like me to try?",
    tip: "You do not have to absorb verbal abuse. A calm, clear boundary ('I'll help you more effectively if we can keep this respectful') is professional and appropriate.",
    quizOptions: [
      { text: "\"I hear that you're very frustrated, and I want to help. I do need us to keep this conversation respectful though. Now — let me see what I can do for you.\"", correct: true, explanation: "Acknowledges the frustration, sets a clear boundary calmly, then pivots to a solution." },
      { text: "\"There's no need to be rude. I'm hanging up now.\"", correct: false, explanation: "While ending a call can be appropriate, doing so abruptly without de-escalation first is too fast." },
      { text: "\"I'm sorry, I'm sorry — I'll see what I can do right away.\"", correct: false, explanation: "Excessive apology without a boundary signals that abusive behaviour is acceptable." },
      { text: "\"I have feelings too, you know. That's really not fair.\"", correct: false, explanation: "Making it personal rather than professional shifts focus away from resolving the issue." }
    ]
  },

  // ── Costs & Payment ──
  {
    id: "cp-1",
    roles: ["reception"],
    category: "costs",
    title: "Shocked by the bill",
    difficulty: "beginner",
    tags: ["billing", "transparency", "empathy"],
    clientMessage: "This can't be right. $650?! I thought it would be around $150. Nobody told me it was going to be this much.",
    context: "A client has collected their dog after a day procedure and is at the front desk looking at the invoice for the first time. They are visibly upset.",
    keyPrinciples: [
      "Stay calm and non-defensive",
      "Walk through the invoice line by line",
      "Acknowledge that cost surprises are upsetting",
      "Know your clinic's payment plan options"
    ],
    modelAnswer: "I completely understand that's a shock — nobody wants to be surprised by a bill. Let me sit with you and go through each item so you can see exactly what it covers. If after that it's still a concern, I can also let you know about payment options we have available. Does that sound okay?",
    tip: "Always have a printed itemised receipt ready. Walking through it line by line transforms an abstract number into understandable care.",
    quizOptions: [
      { text: "\"I understand — that's a surprise. Let me walk you through the invoice so you can see exactly what's included, and I can also mention our payment options if that would help.\"", correct: true, explanation: "Empathetic, practical, and immediately useful." },
      { text: "\"Veterinary care is expensive — that's just how it is.\"", correct: false, explanation: "Dismissive. This provides zero value and makes the client feel uncared for." },
      { text: "\"Well, you should have asked for a quote beforehand.\"", correct: false, explanation: "Placing blame on the client when they may not have been given the option of a quote is unfair and unprofessional." },
      { text: "\"I'll just go get the vet to explain it.\"", correct: false, explanation: "While the vet may need to be involved, abandoning the client without doing anything first is poor service." }
    ]
  },
  {
    id: "cp-2",
    roles: ["reception"],
    category: "costs",
    title: "Client can't afford recommended treatment",
    difficulty: "advanced",
    tags: ["finance", "ethics", "compassion"],
    clientMessage: "The vet says Oscar needs surgery but I genuinely can't afford it. I feel terrible. I don't know what to do.",
    context: "A client is in tears at the desk. Their elderly cat has been diagnosed with a urinary blockage requiring surgery. The cost is $1,600. The client says they have no savings or credit.",
    keyPrinciples: [
      "This is a welfare AND emotional situation — acknowledge both",
      "Know your clinic's financial support options",
      "Know third-party options: PDSA, RSPCA, charities, payment plans",
      "Never make the client feel judged"
    ],
    modelAnswer: "I can hear how hard this is, and please know — asking for help isn't something to feel ashamed about. Let me make sure you have all the options in front of you. We do offer a payment plan, and I can also give you details for some charities and organisations that sometimes help with veterinary costs. Meanwhile, I'll make sure the vet knows the situation so they can talk through whether there are any alternative approaches too. You're not alone in this.",
    tip: "Keep an up-to-date printed list of local financial support resources at the front desk (PDSA eligibility, RSPCA, local charities, credit options). This is one of the most practically impactful things a receptionist can have ready.",
    quizOptions: [
      { text: "\"Please don't feel terrible — let's look at every option together. We have a payment plan, and there are also some charities I can tell you about. I'll also make sure the vet knows the situation.\"", correct: true, explanation: "Non-judgmental, hopeful, practical and connects multiple resources." },
      { text: "\"I'm afraid if you can't pay, we can't proceed with the surgery.\"", correct: false, explanation: "While ultimately true, delivering this bluntly as a first response is callous and ignores available options." },
      { text: "\"Maybe you should have had pet insurance.\"", correct: false, explanation: "This is cruel and serves no constructive purpose." },
      { text: "\"I'll have to speak to the manager about this.\"", correct: false, explanation: "While escalation may be needed, abandoning the client mid-conversation without any support is poor practice." }
    ]
  },
  {
    id: "cp-3",
    roles: ["reception"],
    category: "costs",
    title: "Explaining a quote before treatment",
    difficulty: "beginner",
    tags: ["transparency", "consent", "communication"],
    clientMessage: "How much is it going to cost? I want to know before you do anything.",
    context: "A client has brought their rabbit in with suspected GI stasis. The vet has recommended blood tests and possibly IV fluids. The client asks for a cost estimate at the front desk.",
    keyPrinciples: [
      "Give a clear estimated range, never a single exact figure",
      "Explain what could affect the final cost",
      "Always get verbal or written consent before proceeding",
      "Reassure them they will be contacted if costs change"
    ],
    modelAnswer: "Absolutely — and it's really good that you're asking. Based on what the vet has outlined, you're looking at roughly $250 to $475 depending on what the blood tests show and whether fluids are needed. Those are estimates, and we'd always call you before proceeding with anything that takes us above that range. Would you like me to put that in writing for you?",
    tip: "Always quote a range, not a number. And always confirm: 'We'll call you before doing anything beyond this estimate.'",
    quizOptions: [
      { text: "\"Great question. Based on what the vet has mentioned, the estimate is roughly $250–$475 depending on test results. We'd call you before going beyond that. Would you like it in writing?\"", correct: true, explanation: "Range-based, honest about variables, clear on consent process." },
      { text: "\"I can't really say — it depends on what they find.\"", correct: false, explanation: "Unhelpful. Even when uncertain, you can give a realistic range." },
      { text: "\"It'll probably be around $275.\"", correct: false, explanation: "A single estimate without caveats sets unrealistic expectations and can lead to billing disputes." },
      { text: "\"The vet handles all of that — I just do the bookings.\"", correct: false, explanation: "Receptionists are often the first point of contact for cost queries and should be able to explain estimates confidently." }
    ]
  },

  // ── Follow-up Calls ──
  {
    id: "fu-1",
    roles: ["reception"],
    category: "follow-up",
    title: "Post-surgery welfare check",
    difficulty: "beginner",
    tags: ["follow-up", "phone", "warmth"],
    clientMessage: "(Incoming call scenario — you are making the call)",
    context: "You are calling a client the day after their dog had a routine spay. The purpose is a welfare check call. The client answers.",
    keyPrinciples: [
      "Introduce yourself and the clinic clearly",
      "Explain why you're calling before asking questions",
      "Use open questions — not just yes/no",
      "Know what red flag symptoms to ask about"
    ],
    modelAnswer: "Hello, is that [client name]? Wonderful — this is [your name] calling from [clinic name]. I'm just ringing to check in on Bella after her operation yesterday. How has she been getting on? … (listen) … And has she eaten or drunk anything today? … Is the incision site looking okay — no swelling, redness or discharge? Brilliant. If anything changes or you're worried at any point, please don't hesitate to call us.",
    tip: "End every follow-up call by reminding the client they can call back if anything changes. It takes 10 seconds and builds enormous trust.",
    quizOptions: [
      { text: "\"Hi, this is [name] from [clinic] — I'm ringing for a quick welfare check on Bella after her spay yesterday. How has she been doing?\"", correct: true, explanation: "Clear identification, stated purpose, open question — everything a good call opener needs." },
      { text: "\"Is everything okay with the dog?\"", correct: false, explanation: "Too vague and impersonal. Doesn't identify the caller or the purpose." },
      { text: "\"Just checking you got home okay yesterday.\"", correct: false, explanation: "This misses the clinical welfare purpose of the call entirely." },
      { text: "\"Hi, we're calling everyone who had operations this week. Is your pet fine?\"", correct: false, explanation: "Impersonal and suggests the call is routine admin rather than genuine care for this specific patient." }
    ]
  },
  {
    id: "fu-2",
    roles: ["reception"],
    category: "follow-up",
    title: "Overdue vaccination reminder",
    difficulty: "beginner",
    tags: ["reminders", "proactive", "gentle persuasion"],
    clientMessage: "(Incoming call scenario — you are making the call)",
    context: "Monty, a 3-year-old Labrador, is 6 weeks overdue for his annual vaccination. You are calling the owner to follow up. The owner answers and sounds slightly defensive.",
    keyPrinciples: [
      "Never lecture or make the client feel guilty",
      "Frame it as a helpful reminder, not a reprimand",
      "Offer easy next steps",
      "Mention the practical risk, not to scare, but to inform"
    ],
    modelAnswer: "Hi, this is [name] from [clinic] — I hope I've caught you at an okay time. I'm just giving a gentle nudge about Monty's booster, which we have recorded as due about six weeks ago. No stress at all — life gets busy! It's just worth knowing that his protection will be starting to reduce, so the sooner we get him in the better. Are there any days that work well for you in the next week or two?",
    tip: "Never say 'your pet is now unprotected' — it sounds like a scare tactic. Say 'protection starts to reduce' instead. It's accurate and less alarming.",
    quizOptions: [
      { text: "\"Hi, it's [name] from [clinic] — just a friendly reminder that Monty's booster is now six weeks overdue. His immunity will be starting to reduce, so it's a good idea to get it sorted soon. Can I book you in?\"", correct: true, explanation: "Friendly, accurate, action-focused and not guilt-inducing." },
      { text: "\"You really should have brought him in six weeks ago — he could be at risk.\"", correct: false, explanation: "Shaming language. This will make the client feel judged and is counterproductive." },
      { text: "\"Monty is now completely unvaccinated — you need to come in immediately.\"", correct: false, explanation: "Inaccurate and alarmist. Boosters are about reinforcing immunity, not starting from zero." },
      { text: "\"We noticed Monty hasn't been in a while — is everything okay?\"", correct: false, explanation: "Vague and misses the specific point of the call. Doesn't lead to any clear action." }
    ]
  },

  // ── Scheduling ──
  {
    id: "sch-1",
    roles: ["reception"],
    category: "scheduling",
    title: "Urgent vs. routine triage",
    difficulty: "intermediate",
    tags: ["triage", "phone", "urgency"],
    clientMessage: "My dog has been sick twice and she seems a bit quiet. Can I get an appointment today?",
    context: "It is a Monday morning and all same-day appointments are full. The dog (a 6-year-old spaniel) vomited twice in the last two hours and is quieter than usual.",
    keyPrinciples: [
      "Never say 'we're fully booked' and leave it there",
      "Gather enough clinical information to triage appropriately",
      "Know the signs that require immediate attention",
      "Always involve the clinical team for anything borderline"
    ],
    modelAnswer: "I want to make sure we give you the right advice here. Can I ask a few quick questions? Has she eaten anything unusual, or could she have got into anything? Any blood in the vomit? Is her tummy looking swollen at all? … Thank you. Let me just speak to the tech team quickly — with those symptoms I want to make sure she's seen today rather than waiting. Can I put you on a brief hold?",
    tip: "You are not diagnosing — you are gathering information so a clinically trained team member can triage. Your job is to ask the questions, not answer them.",
    quizOptions: [
      { text: "\"Let me ask a few quick questions so I can make sure she gets the right level of care. Has there been any blood in the vomit? Is her tummy swollen? … Thank you — I'm going to check with the clinical team right now.\"", correct: true, explanation: "Gathers information, doesn't dismiss and escalates appropriately." },
      { text: "\"We're fully booked today — you could try tomorrow, or go to an emergency vet if you're worried.\"", correct: false, explanation: "Sends the client away without proper triage. Vomiting and lethargy together can indicate something serious." },
      { text: "\"Two episodes of vomiting is pretty normal — just withhold food for 12 hours and see how she goes.\"", correct: false, explanation: "Giving clinical advice is outside a receptionist's remit and can be dangerous." },
      { text: "\"I'll book you in for tomorrow morning — that should be fine.\"", correct: false, explanation: "Making a clinical judgement that it can wait overnight without involving the tech or vet is inappropriate." }
    ]
  },
  {
    id: "sch-2",
    roles: ["reception"],
    category: "scheduling",
    title: "Managing a very anxious client",
    difficulty: "beginner",
    tags: ["anxiety", "reassurance", "first visit"],
    clientMessage: "I've never been to a vet before with my guinea pig — I didn't know you saw them. She's not eating and I'm really scared something serious is wrong. Is she going to be okay?",
    context: "A first-time client is calling about their guinea pig who has stopped eating. They sound anxious and unsure. They don't know if the clinic treats exotic small animals.",
    keyPrinciples: [
      "Reassure them they've done the right thing by calling",
      "Confirm whether you see small animals before anything else",
      "Don't offer a clinical opinion",
      "Make the booking process feel easy and supportive"
    ],
    modelAnswer: "You've absolutely done the right thing by calling — loss of appetite in guinea pigs really does warrant a check-up, so I'm glad you got in touch. Yes, we do see guinea pigs here. I can't say over the phone whether everything is okay, but the sooner we get her seen the better. Let's get you booked in — are you able to come in today or tomorrow?",
    tip: "Anxious first-time owners need to be told they've done the right thing. That one sentence — 'you've done the right thing by calling' — builds trust immediately.",
    quizOptions: [
      { text: "\"You've definitely done the right thing calling — yes, we do see guinea pigs. I can't say what's wrong over the phone, but let's get her in as soon as possible. When can you come?\"", correct: true, explanation: "Validates the caller, confirms the service, redirects clinical speculation, offers action." },
      { text: "\"Guinea pigs can go off their food for lots of reasons — it's probably nothing serious.\"", correct: false, explanation: "False reassurance. Guinea pigs can deteriorate quickly and this minimises a genuine concern." },
      { text: "\"Have you tried offering her different food?\"", correct: false, explanation: "Giving clinical advice (even basic) is outside the receptionist's scope." },
      { text: "\"We mostly see dogs and cats, but I can check if someone can see her.\"", correct: false, explanation: "Uncertainty about your own clinic's services undermines confidence. Know your clinic's species list." }
    ]
  },

  // ── Welfare & Safeguarding ──
  {
    id: "ws-1",
    roles: ["reception"],
    category: "difficult-clients",
    title: "Intoxicated client collecting post-surgical pet",
    difficulty: "advanced",
    tags: ["animal welfare", "safeguarding", "difficult conversation"],
    clientMessage: "Hi, I'm here to pick up Barley. He had his operation this morning.",
    context: "A client has arrived to collect their dog Barley, who had abdominal surgery earlier today and requires strict rest, monitoring for complications, and medication given every 8 hours overnight. As the client approaches the desk, you notice they are unsteady on their feet, smell of alcohol, and are having trouble finding their wallet. You are the receptionist. The vet and a technician are both available in the building.",
    keyPrinciples: [
      "Your primary duty is to the animal's welfare — do not release the pet if you have genuine concerns",
      "Do not accuse or shame the client — approach with care and without assumptions",
      "You cannot make this decision alone — involve the vet immediately",
      "Buy time calmly and respectfully while you get support",
      "Have a plan: is there an emergency contact on file? Can the pet stay overnight?"
    ],
    modelAnswer: "Hi, welcome in — Barley did really well today. Before I get him ready for you, I just want to make sure we go through all his post-operative care properly, because there's quite a bit to cover after abdominal surgery. Would you mind taking a seat for a moment? I'll just grab the vet so they can run through everything with you directly — I want to make sure he goes home with you safely.",
    tip: "The goal at this stage is to pause the discharge without confrontation. You are not diagnosing intoxication or making accusations — you are creating space for the vet to make the clinical and welfare decision. Always involve a senior team member before withholding an animal; it should never rest solely on the receptionist.",
    quizOptions: [
      { text: "\"Barley is ready — just before I bring him out, the vet would like a quick word about his overnight care. Can you take a seat and I'll get them for you?\"", correct: true, explanation: "This pauses the handover naturally and without accusation, and immediately brings in the clinical team who have the authority and training to handle the welfare decision." },
      { text: "\"I'm sorry, but I can smell alcohol on you and I don't feel comfortable releasing Barley to you in this state.\"", correct: false, explanation: "While the concern is valid, making a direct accusation like this alone at the front desk is likely to cause a scene, distress the client, and escalates without the support of the clinical team. This is not a decision the receptionist should make or communicate unilaterally." },
      { text: "\"Here's Barley — just make sure you read the care sheet when you get home.\"", correct: false, explanation: "Releasing a post-surgical animal to someone who may not be able to provide adequate care overnight is a serious animal welfare concern. The care sheet cannot substitute for proper supervision and medication." },
      { text: "\"Are you okay? You seem a little unwell — have you been drinking?\"", correct: false, explanation: "Asking directly in the waiting area is confrontational, embarrassing for the client, and puts the receptionist in a difficult position without any support. It also doesn't solve the immediate problem of what to do next." }
    ]
  },
  {
    id: "ws-2",
    roles: ["vet"],
    category: "difficult-clients",
    title: "Vet: intoxicated client collecting post-surgical pet",
    difficulty: "advanced",
    tags: ["animal welfare", "safeguarding", "clinical authority", "vet role"],
    clientMessage: "Hi, yes — I'm fine, I just want to take Barley home. He'll be much more comfortable at home with me. I know how to look after him.",
    context: "Your receptionist has quietly flagged to you that the client arriving to collect Barley — who had abdominal surgery this morning and needs medications every 8 hours and close monitoring overnight — appears to be intoxicated. They are unsteady, their speech is slightly slurred, and there is a noticeable smell of alcohol. You are the attending veterinarian. You now need to speak with the client directly in a private room. Your goals are: to assess the situation calmly, to protect Barley's welfare, and to find a solution that doesn't humiliate the client or escalate unnecessarily.",
    keyPrinciples: [
      "Speak privately — never have this conversation at the front desk or in the waiting room",
      "Lead with Barley's clinical needs, not with the client's state — this keeps the focus on welfare, not accusation",
      "You have the legal and professional authority to withhold discharge if you have genuine welfare concerns",
      "Offer a face-saving solution: overnight boarding, an emergency contact, a taxi with a trusted person",
      "Document everything — your observations, the conversation, and the outcome",
      "Stay calm and non-judgmental throughout — your tone will determine how this goes"
    ],
    modelAnswer: "Thanks for coming in — Barley really did do well today. Before we get him ready, I just want to have a quick chat with you in here. I want to be straightforward with you, because I think you'd want me to be: I do have some concerns about tonight. Barley's recovery is at a critical point — he needs his medication exactly on schedule and someone needs to be watching him closely for any signs of complications. I want to make sure we set him up for the best possible outcome. Is there someone we could call who could come and be with you both tonight — a family member or a friend? Alternatively, we're very happy to keep him here overnight at no extra charge, and you can pick him up fresh in the morning. I just want to get this right for him.",
    tip: "Notice the model answer never directly says 'you appear intoxicated' or 'I can't release him to you'. It centres entirely on Barley's clinical needs, which are genuine and unchallengeable. This gives the client a way to accept help without losing face. The offer of free overnight boarding is important — it removes the financial barrier to doing the right thing. Always document your clinical observations and the conversation in the patient record.",
    quizOptions: [
      { text: "\"I want to be upfront with you — I have some concerns about Barley's overnight care given how complex his recovery is. Could we either call someone to be with you tonight, or keep him here until morning? I'm happy to do that at no charge.\"", correct: true, explanation: "Honest, clinically framed, non-accusatory, and offers two practical face-saving options. The vet is using their authority to protect the animal while preserving the client relationship." },
      { text: "\"I'm sorry, but I can smell alcohol on you and I'm not legally able to release Barley to someone who is intoxicated.\"", correct: false, explanation: "While the welfare concern is correct, leading with a direct accusation — especially framed as a legal prohibition — is likely to cause the client to become defensive or aggressive. It also overstates the legal position. A clinical welfare framing is more effective and more accurate." },
      { text: "\"Barley is ready to go — here's his care sheet. Call us if you're worried about anything tonight.\"", correct: false, explanation: "Discharging a post-surgical patient to someone who you have genuine reason to believe cannot provide adequate overnight care is a serious animal welfare failure and a professional liability. Concern noted by a staff member must be acted on." },
      { text: "\"My receptionist mentioned you seemed a little unwell — are you sure you're okay to take him home?\"", correct: false, explanation: "Referencing what the receptionist said puts a colleague in an awkward position and frames this as a personal health check rather than a welfare-focused clinical conversation. It also gives the client an easy out — 'I'm fine' — without addressing the actual concern." }
    ]
  },

  // ── New scenarios ──
  {
    id: "cp-4",
    roles: ["reception", "tech", "vet"],
    category: "costs",
    title: "Explaining the value of pre-anaesthetic bloodwork",
    difficulty: "intermediate",
    tags: ["consent", "transparency", "surgery prep"],
    clientMessage: "Do we really have to do the blood tests before the surgery? It seems like you're just adding things on to make more money.",
    context: "A client has brought their 6-year-old Labrador in for a routine desexing. The vet has recommended pre-anaesthetic bloodwork. The client is resistant, questioning whether it is necessary and implying the clinic is profit-driven.",
    keyPrinciples: [
      "Acknowledge the concern without being defensive",
      "Explain the purpose clearly in plain language",
      "Frame it as protecting their pet, not upselling",
      "Make clear it is their choice, but be honest about the risk of declining"
    ],
    modelAnswer: "I completely understand why that might feel that way — and it's a fair question to ask. The reason we recommend it isn't to add to your bill. Anaesthesia is very safe, but it puts stress on the organs — particularly the liver and kidneys — which are responsible for processing it. The blood test lets us check that everything is working the way we'd expect before we put Buddy under. Occasionally it picks up something we wouldn't have known about, and in those cases it genuinely changes what we do. You're absolutely welcome to decline, but I want to be upfront that if we do find a problem during or after surgery, we'd wish we'd known sooner. It's there to protect him.",
    tip: "Never get defensive when a client questions cost — it almost always comes from anxiety, not hostility. Framing the bloodwork as a safety net for the pet rather than a clinical requirement shifts the conversation completely.",
    quizOptions: [
      { text: "\"That's a fair question. The blood test checks that Buddy's organs can handle the anaesthetic safely — it's there to protect him. Occasionally it picks up something important. You can decline, but I'd want you to understand what we're checking for.\"", correct: true, explanation: "Acknowledges the concern, explains the purpose clearly, is honest about the option to decline and the reason it matters." },
      { text: "\"It's just standard procedure — we do it for all surgeries.\"", correct: false, explanation: "Doesn't answer the concern at all. Saying it's standard without explaining why reinforces the idea that it might be unnecessary." },
      { text: "\"Fine — we can skip it if you want, but don't blame us if something goes wrong.\"", correct: false, explanation: "Defensive, passive-aggressive, and completely inappropriate. This would severely damage trust and is not how informed consent works." },
      { text: "\"The vet has recommended it so it needs to be done.\"", correct: false, explanation: "Dismisses the client's question and gives them no information. Clients have the right to understand what they're consenting to." }
    ]
  },
  {
    id: "bn-4",
    roles: ["reception"],
    category: "bad-news",
    title: "Grieving client with an outstanding bill",
    difficulty: "advanced",
    tags: ["grief", "billing", "sensitivity", "empathy"],
    clientMessage: "I got a bill in the post. I can't even look at it. My dog died two weeks ago and I'm still not okay.",
    context: "A client calls the clinic. Their dog passed away two weeks ago following emergency treatment. They have received an outstanding invoice in the post and are clearly still deeply grieving. The invoice is legitimate and overdue.",
    keyPrinciples: [
      "Grief comes first — do not lead with the bill",
      "Acknowledge their loss sincerely before anything else",
      "Never pressure a bereaved client over the phone",
      "Offer options and breathing room without writing the bill off"
    ],
    modelAnswer: "I'm so sorry — I can hear how hard the last few weeks have been, and I'm really sorry for your loss. Please know there is no pressure at all right now. When you feel ready, we can talk through the invoice together and look at what works for you — there's no rush today. Would it help if I made a note on your account so our team knows to be sensitive when they speak with you?",
    tip: "A bereaved client who receives a bill in the post often feels like they are being asked to pay for their pet's death. Acknowledging the grief first — before any mention of the bill — completely changes the tone of the conversation. The bill can wait a moment.",
    quizOptions: [
      { text: "\"I'm so sorry for your loss — please don't worry about the invoice today. When you're ready, we can go through it together and work out what suits you. There's no pressure from us right now.\"", correct: true, explanation: "Grief before business. This is compassionate, removes immediate pressure, and still acknowledges the invoice without ignoring it." },
      { text: "\"I understand, but the account is now overdue — can we arrange a payment today?\"", correct: false, explanation: "Pursuing payment immediately from a grieving client is deeply inappropriate and will cause lasting damage to the relationship." },
      { text: "\"I'll pass your details to our accounts team and they'll be in touch.\"", correct: false, explanation: "Deflecting to accounts removes the human connection entirely and leaves the client feeling like a number." },
      { text: "\"I'm sorry to hear that. The invoice is for the treatment your dog received — is there a reason you haven't paid it yet?\"", correct: false, explanation: "Asking a grieving client why they haven't paid is tone-deaf and will feel accusatory regardless of intent." }
    ]
  },
  {
    id: "sch-3",
    roles: ["reception"],
    category: "scheduling",
    title: "First-time client — new to the area",
    difficulty: "beginner",
    tags: ["new client", "welcome", "relationship building"],
    clientMessage: "Hi, we've just moved to Victoria from Calgary. We have a 3-year-old golden retriever called Mango and we're looking for a new vet clinic. Can we register with you?",
    context: "A new client calls to register with the clinic. They have recently relocated and are looking for a permanent vet for their healthy adult dog. This is the clinic's opportunity to make a great first impression.",
    keyPrinciples: [
      "Make them feel genuinely welcome — not processed",
      "Gather key information warmly, not like a form",
      "Ask about their previous vet to request records",
      "Offer a new client consult rather than waiting for something to go wrong"
    ],
    modelAnswer: "Welcome to Victoria — and welcome to Oaklands! We'd love to have Mango as a patient. I'll get you registered now. Can I grab your name and a contact number to start? It's also really helpful if we can get records from your vet in Calgary — even a vaccination history makes a big difference. And just so you know, we do offer a new patient consult for pets joining us — it's a chance for the vet to meet Mango and make sure everything's up to date. Would that be something you'd be interested in?",
    tip: "New clients who feel warmly welcomed in the first phone call become loyal clients. Use the pet's name as much as possible, and offer the new patient consult proactively — it builds the relationship and ensures continuity of care.",
    quizOptions: [
      { text: "\"Welcome to Victoria! We'd love to have Mango with us. Let me get your details, and if you can get records from your Calgary vet that would be great. We also offer a new patient consult so the vet can meet Mango — would that be useful?\"", correct: true, explanation: "Warm, uses the pet's name, gathers what's needed, and proactively offers a consult to build the relationship." },
      { text: "\"Yes, I can register you. Name, address, and pet's date of birth?\"", correct: false, explanation: "Technically correct but completely transactional. A new client deserves more than a form read aloud at them." },
      { text: "\"We're quite busy at the moment — can you call back next week to register?\"", correct: false, explanation: "Turning away a new client who has come to you enthusiastically is a significant missed opportunity." },
      { text: "\"We'll register Mango but just so you know, we're not taking on new clients for routine care right now.\"", correct: false, explanation: "If the clinic isn't accepting new clients that's fine — but leading with restrictions before even welcoming them is poor form." }
    ]
  },
  {
    id: "vc-5",
    roles: ["vet", "tech"],
    category: "vet-client",
    title: "Worried about vaccine side effects",
    difficulty: "beginner",
    tags: ["vaccines", "client education", "reassurance"],
    clientMessage: "I've been reading online that vaccines can cause all sorts of problems. My last cat got really sick after her vaccine and I'm worried about giving them to my new kitten.",
    context: "A client has brought in their 8-week-old kitten for their first vaccination appointment. The client is visibly anxious and has done a lot of online research, some of which has alarmed them. They had a previous cat who was lethargic after a vaccination.",
    keyPrinciples: [
      "Validate the previous experience — don't dismiss it",
      "Explain what normal post-vaccine responses look like",
      "Be honest about rare risks without catastrophising",
      "Empower them with what to watch for and when to call"
    ],
    modelAnswer: "I'm really glad you mentioned that, and I'm sorry that experience with your previous cat was worrying. It's actually really common for cats to feel a bit flat for 24 to 48 hours after a vaccination — a mild temperature, a bit less energy, maybe not wanting to eat as much. That's the immune system responding, which means it's working. Serious reactions do exist but they're genuinely rare — and when they happen, they usually occur within 20 to 30 minutes, which is why we ask clients to wait here for a little while after. What I'd suggest is that we go ahead today, keep Luna here for 20 minutes afterward, and I'll give you a clear list of what to watch for at home and when to call us. How does that sound?",
    tip: "Never dismiss online research or prior experience — clients who feel heard are far more likely to follow medical advice. Acknowledge, explain, and empower. Give them something concrete to do so they leave feeling informed rather than anxious.",
    quizOptions: [
      { text: "\"That makes complete sense after what happened with your last cat. Mild lethargy after vaccines is actually normal — it means the immune system is responding. Serious reactions are rare and usually happen quickly, which is why we like clients to wait 20 minutes afterward. We'll watch the kitten closely and give you a clear list of what to look for at home.\"", correct: true, explanation: "Validates the experience, explains the science simply, is honest about rare risks, and gives practical next steps." },
      { text: "\"Vaccines are very safe — the things you read online are exaggerated. There's nothing to worry about.\"", correct: false, explanation: "Dismissing the client's research and lived experience will shut down the conversation and damage trust, even if the information is broadly accurate." },
      { text: "\"If you're not comfortable, we can skip the vaccines today and you can think about it.\"", correct: false, explanation: "While consent is important, offering to skip core kitten vaccines without any education first is not in the kitten's interest. Education should come before deferral." },
      { text: "\"What did you read specifically? A lot of that stuff online is just not accurate.\"", correct: false, explanation: "Challenging the client's sources before acknowledging their concern is defensive and will make them feel judged rather than supported." }
    ]
  },
  {
    id: "tc-5",
    roles: ["tech", "vet"],
    category: "tech-client",
    title: "Selling the value of a dental",
    difficulty: "intermediate",
    tags: ["dentals", "client education", "treatment plans"],
    clientMessage: "The vet said Biscuit needs a dental but it sounds really expensive and risky. His teeth don't look that bad to me. Can't we just leave it and see how he goes?",
    context: "You are a vet tech following up after a consultation. The vet has recommended a dental procedure for a 7-year-old cat with grade 2-3 periodontal disease. The client saw the vet's concern but is unconvinced, partly due to cost and partly due to anaesthetic anxiety.",
    keyPrinciples: [
      "Acknowledge the anaesthetic concern — it's legitimate",
      "Make the connection between dental disease and systemic health",
      "Use concrete language, not clinical grades",
      "Help them understand what 'wait and see' actually means for the animal"
    ],
    modelAnswer: "I completely understand the hesitation — anaesthesia always feels like a big deal, and the cost is real. What I'd want you to know is that the pain from dental disease is something cats hide incredibly well. Biscuit may seem fine, but grade 2 to 3 disease means there's active infection and inflammation in there, and cats will just eat through it because they don't have a choice. The other thing worth knowing is that bacteria from the mouth do get into the bloodstream and over time that puts stress on the kidneys and heart — which matters a lot more at 7 than it would have at 3. The procedure itself is very routine for us, and we do pre-anaesthetic bloodwork to make sure he's a good candidate before we go anywhere near anaesthesia. 'Wait and see' usually means things get worse and the procedure becomes more complex. I'm not trying to pressure you — I just want to make sure you have the full picture.",
    tip: "Clients often say 'his teeth don't look that bad' because they're comparing to human dental standards and because cats hide pain so effectively. Concrete language — 'active infection', 'bacteria reaching the kidneys', 'eating through the pain' — lands better than clinical grades. And always address the anaesthetic anxiety directly; it is the real barrier for most people.",
    quizOptions: [
      { text: "\"The hesitation makes complete sense — anaesthesia feels significant and the cost is real. But cats hide dental pain incredibly well, and grade 2-3 means there's active infection. Over time that affects the kidneys and heart. The procedure is routine and we do bloodwork first to make sure he's ready. Waiting usually means things get worse.\"", correct: true, explanation: "Addresses the real concerns, uses plain language, explains systemic risk, and is honest about what deferral means without being pushy." },
      { text: "\"It's really important — you should book it as soon as possible.\"", correct: false, explanation: "Gives no information and just adds pressure. The client needs education, not urgency without explanation." },
      { text: "\"If you want to wait, that's your decision — just keep an eye on his eating.\"", correct: false, explanation: "While consent is the client's right, offering no information or advocacy for the patient is a disservice to both the client and the cat." },
      { text: "\"Grade 2-3 periodontal disease is a significant finding and warrants prompt intervention.\"", correct: false, explanation: "Clinical language that means nothing to a lay client. 'Grade 2-3' and 'warrants prompt intervention' don't help a worried owner make a decision." }
    ]
  },

];

export const categories = [
  {
    id: "scheduling",
    roles: ["reception", "tech", "vet"],
    label: "Scheduling & triage",
    icon: "📅",
    iconBg: "#f3f0fb",
    description: "Booking appointments, triaging urgency, and supporting anxious first-time clients.",
    tagColor: "tag-teal"
  },
  {
    id: "costs",
    roles: ["reception", "tech", "vet"],
    label: "Costs & payment",
    icon: "💳",
    iconBg: "#fdf8ee",
    description: "Explaining invoices, discussing financial difficulties, and quoting for treatment.",
    tagColor: "tag-gold"
  },
  {
    id: "follow-up",
    roles: ["reception", "tech", "vet"],
    label: "Follow-up calls",
    icon: "📞",
    iconBg: "#edf7f2",
    description: "Welfare checks, vaccination reminders, and post-visit outreach.",
    tagColor: "tag-green"
  },
  {
    id: "bad-news",
    roles: ["reception", "tech", "vet"],
    label: "Delivering bad news",
    icon: "💙",
    iconBg: "#e8f4fb",
    description: "Handling diagnoses, prognosis conversations, and euthanasia appointments with care.",
    tagColor: "tag-teal"
  },
  {
    id: "difficult-clients",
    roles: ["reception", "tech", "vet"],
    label: "Difficult clients",
    icon: "🛡️",
    iconBg: "#fdf0eb",
    description: "De-escalating conflict, managing complaints, and setting respectful boundaries.",
    tagColor: "tag-rust"
  },
  {
    id: "team",
    roles: ["reception", "tech", "vet"],
    label: "Team conversations",
    icon: "🤝",
    iconBg: "#fff7ed",
    description: "Speaking up about concerns, giving feedback, resolving conflict, and communicating across roles.",
    tagColor: "tag-gold"
  },
  {
    id: "tech-client",
    roles: ["reception", "tech", "vet"],
    label: "Tech to client",
    icon: "🔬",
    iconBg: "#f0fff4",
    description: "Relaying information, handling dismissive clients, discharge instructions, and restraint conversations.",
    tagColor: "tag-green"
  },
  {
    id: "vet-client",
    roles: ["reception", "tech", "vet"],
    label: "Vet to client",
    icon: "🩺",
    iconBg: "#f0f4ff",
    description: "Delivering diagnoses, end-of-life conversations, disclosing complications, and handling disagreement.",
    tagColor: "tag-teal"
  }
];

// ── VET TO CLIENT ──
const vetScenarios = [
  {
    id: "vc-1",
    roles: ["vet"],
    category: "vet-client",
    title: "Delivering a serious diagnosis",
    difficulty: "advanced",
    tags: ["diagnosis", "empathy", "cancer"],
    clientMessage: "So what did the biopsy show? Is it bad?",
    context: "You are the attending veterinarian. Mrs Chen has brought in her 9-year-old Labrador Max for biopsy results. The results confirm an aggressive mast cell tumour — grade III, with a guarded prognosis. Mrs Chen is alone, and clearly anxious. You are in a consult room together.",
    keyPrinciples: [
      "Pause before delivering the news — don't rush straight into clinical detail",
      "Use plain language — avoid jargon like 'grade III' without explanation",
      "Acknowledge the emotional weight before moving to next steps",
      "Don't fill silence — let the client process",
      "End with a clear, manageable next step rather than overwhelming them with all options at once"
    ],
    modelAnswer: "I want to take a moment before I share the results, because this isn't easy news. The biopsy has confirmed that the lump is a type of cancer — a mast cell tumour. It's a more aggressive type, which means we need to take it seriously. I know that's a lot to take in. Before we talk about what the options look like, I just want to check in — how are you doing with what I've just told you?",
    tip: "The instinct to immediately move into treatment options is understandable, but most clients need a moment to absorb the diagnosis first. Asking 'how are you doing with what I've just told you?' is one of the most powerful things a vet can say — it hands control back to the client.",
    quizOptions: [
      { text: "\"The results show a grade III mast cell tumour. This is an aggressive cancer and the prognosis is guarded. We should discuss surgery, chemotherapy, and palliative options.\"", correct: false, explanation: "Too much clinical information delivered too quickly. The client hasn't had a moment to absorb the diagnosis before being presented with a list of complex options." },
      { text: "\"I'm afraid the news isn't what we were hoping for. Max has a type of cancer called a mast cell tumour — it's one that we need to take seriously. I know that's hard to hear. How are you doing?\"", correct: true, explanation: "Clear, honest, human. Delivers the diagnosis in plain language, acknowledges the emotional weight, and creates space before moving to next steps." },
      { text: "\"Try not to worry too much — there are lots of treatment options and many dogs do very well. Let me tell you what we can do.\"", correct: false, explanation: "False reassurance minimises the diagnosis and doesn't give the client permission to feel what they're feeling. Jumping to optimism before acknowledging the difficulty is a common but unhelpful pattern." },
      { text: "\"The biopsy was positive for malignancy. We'll need to refer you to an oncologist.\"", correct: false, explanation: "Clinically accurate but delivered without any emotional acknowledgement. 'Positive for malignancy' is also jargon that many clients won't immediately understand." }
    ]
  },
  {
    id: "vc-2",
    roles: ["vet"],
    category: "vet-client",
    title: "Quality of life and end-of-life discussion",
    difficulty: "advanced",
    tags: ["end of life", "euthanasia", "quality of life"],
    clientMessage: "He's still eating a little bit and he still wags his tail when he sees me. Doesn't that mean he still has quality of life?",
    context: "You are the veterinarian. Rufus is a 14-year-old dog with advanced heart failure and suspected metastatic cancer. He is on maximum medication. His owner Mr Okafor is struggling to accept that the time may be coming. At the last visit two weeks ago you raised end-of-life care gently. Today Rufus is clearly more uncomfortable — his breathing is laboured and he can barely walk. Mr Okafor is asking whether tail wags and eating mean his dog is okay.",
    keyPrinciples: [
      "Validate what the client is seeing — tail wags are real and meaningful",
      "Gently distinguish between moments of connection and overall quality of life",
      "Never tell a client when to make the decision — but help them understand what they're looking at",
      "Use the 'more good days than bad days' framework if helpful",
      "Make clear that choosing euthanasia is an act of love, not giving up"
    ],
    modelAnswer: "Those moments are real — when Rufus wags his tail at you, that's genuine. That connection between you hasn't gone away, and it matters. But I want to help you see the full picture alongside those moments, because I think that's what Rufus needs from us right now. Today, his breathing is working very hard just to keep him comfortable. He's struggling with things that used to be easy. The question I'd gently invite you to sit with isn't whether there are still good moments — there clearly are — but whether, overall, he's having more comfortable days than difficult ones. There's no right answer today, and this decision is yours. But I want to make sure you have the full picture so you can make it with confidence.",
    tip: "The 'tail wag' argument is one of the most common and most human responses to approaching end-of-life. The most effective response acknowledges it as real before gently expanding the client's view — never dismissing it or contradicting it directly.",
    quizOptions: [
      { text: "\"A tail wag doesn't mean he has quality of life — you need to look at the whole picture. Rufus is suffering.\"", correct: false, explanation: "Too blunt and dismissive of something the client genuinely finds meaningful. Telling a client their pet is 'suffering' without building to it can cause them to shut down or become defensive." },
      { text: "\"Those moments are real and they matter. But I'd like us to look at the full picture together — overall, is he having more comfortable days than hard ones?\"", correct: true, explanation: "Validates the client's observation, then gently widens the lens without telling them what to conclude. Empowering rather than prescriptive." },
      { text: "\"If he's still eating and wagging his tail, then you're right — there's still quality of life there. Let's continue with the current medication.\"", correct: false, explanation: "Colluding with the client's wishful thinking when the clinical picture clearly doesn't support it is a disservice to the animal. The vet has a responsibility to give an honest assessment." },
      { text: "\"I think it's time to consider euthanasia. The kindest thing you can do for Rufus now is to let him go.\"", correct: false, explanation: "Even when this may be true, telling a client it's time — rather than helping them arrive at that understanding themselves — removes their agency and can cause lasting guilt." }
    ]
  },
  {
    id: "vc-3",
    roles: ["vet"],
    category: "vet-client",
    title: "Disclosing a complication honestly",
    difficulty: "advanced",
    tags: ["error disclosure", "honesty", "post-surgical"],
    clientMessage: "How did the surgery go? Is Luna okay?",
    context: "You are the surgeon. Luna, a 4-year-old cat, came in for a routine spay. During the procedure there was an inadvertent nick to the ureter which was identified and repaired intraoperatively. Luna is stable and recovering well, but will need monitoring and may need further intervention. The owner has arrived to check on her. This complication must be disclosed honestly.",
    keyPrinciples: [
      "Disclose complications promptly and honestly — do not minimise or obscure",
      "Start with the patient's current status to reduce immediate panic",
      "Take responsibility without excessive self-flagellation",
      "Explain clearly what happened, what was done about it, and what happens next",
      "Give the client space to react — they may be angry, and that is reasonable"
    ],
    modelAnswer: "Luna is stable and recovering — I want to start with that because I know it's what matters most to you. But I do need to be completely honest with you about how the surgery went, and I want to do that now. During the procedure, there was an injury to one of the tubes that connects the kidney to the bladder — called the ureter. It happened during surgery and we identified it and repaired it straight away. Luna is on pain relief and we're monitoring her closely. This is something that can occur in abdominal surgery and I want you to understand exactly what happened, what we did about it, and what we'll be watching for. I'm sorry this happened — I want to make sure you have all the information and that we look after Luna as well as we possibly can from here.",
    tip: "The instinct to soften or delay difficult disclosure is understandable but wrong. Clients who feel they weren't told the full truth — even if the outcome is fine — lose trust permanently. Start with current status, then move to what happened, then what was done, then what's next. This sequence reduces panic and gives the disclosure a clear shape.",
    quizOptions: [
      { text: "\"Luna is stable and recovering. I do need to be honest with you — there was a complication during surgery. I identified it and repaired it at the time, and I want to walk you through exactly what happened.\"", correct: true, explanation: "Leads with reassurance, commits to transparency immediately, and sets up a structured disclosure. This is the right sequence." },
      { text: "\"The surgery went well overall — there was a small issue but we dealt with it and she's fine now.\"", correct: false, explanation: "'Small issue' and 'she's fine' minimise what happened and don't give the client the full picture. If the client later finds out the true extent, the trust damage is severe." },
      { text: "\"I'm so sorry — I made a mistake during surgery and injured Luna's ureter. I feel terrible about this.\"", correct: false, explanation: "Honesty is right, but centring your own feelings ('I feel terrible') puts the emotional burden on the client. The focus should be on Luna and what was done to help her." },
      { text: "\"There were some expected intraoperative findings that required management — everything is under control.\"", correct: false, explanation: "Euphemistic language designed to obscure rather than inform. 'Expected intraoperative findings' is not how a complication should be described to a client." }
    ]
  },
  {
    id: "vc-4",
    roles: ["vet"],
    category: "vet-client",
    title: "Client refuses recommended treatment",
    difficulty: "intermediate",
    tags: ["clinical disagreement", "autonomy", "consent"],
    clientMessage: "I've done my research online and I really don't want to give him steroids. I've read they have terrible side effects and I'd rather try a natural approach first.",
    context: "You are the veterinarian. Bruno is a 5-year-old German Shepherd with severe immune-mediated haemolytic anaemia (IMHA) — a serious, potentially life-threatening condition. Corticosteroids are the first-line treatment and delay significantly worsens prognosis. The owner has become convinced by online sources that steroids are harmful and wants to try herbal supplements instead. You need to address this without alienating the client.",
    keyPrinciples: [
      "Acknowledge the client's concern — steroid side effects are real and worth discussing",
      "Don't dismiss online research — engage with it respectfully",
      "Be clear about the clinical stakes without using fear as manipulation",
      "Ultimately respect autonomy — but ensure fully informed consent",
      "Document the conversation and the client's decision carefully"
    ],
    modelAnswer: "I really appreciate that you've been researching this — it tells me how much you care about Bruno. And you're right that steroids do have side effects, and in some situations I'd be cautious about them too. But I want to be honest with you about why I'm recommending them strongly here, because this is a different situation. Bruno's immune system is attacking his own red blood cells right now, and without treatment to stop that process quickly, we could be in a very serious position within days. The steroids aren't a first choice because they're convenient — they're the only treatment we know works fast enough in this condition. I'd feel I wasn't doing right by Bruno or by you if I didn't tell you that clearly. Can we talk through the side effects specifically? Some of them can be managed, and knowing what to watch for might make this feel less daunting.",
    tip: "The refusal of recommended treatment is one of the hardest conversations in veterinary medicine. The key is to engage with the client's concern genuinely before restating your recommendation — not to dismiss it. A client who feels heard is far more likely to reconsider than one who feels overridden.",
    quizOptions: [
      { text: "\"I understand your concern about steroids — they do have side effects. But I need you to understand that in Bruno's case, the risk of not treating is much greater than the risk of treatment. Can we talk through what the side effects actually look like?\"", correct: true, explanation: "Acknowledges the concern, is honest about stakes without catastrophising, and moves toward a constructive conversation about the specific worry." },
      { text: "\"I'm afraid the internet isn't a reliable source for medical advice. Steroids are the only option here.\"", correct: false, explanation: "Dismissing the client's research as unreliable immediately puts them on the defensive. Even if the information they found was flawed, this approach closes the conversation down." },
      { text: "\"If you'd prefer to try natural remedies first, we can monitor Bruno and see how he responds.\"", correct: false, explanation: "In a life-threatening condition like IMHA, agreeing to delay evidence-based treatment to try unproven alternatives is not appropriate. This is a failure of the vet's duty of care." },
      { text: "\"That's completely your choice — I'll make a note that you've declined the recommended treatment.\"", correct: false, explanation: "While documentation is correct, simply acquiescing without ensuring the client is fully informed of the consequences is a failure of informed consent. The vet has an obligation to communicate the clinical stakes clearly." }
    ]
  }
];

// ── TECH TO CLIENT ──
const techScenarios = [
  {
    id: "tc-1",
    roles: ["tech"],
    category: "tech-client",
    title: "Relaying a diagnosis from the vet",
    difficulty: "intermediate",
    tags: ["communication relay", "diagnosis", "scope of practice"],
    clientMessage: "So what does the vet think is wrong with him? Can you tell me?",
    context: "You are a veterinary technician. The vet has examined Pip, a rabbit with GI stasis, and has asked you to prepare the treatment plan and discharge the patient while they move to the next consult. The vet has briefed you on the diagnosis and treatment. The owner is asking you to explain what the vet found. You need to relay this clearly without going beyond your scope of practice.",
    keyPrinciples: [
      "You can relay the diagnosis the vet has given — this is within your scope",
      "Use plain English and avoid clinical jargon without explanation",
      "Be clear that you are passing on what the vet has told you — not offering your own diagnosis",
      "If the client has questions beyond the diagnosis, offer to get the vet",
      "Don't guess or speculate about anything you're uncertain about"
    ],
    modelAnswer: "Absolutely — Dr [name] has asked me to go through everything with you. Pip has what we call GI stasis — that's when the digestive system slows down or stops moving. In rabbits this is actually quite serious, but the good news is we caught it and we have a treatment plan ready to go. I'll walk you through exactly what we're doing and what you'll need to do at home. If anything comes up that you'd like to ask the vet directly, I'll make sure that happens before you leave.",
    tip: "Always attribute the diagnosis to the vet by name — 'Dr [name] has found...' rather than 'we think...' or 'it looks like...'. This keeps your role clear and maintains the client's confidence in the clinical team. Never be afraid to say 'that's a great question for the vet — let me get them for you'.",
    quizOptions: [
      { text: "\"Dr [name] has diagnosed Pip with GI stasis — that's when the gut slows down or stops. It can be serious in rabbits, but we have a treatment plan ready. Let me walk you through it, and if you have questions for the vet I'll make sure you get to speak with them.\"", correct: true, explanation: "Attributes the diagnosis correctly, explains it in plain language, sets up next steps, and offers access to the vet for further questions." },
      { text: "\"I think it's probably GI stasis based on what I saw — the vet will confirm. Here's what we're going to do.\"", correct: false, explanation: "'I think' and 'based on what I saw' suggests the tech is forming their own diagnosis, which is outside their scope and could undermine confidence in the clinical team." },
      { text: "\"I'm not really able to discuss the diagnosis — you'll need to speak with the vet about that.\"", correct: false, explanation: "Unnecessarily restrictive. Relaying a confirmed diagnosis the vet has asked you to communicate is entirely within a tech's role." },
      { text: "\"Pip has GI stasis. It's basically when the gut stops working. Rabbits can die from this quite quickly so it's important we act fast.\"", correct: false, explanation: "The information isn't wrong but the delivery — particularly 'can die from this quite quickly' without context or reassurance — is likely to cause unnecessary panic without being constructive." }
    ]
  },
  {
    id: "tc-2",
    roles: ["tech"],
    category: "tech-client",
    title: "Client is rude and dismissive to tech staff",
    difficulty: "advanced",
    tags: ["respect", "boundaries", "professionalism"],
    clientMessage: "I don't want to deal with a nurse — I want to speak to the actual vet. You probably don't even know what you're talking about.",
    context: "You are a registered veterinary technician with five years of experience. You have been asked by the vet to take a blood sample from a client's cat and explain the pre-anaesthetic bloodwork process. The client is dismissive and has just told you they don't want to deal with you and questioned your competence. The vet is currently in surgery and not available.",
    keyPrinciples: [
      "Stay calm — do not react defensively or match the client's energy",
      "Correct the misunderstanding about your role clearly but without arrogance",
      "Acknowledge the client's preference while being honest about what's possible right now",
      "Maintain your professional boundaries — you don't have to absorb rudeness",
      "Offer a path forward that works for everyone"
    ],
    modelAnswer: "I completely understand wanting to speak with the vet directly, and I'll make sure that happens. I should let you know that I'm a registered veterinary technician — I work closely with Dr [name] and this is something they've specifically asked me to take care of. Dr [name] is in surgery right now, but if you have questions after we're done that you'd prefer to put to them directly, I'll arrange that. In the meantime, can I take a few minutes to explain what I'll be doing and why?",
    tip: "Correcting a client's misconception about your role is professional and appropriate — but do it once, briefly, and then move forward. Spending too long defending your credentials shifts focus away from the patient. The goal is to keep the appointment moving while leaving the client feeling heard.",
    quizOptions: [
      { text: "\"I understand — I'll let Dr [name] know you'd like to speak with them directly. They're in surgery right now, but I'm a registered vet tech and this is something they've asked me to handle. I'll make sure you have a chance to speak with them afterwards.\"", correct: true, explanation: "Calm, clear, professional. States credentials without being defensive, acknowledges the preference, offers a path forward." },
      { text: "\"I'm actually just as qualified to do this as the vet. You'll have to deal with me.\"", correct: false, explanation: "Defensive and combative. Even if frustration is understandable, this approach escalates the situation and doesn't serve the client or the patient." },
      { text: "\"Of course — I'll go and get the vet for you right away.\"", correct: false, explanation: "Pulls the vet out of surgery unnecessarily and doesn't correct the client's misunderstanding about the tech's role. It also sets a precedent that dismissiveness is rewarded." },
      { text: "\"I'm sorry you feel that way. I'll do my best.\"", correct: false, explanation: "Apologising for the client's rudeness without addressing it signals that the behaviour is acceptable. 'I'll do my best' also unnecessarily undermines confidence in your own competence." }
    ]
  },
  {
    id: "tc-3",
    roles: ["tech"],
    category: "tech-client",
    title: "Post-operative discharge instructions — overwhelmed client",
    difficulty: "intermediate",
    tags: ["discharge", "instructions", "clarity"],
    clientMessage: "I'm trying to listen but there's just so much information — I'm not sure I'm going to remember all of this.",
    context: "You are the veterinary technician giving discharge instructions to a client whose dog Biscuit has just had an orthopaedic surgery — a tibial plateau levelling osteotomy (TPLO). The recovery protocol is detailed: strict rest for 8 weeks, wound checks, physiotherapy, multiple medications at different intervals, and follow-up appointments. The client is visibly anxious and has just told you they're struggling to take it all in.",
    keyPrinciples: [
      "Stop and acknowledge — don't keep delivering information when the client signals they're overwhelmed",
      "Chunk the information into the most critical points first",
      "Always provide written instructions — never rely on verbal alone",
      "Invite questions rather than asking 'does that make sense?'",
      "Offer a follow-up call for when questions arise at home"
    ],
    modelAnswer: "Let's slow right down — thank you for telling me that, because the last thing I want is for you to go home feeling unsure. Here's what I want you to know: all of this is written down in the discharge notes I'm going to give you, so you don't need to memorise anything right now. Let me just walk you through the three things that matter most for tonight, and we can cover the rest more slowly. And please know — you can call us any time over the next few days if something comes up that you're not sure about. We'd rather you ring than worry.",
    tip: "The phrase 'does that make sense?' almost always gets a yes, even when it doesn't. Instead, try 'what questions do you have?' or 'what feels most unclear?' — these open-ended questions surface real confusion rather than false reassurance.",
    quizOptions: [
      { text: "\"Let's slow down — you don't need to remember everything right now because it's all written in the discharge notes. Let me just cover the most important things for tonight, and then you can take the rest home to read.\"", correct: true, explanation: "Responsive to the client's signal, reduces anxiety by reminding them they have written support, and prioritises the most critical information." },
      { text: "\"I know it's a lot — but it's really important you understand all of this, so let me keep going.\"", correct: false, explanation: "Continues to deliver information despite the client clearly signalling they're overwhelmed. Information delivered to an overwhelmed person is rarely retained." },
      { text: "\"Don't worry — most of this is just standard stuff. The main thing is the medication.\"", correct: false, explanation: "Minimising the complexity of a detailed recovery protocol isn't appropriate and could lead to important steps being missed." },
      { text: "\"Would you like me to call you tomorrow to go through it again?\"", correct: false, explanation: "While a follow-up call is a good idea, it doesn't address the immediate problem — the client is still overwhelmed right now and needs the immediate information chunked and clarified before they leave." }
    ]
  },
  {
    id: "tc-4",
    roles: ["tech"],
    category: "tech-client",
    title: "Discussing restraint and consent with an anxious owner",
    difficulty: "intermediate",
    tags: ["restraint", "consent", "anxiety"],
    clientMessage: "I don't want you to hurt her — she gets really scared at the vet. Can I stay with her while you do it?",
    context: "You are the veterinary technician about to collect a blood sample from a cat named Cleo, who is known to be fractious and fearful. The owner is anxious and wants to remain in the room. Your clinic's policy allows owners to stay if safe, but Cleo's file notes that she has previously scratched staff and becomes more difficult when the owner is present. You need to discuss this sensitively.",
    keyPrinciples: [
      "Validate the owner's concern — fear-free handling is a genuine priority",
      "Be honest about what you've observed with Cleo previously",
      "Explain the reasoning behind your approach — don't just assert policy",
      "Give the owner agency where possible",
      "Never make an owner feel excluded without explanation"
    ],
    modelAnswer: "I completely understand — your instinct to be there for her is a loving one. I want to be honest with you about what we've found with Cleo previously, because I think it'll help explain our approach. When we've had owners in the room, Cleo actually tends to become more anxious — she seems to pick up on your worry, and then she feels she needs to protect you, which makes the whole experience harder for her. Our goal is to make this as quick and calm as possible for her. What I'd suggest is that we take her through, do this as gently and efficiently as we can, and bring her straight back to you. If at any point you'd like to step in or have questions, I'll come and get you. Does that feel okay?",
    tip: "Owners who want to stay are motivated by love, not obstruction. Explaining why their presence might inadvertently make things harder for their pet — rather than citing 'policy' — is far more persuasive and far kinder.",
    quizOptions: [
      { text: "\"I hear you — and I want to explain why we usually recommend owners wait outside for this one. Cleo has shown us that she becomes more unsettled when her owner is present, possibly because she picks up on anxiety. We'll be as quick and gentle as possible and bring her straight back.\"", correct: true, explanation: "Validates the concern, gives a genuine clinical reason rather than citing policy, and maintains trust by being transparent." },
      { text: "\"I'm sorry, clinic policy doesn't allow owners in the treatment area.\"", correct: false, explanation: "Citing policy without explanation feels dismissive and doesn't give the owner any understanding of why. It's also not the full truth — it's about Cleo's welfare, not just policy." },
      { text: "\"Of course you can stay — come on through.\"", correct: false, explanation: "If the clinical notes indicate Cleo is more difficult with the owner present, agreeing without discussion could make the procedure harder and more stressful for the cat." },
      { text: "\"She'll be fine — we do this all the time.\"", correct: false, explanation: "Dismisses the owner's genuine concern and doesn't address the question. Reassurance without explanation isn't comforting — it's patronising." }
    ]
  }
];

// ── TEAM MEMBER TO TEAM MEMBER ──
const teamScenarios = [
  {
    id: "tm-1",
    roles: ["reception", "tech", "vet"],
    category: "team",
    title: "Raising a concern about a colleague's decision",
    difficulty: "advanced",
    tags: ["speaking up", "patient safety", "professional courage"],
    clientMessage: "Can you just prep the cat for surgery — Dr [name] said to go ahead.",
    context: "You are a veterinary technician. A colleague (junior vet) has asked you to prepare a cat for a routine procedure. While reviewing the file, you notice the pre-anaesthetic bloodwork shows a significantly elevated creatinine level that you don't think has been addressed. The vet has already moved on and the owner has consented. You are not sure if the vet noticed the result. You need to raise this concern before proceeding.",
    keyPrinciples: [
      "Speak up — patient safety is everyone's responsibility regardless of hierarchy",
      "Raise the concern directly and specifically — not vaguely",
      "Use a non-accusatory approach — assume oversight, not negligence",
      "Be clear about what you need: confirmation, not permission to delay indefinitely",
      "Document that you raised the concern"
    ],
    modelAnswer: "Before I start the prep, I want to flag something — I was just reviewing the bloodwork and noticed the creatinine is elevated at [value]. I wasn't sure if that had been factored into the anaesthetic plan. I just want to make sure we've considered it before we go ahead — can I grab you for thirty seconds to look at it together?",
    tip: "The SBAR framework is useful here: Situation (what's happening), Background (what the file shows), Assessment (your concern), Recommendation (what you're asking for). You don't need to suggest the vet missed something — you just need to make sure the information is in front of them before you proceed.",
    quizOptions: [
      { text: "\"Before I start, can I just check something with you? The bloodwork shows an elevated creatinine and I want to make sure that's been factored in to the plan — could we look at it together quickly?\"", correct: true, explanation: "Specific, non-accusatory, framed as a collaborative check rather than a challenge. Gets the right information in front of the right person without creating conflict." },
      { text: "\"I don't think we should do this surgery — the creatinine is too high.\"", correct: false, explanation: "Making a unilateral clinical determination is outside the tech's scope. The concern is valid but the approach oversteps — the goal is to get the vet to review the result, not to make the call yourself." },
      { text: "\"I'll just prep the cat — the vet said to go ahead so I'm sure it's fine.\"", correct: false, explanation: "Deferring to hierarchy when there is a genuine patient safety concern is not appropriate. Every team member has a responsibility to speak up." },
      { text: "\"Did you actually look at the bloodwork? The creatinine is really high.\"", correct: false, explanation: "The implied accusation ('did you actually look') is likely to put the vet on the defensive. The concern is right but the framing is counterproductive." }
    ]
  },
  {
    id: "tm-2",
    roles: ["reception", "tech", "vet"],
    category: "team",
    title: "Giving feedback to a junior team member after a mistake",
    difficulty: "advanced",
    tags: ["feedback", "leadership", "learning"],
    clientMessage: "I know, I know — I already feel terrible about it.",
    context: "You are a senior veterinary technician. A new graduate tech (Alex, 3 months in) has just made an error — they gave a patient the correct medication but at double the prescribed dose. The patient is being monitored and is currently stable. Alex discovered the error themselves, reported it immediately, and is now visibly distressed. You need to have a debrief conversation with them.",
    keyPrinciples: [
      "Acknowledge that reporting the error immediately was the right thing to do",
      "Separate the person from the mistake — Alex is not a bad tech for making an error",
      "Don't minimise the mistake, but don't catastrophise it either",
      "Focus the conversation on learning and systems, not blame",
      "Check in on Alex's wellbeing — errors are emotionally hard for the person who made them"
    ],
    modelAnswer: "I know you do, and I want you to know that the fact that you caught it and told us immediately — that matters enormously. That's exactly what we need people to do. Errors happen in clinical medicine — they happen to experienced staff too, and the difference between a bad outcome and a managed one is almost always whether it gets caught and reported quickly. You did that. Now — once we know the patient is fully stable, I'd like us to sit down and look at what happened, not to assign blame, but so we can understand if there's something in our process that made this easier to happen. How are you doing right now?",
    tip: "Second victim syndrome is real — staff who make clinical errors often suffer significant psychological distress. A senior team member's first response sets the tone for how the person relates to mistakes for the rest of their career. The goal is to build someone who reports errors and learns from them, not someone who hides them out of fear.",
    quizOptions: [
      { text: "\"Reporting it straight away was the right call — that takes courage. Once the patient is stable, let's sit down and look at what happened together, not to assign blame but to make sure it can't happen the same way again. How are you doing?\"", correct: true, explanation: "Acknowledges the correct behaviour, normalises errors in clinical settings, focuses on systems and learning, and checks in on the person's wellbeing." },
      { text: "\"This is a serious mistake and you need to understand that. We'll need to document this and I'll have to tell the vet.\"", correct: false, explanation: "Documentation is necessary, but leading with this when the person is already distressed is punitive rather than constructive. It also doesn't acknowledge that they did the right thing by reporting immediately." },
      { text: "\"Don't be so hard on yourself — these things happen. The patient is fine, so let's just move on.\"", correct: false, explanation: "Minimising a medication error isn't appropriate even when the outcome is good. There's a missed opportunity to learn and to reinforce reporting culture." },
      { text: "\"I'm going to need you to write up exactly what happened and why.\"", correct: false, explanation: "While incident reporting is important, asking a distressed junior to immediately write a report without any supportive conversation first is likely to increase their anxiety and produce a less accurate account." }
    ]
  },
  {
    id: "tm-3",
    roles: ["reception", "tech", "vet"],
    category: "team",
    title: "Conflict between front desk and clinical staff",
    difficulty: "intermediate",
    tags: ["conflict", "teamwork", "communication"],
    clientMessage: "The receptionists keep booking appointments without checking with us first and it's making the clinical day impossible.",
    context: "You are the clinic manager. A senior vet tech has come to you frustrated — they feel the reception team is routinely overbooking the surgical list and booking complex consults back-to-back without checking clinical capacity. This is a recurring tension. The reception team lead has previously said the clinical staff don't communicate appointment requirements clearly. You need to navigate this without taking sides.",
    keyPrinciples: [
      "Listen fully before responding — don't rush to solutions",
      "Acknowledge the frustration without validating blame toward the other team",
      "Reframe from 'them vs us' to a shared problem to solve together",
      "Be honest if there are communication gaps on both sides",
      "Commit to a concrete next step — not just sympathy"
    ],
    modelAnswer: "Thank you for coming to me — I can hear how much this is affecting the clinical day and I take that seriously. I want to understand it fully before I do anything, so can you give me a couple of specific examples from this week? What I'm also hearing — and I want to be transparent with you — is that the reception team has raised something similar from their side: that they don't always have clear guidance on what appointments need what time or what requirements. I don't think either team is trying to make the other's day harder. What I'd like to do is get both teams in a room together, not to assign blame, but to build a system that actually works for everyone. Would you be willing to be part of that conversation?",
    tip: "Inter-team conflict almost always has legitimate frustrations on both sides. A manager who listens only to the person in front of them and acts on that is likely to make the situation worse. The goal is to move from blame to system-level problem-solving — which requires both teams at the table.",
    quizOptions: [
      { text: "\"I hear you — and I want to understand it properly. Can you give me some specific examples? I also want to be transparent: the reception team has raised a concern from their side too. I'd like to get both teams together to build something that works — would you be part of that?\"", correct: true, explanation: "Listens, takes it seriously, is transparent about the other perspective, and proposes a systemic solution rather than a quick fix." },
      { text: "\"You're right — I'll speak to the reception manager and make sure they understand they need to check with clinical before booking.\"", correct: false, explanation: "Acting on one side of the story without understanding the full picture is likely to create more resentment. It also frames reception as the problem without examining whether communication from the clinical side could also improve." },
      { text: "\"I understand your frustration but the reception team is doing their best — try to be patient with them.\"", correct: false, explanation: "Dismisses a legitimate operational concern and asks the person to simply tolerate a problem rather than solving it." },
      { text: "\"Can you send me an email with the details and I'll look into it?\"", correct: false, explanation: "Deflecting to email when someone has come to you with an urgent interpersonal concern signals that you're not treating it as a priority." }
    ]
  },
  {
    id: "tm-4",
    roles: ["reception", "tech", "vet"],
    category: "team",
    title: "Speaking up in a team meeting",
    difficulty: "intermediate",
    tags: ["assertiveness", "team dynamics", "speaking up"],
    clientMessage: "Does anyone have any concerns about the new appointment system before we roll it out next week?",
    context: "You are a receptionist attending a team meeting. The practice manager has just asked if anyone has concerns about a new appointment booking system being rolled it out next week. You have significant reservations — you've used a similar system before and found it created confusion for clients and slowed down check-in. Several senior staff have already said it looks good. You feel nervous about speaking up against the consensus, but your experience is directly relevant.",
    keyPrinciples: [
      "Your experience and perspective have value — speaking up is part of being a good team member",
      "Frame concerns constructively — not as opposition but as something worth considering",
      "Be specific — a concrete example is more persuasive than a general worry",
      "You don't need to resolve the issue in the meeting — raising it is enough",
      "Acknowledge what's positive before raising what concerns you"
    ],
    modelAnswer: "I do have one concern I'd like to raise, if that's okay. I've worked with a similar system before, and one thing that came up was that clients found the automated confirmation messages confusing — they weren't always clear about what they needed to bring or whether the appointment was confirmed. It led to a few no-shows and some frustration at check-in. I might be wrong that this system has the same issue, but I wanted to flag it in case it's worth testing with a small group first before the full rollout. I'm happy to help with that if it would be useful.",
    tip: "Speaking up in a team meeting when the group appears to have already reached a consensus takes courage. The key is to be specific rather than vague, to frame the concern as 'something worth considering' rather than 'I think this is wrong', and to offer to be part of the solution rather than just raising a problem.",
    quizOptions: [
      { text: "\"I do have a concern — I've seen a similar system cause confusion for clients around confirmation messages, which led to no-shows. It might be worth piloting it with a small group first. I'm happy to help with that.\"", correct: true, explanation: "Specific, experience-based, constructive, and solution-oriented. Raises the concern without blocking progress." },
      { text: "\"I don't think this system is going to work — I've seen it fail before.\"", correct: false, explanation: "Too absolute and not constructive. 'I've seen it fail' without specifics is hard for the team to engage with, and the framing is oppositional rather than collaborative." },
      { text: "\"No concerns from me — it looks good.\"", correct: false, explanation: "Withholding relevant experience to avoid conflict is a disservice to the team. If your experience suggests a risk, raising it is part of your responsibility as a team member." },
      { text: "\"I'm not sure this is the right time to bring this up, but I'm a bit worried about the client communications side of things.\"", correct: false, explanation: "Undermining your own contribution before you've even made it ('I'm not sure this is the right time') reduces the impact of a valid concern. The meeting was specifically opened for this feedback." }
    ]
  }
];

export const scenarios = [...baseScenarios, ...vetScenarios, ...techScenarios, ...teamScenarios];
