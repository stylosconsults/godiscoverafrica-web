import React from "react";
import { Col, Row, Card, Button, Carousel } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import event from "../../assets/assetss/godiscover.jpeg";
import cars from "../../assets/assetss/cars.jpeg";
import animal001 from "../../assets/assetss/gorillas.png";
import animal002 from "../../assets/assetss/Akagera-zebra.jpg";
import animal003 from "../../assets/assetss/giraffe.jpg";
import airplane from "../../assets/assetss/pascal-meier-UYiesSO4FiM-unsplash.jpg";
import convention from "../../assets/assetss/convention.jpeg";
import { AppLayout } from "../../layouts";
import "./index.css";
import "animate.css";
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";
import servicesData from "../Eventss/servicesData";
import { LatestNews } from "../section";

const HomeBody = () => {
  return (
    
    <AppLayout>
      <div className="bg-light py-3 home-container">
        <Carousel className="h-80 bg-dark " fade>
       
          <Carousel.Item interval={1500} className="carousel-item">
            <div className="carousel-overlay"></div>
            <img src={animal003} alt="" className="carousel-image" />
            <Carousel.Caption className="carousel-caption">
              <h3 className="text-light font-weight-bold">{servicesData[0].title}</h3>
              <p className="text-light">
              {servicesData[0].description}
              </p>
          
              <Link to="/events">
              <Button className="bg-transparent border-light btn-custom-primary">
                Learn more <ArrowRightCircle />{" "}
              </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <div className="carousel-overlay"></div>
            <img src={airplane} alt="" />
            <Carousel.Caption className="carousel-caption">
              <h3 className="text-light font-weight-bold">{servicesData[1].title}</h3>
              <p className="text-light">
                {servicesData[1].description}
              </p>
              <Link to="/airticket">
              <Button className="bg-transparent border-light btn-custom-primary">
                learn more <ArrowRightCircle />{" "}
              </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <div className="carousel-overlay"></div>
            <img src={convention} alt="" />
            <Carousel.Caption className="carousel-caption">
              <h3 className="text-light font-weight-bold">{servicesData[3].title }</h3>
           
              <p className="text-light">
                {servicesData[3].description}
              </p>
              <Link to="/services">
              <Button className="bg-transparent border-light btn-custom-primary">
                learn more <ArrowRightCircle />{" "}
              </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000} className="carousel-item">
            <div className="carousel-overlay"></div>
            <img src={cars} alt="" />
            <Carousel.Caption className="carousel-caption">
              <h3 className="text-light font-weight-bold">
                {servicesData[2].title}
              </h3>
              <p className="text-light">
              {servicesData[2].description}
              </p>
              <Link to="/tours">
              <Button className="bg-transparent border-light btn-custom-primary">
                learn more <ArrowRightCircle />{" "}
              </Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="w-100 px-5 py-5 danger text-light">
          <Row>
            <Col sm={12} md={12}>
              <h1 className="text-light font-weight-bold justify-content-center text-center py-3">Why It's Worth It</h1>
              <p className="px-18 text-light justify-content-center text-center">
              Most tourists skip through Kigali on their way to go gorilla trekking in other parts of Rwanda or nearby Uganda, but if you have the time, Kigali is an incredible, vibrant, and beautiful city known as the Singapore of Africa. With a thriving arts scene and social conscience that includes the banning of plastic bags and monthly community city cleanups, Kigali is leading the way for many other cities in Africa and, indeed, around the world. —Helen Davies
              </p>
            </Col>
            {/* <Col sm={12} md={6}>
              <iframe
                src="https://www.youtube.com/watch?v=EPCKma4e37Y"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-iframe"
              ></iframe>
            </Col> */}
          </Row>
        </div>
        <div className="px-5">
        <TrackVisibility>
            {({ isVisible }) => (
          <Row className={`${isVisible ? "animate__animated animate__fadeIn text-[10px]": ""}events-card`}>
            <Col sm={12} md={3}>
              <Card className="ev-1">
                <Card.Body>
                  <Card.Title>{servicesData[0].title}</Card.Title>
                  {/* <Card.Subtitle className="mb-2">Consultancy</Card.Subtitle> */}
                  <Link to="/services">
                  <Button className="bg-transparent border-light btn-custom-primary">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2}>
              <Card className="ev-2">
                <Card.Body>
                  <Card.Title>{servicesData[1].title}</Card.Title>
                  {/* <Card.Subtitle className="mb-2">Production</Card.Subtitle> */}
                  <Link to="/services">
                  <Button className="bg-transparent border-light btn-custom-primary">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2}>
              <Card className="ev-3">
                <Card.Body>
                  <Card.Title>{servicesData[2].title}</Card.Title>
                  {/* <Card.Subtitle className="mb-2">Services</Card.Subtitle> */}
                  <Link to="/services">
                  <Button className="bg-transparent border-light btn-custom-primary">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={2}>
              <Card className="ev-4">
                <Card.Body>
                  <Card.Title>{servicesData[3].title}</Card.Title>
                  {/* <Card.Subtitle className="mb-2">
                    Management System
                  </Card.Subtitle> */}
                    <Link to="/services">
                  <Button className="bg-transparent border-light btn-custom-primary">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3}>
              <Card className="ev-5">
                <Card.Body>
                  <Card.Title>{servicesData[4].title}</Card.Title>
                  {/* <Card.Subtitle className="mb-2">Consultancy</Card.Subtitle> */}
                  <Link to="/services">
                  <Button className="bg-transparent border-light btn-custom-primary">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          )}
          </TrackVisibility>

          <h2 className='col-sm-12 py-5'>Blogs</h2>
            <Row className='py-2 px-5 justify-content-center text-center'>
						   <LatestNews />
				  	</Row>
            </div>
      </div>
    </AppLayout>
  );
};

export default HomeBody;
