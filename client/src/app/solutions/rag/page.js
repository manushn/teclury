import s from "../solutions.module.css";

export default function SearchRAGPage() {
  return (
    <section className={s.wrapper}>
      <h1>🔍 Search & RAG</h1>
      <p className={s.subtitle}>
        Retrieval-Augmented Generation (RAG) combines search with AI to give
        accurate, up-to-date answers.
      </p>

      <div className={s.card}>
        <h2>How Search & RAG Works</h2>
        <p>
          Instead of guessing, AI retrieves relevant documents from your
          knowledge base and generates answers grounded in real data.
        </p>
      </div>

      <div className={s.grid}>
        <div className={s.item}>
          <h3>📚 Knowledge Search</h3>
          <p>Search PDFs, docs, databases, and websites.</p>
        </div>
        <div className={s.item}>
          <h3>🎯 Accurate Answers</h3>
          <p>Reduces hallucinations and improves trust.</p>
        </div>
        <div className={s.item}>
          <h3>🏢 Enterprise Ready</h3>
          <p>Perfect for internal knowledge systems.</p>
        </div>
        <div className={s.item}>
          <h3>🔐 Secure</h3>
          <p>Data stays private and controlled.</p>
        </div>
      </div>
      <a href="/startproject" className={s.cta}>
        🚀 Start a Project
    </a>

    </section>
  );
}
