import React from 'react';
import './style.css';

function Footer() {
  return (
    
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>QualityFare</p>
            <p>University of London</p>
            <p>Team 7 Group 7</p>
          </div>
          <div className="col-12 col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="/">Home</a></li>
              <li className="list-inline-item"><a href="/signup">Signup</a></li>
              <li className="list-inline-item"><a href="/login">Login</a></li>
              <li className="list-inline-item"><a href="/about_us">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;