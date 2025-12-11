import styles from "./css/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Brand */}
        <div className={styles.brand}>
          <h3 className={styles.logo}>Teclury</h3>
          <p className={styles.tagline}>Building reliable AI for real-world operations.</p>
        </div>

        {/* Navigation links */}
        <div className={styles.links}>
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.links}>
          <h4>AI Solutions</h4>
          <Link href="/ai/assistants">Assistants</Link>
          <Link href="/ai/rag">Search & RAG</Link>
          <Link href="/ai/vision">Computer Vision</Link>
          <Link href="/ai/automation">Automation</Link>
        </div>

        <div className={styles.links}>
          <h4>Social</h4>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Twitter</a>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Teclury. All rights reserved.</p>
      </div>
    </footer>
  );
}
