import React from 'react';

import customHeaderCSS from './../css/ComponentsStyles/customHeader.css';
import reactLogo from './../css/img/react-logo.png';
import bootstrapLogo from './../css/img/bootstrap-logo.png';
export const Header = () => {
  return (
    <header>
      <h1 className="header__h1 text-center">Camper Leaderboard</h1>
      <div className="div--logo">
        <a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer"><img src={reactLogo} className="img--technologylogo img--technologylogo--reactlogo" alt="React Icon" /></a>
        <a href="https://v4-alpha.getbootstrap.com/" target="_blank" rel="noopener noreferrer"><img src={bootstrapLogo} className="img--technologylogo img--technologylogo--bootstraplogo" alt="Bootstrap Icon" /></a>
      </div>
    </header>
  );
};