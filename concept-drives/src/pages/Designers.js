import React, { useState, useEffect } from 'react';
import DesignerInfo from '../component/DesignersInfo';
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

                const response = await fetch('./data.json');
                const dataJson = await response.json();

                const designersData = dataJson.designers.map(designer => {
                    return new Designer(designer.image, designer.name, designer.description);
                });

                setData(designersData);
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
            }
        };

        getData();
    }, []);

    return (
        <div>
            {data ? (
                data.map((designer, index) => (
                    <DesignerInfo key={index} designer={designer} index={index} />
                ))
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Designers;