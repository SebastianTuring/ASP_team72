
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
           We are agile software development team (T7G7) from University of London,inspired to provide world-access of splendid recipes
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
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};


export default About_Us