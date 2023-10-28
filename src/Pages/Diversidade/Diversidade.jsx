import HeaderHome from '../../Components/HeaderHome/HeaderHome';
import './Diversidade.css';
import Separador from '../../Components/Separador/Separador';
import imageDiversidade from '../../assets/image 15.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function Diversidade() {

    document.title = "GreenConnect | Diversidade";

    return (
        <>
            <HeaderHome />
            <div className="diversidade-container">
                <div className='diversidade-title'>
                    <Separador titulo={"Schneider Eletric é Diversidade"}/>
                    <h4>Nomeada como um “Farol” em Diversidade, Equidade e Inclusão pelo Fórum Econômico Mundial, Schneider Electric promove a equidade salarial eum ambiente de trabalho inclusivo e atencioso</h4>
                </div>
                <div className='diversidade-cont'>
                    <div className='diversidade-cont-img'>
                        <img src={imageDiversidade}/>
                    </div>
                    <div className='diversidade-cont-btn'>
                        <h2>Integramos de forma profunda diversidade, respeito, segurança psicológica e bem-estar à experiência de nossos funcionários, às nossas decisões de negócios e à nossa visão de mundo.</h2>
                        <div className="conexao">
                            <label className="dark">CONHEÇA MAIS</label>
                            <FontAwesomeIcon icon={faPlus} className="plus" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Diversidade;