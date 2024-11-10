import React from 'react';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </button>
      <ul className="sidebar-menu">
        <li><i className="fas fa-home"></i> <span className="menu-text">Home</span></li>
        <li><i className="fas fa-gamepad"></i> <span className="menu-text">Games</span></li>
        <li><i className="fas fa-fire"></i> <span className="menu-text">Trending</span></li>
        <li><i className="fas fa-star"></i> <span className="menu-text">New Releases</span></li>
        <li><i className="fas fa-tags"></i> <span className="menu-text">Deals</span></li>
      </ul>
    </div>
  );
}

export default Sidebar; 