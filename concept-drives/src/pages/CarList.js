import { useCallback, useEffect, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";

import "./CarList.css";
import APIService from "../APIService";
const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    APIService.getCarsList().then((res) => {
      setCars(res.objects);
    });
  }, []);

  return (
    <div className="cars">
      <div className="cars_header">
        <h1 className="cars_title">CARS</h1>
        <div className="filter">
          <span className="filter_text">FILTROS</span>
          <TuneIcon className="filter_icon" />
        </div>
      </div>
      <div className="gallery">
        {cars.map((car, index) => {
          console.log(car);
          return (
            <div
              className="gallery__item"
              style={{
                gridRow: `span ${car.metadata["grid-rows"]}`,
                gridColumn: `span ${car.metadata["grid-columns"]}`,
              }}
              key={index}
            >
              <img
                className="gallery__item__img"
                src={car.metadata["images"][0]["image"]["url"]}
                alt={car.title}
              />
              <div className="gallery__item__overlay">
                <h1 className="gallery__item__title">{car.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarList;
