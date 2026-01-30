import React from 'react';

const specialisms = ["Anxiety", "Depression", "Relational Difficulties", "Personality Difficulties", "Trauma", "Loss and Bereavement"];

const testimonials = [
  {
    text: "The space provided allowed me to understand cycles I had been trapped in for years. It felt safe and truly non-judgmental.",
    attr: "Anonymised Patient Example (Placeholder)"
  },
  {
    text: "Working through the roots of my anxiety has changed how I approach my daily life and my relationships with those closest to me.",
    attr: "Anonymised Patient Example (Placeholder)"
  }
];

const Specialisms: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Specialisms List */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold mb-4">Areas of Focus</h2>
            <h3 className="text-4xl font-serif text-brand-text mb-8">Clinical Specialisms</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialisms.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-brand-soft border border-brand-mist/30">
                  <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-text text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Placeholders */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold mb-4">Reflections</h2>
            <h3 className="text-4xl font-serif text-brand-text mb-8">Clinical Feedback</h3>
            
            <div className="space-y-8">
              {testimonials.map((t, i) => (
                <div key={i} className="relative p-10 bg-brand-soft rounded-[2.5rem] border border-brand-mist/20 italic shadow-sm hover:shadow-md transition-shadow">
                   <div className="absolute top-6 left-6 text-5xl text-brand-mist/60 font-serif leading-none">&ldquo;</div>
                   <p className="text-brand-text/80 leading-relaxed mb-6 relative z-10 text-lg">{t.text}</p>
                   <p className="text-[10px] uppercase tracking-[0.2em] text-brand-teal font-bold">— {t.attr}</p>
                </div>
              ))}
              <p className="text-[10px] text-brand-text/40 text-center uppercase tracking-widest px-8">
                Note: Testimonials shown are illustrative placeholders. Real testimonials are only displayed in accordance with professional ethical guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialisms;