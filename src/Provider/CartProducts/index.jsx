import { useState, createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    return setCart([...cart, product]);
  };

  const delFromCart = (product) => {
    const newCart = cart.filter((item) => item !== product);

    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, delFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
