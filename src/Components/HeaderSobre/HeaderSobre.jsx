import './HeaderSobre.css';
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const HeaderSobre = () => {
    
    const navigate = useNavigate();

    return (
        <div className='header-sobre'>
            <button onClick={() => navigate('/')}>Voltar</button>
            <img src={Logo} alt="" className='logo'/>
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    );
}

export default HeaderSobre;