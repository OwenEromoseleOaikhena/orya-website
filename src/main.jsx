import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Sparkles,
  MessageCircle, Lightbulb, Compass, ShieldCheck, Orbit, Check
} from 'lucide-react';
import './styles.css';

const capabilities = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'A space to think out loud.',
    body: 'Work through questions, untangle a thought, or start with a blank page. Make room for a better conversation.'
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Ideas, meet momentum.',
    body: 'Explore possibilities, find a fresh angle, and give the ideas in your head somewhere to go.'
  },
  {
    icon: Compass,
    number: '03',
    title: 'Make the next step clearer.',
    body: 'Bring a challenge into focus and start shaping a practical path forward, one step at a time.'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const handleWaitlist = (event) => {
    event.preventDefault();
    // Front-end only until a mailing-list service is connected.
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="ORYA home" onClick={closeMenu}>
          <span className="brand-mark"><Orbit size={19} strokeWidth={1.8} /></span>
          <span>ORYA</span>
        </a>

        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>The idea</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#principles" onClick={closeMenu}>Our approach</a>
          <a className="nav-cta" href="#get-started" onClick={closeMenu}>Stay in the loop <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> A thoughtful AI experience</div>
            <h1>Think beyond<br /><span>ordinary.</span></h1>
            <p className="hero-lede">A little more clarity. A little more possibility. Meet ORYA — a space to explore ideas and move them forward.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#about">Discover ORYA <ArrowRight size={16} /></a>
              <a className="text-link" href="#capabilities">Explore the idea <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero-note"><span className="note-line" /> Made for the questions that lead somewhere.</div>
          </div>

          <div className="hero-art" aria-label="Abstract ORYA orbital symbol" role="img">
            <div className="art-glow" />
            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />
            <div className="art-ring ring-three" />
            <div className="art-core"><span className="core-point" /></div>
            <div className="orbit-dot dot-one" />
            <div className="orbit-dot dot-two" />
            <div className="orbit-dot dot-three" />
            <div className="art-caption"><span className="caption-pulse" /> CURIOUS BY DESIGN <span className="caption-divider">/</span> BUILT FOR WHAT'S NEXT</div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDownRight size={15} /></a>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-kicker"><span>01</span> THE IDEA</div>
          <div className="intro-content">
            <h2>Good questions<br />open <em>new doors.</em></h2>
            <div className="intro-aside">
              <p>ORYA is being shaped around a simple belief: intelligence should feel useful, approachable, and full of possibility.</p>
              <p>Whether you're finding the words, testing an idea, or figuring out what comes next, the first step is often a conversation.</p>
              <a href="#get-started" className="inline-link">Be part of the beginning <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="capabilities section-wrap" id="capabilities">
          <div className="section-heading">
            <div>
              <div className="section-kicker"><span>02</span> WHAT IT'S ABOUT</div>
              <h2>Room to think.<br /><em>Space to create.</em></h2>
            </div>
            <p>Designed around the moments when you need to make sense of something, see it differently, or begin.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, number, title, body }) => (
              <article className="capability-card" key={number}>
                <div className="card-top"><span className="card-icon"><Icon size={20} strokeWidth={1.65} /></span><span className="card-number">{number}</span></div>
                <h3>{title}</h3>
                <p>{body}</p>
                <span className="card-arrow"><ArrowUpRight size={17} /></span>
              </article>
            ))}
          </div>
          <p className="capability-footnote"><Sparkles size={13} /> ORYA is in development. Specific capabilities will be introduced as they become available.</p>
        </section>

        <section className="principles section-wrap" id="principles">
          <div className="principles-panel">
            <div className="principles-copy">
              <div className="section-kicker light-kicker"><span>03</span> OUR APPROACH</div>
              <h2>Useful by nature.<br /><em>Human in spirit.</em></h2>
              <p>Technology should make the next step feel more possible — not more complicated. That's the standard we're working toward.</p>
              <a className="button button-light" href="#get-started">Follow the journey <ArrowRight size={16} /></a>
            </div>
            <div className="principle-list">
              <div className="principle-item"><span className="principle-icon"><Check size={16} /></span><div><h3>Clarity over complexity</h3><p>Keep the experience considered, calm, and easy to approach.</p></div></div>
              <div className="principle-item"><span className="principle-icon"><Check size={16} /></span><div><h3>Honest by default</h3><p>Be clear about what is available and what is still taking shape.</p></div></div>
              <div className="principle-item"><span className="principle-icon"><Check size={16} /></span><div><h3>Built around people</h3><p>Make room for different questions, goals, and ways of thinking.</p></div></div>
            </div>
          </div>
        </section>

        <section className="closing section-wrap" id="get-started">
          <div className="closing-mark"><Orbit size={22} strokeWidth={1.6} /></div>
          <div className="section-kicker"><span>THE BEGINNING</span></div>
          <h2>Something thoughtful<br />is <em>taking shape.</em></h2>
          <p>ORYA is on its way. Follow along as the experience takes form.</p>
          <form className="signup-form" onSubmit={handleWaitlist}>
            <label className="sr-only" htmlFor="email">Your email address</label>
            <input id="email" type="email" value={email} onChange={e => { setEmail(e.target.value); setSubmitted(false); }}
              placeholder="Your email address" required aria-describedby="signup-note" />
            <button type="submit">Keep me posted <ArrowRight size={16} /></button>
          </form>
          {submitted ? <p className="form-note success-note" role="status">Thanks for your interest. Email signup isn't connected yet, so your address hasn't been sent or saved.</p> :
            <p className="form-note" id="signup-note">No spam. This form is a front-end preview until a mailing-list service is connected.</p>}
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><Orbit size={18} strokeWidth={1.8} /></span><span>ORYA</span></a>
        <span className="footer-copy">A thoughtful AI experience.</span>
        <div className="footer-right"><span>© {new Date().getFullYear()} ORYA</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);