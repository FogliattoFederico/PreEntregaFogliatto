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
          <Link to="/">
            <h1 className="title">Power Games</h1>
          </Link>
          <div>
            <CartWidget />
          </div>
        </div>
        <ul className="NavBarInferior Link">
          <Link className="Link" to="/Category/Shooter">
            Shooter
          </Link>
          <Link className="Link" to="/Category/Aventura">
            Aventuras
          </Link>
          <Link className="Link" to="/Category/Terror">
            Terror
          </Link>
          <Link className="Link" to="/Category/Carrera">
            Carreras
          </Link>
          <Link className="Link" to="/Category/Deporte">
            Deportes
          </Link>
          <Link className="Link" to="/Category/Pelea">
            Peleas
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
