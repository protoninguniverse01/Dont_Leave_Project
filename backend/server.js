// backend/server.js
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Ensure 'uploads/' folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Middleware
app.use(cors());
app.use("/uploads", express.static(uploadDir));

// Multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) =>
        cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// Upload endpoint
app.post("/upload", upload.single("video"), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }
    res.send({ message: "Video uploaded successfully", file: req.file });
});

// Fetch uploaded videos
app.get("/videos", (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Could not list videos.");
        }
        const videoURLs = files.map(file => `/uploads/${file}`);
        res.json(videoURLs);
    });
});

// Delete video endpoint
app.delete("/videos/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(uploadDir, filename);

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
            return res.status(500).send("Failed to delete video.");
        }
        res.send({ message: "Video deleted successfully." });
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
