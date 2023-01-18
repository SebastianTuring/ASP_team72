import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import { LinkContainer} from 'react-router-bootstrap';
import { MyContext } from '../../context';
import { useContext } from 'react';

function AppNavbar() {
  const {user} = useContext(MyContext)
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Recipes</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {!user&&(
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
    </Navbar>
  );
}

export default AppNavbar