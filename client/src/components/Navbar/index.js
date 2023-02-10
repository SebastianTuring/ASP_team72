import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap';
import { MyContext } from '../../context';
import { useContext } from 'react';

function AppNavbar() {
  const { user } = useContext(MyContext)
  const titleBarStyle = {
    justifyContent: 'center',
    position: "fixed",
    top: 0,
    // backgroundColor: "white",
    backgroundColor: "#1fcedb",
    zIndex: 1,
    maxWidth: "100vw",
    padding: 0,
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
      <Container style={titleBarStyle}>
        <LinkContainer to="/" >
          <Navbar.Brand>QualityFair</Navbar.Brand>
        </LinkContainer>
        <Container style={menuStyle}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {!user && (
              <Nav className="me-auto">
                <LinkContainer to="/signup">
                  <Nav.Link>Sign Up</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
}

export default AppNavbar