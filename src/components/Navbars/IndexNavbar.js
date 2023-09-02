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
import classnames from "classnames";
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
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  return (
    <Navbar
      className="fixed-bottom"
      expand="lg"
      style={{ backgroundColor: "#f5f5f5d4", marginBottom: '1px' }}
    >
      <Container>
        <div className="navbar-translate">
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler", { toggled: navbarCollapse })}
            onClick={toggleNavbarCollapse}
            style={{ marginLeft: 'auto' }}
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
          <Nav white-navbar className="align-items-center justify-content-center">
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
                className="btn-round"
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
