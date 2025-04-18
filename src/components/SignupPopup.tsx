import React from "react";
import "./SignupPopup.css";
import THLogo from "../assets/TH-Scribes-Logo.png"; // Import the logo

interface SignupPopupProps {
  onClose: () => void;
}

const SignupPopup: React.FC<SignupPopupProps> = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <img src={THLogo} alt="Logo" className="popup-logo" />
        <h2>Create an Account</h2>
        <input type="text" placeholder="Full Name" className="popup-input" />
        <input type="email" placeholder="Email" className="popup-input" />
        <input type="password" placeholder="Create Password" className="popup-input" />
        <input type="number" placeholder="Year of Birth" className="popup-input" />
        <div className="popup-buttons">
          <button className="popup-button">Signup</button>
          <button className="popup-close" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;