import React from "react";
import { useMemo, useState } from "react";
import { toast } from 'react-toastify';
import Select from "react-select";
import { Row, Col, Form, Button, InputGroup, Table, Container } from "react-bootstrap";
import countryList from "react-select-country-list";
import * as API from '../../api/index';
import { AppLayout } from "../../layouts";

const ParticipantForm = () => {
  const options = useMemo(() => countryList().getData(), []);
  // State to manage form data
  const [formData, setFormData] = useState({
    titleMs: false,
    titleMrs: false,
    titleDr: false,
    titleProf: false,
    familyName: '',
    firstName: '',
    position: '',
    department: '',
    organization: '',
    address: '',
    country: 'Rwanda', // Change this to the default country value if needed
    town: '',
    telephone: '',
    email: '',
    diet: '',
    specificDietCheckbox: false,
  });

  // Event handler to update form data on input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Event handler for the country select component
  const handleCountryChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedOption,
    }));
  };

  // Event handler for form submission
  const handleSubmit = async(e) => {
    e.preventDefault();

    let title1 = '';
    if(formData.titleMs){
      title1='Ms';
    }else if(formData.titleMrs){
      title1='Mrs.';
    }else if(formData.titleDr){
      title1='Dr.';
    }else if(formData.titleProf){
      title1='Prof.';
    }else {
     title1 = 'Mr.';
    }
    const data = {
      eventId:"1",
      title: title1,
      familyName: formData.familyName,
      firstName:formData.firstName,
      position: formData.position,
      department: formData.department,
      organization: formData.organization,
      address: formData.address,
      country: formData.country ? formData.country.value : 'Rwanda', // Assuming you're using react-select and country is an object
      town: formData.town,
      phone: formData.telephone,
      email: formData.email,
      dietRequirements: formData.diet,
      amount: "100.00",
      dataProtection: formData.specificDietCheckbox,
    };
console.log(data);
   
	try {
    const createAttendance = await API.createParticipant(data, '/api/participant/create');
		const createdTours = await createAttendance.json();
		console.log('response here', createAttendance);
	

		if (createAttendance.status === 400) {
			toast.error('Missing data');
		}

		if (createAttendance.status === 201) {
      console.log('Created here',createAttendance);

			toast.success(createdTours.message);
			window.location.href = `/participant`;
		}
	} catch (error) {
		console.log(error);
		console.clear();
	}
  };

  return (
  
    <AppLayout>
    <Container fluid className="bg-white">
   
    <div className="bg-white py-5">
      <Row>
      <Col className="pt-3">
          <h1 className="reg-header">Registration Fee</h1>
          <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-light">#</th>
                <th className="text-light">Rwandans</th>
                <th className="text-light">Africans</th>
                <th className="text-light">Internationals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Registration Type</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Early Birds</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Normal fee</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          </Container>
         <p style={{textAlign:"center"}}>The registration fee includes workshop material, coffee breaks and
          lunch.
          </p>
          <br/>
          <h1 className="reg-header">Cancellation Policy</h1>
          <p className="canselation-col">
            All cancellations must be in writing. Cancellations received 5 days
            before the event are subject to a charge of 25% of the registration
            fees for administrative costs. Cancellations received 2 days to the
            event or on the event day, full payment will be requested and
            refunds will not be provided. Replacements by colleagues, i.e.
            transfer of the registration at no extra cost, are much welcome.
          </p>
        </Col>
        <Col className="participant-form">
          <h1 className="reg-header">Registration Details</h1>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg={12} sm={12}>
                <Form.Group>
                  <InputGroup>
                    <Form.Check
                      inline
                      label="Ms"
                      type="checkbox"
                      id="titleMs"
                      name="titleMs"
                      checked={formData.titleMs}
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      inline
                      label="Mrs"
                      type="checkbox"
                      id="titleMrs"
                      name="titleMrs"
                      checked={formData.titleMrs}
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      inline
                      label="Dr"
                      type="checkbox"
                      id="titleDr"
                      name="titleDr"
                      checked={formData.titleDr}
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      inline
                      label="Prof"
                      type="checkbox"
                      id="titleProf"
                      name="titleProf"
                      checked={formData.titleProf}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group className="d-flex">
                  <div style={{ flex: 1, marginRight: "10px" }}>
                    <Form.Label>Family Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="family name"
                      required
                      name="familyName"
                      className="form-control-lg"
                      value={formData.familyName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="first name"
                      required
                      name="firstName"
                      className="form-control-lg"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group className="d-flex">
                  <div style={{ flex: 1, marginRight: "10px" }}>
                    <Form.Label>position</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="add your position"
                      required
                      name="position"
                      className="form-control-lg"
                      value={formData.position}
                      onChange={handleInputChange}
                 
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Form.Label>Department:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="add your department"
                      required
                      name="department"
                      className="form-control-lg"
                      value={formData.department}
                      onChange={handleInputChange}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group>
                  <Form.Label>Organisation/Company:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="add your company"
                    required
                    name="organization"
                    className="form-control-lg"
                    value={formData.organization}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group>
                  <Form.Label>Address:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="enter the address"
                    required
                    name="address"
                    className="form-control-lg"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group className="d-flex">
                  <div style={{ flex: 1, marginRight: "10px" }}>
                    <Form.Label>Country of Origin:</Form.Label>
                    <Select
                      options={options}
                      value={formData.country}
                      onChange={handleCountryChange}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Form.Label>Town:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="town..."
                      required
                      name="town"
                      className="form-control-lg"
                      value={formData.town}
                      onChange={handleInputChange}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group className="d-flex ">
                  <div style={{ flex: 1, marginRight: "10px" }}>
                    <Form.Label>Telephone:</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="add your number"
                      required
                      name="telephone"
                      className="form-control-lg"
                      value={formData.telephone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@gmail.com"
                      required
                      name="email"
                      className="form-control-lg"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={12} sm={12}>
                <Form.Group>
                  <InputGroup className="mb-3 d-flex align-items-center">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    <Form.Label className="pt-3 pl-2">
                      Specific diet requirements (vegetarian, allergies …):
                    </Form.Label>
                  </InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="specify your diet requirements..."
                    required
                    name="diet"
                    className="form-control-lg"
                    value={formData.diet}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" className="button">Submit</Button>
          </Form>
          <p>
            If you need any other specific facilities (wheelchair access …), do
            not hesitate to inform the
          </p>
        </Col>
      </Row>
    </div>
    </Container>
  </AppLayout>
  );
};

export default ParticipantForm;
