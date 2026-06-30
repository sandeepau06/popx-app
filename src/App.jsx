import { useState } from "react";
// Import all the individual screen components that make up the application flow
import WelcomeScreen  from "./components/WelcomeScreen";
import LoginScreen    from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import SettingsScreen from "./components/SettingsScreen";

/**
 * Main App Component
 * * Serves as the root component and handles simple state-based client-side routing.
 * It manages which screen is currently visible to the user and provides a centralized
 * layout container (the "background" behind the phone shell) for the entire application.
 */
export default function App() {
  // State to track the active screen. Defaults to the "welcome" landing page.
  const [screen, setScreen] = useState("welcome");

  // Dictionary mapping string keys to their respective React components.
  // We pass the state setter (`setScreen`) as a `Maps` prop to allow child 
  // components to easily trigger screen transitions.
  const screens = {
    welcome:  <WelcomeScreen  navigate={setScreen} />,
    login:    <LoginScreen    navigate={setScreen} />,
    register: <RegisterScreen navigate={setScreen} />,
    settings: <SettingsScreen navigate={setScreen} />,
  };

  return (
    // Global App Container: Centers the phone UI on the screen and sets the default typography
    <div style={{
      minHeight: "100vh",      // Ensures the container covers the full viewport height
      background: "#E8EAF0",   // Neutral background color outside the phone shell
      display: "flex",
      alignItems: "center",    // Vertically centers the phone shell
      justifyContent: "center",// Horizontally centers the phone shell
      padding: 24,             // Prevents the phone shell from touching the window edges on small screens
      fontFamily: "'Inter', 'Segoe UI', sans-serif", // Sets the global font family inherited by all child components
    }}>
      
      {/* Dynamically render the active screen. 
        It looks up the current `screen` state string in the `screens` dictionary 
        and renders the corresponding component.
      */}
      {screens[screen]}
      
    </div>
  );
}