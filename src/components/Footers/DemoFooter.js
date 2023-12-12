import React, { memo, useEffect } from "react";
import { Row, Container, Button } from "reactstrap";

const DemoFooter = memo(() => {
  useEffect(() => {
    const img = new Image();
    img.src = require("assets/img/federico-beccari.webp");
  }, []);

  return (
    <footer
      className="footer"
      style={{
        backgroundImage:
          "url(" + require("assets/img/federico-beccari.webp") + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "4em",
      }}
      load="lazy"
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <nav className="footer-nav text-center text-black">
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: "3em",
              }}
            >
              <h3>
                <strong>Contact Info</strong>
              </h3>
              <p>
                <strong>
                  Nathan J. Wright currently located in Coeur D'Alene, Idaho.
                </strong>
              </p>
            </div>

            <Button
              className="btn-lg btn-round m-1 text-black"
              style={{
                fontSize: "1em",
                boxShadow: "4px 4px 8px white",
                margin: ".5em",
                backgroundColor: "#007BFF",
                color: "black",
                border: "none",
              }}
              role="button"
              href="mailto:njwright92@gmail.com"
            >
              Email!
            </Button>
            <Button
              className="btn-lg btn-round m-1 text-black"
              style={{
                fontSize: "1em",
                boxShadow: "4px 4px 8px white",
                margin: ".5em",
                backgroundColor: "#007BFF",
                color: "black",
                border: "none",
              }}
              role="button"
              href="sms:12082550140"
            >
              Phone!
            </Button>
          </nav>
        </Row>
        <Row className="align-items-center justify-content-center">
          <div
            className="credits text-center"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: "3em",
            }}
          >
            <span className="copyright text-black">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-lg fa-heart heart" /> by Nathan Wright
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
});

export default DemoFooter;
