// Mock Orders Data
export const MOCK_ORDERS = [
  {
    id: "ORD-9901",
    customer: {
      id: 1,
      name: "Jamal Uddin",
      phone: "01712345678",
      address: "Mirpur DOHS, Block A, House 5",
      totalOrders: 12,
      totalSpent: 2150,
      lastOrder: "2024-01-15"
    },
    items: [
      { id: 101, name: "Office Lunch Set (Chicken)", qty: 2, price: 180 },
      { id: 104, name: "Plain Rice (Miniket)", qty: 1, price: 40 }
    ],
    status: "pending",
    orderTime: "2024-01-15T10:30:00",
    deliveryTime: "2024-01-15T13:00:00",
    total: 400,
    paymentMethod: "COD"
  },
  {
    id: "ORD-9902",
    customer: {
      id: 2,
      name: "Fatema Khatun",
      phone: "01912345679",
      address: "Gulshan 2, Road 45",
      totalOrders: 8,
      totalSpent: 1520,
      lastOrder: "2024-01-14"
    },
    items: [
      { id: 102, name: "Shutki Bhorta Special", qty: 3, price: 60 },
      { id: 104, name: "Plain Rice (Miniket)", qty: 3, price: 40 }
    ],
    status: "cooking",
    orderTime: "2024-01-15T09:15:00",
    deliveryTime: "2024-01-15T12:00:00",
    total: 300,
    paymentMethod: "COD"
  },
  {
    id: "ORD-9903",
    customer: {
      id: 3,
      name: "Ahmed Hossain",
      phone: "01512345680",
      address: "Dhanmondi 27, Road 5",
      totalOrders: 5,
      totalSpent: 900,
      lastOrder: "2024-01-13"
    },
    items: [
      { id: 101, name: "Office Lunch Set (Chicken)", qty: 1, price: 180 },
      { id: 103, name: "Rui Macher Kalia", qty: 1, price: 220 }
    ],
    status: "cooking",
    orderTime: "2024-01-15T11:00:00",
    deliveryTime: "2024-01-15T14:00:00",
    total: 400,
    paymentMethod: "COD"
  },
  {
    id: "ORD-9904",
    customer: {
      id: 4,
      name: "Rashida Begum",
      phone: "01812345681",
      address: "Uttara Sector 7",
      totalOrders: 15,
      totalSpent: 2750,
      lastOrder: "2024-01-15"
    },
    items: [
      { id: 101, name: "Office Lunch Set (Chicken)", qty: 2, price: 180 },
      { id: 102, name: "Shutki Bhorta Special", qty: 1, price: 60 }
    ],
    status: "pending",
    orderTime: "2024-01-15T11:45:00",
    deliveryTime: "2024-01-15T13:30:00",
    total: 420,
    paymentMethod: "COD"
  }
];

// Mock Stock/Inventory Data
export const INITIAL_STOCK = {
  "Miniket Rice": { quantity: 5, unit: "kg", minThreshold: 2, price: 120 },
  "Moong Dal": { quantity: 2, unit: "kg", minThreshold: 1, price: 150 },
  "Deshi Chicken": { quantity: 3, unit: "kg", minThreshold: 2, price: 400 },
  "Ginger": { quantity: 0.5, unit: "kg", minThreshold: 0.3, price: 300 },
  "Garlic": { quantity: 0.2, unit: "kg", minThreshold: 0.2, price: 250 },
  "Cumin": { quantity: 0.1, unit: "kg", minThreshold: 0.05, price: 800 },
  "Seasonal Veg": { quantity: 2, unit: "kg", minThreshold: 1, price: 80 },
  "Dried Loitta Fish": { quantity: 0.5, unit: "kg", minThreshold: 0.3, price: 600 },
  "Mustard Oil": { quantity: 1, unit: "liter", minThreshold: 0.5, price: 200 },
  "Red Chilies": { quantity: 0.1, unit: "kg", minThreshold: 0.05, price: 500 },
  "Onion": { quantity: 1, unit: "kg", minThreshold: 0.5, price: 60 },
  "Fresh Rui Fish": { quantity: 0, unit: "kg", minThreshold: 1, price: 350 },
  "Yogurt": { quantity: 0, unit: "kg", minThreshold: 0.5, price: 150 },
  "Raisins": { quantity: 0.2, unit: "kg", minThreshold: 0.1, price: 400 },
  "Turmeric": { quantity: 0.05, unit: "kg", minThreshold: 0.03, price: 600 },
  "Water": { quantity: 50, unit: "liter", minThreshold: 10, price: 0 }
};

// Mock Reviews and Feedback
export const MOCK_REVIEWS = [
  {
    id: 1,
    customer: "Jamal Uddin",
    rating: 5,
    comment: "Best Shutki Bhorta in town! Authentic taste reminds me of my village.",
    date: "2024-01-10",
    item: "Shutki Bhorta Special",
    suggestion: "Add more garlic for extra flavor"
  },
  {
    id: 2,
    customer: "Fatema Khatun",
    rating: 4,
    comment: "Love the lunch set. Very filling and tasty. Price is reasonable too.",
    date: "2024-01-08",
    item: "Office Lunch Set (Chicken)",
    suggestion: "Sometimes chicken pieces are too small"
  },
  {
    id: 3,
    customer: "Ahmed Hossain",
    rating: 5,
    comment: "Fish curry was excellent! Fresh fish, perfect spices.",
    date: "2024-01-05",
    item: "Rui Macher Kalia",
    suggestion: "Can you make it less spicy option?"
  },
  {
    id: 4,
    customer: "Rashida Begum",
    rating: 4,
    comment: "Regular customer here. Food quality is consistent. Keep it up!",
    date: "2024-01-12",
    item: "Office Lunch Set (Chicken)",
    suggestion: "Delivery could be faster during lunch hours"
  }
];

// Mock Business Analytics Data
export const BUSINESS_ANALYTICS = {
  revenue: {
    today: 1520,
    thisWeek: 8450,
    thisMonth: 32500,
    lastMonth: 28900
  },
  orders: {
    today: 4,
    thisWeek: 28,
    thisMonth: 112,
    lastMonth: 98
  },
  topCustomers: [
    { id: 4, name: "Rashida Begum", orders: 15, total: 2750, rating: 4.8 },
    { id: 1, name: "Jamal Uddin", orders: 12, total: 2150, rating: 5.0 },
    { id: 2, name: "Fatema Khatun", orders: 8, total: 1520, rating: 4.5 },
    { id: 5, name: "Karim Ali", orders: 7, total: 1280, rating: 4.7 }
  ],
  popularItems: [
    { id: 101, name: "Office Lunch Set (Chicken)", orders: 45, revenue: 8100 },
    { id: 102, name: "Shutki Bhorta Special", orders: 32, revenue: 1920 },
    { id: 104, name: "Plain Rice (Miniket)", orders: 28, revenue: 1120 },
    { id: 103, name: "Rui Macher Kalia", orders: 18, revenue: 3960 }
  ]
};

