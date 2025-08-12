import React, { useEffect, useState } from "react";
import "./ClipsGallery.css";
import axios from "axios";

export default function ClipGallery() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const res = await axios.get("https://dont-leave-project.onrender.com/videos");
      setVideos(res.data);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleDelete = async (videoUrl) => {
    const filename = videoUrl.split("/").pop(); // Extract filename from URL

    try {
      await axios.delete(`https://dont-leave-project.onrender.com/videos/${filename}`);
      fetchVideos(); // Refresh after delete
    } catch (err) {
      console.error("Failed to delete video:", err);
      alert("Could not delete video.");
    }
  };

  return (
    <div className="clip-gallery">
      <h2>📹 Latest Clips</h2>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card fade-in" key={index}>
            <video controls src={`https://dont-leave-project.onrender.com${video}`} />
            <button className="delete-btn" onClick={() => handleDelete(video)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
