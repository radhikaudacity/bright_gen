import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './CarouselHeader.css';

import {
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
} from '../images/index.js';

const CarouselHeader = () => {
  return (
    <div className='App'>
      <AliceCarousel autoPlay autoPlayInterval='3000' infinite>
        <img src={slider1} className='sliderimg' alt='' />
        <img src={slider2} className='sliderimg' alt='' />
        <img src={slider3} className='sliderimg' alt='' />
        <img src={slider4} className='sliderimg' alt='' />
        <img src={slider5} className='sliderimg' alt='' />
      </AliceCarousel>
    </div>
  );
};
export default CarouselHeader;
