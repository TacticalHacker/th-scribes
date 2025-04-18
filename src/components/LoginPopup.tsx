import React from "react";
import "./LoginPopup.css";
import THLogo from "../assets/TH-Scribes-Logo.png"; // Import the logo

interface LoginPopupProps {
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <img src={THLogo} alt="Logo" className="popup-logo" />
        <h2>Login</h2>
        <input type="email" placeholder="Email" className="popup-input" />
        <input type="password" placeholder="Password" className="popup-input" />
        <div className="popup-buttons">
          <button className="popup-button">Login</button>
          <button className="popup-close" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;