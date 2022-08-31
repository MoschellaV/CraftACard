import React from "react";
import "../assets/css/Footer.css";
import { footerText } from "../assets/text/WebsiteText.js";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bg-footer-color pb-2">
      <Container className="pt-5">
        <div className="footer-div">
          <Row>
            <Col lg={6}>
              <div className="description-div">
                <h5 className="footer-header">Craft a Card</h5>
                <p className="footer-text">{footerText}</p>
              </div>
            </Col>
            <Col>
              <div className="footer-center-column">
                <h6 className="footer-header">About Us</h6>
                <ul>
                  <li>Our misson</li>
                  <li>Why eCards?</li>
                  <li>Our Team</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer-center-column">
                <h6 className="footer-header">Socials</h6>
                <ul>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer-center-column">
                <h6 className="footer-header">More</h6>
                <ul>
                  <li>Inquiries</li>
                  <li>Support</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="policy">
          <p className="legal">Privacy Policy</p>
          <p className="legal">Terms and Conditions</p>
          <p className="legal">© Copyright 2022</p>
          <p className="name">Vince Moschella</p>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
