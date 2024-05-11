import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sidemodal from "./components/Sidemodal";
import Projects from "./pages/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Notfound from "./pages/Notfound";
import Contact from "./pages/Contact"
import "./styles/index.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true);
    console.log("titi")
  };

  const closeModal = () => {
      setIsModalOpen(false);
      console.log("tata");
  };
  
  return (
    <div className="App">
      <Router>
        <Header openModal={openModal} /> 
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
        <Footer/>
        {isModalOpen && <Sidemodal closeModal={closeModal} isOpen={isModalOpen} />}
      </Router>
    </div>
  );
}

export default App;
