import React from 'react';
import BrandIcon, { BrandIconKind } from './BrandIcon';

const challenges: { title: string; desc: string; icon: BrandIconKind }[] = [
  { title: 'Anxiety, stress & life transitions', desc: 'Exploring what’s overwhelming you and finding new ways to cope and feel more like yourself.', icon: 'head' },
  { title: 'Relationships, intimacy & attachment', desc: 'Understanding patterns in your relationships and building more fulfilling connections.', icon: 'heart' },
  { title: 'Identity, sexuality & self-exploration', desc: 'A space to explore who you are, what feels right for you and the many ways of being and relating.', icon: 'lotus' },
  { title: 'Trauma, grief & loss', desc: 'Making sense of past experiences and finding ways to live with more choice and self-compassion.', icon: 'spiral' },
  { title: 'Self-esteem, shame & feeling stuck', desc: 'Exploring what holds you back and moving towards a kinder, more authentic relationship with yourself.', icon: 'leaf' },
];

const IsThisForYou: React.FC = () => {
  return (
    <section className="site-section-dark py-24" id="challenges">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold mb-4">Areas of support</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-text">You might be here because…</h3>
        </div>

        <div className="marz-support-grid">
          {challenges.map((item, i) => (
            <div 
              key={i} 
              className="marz-support-card"
            >
              <BrandIcon kind={item.icon} className="marz-area-icon" />
              <h4 className="text-xl font-serif text-brand-text mb-5 relative z-10">{item.title}</h4>
              <p className="text-brand-text/70 leading-relaxed text-sm relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-text/70 leading-relaxed max-w-2xl mx-auto mb-8">
            If any of this resonates, we can begin with a brief, free 15â€‘minute call to see whether psychotherapy with me feels like a good fit.
          </p>
          <a
            href="#contact"
            className="inline-flex px-10 py-4 bg-brand-teal text-white text-xs uppercase tracking-widest rounded-full hover:bg-brand-muted transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Arrange an introductory call →
          </a>
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