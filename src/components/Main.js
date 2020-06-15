
import React from "react";

function Main(props) {
  return (
    //   <span onClick={() => props.removeFriend(props.id)} className="remove">
    //   𝘅
    // </span>
    <img onClick={() => props.clickListener(props.id)} src={props.image} alt="" />
  )
}

export default Main;
