import { MOCK_KITCHENS } from "../constants/mockData";

/**
 * Extract ingredients from menu item ingredients string
 */
export function parseIngredients(ingredientsString) {
  if (!ingredientsString) return [];
  return ingredientsString.split(',').map(ing => ing.trim());
}

/**
 * Calculate estimated bazar (grocery shopping list) for orders
 */
export function calculateEstimatedBazar(orders, kitchenId = 1) {
  const kitchen = MOCK_KITCHENS.find(k => k.id === kitchenId);
  if (!kitchen) return { items: [], total: 0 };

  const ingredientCount = {};
  
  // Process each order
  orders.forEach(order => {
    order.items.forEach(orderItem => {
      const menuItem = kitchen.menu.find(m => m.id === orderItem.id);
      if (menuItem && menuItem.ingredients) {
        const ingredients = parseIngredients(menuItem.ingredients);
        ingredients.forEach(ingredient => {
          // Count ingredients based on quantity
          for (let i = 0; i < orderItem.qty; i++) {
            ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
          }
        });
      }
    });
  });

  // Convert to shopping list format with better estimation
  const bazarList = Object.entries(ingredientCount).map(([ingredient, count]) => ({
    ingredient,
    estimatedQty: count,
    unit: "pcs/units",
    estimatedPrice: count * 50 // Base price estimate per unit
  }));

  return {
    items: bazarList,
    totalItems: bazarList.length,
    estimatedTotal: bazarList.reduce((sum, item) => sum + item.estimatedPrice, 0)
  };
}

/**
 * Check if stock is sufficient for orders
 */
export function checkStockAvailability(stock, orders, kitchenId = 1) {
  const kitchen = MOCK_KITCHENS.find(k => k.id === kitchenId);
  if (!kitchen) return { sufficient: true, missing: [] };

  const requiredIngredients = {};
  
  orders.forEach(order => {
    order.items.forEach(orderItem => {
      const menuItem = kitchen.menu.find(m => m.id === orderItem.id);
      if (menuItem && menuItem.ingredients) {
        const ingredients = parseIngredients(menuItem.ingredients);
        ingredients.forEach(ingredient => {
          for (let i = 0; i < orderItem.qty; i++) {
            requiredIngredients[ingredient] = (requiredIngredients[ingredient] || 0) + 1;
          }
        });
      }
    });
  });

  const missing = [];
  Object.entries(requiredIngredients).forEach(([ingredient, required]) => {
    const stockItem = Object.keys(stock).find(key => 
      ingredient.toLowerCase().includes(key.toLowerCase()) || 
      key.toLowerCase().includes(ingredient.toLowerCase())
    );
    
    if (!stockItem || stock[stockItem].quantity < required) {
      missing.push({
        ingredient,
        required,
        available: stockItem ? stock[stockItem].quantity : 0,
        needed: required - (stockItem ? stock[stockItem].quantity : 0)
      });
    }
  });

  return {
    sufficient: missing.length === 0,
    missing
  };
}

