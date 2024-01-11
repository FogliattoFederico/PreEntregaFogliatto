/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ItemCount.css";

import Button from "@mui/material/Button";

const ItemCount = ({ stock, initial, onAdd }) => {

  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
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
        <button className="" onClick={decrement}>
          -
        </button>
        <h4 className="">{quantity}</h4>
        <button className="" onClick={increment}>
          +
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => onAdd(quantity)}
          disabled={!stock}
          variant="contained"
          sx={{
            padding: "10px",
            display: "inline-block",
            marginTop: "15px",
            width: "100%",
            fontSize: "15px",
          }}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
