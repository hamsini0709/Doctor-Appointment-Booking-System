// src/components/SearchBar.jsx
import React from "react";
import { SPECIALTIES } from "../data/doctors";

export default function SearchBar({ query, setQuery, specialty, setSpecialty, location, setLocation, onSearch }) {
  const locations = ["All Locations","Banjara Hills","Jubilee Hills","Secunderabad","Gachibowli","Hi-Tech City","Madhapur","Kukatpally","Nampally","Punjagutta","Lakdikapul","Somajiguda"];

  return (
    <div style={{ maxWidth: 860, margin: "0 auto 4rem", padding: "0 4vw" }}>
      <div style={{
        display: "flex", alignItems: "center", gap: ".5rem",
        background: "var(--white)", borderRadius: "var(--pill)",
        padding: ".55rem .55rem .55rem 1.5rem",
        boxShadow: "0 4px 30px rgba(0,0,0,.09)",
        border: "1.5px solid rgba(93,202,165,.2)",
        flexWrap: "wrap",
      }}>
        <span style={{ fontSize: "1.1rem" }}>🔍</span>
        <input
          type="text"
          placeholder="Search doctor name, condition..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === "Enter" && onSearch()}
          style={{
            flex: 1, minWidth: 160, border: "none", outline: "none",
            background: "transparent", fontFamily: "inherit",
            fontSize: ".95rem", color: "var(--ink)",
          }}
        />
        <div style={{ width: 1, height: 24, background: "rgba(0,0,0,.1)" }} />
        <select value={specialty} onChange={e => setSpecialty(e.target.value)} style={{
          border: "none", outline: "none", background: "transparent",
          fontFamily: "inherit", fontSize: ".9rem", color: "var(--ink-soft)",
          padding: "0 .5rem", cursor: "pointer",
        }}>
          <option value="">All Specialties</option>
          {SPECIALTIES.map(s => (
            <option key={s.id} value={s.id}>{s.label}</option>
          ))}
        </select>
        <div style={{ width: 1, height: 24, background: "rgba(0,0,0,.1)" }} />
        <select value={location} onChange={e => setLocation(e.target.value)} style={{
          border: "none", outline: "none", background: "transparent",
          fontFamily: "inherit", fontSize: ".9rem", color: "var(--ink-soft)",
          padding: "0 .5rem", cursor: "pointer",
        }}>
          {locations.map(l => <option key={l}>{l}</option>)}
        </select>
        <button onClick={onSearch} style={{
          background: "var(--mint-deep)", color: "#fff", border: "none",
          borderRadius: "var(--pill)", padding: ".65rem 1.6rem",
          fontSize: ".9rem", fontWeight: 500, cursor: "pointer",
          whiteSpace: "nowrap",
        }}>Find Doctors</button>
      </div>
    </div>
  );
}