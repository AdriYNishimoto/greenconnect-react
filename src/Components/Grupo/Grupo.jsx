import imagem1 from '../../assets/image 1.png';
import './Grupo.css';

const Grupo = ({titulo, imagem}) => {
    return (
        <div className='grupo'>
            <img src={imagem} alt="" />
            <label>{titulo}</label>
        </div>
    );
}

export default Grupo;