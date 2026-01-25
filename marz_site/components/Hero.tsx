import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-soft">
      {/* Background Decor - Subtle Teal Gradient */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-mist/20 to-transparent -z-10" />
      <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-brand-teal/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <div className="fade-in max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="px-4 py-1.5 bg-white text-[10px] uppercase tracking-widest text-brand-teal rounded-full border border-brand-mist shadow-sm">BPC Member</span>
            <span className="px-4 py-1.5 bg-white text-[10px] uppercase tracking-widest text-brand-teal rounded-full border border-brand-mist shadow-sm">TSP Member</span>
            <span className="px-4 py-1.5 bg-white text-[10px] uppercase tracking-widest text-brand-teal rounded-full border border-brand-mist shadow-sm">Online & London N19</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-brand-text leading-[1.05] mb-12 stagger-1">
            Psychodynamic Psychotherapy
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed max-w-3xl mx-auto mb-16 stagger-2">
            <span className="block mb-4">Welcome</span>
            <span className="block mb-4">Therapy can be a quiet place to breathe, to slow down, and to begin understanding what has been shaping your life.</span>
            <span className="block mb-4">I’m a psychodynamic psychotherapist working with adults in the NHS, charities, and private practice, and I offer long-term psychotherapy for people who want depth, understanding, and real change. Sessions are available in person in London N19 and online.</span>
            <span className="block mb-4">My work is rooted in the psychodynamic tradition, which means I’m interested in the deeper patterns that shape how we feel, relate, and make sense of ourselves. I pay attention to what is happening between us in the room, as well as what you bring from your life outside of therapy.</span>
            <span className="block">If you’re feeling stuck, overwhelmed, or unsure of why things keep repeating, therapy can be a place to explore that safely, without pressure or judgement.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 stagger-3">
            <a 
              href="#contact" 
              className="px-12 py-5 bg-brand-teal text-white text-sm uppercase tracking-widest rounded-full hover:bg-brand-muted transition-all text-center shadow-lg hover:shadow-xl active:scale-95"
            >
              Book a free 15-min consultation
            </a>
            <a 
              href="#how-it-works" 
              className="px-12 py-5 bg-white text-brand-teal border border-brand-mist text-sm uppercase tracking-widest rounded-full hover:bg-brand-soft transition-all text-center shadow-sm"
            >
              How therapy works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;