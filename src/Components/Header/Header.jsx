import React from "react";
import { useNavigate } from 'react-router-dom';
//importe de estilização
import './Header.css';

//importe de imagens
import Logo from '../../assets/logo.png';

const Header = () => {

    const navigate = useNavigate();

    const _youtubelink = () => {
        window.open('https://www.youtube.com/embed/-BckONx1bLw');
    }

    return (
        <div className="Header">
            <div className="left">
                <img src={Logo} alt="GreenConnect" />
                <label onClick={() => _youtubelink()}>Video do Projeto</label>
                <label onClick={() => navigate('/sobre')}>Sobre o Projeto</label>
            </div>
            <button onClick={() => navigate('/login')}>LOGIN</button>
        </div>
    );
}

export default Header;