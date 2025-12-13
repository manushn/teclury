import s from "../solutions.module.css";

export default function AIAssistantsPage() {
  return (
    <section className={s.wrapper}>
      <h1>🤖 AI Assistants</h1>
      <p className={s.subtitle}>
        AI assistants are intelligent systems that understand language,
        reason over data, and perform tasks automatically.
      </p>

      <div className={s.card}>
        <h2>What are AI Assistants?</h2>
        <p>
          AI assistants act like digital employees. They can chat with users,
          answer questions, process requests, and integrate with your tools
          such as databases, CRMs, and messaging platforms.
        </p>
      </div>

      <div className={s.grid}>
        <div className={s.item}>
          <h3>💬 Customer Support</h3>
          <p>24/7 instant responses without hiring large teams.</p>
        </div>
        <div className={s.item}>
          <h3>📊 Internal Assistants</h3>
          <p>Help employees search data, generate reports, and save time.</p>
        </div>
        <div className={s.item}>
          <h3>🧠 Smart Reasoning</h3>
          <p>Uses memory, tools, and logic to complete complex tasks.</p>
        </div>
        <div className={s.item}>
          <h3>⚙️ Tool Integration</h3>
          <p>Connects with APIs, databases, and workflows.</p>
        </div>
      </div>
      <a href="/startproject" className={s.cta}>
  🚀 Start a Project
</a>

    </section>
  );
}
