import react, { useRef, useState } from 'react';
import './Carousel.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';

import img1 from '../../assets/img/mortal_kombat_banner.jpg';
import img2 from '../../assets/img/rdr2_banner.jpg';

const Carousel = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(1);

  const images = [
    {
      name: img1,
      alt: 'Mortal Kombat',        
    },
    {        
      name: img2,
      alt: 'Red Dead Redemption 2',        
    }
  ];

  return (
    <div className="carousel">
      <div className="carousel__controller">
        <div className="carousel__title">
          <p>MORTAL KOMBAT</p>
          <span></span>
        </div>
        <div className="carousel__btn">
          <p className="carousel__number">
            {index} / {images.length}
          </p>
          <div className="carousel__arrow">
            <button 
              className="arrow__left"
              onClick={() => {sliderRef.current.slickPrev(); setIndex(1);}} 
            >
              <RiArrowLeftSLine />
            </button>
            <button 
              className="arrow__right"
              onClick={() => {sliderRef.current.slickNext(); setIndex(2);}}              
            >
              <RiArrowRightSLine />
            </button>
          </div>            
        </div>
      </div>

      <div className="carousel__info">
        <div className="info__title">
          MORTAL KOMBAT
        </div>
        <div className="info__value">
          R$ 299
          <span>,99</span>
        </div>
        <div className="info__description">
          <p>
            Mortal Kombat X combina uma apresentação cinemática
            única com uma jogabilidade totalmente nova. Os jogadores
            podem escolher pela primeira vez diversas variantes de
            cada personagem, afetando tanto a estratégia como o estilo de luta.
          </p>
        </div>
      </div>

      <div className="carousel__slider">        
        <Slider
          ref={sliderRef}
          slidesToShow={1}
          slidesToScroll={1}
          infinite= {false}
          dots={false}
          speed={300}          
        >
          {images.map((image, index) => {
            return (
              <div 
                key={index} 
                className="carousel__banner"
              >
                <img src={image.name} alt={image.alt} />
              </div>
            )
          })}
        </Slider>
      </div>

    </div>            
  );
}

export default Carousel;
