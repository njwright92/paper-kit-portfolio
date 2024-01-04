import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

function SectionExamples() {
  return (
    <div className="section section-dark">
      <Container>
        <Row className="text-center">
          <Col className="mx-auto">
            <h1
              style={{
                marginBottom: ".5em",
                fontWeight: "bold",
                color: "white",
                fontSize: "5em",
                textShadow: "2px 2px 4px #000000",
              }}
            >
              Projects
            </h1>
          </Col>
        </Row>
        <Row className="example-page">
          <Col className="text-center mt-2" md="6">
            <div style={{ fontSize: "1.2em", lineHeight: "1.5" }}>
              <hr style={{ backgroundColor: "black", height: ".2em" }} />
              <span role="img" aria-label="flowers">
                🌹
              </span>
              <strong style={{ fontSize: "1.3em" }}>Floras Weddings:</strong>
              <hr style={{ backgroundColor: "black", height: ".2em" }} />
              <em>Status:</em> Live
              <br />
              <em>Technologies:</em> Next.js, React, Tailwind CSS, JavaScript,
              JSX, CSS3
              <br />
              <strong>Overview:</strong>
              <br />
              Floras Weddings is a website dedicated to showcasing my mother's
              florist business and her exquisite work in wedding floral
              arrangements. This elegant and responsive site features a
              sophisticated design with an immersive gallery, built using
              Next.js and styled with Tailwind CSS, JavaScript, JSX, and CSS3
              for a modern, stylish user experience. Deployed using Vercel, it
              provides an effective online presence for the business.
            </div>

            <Button
              className="btn-lg btn-round mt-3"
              style={{
                fontSize: "1em",
                margin: "auto",
                boxShadow: "4px 4px 8px white",
                backgroundColor: "#007BFF",
                color: "black",
                border: "none",
              }}
              href="https://florasweddings.com/"
            >
              <i className="fa fa-lg fa-leaf text-black" aria-hidden="true"></i>{" "}
              Floras Weddings
            </Button>
            <a href="https://florasweddings.com/">
              <img
                alt="Floras Weddings"
                className="img-rounded img-responsive"
                src={require("assets/img/flora.png")}
                style={{ width: "100%", height: "auto" }}
                load="lazy"
              />
            </a>
          </Col>

          <Col className="text-center mt-2" md="6">
            <div style={{ fontSize: "1.2em", lineHeight: "1.5" }}>
              <hr style={{ backgroundColor: "black", height: ".2em" }} />
              <span role="img" aria-label="microphone">
                🎤
              </span>
              <strong style={{ fontSize: "1.3em" }}>OpenMicFinder:</strong>
              <hr style={{ backgroundColor: "black", height: ".2em" }} />
              <em>Status:</em> Live but under Construction
              <br />
              <em>Technologies:</em> Next.js, React, Firebase, Google Cloud
              Platform Maps
              <br />
              <strong>Overview:</strong>
              <br />
              OpenMicFinder is a platform for discovering open mic events
              tailored for stand-up comedians and artists. Built with
              TypeScript, Firebase/Firestore for data management, and integrated
              with Google Cloud Platform Maps for location-based features.
            </div>
            <Button
              className="btn-lg btn-round mt-3"
              style={{
                fontSize: "1em",
                margin: "auto",
                boxShadow: "4px 4px 8px white",
                backgroundColor: "#007BFF",
                color: "black",
                border: "none",
              }}
              href="https://micfinder-fb06f.web.app/"
            >
              <i
                className="fa fa-lg fa-microphone text-black"
                aria-hidden="true"
              ></i>{" "}
              OpenMicFinder
            </Button>
            <a href="https://micfinder-fb06f.web.app/">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/micFinder.webp")}
                style={{ width: "100%", height: "auto" }}
                load="lazy"
              />
            </a>
          </Col>

          <Col className="text-center mt-2" md="6">
            <div style={{ fontSize: "1.2em", lineHeight: "1.5" }}>
              <hr style={{ backgroundColor: "black", height: ".2em" }} />
              <span role="img" aria-label="microphone">
                🎤
              </span>
              <strong style={{ fontSize: "1.3em" }}> Meet Comedify:</strong>
              <hr style={{ backgroundColor: "black", height: ".2em" }} />
              <em>Status:</em> Live but under Construction
              <br />
              <em>Technologies:</em> Next.js, React, Firebase, Hugging Face,
              JavaScript, Python
              <br />
              <strong>Overview:</strong>
              <br />
              Introducing your AI-driven comedic companion, designed to lighten
              up any room. Currently in development, this project harnesses the
              power of Python and the sophisticated Transformers library. I'm
              meticulously training a state-of-the-art language model on a
              curated collection of top-tier comedy, ensuring a delightful user
              experience. Anticipate a blend of technology and humor like you've
              never seen before. Stay tuned for its launch!
            </div>
            <Button
              className="btn-lg btn-round mt-3"
              style={{
                fontSize: "1em",
                margin: "auto",
                boxShadow: "4px 4px 8px white",
                backgroundColor: "#007BFF",
                color: "black",
                border: "none",
              }}
              href="https://comedify-54274.web.app/"
            >
              <i
                className="fa fa-lg fa-smile-o text-black"
                aria-hidden="true"
              ></i>{" "}
              Comedify
            </Button>
            <a href="https://comedify-54274.web.app/">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/Comics.webp")}
                style={{ width: "75%", height: "auto" }}
                load="lazy"
              />
            </a>
          </Col>
          <Col className="text-center mt-2" md="6">
            <div style={{ fontSize: "1.2em", lineHeight: "1.5" }}>
              <hr style={{ backgroundColor: "black", height: ".2em" }} />
              <span role="img" aria-label="chart">
                📈
              </span>
              <strong style={{ fontSize: "1.3em" }}>
                Production Tracking App
              </strong>
              <hr style={{ backgroundColor: "black", height: ".2em" }} />
              <em>Status:</em> Live
              <br />
              <em>Technologies:</em> G.C.P., Firebase, Expo-React-Native, Redux
              <br />
              <em>Deployment:</em> Firebase and G.K.E. cluster
              <br />
              <strong>Overview:</strong>
              <br />
              Native Pro Tracker is an innovative, scalable mobile app for task
              and product management. Utilizing Google Cloud, Firebase, and
              Firestore DB for real-time data handling and security.
            </div>
            <Button
              className="btn-lg btn-round mt-3"
              style={{
                fontSize: "1em",
                margin: "auto",
                boxShadow: "4px 4px 8px white",
                backgroundColor: "#007BFF",
                color: "black",
                border: "none",
              }}
              href="https://nativeprotracker.com"
            >
              <i
                className="fa fa-lg fa-line-chart text-black"
                aria-hidden="true"
              ></i>{" "}
              NativeProTracker
            </Button>
            <a href="https://nativeprotracker.com">
              <img
                alt="Native Pro Tracker"
                className="img-rounded img-responsive"
                src={require("assets/img/Branding.webp")}
                style={{ width: "100%", height: "auto" }}
                load="lazy"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionExamples;
