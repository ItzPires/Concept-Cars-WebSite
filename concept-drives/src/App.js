import "./App.css";
import NavBar from "./component/NavBar.js";
import Menu from "./component/Menu.js";
import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <NavBar setMenuOpen={setMenuOpen} />
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Menu setMenuOpen={setMenuOpen} />
      </Drawer>

      <div className="container"></div>
    </div>
  );
}

export default App;
