import HeaderHome from '../../Components/HeaderHome/HeaderHome';
import './Profile.css';
import banner from '../../assets/image 16.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import Separador from '../../Components/Separador/Separador';
import Mensagem from '../../Components/Mensagens/Mensagem';
import Conquista from '../../Components/Conquista/Conquista';
import conquista1 from '../../assets/green_leaf_recycle_sign 1.png';
import conquista2 from '../../assets/vecteezy_game-rank-icons-level-badges-hexagon-tags-set_16265340-removebg-preview (2) 1.png';
import conquista3 from '../../assets/vecteezy_game-wooden-badges-with-level-number_20596099 1.png';

function Profile() {

    const conquista = [
        {
            id: 1,
            imagem: conquista1,
            desc: "3x Sustentalover"
        },
        {
            id: 2,
            imagem: conquista2,
            desc: "Diversidade Ouro III"
        },
        {
            id: 3,
            imagem: conquista3,
            desc: "Distintivo de Nível 10"
        },
    ]

    return (
        <>
            <HeaderHome />
            <div className='profile-container'>
                <div className='profile-banner'>
                    <img src={banner} alt="" />
                </div>
                <div className='profile-user'>
                    <div className='user-left'>
                        <FontAwesomeIcon icon={faUser} className='profile-icon' />
                        <div class="info">
                            <div className='usuario'>
                                <label className='dark name'>José Vinícius</label>
                                <label className='dark nivel'>NIVEL 10</label>
                            </div>
                            <label className='dark'>Experiência Sustentavel</label>
                            <label class="points dark">21100/44100</label>
                            <progress value="70" max="100"></progress>
                        </div>
                    </div>
                    <span className='edit'>
                        <FontAwesomeIcon icon={faPen} />
                        <label className='white'>Editar Perfil</label>
                    </span>
                </div>
                <div className='profile-content'>
                    <div className='conquista'>
                        <Separador titulo={"Minhs Conquistas"} />
                        <div className='grid'>
                            {
                                conquista.map((consquistas, index) => (
                                    <Conquista
                                        imagem={consquistas.imagem}
                                        descricao={consquistas.desc}
                                        key={index}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className='publicacao'>
                        <Mensagem
                            mensagem={`Algumas frases para vocês:“A base de toda a sustentabilidade 
                        é o desenvolvimento humano que deve contemplar um melhor relacionamento do homem com os 
                        semelhantes e a natureza.” -Nagib Anderáos Neto “Sustentabilidade é conseguir 
                        possibilitar a vida, o crescimento e as relações naturais de maneira justa, diversa, 
                        viável e ecológica.” -Percio Campos`}

                            nome={"José Vinícius"}
                        />
                        <Mensagem
                            mensagem={`
                            Seja menos preconceito, seja mais amor no peito 
                            Seja amor, seja muito amor. 
                            E se mesmo assim for difícil ser 
                            Não precisa ser perfeito 
                            Se não der pra ser amor, seja pelo menos respeito.
                            
                            Há quem nasceu pra julgar 
                            E há quem nasceu pra amar 
                            E é tão difícil entender em qual lado a gente está 
                            E o lado certo é amar! 
                            
                            Amar para respeitar 
                            Amar para tolerar 
                            Amar para compreender, 
                            Que ninguém tem o dever de ser igual a você! 
                            
                            O amor meu povo, 
                            O amor é a própria cura, remédio pra qualquer mal. 
                            Cura o amado e quem ama 
                            O diferente e o igual 
                            Talvez seja essa a verdade 
                            Que é pela anormalidade que todo amor é normal. 
                            
                            Não é estranho ser negro, estranho é ser racista. 
                            Não é estranho ser pobre, estranho é ser elitista. 
                            O índio não é estranho, estranho é o desmatamento. 
                            Estranho é ser rico em grana, e pobre de sentimento. 
                            Não é estranho ser gay, estranho é ser homofóbico. 
                            Nem meu sotaque é estranho, estranho é ser xenofóbico. 
                            
                            Meu corpo não é estranho, estranha é a escravidão, 
                            que aprisiona seus olhos nas grades de um padrão. 
                            
                            Minha fé não é estranha, estranha é a acusação, 
                            que acusa inclusive quem não tem religião. 
                            
                            O mundo sim, é estranho, com tanta diversidade 
                            Ainda não aprendeu a viver em igualdade. 
                            Entender que nós estamos percorrendo a mesma estrada. 
                            Pretos, brancos, coloridos 
                            Em uma só caminhada 
                            Não carece divisão por raça, religião 
                            Nem por sotaque 
                            Oxente! 
                            
                            Sejam homem ou mulher
                             Você só é o que é 
                            Por também ser diferente. 
                            
                            Por isso minha poesia, que sai aqui do meu peito 
                            Diz aqui que a diferença nunca foi nenhum defeito. 
                            Eu reforço esse clamor: 
                            Se não der pra ser amor, que seja ao menos RESPEITO!
                            `}
                            nome={"José Vinícius"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;