import React from 'react';

const About: React.FC = () => (
  <section className="marz-about py-24" id="about">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="marz-portrait"><img src="/marzia-portrait.jpeg" alt="Marzia Podda" width="1086" height="1448" loading="lazy" /></div>
        <div>
          <h2 className="marz-eyebrow">About</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-brand-text mb-8">Hi, I’m Marzia.</h3>
          <div className="space-y-6 text-brand-text/80 leading-relaxed text-lg">
            <p>I’m a psychodynamic psychotherapist offering a thoughtful, confidential space to understand what may be happening beneath the surface.</p>
            <p>My work is interested not only in what you’re experiencing now, but in the relationships, experiences and patterns that have shaped how you relate to yourself and others.</p>
            <p>I offer psychotherapy in person in London N19 and online.</p>
          </div>
          <a href="#contact" className="marz-button mt-9">Ask about availability <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="marz-standards">
        <h4 className="marz-eyebrow">Experience &amp; professional standards</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <article><h5>BPC &amp; TSP</h5><p>Registered member of the British Psychoanalytic Council and the Tavistock Society of Psychotherapists.</p></article>
          <article><h5>Tavistock &amp; Portman</h5><p>Trained at the Tavistock and Portman NHS Foundation Trust in the psychodynamic tradition.</p></article>
          <article><h5>Clinical experience</h5><p>Over 20 years in mental health, including 13 years in clinical practice across NHS specialist psychotherapy services and community projects in the charity sector.</p></article>
        </div>
      </div>
    </div>
  </section>
);
export default About;
