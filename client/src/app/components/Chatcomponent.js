"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./css/ChatWidget.module.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // SSR-safe initial value
  const [messages, setMessages] = useState([]);

  // load from sessionStorage AFTER mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("teclury_messages");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setMessages(parsed);
          return;
        }
      }
    } catch {}

    const initial = [{ role: "bot", text: "Hello 👋" }];
    setMessages(initial);
    sessionStorage.setItem("teclury_messages", JSON.stringify(initial));
  }, []);

  // persist messages
  useEffect(() => {
    sessionStorage.setItem("teclury_messages", JSON.stringify(messages));
  }, [messages]);

  // auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setMessages(m => [...m, { role: "user", text: userText }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_AI_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: userText,
          session_id: sessionId,
        }),
      });

      const data = await res.json();

      if (data.session_id && !sessionId) {
        sessionStorage.setItem("teclury_session", data.session_id);
        setSessionId(data.session_id);
      }

      const botText =
        data?.answer ??
        data?.detail?.answer ??
        "Something went wrong. Please try again.";

      setMessages(m => [...m, { role: "bot", text: botText }]);
    } catch (err) {
      setMessages(m => [
        ...m,
        { role: "bot", text: "Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = e => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.open : ""}`}
        onClick={() => setOpen(false)}
      />

      {!open && (
        <button
          className={`${styles.fab} ${open ? styles.open : ""}`}
          onClick={() => setOpen(true)}
        >
          💬 Chat with Nora
        </button>
      )}

      <div className={`${styles.chatBox} ${open ? styles.open : ""}`}>
        <div className={styles.header}>
          Teclury Assistant
          <span onClick={() => setOpen(false)} className={styles.close}>
            ✕
          </span>
        </div>

        <div className={styles.messages}>
          {messages.map((m, i) => (
            <div
              key={i}
              className={m.role === "user" ? styles.userBubble : styles.botBubble}
            >
              {m.text}
            </div>
          ))}

          {loading && (
            <div className={styles.botBubble}>
              <div className={styles.typing}>
                <span></span><span></span><span></span>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className={styles.inputRow}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type your message…"
            maxLength={500}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
}
