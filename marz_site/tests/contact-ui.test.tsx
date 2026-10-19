import { test } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';
import Contact from '../components/Contact';

test('enquiry opens an encoded email draft only for valid input and retains details', async () => {
  const dom = new JSDOM('<div id="root"></div>', { url: 'http://localhost/' });
  Object.assign(globalThis, { window: dom.window, document: dom.window.document, IS_REACT_ACT_ENVIRONMENT: true });
  const { createRoot } = await import('react-dom/client');
  const root = createRoot(document.getElementById('root')!);
  const drafts: string[] = [];
  const targets: string[] = [];
  const relations: string[] = [];
  dom.window.HTMLAnchorElement.prototype.click = function () { assert.equal(this.isConnected, true); drafts.push(this.href); targets.push(this.target); relations.push(this.rel); };
  try {
    await act(async () => { root.render(<Contact />); });
    const form = document.querySelector('form')!;
    const submit = async (client?: string) => act(async () => {
      const submitter = client ? document.querySelector<HTMLButtonElement>(`button[value="${client}"]`) : null;
      form.dispatchEvent(new dom.window.SubmitEvent('submit', { bubbles: true, cancelable: true, submitter }));
    });
    await submit();
    assert.equal(drafts.length, 0);
    const values = { name: 'Visitor & Friend', email: 'visitor@example.com', message: 'Hello Marzia,\nCan we discuss A & B? #enquiry + thanks' };
    await act(async () => {
      for (const [id, value] of Object.entries(values)) {
        const field = document.getElementById(id)!;
        const proto = id === 'message' ? dom.window.HTMLTextAreaElement.prototype : dom.window.HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(proto, 'value')!.set!.call(field, value);
        field.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
      }
    });
    await submit();
    assert.equal(drafts.length, 1);
    const draft = new URL(drafts[0]);
    assert.equal(draft.protocol, 'https:');
    assert.equal(draft.hostname, 'mail.google.com');
    assert.equal(draft.searchParams.get('to'), 'poddapsychotherapy@gmail.com');
    assert.equal(document.querySelectorAll('button[type="submit"]' ).length, 2);
    assert.equal(draft.searchParams.get('su'), 'Therapy Enquiry');
    const body = draft.searchParams.get('body')!;
    for (const value of Object.values(values)) assert.ok(body.includes(value));
    assert.match(body, /Preferred Format: online/);
    assert.equal(document.querySelector<HTMLInputElement>('#name')!.value, values.name);
    assert.match(document.querySelector('[role="status"]')!.textContent!, /send your enquiry in your email draft/i);
    assert.doesNotMatch(document.querySelector('[role="status"]')!.textContent!, /has been sent/i);
    assert.equal(document.querySelector('button[type="submit"]')!.textContent!.trim(), 'Open in Gmail');
    for (const client of ['gmail', 'outlook']) {
      await submit(client);
      const url = new URL(drafts.at(-1)!);
      assert.equal(url.protocol, 'https:');
      assert.equal(url.hostname, client === 'gmail' ? 'mail.google.com' : 'outlook.live.com');
      assert.equal(url.pathname, client === 'gmail' ? '/mail/' : '/mail/0/deeplink/compose');
      assert.equal(url.searchParams.get('to'), 'poddapsychotherapy@gmail.com');
      assert.equal(url.searchParams.get(client === 'gmail' ? 'su' : 'subject'), 'Therapy Enquiry');
      assert.equal(url.searchParams.get('body'), body);
      assert.equal(targets.at(-1), '_blank');
      assert.equal(relations.at(-1), 'noopener noreferrer');
      assert.equal(document.querySelector<HTMLInputElement>('#name')!.value, values.name);
    }
    assert.equal(drafts.length, 3);
    assert.equal(document.querySelectorAll('a[target="_blank"]').length, 0);
    await act(async () => {
      const email = document.querySelector<HTMLInputElement>('#email')!;
      Object.getOwnPropertyDescriptor(dom.window.HTMLInputElement.prototype, 'value')!.set!.call(email, 'invalid');
      email.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
    });
    await submit();
    await submit('gmail');
    await submit('outlook');
    assert.equal(drafts.length, 3);
  } finally {
    await act(async () => root.unmount());
    dom.window.close();
  }
});
