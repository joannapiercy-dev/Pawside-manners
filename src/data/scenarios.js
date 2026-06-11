export const scenarios = [
  // ── Bad News ──
  {
    id: "bn-1",
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
  {
    id: "bn-3",
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

  // ── Difficult Clients ──
  {
    id: "dc-1",
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
    category: "costs",
    title: "Shocked by the bill",
    difficulty: "beginner",
    tags: ["billing", "transparency", "empathy"],
    clientMessage: "This can't be right. £480?! I thought it would be around £100. Nobody told me it was going to be this much.",
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
    category: "costs",
    title: "Client can't afford recommended treatment",
    difficulty: "advanced",
    tags: ["finance", "ethics", "compassion"],
    clientMessage: "The vet says Oscar needs surgery but I genuinely can't afford it. I feel terrible. I don't know what to do.",
    context: "A client is in tears at the desk. Their elderly cat has been diagnosed with a urinary blockage requiring surgery. The cost is £1,200. The client says they have no savings or credit.",
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
    modelAnswer: "Absolutely — and it's really good that you're asking. Based on what the vet has outlined, you're looking at roughly £180 to £350 depending on what the blood tests show and whether fluids are needed. Those are estimates, and we'd always call you before proceeding with anything that takes us above that range. Would you like me to put that in writing for you?",
    tip: "Always quote a range, not a number. And always confirm: 'We'll call you before doing anything beyond this estimate.'",
    quizOptions: [
      { text: "\"Great question. Based on what the vet has mentioned, the estimate is roughly £180–£350 depending on test results. We'd call you before going beyond that. Would you like it in writing?\"", correct: true, explanation: "Range-based, honest about variables, clear on consent process." },
      { text: "\"I can't really say — it depends on what they find.\"", correct: false, explanation: "Unhelpful. Even when uncertain, you can give a realistic range." },
      { text: "\"It'll probably be around £200.\"", correct: false, explanation: "A single estimate without caveats sets unrealistic expectations and can lead to billing disputes." },
      { text: "\"The vet handles all of that — I just do the bookings.\"", correct: false, explanation: "Receptionists are often the first point of contact for cost queries and should be able to explain estimates confidently." }
    ]
  },

  // ── Follow-up Calls ──
  {
    id: "fu-1",
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
  }
];

export const categories = [
  {
    id: "bad-news",
    label: "Delivering bad news",
    icon: "💙",
    iconBg: "#e8f4fb",
    description: "Handling diagnoses, prognosis conversations, and euthanasia appointments with care.",
    tagColor: "tag-teal"
  },
  {
    id: "difficult-clients",
    label: "Difficult clients",
    icon: "🛡️",
    iconBg: "#fdf0eb",
    description: "De-escalating conflict, managing complaints, and setting respectful boundaries.",
    tagColor: "tag-rust"
  },
  {
    id: "costs",
    label: "Costs & payment",
    icon: "💳",
    iconBg: "#fdf8ee",
    description: "Explaining invoices, discussing financial difficulties, and quoting for treatment.",
    tagColor: "tag-gold"
  },
  {
    id: "follow-up",
    label: "Follow-up calls",
    icon: "📞",
    iconBg: "#edf7f2",
    description: "Welfare checks, vaccination reminders, and post-visit outreach.",
    tagColor: "tag-green"
  },
  {
    id: "scheduling",
    label: "Scheduling & triage",
    icon: "📅",
    iconBg: "#f3f0fb",
    description: "Booking appointments, triaging urgency, and supporting anxious first-time clients.",
    tagColor: "tag-teal"
  }
];

// Note: the intoxicated client scenario is categorised under "difficult-clients"
// but tagged with "animal welfare" so it surfaces naturally in that section.
