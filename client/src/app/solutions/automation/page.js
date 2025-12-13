import s from "../solutions.module.css";

export default function AutomationPage() {
  return (
    <section className={s.wrapper}>
      <h1>⚙️ Business Automation</h1>
      <p className={s.subtitle}>
        Automation helps businesses reduce manual work, errors, and costs.
      </p>

      <div className={s.card}>
        <h2>How Automation Helps Businesses</h2>
        <p>
          By automating repetitive tasks, teams can focus on growth, strategy,
          and customer experience.
        </p>
      </div>

      <div className={s.grid}>
        <div className={s.item}>
          <h3>⏱ Save Time</h3>
          <p>Automate repetitive workflows.</p>
        </div>
        <div className={s.item}>
          <h3>💰 Reduce Cost</h3>
          <p>Lower operational expenses.</p>
        </div>
        <div className={s.item}>
          <h3>📈 Scale Faster</h3>
          <p>Systems scale without extra manpower.</p>
        </div>
        <div className={s.item}>
          <h3>🔗 Integrations</h3>
          <p>Connect tools, APIs, and data flows.</p>
        </div>
      </div>
      <a href="/startproject" className={s.cta}>
  🚀 Start a Project
</a>

    </section>
  );
}
