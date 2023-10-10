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
                Projects
              </h1>
            </Col>
          </Row>
          <Row className="example-page">
            <Col className="text-center" md="6">

              <div className="project-description" style={{ fontSize: '1.2em', lineHeight: '1.5' }}>
                <span role="img" aria-label="hockey-stick">🏒</span>
                <strong style={{ fontSize: '1.3em' }}> Hockey Themed Food Truck Website</strong>
                <hr style={{ backgroundColor: 'black', height: '.2em' }} />

                <em>Technologies:</em> HTML5, CSS3, Bootstrap 5
                <br />
                <em>Deployment:</em> Netlify
                <br />
                <strong>Overview:</strong>
                <br />
                My initial venture into web development: a responsive site for a hockey-themed food truck. Utilizing Bootstrap, the site boasts a dynamic image carousel, an intuitive menu display, and convenient text-based ordering. A straightforward yet effective digital representation of culinary delights on wheels.
              </div>
              <Button
                className="btn-lg btn-round mt-3"
                style={{
                  fontSize: '1em',
                  margin: 'auto',
                  boxShadow: '4px 4px 8px white',

                  backgroundColor: '#007BFF',
                  color: 'white',
                  border: 'none'
                }}
                href="https://slapshot16.com">
                <i className="fa fa-lg fa-cutlery" aria-hidden="true"></i> SlapShot16
              </Button>
              <a href="https://slapshot16.com/">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/logo.jpg")}
                  style={{ width: "77%" }}
                />
              </a>
            </Col>
            <Col className="text-center" md="6">

              <div style={{ fontSize: '1.2em', lineHeight: '1.5' }}>
                <span role="img" aria-label="chart">📈</span>
                <strong style={{ fontSize: '1.3em' }}> Production Tracking App</strong>
                <hr style={{ backgroundColor: 'black', height: '.2em' }} />

                <em>Technologies:</em> G.C.P., Firebase, Expo-React-Native, Redux
                <br />
                <em>Deployment:</em> Firebase and G.K.E. cluster
                <br />
                <strong>Overview:</strong>
                <br />
                I'm thrilled to introduce Native Pro Tracker, my innovative, scalable mobile app set to revolutionize task and product management. Capitalizing on the power of Google Cloud, Firebase, and Firestore DB, I've created an app that offers real-time data handling and top-notch security.
              </div>
              <Button
                className="btn-lg btn-round mt-3"
                style={{
                  fontSize: '1em',
                  margin: 'auto',
                  boxShadow: '4px 4px 8px white',

                  backgroundColor: '#007BFF',
                  color: 'white',
                  border: 'none'
                }}
                href="https://nativeprotracker.com">
                <i className="fa fa-lg fa-line-chart" aria-hidden="true"></i> NativeProTracker
              </Button>

              <a href="https://nativeprotracker.com">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/Branding.jpg")}
                  style={{ width: "77%" }}
                />
              </a>
            </Col>
          </Row>
          <Row className="example-page justify-content-center">
            <Col className="text-center" md="7">
              <div style={{ fontSize: '1.2em', lineHeight: '1.5' }}>
                <span role="img" aria-label="microphone">🎤</span>
                <strong style={{ fontSize: '1.3em' }}> Meet Comedify:</strong>
                <hr style={{ backgroundColor: 'black', height: '.2em' }} />

                <em>Status:</em> Under Construction
                <br />
                <em>Technologies:</em> Next.js, React, Firebase, Hugging Face, JavaScript, Python
                <br />
                <strong>Overview:</strong>
                <br />
                Introducing your AI-driven comedic companion, designed to lighten up any room. Currently in development, this project harnesses the power of Python and the sophisticated Transformers library. I'm meticulously training a state-of-the-art language model on a curated collection of top-tier comedy, ensuring a delightful user experience. Anticipate a blend of technology and humor like you've never seen before. Stay tuned for its launch!
              </div>
              <Button
                className="btn-lg btn-round mt-3"
                style={{
                  fontSize: '1em',
                  margin: 'auto',
                  boxShadow: '4px 4px 8px white',

                  backgroundColor: '#007BFF',
                  color: 'white',
                  border: 'none'
                }}
                href="https://github.com/njwright92/comedify"
              >
                <i className="fa fa-lg fa-smile-o" aria-hidden="true"></i> Comedify
              </Button>
              <a href="https://github.com/njwright92/comedify">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/comedify.jpeg")}
                  style={{ width: "77%" }}
                />
              </a>
            </Col>

          </Row>

        </Container>
      </div >
    </>
  );
}

export default SectionExamples;
