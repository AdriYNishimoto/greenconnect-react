import React from "react";

//Importe do CSS
import './Instituto.css';

//Importe Componente
import InstBox from "../../Components/InstBox/InstBox";

//Importe de imagem
import image1Inst from '../../assets/image 11.png'
import image2Inst from '../../assets/image 12.png'
import image3Inst from '../../assets/image 13.png'
import image4Inst from '../../assets/image 9 (1).png'
import image5Inst from '../../assets/image 14.png';
import Logo from "../../assets/logo.png"
import Foto2 from "../../assets/Conteudo_2.png";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import Separador from '../../Components/Separador/Separador';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Instituto() {

    //ArrayList de Usuários
    const instituto = [
        {
            id: 1,
            texto: "INSTITUTO SE NA COMUNIDADE – AÇÃO WORLD CLEAN UP DAY 2021 – JUNTOS POR HÁBITOS MAIS SUSTENTÁVEIS",
            imagem: image1Inst
        },
        {
            id: 2,
            texto: "Instituto Schneider Brasil – Mentoria para jovens em situação de vulnerabilidade social",
            imagem: image2Inst
        },
        {
            id: 3,
            texto: "Fundação Schneider Electric e a ação global Tomorrow Rising Fund",
            imagem: image3Inst
        },
        {
            id: 4,
            texto: "Fundação Schneider, ações Brasil – Competição Heart to Heart, ganhador do concurso!",
            imagem: image4Inst
        },
    ];

    document.title = "GreenConnect | Instituto";


    return (
        <>
            <HeaderHome />
            <div className='instituto-container'>
                <div className="instituto-title">
                    <Separador titulo={"Instituro Schneider"}/>
                    <h4>Conheça o Instituto Schneider e participe!</h4>
                </div>
                <div className="instituto-list">
                    {
                        instituto.map((institutos, index) => (
                            <InstBox
                                texto={institutos.texto}
                                imagem={institutos.imagem}
                                key={index}
                            />
                        ))
                    }
                </div>
                <div className="conexao">
                    <label className="dark">CONHEÇA MAIS</label>
                    <FontAwesomeIcon icon={faPlus} className="plus" />         
                </div>
            </div>
            <div className='instituto-container'>
                    <div className="instituto-title">
                        <Separador titulo={"Conheça também a Fundação Schneider Eletric"}/>
                        <h4>Apoiamos indivíduos e comunidades em todo o mundo com educação e formação, por meio de nossa rede ativa de voluntariado e parceiros locais.</h4>
                    </div>
                    <div className='instituto-cont'>
                        <div className="instituto-cont-img">
                            <img src={image5Inst} alt="" />
                        </div>
                        <div className="instituto-cont-btn">
                            <h2>
                            Fazer a ponte entre o progresso e a sustentabilidade para todos 
                            </h2>
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

export default Instituto;