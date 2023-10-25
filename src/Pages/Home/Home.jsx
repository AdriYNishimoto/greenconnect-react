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
import usuario from "../../Lista/ArrayUsuario";
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

    return (
        <>
            <HeaderHome />
            <div className="homeContainer">
                <div className="home-left">
                    <UserHome />
                    <Separador titulo={"Minha Rede"} />
                    {
                        usuario.map((usuarios, index) => (
                            <Contato
                                nome={usuarios.nome}
                                nivel={usuarios.nivel}
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
                        usuario.map((usuarios, index) => (
                            <div className="ranking">
                                <label className="dark">{usuarios.id}º</label>
                                <Contato
                                    nome={usuarios.nome}
                                    nivel={usuarios.nivel}
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