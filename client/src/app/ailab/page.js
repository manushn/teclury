"use client";
import s from "./css/ailab.module.css";
import { useState, useEffect } from "react";
import Chatcompunents from "../components/Chatcomponent";

export default function AILabPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [progressCount, setProgressCount] = useState(0);

  // Animated counter for projects
  useEffect(() => {
    const timer = setInterval(() => {
      setProgressCount((prev) => (prev < 12 ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: "📊",
      title: "Datasets",
      description: "Clean, structured datasets for NLP, computer vision, and applied AI use cases",
      status: "In Progress",
      count: "3 datasets",
    },
    {
      icon: "🧠",
      title: "AI Models",
      description: "Training-ready ML & deep learning models with clear explanations",
      status: "Coming Soon",
      count: "5 models planned",
    },
    {
      icon: "🤖",
      title: "AI Agents",
      description: "Task-oriented agents using tools, memory, and reasoning capabilities",
      status: "In Development",
      count: "2 agents",
    },
    {
      icon: "🛠",
      title: "Learning Projects",
      description: "End-to-end AI projects with code, docs, and examples",
      status: "Active",
      count: "7 projects",
    },
  ];

  const benefits = [
    { icon: "✨", text: "Free & open-source", active: true },
    { icon: "🎯", text: "Beginner to advanced friendly", active: true },
    { icon: "🌍", text: "Real-world AI use cases", active: true },
    { icon: "💡", text: "Community-driven learning", active: true },
    { icon: "📚", text: "Comprehensive documentation", active: true },
    { icon: "🚀", text: "Production-ready examples", active: false },
  ];

  const roadmapItems = [
    {
      quarter: "Q1 2026",
      title: "Foundation Phase",
      items: ["Release core datasets", "Launch first AI models", "Community forum setup"],
      status: "current",
    },
    {
      quarter: "Q2 2026",
      title: "Expansion Phase",
      items: ["AI agent frameworks", "Advanced tutorials", "Integration guides"],
      status: "upcoming",
    },
    {
      quarter: "Q3 2026",
      title: "Scale Phase",
      items: ["Multi-modal models", "Enterprise examples", "API playground"],
      status: "planned",
    },
  ];

  return (
    <section className={s.wrapper}>
      <Chatcompunents />
      
      {/* HERO SECTION */}
      <div className={s.hero}>
        <div className={s.badge}>
          <span className={s.badgeDot}></span>
          Under Active Development
        </div>
        <h1 className={s.title}>🧪 Teclury AI Lab</h1>
        <p className={s.subtitle}>
          An open-source AI playground built to help students and developers
          learn, build, and experiment with real-world AI systems.
        </p>
        
        <div className={s.stats}>
          <div className={s.statItem}>
            <div className={s.statNumber}>{progressCount}+</div>
            <div className={s.statLabel}>Projects in Progress</div>
          </div>
          <div className={s.statItem}>
            <div className={s.statNumber}>100%</div>
            <div className={s.statLabel}>Open Source</div>
          </div>
          <div className={s.statItem}>
            <div className={s.statNumber}>∞</div>
            <div className={s.statLabel}>Learning Opportunities</div>
          </div>
        </div>
      </div>

      {/* INTRO CARD */}
      <div className={s.introCard}>
        <div className={s.cardIcon}>🌍</div>
        <h2>Open-Source by Design</h2>
        <p>
          At Teclury AI Lab, we create <strong>datasets</strong>,{" "}
          <strong>AI models</strong>, and <strong>AI agents</strong> — all
          open-sourced so learners can explore how real AI systems are built.
        </p>
        <div className={s.cardFooter}>
          <span className={s.footerIcon}>🔓</span>
          <span>All resources freely available on GitHub</span>
        </div>
      </div>

      {/* TABS */}
      <div className={s.tabs}>
        <button
          className={`${s.tab} ${activeTab === "overview" ? s.active : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          <span>📋</span> Overview
        </button>
        <button
          className={`${s.tab} ${activeTab === "roadmap" ? s.active : ""}`}
          onClick={() => setActiveTab("roadmap")}
        >
          <span>🗺️</span> Roadmap
        </button>
        <button
          className={`${s.tab} ${activeTab === "community" ? s.active : ""}`}
          onClick={() => setActiveTab("community")}
        >
          <span>👥</span> Community
        </button>
      </div>

      {/* TAB CONTENT */}
      {activeTab === "overview" && (
        <div className={s.tabContent}>
          {/* FEATURES GRID */}
          <div className={s.grid}>
            {features.map((feature, idx) => (
              <div key={idx} className={s.featureCard}>
                <div className={s.featureHeader}>
                  <div className={s.featureIcon}>{feature.icon}</div>
                  <span className={`${s.statusBadge} ${s[feature.status.replace(/\s/g, "")]}`}>
                    {feature.status}
                  </span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className={s.featureFooter}>
                  <span className={s.count}>{feature.count}</span>
                </div>
              </div>
            ))}
          </div>

          {/* STATUS BANNER */}
          <div className={s.statusBanner}>
            <div className={s.bannerContent}>
              <div className={s.bannerIcon}>🚧</div>
              <div>
                <h2>Actively Building</h2>
                <p>
                  Teclury AI Lab is continuously evolving. New repositories, datasets,
                  and experiments are added regularly.
                </p>
                <p className={s.note}>
                  💡 Some lab projects may later evolve into full Teclury products.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "roadmap" && (
        <div className={s.tabContent}>
          <div className={s.roadmapHeader}>
            <h2>🗺️ Development Roadmap</h2>
            <p>Our vision for the AI Lab over the coming quarters</p>
          </div>
          <div className={s.roadmap}>
            {roadmapItems.map((item, idx) => (
              <div key={idx} className={`${s.roadmapItem} ${s[item.status]}`}>
                <div className={s.roadmapMarker}>
                  {item.status === "current" && "🔥"}
                  {item.status === "upcoming" && "📅"}
                  {item.status === "planned" && "💭"}
                </div>
                <div className={s.roadmapContent}>
                  <div className={s.roadmapQuarter}>{item.quarter}</div>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.items.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "community" && (
        <div className={s.tabContent}>
          <div className={s.communitySection}>
            <div className={s.communityHeader}>
              <h2>🎓 Built for Learners</h2>
              <p>Join a growing community of AI enthusiasts and developers</p>
            </div>

            <div className={s.benefitsGrid}>
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`${s.benefitItem} ${!benefit.active ? s.upcoming : ""}`}
                >
                  <span className={s.benefitIcon}>{benefit.icon}</span>
                  <span>{benefit.text}</span>
                  {!benefit.active && <span className={s.comingSoon}>Coming Soon</span>}
                </div>
              ))}
            </div>

            <div className={s.ctaSection}>
              <h3>Get Involved</h3>
              <p>Want to contribute or stay updated? Join our community!</p>
              <div className={s.ctaButtons}>
                <button className={s.primaryBtn}>
                  <span>⭐</span>
                  Star on GitHub
                </button>
                <button className={s.secondaryBtn}>
                  <span>📧</span>
                  Join Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER CTA */}
      <div className={s.footerCta}>
        <h2>Ready to Explore?</h2>
        <p>Start your AI learning journey with Teclury AI Lab</p>
        <button className={s.exploreBtn}>
          Explore Our Projects
          <span className={s.arrow}>→</span>
        </button>
      </div>
    </section>
  );
}