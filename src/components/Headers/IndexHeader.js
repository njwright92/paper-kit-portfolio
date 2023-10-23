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
import { Container } from "reactstrap";
import '../../assets/css/styles.css';


function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/fernan.JPG") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <h3 className="text-center text-white">
              <em>
                Nathan John Wright
              </em>
            </h3>
            <div className="container">
              <div className="circle">
                <i className="fab fa-lg fa-js logo logo-js"></i>
                <i className="fab fa-lg fa-react logo logo-react"></i>
                <i className="fas fa-lg fa-mobile-alt logo logo-react-native"></i>
                <i className="fab fa-lg fa-google logo logo-gcp"></i>
                <i className="fab fa-lg fa-bootstrap logo logo-bootstrap"></i>
                <i className="fab fa-lg fa-node-js logo logo-nodejs"></i>
              </div>
              <div className="title-brand">
                <h1 className="presentation-title">Code Showcase</h1>
                <div className="fog-low">
                  <img alt="..." src={require("assets/img/fog-low.png")} />
                </div>
                <div className="fog-low right">
                  <img alt="..." src={require("assets/img/fog-low.png")} />
                </div>
              </div>
            </div>

            <h2 className="presentation-subtitle text-center">
              <em>
                "Your best investment is in yourself"
              </em>
            </h2>
          </Container>
        </div>

        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        <h6 className="category category-absolute">
          Designed and coded by {"Nathan Wright"}
          <a>
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/jrDev.jpeg")}
              style={{ height: '3.3rem' }}
            />
          </a>
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
