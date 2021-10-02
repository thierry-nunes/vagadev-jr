import React from 'react';
import './Footer.scss';
import logo from '../../assets/img/logo_footer.png';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src={logo} alt='N1 Rush Logo' />
      </div>
      <div className="footer__right">
        <p>Agência N1 - Todos os direitos reservados</p>
      </div>
    </div>
  )
}
