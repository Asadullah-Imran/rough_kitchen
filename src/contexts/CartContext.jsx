import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, kitchen) => {
    if (cart.length > 0 && cart[0].kitchenId !== kitchen.id) {
      if (!window.confirm("Start new cart? You can only order from one kitchen at a time.")) return;
      setCart([{ ...item, qty: 1, kitchenId: kitchen.id, kitchenName: kitchen.name }]);
      return;
    }
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1, kitchenId: kitchen.id, kitchenName: kitchen.name }]);
    }
  };

  const updateQty = (itemId, delta) => {
    const existing = cart.find(c => c.id === itemId);
    if (!existing) return;
    if (existing.qty + delta <= 0) {
      setCart(cart.filter(c => c.id !== itemId));
    } else {
      setCart(cart.map(c => c.id === itemId ? { ...c, qty: c.qty + delta } : c));
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(c => c.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotals = () => {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const delivery = subtotal > 0 ? 60 : 0;
    const platform = subtotal > 0 ? 5 : 0;
    return { subtotal, delivery, platform, total: subtotal + delivery + platform };
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      getCartTotals
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

