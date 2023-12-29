/* eslint-disable no-cond-assign */
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import Item from "../Item/Item";

const ItemListContainer = ({ greeting }) => {
  const [juegos, setJuegos] = useState([]);
  let { categoryId } = useParams();

  useEffect(() => {
    axios("../apiJuegos.json").then((resp) => setJuegos(resp.data));
  }, []);
  
  return (
    <div>
      <h1 className="ItemListContainer">{greeting}</h1>
      <ItemList juegos={juegos} />
    </div>
  );
};

export default ItemListContainer;