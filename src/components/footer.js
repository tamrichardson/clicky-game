import React from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();
console.log(year);

function Footer() {
  return (
    <footer>
      <p>Tammy Richardson &copy; {year}</p>
    </footer>
  )
}

export default Footer;