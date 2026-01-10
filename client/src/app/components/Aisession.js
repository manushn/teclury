import Image from "next/image";
import styles from "./css/aisession.module.css";

export default function Aisession() {
  return (
    <section id="ai" aria-labelledby="aiTitle" className={styles.sectionMain}>
      {/* Background Elements */}
      <div className={styles.bgPattern}></div>
      <div className={styles.bgGradient1}></div>
      <div className={styles.bgGradient2}></div>

      <div className={styles.container}>
        <div className={styles.section}>
          {/* Left Column - AI Solutions */}
          <div className={styles.left}>
            <div className={styles.headerBadge}>
              <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>AI Innovation</span>
            </div>

            <h2 id="aiTitle" className={styles.title}>
              AI Solutions — <span className={styles.gradientText}>practical & production ready</span>
            </h2>

            <p className={styles.subtitle}>
              We prioritize reliable AI: guarded, observable, and aligned to product outcomes.
            </p>

            <div className={styles.cardGrid}>
              {/* Card 1 */}
              <div className={styles.card}>
                <div className={styles.cardGlow}></div>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrapper}>
                    <Image
                      src="/ai/assis.png"
                      width={48}
                      height={48}
                      alt="Assistants & Agents"
                      className={styles.cardImg}
                    />
                  </div>
                  <div className={styles.cardHeader}>
                    <h3>Assistants & Agents</h3>
                    <div className={styles.cardBadge}>AI-Powered</div>
                  </div>
                </div>
                <p className={styles.cardDescription}>
                  Domain-aware assistants and voice agents that automate workflows and improve response times.
                </p>
              </div>

              {/* Card 2 */}
              <div className={styles.card}>
                <div className={styles.cardGlow}></div>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrapper}>
                    <Image
                      src="/ai/rag.png"
                      width={48}
                      height={48}
                      alt="Search & Retrieval"
                      className={styles.cardImg}
                    />
                  </div>
                  <div className={styles.cardHeader}>
                    <h3>Search & Retrieval (RAG)</h3>
                    <div className={styles.cardBadge}>RAG</div>
                  </div>
                </div>
                <p className={styles.cardDescription}>
                  Semantic search with embeddings and relevance tuning for knowledge-centric products.
                </p>
              </div>

              {/* Card 3 */}
              <div className={styles.card}>
                <div className={styles.cardGlow}></div>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrapper}>
                    <Image
                      src="/ai/cv.png"
                      width={48}
                      height={48}
                      alt="Computer Vision"
                      className={styles.cardImg}
                    />
                  </div>
                  <div className={styles.cardHeader}>
                    <h3>Computer Vision</h3>
                    <div className={styles.cardBadge}>CV</div>
                  </div>
                </div>
                <p className={styles.cardDescription}>
                  Image pipelines for inspection, classification, and intelligent automation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Innovation Lab */}
          <div className={styles.right}>
            <div className={styles.labCard}>
              <div className={styles.labGlow}></div>
              
              <div className={styles.labHeader}>
                <div className={styles.labIconWrapper}>
                  <Image
                    src="/ai/lab.png"
                    width={40}
                    height={40}
                    alt="Innovation Lab"
                    className={styles.labIcon}
                  />
                </div>
                <h3 className={styles.labTitle}>Teclury's Innovation Lab</h3>
              </div>

              <p className={styles.labDescription}>
                We prototype internally and with pilot clients. Validated pilots may become productized SaaS
                offerings — typically after a pilot & iteration cycle.
              </p>

              <div className={styles.roadmapSection}>
                <div className={styles.roadmapHeader}>
                  <svg className={styles.roadmapIcon} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <strong>Product Roadmap</strong>
                </div>

                <div className={styles.roadmap}>
                  <div className={styles.roadItem}>
                    <div className={styles.roadNumber}>1</div>
                    <div className={styles.roadContent}>
                      <strong>MVP</strong>
                      <span className={styles.roadTime}>2–6 weeks</span>
                    </div>
                    <div className={styles.roadArrow}>
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  <div className={styles.roadItem}>
                    <div className={styles.roadNumber}>2</div>
                    <div className={styles.roadContent}>
                      <strong>Pilot</strong>
                      <span className={styles.roadTime}>2–4 months</span>
                    </div>
                    <div className={styles.roadArrow}>
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  <div className={styles.roadItem}>
                    <div className={styles.roadNumber}>3</div>
                    <div className={styles.roadContent}>
                      <strong>Productize</strong>
                      <span className={styles.roadTime}>6–12 months</span>
                    </div>
                    <div className={styles.roadCheck}>
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}