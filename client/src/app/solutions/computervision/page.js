import s from "../solutions.module.css";

export default function ComputerVisionPage() {
  return (
    <section className={s.wrapper}>
      <h1>👁️ Computer Vision</h1>
      <p className={s.subtitle}>
        Computer Vision enables machines to see, analyze, and understand images
        and videos.
      </p>

      <div className={s.card}>
        <h2>What Computer Vision Can Do</h2>
        <p>
          By analyzing visual data, businesses can automate inspections,
          detect objects, and extract insights from images.
        </p>
      </div>

      <div className={s.grid}>
        <div className={s.item}>
          <h3>📷 Image Analysis</h3>
          <p>Detect objects, text, and patterns.</p>
        </div>
        <div className={s.item}>
          <h3>🏭 Quality Control</h3>
          <p>Automated defect detection.</p>
        </div>
        <div className={s.item}>
          <h3>📄 OCR</h3>
          <p>Extract text from documents and images.</p>
        </div>
        <div className={s.item}>
          <h3>🔐 Security</h3>
          <p>Face recognition and anomaly detection.</p>
        </div>
      </div>
      <a href="/startproject" className={s.cta}>
  🚀 Start a Project
</a>

    </section>
  );
}
