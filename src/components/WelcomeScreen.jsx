// Import reusable styling tokens to maintain consistent design across the app
import { phoneShell, textDark, textGray, btnPrimary, btnSecondary } from "../styles/tokens";

/**
 * WelcomeScreen Component
 * 
 * Serves as the initial landing page of the application (PopX). 
 * Presents the user with options to either create a new account or log in.
 *
 * @param {Object} props - Component props
 * @param {Function} props.navigate - Function used to handle screen transitions
 */
export default function WelcomeScreen({ navigate }) {
  return (
    // Outer Container: Simulates a phone layout and pushes all content to the bottom
    <div style={{ ...phoneShell, justifyContent: "flex-end" }}>
      
      {/* Inner Container: Applies spacing (padding) around the text and buttons */}
      <div style={{ padding: "32px 24px 36px" }}>
        
        {/* Main Title */}
        <h1 style={{ fontSize: 28, fontWeight: 800, color: textDark, margin: "0 0 8px" }}>
          Welcome to PopX
        </h1>
        
        {/* Subtitle / Description */}
        <p style={{ color: textGray, fontSize: 15, lineHeight: 1.5, margin: "0 0 32px" }}>
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
        
        {/* Primary Action: Navigates to the registration screen */}
        <button style={btnPrimary} onClick={() => navigate("register")}>
          Create Account
        </button>
        
        {/* Secondary Action: Navigates to the login screen */}
        <button style={btnSecondary} onClick={() => navigate("login")}>
          Already Registered? Login
        </button>
        
      </div>
    </div>
  );
}