import './Modal.css';
import Logo from '../../assets/logo.png';

import { motion } from 'framer-motion';


const Modal = ({ isOpen, closeModal, children }) => {

    if (!isOpen) return false;

    const modalClass = isOpen ? 'modal active' : 'modal';

    return (
        <motion.div
            className={modalClass}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
        >
            <div className="modal-content">
                <img src={Logo} alt="" />
                <p>
                    {children}
                </p>
                <button onClick={closeModal}>Fechar</button>
            </div>
        </motion.div>
    );
}

export default Modal;