/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { Bounce, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const mensaje = () => {
    toast.success("Agregado exitosamente", {
      position: "top-right",
      autoClose: 1500,
      transition: Bounce,
      theme: "dark",
    });
  };
  const addCart = (ProductoNuevo, cantidad) => {
    if (IsInCart(ProductoNuevo.id)) {
      // El producto ya está en el carrito, aumentar la cantidad
      setCart(
        cart.map((item) =>
          item.id === ProductoNuevo.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      );
    } else {
      // El producto no está en el carrito, agregarlo
      setCart([...cart, { ...ProductoNuevo, cantidad }]);
    }
    mensaje();
  };

  const IsInCart = (Itemid) => {
    return cart.some((item) => item.id === Itemid);
  };

  const getQuantity = () => {
    let cant = 0;

    cart.forEach((e) => (cant += e.cantidad));

    return cant;
  };

  const Clear = () => {
    setCart([]);
  };

  const RemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart)
  };

  const addItem = () => {};

  return (
    <CartContext.Provider
      value={{ cart, setCart, addCart, getQuantity, Clear }}
    >
      {children}
    </CartContext.Provider>
  );
};
