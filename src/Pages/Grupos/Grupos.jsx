import './Grupos.css';
import HeaderHome from '../../Components/HeaderHome/HeaderHome';
import Separador from '../../Components/Separador/Separador';
import grupos from '../../Lista/ArrayGrupos';
import Grupo from '../../Components/Grupo/Grupo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Grupos() {

    document.title = "GreenConnect | Grupos";

    return (
        <>
            <HeaderHome />
            <div className='grupos-container'>
                <div className='grupos-subcontainer'>
                    <Separador titulo={"Meus Grupos"} />
                    <div className='grupos-botoes'>
                        {
                            grupos.map((grupo, index) => (
                                <Grupo
                                    titulo={grupo.titulo}
                                    imagem={grupo.imagem}
                                />
                            ))
                        }
                    </div>
                    <div className='grupo-plus'>
                        <div className="conexao">
                            <label className="dark">MAIS GRUPOS</label>
                            <FontAwesomeIcon icon={faPlus} className="plus" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Grupos;