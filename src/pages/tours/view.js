import 'dotenv/config';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Twitter, Facebook, Whatsapp } from 'react-social-sharing';
import ReactHtmlParser from 'react-html-parser';
import { AppLayout } from '../../layouts';
import { getSingleTours } from '../../redux/actions';

import './index.css';
import Spinner from '../../components/spinner/Spinner';
import { Booking } from '../booking/main';

export const ToursView = (props) => {
  const [loading, setLoading] = useState(true);
  const { slug } = props.match.params;
  const urlPath = window.location.toString();

  const oneTours = useSelector((state) => state.toursReducer.oneTours);
  const theLoading = useSelector((state) => state.toursReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleTours(slug));
    setLoading(!theLoading);
  }, [dispatch, slug, theLoading]);

  // const jsonData =
  //   oneTours.itenerary &&
  //   oneTours.itenerary.map((jsonString) => JSON.parse(jsonString));
  return (
    <AppLayout>
      <section className='st-read-tours py-4 mt-5 mb-5 bg-light'>
        <Container>
          <Row>
            <Col sm={8}>
              <Row>
                <Col sm={12}>
                   <h2 className='mb-2'>
                    <b> {oneTours.title}</b>
                  </h2>         
                  {/* <span className='mb-2 mt-1'>
                    {//moment(oneTours.createdAt).format('MMMM d, y')}
                  </span> */}

                  {!loading && oneTours.image ? (
                    <Image
                      alt='Travel Banner'
                      title='Travel Banner'
                      src={oneTours.image}
                      className='img-fluid mt-3 mb-2'
                      style={{ width: '100%' }}
                    />
                  ) : (
                    <Spinner />
                  )}

                  <p className='mt-4'> {ReactHtmlParser(oneTours.toursBody)}</p>
                </Col>
                <h2 className='mb-2 py-3'>
                  {oneTours.price !==0?(<b> ${ oneTours.price}</b>):''}  
                  </h2>
                  
                {/* <Row>
                  {jsonData && !loading && jsonData.length >0 ? (
                    <>
                      <table className='table'>
                        <thead>
                          <tr>
                            <th>Day</th>
                            <th>What we will do</th>
                          </tr>
                        </thead>
                        <tbody>
                          {jsonData &&
                            jsonData.map((da, i) => (
                              <tr key={i}>
                                <td>Day {da.day}</td>
                                <td>
                                  <h6> {da.title}</h6>
                                  <br />
                                  {da.body}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </>
                  ) : (
                  <div>
                   {loading ? (<Spinner />):''} 
                   </div>
                  )}
                </Row> */}

                <Col sm={12}>
                  <Facebook solidcircle big link={urlPath} />
                  <Twitter solidcircle big link={urlPath} />
                  <Whatsapp
                    solidcircle
                    big
                    message='Share on Whatsapp'
                    link={urlPath}
                  />
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
               <Booking amount={oneTours.price} id={oneTours.id} />
            </Col>
          </Row>
        </Container>
      </section>
    </AppLayout>
  );
};
