import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Designers from './pages/Designers';
import Menu from "./component/Menu.js";
import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Menu setMenuOpen={setMenuOpen} />
      </Drawer>

      <BrowserRouter>
        <Routes>
          <Route path="/designers" element={<Designers />} />
          <Route path="/admin" element={<Designers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
