import React from "react";

//Importe de imagens
import Fundo from '../../assets/vertical-green-forest-hills-kordun-croatia.jpg';
import Logo from '../../assets/logo.png';
//Importe de CSS
import './Login.css'

//Importe de Componente
import LoginInput from "../../Components/LoginInput/LoginInput";

function Login(){
    return(
        <div className="login">
            <div className="box-left bg-white">
                <img src={Logo} alt="Logo GreenConnect" />
            </div>
            <div className="box-right bg-gray">
                <LoginInput/>
            </div>
        </div>
    );
}

export default Login;