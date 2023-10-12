import React from "react";

//Importe de estilização
import './Pitch.css';
import Header from "../../Components/Header/Header";

function Pitch(){
    document.title = "GreenConnect";
    return(
        <>
            <div className="container">
                <Header/>
            </div>
        </>
    );
}

export default Pitch;