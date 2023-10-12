import React from "react";

//Importe do CSS
import './Instituto.css';

//Importe Componente
import InstBox from "../../Components/InstBox/InstBox";

//Importe de imagem
import Logo from "../../assets/logo.png"
import Foto2 from "../../assets/Conteudo_2.png";

function Instituto(){
    
    //ArrayList de Usuários
    const usuarios = [
        {
            id: 1,
            texto: "Igor",
            imagem: Logo
        },
        {
            id: 2,
            texto: "Igor",
            imagem: Logo
        },
        {
            id: 3,
            texto: "Igor",
            imagem: Logo
        },
        {
            id: 4,
            texto: "Igor",
            imagem: Logo
        },
    ];

    return(
        <div>
            <div>
                <h1>Instituto Schneider</h1>
                <h2>Conheça o Instituto Schneider e participe!</h2>
            </div>
            <div className="instituto">
                {
                    usuarios.map((usuario, index) => (
                        <InstBox
                            texto={usuario.texto}
                            imagem={usuario.imagem}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Instituto;