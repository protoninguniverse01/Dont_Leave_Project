import React, { useEffect, useState } from "react";
import "./ClipsGallery.css";
import axios from "axios";

export default function ClipGallery() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("https://dont-leave-project.onrender.com/videos");
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
            <video controls src={`https://dont-leave-project.onrender.com${video}`} />
          </div>
        ))}
        {videos.map((video, index) => {
    const filename = video.split("/").pop(); // extract just the filename
    return (
        <div className="video-card fade-in" key={index}>
            <video controls src={`https://dont-leave-project.onrender.com${video}`} />
            <button
                className="delete-btn"
                onClick={async () => {
                    try {
                        await axios.delete(`https://dont-leave-project.onrender.com/delete/${filename}`);
                        alert("Video deleted successfully");
                        window.location.reload(); // reload to update list
                    } catch (err) {
                        console.error("Failed to delete video:", err);
                        alert("Delete failed");
                    }
                }}
            >
                Delete
            </button>
        </div>
    );
})}

      </div>
    </div>
  );
}


