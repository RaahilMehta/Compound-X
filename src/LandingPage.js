import React from 'react';
import './LandingPage.css';
import logo from './assets/Logo.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src={logo} alt="CompoundX Logo" className="logo" />
      <h1 className="main-slogan">
    Unlock Flexibility with Perpetual Contracts—No Trade Too Small, No Limits Too Big.
      </h1>
      <h2 className="secondary-slogan">
        <span className="highlight">Democratize</span> the trading of contracts
      </h2>
      <button className="launch-button">Launch</button>
    </div>
  );
};

export default LandingPage;
