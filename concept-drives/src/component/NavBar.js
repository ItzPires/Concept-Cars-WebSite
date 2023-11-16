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

    const anchor = isMobile ? 'bottom' : 'right';

    function openMenu() {
        setMenuOpen(true);
    }

    return (
        <div>
            <div className='NavBar'>
                <img src={Title} alt='Concept Drives Logo' className='NavBar-logo' />
                <img src={MenuIcon} alt='Menu Icon' className='NavBar-menu-icon' onClick={openMenu} />

            </div>
            <Drawer
                anchor={anchor}
                open={isMobile || menuOpen}
                onClose={() => setMenuOpen(false)} >
                <Menu setMenuOpen={setMenuOpen} />
            </Drawer>
        </div>
    );


}

export default NavBar;