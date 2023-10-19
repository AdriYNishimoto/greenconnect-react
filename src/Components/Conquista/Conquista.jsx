import './Conquista.css';

const Conquista = ({imagem, descricao}) => {
    return(
        <div className='conquista-container'>
            <img src={imagem} alt="" />
            <p>{descricao}</p>
        </div>
    );
}

export default Conquista;