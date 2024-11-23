import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import animal001 from '../../assets/assetss/maountain.jpeg';
import animal002 from '../../assets/assetss/pascal-meier-UYiesSO4FiM-unsplash.jpg';
import animal003 from '../../assets/assetss/bgslide.jpg';

function ImageCarousel() {
  const caption = (
    <Carousel.Caption className='carousel-caption-centered d-flex justify-content-center align-items-center'>
      <div className='text-center'>
        <h1 className='text-white py-5'>Environmental Conservation</h1>
        <h2 className='text-white py-1' style={{backgroundColor:'black', opacity:'0.5'}}>Preserving ecosystems, enhancing sustainability</h2>
        <h2 className='text-white py-1' style={{backgroundColor:'black', opacity:'0.5'}}>and fostering biodiversity for generations to come.</h2>
        <br/>
        <Link to="/services">
        <button style={{backgroundColor:'#558a54', borderColor:'#558a54'}} className='m-3 btn btn-lg animate__animated animate__pulse animate__infinite'>
          View more
          </button>
        </Link>
      </div>
    </Carousel.Caption>
  );
  return (
    <Carousel fade controls={false} interval={3000} indicators={false}>
      <Carousel.Item>
        <img
          className='d-block w-100 carousel-img'
          src={animal001}
          alt='First slide'
        />
        {caption}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100 carousel-img'
          src={animal002}
          alt='Second slide'
        />
         {caption}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className='d-block w-100 carousel-img'
          src={animal003}
          alt='Third slide'
        />
          {caption}
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
