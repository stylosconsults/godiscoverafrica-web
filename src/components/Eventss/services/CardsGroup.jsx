import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import './index.css';
// import servicesData from '../servicesData';

const CardsGroup = () => {
  return (
    <Container fluid className='mt-4 bg-light py-5 '>
      <Row className='justify-content-md-center animate__animated animate__fadeIn'>
        <Col md={5} className='mb-4'>
          {/* <a href='/tours'> */}
            <Card className='card-1 text-light'>
              <Card.Body>
                <Card.Title>Environmental Conservation</Card.Title>
                <br />
                <Card.Text className='text-light'>
                <ul>
                  <li className='text-light text-large'>
                    <b>Sustainable Practices:</b> Helping organizations adopt
                    eco-friendly solutions to minimize their impact.
                  </li>
                  <li className='text-light text-large'>
                    <b>Biodiversity Projects:</b> Implementing restoration
                    programs to revitalize natural habitats.
                  </li>
                  <li className='text-light text-large'>
                    <b>Community Engagement:</b> Partnering with local
                    stakeholders for inclusive and sustainable conservation
                    outcomes.
                  </li>
                </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          {/* </a> */}
        </Col>
        <Col md={5} className='mb-4'>
          {/* <a href='/airticket'> */}
            <Card className='card-2'>
              <Card.Body>
                <Card.Title>Climate Change Action</Card.Title>
                <br />
                <Card.Text className='text-light'>
               
                <ul>
                <li className='text-light text-large'>
                    <b>Mitigation Strategies:</b> Crafting low-carbon solutions,
                    renewable energy integration, and emission reduction plans.
                  </li>
                  <li className='text-light text-large'>
                    <b>Resilience Building:</b> Designing adaptive strategies
                    for communities facing climate impacts, including
                    sustainable infrastructure development.
                  </li>
                  <li className='text-light text-large'>
                    <b>Policy Support:</b> Assisting policymakers with aligning
                    local and global climate goals.
                  </li>
                </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          {/* </a> */}
        </Col>
        <Col md={5} className='mb-4'>
        
            <Card className='card-3'>
              <Card.Body>
                <Card.Title>Interpretation and Translation</Card.Title>
                <br />
                <Card.Text className='text-light'>
            
                <ul className='py-3'>
                <li className='text-light text-large'>
                    <b> Professional Interpreting:</b> Supporting conferences,
                    business meetings, and global collaborations with expert
                    interpreters.
                  </li>
                <li className='text-light text-large'>
                    <b>Accurate Translation:</b> Offering culturally sensitive
                    and contextually accurate translations for technical and
                    creative content.
                  </li>
                <li className='text-light text-large'>
                    <b>Bridging Cultures:</b> Facilitating international
                    communication for organizations operating in diverse
                    markets.
                  </li>
                </ul>
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardsGroup;
