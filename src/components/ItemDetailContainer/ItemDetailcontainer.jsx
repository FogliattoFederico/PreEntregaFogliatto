import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailcontainer.css";

const ItemDetailcontainer = () => {
  const [juegos, setJuegos] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    axios("../apiJuegos.json").then((resp) => setJuegos(resp.data));
  }, [id]);

  const juego = juegos.find((juego) => {
    return juego.id == id;
  });

  return (
    <div className="ItemDetail">
      {juego ? <ItemDetail juego={juego} /> : null}
    </div>
  );
};

export default ItemDetailcontainer;
