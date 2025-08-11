// src/pages/Manager.jsx
import React from "react";
import "./support_M.css";
import { useNavigate } from "react-router-dom";

export default function Manager() {
  const navigate = useNavigate();

  return (
    <div className="manager-page">
      <div className="fifa_card">
        <img src="/manager.jpg" alt="Manager" />
        <h2>Coach Gabriel</h2>
        <p>
          Tactical genius with an eye for future stars. Built the Don't Leave FC legacy from scratch and commands with precision and passion.
        </p>
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
