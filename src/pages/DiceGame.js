import React from 'react';

function DiceGame() {
  return (
    <div className="dice-game">
      <div className="dice-game-container">
        <div className="dice-game-left-sidebar">
          <h3>Game Settings</h3>
          {/* Settings and controls will go here */}
        </div>

        <div className="dice-game-main">
          <h2>Dice Game</h2>
          {/* Game content will go here */}
        </div>

        <div className="dice-game-sidebar">
          <h3>Game History</h3>
          {/* History and stats will go here */}
        </div>
      </div>
    </div>
  );
}

export default DiceGame; 