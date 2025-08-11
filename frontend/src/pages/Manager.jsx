import React from "react";
import { Link } from "react-router-dom";
import "./Manager.css";

const Manager = () => {
  return (
    <div className="manager-page">

      <div className="fifa-card">

        <div className="manager-photo">
          <img src="/manager.png" alt="Manager" />
        </div>

        <h2 className="manager-name">GABRIEL</h2>
        <p className="manager-club">DONT LEAVE FC</p>
        <p className="manager-bio">
          Tactical genius with experience leading DONT LEAVE
          FC to victory. Known for sharp talent spotting and
          innovative strategies.
        </p>
      </div>
    </div>
  );
};

export default Manager;
