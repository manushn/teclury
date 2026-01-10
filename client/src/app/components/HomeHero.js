import styles from "./css/homehero.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section id="home" className={styles.heroSection}>
      {/* Animated Background Elements */}
      <div className={styles.bgGradient1}></div>
      <div className={styles.bgGradient2}></div>
      <div className={styles.gridPattern}></div>

      <div className={styles.homeContainer}>
        {/* Left Content */}
        <div className={styles.homeLeft}>
          <div className={styles.kicker}>
            <svg className={styles.kickerIcon} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>We build software that works</span>
          </div>

          <h1 className={styles.heroTitle}>
            Full-Stack engineering &{" "}
            <span className={styles.gradientText}>AI solutions</span> for ambitious teams
          </h1>

          <p className={styles.heroDescription}>
            Teclury partners with startups and businesses to deliver
            production-grade web and mobile applications, cloud platforms, and
            practical AI integrations. We start with a fast MVP and evolve
            validated pilots into productized solutions.
          </p>

          <div className={styles.ctaContainer}>
            <a href="/startproject" className={styles.ctaPrimary}>
              <svg className={styles.ctaIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span>Start a Project</span>
              <svg className={styles.ctaArrow} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            
            <a href="/about" className={styles.ctaSecondary}>
              <span>Learn more about Teclury</span>
            </a>
          </div>

          <div className={styles.techStack}>
            <div className={styles.stackLabel}>Tech Stack:</div>
            <div className={styles.stackItems}>
              <span className={styles.stackItem}>React</span>
              <span className={styles.stackDivider}>•</span>
              <span className={styles.stackItem}>Node</span>
              <span className={styles.stackDivider}>•</span>
              <span className={styles.stackItem}>Next.js</span>
              <span className={styles.stackDivider}>•</span>
              <span className={styles.stackItem}>PostgreSQL</span>
              <span className={styles.stackDivider}>•</span>
              <span className={styles.stackItem}>Docker</span>
              <span className={styles.stackDivider}>•</span>
              <span className={styles.stackItem}>MongoDB</span>
              <span className={styles.stackDivider}>•</span>
              <span className={styles.stackItem}>FastAPI</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <svg className={styles.trustIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Production-Ready</span>
            </div>
            <div className={styles.trustItem}>
              <svg className={styles.trustIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span>Fast Delivery</span>
            </div>
            <div className={styles.trustItem}>
              <svg className={styles.trustIcon} viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Expert Team</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className={styles.homeRight}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <div className={styles.imageContainer}>
              <Image
                src="/sideimg1.png"
                alt="Teclury Platform Preview"
                width={500}
                height={370}
                priority
                loading="eager"
                fetchPriority="high"
                className={styles.heroImage}
              />
              
              {/* Floating Elements */}
              <div className={styles.floatingElement1}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Fast MVP</span>
              </div>
              
              <div className={styles.floatingElement2}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>AI Powered</span>
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className={styles.imageMobile}>
            <Image
              src="/sideimg1.png"
              alt="Teclury Platform Preview"
              width={320}
              height={240}
              className={styles.heroImageMobile}
            />
          </div>
        </div>
      </div>
    </section>
  );
}