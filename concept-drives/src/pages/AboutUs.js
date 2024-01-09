import React, { useState, useEffect } from "react";
import Developer from "../component/Developer/Developer";
import Loading from "../component/Loading/Loading.js";
import APIService from "../APIService.js";
import "./AboutUs.css";

const AboutUs = ({ setLogoHidden }) => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLogoHidden(false);
    setLoading(true);
    APIService.getAboutUs().then((res) => {
      setDevelopers(res.objects);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="cars_header">
        <h1 className="cars_title">About Us</h1>
      </div>

      <div className="context-aboutus">
        {developers.map((developer, index) => (
          <div className={`aboutus-item ${index === developers.length - 1 ? 'last-item' : ''}`}>
            <Developer developer={developer} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUs;
