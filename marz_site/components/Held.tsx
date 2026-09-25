import React from 'react';
import './held.css';

const contactUrl = 'https://www.poddapsychotherapy.com/#contact';

const supportItems = [
  {
    title: 'Anxiety, stress &\nlife transitions',
    body: "Exploring what’s overwhelming you and finding new ways to cope and feel more like yourself.",
    icon: 'head'
  },
  {
    title: 'Relationships,\nintimacy &\nattachment',
    body: 'Understanding patterns in your relationships and building more fulfilling connections.',
    icon: 'heart'
  },
  {
    title: 'Identity, sexuality\n& self-exploration',
    body: 'A space to explore who you are, what feels right for you and the many ways of being and relating.',
    icon: 'lotus'
  },
  {
    title: 'Trauma, grief &\nloss',
    body: 'Making sense of past experiences and finding ways to live with more choice and self-compassion.',
    icon: 'target'
  },
  {
    title: 'Self-esteem, shame\n& feeling stuck',
    body: 'Exploring what holds you back and moving towards a kinder, more authentic relationship with yourself.',
    icon: 'leaf'
  }
];

function SupportIcon({ type }: { type: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.1, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (type === 'heart') {
    return <svg viewBox="0 0 64 64" aria-hidden="true"><path {...common} d="M32 54 10 32C-2 19 6 7 18 8c6 .4 11 4 14 9 3-5 8-9 14-9 12-1 20 11 8 24L32 54Z"/></svg>;
  }
  if (type === 'target') {
    return <svg viewBox="0 0 64 64" aria-hidden="true"><circle {...common} cx="32" cy="32" r="23"/><circle {...common} cx="32" cy="32" r="12"/><circle {...common} cx="32" cy="32" r="3"/></svg>;
  }
  if (type === 'leaf') {
    return <svg viewBox="0 0 64 64" aria-hidden="true"><path {...common} d="M15 50c8-22 19-34 36-37-1 17-8 31-27 34"/><path {...common} d="M19 47c10-10 19-17 29-25"/><path {...common} d="M24 37C16 30 12 22 12 13c11 2 18 8 20 18"/></svg>;
  }
  if (type === 'lotus') {
    return <svg viewBox="0 0 64 64" aria-hidden="true"><path {...common} d="M32 49c-10-4-17-12-17-21 8 0 14 3 17 9 3-6 9-9 17-9 0 9-7 17-17 21Z"/><path {...common} d="M32 37c-6-5-9-11-8-19 5 2 8 5 8 10 1-5 4-8 8-10 1 8-2 14-8 19Z"/><path {...common} d="M9 36c7 0 12 2 16 8-7 4-14 3-20-2 1-3 2-4 4-6ZM55 36c-7 0-12 2-16 8 7 4 14 3 20-2-1-3-2-4-4-6Z"/></svg>;
  }
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path {...common} d="M30 10c-10 0-18 8-18 19 0 6 3 11 7 14v10h14V43c7-2 12-8 12-16 0-10-6-17-15-17Z"/><path {...common} d="M20 26c3-5 9-5 12 0 3-5 9-5 12 0"/><path {...common} d="M32 22c0 4-4 8-4 8s-4-4-4-8c0-5 8-5 8 0Z"/></svg>;
}

const Held: React.FC = () => {
  return (
    <div className="held-page">
      <header className="held-nav">
        <a className="held-logo" href="/held" aria-label="Therapy with Marz home">
          Therapy<br/><span>with Marz</span><b>◎</b>
        </a>
        <nav className="held-nav-links" aria-label="Held page navigation">
          <a href="#held-home">Home</a>
          <a href="#held-space">About</a>
          <a href="#held-space">How I work</a>
          <a href="#held-support">Areas of support</a>
          <a href="https://www.poddapsychotherapy.com/#contact">FAQs</a>
        </nav>
        <a className="held-brush held-brush-small" href={contactUrl}>Book a free intro call <span>→</span></a>
      </header>

      <main>
        <section className="held-hero" id="held-home">
          <div className="held-hero-copy">
            <p className="held-kicker-script">Therapy<br/>with Marz <span>◎</span></p>
            <h1>Psychodynamic Psychotherapy</h1>
            <p className="held-intro">A safe, non-judgemental space to explore relationships, identity, sexuality and the patterns that keep repeating, welcoming different ways of loving, relating, thinking and being.</p>
            <div className="held-tags" aria-label="Inclusive practice areas">
              <span>Queer</span><i>♥</i><span>Kink</span><i>♥</i><span>Neurodiversity</span><i>♥</i><span>ENM</span>
            </div>
            <a className="held-brush" href={contactUrl}>Book a free 15-minute call <span>→</span></a>
          </div>
          <div className="held-hero-art" role="img" aria-label="Illustrated therapy artwork">
            <img src="/held-hero-tiny.webp" alt="" />
            <p>Your<br/>story<br/>matters<br/>here <span>♡</span></p>
          </div>
        </section>

        <section className="held-support" id="held-support">
          <div className="held-shell">
            <h2 className="held-script-heading">Areas of support</h2>
            <div className="held-support-grid">
              {supportItems.map((item) => (
                <article className="held-support-card" key={item.title}>
                  <div className="held-support-icon"><SupportIcon type={item.icon} /></div>
                  <h3>{item.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < item.title.split('\n').length - 1 && <br/>}</React.Fragment>)}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="held-space" id="held-space">
          <div className="held-space-image"><img src="/held-room-tiny.webp" alt="A warm, plant-filled therapy space" /></div>
          <div className="held-space-copy">
            <h2 className="held-script-heading">A different kind<br/>of therapy space</h2>
            <p>I offer a warm, confidential and non-judgemental space where you can bring your whole self. My approach is psychodynamic, which means we explore how past experiences and recurring patterns show up in your present life, helping you make sense of what’s going on and find new ways of relating to yourself and others.</p>
            <p>I welcome LGBTQIA+ people, kink/BDSM communities, neurodiverse clients and non-monogamous relationships. Together we can explore the parts of your life that matter to you, at a pace that feels right.</p>
            <a className="held-brush" href={contactUrl}>Book a free 15-minute call <span>→</span></a>
          </div>
        </section>

        <section className="held-banner" aria-label="Practice details">
          <p className="held-banner-script">Make space<br/>for more of yourself</p>
        </section>

        <section className="held-practical">
          <div className="held-practical-item">
            <div className="held-practical-icon">⌖</div>
            <div><strong>In person</strong><span>North London</span></div>
          </div>
          <div className="held-practical-item">
            <div className="held-practical-icon">▱</div>
            <div><strong>Online</strong><span>Worldwide</span></div>
          </div>
          <div className="held-practical-item">
            <div className="held-practical-icon">▦</div>
            <div><strong>Free 15-minute<br/>introductory call</strong><small>A chance to meet, ask questions and see if it feels like a good fit.</small></div>
          </div>
        </section>

        <section className="held-final">
          <div className="held-final-copy">
            <h2 className="held-script-heading">Ready to take<br/>the next step?</h2>
            <p>If you’re curious about working together, I offer a free 15-minute call to see if it feels like a good fit. There’s no pressure and no obligation.</p>
            <a className="held-brush" href={contactUrl}>Book a free intro call <span>→</span></a>
          </div>
          <div className="held-final-image"><img src="/held-pond-tiny.webp" alt="Calm water garden with lotus flowers" /></div>
        </section>
      </main>
    </div>
  );
};

export default Held;
