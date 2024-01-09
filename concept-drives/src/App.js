import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./component/NavBar";
import Designers from "./pages/Designers";
import CarList from "./pages/CarList.js";
import HomePage from "./pages/HomePage.js";
import AboutUs from "./pages/AboutUs.js";
import APIService from "./APIService.js";
import Car from "./pages/Car.js";

function App() {
  const [logoHidden, setLogoHidden] = useState(false);

  return (
    <div className="App">
      <HashRouter>
        
        <NavBar logoHidden={logoHidden}/>
        <Routes>
          <Route path="/" element={<HomePage setLogoHidden={setLogoHidden} />} />
          <Route path="/designers" element={<Designers setLogoHidden={setLogoHidden}/>} />
          <Route path="/cars" element={<CarList  setLogoHidden={setLogoHidden}/>} />
          <Route path="/cars/:id" element={<Car setLogoHidden={setLogoHidden} />} />
          <Route path="/aboutus" element={<AboutUs setLogoHidden={setLogoHidden} />} />
          
          <Route path="*" element={<Navigate to="/" replace state={{ from: 'redirect' }} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
