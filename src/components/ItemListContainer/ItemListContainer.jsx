/* eslint-disable react/prop-types */
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ children }) => {
  const [juegos, setJuegos] = useState([]);
  let { categoryId } = useParams();

  useEffect(() => {
    axios("../apiJuegos.json").then((resp) =>
      setJuegos(
        categoryId
          ? resp.data.filter((juego) => juego.genero == categoryId)
          : resp.data
      )
      
    );
  }, [categoryId]);

  return (
    <div>
      <h1 className="ItemListContainer">{children}</h1>
      <h2>{categoryId}</h2>
      <ItemList className="Contenedor-Juegos" juegos={juegos} />
    </div>
  );
};

export default ItemListContainer;
