import './ConteudoButton.css';

const Conteudo = ({imagem, titulo}) => {
    return(
        <div className='conteudo'>
            <img src={imagem} alt="" />
            <label>{titulo}</label>
        </div>
    );
}

export default Conteudo;