import styles from "./css/about.module.css";
import Image from "next/image";
import Chatcomponent from "@/app/components/Chatcomponent";

export default function AboutPage() {
  return (
    <main className={styles.pageContainer}>
      <Chatcomponent />
      
      {/* Animated Background Elements */}
      <div className={styles.bgOrb1}></div>
      <div className={styles.bgOrb2}></div>
      <div className={styles.bgOrb3}></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot}></span>
            Building the Future
          </div>

          <h1 className={styles.heroTitle}>
            Build. Innovate.
            <span className={styles.gradientText}> Empower.</span>
          </h1>

          <p className={styles.heroTagline}>
            Teclury blends engineering with practical AI to solve real operational challenges — 
            building technology that empowers people and grows businesses.
          </p>

          
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.gridTwo}>
            <div className={styles.storyContent}>
              <p className={styles.textLarge}>
                Teclury was founded to build technology that truly creates impact — not hype.
              </p>
              <p className={styles.textMedium}>
                From full-stack platforms to RAG systems and agent-driven AI, we engineer 
                solutions that are reliable, accessible, and built for real-world use.
              </p>
              <p className={styles.textMedium}>
                We also open doors for young innovators through free learning resources, 
                datasets, and engineering mentorship.
              </p>
            </div>

            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To create meaningful AI-powered solutions and help young talent grow through 
                open learning, hands-on projects, and real engineering guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className={styles.servicesSection}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.gridThree}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3>Full-Stack Engineering</h3>
              <p>We build scalable applications and cloud-native systems.</p>
              <div className={styles.tagRow}>
                <span>Next.js</span>
                <span>React</span>
                <span>FastAPI</span>
                <span>SQL / NoSQL</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Artificial Intelligence</h3>
              <p>AI for automation, operations, workflow optimization & insights.</p>
              <div className={styles.tagRow}>
                <span>RAG</span>
                <span>Agents</span>
                <span>Automation</span>
                <span>Computer Vision</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Product Innovation</h3>
              <p>We develop internal AI products that help businesses scale faster.</p>
              <div className={styles.tagRow}>
                <span>Prototyping</span>
                <span>Real-use Testing</span>
                <span>Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Lab Section */}
      <section className={styles.labSection}>
        <div className={styles.labBackground}></div>
        <div className={styles.wrapper}>
          <div className={styles.labContent}>
            <div className={styles.labIcon}>🧪</div>
            <h2 className={styles.labTitle}>Teclury AI Lab</h2>
            <p className={styles.labDescription}>
              A space for innovation — featuring open datasets, experiments, tutorials, and prototype tools.
            </p>

            <div className={styles.labGrid}>
              <div className={styles.labItem}>
                <span className={styles.labItemIcon}>📂</span>
                <span className={styles.labItemText}>Open Datasets</span>
              </div>
              <div className={styles.labItem}>
                <span className={styles.labItemIcon}>🔬</span>
                <span className={styles.labItemText}>Research Experiments</span>
              </div>
              <div className={styles.labItem}>
                <span className={styles.labItemIcon}>🛠</span>
                <span className={styles.labItemText}>Prototype Tools</span>
              </div>
              <div className={styles.labItem}>
                <span className={styles.labItemIcon}>📘</span>
                <span className={styles.labItemText}>Tutorials</span>
              </div>
            </div>

            <div className={styles.labNote}>
              <svg className={styles.labNoteIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Open to Students, AI Enthusiasts & Early Developers
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className={styles.foundersSection}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Meet Our Founders</h2>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={styles.foundersGrid}>
            <div className={styles.founderCard}>
              <div className={styles.founderImageWrapper}>
                <Image 
                  src="/founders/manush.jpeg"
                  width={180}
                  height={180}
                  alt="ManushN"
                  className={styles.avatar}
                />
                <div className={styles.founderBadge}>COO</div>
              </div>
              <div className={styles.founderInfo}>
                <h3>Manush N</h3>
                <p className={styles.founderRole}>Founder & Chief Operating Officer</p>
                <p className={styles.founderBio}>
                  Full-stack & AI engineer focused on scalable systems and product development.
                </p>
              </div>
            </div>

            <div className={styles.founderCard}>
              <div className={styles.founderImageWrapper}>
                <Image 
                  src="/founders/bharathraji.png"
                  width={180}
                  height={180}
                  alt="BharathRajiP"
                  className={styles.avatar}
                />
                <div className={styles.founderBadge}>CEO</div>
              </div>
              <div className={styles.founderInfo}>
                <h3>Bharathraji P</h3>
                <p className={styles.founderRole}>Co-Founder & Chief Executive Officer</p>
                <p className={styles.founderBio}>
                  AI Engineer & Trainer leading Teclury's technical and educational mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Why Teclury Exists</h2>
          <p className={styles.ctaSubtitle}>
            We believe technology should empower people — not overwhelm them.
          </p>

          <div className={styles.ctaList}>
            <div className={styles.ctaItem}>
              <svg className={styles.ctaIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Engineering that transforms companies</span>
            </div>
            <div className={styles.ctaItem}>
              <svg className={styles.ctaIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>AI systems that improve operations</span>
            </div>
            <div className={styles.ctaItem}>
              <svg className={styles.ctaIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Open-source projects for learning</span>
            </div>
          </div>

          <a href="/startproject" className={styles.ctaButton}>
            <span>Work With Us</span>
            <svg className={styles.ctaArrow} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}