import React from "react";

import './InstBox.css';

//Importe componente

const InstBox = ({ texto, imagem }) => {
    return (
        <>
            <div className="content">
                <img src={imagem} alt="" />
                <h1>{texto}</h1>
            </div>
        </>
    );

}

export default InstBox;
