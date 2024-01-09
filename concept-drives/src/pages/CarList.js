import { useEffect, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import "./CarList.css";
import APIService from "../APIService";
import CarFilter from "../component/CarFilter/CarFilter";
import Loading from "../component/Loading/Loading";
const CarList = () => {
  const [completeCarList, setCompleteCarList] = useState([]);
  const [filteredCarList, setFilteredCarList] = useState([]);
  const [loading, setLoading] = useState(true);


  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const [brandFilterList, setBrandFilterList] = useState([]);
  const [filterBrand, setFilterBrand] = useState(null);
  
  const [ageFilterValue, setAgeFilterValue] = useState([-1, -1]);
  const [ageFilterLimits, setAgeFilterLimits] = useState({ min: -1, max: -1 });

  const [searchQuery, setSearchQuery] = useState("");


  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  useEffect(() => {
    setLoading(true);
    APIService.getCarsList().then((res) => {
      let min_year = -1;
      let max_year = -1;
      for (let i = 0; i < res.objects.length; i++) {
        const car = res.objects[i];
        const brand = car.metadata["brand"];
        if (!brandFilterList.includes(brand)) {
          brandFilterList.push(brand);
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
      setAgeFilterValue([min_year, max_year]);
      setCompleteCarList(res.objects);
      setFilteredCarList(res.objects);
      setLoading(false);
    });
  }, [brandFilterList]);

  useEffect(() => {
    console.log(filterBrand);
    let filteredCars = completeCarList.filter((car) => {
      const year = car.metadata["year"];
      return year >= ageFilterValue[0] && year <= ageFilterValue[1];
    });
    if (filterBrand) {
      filteredCars = filteredCars.filter((car) => {
        return car.metadata["brand"] === filterBrand;
      }) 
    }
    if(searchQuery !== ""){
      filteredCars = filteredCars.filter((car) => {
        return car.title.toLowerCase().includes(searchQuery.toLowerCase());
      }
      );
    }
    setFilteredCarList(filteredCars);
  }, [ageFilterValue, filterBrand, completeCarList, searchQuery]);

  const ageFilter = (event, newValue) => {
    setAgeFilterValue(newValue);
  };

  return (
    <div className="cars">
      <div className="cars_header">
        <h1 className="cars_title">CARS</h1>
        <div className="filter">
          <div style={{ display: "flex" }} onClick={handleFilterClick}>
            <span className="filter_text">FILTERS</span>
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
            filterBrand={filterBrand}
            setFilterBrand={setFilterBrand}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          ></CarFilter>
        </div>
      </div>
      {loading && (
        <Loading></Loading>
      )
      }
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
      )}
    </div>
  );
};

export default CarList;
