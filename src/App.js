// src/App.js
import React, { useState, useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Splash         from "./Splash";
import ReadMore       from "./ReadMore";
import Carousel       from "./Carousel";
import GetBuilding    from "./GetBuilding";
import Thanks         from "./Thanks";
import WeatherWidget  from "./WeatherWidget";
import ToolMarquee    from "./ToolMarquee";

import "./App.css";

/* ---------- Landing-page body ---------- */
function Home({ items }) {
  const [pkgRevealed, setPkgRevealed] = useState(false);
  const pkgRef = useRef(null);

  const handleSeeMore = () => {
    setPkgRevealed(true);
    const el = pkgRef.current;
    if (!el) return;

    const onEnd = (e) => {
      if (e.propertyName !== "margin-top") return;
      el.removeEventListener("transitionend", onEnd);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const fallback = setTimeout(() => {
      el.removeEventListener("transitionend", onEnd);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 450);

    el.addEventListener(
      "transitionend",
      (e) => {
        clearTimeout(fallback);
        onEnd(e);
      },
      { once: true }
    );
  };

  return (
    <main className="container" role="main" id="main">
      {/* ===== Hero ===== */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="two-column">
          {/* ----- Left column ----- */}
          <div className="text-column">
            <h1 className="hero-title">
              <span className="always">Your Partner in</span>{" "}
              <br className="break-desktop" />
              <span className="fade word"  style={{ "--d": "0" }}>Tech</span>
              <span className="fade punct comma" style={{ "--d": "1" }}>,</span>
              <span className="fade word"  style={{ "--d": "2" }}>&nbsp;Marketing</span>
              <span className="fade punct comma" style={{ "--d": "3" }}>,</span>
              <span className="fade amp"   style={{ "--d": "4" }}>&nbsp;&amp;&nbsp;</span>
              <span className="fade word"  style={{ "--d": "5" }}>Growth</span>
            </h1>

            <p className="subheading">
              Get found. Win customers.<br className="break-mobile" /> See the numbers that matter.
            </p>

            <ReadMore>
              <p>
                I help businesses grow with the right mix of websites, martech, paid media, and analytics. From your technology stack to strategy, I set it up, make it work, and scale it with you.
              </p>
              <p>
                Most businesses struggle with the same things: agencies that overpromise, dashboards nobody checks, and strategies that never connect to results. That's where I come in.
              </p>
              <p>You own the accounts. You see the numbers. You keep the control.</p>
              <p>Transparent. Efficient. Builf for growth, not bloat.</p>
            </ReadMore>

            <div className="signature" aria-hidden>
              <img src="/borkenburg_mark.png" alt="" className="logo-icon" />
            </div>
          </div>

          {/* ----- Right column ----- */}
          <div className="carousel-column">
            <Carousel items={items} />

            {/* 👇 NEW: tools marquee aligned with the carousel on the right */}
            <ToolMarquee speed={26} />
          </div>
        </div>
      </section>

      {/* ===== See More (button lives in white space) ===== */}
      <div className="see-more-wrapper">
        <button
          type="button"
          className="see-more-btn"
          onClick={handleSeeMore}
          aria-controls="packages"
        >
          ↓ See What's Next
        </button>
      </div>

      {/* ===== Packages ===== */}
      <section
        id="packages"
        ref={pkgRef}
        className={`packages ${pkgRevealed ? "revealed" : ""}`}
        aria-labelledby="packages-title"
      >
        <h2 className="packages-title">
          Growth That's Measured, Focused, and Built to Last.
        </h2>
        <p className="packages-subheading">
          Start Smart. Build Momentum. Scale Without Waste.
        </p>

        <div className="package-grid">
          <div className="package-card">
            <div className="package-number">1</div>
            <h3>Start Smart</h3>
            <p className="subtitle">You can't fix what you can't measure.</p>
            <ul>
              <li>Audit: tracking, analytics, website, ads</li>
              <li>Config: measurement &amp; growth tools</li>
              <li>Strategise: a growth plan that works</li>
            </ul>
            <a href="#cta" className="btn">Start</a>
          </div>

          <div className="package-card">
            <div className="package-number">2</div>
            <h3>Build Momentum</h3>
            <p className="subtitle">Launch. Analyse. Integrate.</p>
            <ul>
              <li>Build: campaigns with clean tracking</li>
              <li>Analyse: every click is measured</li>
              <li>Integrate: new tools for automation</li>
            </ul>
            <a href="#cta" className="btn">Build</a>
          </div>

          <div className="package-card">
            <div className="package-number">3</div>
            <h3>Scale Without Waste</h3>
            <p className="subtitle">Customise. Advance. Expand.</p>
            <ul>
              <li>Code: customise for user experience</li>
              <li>Advance: tracking &amp; dashboards</li>
              <li>Expand: new channels &amp; audiences</li>
            </ul>
            <a href="#cta" className="btn">Scale</a>
          </div>
        </div>
      </section>

      {/* ===== Consultancy pitch ===== */}
      <section id="why" className="section" aria-labelledby="why-title">
        <h2 id="why-title">Tech, Made Simple</h2>
        <p className="p-wide">
         Most businesses don't speak in acronyms - and they shouldn't have to. CRM, CRO, CDP, BI...it can sound like alphabet soup. At the end of the day, it all comes down to the same thing: finding customers, keeping them, and growing smarter. I offer hands-on consulting to cut through the complexity, translate the tech into plain English, and deliver solutions you can actually use. Whether it's configuring a database, setting up and optimising your CRM, fixing analytics and tracking, building a website or tech stack, or connecting your POS to your online store - I make it work. Fast, practical, no jargon.
        </p>
      </section>

      {/* ===== Why Work With Me ===== */}
      <section id="why-2" className="section" aria-labelledby="why-2-title">
        <h2 id="why-2-title">Work With Me</h2>
        <p className="p-wide">
          I bring years of experience designing and running large-scale enterprise systems, managing multi-channel strategies, and building integrations that keep businesses moving. That background gives me a deep understanding of how technology, data, and marketing connect to deliver real results. Today, I bring that expertise directly to businesses of all sizes - helping them solve problems, build reliable systems, and scale with confidence. What you get is a partner that's hands-on, detail-oriented, and commited to making your operations smarter, leaner, and future-ready.
        </p>

        <div className="three-cards">
          <div className="card">
            <p className="card-kicker">FAST &amp; FLEXIBLE</p>
            <p>Lean setups, rapid testing, and quick pivots that keep you moving forward.</p>
          </div>

          <div className="card">
            <p className="card-kicker">Fluent in Complexity</p>
            <p>
              From enterprise martech stacks to high-volume campaigns, I make the complicated simple.
            </p>
          </div>

          <div className="card">
            <p className="card-kicker">Obsessed With Results</p>
            <p>If you're not converting, there's a reason — and I'll find it.</p>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section id="cta" className="section cta-band" aria-labelledby="cta-title">
        <h2 id="cta-title">Ready to grow?</h2>
        <p>Book a free 30-minute growth chat.</p>
        <div className="hero-ctas cta-actions">
          <Link to="/build" className="cta primary">Book a Call</Link>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const location = useLocation();
  const onBuildPage = location.pathname === "/build";
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onFinish={() => setShowSplash(false)} />;
  }

  const carouselItems = [
    { kicker: "Strategy & Roadmaps", title: "Roadmaps That Deliver", subtitle: "Clear plans. You always know where your money is going and why." },
    { kicker: "Experience & CRO",    title: "Journeys Without Friction",   subtitle: "Websites that turn visitors into customers, without confusion or wasted clicks." },
    { kicker: "Data & Tracking",     title: "Tracking That Doesn't Miss",  subtitle: "You own the data. I set it up so nothing gets missed." },
    { kicker: "Martech Stack",       title: "Stacks That Just Work",       subtitle: "Tools that actually work together, no duct tape fixes." },
    { kicker: "Ads & SEO",           title: "Traffic That Converts",       subtitle: "Get found by the right people, without burning money on the wrong clicks." },
    { kicker: "Insights & BI",       title: "Answers, Instantly",    subtitle: "One simple dashboard. The numbers you need, none you don't." },
    { kicker: "Web Development",     title: "Web, Done Right",             subtitle: "Sites built to last, whether it's Shopify, WordPress, Squarespace, or something custom." }
  ];

  const linkLabel  = onBuildPage ? "← Back home" : "Build What's Next";
  const linkTarget = onBuildPage ? "/" : "/build";

  return (
    <div className="App">
      <header className="top-bar" role="banner">
        <div className="top-bar-left">
          <a href="#main" className="skip">Skip to content</a>
          <Link to="/" className="logo" aria-label="Back to home">
            <img src="/icon.png" alt="" className="logo-icon" />
            <div className="logo-text">
              <span className="logo-title">Borkenburg</span>
              <span className="logo-subtitle">
                Built for What's <span className="logo-break">Next.</span>
              </span>
            </div>
          </Link>
        </div>

        <div className="top-bar-right">
          <Link to={linkTarget} className="nav-link">
            {linkLabel}
          </Link>
        </div>
      </header>

      <Routes>
        <Route path="/"      element={<Home items={carouselItems} />} />
        <Route path="/build" element={<GetBuilding />} />
        <Route path="/thanks" element={<thanks />} />
      </Routes>

      <WeatherWidget />

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} Borkenburg</small>
      </footer>
    </div>
  );
}
