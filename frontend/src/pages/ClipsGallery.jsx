import React, { useEffect, useState } from "react";
import "./ClipsGallery.css";
import axios from "axios";

export default function ClipGallery() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/videos");
        setVideos(res.data);
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="clip-gallery">
      <h2>📹 Latest Clips</h2>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card fade-in" key={index}>
            <video controls src={`http://localhost:5000${video}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
