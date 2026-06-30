import { useState } from "react";
// Import reusable design tokens for consistent styling
import {
  phoneShell, textDark, borderColor, purple,
  inputWrap, floatingLabel, inputStyle, btnPrimary,
} from "../styles/tokens";

/**
 * Configuration array for text input fields.
 * Defining this outside the component keeps the render function clean
 * and allows for easy addition/modification of form fields.
 */
const FIELDS = [
  { key: "name",     label: "Full Name",       required: true,  placeholder: "Enter your name" },
  { key: "phone",    label: "Phone number",    required: true,  placeholder: "Enter phone number" },
  { key: "email",    label: "Email address",   required: true,  placeholder: "Enter email address" },
  { key: "password", label: "Password",        required: true,  placeholder: "Enter password", type: "password" },
  { key: "company",  label: "Company name",    required: false, placeholder: "Enter company name" },
];

/**
 * RegisterScreen Component
 * * Renders the account creation form for the PopX application.
 * Handles state for user inputs including text fields and a custom radio button group.
 *
 * @param {Object} props - Component props
 * @param {Function} props.navigate - Navigation function to switch screens
 */
export default function RegisterScreen({ navigate }) {
  // Initialize form state. (Note: Pre-filled with dummy data for demonstration)
  const [form, setForm] = useState({
    name: "Marry Doe",
    phone: "Marry Doe",
    email: "Marry Doe",
    password: "Marry Doe",
    company: "Marry Doe",
    agency: "yes", // Default selection for the radio button
  });

  /**
   * Curried helper function to update specific fields in the form state.
   * Usage: onChange={set('fieldName')}
   * * @param {string} key - The key in the form state object to update
   * @returns {Function} - The actual onChange event handler
   */
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    // Outer Container: Simulates a phone screen layout
    <div style={phoneShell}>
      
      {/* Scrollable Form Container: Allows scrolling if content exceeds screen height */}
      <div style={{ padding: "36px 24px 24px", overflowY: "auto", flex: 1, display: "flex", flexDirection: "column" }}>
        
        {/* Screen Title */}
        <h1 style={{ fontSize: 26, fontWeight: 800, color: textDark, lineHeight: 1.25, margin: "0 0 28px" }}>
          Create your<br />PopX account
        </h1>

        {/* Dynamic Input Generation: Maps over the FIELDS config to create text inputs */}
        {FIELDS.map((f) => (
          <div key={f.key} style={inputWrap}>
            {/* Floating label that indicates if a field is required */}
            <span style={floatingLabel}>
              {f.label}
              {f.required && <span style={{ color: "red" }}>*</span>}
            </span>
            <input
              style={inputStyle}
              type={f.type || "text"}
              placeholder={f.placeholder}
              value={form[f.key]}
              onChange={set(f.key)} // Uses the helper function to update state
            />
          </div>
        ))}

        {/* Radio Button Group Section */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 14, color: textDark, marginBottom: 10 }}>
            Are you an Agency?<span style={{ color: "red" }}>*</span>
          </p>
          
          {/* Container for the Yes/No options */}
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {["yes", "no"].map((val) => (
              <label key={val} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 15 }}>
                
                {/* Custom Styled Radio Button UI */}
                <span style={{
                  width: 22, height: 22, borderRadius: "50%",
                  border: `2px solid ${form.agency === val ? purple : borderColor}`, // Highlight border if selected
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "#fff",
                }}>
                  {/* Inner dot that appears when the option is selected */}
                  {form.agency === val && (
                    <span style={{ width: 12, height: 12, borderRadius: "50%", background: purple, display: "block" }} />
                  )}
                </span>
                
                {/* Hidden native radio input to maintain accessibility and semantic HTML */}
                <input
                  type="radio"
                  style={{ display: "none" }}
                  value={val}
                  checked={form.agency === val}
                  onChange={() => setForm({ ...form, agency: val })}
                />
                
                {/* Label text capitalized */}
                {val === "yes" ? "Yes" : "No"}
              </label>
            ))}
          </div>
        </div>

        {/* Flexible spacer to push the submit button to the bottom of the form */}
        <div style={{ flex: 1 }} />
        
        {/* Primary Action Button: Submits the form (currently just navigates to 'settings') */}
        <button style={btnPrimary} onClick={() => navigate("settings")}>
          Create Account
        </button>
      </div>
    </div>
  );
}