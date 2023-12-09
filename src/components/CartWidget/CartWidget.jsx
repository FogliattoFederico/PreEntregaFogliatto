// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="Carrito">
      <FaShoppingCart />
      <span>5</span>
    </div>
  )
}

export default CartWidget
