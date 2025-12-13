"use client";
import Image from "next/image";
import styles from "./css/header.module.css";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Import Link

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const router = useRouter();


  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMenu = () => setOpen(false);

  const handleStartProject = () => {
    
    router.push("/startproject");
    setOpen(false); 
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_space}>
        
        
        <div className={styles.header_left}>
          <Link href="/">
            <Image src="/logofinal.png" alt="Logo" width={80} height={80} />
          </Link>
        </div>

      
        <div className={styles.header_right}>
          
          <Link href="/products">🚀 Our Products</Link>
          <Link href="/ailab">🧪 AI Lab</Link>
          <Link href="/contact">📞 Contact</Link>

          <div className={styles.hbutton_container}>
            <button className={styles.login_button} onClick={handleStartProject}>
              Start a Project
            </button>
          </div>
        </div>

       
        <div className={styles.mobile_actions}>
         
          <button 
            className={styles.mobile_project_btn} 
            onClick={handleStartProject}
          >
            Start a Project
          </button>
          
          <div
            className={styles.mobile_menu_icon}
            onClick={() => setOpen(!open)}
          >
            ☰
          </div>
        </div>

       
        {open && (
          <div className={styles.mobile_dropdown} ref={menuRef}>
            <Link href="/products">🚀 Our Products</Link>
          <Link href="/ailab">🧪 AI Lab</Link>
          <Link href="/contact">📞 Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}