import React from "react";

import './LoginInput.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const LoginInput = ({ icone, texto, tipo, change, valor }) => {

    return (
        <div class="input-box">
            <FontAwesomeIcon icon={icone} />
            <label>|</label>
            <input
                type={tipo}
                class="font-input"
                placeholder={texto}
                onChange={(e) => change(e.target.value)}
                value={valor} 
            />
        </div>
    );
}

export default LoginInput;