
import React from "react";
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <Nav>
      <Navbar.Brand >Clicky Game</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="score">
          Score: 0
        </Navbar.Text>
        <Navbar.Text className="top-score">
          Top Score: 0
        </Navbar.Text>
      </Navbar.Collapse>
    </Nav>
  )
}

export default Nav;