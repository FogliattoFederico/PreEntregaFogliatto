import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Button from "@mui/material/Button";

import ItemCart from "../ItemCart/ItemCart";

import "./Cart.css";

const Cart = () => {
  let { cart, getQuantity } = useContext(CartContext);

  return (
    <div className="Cart">
      <div className="Contenedor-Juegos">
        {cart.map((juego) => {
          return (
            <div key={juego.id}>
              <ItemCart juego={juego} />
            </div>
          );
        })}
      </div>
      <div className="Cart-container">
        <div>
          {cart.lenght > 0 ? (
            <h2 className="Titulo">Tu Carrito</h2>
          ) : (
            <h2 className="Titulo">Tu carrito esta vacio</h2>
          )}
          <h3>Cantidad de productos : {getQuantity()}</h3>
          <h3>Total: $ {}</h3>
        </div>
        <div className="Botones">
          <Button variant="contained">Pagar</Button>
          <Button variant="contained" color="error">
            Vaciar Carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
