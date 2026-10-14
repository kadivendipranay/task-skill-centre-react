import React, { useState } from "react";
import "./styles/global.css";

const COURSES = [
  { icon: "💻", title: "Computer Basics", description: "Learn essential computer skills." },
  { icon: "📊", title: "MS Office", description: "Documents, spreadsheets, and presentations." },
  { icon: "🧑‍💻", title: "C Language", description: "Build programming fundamentals." },
  { icon: "🌐", title: "Web Designing", description: "Learn HTML, CSS, and JavaScript." },
  { icon: "🗄️", title: "Database Fundamentals", description: "Understand databases and SQL." },
  { icon: "📐", title: "AutoCAD", description: "Explore computer-aided design." },
  { icon: "📈", title: "Tally Prime & GST", description: "Learn accounting and GST basics." },
  { icon: "🗣️", title: "Soft Skills", description: "Improve communication and interview skills." },
  { icon: "💬", title: "Spoken English", description: "Build everyday speaking confidence." },
  { icon: "🤖", title: "AI & Digital Skills", description: "Explore digital tools and AI basics." },
];

const ADDRESS = "Mulugu, Bandurupally Road, Opposite DSP Office, Telangana";
const PHONE_ONE = "96184 49360";
const PHONE_TWO = "94905 00282";
const STUDENT_IMAGE = "/images/Smiling%20Student%20with%20Books%20and%20Thumbs-Up.png";
const EMPTY_FORM = { name: "", mobile: "", course: COURSES[0].title, qualification: "", batch: "", message: "" };

export default function App() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loginOpen, setLoginOpen] = useState(false);
  const [login, setLogin] = useState({ mobile: "", password: "" });
  const [loginStatus, setLoginStatus] = useState({ type: "", message: "" });

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setStatus({ type: "", message: "" });
  }

  function submitRegistration(event) {
    event.preventDefault();
    const mobile = form.mobile.trim();
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setStatus({ type: "error", message: "Please enter a valid 10-digit Indian mobile number." });
      return;
    }
    try {
      const saved = JSON.parse(localStorage.getItem("taskSkillRegistrations") || "[]");
      if (!Array.isArray(saved)) throw new Error("Invalid saved data");
      saved.push({ ...form, mobile, submittedAt: new Date().toISOString() });
      localStorage.setItem("taskSkillRegistrations", JSON.stringify(saved));
      setForm({ ...EMPTY_FORM });
      setStatus({ type: "success", message: "Demo registration saved in this browser only. The centre has not been notified." });
    } catch {
      setStatus({ type: "error", message: "Unable to save the demo registration in this browser." });
    }
  }

  function submitLogin(event) {
    event.preventDefault();
    if (!/^[6-9]\d{9}$/.test(login.mobile.trim())) {
      setLoginStatus({ type: "error", message: "Enter a valid 10-digit mobile number." });
      return;
    }
    setLoginStatus({
      type: "info",
      message: "Login screen is ready, but secure sign-in needs a backend API and registered user accounts. This demo does not verify passwords."
    });
  }

  function chooseCourse(title) {
    setForm((current) => ({ ...current, course: title }));
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="site" id="home">
      <div className="top"><div className="wrap topin">
        <span>Skill Training for the Youth of Telangana</span>
        <span className="top-contact">☎ +91 {PHONE_ONE} | +91 {PHONE_TWO} &nbsp; • &nbsp; ⌖ {ADDRESS}</span>
      </div></div>

      <header className="header"><div className="wrap nav">
        <a className="brand" href="#home" aria-label="TASK Skill Centre home">
          <span className="logo" aria-hidden="true">▤</span>
          <span><b>TASK Skill Centre</b><small>Skill Development &amp; Career Support</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a><a href="#courses">Courses</a><a href="#about">About</a><a href="#benefits">Benefits</a><a href="#contact">Contact</a>
        </nav>
        <button className="btn login" type="button" onClick={() => { setLoginOpen(true); setLoginStatus({ type: "", message: "" }); }}>Login</button>
        <a className="btn register-nav" href="#register">Register</a>
      </div></header>

      <main>
        <section className="hero"><div className="wrap hero-grid">
          <div className="intro">
            <span className="pill">✦ &nbsp; 100% FREE TRAINING</span>
            <h1>Learn Skills for a <strong>Brighter Future</strong></h1>
            <p>Free training programs to help you build real skills, get job opportunities and grow your career.</p>
            <div className="highlights">
              <div className="highlight"><span>👥</span><b>Free Training<small>for All</small></b></div>
              <div className="highlight"><span>▥</span><b>Practical<small>Hands-on Learning</small></b></div>
              <div className="highlight"><span>▰</span><b>Career<small>Guidance &amp; Support</small></b></div>
            </div>
            <a className="btn hero-cta" href="#courses">Explore Free Courses ↓</a>
          </div>

          <div className="art">
            <div className="art-circle" aria-hidden="true" />
            <img src={STUDENT_IMAGE} alt="Smiling student holding books and giving a thumbs-up" className="student-girl-image" />
            <div className="art-note">Learn<br />Practice<br />Grow <span>✦</span></div>
          </div>

          <section className="formcard" id="register" aria-labelledby="registration-title">
            <div className="formtitle">
              <span className="formlogo" aria-hidden="true">▤</span>
              <span><h2 id="registration-title">Register for Free Training</h2><p>Fill in the form to express your interest in a course.</p></span>
            </div>
            <form onSubmit={submitRegistration}>
              <label htmlFor="name">Full Name <em>*</em></label>
              <input id="name" name="name" autoComplete="name" value={form.name} onChange={updateField} placeholder="Enter your full name" required />
              <label htmlFor="mobile">Mobile Number <em>*</em></label>
              <input id="mobile" name="mobile" type="tel" autoComplete="tel-national" value={form.mobile} onChange={updateField} placeholder="Enter 10 digit mobile number" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength={10} required />
              <label htmlFor="course">Select Course <em>*</em></label>
              <select id="course" name="course" value={form.course} onChange={updateField} required>{COURSES.map((course) => <option key={course.title} value={course.title}>{course.title}</option>)}</select>
              <label htmlFor="qualification">Education Qualification <em>*</em></label>
              <input id="qualification" name="qualification" value={form.qualification} onChange={updateField} placeholder="e.g. 10th, 12th, Diploma, B.Tech" required />
              <label htmlFor="batch">Preferred Batch Timing <em>*</em></label>
              <select id="batch" name="batch" value={form.batch} onChange={updateField} required>
                <option value="">Select batch timing</option><option>Morning</option><option>Afternoon</option><option>Evening</option><option>Flexible</option>
              </select>
              <label htmlFor="message">Additional Message <span className="optional">(Optional)</span></label>
              <textarea id="message" name="message" value={form.message} onChange={updateField} placeholder="Any questions or special requirements?" rows={2} />
              <button className="btn submit" type="submit">➤ &nbsp; Submit Registration</button>
              {status.message && <p className={`status ${status.type}`} role="status" aria-live="polite">{status.message}</p>}
              <p className="privacy">Demo only: details are stored in this browser, not sent to the centre.</p>
            </form>
          </section>
        </div></section>

        <section className="courses section" id="courses"><div className="wrap">
          <div className="sectionhead"><div><small>LEARN NEW SKILLS</small><h2>Our Free Training Courses</h2><p>Choose a course and register your interest.</p></div><a href="#register">Register for a course →</a></div>
          <div className="coursegrid">{COURSES.map((course, index) => <article className="course" key={course.title}>
            <span className={`courseicon icon${index}`} aria-hidden="true">{course.icon}</span>
            <div><h3>{course.title}</h3><p>{course.description}</p><span className="free">Free Training</span><button className="course-link" type="button" onClick={() => chooseCourse(course.title)}>Select course →</button></div>
          </article>)}</div>
        </div></section>

        <section className="benefits" id="benefits"><div className="wrap benefitgrid">
          {[["♟","Expert Trainers","Learn from experienced trainers"],["▣","Practical Learning","Real-time projects and hands-on practice"],["▰","Job Support","Interview guidance and career support"],["♙","Free Certification","Course completion certificate provided"]].map(([icon,title,description], index) => <article className="benefit" key={title}><span className={`benefiticon b${index}`}>{icon}</span><span><b>{title}</b><small>{description}</small></span></article>)}
        </div></section>

        <section className="info section" id="about"><div className="wrap infogrid">
          <div><h2>About TASK Skill Centre</h2><p>TASK Skill Centre aims to help learners develop practical, industry-relevant skills and prepare for career opportunities through free training programs.</p><a className="btn outline" href="#courses">Know More About Us</a></div>
          <div><h2>Our Location</h2><p>⌖ &nbsp; {ADDRESS}</p><a className="btn outline" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}>Get Directions ↗</a></div>
          <div id="contact"><h2>Contact Us</h2><p>☎ &nbsp; <a href={`tel:+91${PHONE_ONE.replace(/\s/g, "")}`}>+91 {PHONE_ONE}</a><br />☎ &nbsp; <a href={`tel:+91${PHONE_TWO.replace(/\s/g, "")}`}>+91 {PHONE_TWO}</a></p><a className="whatsapp" target="_blank" rel="noreferrer" href={`https://wa.me/91${PHONE_ONE.replace(/\s/g, "")}?text=${encodeURIComponent("Hello TASK Skill Centre, I would like to know about free training courses.")}`}>◉ &nbsp; Chat on WhatsApp</a></div>
        </div></section>
      </main>
      <footer><div className="wrap foot"><span>© {new Date().getFullYear()} TASK Skill Centre. All rights reserved.</span><span>Learn · Practice · Grow</span></div></footer>

      {loginOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setLoginOpen(false); }}>
        <section className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
          <button type="button" className="modal-close" aria-label="Close login" onClick={() => setLoginOpen(false)}>×</button>
          <div className="modal-brand"><span className="formlogo">▤</span><div><h2 id="login-title">Welcome Back</h2><p>Login to TASK Skill Centre</p></div></div>
          <form onSubmit={submitLogin}>
            <label htmlFor="login-mobile">Mobile Number <em>*</em></label>
            <input id="login-mobile" type="tel" value={login.mobile} onChange={(event) => { setLogin({ ...login, mobile: event.target.value }); setLoginStatus({ type: "", message: "" }); }} placeholder="Enter your 10-digit mobile number" inputMode="numeric" pattern="[6-9][0-9]{9}" maxLength={10} autoComplete="username" required />
            <label htmlFor="login-password">Password <em>*</em></label>
            <input id="login-password" type="password" value={login.password} onChange={(event) => { setLogin({ ...login, password: event.target.value }); setLoginStatus({ type: "", message: "" }); }} placeholder="Enter your password" autoComplete="current-password" required />
            <button className="btn submit" type="submit">Login</button>
            {loginStatus.message && <p className={`status ${loginStatus.type}`} role="status" aria-live="polite">{loginStatus.message}</p>}
            <p className="login-note">Demo interface only. No password is stored or checked. Connect a secure backend to enable real login.</p>
            <p className="signup-prompt">New to TASK Skill Centre? <button type="button" onClick={() => { setLoginOpen(false); document.getElementById("register")?.scrollIntoView({ behavior: "smooth", block: "center" }); }}>Register here</button></p>
          </form>
        </section>
      </div>}
    </div>
  );
}
