import { useEffect, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import "./CarList.css";
import APIService from "../APIService";
import CarFilter from "../component/CarFilter/CarFilter";
import Loading from "../component/Loading/Loading";
import { useNavigate } from "react-router-dom";
const CarList = ({ setLogoHidden }) => {
  const [showFilterText, setShowFilterText] = useState(false);
  const [maxNumberOfColumns, setMaxNumberOfColumns] = useState(5);

  const updateIsMobile = () => {
    setShowFilterText(window.innerWidth <= 425);
    if (window.innerWidth <= 767) {
      setMaxNumberOfColumns(2);
    } else if (window.innerWidth <= 1024) {
      setMaxNumberOfColumns(3);
    } else {
      setMaxNumberOfColumns(5);
    }
  };
  useEffect(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  const [completeCarList, setCompleteCarList] = useState([]);
  const [filteredCarList, setFilteredCarList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const [designerFilterList, setDesignerFilterList] = useState([]);
  const [filterDesigner, setFilterDesigner] = useState(null);

  const [brandFilterList, setBrandFilterList] = useState([]);
  const [filterBrand, setFilterBrand] = useState(null);

  const [ageFilterValue, setAgeFilterValue] = useState([-1, -1]);
  const [ageFilterLimits, setAgeFilterLimits] = useState({ min: -1, max: -1 });

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setLogoHidden(false);
    setLoading(true);
    APIService.getCarsList().then((res) => {
      let min_year = -1;
      let max_year = -1;
      let cars = res.objects;

      for (let i = 0; i < cars.length; i++) {
        const car = cars[i];
        const brand = car.metadata["brand"];
        if (!brandFilterList.includes(brand)) {
          brandFilterList.push(brand);
        }
        const designer = car.metadata["designer"];
        if (!designerFilterList.includes(designer)) {
          designerFilterList.push(designer);
        }
        const year = car.metadata["year"];
        if (year < min_year || min_year === -1) {
          min_year = year;
        }
        if (year > max_year || max_year === -1) {
          console.log("max");
          max_year = year;
        }
      }
      setAgeFilterLimits({ min: min_year, max: max_year });
      setBrandFilterList(brandFilterList);
      setDesignerFilterList(designerFilterList);
      setAgeFilterValue([min_year, max_year]);
      cars = shuffle(cars);
      setCompleteCarList(cars);
      setFilteredCarList(cars);
      setLoading(false);
    });
  }, [brandFilterList]);

  useEffect(() => {
    let filteredCars = completeCarList.filter((car) => {
      const year = car.metadata["year"];
      return year >= ageFilterValue[0] && year <= ageFilterValue[1];
    });
    if (filterBrand) {
      filteredCars = filteredCars.filter((car) => {
        return car.metadata["brand"] === filterBrand;
      });
    }
    if (filterDesigner) {
      filteredCars = filteredCars.filter((car) => {
        return car.metadata["designer"] === filterDesigner;
      });
    }
    if (searchQuery !== "") {
      filteredCars = filteredCars.filter((car) => {
        return car.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }
    setFilteredCarList(filteredCars);
  }, [
    ageFilterValue,
    filterBrand,
    filterDesigner,
    completeCarList,
    searchQuery,
    maxNumberOfColumns,
  ]);

  const ageFilter = (event, newValue) => {
    setAgeFilterValue(newValue);
  };

  return (
    <div className="cars">
      <div className="cars_header">
        <h1 className="cars_title">CARS</h1>
        <div className="filter">
          <div style={{ display: "flex" }} onClick={handleFilterClick}>
            {showFilterText === false && (
              <span className="filter_text">FILTERS</span>
            )}
            <TuneIcon className="filter_icon" />
          </div>
          <CarFilter
            open={open}
            setOpen={setOpen}
            anchorEl={anchorEl}
            ageFilter={ageFilter}
            ageFilterValue={ageFilterValue}
            ageFilterLimits={ageFilterLimits}
            brandFilterList={brandFilterList}
            designerFilterList={designerFilterList}
            filterBrand={filterBrand}
            setFilterBrand={setFilterBrand}
            filterDesigner={filterDesigner}
            setFilterDesigner={setFilterDesigner}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          ></CarFilter>
        </div>
      </div>
      {loading && <Loading></Loading>}
      {!loading && filteredCarList.length === 0 ? (
        <div className="cars__empty">
          <h1 className="cars__empty__title">No cars found</h1>
        </div>
      ) : (
        <div className="gallery">
          {filteredCarList.map((car, index) => {
            return (
              <div
                className="gallery__item"
                style={{
                  gridRow: `span ${car.metadata["grid-rows"]}`,
                  gridColumn: `span ${
                    car.metadata["grid-columns"] > maxNumberOfColumns
                      ? maxNumberOfColumns
                      : car.metadata["grid-columns"]
                  }`,
                }}
                key={index}
                onClick={() => navigate(`/cars/${car.id}`)}
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
      )}
    </div>
  );
};

export default CarList;
