"use client";

import s from "./css/products.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Chatcompunents from "../components/Chatcomponent";

export default function ProductsPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setmessage] = useState("");
  const [emessage, setemessage] = useState('');
  const [Isloading, setIsloading] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (emessage) {
      const timer = setTimeout(() => {
        setemessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [emessage]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setmessage("");
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const submitInterest = async (e) => {
    e.preventDefault();
    if (Isloading) return;
    
    try {
      setIsloading(true);
      const respons = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/early-access`, {
        name,
        email,
      });
      
      if (respons.data.detail) {
        setemessage(respons.data.detail);
      }
      
      if (respons.data.message) {
        setmessage("Thank you for registering! 🎉 We'll keep you updated.😁");
        setName("");
        setEmail("");
      }
    } catch (err) {
      console.log(`Error while sending product request:${err}`);
      setemessage("Something went wrong. Please try again.");
    } finally {
      setIsloading(false);
    }
  };

  return (
    <section className={s.wrapper}>
      <Chatcompunents />
      
      {/* Floating background elements */}
      <div className={s.bgOrb1}></div>
      <div className={s.bgOrb2}></div>
      <div className={s.bgOrb3}></div>

      {/* Hero Section */}
      <div className={s.hero}>
        <div className={s.badge}>
          <span className={s.badgeDot}></span>
          Next-Gen AI Solutions
        </div>
        
        <h1 className={s.mainTitle}>
          Powerful AI Products
          <span className={s.gradient}> Built for Growth</span>
        </h1>
        
        <p className={s.subtitle}>
          Transform your business with intelligent automation and cutting-edge AI technology
        </p>
      </div>

      {/* Products Grid */}
      <div className={s.productsGrid}>
        {/* PRODUCT 1 - SalesMind AI */}
        <div 
          className={`${s.card} ${activeCard === 1 ? s.cardActive : ''}`}
          onMouseEnter={() => setActiveCard(1)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className={s.cardGlow}></div>
          
          <div className={s.cardHeader}>
            <div className={s.iconBox}>
              <svg className={s.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className={s.statusBadge}>
              <span className={s.statusDot}></span>
              In Development
            </div>
          </div>

          <h2 className={s.cardTitle}>SalesMind AI</h2>
          <p className={s.tagline}>Intelligent sales automation for modern businesses</p>

          <div className={s.features}>
            <div className={s.feature}>
              <svg className={s.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Instant customer message responses</span>
            </div>
            <div className={s.feature}>
              <svg className={s.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Smart catalog & order management</span>
            </div>
            <div className={s.feature}>
              <svg className={s.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>WhatsApp & multi-platform integration</span>
            </div>
            <div className={s.feature}>
              <svg className={s.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Auto-generated ecommerce sites</span>
            </div>
            <div className={s.feature}>
              <svg className={s.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Comprehensive analytics dashboard</span>
            </div>
            <div className={s.feature}>
              <svg className={s.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Optimized for SMBs</span>
            </div>
          </div>

          <div className={s.cardFooter}>
            <span className={s.comingSoon}>Coming Soon</span>
          </div>
        </div>

        {/* PRODUCT 2 - KnowledgeCore API */}
        <div 
          className={`${s.card} ${activeCard === 2 ? s.cardActive : ''}`}
          onMouseEnter={() => setActiveCard(2)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className={s.cardGlow}></div>
          
          <div className={s.cardHeader}>
            <div className={`${s.iconBox} ${s.iconBoxAlt}`}>
              <svg className={s.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <div className={s.statusBadge}>
              <span className={s.statusDot}></span>
              In Development
            </div>
          </div>

          <h2 className={s.cardTitle}>KnowledgeCore API</h2>
          <p className={s.tagline}>RAG-powered chatbot infrastructure for developers</p>

          <div className={s.features}>
            <div className={s.feature}>
              <svg className={s.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Plug-and-play REST API</span>
            </div>
            <div className={s.feature}>
              <svg className={s.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Train on PDFs, docs & databases</span>
            </div>
            <div className={s.feature}>
              <svg className={s.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>RAG-based accurate responses</span>
            </div>
            <div className={s.feature}>
              <svg className={s.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Simple API integration</span>
            </div>
          </div>

          <div className={s.cardFooter}>
            <span className={s.comingSoon}>Coming Soon</span>
          </div>
        </div>
      </div>

      {/* Early Access Section */}
      <div className={s.earlyAccess}>
        <div className={s.earlyAccessContent}>
          <div className={s.earlyAccessHeader}>
            <h3 className={s.earlyAccessTitle}>
              <span className={s.sparkle}>✨</span>
              Be Among the First
            </h3>
            <p className={s.earlyAccessSubtitle}>
              Get exclusive early access and be part of shaping the future of AI-powered business tools
            </p>
          </div>

          <form onSubmit={submitInterest} className={s.form}>
            <div className={s.inputGroup}>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={s.input}
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                required
                className={s.input}
              />
            </div>
            <button type="submit" className={s.submitBtn} disabled={Isloading}>
              {Isloading ? (
                <>
                  <span className={s.spinner}></span>
                  Saving...
                </>
              ) : (
                <>
                  Notify Me
                  <svg className={s.arrow} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {message && <div className={s.successMessage}>{message}</div>}
          {emessage && <div className={s.errorMessage}>{emessage}</div>}
        </div>
      </div>
    </section>
  );
}