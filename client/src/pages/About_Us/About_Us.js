
import React,{useState,useContext} from 'react'
import './About_Us.css'
import { Container, Row, Col, Image } from "react-bootstrap";

function About_Us() {
  return (
    <div className="aboutpage">
    <Container>
      <Row>
        <Col md={6}>
          <Image src="https://codefile.io/_next/image?url=%2Fillustration.png&w=1200&q=75" fluid rounded />
        </Col>
        <Col md={6}>
         
          <h2>About Us</h2>
          <p>
           We are agile software development Team 72 from University of London,inspired to provide world-access of splendid recipes
          </p>
          <p className="member">
            <h3>Your Web Developers  </h3>
            
            <li>
              Jerry Ying
            </li>
            <li>
              Muhammad Naufal Al Ghifari
            </li>
            <li>
              Onyx Christopher
            </li>
            <li>
              Juan Sebastián Osorio Valencia
            </li>
            <li>
              Takafumi Nakayama
            </li>

          <h3>At QualityFare, we are a team of five passionate individuals who have come together to 
          bring to you an innovative recipe web application that is set to revolutionize the food 
          industry. Our mission is to make cooking as easy as possible by providing easy access 
          to quality and healthy recipes that cater to all dietary needs.</h3>

          <h3>We are constantly innovating and evolving our platform to ensure that you have the best 
          possible experience. Our team is committed to providing excellent customer service, and 
          we welcome your feedback and suggestions on how we can make our web application even better.</h3>

          <h3>We hope that you enjoy using QualityFare as much as we enjoy creating it. Let's cook, 
          share, and eat together!</h3>

          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};


export default About_Us