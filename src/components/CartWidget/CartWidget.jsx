import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="Carrito">
      <FaShoppingCart size={35} />
      <span>5</span>
    </div>
  );
};

export default CartWidget;
