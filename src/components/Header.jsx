import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from'@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import "../styles/sass/header.scss";

function Header() {
  return (
    <header>
      <nav>
        <Link className="nav-link" to="/">Amanville.Damien
        </Link>
        <Link className="nav-link" to="/Projects">
          Menu <FontAwesomeIcon icon={faBars} />
        </Link>
      </nav>
    </header>
  );
}
export default Header;
