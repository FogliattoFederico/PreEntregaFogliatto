/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

import { useState } from "react";

const ItemCart = ({ juego }) => {
  let { nombre, precio, imagen, cantidad, stock } = juego;

  let { cart, setCart, addCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(cantidad);

  const increment = () => {
    if (cantidad < stock) {
      setQuantity(quantity + 1);
      
    }
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const clear = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    console.log(updatedCart)
    setCart(updatedCart)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400rem"
          image={imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {nombre}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Cantidad: {cantidad}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Precio: ${precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <button onClick={increment}>+</button>
        <p style={{ margin: "0 2rem" }}>{quantity}</p>
        <button onClick={decrement}>-</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={clear} variant="text" sx={{ fontSize: "1.5rem", marginBottom: 2 }}>
          X
        </Button>
      </div>
    </Card>
  );
};
export default ItemCart;
