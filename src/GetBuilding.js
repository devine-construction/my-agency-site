// src/GetBuilding.js
import React, { useState } from "react";
import "./GetBuilding.css";

export default function GetBuilding() {
  /* --- clipboard feedback state --- */
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();                              // stop mailto navigation
    navigator.clipboard
      .writeText("hello@borkenburg.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);    // hide after 2 s
      })
      .catch(() => {
        // Fallback: open mail client if copy fails
        window.location = "mailto:hello@borkenburg.com";
      });
  };

  return (
    <main className="build-page">
      <h1>Let’s Get Building</h1>
      <p>
        Let me know your current challenges and goals. I'll reply within one business day with tailored next steps or an invite to book a call.
      </p>

      {/* -------- Netlify form -------- */}
      <form
        name="build-contact"
        method="POST"
        data-netlify="true"
        className="build-form"
      >
        <input type="hidden" name="form-name" value="build-contact" />

        <label>
          Your name
          <input type="text" name="name" required />
        </label>

        <label>
          Company / project
          <input type="text" name="company" />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          What are you looking to achieve?
          <textarea name="message" rows="5" required />
        </label>

        <button type="submit" className="cta primary">
          Get Building
        </button>
      </form>

      {/* -------- alternate contact -------- */}
      <p className="alt-contact">
        Prefer email?&nbsp;
        <a
          href="mailto:hello@borkenburg.com"
          className="mail-link"
          onClick={handleCopy}
          aria-label="Copy email address to clipboard"
        >
          hello@borkenburg.com
        </a>
        {copied && <span className="copied-tip"> — Copied</span>}
      </p>
    </main>
  );
}
