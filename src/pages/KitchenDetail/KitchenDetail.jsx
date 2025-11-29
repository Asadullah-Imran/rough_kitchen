import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Truck, User, MapPin, Star, Plus, ChefHat, Info } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import CartSidebar from "../../components/CartSidebar/CartSidebar";
import Button from "../../components/Button/Button";
import { MOCK_KITCHENS } from "../../constants/mockData";
import { useCart } from "../../contexts/CartContext";
import { ROUTES } from "../../constants/routes";

const KitchenDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart, getCartTotals } = useCart();
  const [showIngredients, setShowIngredients] = useState(null);
  
  const selectedKitchen = MOCK_KITCHENS.find(k => k.id === parseInt(id));

  if (!selectedKitchen) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Kitchen not found</h2>
          <Button onClick={() => navigate(ROUTES.KITCHENS)}>Back to Kitchens</Button>
        </div>
      </div>
    );
  }

  const daily = selectedKitchen.menu.filter(m => m.type === 'daily');
  const standard = selectedKitchen.menu.filter(m => m.type === 'standard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Banner */}
      <div className="h-72 lg:h-96 relative bg-gray-900">
        <img 
          src={selectedKitchen.image} 
          className="w-full h-full object-cover opacity-60" 
          alt={selectedKitchen.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Button 
              variant="secondary" 
              onClick={() => navigate(ROUTES.KITCHENS)} 
              className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 w-max backdrop-blur-md"
            >
              <ArrowLeft size={16}/> Back to List
            </Button>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">{selectedKitchen.name}</h1>
            <p className="text-gray-300 text-lg mb-4">{selectedKitchen.chefTitle || selectedKitchen.chefName}</p>
            <div className="flex flex-wrap gap-4 text-gray-300 text-sm lg:text-base">
              <span className="flex items-center gap-1">
                <User size={16}/> {selectedKitchen.chefName}
              </span>
              <span className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-yellow-400" size={16}/> {selectedKitchen.rating} Rating
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={16}/> {selectedKitchen.location}
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
            {(selectedKitchen.bio || selectedKitchen.story) && (
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-700"><ChefHat size={24}/></div>
                  <h2 className="text-2xl font-bold text-teal-900">Meet the Chef</h2>
                </div>
                {selectedKitchen.bio && (
                  <p className="text-gray-700 leading-relaxed mb-4 font-medium">"{selectedKitchen.bio}"</p>
                )}
                {selectedKitchen.story && (
                  <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-yellow-400">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">My Kitchen Story</h4>
                    <p className="text-sm text-gray-600 italic">{selectedKitchen.story}</p>
                  </div>
                )}
              </section>
            )}

            {/* Daily Specials */}
            <section>
              <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
                <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700">
                  <Clock size={20}/>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Today's Specials</h2>
                  <p className="text-sm text-gray-500">Instant Delivery • Freshly Cooked</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {daily.map(item => (
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
                          ৳{item.price}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-2">{item.description}</p>
                      
                      {/* Ingredients Toggle */}
                      {item.ingredients && (
                        <>
                          <button 
                            onClick={(e) => { 
                              e.stopPropagation(); 
                              setShowIngredients(showIngredients === item.id ? null : item.id); 
                            }}
                            className="text-xs text-teal-600 font-medium flex items-center gap-1 mb-3 hover:underline"
                          >
                            <Info size={12}/> {showIngredients === item.id ? 'Hide Ingredients' : 'View Ingredients'}
                          </button>
                          
                          {showIngredients === item.id && (
                            <div className="bg-gray-50 p-2 rounded text-xs text-gray-600 mb-3 animate-in fade-in slide-in-from-top-1">
                              <span className="font-bold">Ingredients:</span> {item.ingredients}
                            </div>
                          )}
                        </>
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
                  <Truck size={20}/>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Pre-Order Menu</h2>
                  <p className="text-sm text-gray-500">Order in advance for tomorrow</p>
                </div>
              </div>
              <div className="space-y-4">
                {standard.map(item => (
                  <div 
                    key={item.id} 
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900">{item.name}</h4>
                      <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-3 items-center mb-2">
                        {item.ingredients && (
                          <button 
                            onClick={() => setShowIngredients(showIngredients === item.id ? null : item.id)}
                            className="text-xs text-teal-600 font-medium flex items-center gap-1 bg-teal-50 px-2 py-1 rounded"
                          >
                            <Info size={12}/> Ingredients
                          </button>
                        )}
                        <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-xs">
                          Order {item.prepTime} before
                        </span>
                      </div>
                      
                      {showIngredients === item.id && item.ingredients && (
                        <div className="mt-2 text-xs text-gray-600">
                          <span className="font-bold">Ingredients:</span> {item.ingredients}
                        </div>
                      )}
                      
                      <div className="flex items-center gap-3 text-sm mt-2">
                        <span className="font-bold text-gray-800">৳{item.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-4 min-w-[120px]">
                      <Button 
                        onClick={() => addToCart(item, selectedKitchen)} 
                        className="h-10 w-10 p-0 rounded-full shrink-0"
                      >
                        <Plus size={20}/>
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
            <span className="text-sm font-medium text-gray-500">{cart.length} items</span>
            <span className="font-bold text-lg">৳ {getCartTotals().total}</span>
          </div>
          <Button fullWidth onClick={() => navigate(ROUTES.CART)}>
            View Cart & Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default KitchenDetail;

