import React from "react";
import "../styles/sass/footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section>
        <Link to="/contact"> Contact </Link>
      </section>
    </footer>
  );
}

export default Footer;
