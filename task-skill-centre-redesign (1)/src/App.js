import React, { useState } from "react";
import "./styles/global.css";

const courses = [
  ["💻", "Computer Basics", "Learn essential computer skills."],
  ["📊", "MS Office", "Documents, spreadsheets, and presentations."],
  ["🧑‍💻", "C Language", "Build programming fundamentals."],
  ["🌐", "Web Designing", "Learn HTML, CSS, and JavaScript."],
  ["🗄️", "Database Fundamentals", "Understand databases and SQL."],
  ["📐", "AutoCAD", "Explore computer-aided design."],
  ["📈", "Tally Prime & GST", "Learn accounting and GST basics."],
  ["🗣️", "Soft Skills", "Improve communication and interview skills."],
  ["💬", "Spoken English", "Build everyday speaking confidence."],
  ["🤖", "AI & Digital Skills", "Explore digital tools and AI basics."],
];
const address = "Mulugu, Bandurupally Road, Opposite DSP Office, Telangana";

export default function App() {
  const [form, setForm] = useState({ name: "", mobile: "", course: courses[0][1], qualification: "", batch: "", message: "" });
  const [status, setStatus] = useState("");
  const update = e => { setForm({ ...form, [e.target.name]: e.target.value }); setStatus(""); };
  const submit = e => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) { setStatus("Please enter a valid 10-digit Indian mobile number."); return; }
    const list = JSON.parse(localStorage.getItem("taskSkillRegistrations") || "[]");
    list.push({ ...form, submittedAt: new Date().toISOString() });
    localStorage.setItem("taskSkillRegistrations", JSON.stringify(list));
    setStatus("Registration saved in this browser demo. The centre has not been notified yet.");
    setForm({ name: "", mobile: "", course: courses[0][1], qualification: "", batch: "", message: "" });
  };
  return <div id="home" className="site">
    <div className="top"><div className="wrap topin"><span>Skill Training for the Youth of Telangana</span><span>☎ +91 96184 49360 | +91 94905 00282　⌖ {address}</span></div></div>
    <header className="header"><div className="wrap nav">
      <a className="brand" href="#home"><span className="logo">▤</span><span><b>TASK Skill Centre</b><small>Skill Development &amp; Career Support</small></span></a>
      <nav><a href="#home">Home</a><a href="#courses">Courses</a><a href="#about">About</a><a href="#benefits">Benefits</a><a href="#contact">Contact</a></nav>
      <a className="btn outline" href="#register">Register</a>
    </div></header>
    <main>
      <section className="hero"><div className="wrap hero-grid">
        <div className="intro"><span className="pill">✦　100% FREE TRAINING</span><h1>Learn Skills for a <strong>Brighter Future</strong></h1><p>Free training programs to help you build real skills, get job opportunities and grow your career.</p>
          <div className="highlights"><span>👥 <b>Free Training</b><small>for All</small></span><span>▥ <b>Practical</b><small>Hands-on Learning</small></span><span>▰ <b>Career</b><small>Guidance &amp; Support</small></span></div>
        </div>
        <div className="art" aria-hidden="true"><div className="circle"></div><div className="person"><div className="hair"></div><div className="face"></div><div className="body"></div><div className="shirt"></div><div className="book"></div></div><div className="artwords">Learn<br/>Practice<br/>Grow ✦</div></div>
        <section className="formcard" id="register"><div className="formtitle"><span className="formlogo">▤</span><span><h2>Register for Free Training</h2><p>Fill the form below to join our free training programs.</p></span></div>
          <form onSubmit={submit}>
            <label>Full Name *</label><input name="name" value={form.name} onChange={update} placeholder="Enter your full name" required/>
            <label>Mobile Number *</label><input name="mobile" value={form.mobile} onChange={update} placeholder="Enter 10 digit mobile number" inputMode="numeric" maxLength="10" required/>
            <label>Select Course *</label><select name="course" value={form.course} onChange={update}>{courses.map(c=><option key={c[1]}>{c[1]}</option>)}</select>
            <label>Education Qualification *</label><input name="qualification" value={form.qualification} onChange={update} placeholder="e.g. 10th, 12th, Diploma, B.Tech" required/>
            <label>Preferred Batch Timing *</label><select name="batch" value={form.batch} onChange={update} required><option value="">Select batch timing</option><option>Morning</option><option>Afternoon</option><option>Evening</option><option>Flexible</option></select>
            <label>Additional Message <small>(Optional)</small></label><textarea name="message" value={form.message} onChange={update} placeholder="Any questions or special requirements?"/>
            <button className="btn submit" type="submit">➤　Submit Registration</button>
            {status && <p className="status" role="status">{status}</p>}
            <p className="privacy">Demo only: details are saved in this browser, not sent to the centre.</p>
          </form>
        </section>
      </div></section>
      <section className="courses section" id="courses"><div className="wrap"><div className="sectionhead"><div><small>LEARN NEW SKILLS</small><h2>Our Free Training Courses</h2></div><a href="#register">Register for a course →</a></div>
        <div className="coursegrid">{courses.map((c,i)=><article className="course" key={c[1]}><span className={"courseicon icon"+i}>{c[0]}</span><div><h3>{c[1]}</h3><p>{c[2]}</p><span className="free">Free Training</span></div></article>)}</div>
      </div></section>
      <section className="benefits" id="benefits"><div className="wrap benefitgrid">{[["♟","Expert Trainers","Learn from experienced trainers"],["▣","Practical Learning","Real-time projects and hands-on practice"],["▰","Job Support","Interview guidance and career support"],["♙","Free Certification","Course completion certificate"]].map((b,i)=><article className="benefit" key={b[1]}><span className={"benefiticon b"+i}>{b[0]}</span><span><b>{b[1]}</b><small>{b[2]}</small></span></article>)}</div></section>
      <section className="info section" id="about"><div className="wrap infogrid"><div><h2>About TASK Skill Centre</h2><p>TASK Skill Centre aims to help students build practical, industry-relevant skills and prepare for career opportunities through free training programs.</p><a className="btn outline" href="#courses">Explore Free Courses</a></div><div><h2>Our Location</h2><p>⌖　{address}</p><a className="btn outline" target="_blank" rel="noreferrer" href={"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(address)}>Get Directions ↗</a></div><div id="contact"><h2>Contact Us</h2><p>☎　<a href="tel:+919618449360">+91 96184 49360</a><br/>☎　<a href="tel:+919490500282">+91 94905 00282</a></p><a className="whatsapp" target="_blank" rel="noreferrer" href="https://wa.me/919618449360?text=Hello%20TASK%20Skill%20Centre%2C%20I%20want%20to%20know%20about%20free%20training.">◉　Chat on WhatsApp</a></div></div></section>
    </main><footer><div className="wrap foot"><span>© {new Date().getFullYear()} TASK Skill Centre. All rights reserved.</span><span>Learn · Practice · Grow</span></div></footer>
  </div>;
}
