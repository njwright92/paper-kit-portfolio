import React from "react";
import { Container } from "reactstrap";
import "../../assets/css/styles.css";
import fernanImage from "../../assets/img/fernan.JPG";
import cloudsImage from "../../assets/img/clouds.png";
import jrDevImage from "../../assets/img/jrDev.jpeg";

function IndexHeader() {
  const backgroundImageStyle = {
    backgroundImage: `url(${fernanImage})`,
  };

  const movingCloudsStyle = {
    backgroundImage: `url(${cloudsImage})`,
  };

  return (
    <React.Fragment>
      <div className="page-header section-dark" style={backgroundImageStyle}>
        <div className="content-center">
          <Container>
            <h3 className="text-center text-white">
              <em>Nathan John Wright</em>
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
              <em>"Your best investment is in yourself"</em>
            </h2>
          </Container>
        </div>
        <div className="moving-clouds" style={movingCloudsStyle} />
        <h6 className="category category-absolute">
          Designed and coded by {"Nathan Wright"}
          {/* eslint-disable-next-line */}
          <a>
            <img
              alt="..."
              className="creative-tim-logo"
              src={jrDevImage}
              style={{ height: "3.3rem" }}
            />
          </a>
        </h6>
      </div>
    </React.Fragment>
  );
}

export default IndexHeader;
