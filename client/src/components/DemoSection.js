import React from "react";
import "../assets/css/DemoSection.css";
import { demoSectionBody } from "../assets/text/WebsiteText.js";
import { Row, Col, Image } from "react-bootstrap";
import craftacarddemo from "../assets/images/craftacarddemo.gif";

const DemoSection = () => {
  return (
    <div id="preview" className="off-white-bg">
      <div className="demo-section">
        <Row>
          <Col md className="center-col">
            <div>
              <h3 className="header">How It Looks</h3>
              <h4 className="subheader">Clean and Beautiful.</h4>
              <p className="description">{demoSectionBody}</p>
            </div>
          </Col>
          <Col lg={8} md={12} className="center-col">
            <Image
              className="resize-gif"
              rounded
              alt=""
              src={craftacarddemo}
            ></Image>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DemoSection;
