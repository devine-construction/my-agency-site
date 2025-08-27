import React from "react";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <main className="container" role="main" id="main">
      <section className="section cta-band" aria-labelledby="thanks-title">
        <h1 id="thanks-title" style={{ marginBottom: ".25rem" }}>
          Thanks — got it!
        </h1>
        <p style={{ color: "#555", marginTop: 0 }}>
          I’ll reply within one business day with next steps.
        </p>

        <div className="hero-ctas cta-actions" style={{ marginTop: "1rem" }}>
          <Link to="/" className="cta primary">← Back to home</Link>
          <Link to="/build" className="cta tertiary">Send another message</Link>
        </div>
      </section>
    </main>
  );
}
