import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Manager from "./pages/Manager";
import Support from "./pages/support_M";
import Navbar from "./components/Navbar";
import Player from "./pages/Players";
import Clips from "./pages/Clips"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Manager" element={<Manager />} />
        <Route path="/Support" element={<Support />}/>
        <Route path="/Players" element={<Player />}/>
        <Route path="/Clips" element={<Clips />}/>
      </Routes>
    </Router>
  );
}
