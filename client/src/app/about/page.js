import styles from "./css/about.module.css";
import Image from "next/image";


export default function AboutPage() {
  return (
    <main className={styles.pageContainer}>
        
      
      <section className={styles.hero}>
        <div className={styles.heroEmoji}>🚀</div>

        <h1 className={styles.heroTitle}>
          Build. Innovate. <span className={styles.gradientText}>Empower.</span>
        </h1>

        <p className={styles.heroTagline}>
          Teclury blends engineering with practical AI to solve real operational challenges — 
          building technology that empowers people and grows businesses.
        </p>
      </section>

 
      <section className={styles.section}>
        <div className={styles.wrapper}>

          <h2 className={styles.sectionTitle}>Our Story ✨</h2>

          <div className={styles.gridTwo}>
            <p className={styles.textLarge}>
              Teclury was founded to build technology that truly creates impact — not hype.  
             
              From full-stack platforms to RAG systems and agent-driven AI, we engineer 
              solutions that are reliable, accessible, and built for real-world use.
             
              We also open doors for young innovators through free learning resources, 
              datasets, and engineering mentorship.
            </p>

            <div className={styles.missionCard}>
              <h3>🎯 Our Mission</h3>
              <p>
                To create meaningful AI-powered solutions and help young talent grow through 
                open learning, hands-on projects, and real engineering guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className={styles.section}>
        <div className={styles.wrapper}>

          <h2 className={styles.sectionTitle}>What We Do ⚡</h2>

          <div className={styles.gridThree}>

            <div className={styles.serviceCard}>
              <h3>💻 Full-Stack Engineering</h3>
              <p>We build scalable applications and cloud-native systems.</p>

              <div className={styles.tagRow}>
                <span>Next.js</span>
                <span>React</span>
                <span>FastAPI</span>
                <span>SQL / NoSQL</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <h3>🤖 Artificial Intelligence</h3>
              <p>AI for automation, operations, workflow optimization & insights.</p>

              <div className={styles.tagRow}>
                <span>RAG</span>
                <span>Agents</span>
                <span>Automation</span>
                <span>Computer Vision</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <h3>🚀 Product Innovation</h3>
              <p>We develop internal AI products that help businesses scale faster.</p>
              <div className={styles.tagRow}>
                <span >Prototyping</span>
                <span >Real-use Testing</span>
                <span >Automation</span>
              </div>
            </div>

          </div>
        </div>
      </section>

     
      <section className={styles.labSection}>
        <div className={styles.wrapper}>

          <h2 className={styles.labTitle}>🧪 Teclury AI Lab</h2>
          <p className={styles.labDescription}>
            A space for innovation — featuring open datasets, experiments, tutorials, and prototype tools.
          </p>

          <div className={styles.labList}>
            <span>📂 Open Datasets</span>
            <span>🔬 Research Experiments</span>
            <span>🛠 Prototype Tools</span>
            <span>📘 Tutorials</span>
          </div>

          <p className={styles.labNote}>
            Open to Students, AI Enthusiasts & Early Developers.
          </p>

        </div>
      </section>

     
      <section className={styles.section}>
        <div className={styles.wrapper}>

          <h2 className={styles.sectionTitle}>Meet our Founders </h2>

          <div className={styles.gridTwo}>

            <div className={styles.founderCard}>
              <Image 
                src="/founders/manush.jpeg"
                width={150}
                height={150}
                alt="Manush"
                className={styles.avatar}
              />
              <h3>Manush — Founder & COO</h3>
              <p>
                Full-stack & AI engineer focused on scalable systems and product development.
              </p>
            </div>

            <div className={styles.founderCard}>
              <Image 
                src="/founders/bharathraji.png"
                width={150}
                height={150}
                alt="BharathRaji"
                className={styles.avatar}
              />
              <h3>Bharathraji — Co-Founder & CEO</h3>
              <p>
                AI Engineer & Trainer leading Teclury’s technical and educational mission.
              </p>
            </div>

          </div>
        </div>
      </section>

      
      <section className={styles.ctaSection}>
        <h2 className={styles.sectionTitle}>Why Teclury Exists 🌱</h2>

        <p className={styles.sectionSubtitle}>
          We believe technology should empower people — not overwhelm them.
        </p>

        <div className={styles.ctaList}>
          <p>✨ Engineering that transforms companies</p>
          <p>🤖 AI systems that improve operations</p>
          <p>📚 Open-source projects for learning</p>
        </div>

        <a href="/startproject" className={styles.ctaButton}>
          Work With Us →
        </a>
      </section>
        
    </main>
  );
}
