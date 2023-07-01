import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Cria o contexto do carrinho de compras
export const CartContext = createContext();

// Provedor do contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
  
      setCartItems(updatedCartItems);
      console.log('Quantidade do item atualizada:', item);
    } else {
      const updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
  
      setCartItems(updatedCartItems);
      console.log('Item adicionado ao carrinho:', item);
    }
  };
  

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    return updatedCartItems;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };