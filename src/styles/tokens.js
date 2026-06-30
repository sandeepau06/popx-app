/**
 * Design Tokens & Shared Styles
 * * This file serves as the single source of truth for the application's styling.
 * By centralizing colors and common layout objects, it ensures a consistent 
 * UI across different screens and makes future theme updates easier.
 */

// ─── Design tokens (Color Palette) ───────────────────────────────

export const purple = "#6C25FF";             // Primary brand color, used for main buttons and active states
export const purpleLight = "#C5B3FF";        // Lighter variant for secondary actions
export const purpleLabelColor = "#6C25FF";   // Specific alias for input labels to maintain semantic meaning
export const grayBg = "#F4F5F7";             // Default background color for application screens
export const textDark = "#1A1A2E";           // Primary text color for high contrast and readability (headings, main text)
export const textGray = "#888";              // Secondary text color for subtitles and less prominent information
export const borderColor = "#D0D0D0";        // Default color for input borders and dividers

// ─── Shared styles (Component Blueprints) ─────────────────────────

/**
 * Base layout container that simulates a mobile app screen.
 * Used as the root wrapper for the Welcome, Login, Register, and Settings screens.
 */
export const phoneShell = {
  width: 390,
  minHeight: 700,
  background: grayBg,
  borderRadius: 12,
  boxShadow: "0 8px 48px rgba(0,0,0,0.13)", // Adds a soft drop shadow to make the "phone" stand out on the page
  margin: "0 auto",                         // Centers the shell horizontally on wider screens
  position: "relative",
  overflow: "hidden",                       // Ensures inner scrolling content doesn't break the rounded corners
  display: "flex",
  flexDirection: "column",
};

/**
 * Wrapper for text inputs. 
 * Establishes a relative positioning context so the floating label can be anchored to it.
 */
export const inputWrap = {
  position: "relative",
  marginBottom: 16,
};

/**
 * Style for the label that "floats" on the top border of the input field.
 * Uses absolute positioning to sit precisely over the input's outline.
 */
export const floatingLabel = {
  position: "absolute",
  top: -10,             // Pulls the label up to intersect the input's top border
  left: 12,
  background: grayBg,   // Matches the screen background to mask the border line underneath the text
  padding: "0 4px",
  fontSize: 13,
  color: purpleLabelColor,
  fontWeight: 500,
  zIndex: 1,            // Ensures the label stays visually on top of the input border
};

/**
 * Standardized text input styling. 
 * Uses a transparent background to blend with the screen and inherits fonts.
 */
export const inputStyle = {
  width: "100%",
  border: `1.5px solid ${borderColor}`,
  borderRadius: 6,
  padding: "14px 14px 12px",
  fontSize: 15,
  color: textDark,
  background: "transparent",
  outline: "none",
  boxSizing: "border-box", // Ensures padding is included in the 100% width, preventing overflow
  fontFamily: "inherit",
};

/**
 * Primary Call-to-Action (CTA) button style.
 * Used for primary user paths like submitting a login or registration form.
 */
export const btnPrimary = {
  width: "100%",
  background: purple,
  color: "#fff",
  border: "none",
  borderRadius: 6,
  padding: "16px",
  fontSize: 16,
  fontWeight: 700,
  cursor: "pointer",
  letterSpacing: 0.3,
};

/**
 * Secondary Call-to-Action button style.
 * Used for alternative or secondary actions, like navigating to a different auth screen.
 */
export const btnSecondary = {
  width: "100%",
  background: purpleLight,
  color: textDark,
  border: "none",
  borderRadius: 6,
  padding: "16px",
  fontSize: 16,
  fontWeight: 700,
  cursor: "pointer",
  marginTop: 12,
};