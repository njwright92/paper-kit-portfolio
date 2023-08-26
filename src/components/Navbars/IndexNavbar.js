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
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import resume from '../../assets/img/resumeIT.pdf';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-bottom", navbarColor)}
      expand="lg">
      <Container>
        <div className="navbar-translate">
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
            style={{ marginLeft: 'auto' }}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-center"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/naterbug321"
                target="_blank"
                title="Follow me on Twitter"
              >
                <i className="fa fa-lg fa-twitter" />
                <p className="d-lg-none">Twitter</p>
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
                <p className="d-lg-none">Facebook</p>
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
                <p className="d-lg-none">Instagram</p>
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
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/nathan-wright-78b237123/"
                target="_blank"
                title="add me on linkedin"
              >
                <i className="fab fa-lg fa-linkedin" />
                <p className="d-lg-none">Linkedin</p>
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
                <p className="d-lg-none">Resume</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="primary"
                href="www.slapshot16.com/"
                target="_blank"
              >
                <i className="fa fa-lg fa-cutlery" aria-hidden="true"></i> SlapShot16
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="btn-pill"
                color="success"
                href="nativeprotracker.com/"
                target="_blank"
              >
                <i className="fa fa-lg fa-line-chart" aria-hidden="true"></i> ProTracker
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
