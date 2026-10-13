const courses = [
  { icon: "💻", title: "Computer Basics", desc: "Learn essential computer skills." },
  { icon: "📊", title: "MS Office", desc: "Documents, spreadsheets, and presentations." },
  { icon: "🧑‍💻", title: "C Language", desc: "Build programming fundamentals." },
  { icon: "🌐", title: "Web Designing", desc: "Learn HTML, CSS, and JavaScript basics." },
  { icon: "🗄️", title: "Database Fundamentals", desc: "Understand data and SQL concepts." },
  { icon: "📐", title: "AutoCAD", desc: "Explore computer-aided design." },
  { icon: "📈", title: "Tally Prime & GST", desc: "Learn accounting and GST fundamentals." },
  { icon: "🗣️", title: "Soft Skills", desc: "Practice communication and interview skills." },
  { icon: "💬", title: "Spoken English", desc: "Build everyday speaking confidence." },
  { icon: "🤖", title: "AI & Digital Skills", desc: "Explore digital tools and AI basics." }
];

export default function Courses() {
  return (
    <section className="section courses-section" id="courses">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">OUR COURSES</span>
          <h2>Courses to Support Your Future</h2>
          <p>Explore options that may match your interests and career goals.</p>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <div className="course-icon" aria-hidden="true">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <a className="text-button" href="#contact">Enquire →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}