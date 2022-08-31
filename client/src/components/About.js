import React from "react";
import "../assets/css/About.css";
import { aboutBody } from "../assets/text/WebsiteText.js";
import { Row, Col, Image } from "react-bootstrap";
import ecardsent from "../assets/images/ecardsent.png";

const About = () => {
  return (
    <div id="about" className="deep-blue-bg">
      <div className="about-section">
        <Row>
          <Col lg={7} md={12} className="center-col">
            <Image
              className="resize-img"
              rounded
              alt=""
              src={ecardsent}
            ></Image>
          </Col>
          <Col md className="center-col">
            <div style={{ marginTop: "10px" }}>
              <h3 className="header">How It Works</h3>
              <h4 className="subheader">Simple and Easy.</h4>
              <p className="description">{aboutBody}</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
