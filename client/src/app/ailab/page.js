import s from "./css/ailab.module.css";
import Chatcompunents from "../components/Chatcomponent"

export default function AILabPage() {
  return (
    <section className={s.wrapper}>
      <Chatcompunents/>
      <h1>🧪 Teclury AI Lab</h1>
      <p className={s.subtitle}>
        An open-source AI playground built to help students and developers
        learn, build, and experiment with real-world AI systems.
      </p>

      {/* INTRO CARD */}
      <div className={s.card}>
        <h2>🌍 Open-Source by Design</h2>
        <p>
          At Teclury AI Lab, we create <strong>datasets</strong>,{" "}
          <strong>AI models</strong>, and <strong>AI agents</strong> — all
          open-sourced so learners can explore how real AI systems are built.
        </p>
      </div>

      {/* WHAT WE BUILD */}
      <div className={s.grid}>
        <div className={s.item}>
          <h3>📊 Datasets</h3>
          <p>
            Clean, structured datasets created for learning NLP, computer
            vision, and applied AI use cases.
          </p>
        </div>

        <div className={s.item}>
          <h3>🧠 AI Models</h3>
          <p>
            Training-ready ML & deep learning models with clear explanations,
            from basics to advanced architectures.
          </p>
        </div>

        <div className={s.item}>
          <h3>🤖 AI Agents</h3>
          <p>
            Task-oriented AI agents that use tools, memory, and reasoning —
            designed to show how modern AI agents actually work.
          </p>
        </div>

        <div className={s.item}>
          <h3>🛠 Learning Projects</h3>
          <p>
            End-to-end AI projects with code, docs, and examples to help
            students build confidence.
          </p>
        </div>
      </div>

      {/* STATUS */}
      <div className={s.status}>
        <h2>🚧 Actively Building</h2>
        <p>
          Teclury AI Lab is continuously evolving. New repositories, datasets,
          and experiments are added regularly.
        </p>
        <p className={s.note}>
          Some lab projects may later evolve into full Teclury products.
        </p>
      </div>

      {/* COMMUNITY */}
      <div className={s.community}>
        <h2>🎓 Built for Learners</h2>
        <ul>
          <li>✅ Free & open-source</li>
          <li>✅ Beginner to advanced friendly</li>
          <li>✅ Real-world AI use cases</li>
          <li>✅ Community-driven learning</li>
        </ul>
      </div>
    </section>
  );
}
