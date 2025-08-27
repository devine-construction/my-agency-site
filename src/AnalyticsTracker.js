// src/AnalyticsTracker.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-FH4E8VJSBP";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    const pagePath = location.pathname + location.search;

    // Update GA4 config
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
      send_page_view: false, // disable auto to avoid duplicate hits
    });

    // Fire a page_view explicitly
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: document.title,
      page_location: window.location.href,
    });

    // ---- Engagement ping: mark user as "active" after 10s ----
    const sendEngagement = () => {
      if (document.visibilityState === "visible") {
        window.gtag("event", "user_engagement", {
          engagement_time_msec: 10000, // tell GA it's a 10s engagement
        });
      }
    };

    const engagementTimer = setTimeout(sendEngagement, 10000);

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        clearTimeout(engagementTimer);
        setTimeout(sendEngagement, 10000);
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      clearTimeout(engagementTimer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [location]);

  return null;
}
