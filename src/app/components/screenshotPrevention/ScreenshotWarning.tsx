"use client";

import { useEffect, useState } from "react";

export default function ScreenshotWarning() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show popup when "P" is pressed (case-insensitive)
      if (e.key.toLowerCase() === "p") {
        setShowPopup(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [showPopup]);

  return showPopup ? (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg z-50">
      ! Screenshot action detected ! Not Allowed
    </div>
  ) : null;
}
