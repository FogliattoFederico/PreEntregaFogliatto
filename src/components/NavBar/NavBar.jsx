import GamesIcon from "@mui/icons-material/Games";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="Bg-Nav">
        <div className="NavBarSuperior">
          <div>
            <GamesIcon />
          </div>
          <h1>Power Games</h1>
          <div>
            <CartWidget />
          </div>
        </div>
        <ul className="NavBarInferior">
          <li>
            <a href="#">FPS</a>
          </li>
          <li>
            <a href="#">Aventuras</a>
          </li>
          <li>
            <a href="#">Terror</a>
          </li>
          <li>
            <a href="#">Carreras</a>
          </li>
          <li>
            <a href="#">Deportes</a>
          </li>
          <li>
            <a href="#">Peleas</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
