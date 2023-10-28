import './Esqueceu.css';
import React, { useState } from "react";
//Importe de imagens
import Fundo from '../../assets/vertical-green-forest-hills-kordun-croatia.jpg';
import Logo from '../../assets/logo.png';
import Schneider from '../../assets/pngwing_1.png';

//Importe de componentes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, } from "@fortawesome/free-solid-svg-icons";
import LoginInput from "../../Components/LoginInput/LoginInput";
import { useNavigate } from "react-router-dom";
import Modal from '../../Components/Modal/Modal';

function Esqueceu() {

    document.title = "GreenConnect | Recuperar Senha"

    //Status do Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Navegação
    const navigate = useNavigate();

    const [emptyInput, setEmptyInput] = useState(false);

    //Campo de email
    const [emailInput, setEmailInput] = useState("");

    const openModal = () => {
        if (emailInput == "") {
            setEmptyInput(true);
            setIsModalOpen(true);
        } else {
            setEmptyInput(false);
            setIsModalOpen(true);
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
                        "Insira um Email para recuperação!"
                        :
                        "Email de recuperação enviado com sucesso!"
                    }
                />
            )}
            <div>
                <div class="esqueceu-container font">
                    <div class="main">
                        <div class="container-right bg-gray">
                            <h1 class="white">Insira um Email de Recuperação!</h1>
                            <LoginInput
                                icone={faEnvelope}
                                texto={"Email"}
                                tipo={"email"}
                                change={setEmailInput}
                                valor={emailInput}
                            />
                            <button onClick={() => openModal()}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Esqueceu;