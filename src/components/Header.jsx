import React from "react";
import "../styles/sass/header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">A D
        </Link>
        <Link to="/Projects">
          Menu
        </Link>
      </nav>
    </header>
  );
}
export default Header;
