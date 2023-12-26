import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

// import Item from "../Item/Item";
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
      {/* <div className="Contenedor-Juegos"> */}
        {/* {juegos.map((juego) => {
          return (
            <div key={juego.id} className="">
              <Link to={`/detail/${juego.id}`}>
              <Item juego={juego} />
              </Link>
            </div>
          );
        })} */}

      {/* </div> */}
    </div>
  );
};

export default ItemListContainer;
