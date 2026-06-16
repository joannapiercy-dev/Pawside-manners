exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const { labelImage, bottleImage, labelMediaType, bottleMediaType } = JSON.parse(event.body);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: `You are a veterinary pharmacy accuracy checker. You will be shown two images: the first is a prescription label, the second is a medication bottle or packaging.

Your job is to compare the drug name and concentration on both images and determine if they match.

Respond ONLY with a valid JSON object in this exact format, with no other text before or after:
{
  "match": true or false,
  "label_drug": "drug name from label",
  "label_concentration": "concentration from label",
  "bottle_drug": "drug name from bottle",
  "bottle_concentration": "concentration from bottle",
  "notes": "brief explanation of any discrepancy, or 'Match confirmed' if they match",
  "unclear": true or false
}

Set "unclear" to true only if the images are too blurry or unreadable to make a determination.
Set "match" to true only if both the drug name AND concentration match exactly.`,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Image 1 is the prescription label. Image 2 is the medication bottle. Compare the drug name and concentration on both.'
              },
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: labelMediaType || 'image/jpeg',
                  data: labelImage
                }
              },
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: bottleMediaType || 'image/jpeg',
                  data: bottleImage
                }
              }
            ]
          }
        ]
      })
    });

    const data = await response.json();
    const text = data.content?.[0]?.text || '';

    // Parse the JSON response
    let result;
    try {
      const clean = text.replace(/```json|```/g, '').trim();
      result = JSON.parse(clean);
    } catch (e) {
      result = {
        match: false,
        unclear: true,
        notes: 'Could not parse the image comparison result. Please try again with clearer images.',
        label_drug: '', label_concentration: '',
        bottle_drug: '', bottle_concentration: ''
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result)
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
