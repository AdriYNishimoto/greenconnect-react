import HeaderHome from '../../Components/HeaderHome/HeaderHome';
import RankingPosicao from '../../Components/RankingPosicao/RankingPosicao';
import Separador from '../../Components/Separador/Separador';
import './Ranking.css';

function Ranking() {
    document.title = "GreenConnect | Ranking";

    const posicao = [
        {
            id: 1,
            lugar: "50"
        },
        {
            id: 2,
            lugar: "20"
        },
        {
            id: 3,
            lugar: "70"
        },
        {
            id: 4,
            lugar: "80"
        },
        {
            id: 5,
            lugar: "30"
        },
    ]

    return (
        <>
            <HeaderHome />
            <div className='ranking-container'>
                <div className='ranking-subcontainer'>
                    <Separador
                        titulo={"Ranking"}
                    />
                    <p>
                        Conheça quem são os destaques dessa semana e estão acelerando para um mundo mais
                        sustentável. O ranking da semana é válido de segunda a domingo e os 5 primeiros
                        colocados ganham um reconhecimento na plataforma e um certificado. As principais
                        atividades que contabilizam pontos são: conclusão dos conteúdos educacioanis,
                        interação no feed, compartilhamento de conhecimentos e networking.
                    </p>
                    <div className='ranking-posicoes'>
                        {
                            posicao.map((posicoes, indes) => (
                                <RankingPosicao posicao={posicoes.lugar}/>
                            ))
                        }
                    </div>
                </div>
            </div >
        </>
    );
}

export default Ranking;