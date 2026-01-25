import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold mb-4">The Clinical Approach</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-text">The Psychodynamic Path</h3>
        </div>

        <div className="space-y-12">
          <p className="text-xl md:text-2xl italic font-serif text-brand-text/90 text-center leading-relaxed px-4">
            &ldquo;Psychodynamic therapy values the depth of the human experience, looking beyond immediate symptoms to understand the meaningful patterns that shape our lives.&rdquo;
          </p>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 pt-8">
            <div className="space-y-4">
              <h4 className="text-xl font-serif text-brand-text border-b border-brand-mist pb-2">Unconscious Patterns</h4>
              <p className="text-sm text-brand-text/70 leading-relaxed">
                We often find ourselves repeating behaviours or emotional states without knowing why. By exploring thoughts and feelings just beneath the surface, we can gain clarity on the hidden motivations that drive us.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-serif text-brand-text border-b border-brand-mist pb-2">Early Dynamics</h4>
              <p className="text-sm text-brand-text/70 leading-relaxed">
                Our earliest relationships create internal maps for how we connect with others. Understanding these "blueprints" allows us to see how the past is still present in our current relationship difficulties and self-image.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-serif text-brand-text border-b border-brand-mist pb-2">Relational Focus</h4>
              <p className="text-sm text-brand-text/70 leading-relaxed">
                Therapy is a relational process. By observing how we interact within the therapeutic space, we gain a unique instrument to understand and rework the relational patterns you experience in the outside world.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-serif text-brand-text border-b border-brand-mist pb-2">Meaning & Vitality</h4>
              <p className="text-sm text-brand-text/70 leading-relaxed">
                Rather than just 'fixing' what is broken, this work aims for a richer sense of self. We work together to find new meanings and a greater sense of aliveness and authenticity in your life.
              </p>
            </div>
          </div>

          <div className="mt-20 p-12 rounded-[3rem] bg-brand-mist/20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-brand-teal/5 rounded-full -translate-x-12 -translate-y-12" />
            <p className="text-brand-text/80 text-sm mb-8 relative z-10 max-w-xl mx-auto">
              Psychodynamic work is a commitment to yourself. Whether you seek short-term focus on a specific issue or longer-term open-ended depth, we discuss the most appropriate pathway collaboratively.
            </p>
            <a href="#contact" className="inline-block border-b-2 border-brand-teal pb-1 text-xs uppercase tracking-widest text-brand-teal font-bold hover:text-brand-muted hover:border-brand-muted transition-all relative z-10">
              Begin your exploration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;