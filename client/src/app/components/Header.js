"use client";
import Image from "next/image";
import styles from "./css/header.module.css";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

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

  return (
    <header className={styles.header}>
      <div className={styles.header_space}>
        <div className={styles.header_left}>
          <Image src="/logofinal.png" alt="Logo" width={80} height={80} />
        </div>

        <div className={styles.header_right}>
          <a href="#">Services</a>
          <a href="#">AI</a>
          <a href="#">Our Process</a>
          <a href="#">Contact</a>

          <div className={styles.hbutton_container}>
            <button className={styles.login_button}>Start a Project</button>
          </div>
        </div>

        <div className={styles.mobile_actions}>
          <button className={styles.mobile_project_btn}>Start a Project</button>
          <div
            className={styles.mobile_menu_icon}
            onClick={() => setOpen(!open)}
          >
            ☰
          </div>
        </div>

        {open && (
          <div className={styles.mobile_dropdown} ref={menuRef}>
            <a href="#" onClick={closeMenu}>Services</a>
            <a href="#" onClick={closeMenu}>AI</a>
            <a href="#" onClick={closeMenu}>Our Process</a>
            <a href="#" onClick={closeMenu}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}
