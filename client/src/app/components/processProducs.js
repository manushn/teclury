import styles from "./css/processproducts.module.css";

export default function ProcessProducts() {
  return (
    <section id="process" aria-labelledby="processTitle" className={styles.section}>
      {/* Background Elements */}
      <div className={styles.bgPattern}></div>
      <div className={styles.bgGradient}></div>

      <div className={styles.processMain}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <svg className={styles.badgeIcon} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span>How We Work</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Our <span className={styles.gradientText}>Process</span>
          </h2>

          <p className={styles.sectionSubtitle}>
            A simple, transparent path from idea to production.
          </p>
        </div>

        {/* Steps Grid */}
        <div className={styles.steps}>
          {/* Step 1 */}
          <div className={styles.stepWrapper}>
            <div className={styles.step}>
              <div className={styles.stepGlow}></div>
              
              <div className={styles.stepNumber}>01</div>
              
              <div className={styles.iconWrapper}>
                <svg className={styles.stepIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <h3 className={styles.stepTitle}>Discover</h3>
              <p className={styles.stepDescription}>
                Goals, users, constraints
              </p>

              <div className={styles.stepTags}>
                <span>Research</span>
                <span>Analysis</span>
              </div>
            </div>

            <div className={styles.connector}>
              <svg viewBox="0 0 100 20" fill="none">
                <path d="M0 10 L100 10" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </path>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className={styles.stepWrapper}>
            <div className={styles.step}>
              <div className={styles.stepGlow}></div>
              
              <div className={styles.stepNumber}>02</div>
              
              <div className={styles.iconWrapper}>
                <svg className={styles.stepIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>

              <h3 className={styles.stepTitle}>Prototype</h3>
              <p className={styles.stepDescription}>
                MVPs to validate assumptions
              </p>

              <div className={styles.stepTags}>
                <span>MVP</span>
                <span>Testing</span>
              </div>
            </div>

            <div className={styles.connector}>
              <svg viewBox="0 0 100 20" fill="none">
                <path d="M0 10 L100 10" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </path>
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className={styles.stepWrapper}>
            <div className={styles.step}>
              <div className={styles.stepGlow}></div>
              
              <div className={styles.stepNumber}>03</div>
              
              <div className={styles.iconWrapper}>
                <svg className={styles.stepIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              <h3 className={styles.stepTitle}>Build</h3>
              <p className={styles.stepDescription}>
                Sprints, tests and CI/CD
              </p>

              <div className={styles.stepTags}>
                <span>Development</span>
                <span>QA</span>
              </div>
            </div>

            <div className={styles.connector}>
              <svg viewBox="0 0 100 20" fill="none">
                <path d="M0 10 L100 10" stroke="url(#gradient3)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                </path>
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Step 4 */}
          <div className={styles.stepWrapper}>
            <div className={styles.step}>
              <div className={styles.stepGlow}></div>
              
              <div className={styles.stepNumber}>04</div>
              
              <div className={styles.iconWrapper}>
                <svg className={styles.stepIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className={styles.stepTitle}>Operate</h3>
              <p className={styles.stepDescription}>
                Monitoring, support & growth
              </p>

              <div className={styles.stepTags}>
                <span>Support</span>
                <span>Scale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}