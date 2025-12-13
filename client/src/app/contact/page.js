"use client";

import s from "./css/contactpage.module.css";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Contact form data:", formData);

    alert("Thanks for contacting Teclury! We’ll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <section className={s.contactmain}>
      <div className={s.contact}>
        <h1>Contact Us 📞</h1>
        <p className={s.subtitle}>We would love to hear from you 🥰</p>

        <div className={s.formmain}>
          {/* LEFT – FORM */}
          <form className={s.formleft} onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Your Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Your Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          {/* RIGHT – CONTACT DETAILS */}
          <aside className={s.formright}>
            <h2>Get in Touch 😄</h2>
            <p>
              Reach out for project discussions, support, or partnerships.
              We’re always happy to help.
            </p>

            <div className={s.contactDetails}>
              <div>
                <span>✉️</span>
                <a href="mailto:contact@teclury.com">
                  contact@teclury.com
                </a>
              </div>

              <div>
                <span>📞</span>
                <a href="tel:+916382360895">
                  +91 63823 60895
                </a>
              </div>

              <div>
                <span>🟢</span>
                <a
                  href="https://wa.me/916382360895"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
