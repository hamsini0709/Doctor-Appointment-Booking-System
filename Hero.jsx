// src/components/Features.jsx
import React from "react";

const FEATURES = [
  { num:"01", icon:"🔍", label:"Smart Doctor Search", desc:"Search by name, specialty, or location. View experience, ratings, and real-time availability instantly.", color:"var(--mint-mid)", bg:"var(--mint)" },
  { num:"02", icon:"🗂️", label:"Specialty Filter",    desc:"Filter doctors by category — Cardiologist, Dermatologist, General Physician, and more — in one tap.", color:"var(--blush-mid)", bg:"var(--blush)" },
  { num:"03", icon:"📅", label:"Calendar View",       desc:"Visual calendar interface showing available and booked slots clearly, so you always pick the best time.", color:"#ef9f27", bg:"#faeeda" },
  { num:"04", icon:"⏰", label:"Slot Picker",         desc:"Select your preferred time slot with double-booking prevention built in — no conflicts, ever.", color:"#378add", bg:"#e6f1fb" },
  { num:"05", icon:"🔔", label:"Smart Reminders",     desc:"Get timely notifications before your appointment so you never miss a consultation.", color:"#7f77dd", bg:"#eeedfe" },
  { num:"06", icon:"📋", label:"Booking History",     desc:"View all past and upcoming appointments in one place to track your medical visits effortlessly.", color:"#d85a30", bg:"#faece7" },
  { num:"07", icon:"✏️", label:"Cancel / Reschedule", desc:"Modify or cancel appointments easily. Availability updates dynamically in real time.", color:"var(--mint-mid)", bg:"var(--mint)" },
  { num:"08", icon:"✅", label:"Booking Confirmation",desc:"Instant confirmation with all appointment details — doctor, date, time — and a clear success message.", color:"var(--blush-mid)", bg:"var(--blush)" },
];

export default function Features() {
  return (
    <section id="features" style={{ maxWidth: 1200, margin: "0 auto 5rem", padding: "0 4vw" }}>
      <div style={{ fontSize: ".78rem", fontWeight: 600, letterSpacing: ".8px", textTransform: "uppercase", color: "var(--mint-mid)", marginBottom: ".5rem" }}>
        What we offer
      </div>
      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
        marginBottom: "2.5rem", color: "var(--ink)", letterSpacing: "-.5px",
      }}>Everything you need, all in one place</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
        gap: "1.4rem",
      }}>
        {FEATURES.map(f => (
          <div key={f.num} style={{
            background: "var(--white)", borderRadius: "var(--radius)",
            padding: "1.8rem", position: "relative", overflow: "hidden",
            border: "1px solid rgba(0,0,0,.05)",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: 3, background: f.color,
            }} />
            <div style={{
              fontFamily: "'DM Serif Display', serif", fontSize: "2.8rem",
              opacity: .07, position: "absolute", top: ".8rem", right: "1.2rem",
              lineHeight: 1, userSelect: "none",
            }}>{f.num}</div>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.3rem", marginBottom: "1rem", background: f.bg,
            }}>{f.icon}</div>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: ".5rem" }}>{f.label}</h3>
            <p style={{ fontSize: ".88rem", color: "var(--ink-soft)", lineHeight: 1.65 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}