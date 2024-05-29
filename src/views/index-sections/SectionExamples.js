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
          </Col>

          <Col className="text-center mt-2" md="6">
            <div style={{ fontSize: "1.2em", lineHeight: "1.5" }}>
              <hr style={{ backgroundColor: "black", height: ".2em" }} />
              <span role="img" aria-label="comedy">
                🎤
              </span>
              <strong style={{ fontSize: "1.3em" }}>Humor Hub:</strong>
              <hr style={{ backgroundColor: "black", height: ".2em" }} />
              <em>Status:</em> Live but under Construction
              <br />
              <em>Technologies:</em> Next.js, React, Firebase, Google Cloud
              Platform Maps, Hugging Face, JavaScript, Python
              <br />
              <strong>Overview:</strong>
              <br />
              Humor Hub is an all-in-one comedy platform for discovering open
              mic events, brainstorming with an AI assistant, and more. Built
              with TypeScript, Firebase/Firestore for data management, and
              integrated with Google Cloud Platform Maps for location-based
              features.
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
              href="https://thehumorhub.com/"
            >
              <i
                className="fa fa-lg fa-microphone text-black"
                aria-hidden="true"
              ></i>{" "}
              Humor Hub
            </Button>
          </Col>

          <Col className="text-center mt-2" md="6">
            <div style={{ fontSize: "1.2em", lineHeight: "1.5" }}>
              <hr style={{ backgroundColor: "black", height: ".2em" }} />
              <span role="img" aria-label="portfolio">
                💼
              </span>
              <strong style={{ fontSize: "1.3em" }}>Chronark Portfolio:</strong>
              <hr style={{ backgroundColor: "black", height: ".2em" }} />
              <em>Status:</em> Live
              <br />
              <em>Technologies:</em> React, Next.js, Tailwind CSS
              <br />
              <strong>Overview:</strong>
              <br />
              Chronark Portfolio is a sleek and modern personal portfolio
              website. It features a clean design and is built with React and
              Next.js, styled with Tailwind CSS, showcasing my skills, projects,
              and contact information effectively.
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
              href="https://chronark-portfolio-nosync.vercel.app/"
            >
              <i
                className="fa fa-lg fa-briefcase text-black"
                aria-hidden="true"
              ></i>{" "}
              Chronark Portfolio
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionExamples;
