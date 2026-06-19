// src/components/HowItWorks.jsx
import React from "react";

const STEPS = [
  { n:"1", title:"Search a Doctor",    desc:"Enter a name, specialty, or location to discover verified Hyderabad doctors." },
  { n:"2", title:"Pick a Slot",         desc:"Browse the calendar, choose an available time that works for your schedule." },
  { n:"3", title:"Confirm Booking",     desc:"Enter your details, review your appointment, and confirm with one click." },
  { n:"4", title:"Get a Reminder",      desc:"Receive a notification before your appointment so you're always prepared." },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ maxWidth: 1200, margin: "0 auto 5rem", padding: "0 4vw" }}>
      <div style={{ fontSize: ".78rem", fontWeight: 600, letterSpacing: ".8px", textTransform: "uppercase", color: "var(--mint-mid)", marginBottom: ".5rem" }}>
        Simple steps
      </div>
      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
        marginBottom: "2.5rem", color: "var(--ink)", letterSpacing: "-.5px",
      }}>How it works</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {STEPS.map((s, i) => (
          <div key={s.n} style={{
            flex: 1, minWidth: 200, textAlign: "center", padding: "1.5rem 1rem",
            position: "relative",
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: "50%",
              background: "var(--mint)", color: "var(--mint-deep)",
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.4rem", display: "flex", alignItems: "center",
              justifyContent: "center", margin: "0 auto 1rem",
              border: "2px solid var(--mint-mid)",
            }}>{s.n}</div>
            <h4 style={{ fontSize: ".95rem", fontWeight: 600, marginBottom: ".4rem" }}>{s.title}</h4>
            <p style={{ fontSize: ".82rem", color: "var(--ink-mute)", lineHeight: 1.6 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}