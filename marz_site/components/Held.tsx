import React, { useEffect } from 'react';
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

// CSS windows onto the supplied mockup preserve its original artwork without redrawing it.
function Artwork({ x, y, width, height, label, className = '' }: {
  x: number; y: number; width: number; height: number; label?: string; className?: string;
}) {
  return <div className={`held-artwork ${className}`} style={{ aspectRatio: `${width} / ${height}` }} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
    <img src="/held-mockup-original.jpg" alt="" draggable={false} style={{ width: `${698 / width * 100}%`, left: `${-x / width * 100}%`, top: `${-y / height * 100}%` }} />
  </div>;
}

function ExactLink({ x, y, width, height, href, children }: {
  x: number; y: number; width: number; height: number; href: string; children: React.ReactNode;
}) {
  return <a className="held-exact-link" href={href} style={{ left: `${x / 698 * 100}%`, top: `${y / 1536 * 100}%`, width: `${width / 698 * 100}%`, height: `${height / 1536 * 100}%` }}><span className="held-screen-reader">{children}</span></a>;
}

function ExactMockup() {
  return <div className="held-exact">
    <img className="held-original" src="/held-mockup-original.jpg" width="698" height="1536" alt="" fetchPriority="high" />
    <header>
      <ExactLink x={34} y={8} width={108} height={46} href="/held">Therapy with Marz home</ExactLink>
      <nav aria-label="Held page navigation">
        <ExactLink x={169} y={14} width={36} height={30} href="#exact-home">Home</ExactLink>
        <ExactLink x={213} y={14} width={34} height={30} href="https://www.poddapsychotherapy.com/#about">About</ExactLink>
        <ExactLink x={255} y={14} width={53} height={30} href="#exact-space">How I work</ExactLink>
        <ExactLink x={317} y={14} width={80} height={30} href="#exact-support">Areas of support</ExactLink>
        <ExactLink x={402} y={14} width={37} height={30} href="https://www.poddapsychotherapy.com/#process">FAQs</ExactLink>
      </nav>
      <ExactLink x={534} y={10} width={150} height={44} href={contactUrl}>Book a free intro call</ExactLink>
    </header>
    <main>
      <section id="exact-home" className="held-exact-section" style={{ top: '3.776%' }}>
        <div className="held-screen-reader">
          <p>Therapy with Marz. Your story matters here.</p>
          <h1>Psychodynamic Psychotherapy</h1>
          <p>A safe, non-judgemental space to explore relationships, identity, sexuality and the patterns that keep repeating, welcoming different ways of loving, relating, thinking and being.</p>
          <p>Queer, kink, neurodiversity, ENM.</p>
        </div>
      </section>
      <ExactLink x={28} y={383} width={218} height={49} href={contactUrl}>Book a free 15-minute call</ExactLink>
      <section id="exact-support" className="held-exact-section" style={{ top: '30.599%' }}>
        <div className="held-screen-reader"><h2>Areas of support</h2>{supportItems.map(item => <article key={item.icon}><h3>{item.title.replaceAll('\n', ' ')}</h3><p>{item.body}</p></article>)}</div>
      </section>
      <section id="exact-space" className="held-exact-section" style={{ top: '47.917%' }}>
        <div className="held-screen-reader"><h2>A different kind of therapy space</h2>
          <p>I offer a warm, confidential and non-judgemental space where you can bring your whole self. My approach is psychodynamic, which means we explore how past experiences and recurring patterns show up in your present life, helping you make sense of what’s going on and find new ways of relating to yourself and others.</p>
          <p>I welcome LGBTQIA+ people, kink/BDSM communities, neurodiverse clients and non-monogamous relationships. Together we can explore the parts of your life that matter to you, at a pace that feels right.</p>
        </div>
      </section>
      <ExactLink x={378} y={997} width={237} height={54} href={contactUrl}>Book a free 15-minute call</ExactLink>
      <section className="held-screen-reader"><h2>Make space for more of yourself</h2><p>In person: North London. Online: worldwide.</p><p>Free 15-minute introductory call. A chance to meet, ask questions and see if it feels like a good fit.</p></section>
      <section className="held-screen-reader"><h2>Ready to take the next step?</h2><p>If you’re curious about working together, I offer a free 15-minute call to see if it feels like a good fit. There’s no pressure and no obligation.</p></section>
      <ExactLink x={98} y={1416} width={228} height={54} href={contactUrl}>Book a free intro call</ExactLink>
    </main>
  </div>;
}

const Held: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Therapy with Marz | Psychodynamic Psychotherapy';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="held-page">
      <ExactMockup />
      <div className="held-mobile">
      <header className="held-nav">
        <a className="held-logo" href="/held" aria-label="Therapy with Marz home">
          <Artwork x={34} y={8} width={108} height={46} />
        </a>
        <nav className="held-nav-links" aria-label="Held page navigation">
          <a href="#held-home">Home</a>
          <a href="https://www.poddapsychotherapy.com/#about">About</a>
          <a href="#held-space">How I work</a>
          <a href="#held-support">Areas of support</a>
          <a href="https://www.poddapsychotherapy.com/#process">FAQs</a>
        </nav>
        <a className="held-brush held-brush-small" href={contactUrl}><Artwork x={534} y={10} width={150} height={44} /><span className="held-screen-reader">Book a free intro call</span></a>
      </header>

      <main>
        <section className="held-hero" id="held-home">
          <div className="held-hero-copy">
            <Artwork x={29} y={78} width={299} height={145} label="Therapy with Marz" className="held-brand-art" />
            <h1>Psychodynamic Psychotherapy</h1>
            <p className="held-intro">A safe, non-judgemental space to explore relationships, identity, sexuality and the patterns that keep repeating, welcoming different ways of loving, relating, thinking and being.</p>
            <div className="held-tags" aria-label="Inclusive practice areas">
              <span>Queer</span><i aria-hidden="true">♥</i><span>Kink</span><i aria-hidden="true">♥</i><span>Neurodiversity</span><i aria-hidden="true">♥</i><span>ENM</span>
            </div>
            <a className="held-brush" href={contactUrl}><Artwork x={28} y={383} width={218} height={49} /><span className="held-screen-reader">Book a free 15-minute call</span></a>
          </div>
          <div className="held-hero-art">
            <Artwork x={334} y={59} width={364} height={411} label="Illustrated woman and black cat surrounded by foliage. Your story matters here." />
          </div>
        </section>

        <section className="held-support" id="held-support">
          <div className="held-shell">
            <h2 className="held-script-heading"><Artwork x={28} y={479} width={226} height={47} /><span className="held-screen-reader">Areas of support</span></h2>
            <div className="held-support-grid">
              {supportItems.map((item, index) => (
                <article className="held-support-card" key={item.title}>
                  <Artwork x={54 + index * 133} y={528} width={60} height={52} className="held-support-icon" />
                  <h3>{item.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < item.title.split('\n').length - 1 && <br/>}</React.Fragment>)}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="held-space" id="held-space">
          <div className="held-space-image"><Artwork x={0} y={736} width={348} height={325} label="A pink therapy room with leafy plants and a black cat resting on the sofa" /></div>
          <div className="held-space-copy">
            <h2 className="held-script-heading"><Artwork x={356} y={744} width={236} height={70} /><span className="held-screen-reader">A different kind of therapy space</span></h2>
            <p>I offer a warm, confidential and non-judgemental space where you can bring your whole self. My approach is psychodynamic, which means we explore how past experiences and recurring patterns show up in your present life, helping you make sense of what’s going on and find new ways of relating to yourself and others.</p>
            <p>I welcome LGBTQIA+ people, kink/BDSM communities, neurodiverse clients and non-monogamous relationships. Together we can explore the parts of your life that matter to you, at a pace that feels right.</p>
            <a className="held-brush" href={contactUrl}><Artwork x={28} y={383} width={218} height={49} /><span className="held-screen-reader">Book a free 15-minute call</span></a>
          </div>
        </section>

        <section className="held-banner" aria-label="Practice details">
          <Artwork x={150} y={1061} width={398} height={102} label="Make space for more of yourself" />
        </section>

        <section className="held-practical">
          <div className="held-practical-item">
            <Artwork x={34} y={1183} width={43} height={52} className="held-practical-icon" />
            <div><strong>In person</strong><span>North London</span></div>
          </div>
          <div className="held-practical-item">
            <Artwork x={262} y={1183} width={45} height={52} className="held-practical-icon" />
            <div><strong>Online</strong><span>Worldwide</span></div>
          </div>
          <div className="held-practical-item">
            <Artwork x={480} y={1183} width={45} height={52} className="held-practical-icon" />
            <div><strong>Free 15-minute<br/>introductory call</strong><small>A chance to meet, ask questions and see if it feels like a good fit.</small></div>
          </div>
        </section>

        <section className="held-final">
          <div className="held-final-copy">
            <h2 className="held-script-heading"><Artwork x={97} y={1281} width={212} height={78} /><span className="held-screen-reader">Ready to take the next step?</span></h2>
            <p>If you’re curious about working together, I offer a free 15-minute call to see if it feels like a good fit. There’s no pressure and no obligation.</p>
            <a className="held-brush" href={contactUrl}><Artwork x={98} y={1416} width={228} height={54} /><span className="held-screen-reader">Book a free intro call</span></a>
          </div>
          <div className="held-final-image"><Artwork x={349} y={1270} width={349} height={266} label="Sunlight falling onto a water garden with lotus flowers" /></div>
        </section>
      </main>
      </div>
    </div>
  );
};

export default Held;
