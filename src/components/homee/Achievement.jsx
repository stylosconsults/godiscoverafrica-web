import React, { useEffect, useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import animal001 from '../../assets/assetss/planning.jpg';

const AchievementComponent = () => {
  const [onScreen, setOnScreen] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (divRef.current) {
      observer.observe(divRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`w-100 px-5 py-5 text-light ${onScreen ? 'animate' : ''}`}
      style={{ backgroundColor: '#1E425E' }}
      ref={divRef}
    >
      <Row className='py-5'>
        <Col sm={12} md={6} className='text-col'>
          <h1 className='text-light font-weight-bold text-center py-3 fade-in-title'>
            Achievements
          </h1>
          <h5 className='text-fade px-18 text-light fade-in-text'>
            <b style={{ fontSize: '30px' }}>5,000+ hectares restored:</b> With
            the guidance of our expert team, including our seasoned
            Environmental Conservation Specialist, we’ve supported clients in
            regenerating vital ecosystems, fostering biodiversity, and securing
            environmental resilience.
          </h5>
          <br />
          <h5 className='text-fade px-18 text-light fade-in-text'>
            <b style={{ fontSize: '30px' }}>
              1 million tons of CO2 emissions reduced:
            </b>{' '}
            Our team of Climate Change Experts has helped businesses implement
            low-carbon strategies, contributing significantly to global climate
            goals.
          </h5>
          <br />
          <h5 className='text-fade px-18 text-light fade-in-text'>
            <b style={{ fontSize: '30px' }}> 30+ successful projects:</b> From
            Carbon Neutrality Consultations to Sustainable Land Management, our
            team has consistently driven positive environmental and business
            impacts across diverse industries.
          </h5>
        </Col>
        <Col sm={12} md={6}>
          <img
            src={animal001}
            alt=''
            className='fade-image slide-in-right'
            height={500}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AchievementComponent;
