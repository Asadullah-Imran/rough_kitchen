import { createContext, useContext, useState } from "react";
import { INITIAL_STOCK } from "../constants/sellerData";

const StockContext = createContext();

export function StockProvider({ children }) {
  const [stock, setStock] = useState(INITIAL_STOCK);

  const updateStock = (ingredient, quantity) => {
    setStock(prev => ({
      ...prev,
      [ingredient]: {
        ...prev[ingredient],
        quantity: quantity
      }
    }));
  };

  const addStock = (ingredient, quantity) => {
    setStock(prev => ({
      ...prev,
      [ingredient]: {
        ...prev[ingredient],
        quantity: (prev[ingredient]?.quantity || 0) + quantity
      }
    }));
  };

  const getLowStockItems = () => {
    return Object.entries(stock)
      .filter(([_, item]) => item.quantity <= item.minThreshold)
      .map(([name, item]) => ({ name, ...item }));
  };

  const checkStockLevel = (ingredient) => {
    const item = stock[ingredient];
    if (!item) return { level: "unknown", status: "missing" };
    
    if (item.quantity <= item.minThreshold) {
      return { level: "low", status: "critical" };
    } else if (item.quantity <= item.minThreshold * 2) {
      return { level: "medium", status: "warning" };
    } else {
      return { level: "good", status: "ok" };
    }
  };

  return (
    <StockContext.Provider value={{
      stock,
      updateStock,
      addStock,
      getLowStockItems,
      checkStockLevel
    }}>
      {children}
    </StockContext.Provider>
  );
}

export function useStock() {
  const context = useContext(StockContext);
  if (!context) {
    throw new Error("useStock must be used within a StockProvider");
  }
  return context;
}

