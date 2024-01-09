import React from "react";
import { useNavigate } from "react-router-dom";
import "./CarHome.css";

const CarHome = ({ car, gridColumnStart, gridColumnEnd, index }) => {

  const navigate = useNavigate();

  return (
    <div
      className="car-home"
      style={{
        gridColumnStart: gridColumnStart,
        gridColumnEnd: gridColumnEnd,
      }}
      key={index}
      onClick={() => navigate(`/cars/${car.id}`)}
    >
      <img
        className="car-home-foto"
        src={car.metadata["images"][0]["image"]["url"]}
        alt={car.title}
      />
      <div className="car-home-overlay">
        <h1 className="car-home-title">{car.title}</h1>
      </div>
    </div>
  );
};

export default CarHome;
