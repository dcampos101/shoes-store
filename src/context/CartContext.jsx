import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState(0);
  
//cargar desde localStorage al iniciar
    useEffect(() => {
    const saved = localStorage.getItem('carrito');
    if (saved) {
      setCarrito(parseInt(saved, 10));
    }
  }, []);

  // Guardar en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('carrito', carrito);
  }, [carrito]);
  
  const addToCart = () => setCarrito(prev => prev + 1);

  return (
    <CartContext.Provider value={{ carrito, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}