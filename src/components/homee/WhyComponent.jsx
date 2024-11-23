import React, { useEffect, useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import animal001 from '../../assets/assetss/bg-work.jpg';

const WhyComponent = () => {
  const [onScreen, setOnScreen] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (divRef.current) {
      observer.observe(divRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`w-100 px-5 py-5 text-light ${onScreen ? 'animate' : ''}`}
      style={{backgroundColor:'#1E425E'}}
      ref={divRef}
    >
      <Row className='py-5'>
        <Col sm={12} md={6} className="text-col">
          <h1 className="text-light font-weight-bold text-center py-3 fade-in-title">
          Why It Matters
          </h1>
          <h4 className="text-fade px-18 text-light text-center fade-in-text">
          Conservation is essential to ensuring clean air, fresh water, food security, and a stable climate. By protecting ecosystems and fostering biodiversity, we not only safeguard the planet’s natural treasures but also secure a healthier, more sustainable future for all
          </h4>
        </Col>
        <Col sm={12} md={6}>
          <img
            src={animal001}
            alt=""
            className="fade-image slide-in-right"
            height={500}
          />
        </Col>
      </Row>
    </div>
  );
};

export default WhyComponent;
