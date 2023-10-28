import React from "react";

//Importe de estilização
import './Pitch.css';
import Header from "../../Components/Header/Header";
import imgLogo from "../../assets/logo.png"
import imgInt from "../../assets/Interacao.png"
import imgSobre from "../../assets/broto 1.png"
import imgInf1 from "../../assets/trofeu 1.png"
import imgInf2 from "../../assets/dia-mundial-do-livro 1.png"
import imgInf3 from "../../assets/certificado 1.png"
import imgInf4 from "../../assets/arvore 1.png"


import Separador from "../../Components/Separador/Separador"
import { useNavigate } from "react-router-dom";

function Pitch() {
    
    document.title = "GreenConnect";

    const navigate = useNavigate();

    const _youtubelink = () => {
        window.open('https://www.youtube.com/embed/-BckONx1bLw');
    }

    return (
        <>
            <Header />
            <div className="pitch-paralax">
            </div>
            <div className="pitch-container">
                <div className="pitch-info">
                    <div className="pitch-info-login">
                        <h1>Schneider GreenConnect: Transformando a Sustentabilidade em Ação</h1>
                        <h2>Schneider GreenConnect é mais do que apenas uma plataforma, é a concretização do compromisso da Schneider Electric com um futuro mais sustentável.</h2>
                        <h2>Uma inovadora iniciativa digital projetada para integrar e promover a sustentabilidade em todos os aspectos da empresa. Oferecendo aos funcionários uma variedade de conteúdos educacionais, desafios motivacionais e oportunidades de voluntariado relacionados à sustentabilidade.</h2>
                        <button type="submit" class="btn btn-primary" onClick={() => navigate('/login')}>LOGIN</button>
                    </div>
                    <div className="pitch-info-logo">
                        <img src={imgLogo} alt="" width='auto' height='auto'/>
                    </div>
                </div>
                <div className="pitch-info2">
                    <div className="pitch-info2-img">
                        <img src={imgInf1} alt="" width='200px' height='200px'/>
                        <h4>Educação em Sustentabilidade</h4>
                    </div>
                    <div className="pitch-info2-img">
                        <img src={imgInf2} alt="" width='200px' height='200px'/>
                        <h4>Desafios Motivacionais</h4>
                    </div>
                    <div className="pitch-info2-img">
                        <img src={imgInf3} alt="" width='200px' height='200px'/>
                        <h4>Reconhecimento por Ações Sustentáveis</h4>
                    </div>
                    <div className="pitch-info2-img">
                        <img src={imgInf4} alt="" width='200px' height='200px'/>
                        <h4>Oportunidades de Voluntariado Ambiental</h4>
                    </div>
                </div>
                <div className="pitch-info3">
                    <div className="pitch-info3-img">
                        <img src={imgInt} alt="" width='673px' height='463px'/>
                    </div>
                    <div className="pitch-info3-text">
                        <h3>Conecte-se, colabore e impulsione iniciativas sustentáveis em nossa rede global.</h3>
                    </div>
                </div>
                <div className="pitch-video">
                    <Separador
                        titulo={"Confira o Video Pitch"}
                    />
                    <iframe width="887" height="499" src="https://www.youtube.com/embed/okNnuVmdNFs" title="Schneider GreenConnect" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <button type="submit" class="btn btn-primary" onClick={() => _youtubelink()}>VIDEO PICTH</button>
                </div>
                <div className="pitch-sobre">
                    <div className="pitch-sobre-projeto">
                    <Separador
                        titulo={"Conheça mais sobre o Projeto"}
                    />
                    <button type="submit" class="btn btn-primary" onClick={() => navigate('/sobre')}>SOBRE O PROJETO</button>
                    </div>
                    <div className="pitch-sobre-img">
                        <img src={imgSobre} alt="" width='60%' height='auto'/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Pitch;