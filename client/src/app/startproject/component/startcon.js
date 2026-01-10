"use client";
import styles from "../css/startcon.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function StartForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    company: "",
    email: "",
    phone: "",
    projectdetails: "",
    budget: "10,000Rs - 50,000Rs",
    type: "Web Development",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Auto-dismiss messages
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 6000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  // Validation functions
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, "");
    return cleanPhone.length >= 10 && cleanPhone.length <= 15;
  };

  const validateField = (name, value) => {
    switch (name) {
      case "fullname":
        if (value.length < 2) return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value)) return "Name can only contain letters";
        break;
      case "company":
        if (value.length < 2) return "Company name must be at least 2 characters";
        break;
      case "email":
        if (!validateEmail(value)) return "Invalid email format";
        break;
      case "phone":
        if (!validatePhone(value)) return "Phone must be 10-15 digits";
        break;
      case "projectdetails":
        if (value.length < 20) return "Please provide at least 20 characters";
        if (value.length > 2000) return "Project details too long (max 2000 chars)";
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
      processedValue = value.replace(/[^\d\s+()-]/g, "");
    } else if (name === "fullname") {
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

  const validateForm = () => {
    const errors = {};
    const requiredFields = ["fullname", "company", "email", "phone", "projectdetails"];

    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
      if (!formData[field].trim()) errors[field] = "This field is required";
    });

    setFieldErrors(errors);
    setTouched({
      fullname: true,
      company: true,
      email: true,
      phone: true,
      projectdetails: true,
    });

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (loading) return;
    
    if (!validateForm()) {
      setErrorMessage("Please fix all errors before submitting");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/start-project`,
        formData,
        { timeout: 10000 }
      );

      if (response.data.detail) {
        setErrorMessage(response.data.detail);
      }

      if (response.data.message) {
        setSuccessMessage(
          "🎉 Your project proposal request has been submitted! We'll get back to you within 24 hours."
        );
        setFormData({
          fullname: "",
          company: "",
          email: "",
          phone: "",
          projectdetails: "",
          budget: "10,000Rs - 50,000Rs",
          type: "Web Development",
        });
        setFieldErrors({});
        setTouched({});
        setCurrentStep(1);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      
      if (err.code === "ECONNABORTED") {
        setErrorMessage("Request timeout. Please try again.");
      } else if (err.response?.status === 429) {
        setErrorMessage("Too many requests. Please wait and try again.");
      } else {
        setErrorMessage("Failed to submit. Please try again or contact us directly.");
      }
    } finally {
      setLoading(false);
    }
  };

  const getProgressPercentage = () => {
    const fields = ["fullname", "company", "email", "phone", "projectdetails"];
    const filled = fields.filter((field) => formData[field].trim()).length;
    return Math.round((filled / fields.length) * 100);
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return (
        formData.fullname &&
        formData.company &&
        formData.email &&
        formData.phone &&
        !fieldErrors.fullname &&
        !fieldErrors.company &&
        !fieldErrors.email &&
        !fieldErrors.phone
      );
    }
    return true;
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formcon}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.formTitle}>
            Start Your Project with Teclury 🎯
          </h1>
          <p className={styles.subtitle}>
            Tell us about your challenge and timeline — we'll reply within 24 hours.
          </p>
          
          {/* Progress Bar */}
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
            <span className={styles.progressText}>
              {getProgressPercentage()}% Complete
            </span>
          </div>
        </div>

        {/* Step Indicators */}
        <div className={styles.stepIndicators}>
          <div className={`${styles.step} ${currentStep >= 1 ? styles.active : ""}`}>
            <div className={styles.stepCircle}>1</div>
            <span>Contact Info</span>
          </div>
          <div className={styles.stepLine} />
          <div className={`${styles.step} ${currentStep >= 2 ? styles.active : ""}`}>
            <div className={styles.stepCircle}>2</div>
            <span>Project Details</span>
          </div>
        </div>

        {/* Forms */}
        <div className={styles.formmain}>
          {/* LEFT FORM - Contact Information */}
          <div className={styles.formleft}>
            <div className={styles.cardHeader}>
              <h3>📋 Contact Information</h3>
              <p>Let us know who you are</p>
            </div>

            <form>
              {/* Full Name */}
              <div className={styles.formGroup}>
                <label htmlFor="fullname">
                  Full Name <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon}>👤</span>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="John Doe"
                    value={formData.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      fieldErrors.fullname && touched.fullname
                        ? styles.inputError
                        : ""
                    }
                    required
                  />
                </div>
                {fieldErrors.fullname && touched.fullname && (
                  <span className={styles.errorText}>{fieldErrors.fullname}</span>
                )}
              </div>

              {/* Company Name */}
              <div className={styles.formGroup}>
                <label htmlFor="company">
                  Company Name <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon}>🏢</span>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your Company Ltd."
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      fieldErrors.company && touched.company
                        ? styles.inputError
                        : ""
                    }
                    required
                  />
                </div>
                {fieldErrors.company && touched.company && (
                  <span className={styles.errorText}>{fieldErrors.company}</span>
                )}
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Email Address <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon}>✉️</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      fieldErrors.email && touched.email ? styles.inputError : ""
                    }
                    required
                  />
                </div>
                {fieldErrors.email && touched.email && (
                  <span className={styles.errorText}>{fieldErrors.email}</span>
                )}
              </div>

              {/* Phone */}
              <div className={styles.formGroup}>
                <label htmlFor="phone">
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon}>📱</span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+918526521533"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      fieldErrors.phone && touched.phone ? styles.inputError : ""
                    }
                    required
                  />
                </div>
                {fieldErrors.phone && touched.phone && (
                  <span className={styles.errorText}>{fieldErrors.phone}</span>
                )}
              </div>

              {/* Project Details */}
              <div className={styles.formGroup}>
                <label htmlFor="projectdetails">
                  Project Details <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <span className={`${styles.inputIcon} ${styles.textareaIcon}`}>
                    📝
                  </span>
                  <textarea
                    id="projectdetails"
                    name="projectdetails"
                    rows="6"
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    value={formData.projectdetails}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      fieldErrors.projectdetails && touched.projectdetails
                        ? styles.inputError
                        : ""
                    }
                    required
                  />
                </div>
                <div className={styles.charCount}>
                  {formData.projectdetails.length}/2000 characters
                </div>
                {fieldErrors.projectdetails && touched.projectdetails && (
                  <span className={styles.errorText}>
                    {fieldErrors.projectdetails}
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* RIGHT FORM - Project Details */}
          <div className={styles.formright}>
            <div className={styles.cardHeader}>
              <h3>💼 Project Specifications</h3>
              <p>Help us understand your needs</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Budget */}
              <div className={styles.formGroup}>
                <label htmlFor="budget">
                  Estimated Budget <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon}>💰</span>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  >
                    <option value="less than 10,000Rs">Less than ₹10,000</option>
                    <option value="10,000Rs - 50,000Rs">₹10,000 - ₹50,000</option>
                    <option value="50,000Rs - 1,00,000Rs">₹50,000 - ₹1,00,000</option>
                    <option value="more than 1,00,000Rs">More than ₹1,00,000</option>
                  </select>
                </div>
              </div>

              {/* Project Type */}
              <div className={styles.formGroup}>
                <label htmlFor="type">
                  Project Type <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <span className={styles.inputIcon}>🚀</span>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Full-Stack Development">
                      Full-Stack Development
                    </option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="Digital marketing">Digital Marketing</option>
                  </select>
                </div>
              </div>

              {/* Info Box */}
              <div className={styles.infoBox}>
                <span className={styles.infoIcon}>💡</span>
                <div>
                  <strong>What happens next?</strong>
                  <p>We'll review your request and send a detailed proposal within 24 hours.</p>
                </div>
              </div>

              {/* Messages */}
              {errorMessage && (
                <div className={styles.alertError}>
                  <span>⚠️</span>
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className={styles.alertSuccess}>
                  <span>✓</span>
                  {successMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className={styles.spinner}></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    Request Project Proposal
                    <span className={styles.btnIcon}>→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}