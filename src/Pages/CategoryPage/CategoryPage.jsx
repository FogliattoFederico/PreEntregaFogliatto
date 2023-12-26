import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";


import Item from "../../components/Item/Item";

import "./CategoryPage.css";

const CategoryPage = () => {
  const [juegos, setJuegos] = useState([]);
  let { categoryId } = useParams();

  useEffect(() => {
    axios("../apiJuegos.json").then((resp) => setJuegos(resp.data));
  }, [categoryId]);

  let filteredGames = juegos.filter((juego) => {
    return juego.genero === categoryId;
  });
  return (
    <div className="Contenedor-Juegos-Categoria">
      {filteredGames.map((juego) => {
        return (
          <div key={juego.id}>
            <Item juego={juego} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
