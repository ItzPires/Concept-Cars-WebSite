import React, { useState, useEffect } from 'react';
import DesignerInfo from '../component/DesignersInfo/DesignersInfo';
import Designer from '../class/Designer';
import Loading from '../component/Loading/Loading';
import './Designers.css';

const Designers = () => {
    const [data, setData] = useState(null);

    function timeoutDelay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        const getData = async () => {
            try {
                await timeoutDelay(500);

                const response = await fetch('https://conceptdrives.000webhostapp.com/wp-json/wp/v2/Designers');
                const dataJson = await response.json();

                const designersData = dataJson.map(designer => {
                    return new Designer(designer.acf.image, designer.acf.name, designer.acf.description);
                });

                setData(designersData);
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
            }
        };

        getData();
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