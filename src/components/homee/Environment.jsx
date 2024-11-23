import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import animal001 from '../../assets/assetss/environment.png';

const EnvironmentComponent = () => {
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
            Environment-led design
          </h1>
          <h2 className='text-fade py-2 px-8 text-dark text-center fade-in-text'>
            It’s important to ensure that a design presents the best possible
            environmental outcomes while achieving strong sustainable
            development goals. Our consultants offer:{' '}
          </h2>
          <h4 className='text-fade py-2 px-8 text-dark text-center fade-in-text'>
            Environmental assessments, enhancements and strategies Nature-based
            solutions optioneering, design and engineering Remediation
            strategies and mitigation Developing and implementing Environmental
            Management Plans and Systems
          </h4>
          <br />
          <div className='d-flex justify-content-center'>
            <Link to='/services'>
              <button
                style={{
                  backgroundColor: '#558a54',
                  borderColor: '#558a54',
                  textAlign: 'center',
                }}
                className='text-white m-3 btn btn-lg animate__animated animate__pulse animate__infinite'
              >
                Read more
              </button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EnvironmentComponent;