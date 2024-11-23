/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import 'dotenv/config';
import { AppLayout } from '../../layouts';
import { Container, Row, Col, Form, Alert, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../redux/actions';
import moment from 'moment';
// import DateFnsUtils from '@date-io/date-fns';

import './index.css';
import Loading from '../../utils/Loading';

export const Booking = (props) => {
  const bookedItems = JSON.parse(localStorage.getItem('orderSummary'));
  let [totalPrice, setTotalPrice] = useState(
    (localStorage.getItem('totalPrice') || 0) * 1,
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [checkInDate, setCheckInDate] = useState(moment());
  const [checkOutDate, setCheckOutDate] = useState(moment());
  // create a new `Date` object
  const now = new Date();
  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();

  const [open, setOpen] = useState(false);
  const [orderInfo, setOrderInfo] = useState({
    needDate: moment(currentDateTime).format('YYYY-MM-DD HH:mm:ss'),
    deadline: moment(currentDateTime).format('YYYY-MM-DD HH:mm:ss'),
    names: '',
    email: '',
    phoneNumber: '',
    address: '',
    location: '',
    appUrl: process.env.REACT_APP_FRONTEND,
  });

  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [bookingID, setBookingId] = useState('');

  const [orderSummary, setOrderSummary] = useState(
    bookedItems !== null ? bookedItems : [],
  );

  const handleOnChange = (e) => {
    const updatedOrderInfo = { ...orderInfo };
    updatedOrderInfo[e.target.name] = e.target.value;
    setOrderInfo(updatedOrderInfo);
  };

  // const onDateChange = (name, dateValue) => {
  //   name === 'needDate'
  //     ? setCheckInDate(dateValue)
  //     : setCheckOutDate(dateValue);

  //   const updatedOrderInfo = { ...orderInfo };
  //   const realDate = moment(dateValue).format('YYYY-MM-DD HH:mm:ss');
  //   updatedOrderInfo[name] = realDate;
  //   setOrderInfo(updatedOrderInfo);
  //   return;
  // };

  const handleSuccessBooking = (id) => setBookingId(id);

  const handlePayLater = async (isLater) => {
    const bookInfo = {
      ...orderInfo,
      itemsArray: [{ id: props.id, itemNumber: 1 }],
      amount: props.amount,
    };
    setSubmitted(true);
    await dispatch(createOrder(bookInfo, isLater));
    setOpen(!open);
  };

  const handleCancelOrder = () => {
    localStorage.removeItem('orderSummary');
    localStorage.removeItem('totalPrice');
    setOrderSummary([]);
    setOpen(!open);
  };

  return (
    <>
      <br />
      <br />
      {props.amount != null ? <h3>Total price: $ {props.amount}</h3> : ''}
      <br />
      <Form noValidate>
        <Form.Group>
          <Form.Label>Full Name </Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Eg: John Peter'
            value={orderInfo.names}
            name='names'
            className='form-control-lg'
            onChange={handleOnChange}
          />
          <Form.Control.Feedback type='invalid'>
            Full name is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Eg: email@example.com'
            required
            name='email'
            value={orderInfo.email}
            className='form-control-lg'
            onChange={handleOnChange}
          />
          <Form.Control.Feedback type='invalid'>
            Email is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Type your phone'
            required
            name='phoneNumber'
            value={orderInfo.phoneNumber}
            className='form-control-lg'
            onChange={handleOnChange}
          />
          <Form.Control.Feedback type='invalid'>
            Your phone is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Your address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your address'
            required
            name='address'
            value={orderInfo.address}
            className='form-control-lg'
            onChange={handleOnChange}
          />
          <Form.Control.Feedback type='invalid'>
            Address is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Your Location</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your location'
            required
            name='location'
            value={orderInfo.location}
            className='form-control-lg'
            onChange={handleOnChange}
          />
          <Form.Control.Feedback type='invalid'>
            Location is required
          </Form.Control.Feedback>
        </Form.Group>

        {/* <Form.Group>
                  <Form.Label>Start date</Form.Label>
                  <Form.Control
                    type='date'
                    // placeholder='Your location'
                    required
                    name='startDate'
					value={orderInfo.checkInDate}
						onChange={value => {
							onDateChange('startDate', value);
						}}
                 
                    className='form-control-lg'
        
                  />
                  <Form.Control.Feedback type='invalid'>
                    Start date is required
                  </Form.Control.Feedback>
                </Form.Group> */}

        {/* <Form.Group>
                  <Form.Label>End date</Form.Label>
                  <Form.Control
                    type='date'
                    // placeholder='Your location'
                    required
					name='endDate'
                    className='form-control-lg'
					value={orderInfo.checkOutDate}
					onChange={value => {
						onDateChange('endDate', value);
					}}
                  />
                  <Form.Control.Feedback type='invalid'>
                   End date is required
                  </Form.Control.Feedback>
                </Form.Group> */}

        <Button
          onClick={() => handlePayLater(false)}
          variant='outline-primary'
          className='mt-3 col-sm-6'
        >
          <i className='fa fa-save'></i> Pay now
        </Button>
        <Button
          onClick={() => handlePayLater(true)}
          variant='outline-primary'
          className='mt-3 col-sm-6'
        >
          <i className='fa fa-save'></i> Pay later
        </Button>
      </Form>
    </>
  );
};
