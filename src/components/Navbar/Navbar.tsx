import React from "react";
import "./Navbar.css";
import THLogo from "../../assets/TH-Scribes-Logo.png"; // Import the logo

interface NavbarProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onSignupClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <img src={THLogo} alt="Logo" className="navbar-logo" />
          <h1 className="navbar-title">Tactical Hacker Scribes</h1>
        </div>
        <div className="navbar-links">
          <button onClick={onLoginClick} className="navbar-button">
            Login
          </button>
          <button onClick={onSignupClick} className="navbar-button">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;