import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Mensagem.css';
import { faComment, faShare, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';

const Mensagem = ({nome, mensagem, foto}) => {
    return (
        <div className='comentario'>
            <div className='superior'>
                <FontAwesomeIcon icon={faUser} className='icone1' />
                <label className='dark'>{nome}</label>
            </div>
            <p>
                {mensagem}
            </p>
            <div className='inferior'>
                <div className='curtir'>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <label className='dark'>Curtir</label>
                </div>
                <div className='comentar'>
                    <FontAwesomeIcon icon={faComment} />
                    <label className='dark'>Comentar</label>
                </div>
                <div className='compartilhar'>
                    <FontAwesomeIcon icon={faShare} />
                    <label className='dark'>Comentar</label>
                </div>
            </div>
            <div className='imagem'>
                <img src={foto} alt="" />
            </div>
        </div>
    );
}

export default Mensagem;