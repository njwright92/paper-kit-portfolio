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

import React,
{
  useState,
  useEffect
}
  from "react";
import resume from '../../assets/img/resume.pdf';
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = useState("#F5F5F5");
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      setNavbarColor(
        document.documentElement.scrollTop > 299 || document.body.scrollTop > 299
          ? "#F5F5F5"
          : "#F5F5F5"
      );
    };

    window.addEventListener("scroll", updateNavbarColor);
    return () => window.removeEventListener("scroll", updateNavbarColor);
  }, []);

  return (
    <Navbar className={(navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <button
            aria-expanded={navbarCollapse}
            className={("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <i className="fa fa-lg fa-bars" aria-hidden="true"></i>
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="http://twitter.com/naterbug321"
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
                href="http://facebook.com/njwright92"
                target="_blank"
                title="Add me on Facebook"
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
                title="Star on GitHub"
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
                title="Add me on linkedin"
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
                <i className="fa fa-file-o" />
                <p className="d-lg-none">Resume</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-pill"
                color="success"
                href="https://nativeprotracker.com/"
                target="_blank"
              >
                <i className="fa fa-lg fa-line-chart" aria-hidden="true"></i> ProTracker
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="primary"
                href="https://www.slapshot16.com/"
                target="_blank"
              >
                <i className="fa fa-lg fa-cutlery" aria-hidden="true"></i> Slap Shot 16
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
