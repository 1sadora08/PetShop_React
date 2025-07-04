import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Banner01 from '../imagens/banner.jpg';
import Banner02 from '../imagens/Banner-01.jpg';
import Banner03 from '../imagens/banho-e-tosa.png';

function Banner() {
  return (

    <Carousel>
      <Carousel.Item className='imgbanner' >
            <img src={ Banner01 } alt='Banner1'/>
      </Carousel.Item>

      <Carousel.Item className='imgbanner'>
          <img src={ Banner02 } alt='Banner2'/>
      </Carousel.Item>

      <Carousel.Item className='imgbanner'>
          <img src={ Banner03 } alt='Banner3'/>
      </Carousel.Item>
    </Carousel> 

)
}

export default Banner