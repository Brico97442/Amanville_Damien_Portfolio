import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/App.css";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Projects" element={<Projects />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
