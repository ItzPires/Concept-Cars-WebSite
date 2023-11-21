import React from "react";

import './Menu.css';
import MenuWhite from '../images/menuWhite.png';
const Menu = ({ setMenuOpen, isMobile}) => {

    const generateBoxes = (numberOfBoxes) => {
        const boxes = [];
        for (let i = 0; i < numberOfBoxes; i++) {
          const className = i % 2 === 0 ? 'white-box' : 'empty-box';
          boxes.push(<div key={i} className={className}></div>);
        }
        return (
          <div className="road">
            {boxes}
          </div>
        );
      }

    return(
        <div className='Menu'>
            <div className="MenuIconButton">
                <img src={MenuWhite} alt='Menu Icon' className='Menu-menu-icon' onClick={()=>{
                    setMenuOpen(false);
                }}/>
            </div>
            <div className="Bottons">
                <button className="buttonOption">Cars</button>
                {!isMobile && generateBoxes(7)}
                <button className="buttonOption">Designers</button>
                {!isMobile && generateBoxes(7)}
                <button className="buttonOption">About Us</button>
            </div>
        </div>
    );
}

export default Menu;