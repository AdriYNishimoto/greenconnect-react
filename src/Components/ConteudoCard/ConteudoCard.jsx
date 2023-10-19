import React from 'react';

import './ConteudoCard.css'

const ConteudoCard = ({ imagem, descricao }) => {
  return (
    <div className="conteudo-card">
        <img className='conteudo-imagem' src={imagem} alt="" />
        <div className='line-card'></div>
        <p className='title-card'>{descricao}</p>
    </div>
  );
};

export default ConteudoCard;
