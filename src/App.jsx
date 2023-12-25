/* eslint-disable no-unused-vars */
import "./App.css";

//COMPONENTES
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//PAGES
import JuegosPage from "./Pages/JuegosPage/JuegosPage";
import FpsPage from "./Pages/FpsPage/FpsPage";
import AventuraPage from "./Pages/AventuraPage/AventuraPage";
import TerrorPage from "./Pages/TerrorPage/TerrorPage";
import CarrerasPage from "./Pages/CarrerasPage/CarrerasPage";
import DeportesPage from "./Pages/DeportesPage/DeportesPage";
import PeleaPage from "./Pages/PeleaPage/PeleaPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import DetailPage from "./Pages/DetailPage/DetailPage";

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <NavBar />
        </nav>
        <Routes>
          <Route path="/" element={<JuegosPage />} />
          <Route path="/Shooters" element={<FpsPage />} />
          <Route path="/Aventuras" element={<AventuraPage />} />
          <Route path="/Terror" element={<TerrorPage />} />
          <Route path="/Carreras" element={<CarrerasPage />} />
          <Route path="/Deportes" element={<DeportesPage />} />
          <Route path="/Peleas" element={<PeleaPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/Detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
