/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

// const GamesInCart = [
//   {
//     id: 1,
//     nombre: "Call of Duty Modern Warfare 3",
//     descripcion: "El mas reciente shooter de Activision",
//     genero: "Shooter",
//     precio: 70,
//     imagen: "https://i.ebayimg.com/images/g/sfIAAOSwATZlbjci/s-l1600.jpg",
//   },
//   {
//     id: 2,
//     nombre: "Battlefield 2042",
//     descripcion: "Ultima Bazofia de Ea",
//     genero: "Shooter",
//     precio: 70,
//     imagen:
//       "https://arsonyb2c.vtexassets.com/arquivos/ids/361742-800-800?v=638109227575730000&width=800&height=800&aspect=true",
//   },
// ];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addCart = () => {

  }

  const IsInCart = (id) => {

  }

  const Clear = () => {
    setCart([])
  }

  const RemoveItem = (id) => {

  }

  const addItem = () => {
    
  }
  
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
