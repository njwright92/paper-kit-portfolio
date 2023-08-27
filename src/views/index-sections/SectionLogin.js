/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from "utils/validateContactForm";
import '../../assets/css/SectionLogin.css'; // Import the custom CSS file

const SectionLogin = () => {
  const handleSubmit = (values, { resetForm }) => {
    alert('Thank you, I have received your request!');
    fetch('njwright92@gmail.com-script.php', {
      method: 'POST',
      body: JSON.stringify(values),
    });
    resetForm();
  };

  return (
    <div className="form-container">

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phoneNum: '',
          email: '',
          feedback: '',
        }}
        onSubmit={handleSubmit}
        validate={validateContactForm}
      >
        <Form>
          <h1 style={{ marginBottom: ".5em", fontWeight: "bold", color: "white", fontSize: "4em", textShadow: "2px 2px 4px #000000" }}>Site request form</h1>
          <FormGroup row>
            <Label htmlFor='firstName' md='2' style={{ color: 'black' }}>
              <strong>First Name</strong>
            </Label>
            <Col md="10">
              <Field
                name='firstName'
                placeholder='First Name'
                className='form-control'
              />
              <ErrorMessage name='firstName'>
                {(msg) => <p className='text-danger'>{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor='lastName' md='2' style={{ color: 'black' }}>
              <strong>Last Name</strong>
            </Label>
            <Col md="10">
              <Field
                name='lastName'
                placeholder='Last Name'
                className='form-control'
              />
              <ErrorMessage name='lastName'>
                {(msg) => <p className='text-danger'>{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor='phoneNum' md='2' style={{ color: 'black' }}>
              <strong>Phone</strong>
            </Label>
            <Col md="10">
              <Field
                name='phoneNum'
                placeholder='Phone'
                className='form-control'
              />
              <ErrorMessage name='phoneNum'>
                {(msg) => <p className='text-danger'>{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor='email' md='2' style={{ color: 'black' }}>
              <strong>Email</strong>
            </Label>
            <Col md="10">
              <Field
                name='email'
                placeholder='Email'
                type='email'
                className='form-control'
              />
              <ErrorMessage name='email'>
                {(msg) => <p className='text-danger'>{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor='feedback' md='2' style={{ color: 'black' }}>
              <strong>Your Site Request</strong>
            </Label>
            <Col md="10">
              <Field
                name='feedback'
                as='textarea'
                rows='12'
                className='form-control'
                placeholder='enter details for the app or site you want created here'
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 10, offset: 4 }}>
              <Button type='submit' color='primary'>
                Send Request
              </Button>
            </Col>
          </FormGroup>

        </Form>
      </Formik>
    </div>
  );
};

export default SectionLogin;
