import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from'@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


import "../styles/sass/header.scss";
import Sidemodal from "./Sidemodal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header>
      <nav>
        <Link className="nav-link" to="/">Amanville.Damien
        </Link>
        <button onClick={openModal} className="nav-link">
          Menu <FontAwesomeIcon icon={faBars} />
        </button>
        {isModalOpen && <Sidemodal closeModal={closeModal} />}
      </nav>

    </header>
  );
}
export default Header;
