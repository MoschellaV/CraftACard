import React from "react";
import "../assets/css/FrontPage.css";
import { Container } from "react-bootstrap";

const FrontPage = () => {
  return (
    <Container fluid id="home" className="bg-image bg-size">
      <div className="title">
        <h1 className="first-header">Create and Send your own eCard</h1>
        <h5 className="text">
          Is it a celebration today? It is? Well then what are you waiting for?!
          Send that someone an eCard... its free!
        </h5>
      </div>
    </Container>
  );
};

export default FrontPage;
