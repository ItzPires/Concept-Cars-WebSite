import React from "react";
import {Link, useNavigate } from "react-router-dom";
import './Menu.css';
import MenuWhite from '../images/menuWhite.png';
const Menu = ({setMenuOpen}) => {
    const navigate = useNavigate();



    return(
        <div className='Menu'>
            <div className="MenuIconButton">
                <img src={MenuWhite} alt='Menu Icon' className='NavBar-menu-icon' onClick={()=>{
                    setMenuOpen(false);
                }}/>
            </div>
            <div className="Bottons">
                <button onClick={() => navigate('/cars')}>Cars</button>
                <button onClick={() => navigate('/designers')}>Designers</button>
                <button>About us</button>

            </div>
            
        </div>
    )


}

export default Menu;