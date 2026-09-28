const recipient = 'poddapsychotherapy@gmail.com';
const failure = 'Your enquiry could not be sent. Please try again or email poddapsychotherapy@gmail.com directly.';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Please submit the contact form using POST.' });
  }
  if (!/^application\/json(?:;|$)/i.test(req.headers['content-type'] || '')) {
    return res.status(415).json({ error: 'Please send JSON.' });
  }
  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid form data.' });
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({ error: 'Invalid form data.' });
  }
  if (body.website) return res.status(400).json({ error: 'Unable to submit this form.' });
  const limits = { name: 120, email: 254, format: 20, message: 5000 };
  const fields = {};
  for (const [key, limit] of Object.entries(limits)) {
    if (typeof body[key] !== 'string' || !body[key].trim() || body[key].length > limit) {
      return res.status(400).json({ error: 'Please complete all fields within the allowed length.' });
    }
    fields[key] = body[key].trim();
  }
  const { name, email, format, message } = fields;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(name) ||
      !['online', 'in-person', 'undecided'].includes(format)) {
    return res.status(400).json({ error: 'Please check your name, email and preferred format.' });
  }
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  // Fail closed if deployment configuration would redirect private enquiries.
  if (!apiKey || !from || (process.env.CONTACT_TO_EMAIL && process.env.CONTACT_TO_EMAIL !== recipient)) {
    return res.status(503).json({ error: failure });
  }
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from, to: [recipient], reply_to: email,
        subject: 'Website therapy enquiry',
        text: `Name: ${name}\nEmail: ${email}\nPreferred format: ${format}\n\nMessage:\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    const result = await response.json();
    if (!response.ok || !result.id) return res.status(502).json({ error: failure });
    return res.status(200).json({ success: true });
  } catch {
    // Never log private enquiry contents or provider credentials.
    return res.status(502).json({ error: failure });
  }
}
