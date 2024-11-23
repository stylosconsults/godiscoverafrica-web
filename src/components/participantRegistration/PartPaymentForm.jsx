import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";
const PartPaymentForm = () => {
  return (
    <div className="bg-white">
      <Row>
        <Col>
          <h1>Way of Payment</h1>
          <h3>Payment modes:</h3>
          <Form>
            <Form.Group>
              <InputGroup>
                <Form.Check
                  inline
                  label="CREDIT CARD:"
                  type="checkbox"
                  id="titleMs"
                />
                <Form.Check
                  inline
                  label="American Express"
                  type="checkbox"
                  id="titleMrs"
                />
                <Form.Check
                  inline
                  label="Mastercard"
                  type="checkbox"
                  id="titleDr"
                />
                <Form.Check
                  inline
                  label="VISA"
                  type="checkbox"
                  id="titleProf"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Cardholder:</Form.Label>
              <Form.Control as="text" />
              <Form.Label>Card #:</Form.Label>
              <Form.Control as="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date:</Form.Label>
              <Form.Control as="text" />
              <Form.Label>Expiry date:</Form.Label>
              <Form.Control as="date" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Security Code (CVC):</Form.Label>
              <Form.Control as="text" />
              <Form.Label>Signature:</Form.Label>
              <Form.Control as="date" />
            </Form.Group>
          </Form>
          <p>
              For payments by Credit Card: The official invoice will be sent
              upon receipt of payment from the Credit Card operator.
            </p>
        </Col>
        <Col>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </Col>
      </Row>
    </div>
  );
};

export default PartPaymentForm;
