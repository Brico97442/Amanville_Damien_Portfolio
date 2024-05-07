// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../styles/sass/header.scss";

function Header({ openModal }) {
  // Recevoir la fonction openModal en tant que prop
  return (
    <header>
      <nav>
        <Link className="nav-link" to="/">
          HOME
        </Link>
        <button onClick={openModal} className="nav-link">
          Menu <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
}

export default Header;
