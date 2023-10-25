import './RankingPosicao.css';

const RankingPosicao = ({ posicao }) => {
    return (
        <progress
            value={posicao}
            max="100"
            className='posicao'
        />
    );
}

export default RankingPosicao;