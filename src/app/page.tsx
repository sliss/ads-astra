'use client';

export default function Home() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">ADS ASTRA</div>
          <div className="nav-links">
            <a href="#mission">Mission</a>
            <a href="#contact">Contact</a>
            <a href="#plus">Ads Astra PLUS</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <img src="/do-it.jpg" alt="Night sky with stars" className="hero-image" />
        <div className="hero-content">
          <h1>Your Brand Among The Stars</h1>
          <p className="tagline">We're revolutionizing advertising by launching constellations of satellites that form your
            brand's logo in the night sky. Launching in 2025.</p>

          <div className="cta-wrapper">
            <a href="#contact" className="cta-button">Launch Your Vision</a>
            <a href="#premium" className="cta-button premium">Represent a nation state? Inquire about Ads Astra PLUS for an
              ad-free night sky viewing experience</a>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-number">300+</div>
              <div className="stat-label">Satellites Scheduled</div>
            </div>
            <div className="stat">
              <div className="stat-number">4B+</div>
              <div className="stat-label">Nightly Impressions</div>
            </div>
            <div className="stat">
              <div className="stat-number">12</div>
              <div className="stat-label">Brand Constellations</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mission" id="mission">
        <h2>Our Mission</h2>
        <div className="mission-content">
          In ancient nights, humanity gazed skyward to read their stories in the stars. Today, we offer brands the power to
          write their own celestial narrative. Through precision orbital engineering, Ads Astra transforms the firmament
          itself into the ultimate medium for human expression. Every logo we launch becomes more than an advertisement – it
          becomes a new constellation, a declaration of human ingenuity visible to billions of upturned faces each night.
          From the neon canyons of Tokyo to the dark plains of the Serengeti, your brand will shine among the eternal stars,
          joining humanity's oldest stories with its boldest ambitions. In a world of multichannel fragmentation, we offer
          something unprecedented: advertising at the scale of the infinite.
        </div>
      </section>
    </div>
  );
} 