// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

export default function Navbar({ onBookNow }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1rem 4vw",
      background: scrolled ? "rgba(253,249,244,0.95)" : "rgba(253,249,244,0.88)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(93,202,165,0.18)",
      transition: "background 0.3s",
    }}>
      <div style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "1.55rem",
        color: "var(--mint-deep)",
        letterSpacing: "-0.5px",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{
          width: 10, height: 10, borderRadius: "50%",
          background: "var(--blush-mid)", display: "inline-block"
        }} />
        MediBook
      </div>

      <ul style={{ display: "flex", gap: "2.2rem", listStyle: "none" }}>
        {[["#features","Features"], ["#how","How it works"], ["#specialties","Specialties"], ["#doctors","Doctors"]].map(([href, label]) => (
          <li key={href}>
            <a href={href} style={{
              fontSize: ".92rem", fontWeight: 500,
              color: "var(--ink-soft)", textDecoration: "none",
            }}
            onMouseEnter={e => e.target.style.color = "var(--mint-deep)"}
            onMouseLeave={e => e.target.style.color = "var(--ink-soft)"}
            >{label}</a>
          </li>
        ))}
      </ul>

      <button onClick={onBookNow} style={{
        background: "var(--mint-deep)", color: "#fff",
        border: "none", borderRadius: "var(--pill)",
        padding: ".55rem 1.4rem", fontSize: ".9rem", fontWeight: 500,
        cursor: "pointer",
      }}>Book Now</button>
    </nav>
  );
}