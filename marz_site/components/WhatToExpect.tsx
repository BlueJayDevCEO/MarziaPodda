import React from 'react';

const steps = [
  {
    title: 'Initial Contact',
    content: 'Reach out via the contact form or email. I respond to all enquiries personally, usually within one to two working days.'
  },
  {
    title: 'Brief Consultation',
    content: 'We can arrange a free 15-minute phone call to discuss what brings you to therapy and ensure my approach is suitable for your needs.'
  },
  {
    title: 'Initial Assessment',
    content: 'A first session (online or in London N19) to explore your history and current situation in more depth before deciding to work together.'
  },
  {
    title: 'Ongoing Work',
    content: 'We agree on a regular time and frequency. Sessions are usually weekly, providing a consistent framework for deep psychological work.'
  }
];

const WhatToExpect: React.FC = () => {
  return (
    <section className="py-24 bg-brand-soft" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold mb-4">Practical Process</h2>
            <h3 className="text-4xl font-serif text-brand-text mb-8">What to Expect</h3>
            <p className="text-brand-text/70 leading-relaxed mb-10">
              The therapeutic journey is unique to every individual. We begin with a collaborative exploration of your needs and the pace that feels safe and productive for you.
            </p>
            <div className="space-y-5">
              <div className="p-6 bg-white rounded-2xl border border-brand-mist/50 shadow-sm group hover:border-brand-teal transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-2">Session Length</p>
                <p className="text-brand-text text-sm italic">Typically 50 minutes.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-brand-mist/50 shadow-sm group hover:border-brand-teal transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-2">Online Psychotherapy</p>
                <p className="text-brand-text text-sm italic">Online sessions are available, wherever you are.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-brand-mist/50 shadow-sm group hover:border-brand-teal transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-2">Fees</p>
                <p className="text-brand-text text-sm italic">Fees and arrangements are discussed and agreed in advance.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-brand-mist/50 shadow-sm group hover:border-brand-teal transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-2">Response Time</p>
                <p className="text-brand-text text-sm italic">I reply personally, usually within 1–2 working days.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative border-l border-brand-teal/20 ml-4 space-y-16">
              {steps.map((step, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-teal border-4 border-white shadow-sm" />
                  <h4 className="text-2xl font-serif text-brand-text mb-3">{step.title}</h4>
                  <p className="text-brand-text/70 leading-relaxed text-sm max-w-xl">{step.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <a
                href="#contact"
                className="inline-block border-b-2 border-brand-teal pb-1 text-xs uppercase tracking-widest text-brand-teal font-bold hover:text-brand-muted hover:border-brand-muted transition-all"
              >
                Arrange an initial consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;