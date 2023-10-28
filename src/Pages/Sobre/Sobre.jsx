import HeaderSobre from '../../Components/HeaderSobre/HeaderSobre';
import Separador from '../../Components/Separador/Separador';
import './Sobre.css'

function Sobre() {

  document.title = 'GreenConnect | Sobre'

  return (
    <>
    <HeaderSobre/>
      <div className="Sobre">
        <div className="Sobre-body">
          <div className='Sobre-body-container'>
            <div className='Sobre-body-container-margin'>
              <div className='sobreProjeto'>
                <Separador
                  titulo={"Sobre o Projeto"}
                />
                <h2>O projeto Schneider GreenConnect é uma iniciativa dos alunos da FIAP que busca engajar os funcionários da Schneider Electric na jornada da sustentabilidade. Através da plataforma,a Schneider Electric proporciona um ambiente onde seus colaboradores podem aprender,interagir e serem recompensados por suas contribuições ao meio ambiente e à sustentabilidade.</h2>
                <div className='sobreProjeto-list'>
                  <div className='sobreProjeto-list-block'>
                    <ol>
                      <li><strong>Educação Sustentável</strong>: A plataforma fornece uma variedade de conteúdos educacionais, desdeartigos, vídeos, até webinars, centrados em práticas sustentáveis, tecnologias de energia renovável, e eficiênciaenergética.</li>
                      <li><strong>Desafios e Gamificação</strong>: Funcionários são incentivados a participar de desafios relacionados à sustentabilidade, permitindo que apliquem o que aprenderam e testem novas ideias. A gamificação assegura que o aprendizado e o engajamento sejam divertidos e recompensadores.</li>
                      <li><strong>Reconhecimento e Recompensas</strong>: Aqueles que se destacam em suas ações sustentáveis e contribuições para a plataforma recebem reconhecimento e prêmios, motivando ainda mais a participação ativa.</li>
                      <li><strong>Conexão e Comunidade</strong>: GreenConnect também serve como uma rede social corporativa, permitindo que funcionários se conectem com colegas que compartilham interesses similares em sustentabilidade, formando grupos, trocando ideias e colaborando em projetos.</li>
                      <li><strong>Oportunidades de Voluntariado</strong>: A plataforma também introduz oportunidades de voluntariado ambiental, encorajando os funcionários a agir não apenas dentro da empresa, mas também em suas comunidades.</li>
                      <li><strong>Desenvolvimento Contínuo</strong>: Com um compromisso de manter-se atualizado e fornecer as melhores ferramentas, os desenvolvedores do projeto planeja continuar aprimorando o GreenConnect, adicionando novos recursos e conteúdos conforme a evolução das necessidades e interesses dos usuários.</li>
                    </ol>
                  </div>
                </div>
                <h2>Em suma,o projeto Schneider GreenConnect não é apenas uma plataforma digital,mas uma declaração da Schneider  Electric sobre a importância da sustentabilidade em seus negócios e sua visão para um futuro mais sustentável.</h2>
              </div>
              <div className='sobreDesenvolvimento'>
                <Separador
                  titulo={"Sobre o Desenvolvimento"}
                />
                <h2>A plataforma foi desenvolvida em HTML, CSS e JavaScript. Conhecimentos nos quais foram adquiridos pelos desenvolvedores nas fases 1, 2, 3 e 4 na plataforma FIAP ON. Ademais, o projeto tem um grande pontencial para pivotar em um backend mais robusto e escalável nos próximos passos, deixando assim, a plataforma mais completa e interativa</h2>
              </div>
              <div className='equipe'>
                <Separador
                  titulo={"Conheça a equipe de Desenvolvedores"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
