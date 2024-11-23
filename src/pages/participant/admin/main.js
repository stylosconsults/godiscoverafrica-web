import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import * as API from '../../../api/index';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AdminLayout } from '../../../layouts';
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  Alert,
} from 'react-bootstrap';

import Spinner from '../../../components/spinner/Spinner';

export const ParticipantMain = () => {
  const token = localStorage.IdToken;
  const decodedToken = jwtDecode(token);

  const [loading, setLoading] = useState(true);
  const [participants, setParticipants] = useState([]);
  const error = useSelector((state) => state.newsReducer.error);

  const getAllParticipants = async () => {
    const allParticipants = await API.getParticipants('/api/participant/all/1');

    try {
      const allParticipantsList = await allParticipants.json();
      if (allParticipants.status === 200) {
        setParticipants(allParticipantsList);
      }
    } catch (error) {
      console.log(error);
      console.clear();
    }
  };

  useEffect(() => {
    getAllParticipants();
    setLoading(!loading);
  }, []);

  if (error) {
    console.log('error');
  }

  return (
    <AdminLayout>
      <Container fluid className='dashboard-content'>
        <Row>
          <Col sm={10}>
            <div className='page-header'>
              <h2 className='pageheader-title'>Participants</h2>
              <div className='page-breadcrumb'>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <Link to='/account' className='breadcrumb-link'>
                        Dashboard
                      </Link>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      Participant
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </Col>
          {/* <Col sm={2}>
            <Link to='/account/news/create' className='btn btn-block btn-light'>
              <i className='fa fa-plus-circle mr-1'></i> Add New
            </Link>
          </Col> */}
        </Row>

        <div className='ecommerce-widget'>
          <Row>
            <div>
              {/* {message && <Alert variant='success'>{message}</Alert>} */}
              {error && <Alert variant='danger'>{error}</Alert>}
            </div>
            <Col xs={12} lg={12} md={12} sm={12}>
              <div className='card'>
                <div className='card-body'>
                  <table className='table table-striped table-hovered'>
                    <thead>
                      <tr>
                        <th scope='col'>#</th>
                        <th></th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Names</th>
                        <th scope='col'>Position</th>
                        <th scope='col'>Organization</th>
                        <th scope='col'>Published_At</th>
                        <th scope='col'></th>
                        <th scope='col'></th>
                      </tr>
                    </thead>
                    <tbody>
                      {participants && !loading ? (
                        <>
                          {participants &&
                            participants.map((singleNews, i) => (
                              <tr>
                                <th scope='row'>{i + 1}</th>
                                <td>
                                  {/* <Image
                                    alt={singleNews.title}
                                    title={singleNews.title}
                                    src={singleNews.image}
                                    className='img-fluid'
                                    width={50}
                                  /> */}
                                </td>
                                <td> {singleNews.title} </td>
                                <td>
                                  {singleNews.familyName} {singleNews.firstName}
                                </td>
                                <td>
                                  {singleNews.position}{' '}
                                  <i className='fa fa-comment ml-1'></i>
                                </td>
                                <td>{singleNews.organization}</td>
                                <td>
                                  {moment(singleNews.createdAt).format(
                                    'MMMM d, y',
                                  )}
                                </td>

                                <td>
                                  {decodedToken &&
                                    decodedToken.role === 'admin' && (
                                      <Form>
                                        {/* <Button
                                          variant={
                                            singleNews.isPublished === false
                                              ? 'success'
                                              : 'warning'
                                          }
                                          title={
                                            singleNews.isPublished === false
                                              ? 'Click to publish this news'
                                              : 'Click to unpublish this news'
                                          }
                                          className='btn-xs'
                                          //   onClick={() =>
                                          //     submitNewsStatus(
                                          //       singleNews.isPublished,
                                          //       singleNews.slug,
                                          //     )
                                          //   }
                                          style={{ display: 'flex' }}
                                        >
                                          {singleNews.isPublished === false ? (
                                            <i className='fas fa-check mr-1'></i>
                                          ) : (
                                            <i className='fa fa-ban mr-1'></i>
                                          )}
                                          {singleNews.isPublished === false
                                            ? 'Publish'
                                            : 'UnPublish'}
                                        </Button> */}
                                      </Form>
                                    )}
                                </td>
                                <td>
                                  <Link
                                    to={`/account/news/view/${singleNews.slug}`}
                                    className='btn btn-primary btn-xs'
                                  >
                                    <i className='fa fa-tasks mr-1'></i>View
                                  </Link>
                                </td>
                              </tr>
                            ))}
                        </>
                      ) : (
                        <Spinner />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </AdminLayout>
  );
};
