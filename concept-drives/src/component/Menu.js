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
                <button>Menu</button>
                <button>Menu</button>
                <button>Menu</button>

            </div>
            
        </div>
    )


}

export default Menu;