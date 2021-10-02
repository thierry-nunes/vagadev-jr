import React from 'react';
import './Menu.scss';

import logo from '../../assets/img/logo.png';

import { IoClose } from 'react-icons/io5';
import {IoPaperPlaneOutline} from 'react-icons/io5';
import {HiOutlineSearch} from 'react-icons/hi';
import {BiShoppingBag} from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Menu = ({ onClose = () => {} }) => {
  return (
    <div className="menu">
      <div className="menu__hamburguer">
        
        <nav className="menu__nav">
          <div className="left__content">
            <button 
              onClick={onClose}
              className="menu__btn"
            >
              <span className="close__icon">
                <IoClose />
              </span>
            </button>

            <div className="nav__logo">
              <Link to='/'>
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </div>

          <div className="right__content">
            <div className="content__link">            
              <Link to='/'>
                <IoPaperPlaneOutline />
                <span className="hidden__info">Contato</span>
              </Link>
            </div>
            <div className="content__link">            
              <Link to='/'>
                <HiOutlineSearch />
                <span className="hidden__info">Buscar</span>
              </Link>
            </div>
            <div className="content__link content__link--bag">            
              <Link to='/'>
                <BiShoppingBag />
                <span className="hidden__info hidden__info--active">2</span>
              </Link>
            </div>
          </div>
        </nav>
        
        <div className="menu__items">
          <section className="menu__list">
            <span className="list__title">
              Luta
            </span>
            <Link to='/' className="list__item">Mortal Kombat</Link>
            <Link to='/' className="list__item">Smash Bros</Link>
            <Link to='/' className="list__item">Killer Instict</Link>
            <Link to='/' className="list__item">DBZ Kakarot</Link>
            <span className="list__border"></span>
          </section>

          <section className="menu__list">
            <span className="list__title">
              Ação / Aventura
            </span>
            <Link to='/' className="list__item">GTA V</Link>
            <Link to='/' className="list__item">Tomb Raider</Link>
            <Link to='/' className="list__item">HALO</Link>
            <Link to='/' className="list__item">Call of Duty</Link>
            <span className="list__border"></span>
          </section>

          <section className="menu__list">
            <span className="list__title">
              Corrida
            </span>
            <Link to='/' className="list__item">NEED For SPEED</Link>
            <Link to='/' className="list__item">Forza Horizon</Link>            
          </section>
        </div>
      </div>
    </div>
  )
}
