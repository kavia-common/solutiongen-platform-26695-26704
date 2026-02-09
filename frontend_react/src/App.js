import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import OnboardingInputPage from "./pages/OnboardingInputPage";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  /**
   * App shell: routes to onboarding flow pages.
   * Default route is onboarding step 1 (Input).
   */
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OnboardingInputPage />} />
        <Route path="/onboarding/input" element={<OnboardingInputPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
