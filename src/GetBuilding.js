// src/GetBuilding.js
import React, { useState } from "react";
import "./GetBuilding.css";

function GetBuilding() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard
      .writeText("hello@borkenburg.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        window.location = "mailto:hello@borkenburg.com";
      });
  };

  return (
    <main className="build-page">
      <h1>Let’s Get Building</h1>
      <p>
        Let me know your current challenges and goals. I'll reply within one
        business day with tailored next steps or an invite to book a call.
      </p>

      {/* -------- Netlify form -------- */}
      <form
        name="build-contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/form-thanks" // or remove to stay on /build
        className="build-form"
      >
        {/* required by Netlify */}
        <input type="hidden" name="form-name" value="build-contact" />

        {/* spam trap (hidden) */}
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        {/* VISIBLE FIELDS */}
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

        <button type="submit" className="cta primary">Get Building</button>
      </form>

      {/* -------- alternate contact -------- */}
      <p className="alt-contact">
        Prefer email?&nbsp;
        <a
          href="mailto:hi@borkenburg.com"
          className="mail-link"
          onClick={handleCopy}
          aria-label="Copy email address to clipboard"
        >
          hi@borkenburg.com
        </a>
        {copied && <span className="copied-tip"> — Copied</span>}
      </p>
    </main>
  );
}

export default GetBuilding;  // <-- THIS is the fix!
