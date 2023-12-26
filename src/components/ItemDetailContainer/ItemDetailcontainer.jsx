import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailcontainer = () => {
  const [juegos, setJuegos] = useState([]);

  let {id} = useParams() 

  useEffect(() => {
    axios("../apiJuegos.json").then((resp) => setJuegos(resp.data));
  }, [id]);

//   {juegos.find((juego) => {
//     console.log(juego.id === id)
//   })}

  
  return <div>
    
  </div>;
};

export default ItemDetailcontainer;
