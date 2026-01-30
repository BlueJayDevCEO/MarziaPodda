import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-24 bg-brand-soft" id="about">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold mb-4">
            Background & Experience
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-text mb-8">
            Marzia Podda
          </h3>

          <div className="space-y-6 text-brand-text/70 leading-relaxed">
            <p>
              I am a qualified{" "}
              <strong className="text-brand-text font-semibold">
                Psychodynamic Psychotherapist
              </strong>{" "}
              with over 15 years of experience working within the mental health
              field, including over 13 years in clinical practice.
            </p>
            <p>
              My practice is informed by experience across both primary care
              (short-term interventions) and specialist services (long-term,
              in-depth work). I offer psychotherapy in-person in London N19 and
              online.
            </p>
            <p>
              Having trained at the{" "}
              <strong className="text-brand-text font-semibold italic">
                Tavistock and Portman NHS Foundation Trust
              </strong>
              , my work is deeply rooted in the psychodynamic tradition, a
              depth-oriented approach that values curiosity, the exploration of
              the unconscious, and the relational dynamics that shape our lives.
            </p>
            <p>
              I am a registered member of the British Psychoanalytic Council
              (BPC) and the Tavistock Society of Psychotherapists (TSP), ensuring
              that my work is governed by high professional and ethical
              standards.
            </p>
          </div>

          <div className="mt-12">
            <a
              href="#contact"
              className="inline-flex px-8 py-3 bg-brand-teal text-white text-xs uppercase tracking-widest rounded-full hover:bg-brand-muted transition-all shadow-md"
            >
              Arrange a consultation
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="aspect-[5/6] rounded-[4rem] rounded-tl-[15rem] overflow-hidden shadow-2xl bg-brand-mist relative group">
              <img
                src="/marz.jpg"
                alt="Marzia Podda"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
