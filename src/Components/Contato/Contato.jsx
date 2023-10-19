import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contato.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Contato = ({nome, nivel}) => {
    return (
        <div class="contact">
            <FontAwesomeIcon icon={faUser} className='contato-icon'/>
            <label className='dark'>{nome}</label>
            <label class="nivel white">NIVEL {nivel}</label>
        </div>
    );
}

export default Contato;