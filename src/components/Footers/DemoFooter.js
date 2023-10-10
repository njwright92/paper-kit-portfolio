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
/*eslint-disable*/
import React from "react";
import { Row, Container, Button } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer" style={{
      backgroundImage: "url(" + require("assets/img/uriel-soberanes.jpg") + ")",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginBottom: '4em'
    }}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <nav className="footer-nav text-center text-black">
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '3em'
            }}>
              <h3>
                <strong>Contact Info</strong>
              </h3>
              <p><strong>Nathan J. Wright currently located in Coeur D'Alene, Idaho.</strong></p>
            </div>

            <Button
              className="btn-lg btn-round m-1"
              style={{
                fontSize: '1em',
                margin: 'auto',
                boxShadow: '4px 4px 8px white',
                margin: '.5em',
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none'
              }}
              role='button'
              href="mailto:njwright92@gmail.com"
            >
              Email!
            </Button>
            <Button
              className="btn-lg btn-round m-1"
              style={{
                fontSize: '1em',
                margin: 'auto',
                boxShadow: '4px 4px 8px white',
                margin: '.5em',
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none'
              }}
              role='button'
              href="sms:12082550140"
            >
              Phone!
            </Button>
          </nav>
        </Row>
        <Row className="align-items-center justify-content-center">
          <div className="credits text-center" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '3em'
            }}>
            <span className="copyright text-black">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-lg fa-heart heart" /> by Nathan Wright
            </span>
          </div>
        </Row>
      </Container>
    </footer >
  );
}

export default DemoFooter;

