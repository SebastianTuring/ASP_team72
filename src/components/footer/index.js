import React from 'react';
import './style.css';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav } from "react-bootstrap"

function Footer() {
  return (
    
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>QualityFare</p>
            <p>University of London</p>
            <p>Team 72</p>
          </div>
          <div className="col-12 col-md-6">
            <ul className="list-inline">
              
              <li className="list-inline-item"><a href="/About_us">About Us</a></li>
              <li className="list-inline-item"><a href="https://github.com/SebastianTuring/ASP_team72">Our Github!</a></li>

            </ul>
          </div>
        </div>

        <FaFacebook className="fa"/>
        <FaInstagram className="fa"/>
        <FaYoutube className="fa" />
        <FaTwitterSquare className="fa"/>
        
      </div>
    </footer>
  );
}

export default Footer;