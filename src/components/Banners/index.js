import React from 'react';
import './Banners.scss';

import zelda from '../../assets/img/zelda_banner.jpg';
import sekiro from '../../assets/img/sekiro_banner.jpg';
import { Link } from 'react-router-dom';

export const Banners = () => {
  return (
    <div className="banners">
      <div className="banners__container">
        <div className="banners__left">
          <Link to="/" className="banners__link">
            <img src={zelda} alt='Zelda' />
            <div className="banners__info">
              <p>The Legend of Zelda - Breath of the wild</p>
              <span className="span__left"></span>
            </div>
          </Link>
        </div>
        <div className="banners__right">
          <Link to="/" className="banners__link">
            <img src={sekiro} alt='Sekiro' />
            <div className="banners__info">
              <p>SEKIRO - Shadows die twice</p>
              <span className="span__right"></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
