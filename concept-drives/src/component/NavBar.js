// Desc: NavBar component
import React from 'react';
import './NavBar.css';
import Title from '../images/title.png';
import MenuIcon from '../images/menu.png';


const NavBar = ({setMenuOpen}) => {
    function openMenu() {
        setMenuOpen(true);
    }
    return (
        <div className='NavBar'>
            <img src={Title} alt='Concept Drives Logo' className='NavBar-logo' />
            <img src={MenuIcon} alt='Menu Icon' className='NavBar-menu-icon' onClick={openMenu}/>
        
        </div>    
    );


}

export default NavBar;