import React from "react";
import "./LandingPage.css";
import THLogo from "../assets/TH-Logo.png"; // Import the logo

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <img src={THLogo} alt="Landing Logo" className="landing-image" />
      <h2>Welcome to Tactical Hacker Scribes</h2>
      <p>
      Empowering writers and creators with seamless onboarding, secure digital contracts, and a streamlined collaboration experience — all in one place.
      </p>
    </div>
  );
};

export default LandingPage;