import React from 'react';
import './Modal.scss';

import { RiCloseCircleFill } from 'react-icons/ri';
import mario from '../../assets/img/mario.png';

export const Modal = ({ id="modal", onClose = () => {} }) => {
  
  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <div 
      id={id}
      className="modal"
      onClick={handleOutsideClick}
    >
      <div className="modal__box">
        <button 
          onClick={onClose}
          className="modal__btn"
        >
          <span className="modal__close">
            <RiCloseCircleFill />
          </span>
        </button>
        <div className="modal__title"> 
          <span></span>
          <p>Pedido realizado com sucesso!</p>
          <span></span>
        </div>
        <img src={mario} alt="Mario" className="modal__img" />
      </div>
    </div>
  )
}
