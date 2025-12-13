"use client";

import s from "./css/products.module.css";
import { useState } from "react";

export default function ProductsPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const submitInterest = (e) => {
    e.preventDefault();
    alert("🎉 Thanks! You’ll get early access updates soon.");
    setName("");
    setEmail("");
  };

  return (
    <section className={s.wrapper}>
      <h1>🚀 Our Products</h1>
      <p className={s.subtitle}>
        We’re building powerful AI products to help businesses and developers
        move faster.
      </p>

      <div className={s.productsGrid}>
        {/* PRODUCT 1 */}
        <div className={s.card}>
          <h2>🤖 Teclury SalesMind AI</h2>
          <p className={s.tagline}>
            AI-powered sales agent for WhatsApp & web
          </p>
          <ul>
            <li>🟢 Auto-reply to customer messages</li>
            <li>🟢 Product catalog & order handling</li>
            <li>🟢 Works with WhatsApp & other Messaging Platforms</li>
            <li>🟢 Auto generate ecommerce site based on selected theme</li>
            <li>🟢 Seller dashboard</li>
            <li>🟢 Built for small & medium businesses</li>
          </ul>
        </div>

        {/* PRODUCT 2 */}
        <div className={s.card}>
          <h2>📚 Teclury KnowledgeCore API</h2>
          <p className={s.tagline}>
            Knowledge-based chatbot API for developers
          </p>
          <ul>
            <li>🟢 Plug-and-play REST API</li>
            <li>🟢 Train on PDFs, docs & databases</li>
            <li>🟢 RAG-based accurate responses</li>
            <li>🟢 API-based</li>
          </ul>
        </div>
      </div>

      {/* EARLY ACCESS */}
      <div className={s.earlyAccess}>
        <h3>✨ Get Early Access</h3>
        <p>
          We’re currently working on these products. Register now to get early
          access and updates.
        </p>

        <form onSubmit={submitInterest} className={s.form}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Notify Me 🚀</button>
        </form>
      </div>
    </section>
  );
}
