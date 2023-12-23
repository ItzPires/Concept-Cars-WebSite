import React, { useState, useEffect } from "react";
import DesignerInfo from "../component/DesignersInfo/DesignersInfo";
import Designer from "../class/Designer";
import Loading from "../component/Loading/Loading";
import "./Designers.css";
import APIService from "../APIService";
const Designers = () => {
  const [data, setData] = useState(null);

  function timeoutDelay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    
    APIService.getDesignerList().then((res) => {
      const designersData = res.objects.map((designer) => {
        return new Designer(
          designer.metadata.image.url,
          designer.title,
          designer.metadata.description
        );
      });
      setData(designersData);
    });
  }, []);

  return (
    <>
      {data ? (
        <div className="context">
          {data.map((designer, index) => (
            <DesignerInfo key={index} designer={designer} index={index} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Designers;
