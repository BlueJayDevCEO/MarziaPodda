import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/contact.js';

const valid = { name: 'Test visitor', email: 'visitor@example.com', format: 'online', message: 'Test enquiry', website: '' };
async function call(body = valid, method = 'POST', contentType = 'application/json') {
  const res = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(code) { this.code = code; return this; }, json(value) { this.body = value; return this; } };
  await handler({ method, headers: { 'content-type': contentType }, body }, res);
  return res;
}

test('contact delivery and failure boundaries', async (t) => {
  const originalFetch = globalThis.fetch;
  const previous = { ...process.env };
  let sent;
  process.env.RESEND_API_KEY = 'test-key';
  process.env.CONTACT_FROM_EMAIL = 'Website <website@example.com>';
  process.env.CONTACT_TO_EMAIL = 'poddapsychotherapy@gmail.com';
  globalThis.fetch = async (url, options) => {
    sent = { url, ...options, body: JSON.parse(options.body) };
    return { ok: true, json: async () => ({ id: 'test-message' }) };
  };
  t.after(() => { globalThis.fetch = originalFetch; process.env = previous; });

  await t.test('sends all fields to Marzia with visitor Reply-To', async () => {
    const res = await call();
    assert.equal(res.code, 200);
    assert.deepEqual(res.body, { success: true });
    assert.deepEqual(sent.body.to, ['poddapsychotherapy@gmail.com']);
    assert.equal(sent.body.reply_to, valid.email);
    for (const key of ['name', 'email', 'format', 'message']) assert.ok(sent.body.text.includes(valid[key]));
    assert.equal(sent.url, 'https://api.resend.com/emails');
    assert.equal(res.headers['Cache-Control'], 'no-store');
  });
  await t.test('rejects malformed, missing, oversized and spam fields before sending', async () => {
    sent = null;
    for (const body of [null, [], '{', { ...valid, name: '' }, { ...valid, email: 'invalid' }, { ...valid, email: 'a@b.com\r\nBcc:x@y.com' }, { ...valid, format: 'invalid' }, { ...valid, message: ' ' }, { ...valid, message: 'x'.repeat(5001) }, { ...valid, website: 'spam' }]) {
      assert.equal((await call(body)).code, 400);
    }
    assert.equal(sent, null);
    assert.equal((await call(valid, 'GET')).code, 405);
    assert.equal((await call(valid, 'POST', 'text/plain')).code, 415);
  });
  await t.test('missing secrets and wrong recipient fail closed', async () => {
    delete process.env.RESEND_API_KEY;
    assert.equal((await call()).code, 503);
    process.env.RESEND_API_KEY = 'test-key';
    process.env.CONTACT_TO_EMAIL = 'wrong@example.com';
    assert.equal((await call()).code, 503);
    process.env.CONTACT_TO_EMAIL = 'poddapsychotherapy@gmail.com';
  });
  await t.test('provider rejection, invalid responses and network failures never report success', async () => {
    for (const response of [ { ok: false, json: async () => ({ message: 'private provider detail' }) }, { ok: true, json: async () => ({}) }, { ok: true, json: async () => { throw new Error('Invalid JSON'); } } ]) {
      globalThis.fetch = async () => response;
      const res = await call();
      assert.equal(res.code, 502);
      assert.equal(res.body.success, undefined);
      assert.ok(!JSON.stringify(res.body).includes('private provider detail'));
    }
    globalThis.fetch = async () => { throw new Error('Timeout'); };
    assert.equal((await call()).code, 502);
  });
});
