import GameCard from '../../Components/GameCard/GameCard'
import game1Image from '../../assets/image 6.png';
import game2Image from '../../assets/image 7 (1).png';
import game3Image from '../../assets/image 8.png';
import game4Image from '../../assets/image 9.png';
import game5Image from '../../assets/image 10.png';

import styled from 'styled-components';

import './Games.css';
import HeaderHome from '../../Components/HeaderHome/HeaderHome';
import Separador from '../../Components/Separador/Separador';

const Title = styled.h1`
font-family: 'Chivo', sans-serif;
`
function Games() {

  document.title = "GreenConnect | Games";

  const games = [
    {
      title: 'Quiz da Sustentabilidade',
      description: '',
      image: game1Image,
      link: 'https://wordwall.net/pt/resource/58863918/sustentabilidade/quiz-da-sustentabilidade-',
    },
    {
      title: 'Labirinto Sustentável',
      description: '',
      image: game2Image,
      link: 'https://wordwall.net/pt/resource/29040087/jogo-sustentabilidade',
    },
    {
      title: 'Jogo da Memória',
      description: '',
      image: game3Image,
      link: 'https://wordwall.net/pt/resource/58867178/sustentabilidade/jogo-sustentabilidade',
    },
    {
      title: 'Abra a Caixa',
      description: '',
      image: game4Image,
      link: 'https://wordwall.net/pt/resource/37413229/jogo-abra-a-caixa-sustentabilidade',
    },
    {
      title: 'Questionário Sustentável',
      description: '',
      image: game5Image,
      link: 'https://wordwall.net/pt/resource/59310733/jogo-sustentabilidade',
    }
  ]

  return (
    <>
      <HeaderHome />
      <div className="Games">
        <div className="games-box">
          <div className='line'></div>
          <Title>Games</Title>
          <div className="game-list">
            {games.map((game, index) => (
              <a key={index} href={game.link} target='_blank' >
                <GameCard game={game} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Games;