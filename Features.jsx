// src/components/DoctorCard.jsx
import React from "react";
import { SPECIALTIES } from "../data/doctors";

const AV_COLORS = {
  "av-mint":  { bg: "var(--mint)",  color: "var(--mint-deep)" },
  "av-blush": { bg: "var(--blush)", color: "var(--blush-deep)" },
  "av-amber": { bg: "#faeeda",      color: "#633806" },
};

export default function DoctorCard({ doctor, onBook }) {
  const av = AV_COLORS[doctor.avatar];
  const spec = SPECIALTIES.find(s => s.id === doctor.specialty);
  const todaySlots = Object.values(doctor.slots)[0] || [];
  const availableToday = todaySlots.filter(s => s.status === "available").length;

  return (
    <div style={{
      background: "var(--white)", borderRadius: "var(--radius)",
      padding: "1.6rem", boxShadow: "var(--shadow)",
      border: "1.5px solid transparent",
      transition: "border-color .2s, transform .2s, box-shadow .2s",
      display: "flex", flexDirection: "column", gap: "1rem",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "var(--mint-mid)";
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 12px 36px rgba(93,202,165,.2)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "transparent";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "var(--shadow)";
    }}>

      {/* Header */}
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
          background: av.bg, color: av.color,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: "1rem",
        }}>{doctor.initials}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: "1rem", marginBottom: 2 }}>{doctor.name}</div>
          <div style={{ fontSize: ".82rem", color: "var(--ink-mute)" }}>
            {spec?.label} · {doctor.experience} yrs exp
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
            <span style={{ color: "#ef9f27", fontSize: ".82rem" }}>★</span>
            <span style={{ fontSize: ".82rem", fontWeight: 600 }}>{doctor.rating}</span>
            <span style={{ fontSize: ".78rem", color: "var(--ink-mute)" }}>({doctor.reviews} reviews)</span>
          </div>
        </div>
        <div style={{
          background: availableToday > 0 ? "var(--mint)" : "#f1efe8",
          color: availableToday > 0 ? "var(--mint-deep)" : "var(--ink-mute)",
          fontSize: ".72rem", fontWeight: 600,
          padding: ".2rem .7rem", borderRadius: "var(--pill)",
          whiteSpace: "nowrap",
        }}>
          {availableToday > 0 ? `${availableToday} slots today` : "Next: Tomorrow"}
        </div>
      </div>

      {/* Clinic & location */}
      <div style={{ fontSize: ".82rem", color: "var(--ink-soft)", lineHeight: 1.5 }}>
        <div>🏥 {doctor.clinic}</div>
        <div>📍 {doctor.location}</div>
        <div>🎓 {doctor.education}</div>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {doctor.tags.map(tag => (
          <span key={tag} style={{
            fontSize: ".72rem", fontWeight: 500,
            padding: ".2rem .6rem", borderRadius: "var(--pill)",
            background: "var(--mint)", color: "var(--mint-deep)",
          }}>{tag}</span>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", paddingTop: ".6rem",
        borderTop: "1px solid rgba(0,0,0,.05)",
      }}>
        <div>
          <div style={{ fontSize: ".78rem", color: "var(--ink-mute)" }}>Consultation fee</div>
          <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--mint-deep)" }}>
            ₹{doctor.fee}
          </div>
        </div>
        <button onClick={() => onBook(doctor)} style={{
          background: "var(--mint-deep)", color: "#fff",
          border: "none", borderRadius: "var(--pill)",
          padding: ".6rem 1.4rem", fontSize: ".88rem", fontWeight: 500,
          cursor: "pointer",
        }}>Book Slot</button>
      </div>
    </div>
  );
}