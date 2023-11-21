import { useCallback, useEffect, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import Alfa from "../CarImages/AlfaBella.jpg";
import Audi from "../CarImages/audiRose.jpg";
import EA266 from "../CarImages/EA266.JPG";
import Honda from "../CarImages/HondaSSm.jpg";
import Panamera from "../CarImages/panamera.jpg";
import Vertical from "../CarImages/vertical.jpeg";
import "./CarList.css";

const CarList = () => {
  const [imageData, setImageData] = useState([]);

  const fetchImages = useCallback(async () => {
    const data = await Promise.all(
      itemData.map(async (image) => {
        const img = new Image();
        img.src = image.img;

        return new Promise((resolve, reject) => {
          img.onload = () => {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            console.log(aspectRatio);

            const columns = aspectRatio > 2 ? 2 : 1;
            const rows = aspectRatio > 1 ? 1 : 2;

            resolve({ src: img.src, loaded: true, aspectRatio, columns, rows });
          };
          img.onerror = () => reject({ ...image, loaded: false });
        });
      })
    );
    setImageData(data);
  }, [itemData]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

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
        {imageData.map(
          (image, index) => (
            console.log(image),
            (
              <img
                key={index}
                className="gallery__item"
                src={image.src}
                alt={image.alt}
                style={{
                  gridRow: `span ${image.rows}`,
                  gridColumn: `span ${image.columns}`,
                }}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

const itemData = [
  {
    img: Alfa,
    title: "Alfa Romeo",
    cols: 2,
    rows: 1,
  },
  {
    img: Vertical,
    title: "Vertical",
  },
  {
    img: Audi,
    title: "Audi",
    cols: 2,
    rows: 1,
  },
  {
    img: EA266,
    title: "EA266",
    cols: 1,
    rows: 2,
  },
  {
    img: Honda,
    title: "Honda",
    cols: 1,
    rows: 2,
  },
  {
    img: Panamera,
    title: "Panamera",
    cols: 1,
    rows: 1,
  },
];

export default CarList;
