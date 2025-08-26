// src/components/WeatherWidget.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WeatherWidget.css";

const API_KEY = "16588dfdefdadd17dfe85660e2628d34";     // ← your OpenWeather key

/* ------------- helper: turn “build / building” into links ------------- */
function linkify(text) {
  return text.split(/(\bbuild(?:ing)?\b)/i).map((part, idx) =>
    /\bbuild(?:ing)?\b/i.test(part) ? (
      <Link key={idx} to="/build" className="wx-link">
        {part}
      </Link>
    ) : (
      part
    )
  );
}

/* ------------- cheeky blurbs by weather group ------------- */
const messageByIcon = {
  Thunderstorm: "Stormy skies – stay safe, stay in, and Get Building with us!",
  Drizzle:      "Not great out – stay in and Get Building with us!",
  Rain:         "Don't get wet – stay cozy and Get Building with us.",
  Snow:         "Snowed in – Get Building with us.",
  Clear:        "Get Building and then go outside.",
  Clouds:       "0% chance of sunburn, Get Building then go outside.",
  Mist:         "Too misty to see? Stay in and Get Building with us.",
  Smoke:        "Too smokey to see? Stay in and Get Building with us.",
  Haze:         "Too hazey to see? Stay in and Get Building with us.",
  Dust:         "Too dusty to see? Stay in and Get Building with us.",
  Fog:          "Too foggy to see? Stay in and Get Building with us.",
  Sand:         "Sandy breeze – stay in and Get Building with us",
  Ash:          "Ash in the air – Get Building from indoors.",
  Squall:       "Blustery squall – anchor down, Get Building.",
  Tornado:      "Tornado watch – spin up ideas, Get Building."
};

export default function WeatherWidget() {
  const [data,   setData]   = useState(null);
  const [status, setStatus] = useState("loading"); // loading • ready • error

  useEffect(() => {
    /* 1️⃣  Get rough coords and city via IP (silent) */
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then(({ latitude, longitude, city, region, country_name }) => {
        if (!latitude || !longitude) throw new Error("No coords");

        const locationString = [city, region || country_name]
          .filter(Boolean)
          .join(", ");

        /* 2️⃣  Fetch weather from OpenWeather */
        return fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        )
          .then((w) => w.json())
          .then((weather) => {
            if (!weather || !weather.weather) throw new Error("Bad payload");
            weather.location = locationString;   // attach location
            return weather;
          });
      })
      .then((weather) => {
        setData(weather);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  /* ---------- UI states ---------- */
  if (status === "loading") {
    return <aside className="wx-card wx-loading">Loading weather…</aside>;
  }

  if (status === "error" || !data) {
    return (
      <aside className="wx-card wx-error">
        Weather unavailable — but it’s always a good day to get building!
      </aside>
    );
  }

  /* ---------- success ---------- */
  const { main, description } = data.weather[0];
  const temp  = Math.round(data.main.temp);

  const blurb =
    temp < 10
      ? "Cool outside – stay in and Get Building with us."
      : messageByIcon[main] || "Let’s build something today!";

  const locationLabel = data.location ? ` · ${data.location}` : "";

  return (
    <aside className="wx-card" aria-label="local weather">
      <div className="wx-main">
        {temp}°C&nbsp;·&nbsp;{description}
        {locationLabel}
      </div>
      <p className="wx-blurb">{linkify(blurb)}</p>
    </aside>
  );
}
