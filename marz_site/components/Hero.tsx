import React from 'react';
import BrandIcon from './BrandIcon';

const Hero: React.FC = () => (
  <section className="marz-hero">
    <div className="marz-hero-inner">
      <div className="marz-hero-copy">
        <p className="marz-signature">Therapy with Marz <BrandIcon /></p>
        <p className="marz-eyebrow">London &amp; Online</p>
        <h1>Psychodynamic<br />Psychotherapy</h1>
        <h2>A space to understand yourself more deeply.</h2>
        <p className="marz-introduction">A reflective, confidential space in London N19 and online to explore emotional patterns, relationships and inner experience with curiosity and depth.</p>
        <div className="marz-hero-actions">
          <a className="marz-button" href="#contact">Arrange an introductory call <span aria-hidden="true">→</span></a>
          <a className="marz-text-link" href="#how-it-works">Explore how I work <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="marz-hero-note" aria-hidden="true">
        <BrandIcon kind="leaf" className="marz-leaf marz-leaf-one" />
        <BrandIcon className="marz-hero-spiral" />
        <p>Your story<br />matters here.</p>
        <BrandIcon kind="leaf" className="marz-leaf marz-leaf-two" />
        <span>Make space for more of yourself.</span>
      </div>
    </div>
  </section>
);
export default Hero;
