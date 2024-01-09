import React, { useState, useEffect } from "react";
import APIService from "../APIService.js";
import HomeTitle from "../images/hometitle.png";
import Loading from "../component/Loading/Loading.js";
import CarHome from "../component/CarHome/CarHome";
import "./HomePage.css";

const HomePage = ({ setLogoHidden }) => {
  const [initialCar, setInitialCar] = useState([]);
  const [loading, setLoading] = useState(true);

  const layoutConfigs = [
    [[3, 6], [6, 8]],
    [[4, 7], [7, 9]],
    [[3, 5], [5, 8]],
  ];

  useEffect(() => {
    setLoading(true);
    setLogoHidden(true);
    APIService.getCarsList().then((res) => {
      setInitialCar(res.objects);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="home_gallery">
      <img src={HomeTitle} alt="Concept Drives Logo" className="homeTitle" />
      {initialCar.slice(0, 6).map((car, index) => {
        const [gridColumnStart, gridColumnEnd] = layoutConfigs[Math.floor(index / 2) % layoutConfigs.length][index % 2];
        return <CarHome car={car} gridColumnStart={gridColumnStart} gridColumnEnd={gridColumnEnd} index={index} />;
      })}
    </div>
  );
};

export default HomePage;
