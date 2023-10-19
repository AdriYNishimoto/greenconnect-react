import React from "react";
//Importe de imagens
import Fundo from '../../assets/vertical-green-forest-hills-kordun-croatia.jpg';
import Logo from '../../assets/logo.png';
import Schneider from '../../assets/pngwing_1.png';

//Importe de componentes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Importe de CSS
import './Login.css'
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import LoginInput from "../../Components/LoginInput/LoginInput";

function Login() {

    document.title = "GreenConnect | Login";

    return (
        <div class="login-container font">
            <div class="main">
                <div class="container-left bg-white">
                    <img src={Logo} alt="Schneider GreenConnect" />
                </div>
                <div class="container-right bg-gray">
                    <h1 class="white">FAÇA O LOGIN</h1>
                    <LoginInput
                        icone={faUser}
                        texto={"USUÁRIO"}
                        tipo={"text"}
                    />
                    <LoginInput
                        icone={faLock}
                        texto={"SENHA"}
                        tipo={"password"}
                    />
                    <button>ENTRAR</button>
                    <div class="add">
                        <img src={Schneider} alt="" />
                        <a href="forgot.html">ESQUECI MINHA SENHA</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;