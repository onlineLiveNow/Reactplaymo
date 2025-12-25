import { useState } from 'react';
import Modal from './Modal';

function App() {
  const [showModal, setShowModal] = useState(true);

  const sendAnalyticsEvent = (eventName: string, payload: Record<string, any> = {}) => {
    try {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: eventName, ...payload });
    } catch (e) {
      // ignore
    }
    // Lightweight fallback for local testing
    // eslint-disable-next-line no-console
    console.log('analytics:', eventName, payload);
  };

  const handleContinue = () => {
    setShowModal(false);
    sendAnalyticsEvent('cta_continue_click', { label: 'modal_continue' });
    // Open in a new tab so users don't lose this landing page (better UX / CTR)
    window.open('https://garrix.site/?utm_campaign=bXDsfRboHU&v1=[v1]&v2=[v2]&v3=[v3]', '_blank', 'noopener,noreferrer');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    sendAnalyticsEvent('modal_close', {});
  };

  return (
    <>
      {showModal && <Modal onContinue={handleContinue} onClose={handleCloseModal} />}

      <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
        <header className="site-header">
          <div className="header-container">
            <a href="#" className="logo" aria-label="PlayM00 home">
              <div className="logo-icon">
                <span style={{ color: 'white' }}>P</span>
              </div>
              <div className="logo-text">PlayM00</div>
            </a>
            <div className="trust-badge">Verified Australian Platform</div>
          </div>
        </header>

        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">🎮 Australia's #1 Gaming Platform</div>

            <h1 className="hero-title">Play 100+ Multiplayer Games Free in Australia</h1>

            <p className="hero-subtitle">
              Join 50,000+ Australian players. No sign-up needed. No downloads required.
              Start playing your favorite multiplayer games instantly in your browser.
            </p>

            <p className="seo-intro">
              PlayM00 offers 100+ free browser-based multiplayer games optimized for Australian players — low-latency Australian servers, instant play with friends, and no downloads or sign-ups required. Play online games in Australia, browser games AU, and free multiplayer games.
            </p> 

            <a href="#play-now" className="primary-cta" aria-label="Start Playing Free Now" onClick={() => sendAnalyticsEvent('cta_click', { label: 'start_playing' })}>
              🎯 Start Playing Free Now
            </a>

            <div className="trust-indicators">
              <div className="trust-item">
                <div className="trust-number">50K+</div>
                <div className="trust-label">Active Players</div>
              </div>
              <div className="trust-item">
                <div className="trust-number">100+</div>
                <div className="trust-label">Free Games</div>
              </div>
              <div className="trust-item">
                <div className="trust-number">4.9★</div>
                <div className="trust-label">Rating</div>
              </div>
              <div className="trust-item">
                <div className="trust-number">24/7</div>
                <div className="trust-label">AU Support</div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Why Australian Gamers Choose PlayM00</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Instant Play, No Download</h3>
              <p className="feature-desc">Start playing immediately in your browser. No software to install, no waiting times.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎮</div>
              <h3 className="feature-title">100+ Multiplayer Games</h3>
              <p className="feature-desc">Battle Royale, Strategy, Action, Sports & more. Always adding new games weekly.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🇦🇺</div>
              <h3 className="feature-title">Australian Servers</h3>
              <p className="feature-desc">Low-latency gaming on local servers for the smoothest multiplayer experience.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Real Australian Players</h3>
              <p className="feature-desc">Match with real players from Sydney, Melbourne, Brisbane & across Australia.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Safe & Secure</h3>
              <p className="feature-desc">Your privacy is protected. No personal information required to start playing.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Mobile Friendly</h3>
              <p className="feature-desc">Play on any device - desktop, tablet, or mobile. Your progress syncs automatically.</p>
            </div>
          </div>
        </section>

        <section className="social-proof">
          <h2 className="section-title">What Australian Players Say</h2>

          <div className="testimonial">
            <p className="testimonial-text">"Finally a gaming platform that works perfectly in Australia! The connection is smooth and there are always players online."</p>
            <p className="testimonial-author">James M., Sydney</p>
          </div>

          <div className="testimonial">
            <p className="testimonial-text">"I was skeptical about free gaming platforms, but PlayM00 delivers premium quality games without any hidden costs."</p>
            <p className="testimonial-author">Sarah L., Melbourne</p>
          </div>

          <div className="testimonial">
            <p className="testimonial-text">"Best way to connect with friends during lockdown. We play together every night!"</p>
            <p className="testimonial-author">Michael T., Brisbane</p>
          </div>
        </section>

        <section className="final-cta-section" id="play-now">
          <h2 className="final-cta-title">Ready to Start Gaming?</h2>
          <p className="final-cta-subtitle">Join thousands of Australian players enjoying premium multiplayer gaming for free.</p>

          <a href="#play-now" className="primary-cta" aria-label="Select your game and play now" onClick={() => sendAnalyticsEvent('cta_click', { label: 'select_game_play' })}>
            🚀 Select Your Game & Play Now
          </a>

          <div className="trust-indicators" style={{ marginTop: '40px' }}>
            <div className="trust-item">
              <div style={{ color: '#10B981', fontSize: '20px' }}>✓</div>
              <div className="trust-label">100% Free</div>
            </div>
            <div className="trust-item">
              <div style={{ color: '#10B981', fontSize: '20px' }}>✓</div>
              <div className="trust-label">No Sign Up</div>
            </div>
            <div className="trust-item">
              <div style={{ color: '#10B981', fontSize: '20px' }}>✓</div>
              <div className="trust-label">Instant Access</div>
            </div>
            <div className="trust-item">
              <div style={{ color: '#10B981', fontSize: '20px' }}>✓</div>
              <div className="trust-label">No Credit Card</div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="disclaimer">
            PlayM00 is a free multiplayer gaming platform for Australian players. All games are browser-based and require no downloads.
            Please game responsibly. Not suitable for persons under 13 years of age.
          </div>

          <div className="copyright">
            © 2025 PlayM00 Gaming Platform | Made for Australian Gamers
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
