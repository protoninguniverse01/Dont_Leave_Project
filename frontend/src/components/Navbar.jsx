// src/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="navbar">

      <div className={`nav-links ${navOpen ? "nav-active" : ""}`}>
        <Link to="/" onClick={toggleNav}>Home</Link>
        <Link to="/Players" onClick={toggleNav}>Players</Link>
        <Link to="/Manager" onClick={toggleNav}>Manager</Link>
        <Link to="/Clips" onClick={toggleNav}>Clips</Link>
      </div>

      <div className={`hamburger ${navOpen ? "toggle" : ""}`} onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

