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
  dom.window.HTMLAnchorElement.prototype.click = function () { drafts.push(this.href); };
  try {
    await act(async () => { root.render(<Contact />); });
    const form = document.querySelector('form')!;
    const submit = async () => act(async () => {
      form.dispatchEvent(new dom.window.Event('submit', { bubbles: true, cancelable: true }));
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
    assert.equal(draft.protocol, 'mailto:');
    assert.equal(draft.pathname, 'poddapsychotherapy@gmail.com');
    assert.deepEqual([...draft.searchParams.keys()], ['subject', 'body']);
    assert.equal(draft.searchParams.get('subject'), 'Therapy Enquiry');
    const body = draft.searchParams.get('body')!;
    for (const value of Object.values(values)) assert.ok(body.includes(value));
    assert.match(body, /Preferred Format: online/);
    assert.equal(document.querySelector<HTMLInputElement>('#name')!.value, values.name);
    assert.match(document.querySelector('[role="status"]')!.textContent!, /press|send your enquiry from your email app/i);
    assert.doesNotMatch(document.querySelector('[role="status"]')!.textContent!, /has been sent/i);
    assert.equal(document.querySelector('button[type="submit"]')!.textContent!.trim(), 'Open Email App');
    await act(async () => {
      const email = document.querySelector<HTMLInputElement>('#email')!;
      Object.getOwnPropertyDescriptor(dom.window.HTMLInputElement.prototype, 'value')!.set!.call(email, 'invalid');
      email.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
    });
    await submit();
    assert.equal(drafts.length, 1);
  } finally {
    await act(async () => root.unmount());
    dom.window.close();
  }
});
