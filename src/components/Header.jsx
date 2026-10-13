export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="TASK Skill Centre home">
        <span className="brand-mark" aria-hidden="true">🎓</span>
        <span>
          <strong className="brand-title">Telangana Academy for Skill and Knowledge</strong>
          <small>TASK • Skill Development & Career Support</small>
        </span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#benefits">Benefits</a>
        <a href="#contact">Contact</a>
        <a className="button button-red nav-cta" href="#contact">Enquire Now</a>
      </nav>
    </header>
  );
}