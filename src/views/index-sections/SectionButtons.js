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
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
import nys from '../../assets/img/nys.gif';
import gifGame from "../../utils/gifGame.js";
import resume from '../../assets/img/resumeIT.pdf';
import '../../assets/css/styles.css';



const SectionButtons = () => {
  return (
    <div style={{ backgroundColor: "#A8D5BA", padding: "2em", minHeight: "100vh" }}>
      <Container>
        <Row className="align-items-center">
          <Col className="text-center mb-4">
            <h1 style={{ marginBottom: ".5em", fontWeight: "bold", color: "white", fontSize: "5em", textShadow: "2px 2px 4px #000000" }}>
              <strong>My ReactApp Portfolio</strong>
            </h1>

          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="text-center mb-2 mt-2">
            <a href={resume} target="_blank" rel="noopener noreferrer" style={{ color: '#000080', fontSize: '1.5em', fontWeight: 'bold' }}>
              <i className="fa fa-file-pdf-o fa-pulse" aria-hidden="true" /> View My Resume
            </a>
            <div className="circle text-center d-flex justify-content-center align-items-center" style={{ animation: 'rotate 20s infinite linear' }}>
              <i className="fab fa-js logo logo-js"></i>
              <i className="fab fa-react logo logo-react"></i>
              <i className="fas fa-mobile-alt logo logo-react-native"></i>
              <i className="fab fa-google logo logo-gcp"></i>
              <i className="fab fa-bootstrap logo logo-bootstrap"></i>
              <i className="fab fa-node-js logo logo-nodejs"></i>
            </div>


          </Col>
        </Row>
        <Row className="align-items-center">
          <Col className="text-center mb-2 mt-2" id="gif_game">
            <Button
              id='game-button'
              color='danger'
              className="btn btn-lg btn-round"
              style={{
                fontSize: '1em',
                margin: 'auto',
                boxShadow: '4px 4px 8px white'
              }}
              onClick={gifGame}>Show GIF
            </Button>
            <p className="text-dark"
              style={{ marginTop: '1em', fontSize: '1.5em', fontWeight: 'bold' }}>
              <i
                className="fa fa-arrow-up fa-pulse"
                aria-hidden="true"
              /> Guessing Game!
            </p>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center mb-2 mt-4">
            <img
              src={nys}
              alt="logo"
              style={{ borderRadius: '25%', boxShadow: "0 0 1em rgba(0,0,0,0.5)", maxWidth: '27em' }}
            />
          </Col>
          <Col xs={12} md={6} className="text-center mb-2 mt-4">
            <Card className="bg-secondary rounded-5">
              <CardBody>
                <CardTitle tag="h1" className="text-center mb-2 p-1">Request a Site!</CardTitle>
                <CardText className="text-center text-white mb-1 font-weight-bold">
                  I enjoy developing websites and apps. You have two ways to get started on your project:<br />
                  1. Send me an email with your site or app request.<br />
                  2. Or simply scroll down to the bottom of this page to fill out a comprehensive questionnaire.<br />
                  I'll get back to you promptly with an estimated completion time and cost.
                </CardText>

              </CardBody>
              <Button
                className="btn-warning btn-lg btn-round text-dark"
                style={{
                  fontSize: '1em',
                  margin: 'auto',
                  boxShadow: '4px 4px 8px white',
                  marginBottom: '.5em'
                }}
                href="mailto:njwright92@gmail.com"
              >
                <i className="fa fa-address-card  text-dark" style={{ marginRight: '.3em', }}></i> Email Me
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default SectionButtons;

