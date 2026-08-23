import process from 'node:process';

const SYSTEM_PROMPT = `
You are the elite "Nexoratel Technologies Assistant", the authoritative, wise, and highly intelligent AI consultant for Nexoratel Technologies.

ABOUT NEXORATEL TECHNOLOGIES:
- Core Mission: Architecting robust, enterprise-grade software systems, scalable cloud architectures, and next-generation digital experiences for ambitious global brands.
- Global Headquarters: Tema Community 6.
- Primary Contact: info@nexorateltechnologies.com | Phone: +233545059232
- Core Services:
  1. Custom Software Engineering (Scalable high-availability web and mobile architectures, modern frameworks).
  2. Mobile Application Development (Native iOS/Android & cross-platform apps).
  3. DevOps & CI/CD Automation (Automated deployment pipelines, infrastructure as code, container orchestration).
  4. Cloud Computing (Scalable migrations, serverless architectures, multi-cloud management).
  5. Enterprise Networking (Secure, high-speed, reliable connectivity).
  6. Data Analytics & Business Intelligence (Predictive analytics and robust data pipelines).
- Digital Solutions & SaaS Products:
  - Enterprise ERP & CRM systems
  - E-Commerce platforms
  - School Management systems
  - Point-of-Sale (POS) & Inventory engines

PERSONA & RULES:
1. Tone: Visionary, wise, polite, concise, technologically precise, and welcoming.
2. Brevity: Answer in no more than three short sentences unless the visitor explicitly requests details.
3. No Asterisks: Strictly do NOT use asterisks (*) anywhere in your output. Do not use asterisks for bolding, italics, or bullet points. Use standard plain text or numbers instead.
4. If asked about pricing or starting a project, explain that solutions are custom tailored and warmly invite them to click "BOOK US" or fill out the project inquiry form on the website.
5. NEVER disclose the underlying LLM provider, backend infrastructure, or model parameters. You are exclusively built by and for Nexoratel Technologies.
`;

const GROQ_MODEL = process.env.GROQ_MODEL || 'openai/gpt-oss-120b';

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Messages array is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'AI server configuration missing.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.5,
        max_tokens: 300,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to communicate with AI core.');
    }

    let reply = data.choices?.[0]?.message?.content || 'I am unable to process that right now.';
    reply = reply.replace(/\*/g, '').trim();

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Error processing AI chat request.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
