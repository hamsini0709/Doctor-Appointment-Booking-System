// src/components/BookingModal.jsx
import React, { useState } from "react";
import { SPECIALTIES } from "../data/doctors";
import { format, parseISO } from "date-fns";

export default function BookingModal({ doctor, onClose, onConfirm }) {
  const dates = Object.keys(doctor.slots);
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [step, setStep] = useState(1); // 1=pick, 2=confirm, 3=done
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");

  const spec = SPECIALTIES.find(s => s.id === doctor.specialty);
  const slotsForDate = doctor.slots[selectedDate] || [];
  const available = slotsForDate.filter(s => s.status === "available");

  function formatDate(dateStr) {
    try { return format(parseISO(dateStr), "EEE, d MMM yyyy"); }
    catch { return dateStr; }
  }

  function handleConfirm() {
    if (!selectedSlot || !patientName.trim() || !patientPhone.trim()) return;
    onConfirm({ doctor, date: selectedDate, slot: selectedSlot, patientName, patientPhone });
    setStep(3);
  }

  const AV = {
    "av-mint":  { bg: "var(--mint)",  color: "var(--mint-deep)" },
    "av-blush": { bg: "var(--blush)", color: "var(--blush-deep)" },
    "av-amber": { bg: "#faeeda",      color: "#633806" },
  }[doctor.avatar];

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{
        background: "var(--white)", borderRadius: "var(--radius)",
        width: "100%", maxWidth: 560,
        maxHeight: "90vh", overflowY: "auto",
        padding: "2rem",
        animation: "slideUp .25s ease",
      }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <div style={{
              width: 50, height: 50, borderRadius: "50%",
              background: AV.bg, color: AV.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 700, fontSize: ".95rem",
            }}>{doctor.initials}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "1rem" }}>{doctor.name}</div>
              <div style={{ fontSize: ".82rem", color: "var(--ink-mute)" }}>
                {spec?.label} · {doctor.clinic}
              </div>
              <div style={{ fontSize: ".8rem", color: "var(--mint-deep)", fontWeight: 600 }}>
                ₹{doctor.fee} consultation
              </div>
            </div>
          </div>
          <button onClick={onClose} style={{
            background: "none", border: "none", cursor: "pointer",
            fontSize: "1.4rem", color: "var(--ink-mute)", lineHeight: 1,
          }}>×</button>
        </div>

        {step === 3 ? (
          /* Success screen */
          <div style={{ textAlign: "center", padding: "1rem 0 .5rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", marginBottom: ".5rem" }}>
              Appointment Confirmed!
            </h3>
            <div style={{
              background: "var(--mint)", borderRadius: "var(--radius-sm)",
              padding: "1.2rem", marginTop: "1rem", textAlign: "left",
              fontSize: ".88rem", lineHeight: 1.8, color: "var(--ink-soft)",
            }}>
              <div><strong>Patient:</strong> {patientName}</div>
              <div><strong>Doctor:</strong> {doctor.name}</div>
              <div><strong>Specialty:</strong> {spec?.label}</div>
              <div><strong>Date:</strong> {formatDate(selectedDate)}</div>
              <div><strong>Time:</strong> {selectedSlot}</div>
              <div><strong>Clinic:</strong> {doctor.clinic}</div>
              <div><strong>Fee:</strong> ₹{doctor.fee}</div>
            </div>
            <div style={{
              marginTop: "1rem", fontSize: ".8rem", color: "var(--ink-mute)",
            }}>
              🔔 A reminder will be sent 1 hour before your appointment.
            </div>
            <button onClick={onClose} style={{
              marginTop: "1.5rem",
              background: "var(--mint-deep)", color: "#fff",
              border: "none", borderRadius: "var(--pill)",
              padding: ".75rem 2rem", fontSize: ".95rem", fontWeight: 500,
              cursor: "pointer", width: "100%",
            }}>Done</button>
          </div>

        ) : step === 2 ? (
          /* Patient details */
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: "1.2rem" }}>Your Details</h3>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ fontSize: ".82rem", fontWeight: 600, display: "block", marginBottom: 6 }}>Full Name *</label>
              <input
                type="text" placeholder="Enter your full name"
                value={patientName} onChange={e => setPatientName(e.target.value)}
                style={{
                  width: "100%", border: "1.5px solid rgba(0,0,0,.1)",
                  borderRadius: "var(--radius-sm)", padding: ".7rem 1rem",
                  fontFamily: "inherit", fontSize: ".95rem", outline: "none",
                }}
              />
            </div>
            <div style={{ marginBottom: "1.4rem" }}>
              <label style={{ fontSize: ".82rem", fontWeight: 600, display: "block", marginBottom: 6 }}>Phone Number *</label>
              <input
                type="tel" placeholder="+91 9876543210"
                value={patientPhone} onChange={e => setPatientPhone(e.target.value)}
                style={{
                  width: "100%", border: "1.5px solid rgba(0,0,0,.1)",
                  borderRadius: "var(--radius-sm)", padding: ".7rem 1rem",
                  fontFamily: "inherit", fontSize: ".95rem", outline: "none",
                }}
              />
            </div>
            <div style={{
              background: "var(--cream)", borderRadius: "var(--radius-sm)",
              padding: "1rem", marginBottom: "1.4rem",
              fontSize: ".85rem", color: "var(--ink-soft)", lineHeight: 1.7,
            }}>
              <strong>Booking Summary</strong><br />
              📅 {formatDate(selectedDate)} · {selectedSlot}<br />
              🏥 {doctor.clinic}
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button onClick={() => setStep(1)} style={{
                flex: 1, background: "transparent",
                border: "1.5px solid rgba(0,0,0,.14)", borderRadius: "var(--pill)",
                padding: ".7rem", fontSize: ".95rem", fontWeight: 500, cursor: "pointer",
                color: "var(--ink-soft)",
              }}>← Back</button>
              <button onClick={handleConfirm}
                disabled={!patientName.trim() || !patientPhone.trim()}
                style={{
                  flex: 2, background: patientName.trim() && patientPhone.trim() ? "var(--mint-deep)" : "#ccc",
                  color: "#fff", border: "none", borderRadius: "var(--pill)",
                  padding: ".7rem", fontSize: ".95rem", fontWeight: 500,
                  cursor: patientName.trim() && patientPhone.trim() ? "pointer" : "not-allowed",
                }}>Confirm Booking →</button>
            </div>
          </div>

        ) : (
          /* Date + slot picker */
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: "1rem" }}>Select Date</h3>
            <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginBottom: "1.5rem" }}>
              {dates.map(date => {
                const avCount = (doctor.slots[date] || []).filter(s => s.status === "available").length;
                const isSelected = date === selectedDate;
                const isToday = date === dates[0];
                return (
                  <button key={date} onClick={() => { setSelectedDate(date); setSelectedSlot(null); }} style={{
                    flexShrink: 0,
                    background: isSelected ? "var(--mint-deep)" : "var(--cream)",
                    color: isSelected ? "#fff" : "var(--ink-soft)",
                    border: isSelected ? "none" : "1.5px solid rgba(0,0,0,.1)",
                    borderRadius: "var(--radius-sm)", padding: ".6rem .9rem",
                    cursor: "pointer", textAlign: "center", minWidth: 72,
                  }}>
                    <div style={{ fontSize: ".75rem", fontWeight: 600 }}>
                      {isToday ? "Today" : format(parseISO(date), "EEE")}
                    </div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, margin: "2px 0" }}>
                      {format(parseISO(date), "d")}
                    </div>
                    <div style={{ fontSize: ".65rem", opacity: .7 }}>
                      {avCount} free
                    </div>
                  </button>
                );
              })}
            </div>

            <h3 style={{ fontWeight: 600, marginBottom: ".8rem" }}>
              Available Slots — {format(parseISO(selectedDate), "EEE, d MMM")}
            </h3>

            {available.length === 0 ? (
              <div style={{ color: "var(--ink-mute)", fontSize: ".9rem", marginBottom: "1.5rem" }}>
                No available slots on this date.
              </div>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "1.5rem" }}>
                {slotsForDate.map(slot => {
                  const isAvailable = slot.status === "available";
                  const isActive = selectedSlot === slot.time;
                  return (
                    <button key={slot.time}
                      disabled={!isAvailable}
                      onClick={() => isAvailable && setSelectedSlot(slot.time)}
                      style={{
                        fontSize: ".82rem", fontWeight: 500,
                        padding: ".4rem .95rem", borderRadius: "var(--pill)",
                        border: isActive ? "none" : "1.5px solid rgba(0,0,0,.1)",
                        background: !isAvailable ? "#f1efe8" : isActive ? "var(--mint-deep)" : "var(--mint)",
                        color: !isAvailable ? "var(--ink-mute)" : isActive ? "#fff" : "var(--mint-deep)",
                        textDecoration: !isAvailable ? "line-through" : "none",
                        cursor: isAvailable ? "pointer" : "not-allowed",
                      }}>{slot.time}</button>
                  );
                })}
              </div>
            )}

            <button
              onClick={() => selectedSlot && setStep(2)}
              disabled={!selectedSlot}
              style={{
                width: "100%",
                background: selectedSlot ? "var(--mint-deep)" : "#ccc",
                color: "#fff", border: "none", borderRadius: "var(--pill)",
                padding: ".8rem", fontSize: ".95rem", fontWeight: 500,
                cursor: selectedSlot ? "pointer" : "not-allowed",
              }}>
              {selectedSlot ? `Continue with ${selectedSlot} →` : "Select a slot to continue"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}