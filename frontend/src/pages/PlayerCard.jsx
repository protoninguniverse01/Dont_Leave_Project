// src/components/PlayerCard.jsx
import React from "react";
import "./PlayerCard.css";

export default function PlayerCard({ player, onClose }) {
  if (!player) return null;

  return (
    <div className="playercard-overlay" onClick={onClose}>
      <div className="playercard-container" onClick={(e) => e.stopPropagation()}>
        <div className="playercard-header">
          <span className="player-position">{player.position}</span>
          <img className="player-flag" src={player.flag} alt="flag" />
        </div>

        <img className="player-img" src={player.image} alt={player.name} />

        <h2 className="player-name">{player.name}</h2>

        <div className="player-stats">
          <div><span>PAC</span> {player.stats.pace}</div>
          <div><span>SHO</span> {player.stats.shooting}</div>
          <div><span>PAS</span> {player.stats.passing}</div>
          <div><span>DRI</span> {player.stats.dribbling}</div>
          <div><span>STA</span> {player.stats.stamina}</div>
          <div><span>STR</span> {player.stats.strength}</div>
        </div>
    
      </div>
    </div>
  );
}
