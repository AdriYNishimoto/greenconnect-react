import React from 'react';
import { useNavigate } from 'react-router-dom';

//Importe de Estilo
import './Home.css';
import Routes from '../Route/Routes';

function Home() {

    const navigate = useNavigate();

    return (
        <div className='container'>
            <p onClick={() => navigate('/tela2')}>
                Ola Mundo!
            </p>
        </div>

    );
}

export default Home;