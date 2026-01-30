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
            <h3 className="text-4xl font-serif text-brand-text mb-8">Areas I Work With</h3>
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

          
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold mb-4">Reflections</h2>
            
  );
};

export default Specialisms;


