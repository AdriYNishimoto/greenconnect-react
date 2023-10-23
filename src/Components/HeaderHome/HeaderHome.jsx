import './HeaderHome.css';

import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const HeaderHome = () => {

    const navigate = useNavigate();

    return (
        <div class="header">
            <div class="left">
                <img src={Logo} alt="Logo GreenConnect" onclick="HomePage()" />
                <a onClick={() => navigate('/home')}>Home</a>
                <a onClick={() => navigate('/rede')}>Rede</a>
                <a onClick={() => navigate('/grupos')}>Grupos</a>
                <a onClick={() => navigate('/noticias')}>Notícias</a>
                <a onClick={() => navigate('/conteudo')}>Conteúdos</a>
                <a onClick={() => navigate('/ranking')}>Ranking</a>
                <a onClick={() => navigate('/games')}>Games</a>
                <a onClick={() => navigate('/instituto')}>Instituto Schneider</a>
                <a onClick={() => navigate('/diversidade')}>Diversidade</a>
            </div>
            <div class="right">
                <div class="user">
                    <span onClick={() => navigate('/perfil')}>
                        <FontAwesomeIcon icon={faUser} className='icone-header' color='#FFF' />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HeaderHome;