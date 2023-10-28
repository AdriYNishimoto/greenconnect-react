import HeaderHome from '../../Components/HeaderHome/HeaderHome';
import Separador from '../../Components/Separador/Separador';
import './Ranking.css';
import posicao1 from '../../assets/Rectangle 18.png';
import posicao2 from '../../assets/Rectangle 19.png';
import posicao3 from '../../assets/Rectangle 22.png';
import posicao4 from '../../assets/Rectangle 23.png';
import posicao5 from '../../assets/Rectangle_20.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Ranking() {
    document.title = "GreenConnect | Ranking";

    return (
        <>
            <HeaderHome />
            <div className='ranking-container'>
                <div className='ranking-title'>
                    <Separador
                        titulo={"Ranking"}
                    />
                    <h4>
                        Conheça quem são os destaques dessa semana e estão acelerando para um mundo mais
                        sustentável. O ranking da semana é válido de segunda a domingo e os 5 primeiros
                        colocados ganham um reconhecimento na plataforma e um certificado. As principais
                        atividades que contabilizam pontos são: conclusão dos conteúdos educacioanis,
                        interação no feed, compartilhamento de conhecimentos e networking.
                    </h4>
                </div>
                <div className='ranking-posicao'>
                    <div className='posicao'>
                        <FontAwesomeIcon icon={faUser}/>
                        <h2>4º</h2>
                        <img src={posicao3} alt="" />
                    </div>

                    <div className='posicao'>
                        <FontAwesomeIcon icon={faUser}/>
                        <h2>2º</h2>
                        <img src={posicao2} alt="" />
                    </div>
                    <div className='posicao'>
                        <FontAwesomeIcon icon={faUser}/>
                        <h2>1º</h2>
                        <img src={posicao1} alt="" />
                    </div>
                    <div className='posicao'>
                        <FontAwesomeIcon icon={faUser}/>
                        <h2>3º</h2>
                        <img src={posicao5} alt="" />
                    </div>
                    <div className='posicao'>
                        <FontAwesomeIcon icon={faUser}/>
                        <h2>5º</h2>
                        <img src={posicao4} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ranking;