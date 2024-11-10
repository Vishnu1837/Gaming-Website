import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './DiceGame.css';

function DiceGame() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  return (
    <div className="dice-game">
      <Navbar 
        hideSearch={true} 
        onToggleNav={() => setIsNavCollapsed(!isNavCollapsed)}
        isNavCollapsed={isNavCollapsed}
      />
      <div className="dice-game-layout">
        <div className={`dice-game-sidebar ${isNavCollapsed ? 'collapsed' : ''}`}>
          <ul className="dice-nav-menu">
            <li className="dice-nav-item active">
              <i className="fas fa-dice"></i>
              <span>Classic</span>
            </li>
            <li className="dice-nav-item">
              <i className="fas fa-robot"></i>
              <span>Auto Bet</span>
            </li>
            <li className="dice-nav-item">
              <i className="fas fa-chart-line"></i>
              <span>Statistics</span>
            </li>
            <li className="dice-nav-item">
              <i className="fas fa-history"></i>
              <span>History</span>
            </li>
          </ul>
        </div>
        <div className={`dice-game-content ${isNavCollapsed ? 'expanded' : ''}`}>
          <div className="dice-box-center">
            <div className="dice-box-left">
              {/* Left box content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiceGame; 