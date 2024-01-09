import React from "react";
import { useNavigate } from "react-router-dom";
import './Menu.css';
import MenuWhite from '../images/menuWhite.png';

const Menu = ({ setMenuOpen, isMobile }) => {
  const navigate = useNavigate();

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

  const menuClick = (url) => {
    setMenuOpen(false);
    navigate(url);
  }

  return (
    <div className='Menu'>
      <div className="MenuIconButton">
        <img src={MenuWhite} alt='Menu Icon' className='Menu-menu-icon' onClick={() => {
          setMenuOpen(false);
        }} />
      </div>
      <div className="Bottons">
        <button className="buttonOption" onClick={() => menuClick('/cars')}>Cars</button>
        {!isMobile && generateBoxes(7)}
        <button className="buttonOption" onClick={() => menuClick('/designers')}>Designers</button>
        {!isMobile && generateBoxes(7)}
        <button className="buttonOption" onClick={() => menuClick('/aboutus')}>About Us</button>
      </div>
    </div>
  );
}

export default Menu;