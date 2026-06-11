# PawsideManners — Vet Clinic Communication Training App

A scenario-based training tool for veterinary clinic receptionists and new staff. Covers delivering bad news, difficult clients, costs and payment, follow-up calls, and scheduling.

---

## What's included

- **10 training scenarios** across 5 communication categories
- **3 training modes** per scenario: Read & study, Quiz, and AI role-play with instant feedback
- **Progress tracking** that saves in the browser
- **AI coaching** powered by Claude — staff type their response and get real feedback

---

## How to get it live (step-by-step for beginners)

You need three things: GitHub (to store your code), Netlify (to publish it as a website), and an Anthropic API key (so the role-play AI works).

---

### Step 1 — Put the code on GitHub

1. Go to [github.com](https://github.com) and create a free account if you don't have one.
2. Click the **+** button (top right) → **New repository**.
3. Name it `pawside-manners` (or anything you like). Leave it **Public**. Click **Create repository**.
4. On your computer, install [Git](https://git-scm.com/downloads) if you haven't already.
5. Open Terminal (Mac) or Command Prompt (Windows) and run:

```bash
cd path/to/this/folder        # navigate to where this project folder is
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/pawside-manners.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

---

### Step 2 — Publish on Netlify

1. Go to [netlify.com](https://netlify.com) and sign up for a free account (use "Sign up with GitHub" — easiest).
2. Click **Add new site** → **Import an existing project**.
3. Choose **GitHub**, then authorise Netlify to access your repositories.
4. Select `pawside-manners` from the list.
5. Leave all the build settings blank — this is a plain HTML/JS site.
6. Click **Deploy site**.

After about 30 seconds, Netlify will give you a live URL like `https://jolly-bananas-123.netlify.app`. That's your app!

---

### Step 3 — Add your Anthropic API key (for AI role-play)

The AI role-play feature needs an Anthropic API key. This is kept secret on Netlify — it never appears in your code.

1. Go to [console.anthropic.com](https://console.anthropic.com) and create an account.
2. Click **API Keys** → **Create key**. Copy it.
3. In Netlify, go to your site → **Site settings** → **Environment variables**.
4. Click **Add a variable**:
   - Key: `ANTHROPIC_API_KEY`
   - Value: paste your key
5. Save.

> **Important:** After adding the environment variable, you need to add a small Netlify serverless function so the API key stays hidden. See the "Securing your API key" section below.

---

### Securing your API key with a Netlify Function

To keep your API key secret, we route API calls through a Netlify function (a small server-side piece of code). Here's how:

1. Create a folder called `netlify/functions` inside your project.
2. Create a file called `netlify/functions/chat.js` with this content:

```javascript
export default async (request, context) => {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const body = await request.json();

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
};

export const config = { path: '/api/chat' };
```

3. Update `src/lib/api.js`: change the fetch URL from
   `https://api.anthropic.com/v1/messages`
   to
   `/api/chat`
   and remove the `headers` object (the function handles authentication).

4. Commit and push:
```bash
git add .
git commit -m "Add serverless function for secure API calls"
git push
```

Netlify will automatically redeploy.

---

### Step 4 — Share with your team

Once deployed, share the Netlify URL with your team. Anyone with the link can use it — no login required. Progress is saved individually in each person's browser.

---

## Customising scenarios

All scenarios are in `src/data/scenarios.js`. Each scenario has:
- `title` — what shows on the card
- `context` — the situation description
- `clientMessage` — what the client says
- `keyPrinciples` — bullet points for the study mode
- `modelAnswer` — the ideal staff response
- `tip` — trainer tip shown after revealing the answer
- `quizOptions` — array of 4 options, one `correct: true`

To add a scenario, copy an existing one, change the `id` to something unique, and add it to the array.

---

## Folder structure

```
/
├── index.html              # Entry point
├── netlify.toml            # Netlify config
├── src/
│   ├── main.js             # App router
│   ├── styles.css          # All styles
│   ├── data/
│   │   └── scenarios.js    # All training content
│   ├── lib/
│   │   ├── api.js          # Anthropic API calls
│   │   └── progress.js     # Progress tracking
│   └── pages/
│       ├── home.js         # Landing page
│       ├── modules.js      # Scenario list
│       ├── scenario.js     # Read/quiz/roleplay
│       └── dashboard.js    # Progress view
```
