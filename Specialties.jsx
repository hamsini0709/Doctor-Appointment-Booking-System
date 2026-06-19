// src/components/Specialties.jsx
import React from "react";
import { SPECIALTIES } from "../data/doctors";

export default function Specialties({ onFilter }) {
  return (
    <section id="specialties" style={{ maxWidth: 1200, margin: "0 auto 5rem", padding: "0 4vw" }}>
      <div style={{ fontSize: ".78rem", fontWeight: 600, letterSpacing: ".8px", textTransform: "uppercase", color: "var(--mint-mid)", marginBottom: ".5rem" }}>
        Browse by specialty
      </div>
      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
        marginBottom: "2.5rem", color: "var(--ink)", letterSpacing: "-.5px",
      }}>Find the right specialist</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))",
        gap: "1rem",
      }}>
        {SPECIALTIES.map(s => (
          <div key={s.id} onClick={() => onFilter(s.id)} style={{
            background: "var(--white)", borderRadius: "var(--radius)",
            padding: "1.4rem 1rem", textAlign: "center",
            border: "1.5px solid transparent",
            cursor: "pointer",
            transition: "border-color .2s, transform .2s, box-shadow .2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "var(--mint-mid)";
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(93,202,165,.2)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <span style={{ fontSize: "2.2rem", display: "block", marginBottom: ".6rem" }}>{s.icon}</span>
            <div style={{ fontSize: ".88rem", fontWeight: 600, color: "var(--ink)" }}>{s.label}</div>
            <div style={{ fontSize: ".75rem", color: "var(--ink-mute)", marginTop: 3 }}>{s.count} doctors</div>
          </div>
        ))}
      </div>
    </section>
  );
}