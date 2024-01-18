import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailcontainer.css";

//Firebase
import { db } from "../../Firebase/FirebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

const ItemDetailcontainer = () => {
  const [juego, setJuego] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getGame = async () => {
      const q = query(collection(db, "games"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setJuego(docs);
    };
    getGame();
  }, [id]);

  return (
    <div className="ItemDetail">
      {juego.map((juego) => {
        return <ItemDetail juego={juego} key={juego.id} />;
      })}
    </div>
  );
};

export default ItemDetailcontainer;
