import React from "react";
import { useEffect, useState } from "react";
import "./Car.css";
import APIService from "../APIService";
import { useParams } from "react-router-dom";
import Loading from "../component/Loading/Loading";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Car = ({ setLogoHidden }) => {
  let { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [images, setImages] = useState([]);


  useEffect(() => {
    setLogoHidden(false);
    setLoading(true);
    APIService.getCar(id).then((res) => {
      console.log(res.object);
      let images = res.object.metadata["images"].map((image) => {
        console.log(image);
        return {
          original: image.image.url,
          thumbnail: image.image.url,
        };

      });
      console.log(images);
      setImages(images);
      setCar(res.object);
      setLoading(false);
    });
  }, []);

  const renderCarCarousel = () => {
    return (

      <div className="car_carrousel">
        <Carousel showArrows={true} showIndicators={true} showThumbs={false} showStatus={false}>
            {images.map((image) => {
                return (
                <div>
                    <img src={image.original} />
                </div>
                );
            })}
        </Carousel>
        
      </div>
    );
  };

 
  const renderCarInfo = () => {
    return (
      <div className="car_info">
        <div className="car_header">
          <h1 className="car_title">{car.title}</h1>
        </div>

        <p className="car_detail">{car.metadata.description}</p>
        <h3 className="car_detail_title">MARCA</h3>
        <p className="car_detail">{car.metadata.brand}</p>
        <h3 className="car_detail_title">ANO</h3>
        <p className="car_detail">{car.metadata.year}</p>
        <h3 className="car_detail_title">DESIGNER</h3>
        <p className="car_detail" style={{paddingBottom:"45px"}}>{car.metadata.designer}</p>
      </div>
    );
  };
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  useEffect(() => {
    updateIsMobile();  
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return loading ? (
    <Loading />
  ) : isMobile ? (
    <div className="car_page">
        {renderCarCarousel()}
        {renderCarInfo()}
    </div>
  ) : (
    <div className="car_page">
        {renderCarInfo()}
        {renderCarCarousel()}
    </div>
  );
};

export default Car;
