import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import animal001 from '../../assets/assetss/maountain.jpeg';

const IntroComponent = () => {
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
      className={`w-100 px-5 py-5 text-light bg-light ${
        onScreen ? 'animate' : ''
      }`}
      ref={divRef}
    >
      <Row className='py-5'>
        <Col sm={12} md={6} className='pl-5 pr-0'>
          <img
            src={animal001}
            alt=''
            className='fade-image slide-in-right'
            style={{ borderRadius: '50%' }} /* Apply circular style directly */
            height={500}
            width={500}
          />
        </Col>
        <Col sm={12} md={6} className='text-col'>
          <h1 className='text-dark font-weight-bold text-center py-3 fade-in-title'>
          Our Impact
          </h1>
          <h4 className='text-fade py-4 px-18 text-dark fade-in-text'>
          Our consultancy services are driven by expertise, innovation, and a passion for sustainability. By combining our deep knowledge in environmental conservation, climate action, and communication, we have delivered measurable results that are transforming industries and communities. Through tailored solutions, we empower organizations to meet their sustainability goals, reduce their environmental impact, and create long-term value.
          </h4>
          <br />
          <div className='d-flex justify-content-center'>
            <Link to='/contact'>
              <button
                style={{
                  backgroundColor: '#558a54',
                  borderColor: '#558a54',
                  textAlign: 'center',
                }}
                className='text-white m-3 btn btn-lg animate__animated animate__pulse animate__infinite'
              >
                Contact us
              </button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default IntroComponent;
