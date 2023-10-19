import React from "react";

import './LoginInput.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const LoginInput = ({icone, texto, tipo}) => {
    return (
        <div class="input-box">
            <FontAwesomeIcon icon={icone} />
            <label>|</label>
            <input type={tipo} class="font-input" placeholder={texto}/>
        </div>
    );
}

export default LoginInput;