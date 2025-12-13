import styles from "./css/processproducts.module.css";

export default function ProcessProducts() {
  return (
    <>
      


      <section id="process" aria-labelledby="processTitle" className={styles.section}>
        <div className={styles.processmain}>
        <div className={styles.sectiontitle}>
          <h2 >Our process</h2>
        </div>

        <div className={styles.sectionsub}>
          A simple, transparent path from idea to production.
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <strong>🎯 Discover</strong>
            <div className={styles.small}>Goals, users, constraints</div>
          </div>

          <div className={styles.step}>
            <strong>🧩 Prototype</strong>
            <div className={styles.small}>MVPs to validate assumptions</div>
          </div>

          <div className={styles.step}>
            <strong>🧑‍💻 Build</strong>
            <div className={styles.small}>Sprints, tests and CI/CD</div>
          </div>

          <div className={styles.step}>
            <strong>✅ Operate</strong>
            <div className={styles.small}>Monitoring, support & growth</div>
          </div>
        </div>
        </div>
      </section>

    </>
  );
}
