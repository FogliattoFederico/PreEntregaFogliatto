import "./ItemList.css"
import Item from "../Item/Item"
import { Link } from "react-router-dom";

const ItemList = ({juegos}) => {
  return (
    <div className="Contenedor-Juegos">
      {juegos.map((juego) => {
          return (
            <div key={juego.id} className="">
              {/* <Link to={`/detail/${juego.id}`}> */}
              <Item juego={juego} />
              {/* </Link> */}
            </div>
          );
        })}
    </div>
  )
}

export default ItemList
