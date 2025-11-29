import {
  ArrowLeft,
  ArrowRight,
  Award,
  Camera,
  CheckCircle,
  ChefHat,
  Clock,
  CreditCard,
  Flame,
  Info,
  LogOut,
  MapPin,
  Menu,
  Minus,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
  Upload,
  User,
  Utensils,
  X,
} from "lucide-react";
import React, { useState } from "react";

// --- MOCK DATA ---
const TOP_CHEFS = [
  {
    id: 1,
    name: "Mrs. Salma Begum",
    kitchen: "Maa-er Hater Ranna",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=400&q=80",
    specialty: "Authentic Bhortas",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Chef Rahim",
    kitchen: "Bachelor's Feast",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80",
    specialty: "Old Dhaka Tehari",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Nasreen Akter",
    kitchen: "Healthy Eats BD",
    image:
      "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=400&q=80",
    specialty: "Keto & Diet",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Anwara Begum",
    kitchen: "Puran Dhaka Delights",
    image:
      "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?auto=format&fit=crop&w=400&q=80",
    specialty: "Biryani",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Mr. Hasan",
    kitchen: "Spicy & Grill",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80",
    specialty: "Kebabs",
    rating: 4.6,
  },
];

const WEEKLY_BEST_FOODS = [
  {
    id: 201,
    name: "Old Dhaka Tehari",
    chef: "Chef Rahim",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1626804475297-411d8c6b3e04?auto=format&fit=crop&w=400&q=80",
    kitchenId: 2,
  },
  {
    id: 102,
    name: "Shutki Bhorta",
    chef: "Mrs. Salma",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1594970634907-28d88e674060?auto=format&fit=crop&w=400&q=80",
    kitchenId: 1,
  },
  {
    id: 301,
    name: "Grilled Chicken Salad",
    chef: "Nasreen A.",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    kitchenId: 3,
  },
];

const MOCK_KITCHENS = [
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
    image:
      "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=800&q=80",
    tags: ["Bengali", "Bhorta", "Lunch Set"],
    bio: "I have been cooking for my large joint family for 25 years. I believe food is medicine. I use only fresh mustard oil from my village and hand-ground spices.",
    story:
      "Started in 2019 when my son asked me to share my special Shutki Bhorta with his colleagues. Now I serve 50+ people daily!",
    menu: [
      {
        id: 101,
        name: "Office Lunch Set (Chicken)",
        price: 180,
        type: "daily",
        available: true,
        description: "Rice, Dal, Bhaji, Chicken Curry (Deshi Murghi).",
        prepTime: "Instant",
        ingredients:
          "Miniket Rice, Moong Dal, Seasonal Veg, Deshi Chicken, Ginger, Garlic, Cumin.",
      },
      {
        id: 102,
        name: "Shutki Bhorta Special",
        price: 60,
        type: "standard",
        available: true,
        description: "Spicy Loitta shutki bhorta (100g).",
        prepTime: "24 hours",
        ingredients:
          "Dried Loitta Fish, Mustard Oil, Lots of Garlic, Red Chilies, Onion.",
      },
      {
        id: 103,
        name: "Rui Macher Kalia",
        price: 220,
        type: "standard",
        available: true,
        description: "Traditional fish curry (2 pcs) with gravy.",
        prepTime: "4 hours",
        ingredients: "Fresh Rui Fish, Yogurt, Raisins, Onion Paste, Turmeric.",
      },
      {
        id: 104,
        name: "Plain Rice (Miniket)",
        price: 40,
        type: "daily",
        available: true,
        description: "Steamed plain rice.",
        prepTime: "Instant",
        ingredients: "Premium Miniket Rice, Water.",
      },
    ],
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
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    tags: ["Budget", "Late Night", "Tehari"],
    bio: "I cook the food I love to eat. Heavy, spicy, and filling. Perfect for students studying late at night.",
    story:
      "I started cooking in my mess to save money. My roommates loved it so much they told me to sell it.",
    menu: [
      {
        id: 201,
        name: "Old Dhaka Tehari",
        price: 150,
        type: "daily",
        available: true,
        description: "Half plate beef tehari with salad.",
        prepTime: "Instant",
        ingredients:
          "Chinigura Rice, Beef small cuts, Mustard Oil, Green Chilies.",
      },
      {
        id: 202,
        name: "Egg Khichuri",
        price: 90,
        type: "daily",
        available: true,
        description: "Bhuna Khichuri with 1 Egg.",
        prepTime: "Instant",
        ingredients: "Rice, Lentils, Egg, Turmeric, Onion.",
      },
    ],
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
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    tags: ["Diet", "Keto", "Salads"],
    bio: "Certified nutritionist. I calculate every calorie so you don't have to. Healthy food can be tasty too.",
    story:
      "After working in a hospital, I realized patients struggle to find healthy food outside. That's why I started Healthy Eats.",
    menu: [
      {
        id: 301,
        name: "Grilled Chicken Salad",
        price: 350,
        type: "daily",
        available: true,
        description: "Olive oil dressing, fresh veggies.",
        prepTime: "Instant",
        ingredients:
          "Chicken Breast, Olive Oil, Lettuce, Cucumber, Cherry Tomatoes.",
      },
      {
        id: 302,
        name: "Keto Beef Bowl",
        price: 450,
        type: "standard",
        available: true,
        description: "Cauliflower rice with beef curry.",
        prepTime: "12 hours",
        ingredients: "Cauliflower, Beef, Ghee, Keto Spices.",
      },
    ],
  },
];

// --- COMPONENTS ---

const Badge = ({ children, color = "gray", className = "" }) => {
  const colors = {
    gray: "bg-gray-100 text-gray-700",
    green: "bg-emerald-100 text-emerald-800",
    yellow: "bg-yellow-100 text-yellow-800",
    teal: "bg-teal-50 text-teal-700",
    dark: "bg-teal-900 text-white",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap ${
        colors[color] || colors.gray
      } ${className}`}
    >
      {children}
    </span>
  );
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  icon: Icon,
  fullWidth = false,
}) => {
  const baseStyle =
    "px-5 py-2.5 rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-yellow-400 hover:bg-yellow-500 text-teal-900 shadow-md hover:shadow-lg",
    secondary:
      "bg-white hover:bg-gray-50 text-teal-800 border border-teal-200 shadow-sm",
    ghost: "text-teal-700 hover:bg-teal-50",
    danger: "bg-red-50 hover:bg-red-100 text-red-600",
    dark: "bg-teal-800 hover:bg-teal-900 text-white shadow-md",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

// --- MAIN APP ---

export default function HomeCraveBD() {
  const [view, setView] = useState("landing");
  const [userRole, setUserRole] = useState(null); // 'buyer' | 'seller' | null
  const [cart, setCart] = useState([]);
  const [selectedKitchen, setSelectedKitchen] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showIngredients, setShowIngredients] = useState(null);

  // New State for Login Modal
  const [showLoginModal, setShowLoginModal] = useState(false);

  // --- ACTIONS ---
  const addToCart = (item, kitchen) => {
    if (cart.length > 0 && cart[0].kitchenId !== kitchen.id) {
      if (
        !window.confirm(
          "Start new cart? You can only order from one kitchen at a time."
        )
      )
        return;
      setCart([
        { ...item, qty: 1, kitchenId: kitchen.id, kitchenName: kitchen.name },
      ]);
      return;
    }
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart(
        cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c))
      );
    } else {
      setCart([
        ...cart,
        { ...item, qty: 1, kitchenId: kitchen.id, kitchenName: kitchen.name },
      ]);
    }
  };

  const updateQty = (itemId, delta) => {
    const existing = cart.find((c) => c.id === itemId);
    if (!existing) return;
    if (existing.qty + delta <= 0) {
      setCart(cart.filter((c) => c.id !== itemId));
    } else {
      setCart(
        cart.map((c) => (c.id === itemId ? { ...c, qty: c.qty + delta } : c))
      );
    }
  };

  const getCartTotals = () => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const delivery = subtotal > 0 ? 60 : 0;
    const platform = subtotal > 0 ? 5 : 0;
    return {
      subtotal,
      delivery,
      platform,
      total: subtotal + delivery + platform,
    };
  };

  const openKitchen = (kitchenId) => {
    const kitchen = MOCK_KITCHENS.find((k) => k.id === kitchenId);
    if (kitchen) {
      setSelectedKitchen(kitchen);
      setView("detail");
    }
  };

  const handleLogin = (role) => {
    setUserRole(role);
    setShowLoginModal(false);
    if (role === "buyer") setView("list");
    if (role === "seller") setView("seller");
  };

  // --- SUB-COMPONENTS ---

  // 1. The Login Modal (The "Grand Lobby" Door)
  const LoginModal = () => {
    if (!showLoginModal) return null;
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={() => setShowLoginModal(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold text-teal-900 text-center mb-2">
            Welcome to GhoroaRanna
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Please select how you want to continue
          </p>

          <div className="grid gap-4">
            {/* Buyer Option */}
            <button
              onClick={() => handleLogin("buyer")}
              className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-100 hover:border-yellow-400 hover:bg-yellow-50 transition-all group text-left"
            >
              <div className="bg-yellow-100 text-yellow-700 p-3 rounded-full group-hover:scale-110 transition">
                <Utensils size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">
                  I want to Order Food
                </h3>
                <p className="text-xs text-gray-500">
                  Login as a Foodie (Buyer)
                </p>
              </div>
              <ArrowRight className="ml-auto text-gray-300 group-hover:text-yellow-500" />
            </button>

            {/* Seller Option */}
            <button
              onClick={() => handleLogin("seller")}
              className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-100 hover:border-teal-500 hover:bg-teal-50 transition-all group text-left"
            >
              <div className="bg-teal-100 text-teal-700 p-3 rounded-full group-hover:scale-110 transition">
                <ChefHat size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">I want to Sell Food</h3>
                <p className="text-xs text-gray-500">Login as a Home Chef</p>
              </div>
              <ArrowRight className="ml-auto text-gray-300 group-hover:text-teal-500" />
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            Don't have a chef account?{" "}
            <button
              onClick={() => {
                setShowLoginModal(false);
                setView("chef-registration");
              }}
              className="text-teal-600 font-bold hover:underline"
            >
              Register here
            </button>
          </p>
        </div>
      </div>
    );
  };

  const Navbar = () => (
    <nav className="bg-teal-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setView("landing")}
          >
            <div className="bg-yellow-400 p-1.5 rounded-lg text-teal-900">
              <ChefHat size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight">
              Ghoroa<span className="text-yellow-400">Ranna</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {userRole === "buyer" && (
              <>
                <button
                  onClick={() => setView("list")}
                  className={`text-sm font-medium hover:text-yellow-400 transition ${
                    view === "list" ? "text-yellow-400" : "text-gray-200"
                  }`}
                >
                  Browse Kitchens
                </button>
              </>
            )}

            {userRole ? (
              <div className="flex items-center gap-4 pl-8 border-l border-teal-700">
                <div className="text-right hidden lg:block">
                  <p className="text-xs text-teal-300">Welcome,</p>
                  <p className="font-bold text-sm">
                    {userRole === "buyer" ? "Foodie" : "Chef"}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setUserRole(null);
                    setView("landing");
                  }}
                  className="p-2 bg-teal-900 rounded-full hover:bg-teal-700 transition"
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="text-gray-200 hover:text-white font-medium"
                >
                  Log in
                </button>
                <Button
                  onClick={() => setView("chef-registration")}
                  variant="primary"
                  className="px-6"
                >
                  Join as Chef
                </Button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {userRole === "buyer" && (
              <button
                onClick={() => setView("cart-mobile")}
                className="relative p-2"
              >
                <ShoppingBag size={24} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-yellow-400 text-teal-900 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-teal-900 p-4 space-y-4 border-t border-teal-700">
          <button
            onClick={() => {
              setView("list");
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 font-medium"
          >
            Browse Kitchens
          </button>
          <div className="pt-4 border-t border-teal-700">
            {userRole ? (
              <button
                onClick={() => {
                  setUserRole(null);
                  setView("landing");
                }}
                className="flex items-center gap-2 text-red-300"
              >
                <LogOut size={16} /> Sign Out
              </button>
            ) : (
              <div className="grid gap-2">
                <Button
                  onClick={() => {
                    setShowLoginModal(true);
                    setMobileMenuOpen(false);
                  }}
                  fullWidth
                >
                  Log In
                </Button>
                <Button
                  onClick={() => {
                    setView("chef-registration");
                    setMobileMenuOpen(false);
                  }}
                  variant="secondary"
                  fullWidth
                >
                  Join as Seller
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );

  const ChefRegistration = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      kitchenName: "",
      address: "",
      city: "Dhaka",
      nid: "",
      bkash: "",
    });

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = () => {
      setView("registration-success");
    };

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="bg-teal-800 p-4">
          <button
            onClick={() => setView("landing")}
            className="text-white flex items-center gap-2"
          >
            <ArrowLeft size={20} /> Back to Home
          </button>
        </div>

        <div className="flex-1 max-w-2xl mx-auto w-full p-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gray-100 h-2 w-full">
              <div
                className="bg-yellow-400 h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-teal-900 mb-2">
                  Become a Chef
                </h2>
                <p className="text-gray-500">
                  Step {step} of 3:{" "}
                  {step === 1
                    ? "Personal Info"
                    : step === 2
                    ? "Kitchen Details"
                    : "Verification"}
                </p>
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name (As per NID)
                    </label>
                    <input
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                      placeholder="e.g. Salma Begum"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                      placeholder="017..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <Button fullWidth onClick={handleNext} className="mt-6">
                    Next Step <ArrowRight size={18} />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kitchen Name
                    </label>
                    <input
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                      placeholder="e.g. Maa-er Ranna"
                      value={formData.kitchenName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          kitchenName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pickup Address
                    </label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                      rows="3"
                      placeholder="Full address for delivery pickup"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Kitchen Photo
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 hover:bg-gray-50 cursor-pointer">
                      <Camera className="mx-auto mb-2 text-gray-400" />
                      <span className="text-sm">
                        Click to upload a photo of your cooking area
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button
                      onClick={handleBack}
                      variant="secondary"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button onClick={handleNext} className="flex-1">
                      Next Step <ArrowRight size={18} />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <div className="bg-blue-50 p-4 rounded-lg flex gap-3 text-blue-800 text-sm mb-6">
                    <ShieldCheck size={20} className="shrink-0" />
                    We verify every chef to ensure food safety and trust. Your
                    data is secure.
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      National ID (NID) Number
                    </label>
                    <input
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                      placeholder="NID Number"
                      value={formData.nid}
                      onChange={(e) =>
                        setFormData({ ...formData, nid: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload NID Photo
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500 hover:bg-gray-50 cursor-pointer flex items-center justify-center gap-2">
                      <Upload size={18} /> Upload Front Side
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bkash/Nagad Number (For Payments)
                    </label>
                    <div className="relative">
                      <input
                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        placeholder="017..."
                        value={formData.bkash}
                        onChange={(e) =>
                          setFormData({ ...formData, bkash: e.target.value })
                        }
                      />
                      <CreditCard
                        className="absolute left-3 top-3.5 text-gray-400"
                        size={18}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button
                      onClick={handleBack}
                      variant="secondary"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="flex-1 bg-teal-800 hover:bg-teal-900 text-white"
                    >
                      Submit Application
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RegistrationSuccess = () => (
    <div className="min-h-screen bg-teal-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl animate-bounce">
        <CheckCircle className="text-teal-600 w-12 h-12" />
      </div>
      <h2 className="text-3xl font-bold text-teal-900 mb-2">
        Application Submitted!
      </h2>
      <p className="text-teal-700 mb-8 max-w-md">
        Thank you for applying to be a Chef on GhoroaRanna. <br />
        Our team will verify your details and call you within 24 hours.
      </p>
      <Button onClick={() => setView("landing")}>Back to Home</Button>
    </div>
  );

  const LandingPage = () => (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 px-4 py-2 rounded-full font-bold text-sm border border-teal-100">
              <Star size={16} className="text-yellow-500 fill-yellow-500" /> #1
              Homemade Food App in BD
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-teal-900 leading-tight">
              Taste the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                Comfort of Home
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Connect with verified home chefs in your neighborhood. Authentic
              flavors, hygienic preparation, and delivered with love.
            </p>

            {/* Dual Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => handleLogin("buyer")}
                variant="dark"
                className="h-14 px-8 text-lg"
                icon={Utensils}
              >
                Order Food
              </Button>
              <Button
                onClick={() => setView("chef-registration")}
                variant="secondary"
                className="h-14 px-8 text-lg"
                icon={ChefHat}
              >
                Become a Chef
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Truck size={20} /> Fast Delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} /> Verified Chefs
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute top-10 -right-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-300 rounded-full blur-3xl opacity-30"></div>
            <img
              src="https://images.unsplash.com/photo-1543353071-873f1753ade2?auto=format&fit=crop&w=800&q=80"
              alt="Food Spread"
              className="relative z-10 rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* Footer for SEO/Info */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-teal-900 text-lg mb-4">
              GhoroaRanna
            </h4>
            <p className="text-gray-500 text-sm">
              Bringing the taste of home to your doorstep.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">For Foodies</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>Browse Kitchens</li>
              <li>Weekly Specials</li>
              <li>Track Order</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">For Chefs</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>Register Kitchen</li>
              <li>Chef Dashboard</li>
              <li>Safety Guidelines</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-4">Contact</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>support@ghoroaranna.com</li>
              <li>+880 1711 000000</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );

  // --- BUYER VIEWS ---

  const CartSidebar = () => {
    const { subtotal, delivery, total } = getCartTotals();

    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
        <h3 className="font-bold text-xl text-teal-900 mb-6 flex items-center gap-2">
          <ShoppingBag size={20} /> Your Basket
        </h3>

        {cart.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-200">
            <ShoppingBag size={32} className="mx-auto text-gray-300 mb-2" />
            <p className="text-gray-500 text-sm">Basket is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start group"
                >
                  <div>
                    <p className="font-medium text-gray-800 text-sm line-clamp-1">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      ৳ {item.price * item.qty}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="p-1 hover:bg-white rounded-md shadow-sm text-gray-600 transition"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-xs font-bold w-3 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="p-1 hover:bg-white rounded-md shadow-sm text-teal-600 transition"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2 mb-6">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>৳ {subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Delivery</span>
                <span>৳ {delivery}</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-teal-900 pt-2 border-t border-dashed">
                <span>Total</span>
                <span>৳ {total}</span>
              </div>
            </div>

            <Button fullWidth onClick={() => setView("success")}>
              Checkout (COD)
            </Button>
          </>
        )}
      </div>
    );
  };

  const KitchenListing = () => {
    const filtered = MOCK_KITCHENS.filter(
      (k) =>
        k.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        k.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <Navbar />

        {/* Search Header */}
        <div className="bg-teal-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Find Authentic Home Food Near You
            </h2>
            <div className="relative max-w-xl mx-auto">
              <input
                className="w-full bg-white text-gray-900 py-4 pl-12 pr-4 rounded-xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/50 transition"
                placeholder="Search for Bhorta, Tehari, or Chef Name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          {/* Section: Weekly Best Foods */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Flame className="text-orange-500 fill-orange-500" />
              <h3 className="text-2xl font-bold text-gray-800">
                Weekly Best Foods
              </h3>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
              {WEEKLY_BEST_FOODS.map((food) => (
                <div
                  key={food.id}
                  onClick={() => openKitchen(food.kitchenId)}
                  className="min-w-[200px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition"
                >
                  <div className="h-32 w-full relative">
                    <img
                      src={food.image}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-yellow-400 text-teal-900 text-xs font-bold px-2 py-1 rounded">
                      ৳ {food.price}
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-gray-800 text-sm truncate">
                      {food.name}
                    </h4>
                    <p className="text-xs text-gray-500">{food.chef}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Month's Best 5 Chefs */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-yellow-500 fill-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-800">
                Top 5 Chefs of the Month
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {TOP_CHEFS.map((chef, index) => (
                <div
                  key={chef.id}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:border-teal-200 transition group cursor-pointer"
                >
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <img
                      src={chef.image}
                      className="w-full h-full rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition"
                    />
                    <div className="absolute -top-1 -right-1 bg-yellow-400 text-teal-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-sm">
                      #{index + 1}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm truncate">
                    {chef.name}
                  </h4>
                  <p className="text-xs text-teal-600 mb-1">{chef.kitchen}</p>
                  <div className="inline-flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full text-xs text-gray-600">
                    <Star
                      size={10}
                      className="text-yellow-400 fill-yellow-400"
                    />{" "}
                    {chef.rating}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: All Kitchens */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                All Kitchens in Dhaka
              </h3>
              <span className="text-gray-500 text-sm">
                {filtered.length} results
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((kitchen) => (
                <div
                  key={kitchen.id}
                  onClick={() => {
                    setSelectedKitchen(kitchen);
                    setView("detail");
                  }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-teal-200 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={kitchen.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold shadow-md">
                      <Star
                        className="text-yellow-500 fill-yellow-500"
                        size={12}
                      />
                      {kitchen.rating}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-teal-700 transition">
                        {kitchen.name}
                      </h3>
                      <Badge
                        color={
                          kitchen.deliveryMode === "platform"
                            ? "teal"
                            : "yellow"
                        }
                      >
                        {kitchen.deliveryMode === "platform"
                          ? "Rider Delivery"
                          : "Chef Delivers"}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
                      <ChefHat size={14} /> {kitchen.chefName} •{" "}
                      <MapPin size={14} /> {kitchen.location}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {kitchen.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  };

  const KitchenDetail = () => {
    if (!selectedKitchen) return null;
    const daily = selectedKitchen.menu.filter((m) => m.type === "daily");
    const standard = selectedKitchen.menu.filter((m) => m.type === "standard");

    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Banner */}
        <div className="h-72 lg:h-96 relative bg-gray-900">
          <img
            src={selectedKitchen.image}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

          <div className="absolute bottom-0 left-0 w-full p-4 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <Button
                variant="secondary"
                onClick={() => setView("list")}
                className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 w-max backdrop-blur-md"
              >
                <ArrowLeft size={16} /> Back to List
              </Button>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">
                {selectedKitchen.name}
              </h1>
              <p className="text-gray-300 text-lg mb-4">
                {selectedKitchen.chefTitle}
              </p>
              <div className="flex flex-wrap gap-4 text-gray-300 text-sm lg:text-base">
                <span className="flex items-center gap-1">
                  <User size={16} /> {selectedKitchen.chefName}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />{" "}
                  {selectedKitchen.rating} Rating
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} /> {selectedKitchen.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column: Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* CHEF PROFILE SECTION */}
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-700">
                    <ChefHat size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-teal-900">
                    Meet the Chef
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                  "{selectedKitchen.bio}"
                </p>
                <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-yellow-400">
                  <h4 className="font-bold text-gray-800 text-sm mb-1">
                    My Kitchen Story
                  </h4>
                  <p className="text-sm text-gray-600 italic">
                    {selectedKitchen.story}
                  </p>
                </div>
              </section>

              {/* Daily Specials */}
              <section>
                <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
                  <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Today's Specials
                    </h2>
                    <p className="text-sm text-gray-500">
                      Instant Delivery • Freshly Cooked
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {daily.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-yellow-400 transition-colors flex flex-col justify-between h-full group"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg text-gray-900 group-hover:text-teal-700">
                            {item.name}
                          </h4>
                          <span className="font-bold text-teal-800 bg-teal-50 px-2 py-1 rounded text-sm">
                            ৳ {item.price}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm line-clamp-2 mb-2">
                          {item.description}
                        </p>

                        {/* Ingredients Toggle */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowIngredients(
                              showIngredients === item.id ? null : item.id
                            );
                          }}
                          className="text-xs text-teal-600 font-medium flex items-center gap-1 mb-3 hover:underline"
                        >
                          <Info size={12} />{" "}
                          {showIngredients === item.id
                            ? "Hide Ingredients"
                            : "View Ingredients"}
                        </button>

                        {showIngredients === item.id && (
                          <div className="bg-gray-50 p-2 rounded text-xs text-gray-600 mb-3 animate-in fade-in slide-in-from-top-1">
                            <span className="font-bold">Ingredients:</span>{" "}
                            {item.ingredients}
                          </div>
                        )}
                      </div>
                      <Button
                        onClick={() => addToCart(item, selectedKitchen)}
                        fullWidth
                        variant="secondary"
                        className="hover:bg-yellow-50 hover:border-yellow-300"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pre-Order */}
              <section>
                <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-700">
                    <Truck size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Pre-Order Menu
                    </h2>
                    <p className="text-sm text-gray-500">
                      Order in advance for tomorrow
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {standard.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm mb-2">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-3 items-center">
                          <button
                            onClick={() =>
                              setShowIngredients(
                                showIngredients === item.id ? null : item.id
                              )
                            }
                            className="text-xs text-teal-600 font-medium flex items-center gap-1 bg-teal-50 px-2 py-1 rounded"
                          >
                            <Info size={12} /> Ingredients
                          </button>
                          <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-xs">
                            Order {item.prepTime} before
                          </span>
                        </div>

                        {showIngredients === item.id && (
                          <div className="mt-2 text-xs text-gray-600">
                            <span className="font-bold">Ingredients:</span>{" "}
                            {item.ingredients}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-4 min-w-[120px]">
                        <span className="font-bold text-gray-800 text-lg">
                          ৳ {item.price}
                        </span>
                        <Button
                          onClick={() => addToCart(item, selectedKitchen)}
                          className="h-10 w-10 p-0 rounded-full shrink-0"
                        >
                          <Plus size={20} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Cart (Desktop Sticky, Mobile Bottom) */}
            <div className="hidden lg:block h-full">
              <CartSidebar />
            </div>
          </div>
        </div>

        {/* Mobile Floating Cart Button */}
        {cart.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 lg:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-40">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-500">
                {cart.length} items
              </span>
              <span className="font-bold text-lg">
                ৳ {getCartTotals().total}
              </span>
            </div>
            <Button fullWidth onClick={() => setView("cart-mobile")}>
              View Cart & Checkout
            </Button>
          </div>
        )}
      </div>
    );
  };

  const MobileCart = () => {
    const { total } = getCartTotals();
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="bg-teal-900 text-white p-4 flex items-center gap-3 sticky top-0">
          <button onClick={() => setView("detail")}>
            <ArrowLeft />
          </button>
          <h2 className="font-bold text-lg">Your Cart</h2>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-100 py-4"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">৳ {item.price}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <Minus size={14} />
                </button>
                <span className="font-bold">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, 1)}
                  className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t bg-gray-50">
          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Total</span>
            <span>৳ {total}</span>
          </div>
          <Button fullWidth onClick={() => setView("success")}>
            Confirm Order
          </Button>
        </div>
      </div>
    );
  };

  const Success = () => (
    <div className="min-h-screen bg-teal-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl animate-bounce">
        <CheckCircle className="text-teal-600 w-12 h-12" />
      </div>
      <h2 className="text-3xl font-bold text-teal-900 mb-2">
        Order Confirmed!
      </h2>
      <p className="text-teal-700 mb-8 max-w-xs">
        Your home chef has received the order. Get ready for some delicious
        food.
      </p>
      <Button
        onClick={() => {
          setCart([]);
          setView("list");
        }}
      >
        Back to Home
      </Button>
    </div>
  );

  const SellerDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm font-medium">Today's Revenue</p>
            <p className="text-3xl font-bold text-teal-900 mt-2">৳ 1,250</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm font-medium">Pending Orders</p>
            <p className="text-3xl font-bold text-yellow-500 mt-2">3</p>
          </div>
          <div className="bg-gradient-to-br from-teal-800 to-teal-900 p-6 rounded-2xl shadow-lg text-white">
            <p className="text-teal-200 text-sm font-medium">Kitchen Status</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-2xl font-bold">Open for Orders</p>
            </div>
          </div>
        </div>
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
          <h3 className="text-gray-500 font-medium">Active Orders Panel</h3>
          <p className="text-sm text-gray-400 mt-1">
            Orders will appear here when customers place them.
          </p>
        </div>
      </div>
    </div>
  );

  // --- RENDER CONTROLLER ---
  if (view === "chef-registration") return <ChefRegistration />;
  if (view === "registration-success") return <RegistrationSuccess />;
  if (!userRole && view === "landing")
    return (
      <>
        <LoginModal />
        <LandingPage />
      </>
    );
  if (view === "seller") return <SellerDashboard />;
  if (view === "success") return <Success />;
  if (view === "cart-mobile") return <MobileCart />;
  if (view === "detail") return <KitchenDetail />;

  return (
    <>
      <LoginModal />
      <KitchenListing />
    </>
  );
}
