// src/components/ClipUpload.jsx
import React, { useState } from "react";
import axios from "axios";
import "./ClipUpload.css";

const ClipUpload = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return alert("Please select a file first!");

        const formData = new FormData();
        formData.append("video", file);

        try {
            setUploading(true);
            await axios.post("https://dont-leave-project.onrender.com/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert("Video uploaded successfully!");
            setFile(null);
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert("Failed to upload video");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="upload-container">
            <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="file-input"
            />
            <button
                onClick={handleUpload}
                className="upload-btn"
                disabled={uploading}
            >
                {uploading ? "Uploading..." : "Upload Video"}
            </button>
        </div>
    );
};

export default ClipUpload;
