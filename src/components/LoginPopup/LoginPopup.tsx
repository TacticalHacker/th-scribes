import type React from 'react';
import './LoginPopup.css';
import { ThScribesLogo } from '@assets/index.js'; // Import the logo

interface LoginPopupProps {
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <img src={ThScribesLogo} alt="Logo" className="popup-logo" />
        <h2>Login</h2>
        <input type="email" placeholder="Email" className="popup-input" />
        <input type="password" placeholder="Password" className="popup-input" />
        <div className="popup-buttons">
          <button className="popup-button" type="button">
            Login
          </button>
          <button className="popup-close" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
