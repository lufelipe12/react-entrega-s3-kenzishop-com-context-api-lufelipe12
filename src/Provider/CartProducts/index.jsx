import { useState, createContext } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    toast.success("Produto adicionado!");
    return setCart([...cart, product]);
  };

  const delFromCart = (product) => {
    const index = cart.findIndex((item) => item === product);
    cart.splice(index, 1);
    const newCart = [...cart];
    toast.error("Produto removido!");
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, delFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
