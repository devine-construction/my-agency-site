// src/ToolMarquee.jsx
import React from "react";
import "./App.css";

const tools = [
    { src: "/google-ads.png", alt: "Google Ads" },
    { src: "/meta.svg",       alt: "Meta" },
    { src: "/hubspot.png",    alt: "HubSpot" },
    { src: "/react.png",  alt: "React" },
    { src: "/salesforce.png", alt: "Salesforce" },
    { src: "/klavio.png",    alt: "Klaviyo" },
    { src: "/dato.png",    alt: "DatoCMS" },
    { src: "/mailchimp.png",  alt: "Mailchimp" },
    { src: "/ganalytics.png",  alt: "Google Analytics" },
    { src: "/tagmanager.png",  alt: "Google Tag Manager" },
    { src: "/powerbi.png",  alt: "Power Bi" },
    { src: "/oracle1.png",  alt: "Oracle" },
  ];

export default function ToolMarquee({ speed = 28 }) {
  // the speed prop controls duration in seconds
  return (
    <div
      className="tool-marquee"
      style={{ "--marquee-duration": `${speed}s` }}
      aria-label="Tools I use"
    >
      <div className="tool-track">
        {tools.map((t, i) => (
          <div className="tool-item" key={`a-${i}`}>
            <img className="tool-icon" src={t.src} alt={t.alt} />
          </div>
        ))}
        {/* duplicate row for seamless loop */}
        {tools.map((t, i) => (
          <div className="tool-item" key={`b-${i}`} aria-hidden="true">
            <img className="tool-icon" src={t.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
