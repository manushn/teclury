"use client";

import { useEffect, useState } from "react";
import styles from "./admin.module.css";

const TABS = [
  { key: "CONTACT", label: "Contacts" },
  { key: "PROJECT", label: "Projects" },
  { key: "EARLY_ACCESS", label: "Early Access" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("CONTACT");
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔐 Check admin token
  useEffect(() => {
    const token = sessionStorage.getItem("admin_token");
    if (!token) {
      window.location.href = "/admin/login";
    }
  }, []);

  // 🔄 Load data on tab change
  useEffect(() => {
    fetchSubmissions(true);
  }, [activeTab]);

  async function fetchSubmissions(reset = false) {
    try {
      setLoading(true);
      setError("");

      const token = sessionStorage.getItem("admin_token");
      if (!token) return;

      let url = `${process.env.NEXT_PUBLIC_API_URL}/admin/submissions?submission_type=${activeTab}&limit=10`;
      if (!reset && cursor) {
        url += `&cursor=${cursor}`;
      }

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401 || res.status === 403) {
        sessionStorage.removeItem("admin_token");
        window.location.href = "/admin/login";
        return;
      }

      const data = await res.json();

      setItems(reset ? data.items : [...items, ...data.items]);
      setCursor(data.next_cursor);
    } catch (err) {
      setError("Failed to load submissions");
    } finally {
      setLoading(false);
    }
  }

  // Render table headers based on active tab
  const renderTableHeaders = () => {
    switch (activeTab) {
      case "CONTACT":
        return (
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        );
      case "PROJECT":
        return (
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Project Type</th>
            <th>Budget</th>
            <th>Details</th>
            <th>Date</th>
          </tr>
        );
      case "EARLY_ACCESS":
        return (
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
          </tr>
        );
      default:
        return null;
    }
  };

  // Render table rows based on active tab
  const renderTableRow = (item, index) => {
    const formatDate = (dateStr) => {
      return dateStr?.replace("T", " ").split(".")[0] || "-";
    };

    switch (activeTab) {
      case "CONTACT":
        return (
          <tr key={index}>
            <td>{item.name || "-"}</td>
            <td>{item.email || "-"}</td>
            <td>{item.phone || "-"}</td>
            <td className={styles.details}>{item.message || "-"}</td>
            <td>{formatDate(item.created_at)}</td>
          </tr>
        );
      case "PROJECT":
        return (
          <tr key={index}>
            <td>{item.fullname || "-"}</td>
            <td>{item.email || "-"}</td>
            <td>{item.phone || "-"}</td>
            <td>{item.company || "-"}</td>
            <td>{item.type || "-"}</td>
            <td>{item.budget || "-"}</td>
            <td className={styles.details}>{item.projectdetails || "-"}</td>
            <td>{formatDate(item.created_at)}</td>
          </tr>
        );
      case "EARLY_ACCESS":
        return (
          <tr key={index}>
            <td>{item.name || "-"}</td>
            <td>{item.email || "-"}</td>
            <td>{formatDate(item.created_at)}</td>
          </tr>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Dashboard</h1>

      {/* Tabs */}
      <div className={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tabBtn} ${
              activeTab === tab.key ? styles.activeTab : ""
            }`}
            onClick={() => {
              setActiveTab(tab.key);
              setItems([]);
              setCursor(null);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Error */}
      {error && <p className={styles.error}>{error}</p>}

      {/* Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>{renderTableHeaders()}</thead>
          <tbody>
            {items.length === 0 && !loading && (
              <tr>
                <td colSpan="10" className={styles.empty}>
                  No records found
                </td>
              </tr>
            )}

            {items.map((item, index) => renderTableRow(item, index))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {cursor && (
        <div className={styles.loadMore}>
          <button onClick={() => fetchSubmissions(false)} disabled={loading}>
            {loading ? "Loading..." : "Load next 10"}
          </button>
        </div>
      )}

      {/* Loading indicator */}
      {loading && items.length === 0 && (
        <div className={styles.loadingContainer}>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}