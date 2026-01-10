import styles from "./css/services.module.css";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className={styles.servicesFull}>
      {/* Background Elements */}
      <div className={styles.bgPattern}></div>
      <div className={styles.bgGradient}></div>

      <div className={styles.servicesContainer}>
        {/* Header Section */}
        <div className={styles.servicesHeader}>
          <div className={styles.headerBadge}>
            <svg className={styles.badgeIcon} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span>What We Offer</span>
          </div>

          <h2 className={styles.servicesTitle}>
            Services — <span className={styles.gradientText}>focused on delivery</span>
          </h2>

          <p className={styles.servicesSubtitle}>
            Client work is our core. We deliver end-to-end projects: discovery, engineering, 
            deployment and managed operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {/* Service Card 1 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.iconWrapper}>
              <Image 
                src="/serv/fullstacklogo.png" 
                alt="Full-Stack Development" 
                width={56} 
                height={56}
                className={styles.serviceIcon}
              />
            </div>
            <h3 className={styles.cardTitle}>Full-Stack Development</h3>
            <p className={styles.cardDescription}>
              End-to-end web & mobile apps using modern frameworks. Fast MVPs, robust APIs, 
              and production ops.
            </p>
            
          </div>

          {/* Service Card 2 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.iconWrapper}>
              <Image 
                src="/serv/ailogo.png" 
                alt="AI & Machine Learning" 
                width={56} 
                height={56}
                className={styles.serviceIcon}
              />
            </div>
            <h3 className={styles.cardTitle}>AI & Machine Learning</h3>
            <p className={styles.cardDescription}>
              LLM integrations, embedding search, automation pipelines, and domain-specific 
              models for real outcomes.
            </p>
            
          </div>

          {/* Service Card 3 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.iconWrapper}>
              <Image 
                src="/serv/cloudlogo.png" 
                alt="Cloud & DevOps" 
                width={56} 
                height={56}
                className={styles.serviceIcon}
              />
            </div>
            <h3 className={styles.cardTitle}>Cloud & DevOps</h3>
            <p className={styles.cardDescription}>
              Scalable infra, containers, CI/CD, monitoring, and secure deployments for 
              production reliability.
            </p>
            
          </div>

          {/* Service Card 4 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.iconWrapper}>
              <Image 
                src="/serv/uiux.png" 
                alt="UI/UX Design" 
                width={56} 
                height={56}
                className={styles.serviceIcon}
              />
            </div>
            <h3 className={styles.cardTitle}>UI/UX Design</h3>
            <p className={styles.cardDescription}>
              Research-led design, prototyping, and design systems that increase adoption 
              and retention.
            </p>
            
          </div>

          {/* Service Card 5 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.iconWrapper}>
              <Image 
                src="/serv/digitalmarketing.png" 
                alt="Digital Marketing" 
                width={56} 
                height={56}
                className={styles.serviceIcon}
              />
            </div>
            <h3 className={styles.cardTitle}>Digital Marketing</h3>
            <p className={styles.cardDescription}>
              SEO, content marketing, and growth strategies to drive traffic, leads, 
              and conversions.
            </p>
            
          </div>

          {/* Service Card 6 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.iconWrapper}>
              <Image 
                src="/serv/support.png" 
                alt="Managed Support" 
                width={56} 
                height={56}
                className={styles.serviceIcon}
              />
            </div>
            <h3 className={styles.cardTitle}>Managed Support</h3>
            <p className={styles.cardDescription}>
              Technical due diligence, architecture reviews, and strategic roadmaps to align 
              tech with business goals.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}