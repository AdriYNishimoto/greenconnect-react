import React from "react";

import './InstBox.css';

//Importe componente

const InstBox = ({ texto, imagem }) => {
    return (
        <>
            <div className="content">
                <img src={imagem} alt="" />
                <div className="content-line"></div>
                <h4>{texto}</h4>
            </div>
        </>
    );

}

export default InstBox;
