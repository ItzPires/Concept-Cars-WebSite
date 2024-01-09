import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Designers from './pages/Designers';
import CarList from "./pages/CarList.js";
import APIService from "./APIService.js";
import HomeTitle from './images/hometitle.png';


function App(){
    const [initialCar, setInitialCar] = useState([]);

    useEffect(() => {
      APIService.getInitialCarList().then((res) => {
        setInitialCar(res.objects);
      });
    }, []);
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/designers" element={<Designers />} />
          <Route path="/cars" element={<CarList />} />
        </Routes>
      </BrowserRouter>
      <div className="home_gallery">
      <img src={HomeTitle} alt='Concept Drives Logo' className="homeTitle" />
      {initialCar.map((car, index) => {
        return(
      <div className="home__item" 
            style={{
                gridColumnStart: `${car.metadata["grid-columns-start"]}`,
                gridColumnEnd: `${car.metadata["grid-columns-end"]}`,
            }}  
            key={index}>

              <img
                className="home_foto"
                src= {car.metadata["images"][0]["imagem"]["url"]}
                alt={car.title}
              />
              <div className="home__item__overlay">
                <h1 className="home__item__title">{car.title}</h1>
              </div>
           </div>
           
        );
      })}
       </div>
    </div>
  );
}

export default App;
