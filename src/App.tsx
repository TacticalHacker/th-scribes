import type React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import LoginPopup from './components/LoginPopup/LoginPopup';
import SignupPopup from './components/SignupPopup/SignupPopup';
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="app">
      <Navbar onLoginClick={() => setShowLogin(true)} onSignupClick={() => setShowSignup(true)} />
      <LandingPage />
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
      {showSignup && <SignupPopup onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default App;
