import React from 'react';
import 'dotenv/config';
import { Helmet } from 'react-helmet';
import { AppLayout } from '../../layouts';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { OurWork } from '../../components/section';

import './index.css';
import Contactinfo from '../contact/contactinfo';
// const { REACT_APP_ABOUT_VIDEO } = process.env;
export const About = () => {
  return (
    <AppLayout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>About | GoDiscover Africa</title>
        <link rel='canonical' href='https://godiscoverafrica.rw//about' />
        <meta name='description' content='GoDiscover Africa' />
      </Helmet>
      <div className="home-body"></div>
      <section className='st-about-head pt-5 py-5 m-5 rounded-top' id={'who-we-are'}>
        <br />
        <br />
        <Container>
          <Row>
            <Col lg={12}>
              <p className='text-center head-title'>About us</p>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col lg={4}>
              <p className='sub-head-title'>who we are</p>
            </Col>
            <Col lg={8}>
              <p className='about-description text-justify'>
              <b>GoDiscover Africa Ltd.</b> We are a leading consultancy firm committed to delivering innovative, sustainable, and transformative solutions. Established in 2021 and headquartered in Rwanda, we specialize in addressing climate resilience, environmental sustainability, and socio-economic development challenges across East Africa and beyond.
                <br />
                <br />
                Our unique approach combines deep-rooted local expertise with cutting-edge international standards, enabling us to design tailored strategies that are impactful and inclusive. With a diverse team of seasoned professionals from East Africa and global collaborators, we bring a holistic perspective to solving complex challenges in a rapidly evolving world.
                <br />
              
                <br />
            </p>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col lg={4}>
              <p className='sub-head-title'>Mission</p>
            </Col>
            <Col lg={8}>
              <p className='about-description text-justify'>
              To empower communities, organizations, and governments through actionable strategies that tackle environmental challenges, enhance resilience, and foster sustainable growth.
              </p>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col lg={4}>
              <p className='sub-head-title'>Vision</p>
            </Col>
            <Col lg={8}>
              <p className='about-description text-justify'>
              To become a pioneering force in sustainable development and resilience in Africa by seamlessly bridging local knowledge with global innovation to create a better future.
              </p>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col lg={4}>
              <p className='sub-head-title'>Values</p>
            </Col>
            <Col lg={8}>
              <p className='about-description'>
                <ol>
                  <li className='about-description'><b>Sustainability:</b> Promoting solutions that protect our planet for future generations.</li>
                  <li className='about-description'><b>Innovation:</b> Using creative ideas and advanced tools to solve challenges.
                  </li> 
                  <li className='about-description'><b>Collaboration:</b> Working together with communities and partners to create impact.</li>
                  <li className='about-description'><b>Integrity:</b> Upholding honesty and transparency in all we do.</li>
                  <li className='about-description'><b>Empowerment:</b> Equipping others to lead sustainable change.</li>
                 
                </ol>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <br/>
			<Contactinfo/>
    </AppLayout>
  );
};
