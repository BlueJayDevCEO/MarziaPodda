import React from 'react';

const Fees: React.FC = () => {
  return (
    <section className="py-24 bg-brand-soft" id="fees">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold mb-4">Investment & Terms</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-text">Fees and Practicalities</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-brand-mist/30 flex flex-col items-center text-center hover:shadow-lg transition-all">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-teal font-bold mb-8">Introduction</h4>
            <div className="mb-6">
              <span className="text-5xl font-serif text-brand-text">Free</span>
            </div>
            <p className="text-brand-text font-medium mb-4">15-minute consultation</p>
            <p className="text-xs text-brand-text/50 leading-relaxed">A brief introductory phone call to discuss your requirements and ensure we are a good match for clinical work.</p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-[6px] border-brand-teal relative flex flex-col items-center text-center transform md:scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-teal text-[10px] text-white uppercase tracking-widest rounded-full font-bold">Recommended</div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-teal font-bold mb-8 mt-4">Psychotherapy</h4>
            <div className="mb-6">
              <span className="text-5xl font-serif text-brand-text italic">£___</span>
              <span className="text-brand-text/40 text-sm"> / session</span>
            </div>
            <p className="text-brand-text font-medium mb-4 italic text-sm">(Placeholder for owner to fill)</p>
            <p className="text-xs text-brand-text/50 leading-relaxed">Standard 50-minute clinical hour. Fees for assessment and ongoing work will be discussed and agreed upon.</p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-brand-mist/30 flex flex-col items-center text-center hover:shadow-lg transition-all">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-teal font-bold mb-8">Framework</h4>
            <div className="space-y-6 mb-8 text-center w-full">
               <div className="text-xs border-b border-brand-mist pb-3 last:border-0">
                <p className="font-bold text-brand-text uppercase mb-1 tracking-wider">Cancellations</p>
                <p className="text-brand-text/60 italic text-[10px]">(Placeholder: e.g. 48h notice)</p>
              </div>
              <div className="text-xs border-b border-brand-mist pb-3 last:border-0">
                <p className="font-bold text-brand-text uppercase mb-1 tracking-wider">Payment</p>
                <p className="text-brand-text/60 italic text-[10px]">(Placeholder: e.g. Bank Transfer)</p>
              </div>
            </div>
            <p className="text-[10px] text-brand-text/40 leading-relaxed italic">Full terms and professional boundaries will be shared during our initial assessment.</p>
          </div>
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="text-brand-text/50 text-xs italic leading-relaxed">
            Professional psychotherapy fees reflect the high standard of specialist training, professional insurance, 
            and continuous clinical supervision required by the BPC and TSP.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fees;