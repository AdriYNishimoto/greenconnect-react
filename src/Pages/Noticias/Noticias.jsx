import './Noticias.css';
import HeaderHome from '../../Components/HeaderHome/HeaderHome';
import Separador from '../../Components/Separador/Separador';
import imagem from '../../assets/image 5.png';

function Noticias(){
    return(
        <>
            <HeaderHome/>
            <div className='noticia-container'>
                <div className='noticia-subcontainer'>
                    <Separador titulo={"Notícias"}/>
                    <div className='noticia'>
                        <img src={imagem} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Noticias;