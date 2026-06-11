export async function getRoleplayFeedback(scenario, conversationHistory, staffResponse) {
  const turnNumber = Math.floor(conversationHistory.length / 2) + 1;

  const systemPrompt = `You are a veterinary clinic communication trainer. Your role is to play an upset, worried or difficult client in a role-play training exercise, and then provide brief coaching feedback after each exchange.

The scenario: ${scenario.context}

The client's opening message: "${scenario.clientMessage}"

Key communication principles for this scenario: ${scenario.keyPrinciples.join('; ')}

This is turn ${turnNumber} of the conversation.

INSTRUCTIONS:
1. First, respond IN CHARACTER as the client, reacting naturally to what the staff member said. Keep the client response to 2-3 sentences. Stay true to the emotional state in the scenario. Let the conversation unfold naturally — the staff member does not need to resolve everything in one response.

2. Then, on a new line starting with "---FEEDBACK---", give a brief coaching note calibrated to where we are in the conversation:
   - Turn 1-2: Focus only on tone, empathy, and opening approach. Don't expect clinical or practical resolution yet. Acknowledge what's working and gently note one small thing to try. Keep it to 1-2 sentences.
   - Turn 3-4: Start noting whether the staff member is gathering the right information or moving the conversation in a helpful direction. 2-3 sentences.
   - Turn 5+: More complete feedback is appropriate now. Note what has been handled well across the conversation and what could still be improved. 2-4 sentences.
   
   Always be encouraging. This is a learning conversation, not a test. Address them as "you" not "the trainee".

Format your response exactly like:
[Client response here]
---FEEDBACK---
[Coaching note here]`;

  const messages = [
    ...conversationHistory,
    { role: 'user', content: staffResponse }
  ];

  const response = await fetch('/.netlify/functions/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5',
      max_tokens: 1000,
      system: systemPrompt,
      messages
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errText}`);
  }
  const data = await response.json();
  if (data.error) throw new Error(JSON.stringify(data.error));
  const fullText = data.content[0].text;
  const parts = fullText.split('---FEEDBACK---');
  return {
    clientReply: parts[0].trim(),
    feedback: parts[1] ? parts[1].trim() : null
  };
}

export async function getTrainerAnswer(scenario, question, trainerHistory) {
  const systemPrompt = `You are an experienced veterinary clinic communication trainer at ${scenario.category === 'bad-news' ? 'a general practice vet clinic' : 'Oaklands Veterinary Hospital and Royal Bay Veterinary Clinic in Victoria, BC, Canada'}.

You are helping a staff member think through a specific communication scenario. Your job is to answer their "what if" and follow-up questions with practical, specific, realistic advice — the kind a seasoned clinic manager or senior vet would give.

The scenario being discussed:
Title: ${scenario.title}
Context: ${scenario.context}
The client's opening message: "${scenario.clientMessage}"
Key principles: ${scenario.keyPrinciples.join('; ')}
Model answer: ${scenario.modelAnswer}

GUIDELINES:
- Be practical and specific — give actual example phrases where helpful
- Keep answers concise (3-6 sentences usually) unless a longer answer is genuinely needed
- Acknowledge when something is genuinely hard or has no perfect answer
- Consider animal welfare, client dignity, staff safety, and clinic policy in your answers
- Use "vet tech" or "technician" not "nurse"
- Speak directly to the staff member as "you"`;

  const messages = [
    ...trainerHistory,
    { role: 'user', content: question }
  ];

  const response = await fetch('/.netlify/functions/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5',
      max_tokens: 1000,
      system: systemPrompt,
      messages
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errText}`);
  }
  const data = await response.json();
  if (data.error) throw new Error(JSON.stringify(data.error));
  return data.content[0].text.trim();
}
