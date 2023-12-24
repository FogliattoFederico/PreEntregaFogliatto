/* eslint-disable no-unused-vars */
import "./App.css";

//COMPONENTES
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//PAGES
import FpsPage from "./Pages/FpsPage/FpsPage"
import AventuraPage from "./Pages/AventuraPage/AventuraPage";
import TerrorPage from "./Pages/TerrorPage/TerrorPage"
import CarrerasPage from "./Pages/CarrerasPage/CarrerasPage"
import DeportesPage from "./Pages/DeportesPage/DeportesPage";
import PeleaPage from "./Pages/PeleaPage/PeleaPage";

//REACT ROUTER DOM
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <NavBar />
        </nav>
        <main>
          <h1>
            <ItemListContainer greeting="Bienvenido a nuestro sitio...." />
          </h1>
          <div className="Contenedor"></div>
        </main>
        <Routes>
          <Route path="/Shooters" element={<FpsPage/>}/>
          <Route path="/Aventuras" element={<AventuraPage/>}/>
          <Route path="/Terror" element={<TerrorPage/>}/>
          <Route path="/Carreras" element={<CarrerasPage/>}/>
          <Route path="/Deportes" element={<DeportesPage/>}/>
          <Route path="/Peleas" element={<PeleaPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
