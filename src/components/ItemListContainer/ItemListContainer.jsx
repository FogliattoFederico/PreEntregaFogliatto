/* eslint-disable react/prop-types */
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

import ItemList from "../ItemList/ItemList";
// import { ImportExport } from "@mui/icons-material";

const ItemListContainer = ({ children }) => {
  const [juegos, setJuegos] = useState([]);
  let { categoryId } = useParams();

  useEffect(() => {
    // axios("../apiJuegos.json").then((resp) =>
    //   setJuegos(
    //     categoryId
    //       ? resp.data.filter((juego) => juego.genero == categoryId)
    //       : resp.data
    //   )

    // );
    const getGames = async () => {
      let q
      categoryId
        ? (q = query(
            collection(db, "games"),
            where(documentId("genero", "==", categoryId))
          ))
        : (q = query(collection(db, "games")));
      // const q = query(collection(db, "games"))
      console.log(q);
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setJuegos(docs);
    };
    getGames();
  }, [categoryId]);

  return (
    <div>
      <div className="ItemListContainer">{children}</div>
      <h2>{categoryId}</h2>
      <ItemList className="Contenedor-Juegos" juegos={juegos} />
    </div>
  );
};

export default ItemListContainer;
