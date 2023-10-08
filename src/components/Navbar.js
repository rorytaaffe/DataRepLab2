import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">My App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/read">Read</Nav.Link>
        <Nav.Link href="/create">Create</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
