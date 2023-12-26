import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import axios from "axios";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    axios("../apiJuegos.json").then((resp) => setJuegos(resp.data));
  }, []);

  return (
    <div>
      <h1 className="ItemListContainer">{greeting}</h1>
      <ItemList juegos={juegos}/>
    </div>
  );
};

export default ItemListContainer;
