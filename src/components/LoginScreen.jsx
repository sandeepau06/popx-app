import { useState } from "react";
// Import reusable design tokens to maintain consistent UI styling
import {
  phoneShell, textDark, textGray, purple,
  inputWrap, floatingLabel, inputStyle, btnPrimary,
} from "../styles/tokens";

/**
 * LoginScreen Component
 * * Renders the login interface for the PopX application.
 * Manages user input for email and password, and conditionally enables
 * the submission button only when both fields contain data.
 *
 * @param {Object} props - Component props
 * @param {Function} props.navigate - Navigation function to switch screens
 */
export default function LoginScreen({ navigate }) {
  // Local state for capturing user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Derived state: determines if the login button should be active.
  // In a real application, you might add more robust validation (e.g., regex for email) here.
  const canLogin = email.length > 0 && password.length > 0;

  return (
    // Outer Container: Simulates a phone screen layout
    <div style={phoneShell}>
      
      {/* Inner Padding Container */}
      <div style={{ padding: "36px 24px 24px" }}>
        
        {/* Header Section: Title and Subtitle */}
        <h1 style={{ fontSize: 26, fontWeight: 800, color: textDark, lineHeight: 1.25, margin: "0 0 10px" }}>
          Signin to your<br />PopX account
        </h1>
        <p style={{ color: textGray, fontSize: 15, lineHeight: 1.5, margin: "0 0 28px" }}>
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        {/* Email Input Field */}
        <div style={inputWrap}>
          <span style={floatingLabel}>Email Address</span>
          <input
            style={inputStyle}
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updates email state on every keystroke
            type="email"
          />
        </div>

        {/* Password Input Field */}
        <div style={inputWrap}>
          <span style={floatingLabel}>Password</span>
          <input
            style={inputStyle}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Updates password state on every keystroke
            type="password"
          />
        </div>

        {/* Submit Button */}
        <button
          style={{
            ...btnPrimary,
            // Conditionally change background color and cursor based on input validity
            background: canLogin ? purple : "#C0C0C0",
            cursor: canLogin ? "pointer" : "default",
            marginTop: 8,
          }}
          // Only trigger navigation if the validation passes
          onClick={() => canLogin && navigate("settings")}
        >
          Login
        </button>
      </div>
    </div>
  );
}