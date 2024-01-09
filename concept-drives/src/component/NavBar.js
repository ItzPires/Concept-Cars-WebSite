// Desc: NavBar component
import React from "react";
import { useEffect, useState } from "react";
import "./NavBar.css";
import Title from "../images/title.png";
import MenuIcon from "../images/menu.png";
import Menu from "./Menu.js";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  function openMenu() {
    setMenuOpen(true);
  }

  return (
    <div>
      <div className="NavBar">
        <img
          src={Title}
          alt="Concept Drives Logo"
          className="NavBar-logo"
          onClick={() => navigate("/")}
        />
        {!isMobile && (
          <img
            src={MenuIcon}
            alt="Menu Icon"
            className="NavBar-menu-icon"
            onClick={openMenu}
          />
        )}
      </div>
      {isMobile ? (
        <Menu setMenuOpen={setMenuOpen} isMobile={isMobile} />
      ) : (
        
        <Drawer
          anchor={"right"}
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        
        >
          <Menu setMenuOpen={setMenuOpen} />
        </Drawer>
      )}
    </div>
  );
};

export default NavBar;
