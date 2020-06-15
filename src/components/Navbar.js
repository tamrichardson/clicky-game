
import React from "react";

function Navbar() {
  return (
    <Navbar>
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
    </Navbar>
  )
}

export default Navbar;