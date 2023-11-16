import React from "react";

import './Menu.css';
import MenuWhite from '../images/menuWhite.png';
const Menu = ({setMenuOpen}) => {


    return(
        <div className='Menu'>
            <div className="MenuIconButton">
                <img src={MenuWhite} alt='Menu Icon' className='NavBar-menu-icon' onClick={()=>{
                    setMenuOpen(false);
                }}/>
            </div>
            <div className="Bottons">
                <button>Cars</button>
                <button>Designers</button>
                <button>About Us</button>

            </div>
            
        </div>
    )


}

export default Menu;