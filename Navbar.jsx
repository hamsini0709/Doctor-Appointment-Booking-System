// src/components/Hero.jsx
import React from "react";

export default function Hero({ onBook }) {
  return (
    <section style={{
      display: "grid", gridTemplateColumns: "1fr 1fr",
      alignItems: "center", gap: "3rem",
      padding: "6rem 4vw 4rem",
      maxWidth: 1200, margin: "0 auto",
    }}>
      {/* Left content */}
      <div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "var(--mint)", color: "var(--mint-deep)",
          fontSize: ".8rem", fontWeight: 600, letterSpacing: ".6px",
          textTransform: "uppercase", padding: ".35rem 1rem",
          borderRadius: "var(--pill)", marginBottom: "1.4rem",
        }}>
          <span style={{ width:6,height:6,borderRadius:"50%",background:"var(--mint-mid)",display:"inline-block" }} />
          Healthcare, simplified
        </div>

        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
          lineHeight: 1.15, letterSpacing: "-1px",
          color: "var(--ink)", marginBottom: "1.2rem",
        }}>
          Find your doctor,<br />
          <em style={{ fontStyle: "italic", color: "var(--mint-deep)" }}>book in minutes</em>
        </h1>

        <p style={{
          fontSize: "1.05rem", color: "var(--ink-soft)",
          lineHeight: 1.75, maxWidth: 470, marginBottom: "2rem",
        }}>
          Search verified Hyderabad doctors by specialty or location, view real-time
          availability, and book your appointment — without stepping out of your home.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.8rem" }}>
          <button onClick={onBook} style={{
            background: "var(--mint-deep)", color: "#fff",
            border: "none", borderRadius: "var(--pill)",
            padding: ".85rem 2rem", fontSize: "1rem", fontWeight: 500,
            cursor: "pointer",
          }}>Book an Appointment</button>
          <a href="#how" style={{
            background: "transparent", color: "var(--ink-soft)",
            border: "1.5px solid rgba(0,0,0,.14)", borderRadius: "var(--pill)",
            padding: ".83rem 1.8rem", fontSize: "1rem", fontWeight: 500,
            textDecoration: "none", display: "inline-block",
          }}>How it works</a>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {["Doctor Search","Specialty Filter","Calendar View","Reminders","Booking History"].map((t, i) => (
            <span key={t} style={{
              fontSize: ".72rem", fontWeight: 600,
              padding: ".2rem .65rem", borderRadius: "var(--pill)",
              background: i < 2 ? "var(--mint)" : i === 4 ? "#faeeda" : "var(--blush)",
              color: i < 2 ? "var(--mint-deep)" : i === 4 ? "#633806" : "var(--blush-deep)",
              letterSpacing: ".3px",
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Right: doctor preview cards (no float animation — clean) */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <DemoCard
          initials="PG" avatarClass="mint"
          name="Dr. Pradeep Kumar Goud" spec="Cardiologist · 18 yrs exp"
          rating={4.9} reviews={412}
          slots={["9:00 AM","10:30 AM","12:00 PM","4:30 PM"]}
          booked={[0,2]} active={1}
        />
        <DemoCard
          initials="SR" avatarClass="blush"
          name="Dr. Sunita Reddy" spec="Dermatologist · 12 yrs exp"
          confirmed date="Wed, 30 Apr · 11:00 AM"
          style={{ alignSelf: "flex-end", width: "88%" }}
        />
        <DemoCard
          initials="AK" avatarClass="amber"
          name="Dr. Ananya Krishnaswamy" spec="General Physician · 9 yrs exp"
          slots={["9:30 AM","11:00 AM","3:00 PM"]} active={1}
          style={{ width: "78%" }}
        />
      </div>
    </section>
  );
}

function DemoCard({ initials, avatarClass, name, spec, rating, reviews, slots, booked = [], active, confirmed, date, style = {} }) {
  const avatarColors = {
    mint:  { bg: "var(--mint)",  color: "var(--mint-deep)" },
    blush: { bg: "var(--blush)", color: "var(--blush-deep)" },
    amber: { bg: "#faeeda",      color: "#633806" },
  };
  const av = avatarColors[avatarClass];

  return (
    <div style={{
      background: "var(--white)", borderRadius: "var(--radius)",
      padding: "1.2rem 1.4rem",
      boxShadow: "0 4px 30px rgba(0,0,0,.07)",
      ...style,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: ".6rem" }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: av.bg, color: av.color,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 600, fontSize: ".9rem", flexShrink: 0,
        }}>{initials}</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: ".95rem" }}>{name}</div>
          <div style={{ fontSize: ".78rem", color: "var(--ink-mute)" }}>{spec}</div>
          {rating && (
            <div style={{ display: "flex", gap: 2, marginTop: 3 }}>
              {"★★★★★".split("").map((s, i) => (
                <span key={i} style={{ color: "#ef9f27", fontSize: ".75rem" }}>{s}</span>
              ))}
              <span style={{ fontSize: ".72rem", color: "#888", marginLeft: 4 }}>{rating} ({reviews})</span>
            </div>
          )}
        </div>
      </div>

      {confirmed ? (
        <>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "var(--mint)", color: "var(--mint-deep)",
            fontSize: ".8rem", fontWeight: 600,
            padding: ".4rem .9rem", borderRadius: "var(--pill)", marginBottom: ".6rem",
          }}>
            <span style={{
              width:16,height:16,borderRadius:"50%",
              background:"var(--mint-deep)",color:"#fff",
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:".65rem",
            }}>✓</span>
            Appointment Confirmed!
          </div>
          <div style={{ fontSize: ".82rem", color: "var(--ink-soft)", lineHeight: 1.6 }}>
            <strong style={{ fontSize: ".85rem" }}>{name}</strong> · Dermatologist<br />
            📅 {date}<br />🔔 Reminder set for 1 hour before
          </div>
        </>
      ) : (
        <>
          <div style={{ fontSize: ".78rem", color: "var(--ink-mute)", marginBottom: ".5rem", fontWeight: 500 }}>
            Available slots — Today
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {slots.map((t, i) => (
              <span key={t} style={{
                fontSize: ".75rem", fontWeight: 500,
                padding: ".28rem .75rem", borderRadius: "var(--pill)",
                background: booked.includes(i) ? "#f1efe8" : i === active ? "var(--mint-deep)" : "var(--mint)",
                color: booked.includes(i) ? "var(--ink-mute)" : i === active ? "#fff" : "var(--mint-deep)",
                textDecoration: booked.includes(i) ? "line-through" : "none",
              }}>{t}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}