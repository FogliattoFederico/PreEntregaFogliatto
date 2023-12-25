import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ItemContainer from "../ItemContainer/ItemContainer";

const ItemListContainer = ({ greeting }) => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    axios("apiJuegos.json").then((resp) => setJuegos(resp.data));
  }, []);

  return (
    <div>
      <h1 className="ItemListContainer">{greeting}</h1>
      <div className="Contenedor-Juegos">
        {juegos.map((juego) => {
          return (
            <div key={juego.id} className="">
              <Link to={`/detail/${juego.id}`}>
              <ItemContainer juego={juego} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
