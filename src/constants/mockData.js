export const TOP_CHEFS = [
  { id: 1, name: "Mrs. Salma Begum", kitchen: "Maa-er Hater Ranna", image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=400&q=80", specialty: "Authentic Bhortas", rating: 4.9 },
  { id: 2, name: "Chef Rahim", kitchen: "Bachelor's Feast", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80", specialty: "Old Dhaka Tehari", rating: 4.8 },
  { id: 3, name: "Nasreen Akter", kitchen: "Healthy Eats BD", image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=400&q=80", specialty: "Keto & Diet", rating: 4.8 },
  { id: 4, name: "Anwara Begum", kitchen: "Puran Dhaka Delights", image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?auto=format&fit=crop&w=400&q=80", specialty: "Biryani", rating: 4.7 },
  { id: 5, name: "Mr. Hasan", kitchen: "Spicy & Grill", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80", specialty: "Kebabs", rating: 4.6 },
];

export const WEEKLY_BEST_FOODS = [
  { id: 201, name: "Old Dhaka Tehari", chef: "Chef Rahim", price: 150, image: "https://images.unsplash.com/photo-1626804475297-411d8c6b3e04?auto=format&fit=crop&w=400&q=80", kitchenId: 2 },
  { id: 102, name: "Shutki Bhorta", chef: "Mrs. Salma", price: 60, image: "https://images.unsplash.com/photo-1594970634907-28d88e674060?auto=format&fit=crop&w=400&q=80", kitchenId: 1 },
  { id: 301, name: "Grilled Chicken Salad", chef: "Nasreen A.", price: 350, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80", kitchenId: 3 },
];

export const MOCK_KITCHENS = [
  {
    id: 1,
    name: "Maa-er Hater Ranna",
    chefName: "Mrs. Salma Begum",
    chefTitle: "Home Maker & Bhorta Specialist",
    location: "Mirpur DOHS",
    rating: 4.9,
    reviews: 124,
    type: "Home Chef",
    deliveryMode: "platform",
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=800&q=80",
    tags: ["Bengali", "Bhorta", "Lunch Set"],
    bio: "I have been cooking for my large joint family for 25 years. I believe food is medicine. I use only fresh mustard oil from my village and hand-ground spices.",
    story: "Started in 2019 when my son asked me to share my special Shutki Bhorta with his colleagues. Now I serve 50+ people daily!",
    menu: [
      { id: 101, name: "Office Lunch Set (Chicken)", price: 180, type: "daily", available: true, description: "Rice, Dal, Bhaji, Chicken Curry (Deshi Murghi).", prepTime: "Instant", ingredients: "Miniket Rice, Moong Dal, Seasonal Veg, Deshi Chicken, Ginger, Garlic, Cumin." },
      { id: 102, name: "Shutki Bhorta Special", price: 60, type: "standard", available: true, description: "Spicy Loitta shutki bhorta (100g).", prepTime: "24 hours", ingredients: "Dried Loitta Fish, Mustard Oil, Lots of Garlic, Red Chilies, Onion." },
      { id: 103, name: "Rui Macher Kalia", price: 220, type: "standard", available: true, description: "Traditional fish curry (2 pcs) with gravy.", prepTime: "4 hours", ingredients: "Fresh Rui Fish, Yogurt, Raisins, Onion Paste, Turmeric." },
      { id: 104, name: "Plain Rice (Miniket)", price: 40, type: "daily", available: true, description: "Steamed plain rice.", prepTime: "Instant", ingredients: "Premium Miniket Rice, Water." }
    ]
  },
  {
    id: 2,
    name: "Bachelor's Feast",
    chefName: "Rahim Bhai",
    chefTitle: "Student & Night Chef",
    location: "Farmgate",
    rating: 4.4,
    reviews: 56,
    type: "Student Chef",
    deliveryMode: "seller",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    tags: ["Budget", "Late Night", "Tehari"],
    bio: "I cook the food I love to eat. Heavy, spicy, and filling. Perfect for students studying late at night.",
    story: "I started cooking in my mess to save money. My roommates loved it so much they told me to sell it.",
    menu: [
      { id: 201, name: "Old Dhaka Tehari", price: 150, type: "daily", available: true, description: "Half plate beef tehari with salad.", prepTime: "Instant", ingredients: "Chinigura Rice, Beef small cuts, Mustard Oil, Green Chilies." },
      { id: 202, name: "Egg Khichuri", price: 90, type: "daily", available: true, description: "Bhuna Khichuri with 1 Egg.", prepTime: "Instant", ingredients: "Rice, Lentils, Egg, Turmeric, Onion." }
    ]
  },
  {
    id: 3,
    name: "Healthy Eats BD",
    chefName: "Nasreen A.",
    chefTitle: "Nutritionist & Chef",
    location: "Gulshan 1",
    rating: 4.8,
    reviews: 89,
    type: "Cloud Kitchen",
    deliveryMode: "platform",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    tags: ["Diet", "Keto", "Salads"],
    bio: "Certified nutritionist. I calculate every calorie so you don't have to. Healthy food can be tasty too.",
    story: "After working in a hospital, I realized patients struggle to find healthy food outside. That's why I started Healthy Eats.",
    menu: [
      { id: 301, name: "Grilled Chicken Salad", price: 350, type: "daily", available: true, description: "Olive oil dressing, fresh veggies.", prepTime: "Instant", ingredients: "Chicken Breast, Olive Oil, Lettuce, Cucumber, Cherry Tomatoes." },
      { id: 302, name: "Keto Beef Bowl", price: 450, type: "standard", available: true, description: "Cauliflower rice with beef curry.", prepTime: "12 hours", ingredients: "Cauliflower, Beef, Ghee, Keto Spices." }
    ]
  }
];

