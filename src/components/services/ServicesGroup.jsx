import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { Link } from 'react-router-dom';
import eventData from './serviceData';

const ServicesGroup = () => {
  return (
    <div fluid className='bg-light py-0 '>
      <Container fluid>
        <Row className='animate__animated animate__fadeIn custom-cards pt-5'>
          {eventData.map((event) => {
            return (
              <Col md={4} className='mb-4 pt-5'>
                <Card className={`card-${event.id} text-light`}>
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text className='text-light'>{event.description}</Card.Text>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Link to={`/services/${event.id}`}>
                        <Button
                          style={{
                            backgroundColor: '#558a54',
                            borderColor: '#558a54',
                            textAlign: 'center',
                          }}
                          className='text-white m-3 btn btn-lg animate__animated animate__pulse animate__infinite'
                        >
                          View more <ArrowRightCircle />
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesGroup;
