import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChefHat, MapPin, Star, Search, Truck, User, Flame, Award } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import { MOCK_KITCHENS, TOP_CHEFS, WEEKLY_BEST_FOODS } from "../../constants/mockData";
import Badge from "../../components/Badge/Badge";
import { ROUTES } from "../../constants/routes";

const KitchenListing = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = MOCK_KITCHENS.filter(k => 
    k.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    k.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleKitchenClick = (kitchen) => {
    navigate(ROUTES.KITCHEN_DETAIL.replace(':id', kitchen.id));
  };

  const openKitchen = (kitchenId) => {
    navigate(ROUTES.KITCHEN_DETAIL.replace(':id', kitchenId));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      
      {/* Search Header */}
      <div className="bg-teal-900 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Find Authentic Home Food Near You</h2>
          <div className="relative max-w-xl mx-auto">
            <input 
              className="w-full bg-white text-gray-900 py-4 pl-12 pr-4 rounded-xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/50 transition"
              placeholder="Search for Bhorta, Tehari, or Chef Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-gray-400" size={20}/>
          </div>
          <div className="flex justify-center gap-3 text-sm flex-wrap">
            <span className="opacity-70">Popular:</span>
            {['Beef Tehari', 'Shutki Bhorta', 'Keto', 'Lunch Set'].map(tag => (
              <span 
                key={tag} 
                className="bg-teal-800 px-3 py-1 rounded-full cursor-pointer hover:bg-teal-700 border border-teal-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section: Weekly Best Foods */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Flame className="text-orange-500 fill-orange-500" />
            <h3 className="text-2xl font-bold text-gray-800">Weekly Best Foods</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
            {WEEKLY_BEST_FOODS.map(food => (
              <div 
                key={food.id} 
                onClick={() => openKitchen(food.kitchenId)} 
                className="min-w-[200px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition"
              >
                <div className="h-32 w-full relative">
                  <img src={food.image} className="w-full h-full object-cover" alt={food.name}/>
                  <div className="absolute bottom-2 right-2 bg-yellow-400 text-teal-900 text-xs font-bold px-2 py-1 rounded">
                    ৳ {food.price}
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-gray-800 text-sm truncate">{food.name}</h4>
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
            <h3 className="text-2xl font-bold text-gray-800">Top 5 Chefs of the Month</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {TOP_CHEFS.map((chef, index) => (
              <div 
                key={chef.id} 
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:border-teal-200 transition group cursor-pointer"
                onClick={() => openKitchen(chef.id)}
              >
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <img 
                    src={chef.image} 
                    className="w-full h-full rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition"
                    alt={chef.name}
                  />
                  <div className="absolute -top-1 -right-1 bg-yellow-400 text-teal-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-sm">
                    #{index + 1}
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 text-sm truncate">{chef.name}</h4>
                <p className="text-xs text-teal-600 mb-1">{chef.kitchen}</p>
                <div className="inline-flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full text-xs text-gray-600">
                  <Star size={10} className="text-yellow-400 fill-yellow-400"/> {chef.rating}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: All Kitchens */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">All Kitchens in Dhaka</h3>
            <span className="text-gray-500 text-sm">{filtered.length} results</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(kitchen => (
            <div 
              key={kitchen.id} 
              onClick={() => handleKitchenClick(kitchen)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-teal-200 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={kitchen.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  alt={kitchen.name}
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold shadow-md">
                  <Star className="text-yellow-500 fill-yellow-500" size={12} />
                  {kitchen.rating}
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-teal-700 transition">
                    {kitchen.name}
                  </h3>
                  <Badge color={kitchen.deliveryMode === 'platform' ? 'teal' : 'yellow'}>
                    {kitchen.deliveryMode === 'platform' ? 'Rider Delivery' : 'Chef Delivers'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
                  <ChefHat size={14}/> {kitchen.chefName} • <MapPin size={14}/> {kitchen.location}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {kitchen.tags.map(tag => (
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

export default KitchenListing;

