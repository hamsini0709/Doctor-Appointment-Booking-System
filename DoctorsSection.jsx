// src/components/DoctorsSection.jsx
import React from "react";
import DoctorCard from "./DoctorCard";

export default function DoctorsSection({ doctors, onBook }) {
  return (
    <section id="doctors" style={{
      maxWidth: 1200, margin: "0 auto 5rem", padding: "0 4vw",
    }}>
      <div style={{ fontSize: ".78rem", fontWeight: 600, letterSpacing: ".8px", textTransform: "uppercase", color: "var(--mint-mid)", marginBottom: ".5rem" }}>
        Verified Doctors
      </div>
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem",
      }}>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
          color: "var(--ink)", letterSpacing: "-.5px",
        }}>
          {doctors.length} doctor{doctors.length !== 1 ? "s" : ""} found
        </h2>
        <div style={{ fontSize: ".85rem", color: "var(--ink-mute)" }}>
          Showing real-time availability for Hyderabad
        </div>
      </div>

      {doctors.length === 0 ? (
        <div style={{
          textAlign: "center", padding: "4rem 2rem",
          color: "var(--ink-mute)", fontSize: "1rem",
        }}>
          No doctors found. Try a different search.
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.4rem",
        }}>
          {doctors.map(doc => (
            <DoctorCard key={doc.id} doctor={doc} onBook={onBook} />
          ))}
        </div>
      )}
    </section>
  );
}
