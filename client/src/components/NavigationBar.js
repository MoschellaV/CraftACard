import React, { useState } from "react";
import "../assets/css/NavigationBar.css";
import { Container, Offcanvas, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../assets/images/craftacardlogowhite.png";

const NavigationBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 25) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);

  return (
    <Navbar
      key="lg"
      expand="lg"
      style={{
        top: "0px",
        paddingBottom: "0",
        marginBottom: "0 !important",
      }}
      className={navbar ? "active-navbar" : ""}
      fixed="top"
    >
      <Container fluid style={{ padding: "10px 13%" }}>
        <Link
          to="home"
          smooth={true}
          offset={-100}
          duration={800}
          className="navbar-font navbar-heading navbar-link"
        >
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            style={{ transform: "rotate(-25deg)" }}
          />
          Craft A Card
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-lg`}
              className="navbar-font"
            >
              Craft A Card
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link
                to="about"
                smooth={true}
                offset={-60}
                duration={800}
                className="navbar-font navbar-link item-spacing"
              >
                About
              </Link>
              <Link
                to="preview"
                smooth={true}
                offset={-100}
                duration={800}
                className="navbar-font navbar-link item-spacing"
              >
                Preview
              </Link>
              <Link
                to="create-card"
                smooth={true}
                offset={-50}
                duration={800}
                className="navbar-font navbar-link item-spacing"
              >
                Create
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
