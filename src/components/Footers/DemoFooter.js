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
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <nav className="footer-nav">
            <h3>
              <strong>Contact Info</strong>
            </h3>
            <p>Nathan J. Wright currently located in Coeur D'Alene, Idaho.</p>
            <a
              role="button"
              className="btn btn-info rounded-5 m-1"
              href="mailto:njwright92@gmail.com"
            >
              Email!
            </a>
            <a
              role="button"
              className="btn btn-warning rounded-5 m-1"
              href="sms:12082550140"
            >
              Phone!
            </a>
          </nav>
        </Row>
        <Row className="align-items-center justify-content-center">
          <div className="credits">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Nathan Wright
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;

