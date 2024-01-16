/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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

  const RemoveItem = (id) => {};

  const addItem = () => {};

  return (
    <CartContext.Provider value={{ cart, setCart, addCart, getQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
