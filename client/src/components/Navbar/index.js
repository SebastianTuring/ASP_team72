import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap';
import { MyContext } from '../../context';
import { useContext } from 'react';
import {useHistory} from 'react-router-dom';
//import axios from 'axios';

function AppNavbar() {
  const history = useHistory();
  const { user,setUser } = useContext(MyContext)

  
  const handleLogout = () =>
  { 

    //have axios bug so i use fetch instead
    fetch("http://localhost:5000/logout").then(()=>{
      localStorage.removeItem("token");
      setUser(null);
      history.replace("/")
    });
  };




  const titleBarStyle = {
    justifyContent: 'center',
    position: "fixed",
    top: 0,

    // backgroundColor: "white",
    
    backgroundColor: "#1fcedb",
    zIndex: 10,
    maxWidth: "100vw",
    padding: 20,
    margin: 0
  };
  const navBarStyle = {
    width: "100%",
    backgroundColor: "#1fcedb",
    padding: 0,
    margin: 0,
  }
  const menuStyle = {
    position: "fixed",
    right: 0,
    justifyContent: "right",
    marginRight: 0,
    padding: 0
  }
  return (
    // <Navbar bg="light" expand="lg">
    <Navbar style={navBarStyle}>
      <Container style={titleBarStyle} className="navbar_BG">
        <LinkContainer to="/" >
          <Navbar.Brand className='invisible_text'>  </Navbar.Brand>
        </LinkContainer>
        <Container style={menuStyle}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            

            {!user && (
              <Nav className="me-auto">
  
                <LinkContainer to="/">
                  <Nav.Link>QualityFare</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/signup">
                  <Nav.Link>Sign Up</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>{" "}

                <LinkContainer to="/about_us">
                  <Nav.Link>About Us</Nav.Link>
                </LinkContainer>

              </Nav>
            )}
            {user && 
             
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>

                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </Nav>
            
            }
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
}

export default AppNavbar