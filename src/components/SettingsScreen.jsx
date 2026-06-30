/**
 * SettingsScreen.jsx
 *
 * Displays the logged-in user's account info:
 *   - Profile photo with click-to-upload functionality (via hidden file input)
 *   - Name and email
 *   - A short bio / description block
 *   - A "Back to Home" button that returns to WelcomeScreen
 *
 * Props:
 *   navigate(screenName: string) — switches the active screen in App.jsx
 */

import { useState, useRef } from "react";
import {
  phoneShell, textDark, textGray, borderColor, purple, btnSecondary,
} from "../styles/tokens";
import defaultProfilePic from "../img/avatar.png";

export default function SettingsScreen({ navigate }) {
  // Holds the currently displayed profile picture.
  // Starts out pointing at the default placeholder photo on disk.
  const [profilePic, setProfilePic] = useState(defaultProfilePic);

  // Ref used to programmatically trigger the hidden <input type="file">
  // when the user clicks the camera badge (since native file inputs are ugly by default)
  const fileInputRef = useRef(null);

  // Runs when the user picks a file from their device.
  // Converts the chosen File into a temporary blob URL so it can be
  // previewed immediately without uploading it anywhere.
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  return (
    // Blue border here is just a visual debug/preview aid — remove if not needed
    <div style={{ ...phoneShell, border: "2px solid #4A90E2" }}>

      {/* ── Header bar ───────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid #E0E0E0", padding: "20px 20px", background: "#fff" }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: textDark, margin: 0 }}>Account Settings</h2>
      </div>

      {/* ── Profile card ─────────────────────────────────────── */}
      <div style={{ background: "#fff", padding: "20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>

          {/* Avatar + camera badge wrapper */}
          <div style={{ position: "relative", flexShrink: 0 }}>

            {/* Circular profile photo */}
            <div style={{ width: 70, height: 70, borderRadius: "50%", overflow: "hidden", background: "#ddd" }}>

              {/* Show the uploaded/default photo if we have one, otherwise fall back to a drawn SVG avatar */}
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="35" r="35" fill="#C9A98A"/>
                  <ellipse cx="35" cy="28" rx="14" ry="15" fill="#8B5E3C"/>
                  <ellipse cx="35" cy="65" rx="22" ry="18" fill="#8B5E3C"/>
                  <ellipse cx="35" cy="26" rx="12" ry="13" fill="#F5C9A0"/>
                  <path d="M22 26 Q35 14 48 26" fill="#3D2B1F"/>
                  <path d="M18 25 Q35 10 52 25" fill="none" stroke="#3D2B1F" strokeWidth="3"/>
                </svg>
              )}
            </div>

            {/* Hidden native file picker — triggered by clicking the camera badge below.
                Kept invisible (display:none) since we render our own custom trigger UI. */}
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            {/* Camera badge — sits on bottom-right of the avatar.
                Clicking it programmatically opens the hidden file input above. */}
            <div
              style={{
                position: "absolute", bottom: 0, right: 0,
                width: 24, height: 24, borderRadius: "50%",
                background: purple, display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => fileInputRef.current.click()}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
                  stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="13" r="4" stroke="#fff" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Name / email block */}
          <div>
            <p style={{ fontWeight: 700, fontSize: 16, color: textDark, margin: "0 0 4px" }}>Marry Doe</p>
            <p style={{ color: textGray, fontSize: 14, margin: 0 }}>Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Bio / description text, separated by a dashed divider */}
        <div style={{ borderTop: "1px dashed #D0D0D0", paddingTop: 16 }}>
          <p style={{ color: textDark, fontSize: 14, lineHeight: 1.6, margin: 0 }}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
            Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>

      {/* Spacer that pushes the back button to the bottom of the screen */}
      <div style={{ flex: 1, borderBottom: "1px dashed #D0D0D0" }} />

      {/* ── Back button ──────────────────────────────────────── */}
      <div style={{ padding: "16px 24px" }}>
        <button
          style={{ ...btnSecondary, marginTop: 0, background: "transparent", border: `1.5px solid ${borderColor}`, color: textGray }}
          onClick={() => navigate("welcome")}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}