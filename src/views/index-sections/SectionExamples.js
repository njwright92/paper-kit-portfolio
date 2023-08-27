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

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row className="text-center">
            <Col className="mx-auto">
              <h1 style={{ marginBottom: ".5em", fontWeight: "bold", color: "white", fontSize: "5em", textShadow: "2px 2px 4px #000000" }}>
                My Projects
              </h1>
            </Col>
          </Row>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <Button
                className="btn-lg btn-round"
                color="primary"
                href="https://slapshot16.com">
                <i className="fa fa-lg fa-cutlery" aria-hidden="true"></i> SlapShot16
              </Button>
              <a href="https://slapshopt16.com">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/ssMenu.jpg")}
                  style={{ width: "77%" }}
                />
              </a>
            </Col>
            <Col className="text-center" md="6">
              <Button
                className="btn-lg btn-pill"
                color="warning"
                href="https://nativeprotracker.com">
                <i className="fa fa-lg fa-line-chart" aria-hidden="true"></i> NativeProTracker
              </Button>
              <a href="https://nativeprotracker.com">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/ProTracking.jpg")}
                  style={{ width: "77%" }}
                />
              </a>
            </Col>
          </Row>
          <Row className="example-page justify-content-center">
            <Col className="text-center">
              <h3 style={{ margin: '.3em' }}>
                <strong>Meet Comedify:</strong>
              </h3>
              <h5 style={{ marginBottom: '1px' }}>"Your AI-powered sidekick for cracking up the room. Currently under construction! Coming soon!"</h5>
              <Button
                className="btn-lg btn-pill"
                color="dark"
                href="https://github.com/njwright92/comedify"

              >
                <p>Checkout the Github Repo</p>
              </Button>

              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/comedify.jpeg")}
                style={{ width: "60%", marginLeft: '1em' }}
              />

            </Col>
          </Row>

        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
