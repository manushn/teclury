"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./css/ChatWidget.module.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Load messages and session from sessionStorage after mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("teclury_messages");
      const savedSession = sessionStorage.getItem("teclury_session");
      
      if (savedSession) {
        setSessionId(savedSession);
      }

      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          return;
        }
      }
    } catch {}

    const initial = [
      { 
        role: "bot", 
        text: "Hello! 👋 I'm Nora, your Teclury assistant. How can I help you today?",
        timestamp: new Date().toISOString()
      }
    ];
    setMessages(initial);
    sessionStorage.setItem("teclury_messages", JSON.stringify(initial));
  }, []);

  // Persist messages to sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem("teclury_messages", JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setUnreadCount(0);
    }
  }, [open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    const userMessage = {
      role: "user",
      text: userText,
      timestamp: new Date().toISOString()
    };

    setMessages(m => [...m, userMessage]);
    setInput("");
    setLoading(true);
    setIsTyping(true);

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
        "I apologize, but something went wrong. Please try again.";

      const botMessage = {
        role: "bot",
        text: botText,
        timestamp: new Date().toISOString()
      };

      // Simulate typing delay for better UX
      setTimeout(() => {
        setMessages(m => [...m, botMessage]);
        setIsTyping(false);
        
        // Show unread indicator if chat is closed
        if (!open) {
          setUnreadCount(prev => prev + 1);
        }
      }, 800);

    } catch (err) {
      setTimeout(() => {
        setMessages(m => [
          ...m,
          { 
            role: "bot", 
            text: "I'm having trouble connecting right now. Please check your connection and try again.",
            timestamp: new Date().toISOString()
          },
        ]);
        setIsTyping(false);
      }, 500);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    if (window.confirm("Are you sure you want to clear the chat history?")) {
      const initial = [
        { 
          role: "bot", 
          text: "Chat cleared. How can I help you?",
          timestamp: new Date().toISOString()
        }
      ];
      setMessages(initial);
      sessionStorage.setItem("teclury_messages", JSON.stringify(initial));
      sessionStorage.removeItem("teclury_session");
      setSessionId(null);
    }
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.open : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Floating action button */}
      {!open && (
        <button
          className={styles.fab}
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
          <span className={styles.fabIcon}>💬</span>
          
          <span className={styles.fabText}>Chat with Nora</span>
          {unreadCount > 0 && (
            <span className={styles.unreadBadge}>{unreadCount}</span>
          )}
        </button>
      )}

      {/* Chat window */}
      <div className={`${styles.chatBox} ${open ? styles.open : ""}`}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.avatar}>N</div>
            <div className={styles.headerInfo}>
              <div className={styles.headerTitle}>Teclury Assistant</div>
              <div className={styles.headerStatus}>
                <span className={styles.statusDot}></span>
                Online
              </div>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button 
              onClick={clearChat} 
              className={styles.iconBtn}
              aria-label="Clear chat"
              title="Clear chat"
            >
              🗑️
            </button>
            <button 
              onClick={() => setOpen(false)} 
              className={styles.iconBtn}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Messages area */}
        <div className={styles.messages}>
          {messages.map((m, i) => (
            <div
              key={i}
              className={`${styles.messageWrapper} ${
                m.role === "user" ? styles.userWrapper : styles.botWrapper
              }`}
            >
              {m.role === "bot" && (
                <div className={styles.botAvatar}>N</div>
              )}
              <div className={styles.messageGroup}>
                <div
                  className={
                    m.role === "user" ? styles.userBubble : styles.botBubble
                  }
                >
                  {m.text}
                </div>
                <div className={styles.timestamp}>
                  {formatTime(m.timestamp)}
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className={`${styles.messageWrapper} ${styles.botWrapper}`}>
              <div className={styles.botAvatar}>N</div>
              <div className={styles.botBubble}>
                <div className={styles.typing}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input area */}
        <div className={styles.inputRow}>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type your message…"
            maxLength={500}
            disabled={loading}
            className={styles.input}
          />
          <button 
            onClick={sendMessage} 
            disabled={loading || !input.trim()}
            className={styles.sendBtn}
            aria-label="Send message"
          >
            <span className={styles.sendIcon}>➤</span>
          </button>
        </div>

        {/* Character counter */}
        <div className={styles.footer}>
          <span className={styles.charCount}>
            {input.length}/500
          </span>
        </div>
      </div>
    </>
  );
}