import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const getLinks = links.map ((link, index) => <a key={index} href={"#"+link}>{link}</a>)
  return (
    <nav> {getLinks} </nav>
  );
 

}

export default NavBar;
