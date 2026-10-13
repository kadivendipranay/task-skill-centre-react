
import React from "react";
import "./styles/global.css";

const CENTRE_ADDRESS =
  "Mulugu, Bandurupally Road, Opposite DSP Office, Telangana";

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
  { icon: "🤖", title: "AI & Digital Skills", description: "Explore digital tools and AI basics." }
];

const BENEFITS = [
  {
    icon: "📚",
    title: "Practical Learning",
    description: "Improve your skills through practice and project-based learning."
  },
  {
    icon: "👥",
    title: "Career Guidance",
    description: "Get guidance on resumes, interviews, and job applications."
  },
  {
    icon: "💼",
    title: "Placement Information",
    description: "Ask about job opportunities and placement assistance."
  }
];

const USERS_KEY = "task_demo_users";
const SESSION_KEY = "task_demo_session";

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function App() {
  const [currentUser, setCurrentUser] = React.useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
    } catch {
      return null;
    }
  });

  const [showAuth, setShowAuth] = React.useState(false);
  const [authMode, setAuthMode] = React.useState("login");

  const [authForm, setAuthForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [authMessage, setAuthMessage] = React.useState("");

  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    course: "",
    message: ""
  });

  const [status, setStatus] = React.useState("");

  function openAuth(mode) {
    setAuthMode(mode);
    setAuthMessage("");
    setShowAuth(true);
  }

  function handleAuthChange(event) {
    const { name, value } = event.target;

    setAuthForm((old) => ({
      ...old,
      [name]: value
    }));

    setAuthMessage("");
  }

  function handleAuthSubmit(event) {
    event.preventDefault();

    const email = authForm.email.trim().toLowerCase();
    const users = getUsers();

    if (authMode === "register") {
      if (authForm.password.length < 6) {
        setAuthMessage("Password must contain at least 6 characters.");
        return;
      }

      if (authForm.password !== authForm.confirmPassword) {
        setAuthMessage("Passwords do not match.");
        return;
      }

      if (users.some((user) => user.email === email)) {
        setAuthMessage("This email is already registered. Please log in.");
        return;
      }

      // Demo only. Do not store real passwords in browser storage.
      const newUser = {
        name: authForm.name.trim(),
        phone: authForm.phone.trim(),
        email,
        password: authForm.password
      };

      localStorage.setItem(
        USERS_KEY,
        JSON.stringify([...users, newUser])
      );

      finishLogin({
        name: newUser.name,
        email: newUser.email
      });

      return;
    }

    const user = users.find(
      (item) =>
        item.email === email &&
        item.password === authForm.password
    );

    if (!user) {
      setAuthMessage(
        "Incorrect email or password. Register first if you are a new user."
      );
      return;
    }

    finishLogin({
      name: user.name,
      email: user.email
    });
  }

  function finishLogin(user) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
    setCurrentUser(user);

    setAuthForm({
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    setAuthMessage("");
    setShowAuth(false);
  }

  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
  }

  function handleContactChange(event) {
    const { name, value } = event.target;

    setForm((old) => ({
      ...old,
      [name]: value
    }));

    setStatus("");
  }

  function handleContactSubmit(event) {
    event.preventDefault();

    setStatus(
      "Demo only: your enquiry has not been sent. Connect a backend or email service to receive submissions."
    );
  }

  function selectCourse(title) {
    setForm((old) => ({
      ...old,
      course: title
    }));
  }

  return (
    <>
      {/* Top information bar */}
      <div className="topbar">
        <span>
          ⭐ Skills for Your Future. Knowledge for Your Success.
        </span>

        <a href="#contact">
          📞 96184 49360 · 94905 00282
        </a>
      </div>

      {/* Header and navigation */}
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="TASK Skill Centre home"
        >
          <span className="brand-mark">🎓</span>

          <span>
            <strong className="brand-title">
              Telangana Academy for Skill and Knowledge
            </strong>

            <small>
              TASK · Skill Development &amp; Career Support
            </small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#benefits">Benefits</a>
          <a href="#contact">Contact</a>

          {currentUser ? (
            <>
              <span className="signed-in-label">
                Hi, {currentUser.name}
              </span>

              <button
                className="button button-red"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="button button-outline-dark"
                type="button"
                onClick={() => openAuth("login")}
              >
                Login
              </button>

              <button
                className="button button-red"
                type="button"
                onClick={() => openAuth("register")}
              >
                Register
              </button>
            </>
          )}
        </nav>
      </header>

      <main>
        {/* Hero section */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                Skill Training for the Youth of Telangana
              </span>

              <h1>
                Upgrade Your Skills.
                <br />
                <span>Build Your Future!</span>
              </h1>

              <p>
                Explore computer, software, and digital skills training
                to support your career goals. Contact us to learn about
                courses and upcoming batches.
              </p>

              <div className="hero-actions">
                <a className="button button-gold" href="#courses">
                  Explore Courses
                </a>

                <a className="button button-outline" href="#contact">
                  Contact Us
                </a>
              </div>

              <div className="hero-note">
                <span>✓</span> Learn · Practice · Grow
              </div>
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

                  <div>
                    <strong>
                      A New Direction for Your Career
                    </strong>

                    <small>
                      Contact us for course details and batch schedules.
                    </small>
                  </div>
                </div>
              </div>

              <div className="floating-badge">
                🎓 <span>Build Your Skills</span>
              </div>
            </div>
          </div>
        </section>

        {/* Courses section */}
        <section className="section courses-section" id="courses">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">OUR COURSES</span>

              <h2>Courses to Support Your Future</h2>

              <p>
                Explore courses that may match your interests and career goals.
              </p>
            </div>

            <div className="course-grid">
              {COURSES.map((course) => (
                <article className="course-card" key={course.title}>
                  <div className="course-icon">{course.icon}</div>

                  <h3>{course.title}</h3>

                  <p>{course.description}</p>

                  <a
                    className="text-button"
                    href="#contact"
                    onClick={() => selectCourse(course.title)}
                  >
                    Enquire →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section className="section benefits-section" id="benefits">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">WHY CHOOSE US</span>

              <h2>Support for Your Learning and Career</h2>

              <p>
                Contact the centre to confirm the services it offers.
              </p>
            </div>

            <div className="benefits-grid">
              {BENEFITS.map((benefit) => (
                <article
                  className="benefit-card"
                  key={benefit.title}
                >
                  <div className="benefit-icon">{benefit.icon}</div>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="cta">
          <div className="container cta-inner">
            <div>
              <h2>Start Building Your Career Today!</h2>

              <p>
                Ask about course fees, eligibility, certificates,
                and placement assistance.
              </p>
            </div>

            <a className="button button-red" href="#contact">
              Enquire Now
            </a>
          </div>
        </section>

        {/* Contact section */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">CONTACT US</span>

              <h2>Get in Touch for More Information</h2>

              <p>
                Contact us to ask about courses and registration.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <h3>Contact Information</h3>

                <div className="contact-row">
                  <span>📞</span>

                  <div>
                    <strong>96184 49360</strong>
                    <small>Course Enquiries</small>
                  </div>
                </div>

                <div className="contact-row">
                  <span>📞</span>

                  <div>
                    <strong>94905 00282</strong>
                    <small>Course Enquiries</small>
                  </div>
                </div>

                <div className="contact-row">
                  <span>📍</span>

                  <div>
                    <strong>TASK Skill Centre</strong>
                    <small>{CENTRE_ADDRESS}</small>
                  </div>
                </div>

                <div className="notice">
                  <strong>Important:</strong> Verify the centre's
                  affiliation, courses, fees, and placement claims
                  before publishing.
                </div>
              </div>

              <form
                className="contact-form"
                onSubmit={handleContactSubmit}
              >
                <h3>Course Enquiry Form</h3>

                <label htmlFor="contact-name">Full Name</label>

                <input
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleContactChange}
                  required
                  placeholder="Enter your full name"
                />

                <label htmlFor="contact-phone">Phone Number</label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleContactChange}
                  required
                  pattern="[0-9+\-\s]{10,15}"
                  placeholder="Enter your phone number"
                />

                <label htmlFor="contact-course">
                  Course of Interest
                </label>

                <select
                  id="contact-course"
                  name="course"
                  value={form.course}
                  onChange={handleContactChange}
                  required
                >
                  <option value="">Select a course</option>

                  {COURSES.map((course) => (
                    <option
                      key={course.title}
                      value={course.title}
                    >
                      {course.title}
                    </option>
                  ))}

                  <option value="Other">Other</option>
                </select>

                <label htmlFor="contact-message">
                  Message (Optional)
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleContactChange}
                  placeholder="What would you like to know?"
                />

                <button
                  className="button button-red submit-button"
                  type="submit"
                >
                  Submit Enquiry
                </button>

                {status && (
                  <p className="form-status" role="status">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <strong>
          Telangana Academy for Skill and Knowledge
        </strong>

        <p>{CENTRE_ADDRESS}</p>

        <p>Skill Development · Learning · Career Guidance</p>

        <small>
          © {new Date().getFullYear()} Website Demo.
          Replace sample details with verified information.
        </small>
      </footer>

      {/* Login and registration modal */}
      {showAuth && (
        <div
          className="auth-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowAuth(false);
            }
          }}
        >
          <section
            className="auth-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-title"
          >
            <button
              className="auth-close"
              type="button"
              onClick={() => setShowAuth(false)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="auth-icon">🎓</div>

            <p className="section-kicker auth-kicker">
              TASK SKILL CENTRE
            </p>

            <h2 id="auth-title">
              {authMode === "login"
                ? "Welcome Back"
                : "Create Your Account"}
            </h2>

            <p className="auth-subtitle">
              {authMode === "login"
                ? "Log in to continue to your account."
                : "Register to get started with course enquiries."}
            </p>

            <div className="auth-tabs">
              <button
                className={authMode === "login" ? "active" : ""}
                type="button"
                onClick={() => {
                  setAuthMode("login");
                  setAuthMessage("");
                }}
              >
                Login
              </button>

              <button
                className={authMode === "register" ? "active" : ""}
                type="button"
                onClick={() => {
                  setAuthMode("register");
                  setAuthMessage("");
                }}
              >
                Register
              </button>
            </div>

            <form
              className="auth-form"
              onSubmit={handleAuthSubmit}
            >
              {authMode === "register" && (
                <>
                  <label htmlFor="auth-name">Full Name</label>

                  <input
                    id="auth-name"
                    name="name"
                    value={authForm.name}
                    onChange={handleAuthChange}
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                  />

                  <label htmlFor="auth-phone">Phone Number</label>

                  <input
                    id="auth-phone"
                    name="phone"
                    type="tel"
                    value={authForm.phone}
                    onChange={handleAuthChange}
                    required
                    pattern="[0-9+\-\s]{10,15}"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                  />
                </>
              )}

              <label htmlFor="auth-email">Email Address</label>

              <input
                id="auth-email"
                name="email"
                type="email"
                value={authForm.email}
                onChange={handleAuthChange}
                required
                autoComplete="email"
                placeholder="you@example.com"
              />

              <label htmlFor="auth-password">Password</label>

              <input
                id="auth-password"
                name="password"
                type="password"
                value={authForm.password}
                onChange={handleAuthChange}
                required
                minLength={6}
                autoComplete={
                  authMode === "login"
                    ? "current-password"
                    : "new-password"
                }
                placeholder="At least 6 characters"
              />

              {authMode === "register" && (
                <>
                  <label htmlFor="auth-confirm-password">
                    Confirm Password
                  </label>

                  <input
                    id="auth-confirm-password"
                    name="confirmPassword"
                    type="password"
                    value={authForm.confirmPassword}
                    onChange={handleAuthChange}
                    required
                    minLength={6}
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                  />
                </>
              )}

              {authMessage && (
                <p className="auth-message" role="alert">
                  {authMessage}
                </p>
              )}

              <button
                className="button button-red auth-submit"
                type="submit"
              >
                {authMode === "login"
                  ? "Login"
                  : "Create Account"}
              </button>
            </form>

            <p className="auth-switch">
              {authMode === "login"
                ? "Don't have an account? "
                : "Already have an account? "}

              <button
                type="button"
                onClick={() => {
                  setAuthMode(
                    authMode === "login" ? "register" : "login"
                  );
                  setAuthMessage("");
                }}
              >
                {authMode === "login" ? "Register" : "Login"}
              </button>
            </p>

            <p className="auth-warning">
              Demo authentication only. Do not use real or reused
              passwords. Production authentication needs a secure backend.
            </p>
          </section>
        </div>
      )}
    </>
  );
}

export default App;
