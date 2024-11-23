/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './index.css';
import naeb from '../../assets/assetss/naeb.png';
import meteo from '../../assets/assetss/meteo.png';
import rema from '../../assets/assetss/rema.png';
import nla from '../../assets/assetss/nla.png';
import giz from '../../assets/assetss/giz.png';

export class Partner extends Component {
  render() {
    return (
      <>
        <section className='pt-block pt-5 pb-3'>
          <h2 className='pb-4 text-center'>Partners</h2>
          <Container fluid className='p-3'>
            <Row className='py-3'>
                <Col>
                <a href='https://g.co/kgs/M7kHXwE' target='_blank'>
                  <Image
                    src={giz}
                    title='Logo'
                    alt='Image'
                    style={{ height: '150px' }}
                    className='img-fluid'
                  />
                </a>
              </Col>
              <Col>
                <a href='https://rdb.rw' target='_blank'>
                  <Image
                    src='https://res.cloudinary.com/dfsai53mw1/image/upload/v1701630148/WEBS/godiscover/rdb_pc8cs9.jpg'
                    title='Logo'
                    alt='Image'
                    className='img-fluid'
                  />
                </a>
              </Col>
              <Col>
                <a href='https://www.naeb.gov.rw/' target='_blank'>
                  <Image
                    src={naeb}
                    title='Logo'
                    alt='Image'
                    style={{ height: '150px' }}
                    className='img-fluid'
                  />
                </a>
              </Col>
              <Col>
                <a href='https://www.meteorwanda.gov.rw/home/' target='_blank'>
                  <Image
                    src={meteo}
                    title='Logo'
                    alt='Image'
                    style={{ height: '150px' }}
                    className='img-fluid'
                  />
                </a>
              </Col>
            </Row>

            <Row className='py-3'>
              <Col>
                <a href='https://rema.gov.rw' target='_blank'>
                  <Image
                    src={rema}
                    title='Logo'
                    alt='Image'
                    style={{ height: '150px' }}
                    className='img-fluid'
                  />
                </a>
              </Col>
              <Col>
                <a href='https://lands.rw/' target='_blank'>
                  <Image
                    src={nla}
                    title='Logo'
                    alt='Image'
                    style={{ height: '150px' }}
                    className='img-fluid'
                  />
                </a>
              </Col>
              {/* <Col>
                <a href='https://rsga.rw' target='_blank'>
                  <Image
                    src='https://res.cloudinary.com/dfsai53mw1/image/upload/v1703687603/WEBS/rsga_c3yrpt.png'
                    title='Logo'
                    alt='Image'
                    style={{ height: '150px' }}
                    className='img-fluid'
                  />
                </a>
              </Col> */}
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
