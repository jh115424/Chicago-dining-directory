// import React from "react";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, Seafood, Carnivore, Vegan, About } from "./Components/pages/index";

import "./Home.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/seafood" element={<Seafood />} />
        <Route path="/carnivore" element={<Carnivore />} />
        <Route path="/vegan" element={<Vegan />} /> 
        <Route path="/about" element={<About />} />
     
      </Routes>


    </div>
  );
}

export default App;
