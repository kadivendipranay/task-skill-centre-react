import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });
  const [status, setStatus] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("Demo only: your details were not sent. Connect this form to a backend or email service to receive enquiries.");
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">CONTACT US</span>
          <h2>Get in Touch for More Information</h2>
          <p>Please verify the phone numbers, address, and centre details before publishing.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Contact Information</h3>
            <div className="contact-row"><span>📞</span><div><strong>96184 49360</strong><small>Phone / Enquiries</small></div></div>
            <div className="contact-row"><span>📞</span><div><strong>94905 00282</strong><small>Phone / Enquiries</small></div></div>
            <div className="contact-row"><span>📍</span><div><strong>TASK Regional Centre</strong><small>Add the verified full address of your centre here.</small></div></div>
            <div className="notice"><strong>Important:</strong> This is a demo website. Verify official affiliation, courses, fees, certification, and placement claims before publishing.</div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Course Enquiry Form</h3>
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Enter your full name" />
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required pattern="[0-9+\\-\\s]{10,15}" placeholder="Enter your phone number" />
            <label htmlFor="course">Course of Interest</label>
            <select id="course" name="course" value={form.course} onChange={handleChange} required>
              <option value="">Select a course</option>
              <option>Computer Basics</option><option>MS Office</option><option>C Language</option>
              <option>Web Designing</option><option>Database Fundamentals</option><option>AutoCAD</option>
              <option>Tally Prime & GST</option><option>Soft Skills</option><option>Spoken English</option>
              <option>AI & Digital Skills</option><option>Other</option>
            </select>
            <label htmlFor="message">Message (Optional)</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="What would you like to know?" />
            <button className="button button-red submit-button" type="submit">Submit Enquiry</button>
            {status && <p className="form-status" role="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}