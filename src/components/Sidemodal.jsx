import { Link } from "react-router-dom";
import "../styles/sass/header.scss";

function Sidemodal() {
  return (
    <section>
      <div className="side-modal-container">
        <nav>
          <Link className="nav-link" to="/">
            ACCUEIL
          </Link>
          <Link className="nav-link" to="/Projects">
            PROJETS
          </Link>
          <Link className="nav-link" to="/Projects">
            A PROPOS
          </Link>
          <Link className="nav-link" to="/Projects">
            Menu
          </Link>
        </nav>
      </div>
    </section>
  );
}
export default Sidemodal;
