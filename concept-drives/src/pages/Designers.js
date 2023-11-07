import React from 'react';
import DesignerInfo from '../component/DesignersInfo';
import Designer from '../class/Designer';
import './Designers.css';

const Designers = () => {
    const designersData = [
        new Designer(
            "https://static01.nyt.com/images/2012/07/04/business/04Pininfarina1/04Pininfarina1-superJumbo.jpg?quality=75&auto=webp",
            "Sergio Pininfarina",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo turpis a enim ullamcorper tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt eu risus sed aliquam. In volutpat sed nisi vestibulum"
        ),
        new Designer(
            "https://upload.wikimedia.org/wikipedia/commons/3/39/1967_Fiat_Dino_Nuccio_Bertone.jpg",
            "Nuccio Bertone",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo turpis a enim ullamcorper tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt eu risus sed aliquam. In volutpat sed nisi vestibulum"
        ),
        new Designer(
            "https://static01.nyt.com/images/2012/07/04/business/04Pininfarina1/04Pininfarina1-superJumbo.jpg?quality=75&auto=webp",
            "Sergio Pininfarina",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo turpis a enim ullamcorper tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt eu risus sed aliquam. In volutpat sed nisi vestibulum"
        ),
        new Designer(
            "https://upload.wikimedia.org/wikipedia/commons/3/39/1967_Fiat_Dino_Nuccio_Bertone.jpg",
            "Nuccio Bertone",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo turpis a enim ullamcorper tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt eu risus sed aliquam. In volutpat sed nisi vestibulum"
        ),
    ];

    return (
        <div>
            {designersData.map((designer, index) => (
                <DesignerInfo key={index} designer={designer} index={index} />
            ))}
        </div>
    );
};

export default Designers;