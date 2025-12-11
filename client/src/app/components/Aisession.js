import Image from "next/image";
import styles from "./css/aisession.module.css";

export default function Aisession() {
  return (
    <section id="ai" aria-labelledby="aiTitle" className={styles.sectionmain}>
    <div className={styles.section}>
      
     
      <div className={styles.left}>
        <h2 id="aiTitle" className={styles.title}>
          AI Solutions — practical & production ready
        </h2>

        <p className={styles.subtitle}>
          We prioritize reliable AI: guarded, observable, and aligned to product outcomes.
        </p>

        <div className={styles.cardGrid}>

          
          <div className={styles.card}>
            <div className={styles.cardtop}>
                <Image
                    src="/ai/assis.png"
                    width={60}
                    height={60}
                    alt="Assistants & Agents"
                    className={styles.cardImg}
                />
                <h3>Assistants & Agents</h3>
            </div>
            
            <p className={styles.small}>
              Domain-aware assistants and voice agents that automate workflows and improve response times.
            </p>
          </div>

          
          <div className={styles.card}>
            <div className={styles.cardtop}>
            <Image
              src="/ai/rag.png"
              width={60}
              height={60}
              alt="Search & Retrieval"
              className={styles.cardImg}
            />
            <h3>Search & Retrieval (RAG)</h3>
            </div>
            
            <p className={styles.small}>
              Semantic search with embeddings and relevance tuning for knowledge-centric products.
            </p>
          </div>

          
          <div className={styles.card}>
             <div className={styles.cardtop}>
            <Image
              src="/ai/cv.png"
              width={60}
              height={60}
              alt="Computer Vision"
              className={styles.cardImg}
            />
            <h3>Computer Vision & Automation</h3>
             </div>
            
            <p className={styles.small}>
              Image pipelines for inspection, classification, and intelligent automation.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={`${styles.card} ${styles.labCard}`}>
            <div className={styles.labhead}>
            
             <Image
              src="/ai/lab.png"
              width={40}
              height={40}
              alt="Computer Vision"
              className={styles.cardImg}
               
            />
           <h3>Teclury's Inovation Lab</h3>
            
            </div>
         
          <p className={styles.small}>
            We prototype internally and with pilot clients. Validated pilots may become productized SaaS
            offerings — typically after a pilot & iteration cycle.
          </p>

          <div className={styles.roadmapWrap}>
            <strong>Product roadmap (example)</strong>

            <div className={styles.roadmap}>

              <div className={styles.road}>
                
                <div>
                  <strong>MVP</strong>
                  <div className={styles.small}>2–6 weeks</div>
                </div>
              </div>

              <div className={styles.road}>
                
                <div>
                  <strong>Pilot</strong>
                  <div className={styles.small}>2–4 months</div>
                </div>
              </div>

              <div className={styles.road}>
                
                <div>
                  <strong>Productize</strong>
                  <div className={styles.small}>6–12 months</div>
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
