import React from 'react';
import logo from '../Images/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="menu-section">
        <img 
          src={logo} 
          alt="GameBase Logo" 
          className="logo"
        />
      </div>
      <div className="search-container">
        <div className="search-wrapper">
          <input 
            type="text" 
            placeholder="Search games..." 
            className="search-bar"
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 