import HeaderHome from '../../Components/HeaderHome/HeaderHome';
import Separador from '../../Components/Separador/Separador';
import './Conteudo.css';

import ConteudoCard from '../../Components/ConteudoCard/ConteudoCard';
import conteudos from '../../Lista/ArrayConteudo';
import styled from 'styled-components';

const Title = styled.h1`
font-family: 'Chivo', sans-serif;
`

function Conteudo() {
    return (
        <>
            <HeaderHome />
            <div className='conteudo-container'>
                <Separador
                    titulo={"Conteúdos"}
                />
                <div className="conteudo-list">
                    {conteudos.map((content, index) => (
                        <ConteudoCard key={index} imagem={content.imagem} descricao={content.titulo} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Conteudo;