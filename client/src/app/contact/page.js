"use client";

import s from "./css/contactpage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Chatcompunents from "../components/Chatcomponent";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Auto-dismiss messages after 5 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  // Real-time validation
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (value.length < 2) return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value)) return "Name can only contain letters";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
        break;
      case "phone":
        const cleanPhone = value.replace(/\D/g, "");
        if (cleanPhone.length < 10) return "Phone must be at least 10 digits";
        if (cleanPhone.length > 15) return "Phone number too long";
        break;
      case "message":
        if (value.length < 10) return "Message must be at least 10 characters";
        if (value.length > 1000) return "Message too long (max 1000 characters)";
        break;
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Process specific fields
    if (name === "email") {
      processedValue = value.replace(/\s/g, "").toLowerCase();
    } else if (name === "phone") {
      // Allow only numbers, spaces, +, -, and ()
      processedValue = value.replace(/[^\d\s+()-]/g, "");
    } else if (name === "name") {
      // Capitalize first letter of each word
      processedValue = value.replace(/\b\w/g, (char) => char.toUpperCase());
    }

    setFormData((prev) => ({ ...prev, [name]: processedValue }));

    // Validate on change if field was touched
    if (touched[name]) {
      const error = validateField(name, processedValue);
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setFieldErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const errors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) errors[key] = error;
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setTouched({
        name: true,
        email: true,
        phone: true,
        message: true,
      });
      setErrorMessage("Please fix the errors before submitting");
      return;
    }

    if (loading) return;

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        formData,
        {
          timeout: 10000, // 10 second timeout
        }
      );

      if (response.data.detail) {
        setErrorMessage(response.data.detail);
      }

      if (response.data.message) {
        setSuccessMessage("✅ Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setFieldErrors({});
        setTouched({});
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      
      if (err.code === "ECONNABORTED") {
        setErrorMessage("Request timeout. Please check your connection and try again.");
      } else if (err.response?.status === 429) {
        setErrorMessage("Too many requests. Please wait a moment and try again.");
      } else if (err.response?.data?.detail) {
        setErrorMessage(err.response.data.detail);
      } else {
        setErrorMessage("Failed to send message. Please try again or contact us directly.");
      }
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.message &&
      Object.values(fieldErrors).every((error) => !error)
    );
  };

  return (
    <section className={s.contactmain}>
      <Chatcompunents />
      <div className={s.contact}>
        {/* Header Section */}
        <div className={s.header}>
          <h1>Let's Connect 📞</h1>
          <p className={s.subtitle}>
            Have a project in mind? We'd love to hear from you 💬
          </p>
        </div>

        <div className={s.formmain}>
          {/* LEFT FORM */}
          <form className={s.formleft} onSubmit={handleSubmit} noValidate>
            <div className={s.formHeader}>
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll respond within 24 hours</p>
            </div>

            {/* Name Field */}
            <div className={s.formGroup}>
              <label htmlFor="name">
                Your Name <span className={s.required}>*</span>
              </label>
              <div className={s.inputWrapper}>
                <span className={s.inputIcon}>👤</span>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldErrors.name && touched.name ? s.inputError : ""}
                  required
                />
              </div>
              {fieldErrors.name && touched.name && (
                <span className={s.errorText}>{fieldErrors.name}</span>
              )}
            </div>

            {/* Email Field */}
            <div className={s.formGroup}>
              <label htmlFor="email">
                Email Address <span className={s.required}>*</span>
              </label>
              <div className={s.inputWrapper}>
                <span className={s.inputIcon}>✉️</span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldErrors.email && touched.email ? s.inputError : ""}
                  required
                />
              </div>
              {fieldErrors.email && touched.email && (
                <span className={s.errorText}>{fieldErrors.email}</span>
              )}
            </div>

            {/* Phone Field */}
            <div className={s.formGroup}>
              <label htmlFor="phone">
                Phone Number <span className={s.required}>*</span>
              </label>
              <div className={s.inputWrapper}>
                <span className={s.inputIcon}>📱</span>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldErrors.phone && touched.phone ? s.inputError : ""}
                  required
                />
              </div>
              {fieldErrors.phone && touched.phone && (
                <span className={s.errorText}>{fieldErrors.phone}</span>
              )}
            </div>

            {/* Message Field */}
            <div className={s.formGroup}>
              <label htmlFor="message">
                Your Message <span className={s.required}>*</span>
              </label>
              <div className={s.inputWrapper}>
                <span className={`${s.inputIcon} ${s.textareaIcon}`}>💬</span>
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldErrors.message && touched.message ? s.inputError : ""}
                  required
                />
              </div>
              <div className={s.charCount}>
                {formData.message.length}/1000 characters
              </div>
              {fieldErrors.message && touched.message && (
                <span className={s.errorText}>{fieldErrors.message}</span>
              )}
            </div>

            {/* Messages */}
            {errorMessage && (
              <div className={s.alertError}>
                <span>⚠️</span>
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className={s.alertSuccess}>
                <span>✓</span>
                {successMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !isFormValid()}
              className={s.submitBtn}
            >
              {loading ? (
                <>
                  <span className={s.spinner}></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span className={s.btnIcon}>→</span>
                </>
              )}
            </button>
          </form>

          {/* RIGHT CONTACT INFO */}
          <aside className={s.formright}>
            <div className={s.infoCard}>
              <h2>Get in Touch 👋</h2>
              <p>
                We're here to help with project discussions, technical support,
                or partnership opportunities. Don't hesitate to reach out!
              </p>
            </div>

            <div className={s.contactMethods}>
              <h3>Contact Information</h3>
              
              <a href="mailto:contact@teclury.in" className={s.contactItem}>
                <div className={s.iconCircle}>
                  <span>✉️</span>
                </div>
                <div className={s.contactInfo}>
                  <h4>Email Us</h4>
                  <p>contact@teclury.in</p>
                </div>
              </a>

              <a href="tel:+918526521533" className={s.contactItem}>
                <div className={s.iconCircle}>
                  <span>📞</span>
                </div>
                <div className={s.contactInfo}>
                  <h4>Call Us</h4>
                  <p>+91 8526521533</p>
                </div>
              </a>

              <a
                href="https://wa.me/918526521533"
                target="_blank"
                rel="noopener noreferrer"
                className={`${s.contactItem} ${s.whatsapp}`}
              >
                <div className={s.iconCircle}>
                  <span>💬</span>
                </div>
                <div className={s.contactInfo}>
                  <h4>WhatsApp</h4>
                  <p>Chat with us instantly</p>
                </div>
              </a>
            </div>

            <div className={s.workingHours}>
              <h3>Working Hours</h3>
              <div className={s.hoursList}>
                <div className={s.hoursItem}>
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className={s.hoursItem}>
                  <span>Saturday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className={s.hoursItem}>
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}