import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D2B2A] text-brand-mist/60 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <h4 className="font-serif text-3xl text-white mb-8 tracking-tight">Marzia Podda</h4>
            <p className="text-sm leading-relaxed max-w-sm mb-8">
              A professional and confidential psychodynamic psychotherapy practice dedicated to the exploration of self-understanding and relational depth.
            </p>
            <div className="flex gap-4">
               {/* Understated icons or small logo marks */}
               <div className="w-10 h-10 rounded-full border border-brand-mist/20 flex items-center justify-center text-white/50 hover:text-white transition-colors">
                 <span className="text-[10px] font-bold uppercase tracking-widest">BPC</span>
               </div>
               <div className="w-10 h-10 rounded-full border border-brand-mist/20 flex items-center justify-center text-white/50 hover:text-white transition-colors">
                 <span className="text-[10px] font-bold uppercase tracking-widest">TSP</span>
               </div>
            </div>
          </div>
          
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Professional</h5>
            <ul className="text-xs space-y-4">
              <li>British Psychoanalytic Council</li>
              <li>Tavistock Society Member</li>
              <li>Tavistock & Portman Alumna</li>
              <li>Registered Member (BPC)</li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-8">Information</h5>
            <ul className="text-xs space-y-4">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy & Data Policy</a></li>
              <li><a href="#fees" className="hover:text-white transition-colors">Clinical Framework</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Emergency Support</a></li>
              <li className="pt-2 text-[10px] text-white/30">&copy; {new Date().getFullYear()} Marzia Podda</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-mist/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-semibold text-white/30">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-brand-teal" />
            London N19 & Online Worldwide
          </div>
          <div className="text-center md:text-right">
            Confidential Psychodynamic Psychotherapy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;