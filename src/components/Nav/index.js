import React, { useState } from 'react';
import './Nav.scss';

import {BiMenuAltLeft} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

import {IoPaperPlaneOutline} from 'react-icons/io5';
import {HiOutlineSearch} from 'react-icons/hi';
import {BiShoppingBag} from 'react-icons/bi';
import { Menu } from '../../components/Menu/index.js';

export const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <header className="nav">
      <nav className="nav__container">
        <div className="left__content">
          <ul className="dropdown__list">
            <li
              onClick={() => setIsClicked(true)} 
              className="dropdown__hamburguer"
            >
              <span className={`menu__icon ${true === isClicked ? 'menu__icon--on' : ''}`}>
                <BiMenuAltLeft />
              </span>                            

              <div                 
                className='dropdown__hidden'
              >
                <ul className="hidden__list">
                  <span className="hidden__title">Luta</span>              
                  <li className="hidden__item"><Link to='/'>Mortal Kombat</Link></li>
                  <li className="hidden__item"><Link to='/'>Smash Bros</Link></li>
                  <li className="hidden__item"><Link to='/'>Killer Instict</Link></li>
                  <li className="hidden__item"><Link to='/'>DBZ Kakarot</Link></li>
                  <span className="hidden__border"></span>
                </ul>

                <ul className="hidden__list">
                  <span className="hidden__title">Ação / Aventura</span>              
                  <li className="hidden__item"><Link to='/'>GTA V</Link></li>
                  <li className="hidden__item"><Link to='/'>Tomb Raider</Link></li>
                  <li className="hidden__item"><Link to='/'>HALO</Link></li>
                  <li className="hidden__item"><Link to='/'>Call of Duty</Link></li>
                  <span className="hidden__border"></span>
                </ul>

                <ul className="hidden__list">
                  <span className="hidden__title">Corrida</span>              
                  <li className="hidden__item"><Link to='/'>NEED For SPEED</Link></li>
                  <li className="hidden__item"><Link to='/'>Forza Horizon</Link></li>      
                </ul>
              </div>

            </li>
          </ul>
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
      {isClicked ? <Menu onClose={() => setIsClicked(false)} /> : null}
    </header>
  )
}
