import React from 'react';

const challenges = [
  {
    title: 'Feeling Stuck / Repeating Cycles',
    desc: 'Finding yourself in the same difficult situations or internal states despite wanting change.'
  },
  {
    title: 'Relationship Difficulties',
    desc: 'Exploring how early experiences and attachment styles influence how you relate to others today.'
  },
  {
    title: 'Anxiety and Low Mood',
    desc: 'Working through deep-seated feelings of dread, emptiness, or persistent emotional weight.'
  },
  {
    title: 'Transitions and Identity',
    desc: 'Navigating life changes, loss, or questioning your sense of self and purpose in the world.'
  },
  {
    title: 'Trauma and its impact',
    desc: 'Understanding how past trauma manifests in current emotional and physical symptoms.'
  },
  {
    title: 'Self-Understanding',
    desc: 'A desire for deeper insight into your inner world and a more authentic way of living.'
  }
];

const IsThisForYou: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="challenges">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold mb-4">Initial Indicators</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-text">Is this for you?</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((item, i) => (
            <div 
              key={i} 
              className="p-10 rounded-[2.5rem] bg-brand-soft border border-brand-mist/50 hover:border-brand-teal hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-12 h-12 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-brand-text mb-5 relative z-10">{item.title}</h4>
              <p className="text-brand-text/70 leading-relaxed text-sm relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-3xl bg-brand-teal/5 border border-brand-teal/20 max-w-3xl mx-auto shadow-sm">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-teal shadow-sm flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-3">Crisis Information</p>
              <p className="text-sm text-brand-text/80 leading-relaxed">
                This website is for informational purposes and is not a crisis service. 
                If you are at immediate risk or in distress, please contact your GP, call <span className="font-bold text-brand-text">999</span>, 
                or reach out to the Samaritans at <span className="font-bold text-brand-teal">116 123</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsThisForYou;