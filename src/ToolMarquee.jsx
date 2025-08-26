import React from "react";
import "./App.css"; // or your own css file where you put the styles below

export default function ToolMarquee({ speed = 26 }) {
  // Put the SVG/PNG files in /public (domain root) and reference with leading slash:
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

  // inline custom property for speed (pixels/second)
  const duration = `${Math.max(10, 400 / speed)}s`;

  return (
    <div className="tool-marquee" aria-label="Tools I use">
      <div className="tool-track" style={{ "--marquee-duration": duration }}>
        {[...tools, ...tools].map((t, idx) => (
          <div className="tool-item" key={`${t.src}-${idx}`}>
            <img
              className="tool-icon"
              src={t.src}
              alt={t.alt}
              width={48}
              height={48}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
