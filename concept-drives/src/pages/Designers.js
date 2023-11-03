import React from 'react';
import DesignerInfo from '../component/DesignersInfo';
import './Designers.css';

const Designers = () => {
    return (
        <div>
            <DesignerInfo
                imageSrc="https://static01.nyt.com/images/2012/07/04/business/04Pininfarina1/04Pininfarina1-superJumbo.jpg?quality=75&auto=webp"
                name="Sergio Pininfarina"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo turpis a enim ullamcorper tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt eu risus sed aliquam. In volutpat sed nisi vestibulum"
                index={0}
            />
            <DesignerInfo
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/3/39/1967_Fiat_Dino_Nuccio_Bertone.jpg"
                name="Nuccio Bertone"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo turpis a enim ullamcorper tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt eu risus sed aliquam. In volutpat sed nisi vestibulum"
                index={1}
            />
            <DesignerInfo
                imageSrc="https://static01.nyt.com/images/2012/07/04/business/04Pininfarina1/04Pininfarina1-superJumbo.jpg?quality=75&auto=webp"
                name="Sergio Pininfarina"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo turpis a enim ullamcorper tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt eu risus sed aliquam. In volutpat sed nisi vestibulum"
                index={2}
            />
            <DesignerInfo
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/3/39/1967_Fiat_Dino_Nuccio_Bertone.jpg"
                name="Nuccio Bertone"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo turpis a enim ullamcorper tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt eu risus sed aliquam. In volutpat sed nisi vestibulum"
                index={3}
            />
        </div>
    );
};

export default Designers;