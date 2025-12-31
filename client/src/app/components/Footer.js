import styles from "./css/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

      
        <div className={styles.brand}>
          <h3 className={styles.logo}>Teclury</h3>
          <p className={styles.tagline}>Building reliable AI for real-world operations.</p>
        </div>

        
        <div className={styles.links}>
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
        </div>

        
        <div className={styles.links}>
          <h4>AI Solutions</h4>
          <Link href="/solutions/aiassistants">Assistants</Link>
          <Link href="/solutions/rag">Search & RAG</Link>
          <Link href="/solutions/computervision">Computer Vision</Link>
          <Link href="/solutions/automation">Automation</Link>
        </div>

        
        <div className={styles.links}>
          <h4>Social</h4>
          <a href="https://www.linkedin.com/company/teclury/" target="blank">LinkedIn</a>
          <a href="https://www.instagram.com/teclury/" target="blank">Instagram</a>
          <a href="https://github.com/Teclury" target="blank">Github</a>
        </div>

        
        <div className={styles.links}>
          <h4>Contact</h4>

          <p className={styles.contactItem}>
            📞 <a href="tel:+918526521533">+918526521533</a>
          </p>

          <p className={styles.contactItem}>
            ✉️ <a href="mailto:contact@teclury.in">contact@teclury.in</a>
          </p>

          <p className={styles.contactItem}>
            🟢 <a href="https://wa.me/918526521533" target="_blank">Click to Chat on Whatsapp</a>
          </p>
          
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Teclury. All rights reserved.</p>
      </div>
    </footer>
  );
}
