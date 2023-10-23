import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Contato from '../../Components/Contato/Contato';
import HeaderHome from '../../Components/HeaderHome/HeaderHome';
import Separador from '../../Components/Separador/Separador';
import usuario from '../../Lista/ArrayUsuario';
import './Rede.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Rede() {
    return (
        <>
            <HeaderHome />
            <div className='rede-container'>
                <div className='rede-subcontainer'>
                    <Separador titulo={"Minhas Redes"} />
                    <div className='rede-contatos'>
                        {
                            usuario.map((usuarios, index) => (
                                <Contato
                                    nome={usuarios.nome}
                                    nivel={usuarios.nivel}
                                />
                            ))
                        }
                    </div>
                    <div className='rede-plus'>
                        <div className="conexao">
                            <label className="dark">MAIS CONEXÕES</label>
                            <FontAwesomeIcon icon={faPlus} className="plus" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rede;