// Desc: NavBar component
import React from 'react';
import { useEffect, useState } from "react";
import './NavBar.css';
import Title from '../images/title.png';
import MenuIcon from '../images/menu.png';
import Menu from "./Menu.js";
import { Drawer } from "@mui/material";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', updateIsMobile);

        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    function openMenu() {
        setMenuOpen(true);
    }

    if (!isMobile) {
        return (
            <div>
                <div className='NavBar'>
                    <img src={Title} alt='Concept Drives Logo' className='NavBar-logo' />
                    <img src={MenuIcon} alt='Menu Icon' className='NavBar-menu-icon' onClick={openMenu} />

                </div>
                <Drawer
                    anchor={"right"}
                    open={menuOpen}
                    onClose={() => setMenuOpen(false)} >
                    <Menu setMenuOpen={setMenuOpen} />
                </Drawer>
            </div>
        );
    } else {
        return <Menu setMenuOpen={setMenuOpen} isMobile={isMobile} />;
    }

}

export default NavBar;