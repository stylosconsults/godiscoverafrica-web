import React, { useEffect, useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import animal001 from '../../assets/assetss/bg-work.jpg';

const WhyComponent = () => {
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
            Why It Matters
          </h1>
          <h4 className='text-fade px-18 text-light fade-in-text'>
            <p className='text-light'>
              Integrating climate resilience into conservation efforts ensures
              ecosystems and communities can thrive in an increasingly volatile
              climate.
            </p>
            <h4 className='text-light'>Why Choose GoDiscover Consultancy?</h4>
            <ul className='text-light'>
              <li className='text-light py-2'>
                <strong className='text-light'>Tailored Expertise:</strong>

                <br />

                <span className='text-light'>
                  Every client is unique, and we design our solutions to meet
                  their specific needs, ensuring maximum impact.
                  <br />
                </span>
              </li>
              <li className='text-light py-2'>
                <strong className='text-light'>
                  Local and Regional Insights:
                </strong>

                <br />

                <span className='text-light'>
                  Our deep understanding of Rwanda&rsquo;s environmental
                  landscape and Africa&rsquo;s broader ecological challenges
                  enables us to deliver contextually relevant solutions.
                  <br />
                  <br />
                </span>
              </li>
              <li className='text-light py-2'>
                <strong className='text-light'>Collaborative Approach:</strong>

                <br />

                <span className='text-light'>
                  We work closely with stakeholders, fostering partnerships that
                  drive sustainable change.
                  <br />
                </span>
              </li>
              <li className='text-light py-2'>
                <strong className='text-light'>
                  Proven Track Record:&nbsp;
                  <br />
                </strong>
                With years of experience and successful projects across Africa,
                we have the expertise to deliver transformative results.
              </li>
            </ul>
          </h4>
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

export default WhyComponent;
