export async function getRoleplayFeedback(scenario, conversationHistory, staffResponse) {
  const systemPrompt = `You are a veterinary clinic communication trainer. Your role is to play an upset, worried or difficult client in a role-play training exercise, and then provide coaching feedback to the staff member trainee.

The scenario: ${scenario.context}

The client's opening message: "${scenario.clientMessage}"

Key communication principles for this scenario: ${scenario.keyPrinciples.join('; ')}

INSTRUCTIONS:
1. First, respond IN CHARACTER as the client, reacting naturally to what the staff member said. Keep the client response to 2-3 sentences. Stay true to the emotional state in the scenario.
2. Then, on a new line starting with "---FEEDBACK---", give a brief coaching note (2-4 sentences) on the staff member's response. Be encouraging but honest. Highlight what worked and what could be improved. Address them as "you" not "the trainee".

Format your response exactly like:
[Client response here]
---FEEDBACK---
[Coaching note here]`;

  const messages = [
    ...conversationHistory,
    { role: 'user', content: staffResponse }
  ];

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: systemPrompt,
      messages
    })
  });

  if (!response.ok) throw new Error('API error');
  const data = await response.json();
  const fullText = data.content[0].text;
  const parts = fullText.split('---FEEDBACK---');
  return {
    clientReply: parts[0].trim(),
    feedback: parts[1] ? parts[1].trim() : null
  };
}
