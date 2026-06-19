// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--ink)", color: "rgba(255,255,255,.6)",
      textAlign: "center", padding: "2.5rem 4vw", fontSize: ".85rem",
    }}>
      <p>Built with <strong style={{ color: "#fff" }}>React.js · Node.js · Express.js · REST APIs</strong> &nbsp;|&nbsp; MediBook © 2025</p>
      <p style={{ marginTop: ".5rem" }}>Your healthcare, your schedule.</p>
    </footer>
  );
}