import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Designers from "./pages/Designers";
import Menu from "./component/Menu.js";
import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import CarList from "./pages/CarList.js";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
        console.log("I resized");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar setMenuOpen={setMenuOpen} />
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        >
          <Menu setMenuOpen={setMenuOpen} />
        </Drawer>
        <Routes>
          <Route path="/designers" element={<Designers />} />
          <Route path="/cars" element={<CarList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
