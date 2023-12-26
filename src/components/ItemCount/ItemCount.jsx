import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity <= stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex-column">
      <div className="flex">
        <button className="" onClick={decrement}>-</button>
        <h4 className="">{quantity}</h4>
        <button className="" onClick={increment}>+</button>
      </div>
      <div>
        <button className="Boton" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
