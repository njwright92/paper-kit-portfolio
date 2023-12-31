import React from "react";
import classnames from "classnames";
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import resume from "../../assets/img/Resume1.1.pdf";

function IndexNavbar() {
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = React.useCallback(() => {
    setNavbarCollapse((prevState) => !prevState);
    document.documentElement.classList.toggle("nav-open");
  }, []);

  return (
    <Navbar
      className="fixed-bottom"
      expand="lg"
      style={{ backgroundColor: "#f5f5f5d4" }}
    >
      <Container>
        <div className="navbar-translate">
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
            style={{ marginLeft: "auto" }}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
            <span className="navbar-toggler-bar bar4" />
            <span className="navbar-toggler-bar bar5" />
          </button>
        </div>
        <Collapse
          className="justify-content-center"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav className="white-navbar align-items-center justify-content-center">
            <NavItem>
              <NavLink href="#section-buttons" title="Go to Home">
                <span
                  role="img"
                  aria-label="house"
                  style={{ fontSize: "1.5em" }}
                >
                  🏠
                </span>
                <p className="d-lg-none"> Home</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#section-examples" title="Go to Projects">
                <span
                  role="img"
                  aria-label="laptop"
                  style={{ fontSize: "1.5em" }}
                >
                  💻
                </span>
                <p className="d-lg-none"> Projects</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#section-carousel" title="Go to Passions">
                <span
                  role="img"
                  aria-label="snowflake"
                  style={{ fontSize: "1.5em", color: "#0000FF" }}
                >
                  ❄️
                </span>
                <p className="d-lg-none"> Passions</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#section-login" title="Go to Site Request">
                <span
                  role="img"
                  aria-label="email"
                  style={{ fontSize: "1.5em", color: "#0000FF" }}
                >
                  ✉️
                </span>
                <p className="d-lg-none"> Site Request</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/naterbug321"
                target="_blank"
                title="Follow me on Twitter"
              >
                <i className="fa fa-lg fa-twitter" />
                <p className="d-lg-none"> Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://facebook.com/njwright92"
                target="_blank"
                title="add me on Facebook"
              >
                <i className="fa fa-lg fa-facebook-square" />
                <p className="d-lg-none"> Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/nate_wright3/"
                target="_blank"
                title="Follow me on Instagram"
              >
                <i className="fa fa-lg fa-instagram" />
                <p className="d-lg-none"> Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/njwright92"
                target="_blank"
                title="add me on GitHub"
              >
                <i className="fa fa-lg fa-github" />
                <p className="d-lg-none"> GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/nathan-wright-78b237123/"
                target="_blank"
                title="add me on linkedin"
              >
                <i className="fa fa-lg fa-linkedin" />
                <p className="d-lg-none"> Linkedin</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                title="Resume"
              >
                <i className="fa fa-lg fa-file-o" />
                <p className="d-lg-none"> Resume</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default React.memo(IndexNavbar);
