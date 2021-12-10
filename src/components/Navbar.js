import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


function Navbar() {
    return (
      <nav className="nav">
        <div className="container flex">
          <img src="./images/airbnb-logo.png" alt="Airbnb" className="nav--logo" />
          <a href="index.html" className="nav--btn">
            <div>Become a Host</div>
          </a>
        </div>
      </nav>
    )
}

export default Navbar;
