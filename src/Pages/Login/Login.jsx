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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";

function Login() {

    document.title = "GreenConnect | Login";

    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    //Status do Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [emptyInput, setEmptyInput] = useState(false);

    const Enter = () => {
        if (user == "" || password == "") {
            setEmptyInput(true);
            setIsModalOpen(true);
        }
        else {
            setEmptyInput(false);
            setIsModalOpen(true);
            navigate('/home')
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
        if (emptyInput == true) {
            return;
        } else {
            navigate('/login');
        }
    };

    return (
        <>
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    closeModal={() => closeModal()}
                    children={
                        emptyInput ?
                            "Preencha Todos os Campos!"
                            :
                            "Login Efetuado com sucesso!"
                    }
                />
            )}
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
                            change={setUser}
                            valor={user}
                        />
                        <LoginInput
                            icone={faLock}
                            texto={"SENHA"}
                            tipo={"password"}
                            change={setPassword}
                            valor={password}
                        />
                        <button onClick={() => Enter()}>ENTRAR</button>
                        <div class="add">
                            <img src={Schneider} alt="" />
                            <a onClick={() => navigate('/esqueceu')}>ESQUECI MINHA SENHA</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;