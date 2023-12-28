import React, { useState, useEffect } from "react";
import DesignerInfo from "../component/DesignersInfo/DesignersInfo";
import Designer from "../class/Designer";
import Loading from "../component/Loading/Loading";
import APIService from "../APIService";
import "./Designers.css";

const Designers = () => {
    const [data, setData] = useState(null);

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
            <div className="cars_header">
                <h1 className="cars_title">Designers</h1>
            </div>
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
