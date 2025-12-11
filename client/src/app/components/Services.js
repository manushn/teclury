import styles from "./css/services.module.css";
import Image from "next/image";

export default function Services() {
    return(
    <section id="services" className={styles.services_full}>
      <div className={styles.services_container}>
        <div className={styles.services_top}>
          <h1>Services — focused on delivery</h1>
          <p>Client work is our core. We deliver end-to-end projects: discovery, engineering, deployment and managed operations.</p>
        </div>

        <div className={styles.services_bottom}>

          <div className={styles.service_card}>
            <div className={styles.service_icon}>
              <Image src="/serv/fullstacklogo.png" alt="Icon 1" width={60} height={60} />
              <h3>Full-Stack Development</h3>
            </div>
            <p>End-to-end web & mobile apps using modern frameworks. Fast MVPs, robust APIs, and production ops.</p>
          </div>

          <div className={styles.service_card}>
            <div className={styles.service_icon}>
              
              <Image src="/serv/ailogo.png" alt="Icon 2" width={60} height={60} />
              <h3>AI & Machine Learning</h3>
            </div>
            <p>LLM integrations, embedding search, automation pipelines, and domain-specific models for real outcomes.</p>
          </div>

          <div className={styles.service_card}>
            <div className={styles.service_icon}>
              
              <Image src="/serv/cloudlogo.png" alt="Icon 3" width={60} height={60} />
              <h3>Cloud & DevOps</h3>
            </div>
            <p>Scalable infra, containers, CI/CD, monitoring, and secure deployments for production reliability.</p>
          </div>

          <div className={styles.service_card}>
            <div className={styles.service_icon}>
             
              <Image src="/serv/uiux.png" alt="Icon 4" width={60} height={60} />
               <h3>UI/UX Design</h3>
            </div>
            <p>Research-led design, prototyping, and design systems that increase adoption and retention.</p>
          </div>

          <div className={styles.service_card}>
            <div className={styles.service_icon}>
              
              <Image src="/serv/digitalmarketing.png" alt="Icon 5" width={60} height={60} />
              <h3>Digital Marketing</h3>
            </div>
            <p>SEO, content marketing, and growth strategies to drive traffic, leads, and conversions.</p>
          </div>

          <div className={styles.service_card}>
            <div className={styles.service_icon}>
             
              <Image src="/serv/support.png" alt="Icon 6" width={60} height={60} />
               <h3>Managed Support</h3>
            </div>
            <p>Technical due diligence, architecture reviews, and strategic roadmaps to align tech with business goals.</p>
          </div>

        </div>
      </div>
    </section>
    )
}