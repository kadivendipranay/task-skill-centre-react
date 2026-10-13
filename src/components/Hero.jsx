export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Skill Training for the Youth of Telangana</span>
          <h1>Upgrade Your Skills.<br /><span>Build Your Future!</span></h1>
          <p>Explore computer, software, and digital skills training to support your career goals. Contact us to learn more about courses, eligibility, and upcoming batches.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#courses">Explore Courses</a>
            <a className="button button-outline" href="#contact">Contact Us</a>
          </div>
          <div className="hero-note"><span>✓</span> Learn · Practice · Grow</div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="building-art">
              <span className="building-icon">🏢</span>
              <strong>TASK Skill Centre</strong>
              <small>SKILL DEVELOPMENT</small>
            </div>
            <div className="hero-card-bottom">
              <span className="hero-card-icon">🚀</span>
              <div><strong>A New Direction for Your Career</strong><small>Contact us for course details and batch schedules.</small></div>
            </div>
          </div>
          <div className="floating-badge">🎓 <span>Build your skills</span></div>
        </div>
      </div>
    </section>
  );
}