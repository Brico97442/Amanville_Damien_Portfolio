import React, { useState } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sidemodal from "./components/Sidemodal";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { HashRouter } from "react-router-dom";

import "./styles/index.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HashRouter>
        <Header openModal={openModal} />
        <Sidemodal closeModal={closeModal} isOpen={isModalOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
