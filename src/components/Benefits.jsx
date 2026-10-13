const benefits = [
  { icon: "📚", title: "Practical Learning", text: "Build skills through guided practice and project-based learning, where available." },
  { icon: "👥", title: "Career Guidance", text: "Get guidance on resumes, interviews, and job applications." },
  { icon: "💼", title: "Job Information", text: "Ask about current openings and the placement assistance offered by the centre." }
];

export default function Benefits() {
  return (
    <section className="section benefits-section" id="benefits">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">WHY CHOOSE US</span>
          <h2>Support for Your Learning and Career</h2>
          <p>Contact the centre to confirm which services are currently available.</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((item) => (
            <article className="benefit-card" key={item.title}>
              <div className="benefit-icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}