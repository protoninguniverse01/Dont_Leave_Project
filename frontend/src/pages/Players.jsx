import React, { useState } from "react";
import "./Players.css";
import PlayerCard from "./PlayerCard";
import jerseyImg from "/jersey.png";
import fieldImg from "/football-bg1.jpg"; // Make sure this exists

const players = [
  { id: 1, name: "DONALD", image: "/donald.jpg", flag: "/nigeria.jpg", position: "GK", stats: 
    {
    pace: 54,
    shooting: 76,
    passing: 51,
    dribbling: 34,
    stamina: 78,
    strength: 74
        } 
    },
  { id: 2, name: "GABRIEL", image: "/gabriel.jpg", flag: "/nigeria.jpg", position: "LB", stats: 
    {
    pace: 88,
    shooting: 64,
    passing: 83,
    dribbling: 72,
    stamina: 71,
    strength: 89
        } 
    },
  { id: 3, name: "DAREGO", image: "/dboy.jpg", flag: "/nigeria.jpg", position: "CB", stats: 
    {
    pace: 75,
    shooting: 72,
    passing: 78,
    dribbling: 81,
    stamina: 91,
    strength: 94
        } 
    },
  { id: 4, name: "JESSE", image: "/jesse.jpg", flag: "/nigeria.jpg", position: "CB", stats: 
    {
    pace: 79,
    shooting: 62,
    passing: 68,
    dribbling: 59,
    stamina: 97,
    strength: 98
        } 
    },
  { id: 5, name: "GRAHAM", image: "/graham.jpg",flag: "/nigeria.jpg", position: "RB", stats: 
    {
    pace: 71,
    shooting: 76,
    passing: 83,
    dribbling: 72,
    stamina: 79,
    strength: 74
        } 
    },
  { id: 6, name: "BOLU", image: "/bolu.jpg", flag: "/nigeria.jpg", position: "CM", stats: 
    {
    pace: 88,
    shooting: 95,
    passing: 78,
    dribbling: 93,
    stamina: 97,
    strength: 89
        } 
    },
  { id: 7, name: "JELFREY", image: "/jeff.jpg", flag: "/nigeria.jpg", position: "CM", stats: 
    {
    pace: 76,
    shooting: 83,
    passing: 85,
    dribbling: 79,
    stamina: 72,
    strength: 61
        } 
    },
  { id: 8, name: "ELVIS", image: "/elvis.jpg", flag: "/nigeria.jpg", position: "CAM", stats: 
    {
    pace: 81,
    shooting: 89,
    passing: 74,
    dribbling: 88,
    stamina: 79,
    strength: 82
        } 
    },
  { id: 9, name: "PROMISE", image: "/captain.jpg", flag: "/nigeria.jpg", position: "LW", stats: 
    {
    pace: 99,
    shooting: 83,
    passing: 74,
    dribbling: 86,
    stamina: 77,
    strength: 75
        } 
    },
  { id: 10, name: "ANU", image: "/anu.jpg", flag: "/nigeria.jpg", position: "ST", stats: 
    {
    pace: 54,
    shooting: 72,
    passing: 63,
    dribbling: 44,
    stamina: 47,
    strength: 51
        } 
    },
  { id: 11, name: "TOCHUKWU", image: "/tochi.jpg", flag: "/nigeria.jpg", position: "RW", stats: 
    {
    pace: 84,
    shooting: 94,
    passing: 85,
    dribbling: 88,
    stamina: 79,
    strength: 75
        } 
    },
];

export default function Player() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <div className="player-page" style={{ backgroundImage: `url(${fieldImg})` }}>
      {players.map((player, idx) => (
        <div
          key={player.id}
          className={`jersey jersey-${idx + 1}`}
          onClick={() => setSelectedPlayer(player)}
        >
          <img src={jerseyImg} alt="jersey" />
          <span className="player-name">{player.name}</span>
        </div>
      ))}
      {selectedPlayer && (
        <PlayerCard player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
      )}
    </div>
  );
}
