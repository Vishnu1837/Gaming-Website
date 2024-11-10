import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import diceImage from '../Images/Games/Dice.jpeg';

function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'lobby', icon: 'fas fa-home', label: 'Lobby' },
    { id: 'originals', icon: 'fas fa-fire', label: 'Stake Originals' },
    { id: 'slots', icon: 'fas fa-slot-machine', label: 'Slot Games' },
    { id: 'live-dealers', icon: 'fas fa-users', label: 'Live Dealers' },
    { id: 'table-games', icon: 'fas fa-table', label: 'Table Games' },
    { id: 'new-releases', icon: 'fas fa-star', label: 'New Releases' },
  ];

  const miniGames = [
    { 
      title: 'Mines', 
      type: 'WINR', 
      bgColor: '#4CD790'
    },
    { 
      title: 'Dice', 
      type: 'WINR', 
      bgColor: '#5D4FE8', 
      multiplier: '84.07',
      image: diceImage
    },
    { title: 'Plinko', type: 'WINR', bgColor: '#2ACB8F' },
    { title: 'Limbo', type: 'WINR', bgColor: '#4169E1', multiplier: 'x12' },
    { title: 'Roll', type: 'WINR', bgColor: '#FF7F50' },
    { title: 'Wheel', type: 'WINR', bgColor: '#1E90FF', multiplier: '48x' },
    { title: 'Coin Flip', type: 'WINR', bgColor: '#9370DB' },
  ];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleGameClick = (gameTitle) => {
    if (gameTitle === 'Dice') {
      navigate('/dice-game');
    }
  };

  return (
    <div>
      {/* Game Cards Section */}
      <div className="game-cards-container">
        <div className="game-card">
          <div className="game-card-content">
            <div className="game-info">
              <h2>THAUR RUNNER</h2>
              <p>Travel to the Northern places with Thaur Runner to explore Viking's secrets of playing slots.</p>
              <button className="play-button">
                <i className="fas fa-play"></i> PLAY
              </button>
              <div className="spin-info">SPINS ROLLED <span>25.2K times</span></div>
            </div>
            <div className="game-image">
              {/* Game character images here */}
            </div>
          </div>
        </div>
      </div>

      {/* Daily Quests Section */}
      <div className="daily-quests-container">
        <div className="quest-card">
          <div className="quest-icon">
            <img src="/path-to-banquet-icon.png" alt="Banquet in Bosru" />
          </div>
          <div className="quest-info">
            <h3>BANQUET IN BOSRU</h3>
            <p>Win a biggest prize: 0/1</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>

        <div className="quest-card">
          <div className="quest-icon">
            <img src="/path-to-valhalla-icon.png" alt="Valhalla Dream" />
          </div>
          <div className="quest-info">
            <h3>VALHALLA DREAM</h3>
            <p>Make 30 spins without losing</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>

        <div className="quest-card">
          <div className="quest-icon">
            <img src="/path-to-gjallarhorn-icon.png" alt="Gjallarhorn Call" />
          </div>
          <div className="quest-info">
            <h3>GJALLARHORN CALL</h3>
            <p>Share the game with 5 users</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sorting Options Bar */}
      <div className="sorting-options">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`sort-button ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            <i className={category.icon}></i>
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      {/* Mini Games Grid */}
      <div className="mini-games-grid">
        {miniGames.map((game, index) => (
          <div 
            className="mini-game-card" 
            key={index}
            onClick={() => handleGameClick(game.title)}
            style={{ 
              backgroundColor: game.bgColor,
              backgroundImage: game.image ? `url(${game.image})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {game.multiplier && (
              <div className="mini-game-multiplier">{game.multiplier}</div>
            )}
            <div className="mini-game-content">
              <h3>{game.title}</h3>
              <span className="mini-game-type">{game.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; 