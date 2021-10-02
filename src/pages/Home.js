import React from 'react';

import { Nav } from '../components/Nav';
import Carousel from '../components/Carousel';
import { Banners } from '../components/Banners';
import { Products } from '../components/Products';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <>
      <Nav />
      <Carousel />
      <Banners />
      <Products />      
      <Footer />      
    </>
  )
}
