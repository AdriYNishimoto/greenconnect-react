import React from "react";
import { useNavigate } from 'react-router-dom';
//importe de estilização
import './Header.css';

//importe de imagens
import Logo from '../../assets/logo.png';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="Header">
            <div className="left">
                <img src={Logo} alt="GreenConnect" />
                <label>Video do Projeto</label>
                <label>Sobre o Projeto</label>
            </div>
            <button onClick={() => navigate('/login')}>LOGIN</button>
        </div>
    );
}

export default Header;