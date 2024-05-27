// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Header({ openModal }) {
  return (
    <header>
      <nav>
        <Link className="nav-link" to="/">
          Amanville
          <br />
          Damien
        </Link>
        <button onClick={openModal} className="nav-link">
          Menu <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
}

export default Header;
