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

const ItemListContainer = ({ children }) => {
  const [juegos, setJuegos] = useState([]);
  let { categoryId } = useParams();

  useEffect(() => {
    const getGames = async () => {
      let q;
      categoryId
        ? (q = query(
            collection(db, "games"),
            where("genero", "==", categoryId)
          ))
        : (q = query(collection(db, "games")));

      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setJuegos(docs);
      console.log(docs);
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
