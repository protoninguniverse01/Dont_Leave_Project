// src/pages/Clips.jsx
import React from "react";
import ClipUpload from "./ClipUpload";
import ClipsGallery from "./ClipsGallery";
import "./Clips.css";

const Clips = () => {
    return (
        <div className="clips-page">
            <h1 className="clips-title">Don't Leave FC - Clips</h1>
            <ClipUpload />
            <ClipsGallery />
        </div>
    );
};

export default Clips;
