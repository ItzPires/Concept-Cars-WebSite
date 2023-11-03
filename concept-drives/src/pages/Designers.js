import React from 'react';
import './Designers.css';

const Designers = () => {
    return (
        <div class="context">
            <div class="col1">1</div>
            <div class="col2">2</div>
            <div class="col3">3</div>
            <div class="col4">4</div>
            <div class="col5">5</div>
            <div class="col6">6</div>
            <div class="col7">7</div>
            <div class="col8">8</div>
            <div class="col9">9</div>
            <div class="col10">10</div>
            <div class="col11">11</div>
            <div class="col12">12</div>

            <div class="col-3-6">
                <div class="content-wrapper">
                    <img src="https://static01.nyt.com/images/2012/07/04/business/04Pininfarina1/04Pininfarina1-superJumbo.jpg?quality=75&auto=webp" alt="Descrição da imagem" class="img-designers" />
                </div>
            </div>
            <div class="col-7-10">
                <div class="content-wrapper">
                    <h2>Sergio Pininfarina</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo turpis a enim ullamcorper tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt eu risus sed aliquam. In volutpat sed nisi vestibulum</p>
                </div>
            </div>

            <div class="col-3-6">
                <div class="content-wrapper">
                    <h2>Nuccio Bertone</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo turpis a enim ullamcorper tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt eu risus sed aliquam. In volutpat sed nisi vestibulum</p>
                </div>
            </div>
            <div class="col-7-10">
                <div class="content-wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/1967_Fiat_Dino_Nuccio_Bertone.jpg" alt="Descrição da imagem" class="img-designers" />
                </div>
            </div>
        
        </div>
    );
};

export default Designers;