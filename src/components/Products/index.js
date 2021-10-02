import React, { useRef, useState } from 'react';
import { data } from './data.js';
import './Products.scss';


import {Modal} from '../Modal/index.js';

import {CgMenuGridR} from 'react-icons/cg';
import mario from '../../assets/img/mario.png';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const Products = () => {  
  const [isClicked, setIsClicked] = useState();
  const arrowRef = useRef();
  
  const changeButtonText = (target, idx, str) => {
    target.textContent = str;
    setIsClicked(idx);
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="products">
      <div className="products__title">
        <span className="top__icon"><CgMenuGridR /></span>
        <p className="top__title">Produtos em destaque</p>
      </div>
      
      <div className="products__card">        
        {data.map((product, index) => {
          return (
            <div 
              className="products__info" 
              key={index}
            >
              <img className="products__image" src={product.img} alt={product.title} />
              <div className="products__description">
                <div className="description__content">
                  <p className="description__title">{product.title}</p>
                  <p className="description__price">{product.price}</p>
                </div>
                <div className="description__btn">
                  <button 
                    onClick={(e) => {changeButtonText(e.target, index, 'COMPRADO!') ; setIsModalVisible(true)} } 
                    className={`btn__buy ${index === isClicked ? 'btn__buy--active' : ''}`}
                  >
                    Comprar                    
                  </button>
                  <img src={mario} alt='Mario' className={`mario__img ${index === isClicked ? 'mario__img--active' : ''}`} />                                    
                </div>
              </div>
            </div>
          )
        })}        
      </div>

      <div className="products__card--on">
        <div className="carousel__arrows">
          <button 
            onClick={() => {arrowRef.current.slickPrev()}}
            className="arrow__prev"
          >
            <span className="arrow__icon">
              <IoIosArrowBack />
            </span>
          </button>
          <button 
            onClick={() => {arrowRef.current.slickNext()}}
            className="arrow__next"
          >
            <span className="arrow__icon">
              <IoIosArrowForward />
            </span>
          </button>
        </div>
        <Slider
          ref={arrowRef}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          dots={false}
          speed={300}
        >
          {data.map((product, index) => {
            return (
              <div 
                className="products__info" 
                key={index}
              >
                <img className="products__image" src={product.img} alt={product.title} />
                <div className="products__description">
                  <div className="description__content">
                    <p className="description__title">{product.title}</p>
                    <p className="description__price">{product.price}</p>
                  </div>
                  <div className="description__btn">
                    <button 
                      onClick={(e) => {changeButtonText(e.target, index, 'COMPRADO!') ; setIsModalVisible(true)} } 
                      className={`btn__buy ${index === isClicked ? 'btn__buy--active' : ''}`}
                    >
                      Comprar                    
                    </button>
                    <img src={mario} alt='Mario' className={`mario__img ${index === isClicked ? 'mario__img--active' : ''}`} />                                    
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
    </div>
  )
}
