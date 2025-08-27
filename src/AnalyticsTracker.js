// src/AnalyticsTracker.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-FH4E8VJSBP";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    // Tell GA4 the “current page” in SPA
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
      send_page_view: false, // we’ll send page_view explicitly
    });

    // Explicit page_view event – shows up nicely in Realtime/DebugView
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location]);

  return null;
}
