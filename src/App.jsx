/* eslint-disable no-unused-vars */
import "./App.css";

//COMPONENTES
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailcontainer from "./components/ItemDetailContainer/ItemDetailcontainer";

//PAGES

import ErrorPage from "./Pages/ErrorPage/ErrorPage";


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
          <Route path="/" element={<ItemListContainer>
            <h1 style={{marginBottom : "40px"}}>Bienvenido a POWER GAMES</h1>
            <h5>Aqui encontraras los ultimos lanzamientos para todas las plataformas</h5>
          </ItemListContainer>} />
          <Route path="/Detail/:id" element={<ItemDetailcontainer />} />
          <Route path="/Category/:categoryId" element={<ItemListContainer />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
