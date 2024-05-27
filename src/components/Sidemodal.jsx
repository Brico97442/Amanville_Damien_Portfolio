import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  open: { opacity: 1, transition: { duration: 0.5 } },
  closed: { opacity: 0, transition: { duration: 0.5 } },
};

const modalVariants = {
  open: {
    x: 0,
    transition: { type: "tween", ease: "easeInOut", duration: 0.5 },
  },
  closed: {
    x: "100%",
    transition: { type: "tween", ease: "easeInOut", duration: 0.5 },
  },
};

function Sidemodal({ isOpen, closeModal }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="backdrop"
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            onClick={closeModal}
          />
          <motion.aside
            className="side-modal"
            initial="closed"
            animate="open"
            exit="closed"
            variants={modalVariants}
          >
            <button className="side-modal-container-close-btn" onClick={closeModal}>
              <FontAwesomeIcon icon={faXmark} size="xl" />
            </button>
            <div className="side-modal-container">
              <nav>
                <NavLink className="nav-link" to="/" onClick={closeModal}>
                  ACCUEIL
                </NavLink>
                <NavLink className="nav-link" to="/projects" onClick={closeModal}>
                  PROJETS
                </NavLink>
                <NavLink className="nav-link" to="/contact" onClick={closeModal}>
                  CONTACT
                </NavLink>
              </nav>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidemodal;
