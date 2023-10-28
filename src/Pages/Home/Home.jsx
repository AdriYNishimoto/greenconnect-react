import React, { useState } from "react";

//Importe de Estilos
import './Home.css';

//Importe de Icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faArrowDown, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

//Importe de Componentes
import UserHome from "../../Components/UserHome/UserHome";
import Contato from "../../Components/Contato/Contato";
import Grupo from "../../Components/Grupo/Grupo";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import Separador from "../../Components/Separador/Separador";
import Conteudo from "../../Components/ConteudoButton/ConteudoButton";

//Importe de Lista de usuarios
import grupos from "../../Lista/ArrayGrupos";
import conteudos from "../../Lista/ArrayConteudo";

//Importe de imagens
import banner from '../../assets/image 4.png';
import Mensagem from "../../Components/Mensagens/Mensagem";
import mensagens from "../../Lista/ArrayMensagem";
import { layer } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from "react";

export default function Home() {

    document.title = "GreenConnect | Home";

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7252/api/usuario', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setUsuarios(json))
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <HeaderHome />
            <div className="homeContainer">
                <div className="home-left">
                    <UserHome />
                    <Separador titulo={"Minha Rede"} />
                    {
                        usuarios.map((usuario, index) => (
                            <Contato
                                nome={usuario.nome}
                                nivel={usuario.nivel}
                                key={index}
                            />
                        ))
                    }
                    <FontAwesomeIcon icon={faAnglesDown} className="arrow" />
                    <div className="conexao">
                        <label className="dark">MAIS CONEXÕES</label>
                        <FontAwesomeIcon icon={faPlus} className="plus" />
                    </div>
                    <Separador titulo={"Grupos"} />
                    {
                        grupos.map((grupo, index) => (
                            <Grupo
                                titulo={grupo.titulo}
                                imagem={grupo.imagem}
                                key={index}
                            />
                        ))
                    }
                    <Separador titulo={"Terminar Conteúdos"} />
                    {
                        conteudos.map((conteudo, index) => (
                            <Conteudo
                                titulo={conteudo.titulo}
                                imagem={conteudo.imagem}
                                key={index}
                            />
                        ))
                    }
                </div>
                <div className="home-center">
                    <div className="banner">
                        <img src={banner} alt="" />
                    </div>
                    <div className="message">
                        <FontAwesomeIcon icon={faUser} className="message-icon" />
                        <input type="text" placeholder="Compartilhe seus conhecimentos sustentáveis" />
                    </div>
                    {
                        mensagens.map((mensagem, index) => (
                            <Mensagem nome={mensagem.usuario} mensagem={mensagem.mensagem} foto={mensagem.imagem} key={index} />
                        ))
                    }
                </div>
                <div className="home-right">
                    <Separador titulo={"Ranking da Semana"} />
                    {
                        usuarios.map((usuario, index) => (
                            <div className="ranking">
                                <label className="dark">{usuario.id}º</label>
                                <Contato
                                    nome={usuario.nome}
                                    nivel={usuario.id}
                                    key={index}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}