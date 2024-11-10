import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Images/logo.png';

function Navbar({ hideSearch, onToggleNav, isNavCollapsed }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {hideSearch && (
        <div className="hamburger-toggle" onClick={onToggleNav}>
          <i className="fas fa-bars"></i>
        </div>
      )}
      <div className="menu-section">
        <img 
          src={logo} 
          alt="GameBase Logo" 
          className="logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
      </div>
      {!hideSearch && (
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
      )}
    </nav>
  );
}

export default Navbar; 