import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {

  const {cart} = useContext(CartContext)
 
  

  return (
    <div className="Carrito">
      <FaShoppingCart size={35} />
      <span>{cart.length}</span>
    </div>
  );
};

export default CartWidget;
