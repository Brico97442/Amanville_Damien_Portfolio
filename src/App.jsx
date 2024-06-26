import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sidemodal from "./components/Sidemodal";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Notfound from "./pages/Notfound";
import Contact from "./pages/Contact";
import "./styles/index.minify.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Router>
        <Header openModal={openModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
        <Sidemodal isOpen={isModalOpen} closeModal={closeModal} />
      </Router>
    </div>
  );
}

export default App;
