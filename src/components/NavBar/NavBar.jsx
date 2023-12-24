import GamesIcon from "@mui/icons-material/Games";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="Bg-Nav">
        <div className="NavBarSuperior">
          <div>
            <GamesIcon />
          </div>
          <Link to="/"><h1 className="title">Power Games</h1></Link>
          <div>
            <CartWidget />
          </div>
        </div>
        <ul className="NavBarInferior Link">
          <Link className="Link" to="/Shooters">Shooter</Link>
          <Link className="Link" to="/Aventuras">Aventuras</Link>
          <Link className="Link" to="/Terror">Terror</Link>
          <Link className="Link" to="/Carreras">Carreras</Link>
          <Link className="Link" to="/Deportes">Deportes</Link>
          <Link className="Link" to="/Peleas">Peleas</Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
