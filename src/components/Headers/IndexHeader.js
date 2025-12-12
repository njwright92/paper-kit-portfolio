/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Container } from "reactstrap";
import "../../assets/css/styles.css";
const fernanImage = "/fernan.webp";
const cloudsImage = "/clouds.webp";
const jrDevImage = "/jrDev.webp";

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
                <h1 className="presentation-title">Code Showcase!</h1>
                <div className="fog-low">
                  <Image alt="..." src="/fog-low.webp" loading="lazy" />
                </div>
                <div className="fog-low right">
                  <Image alt="..." src="/fog-low.webp" loading="lazy" />
                </div>
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              <em>Your best investment is in yourself! </em>
            </h2>
          </Container>
        </div>
        <div className="moving-clouds" style={movingCloudsStyle} />
        <h6 className="category category-absolute">
          Designed and coded by {"Nathan Wright"}{" "}
          <a>
            <Image
              alt="..."
              className="creative-tim-logo"
              src={jrDevImage}
              style={{ height: "3.3rem", borderRadius: "3em" }}
              loading="lazy"
            />
          </a>
        </h6>
      </div>
    </React.Fragment>
  );
}

export default IndexHeader;
