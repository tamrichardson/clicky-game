import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>Clicky Game</h1>
      <p>Click on an image to earn points, but don't click on any more than once!</p>
      <h2> Score: {props.score} | Top Score: {props.topScore}</h2>
    </div>
  )
}

export default Header;
