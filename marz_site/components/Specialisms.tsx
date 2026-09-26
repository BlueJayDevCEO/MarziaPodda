import React from 'react';
import BrandIcon, { BrandIconKind } from './BrandIcon';
const affirmations: { title: string; icon: BrandIconKind }[] = [
  {title:'Queer-affirming',icon:'heart'},
  {title:'Kink-aware',icon:'spiral'},
  {title:'Neurodiversity-affirming',icon:'lotus'},
  {title:'ENM & relationship-diverse',icon:'leaf'},
];
export default function Specialisms() {
  return <section className="site-section-dark py-24" id="different-ways-of-being">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <p className="marz-eyebrow">Your whole self is welcome</p>
      <h2 className="text-4xl md:text-5xl font-serif mb-8">A therapy space for different ways of being</h2>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto">A warm, confidential and non-judgemental space to explore the parts of your life that matter to you, at a pace that feels right. I welcome different ways of loving, relating, thinking and being.</p>
      <div className="marz-affirmations">{affirmations.map(item=><div key={item.title}><BrandIcon kind={item.icon}/><h3>{item.title}</h3></div>)}</div>
      <a className="marz-button" href="#contact">Arrange an introductory call <span aria-hidden="true">→</span></a>
    </div>
  </section>;
}
