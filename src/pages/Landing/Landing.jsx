import { ChefHat, ShieldCheck, Star, Truck, Utensils } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import { ROUTES } from "../../constants/routes";

const Landing = () => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  );
  const [imageError, setImageError] = useState(false);

  const fallbackImages = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1543353071-873f1753ade2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  ];

  const handleImageError = () => {
    const currentIndex = fallbackImages.findIndex((url) => url === imageSrc);
    if (currentIndex < fallbackImages.length - 1) {
      setImageSrc(fallbackImages[currentIndex + 1]);
    } else {
      setImageError(true);
    }
  };

  const handleOrderFood = () => {
    navigate(ROUTES.KITCHENS);
  };

  return (
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleOrderFood}
                variant="dark"
                className="h-14 px-8 text-lg"
                icon={Utensils}
              >
                Order Food
              </Button>
              <Button
                onClick={() => navigate(ROUTES.CHEF_REGISTRATION)}
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
            {imageError ? (
              <div className="relative z-10 rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white w-full min-h-[500px] bg-gradient-to-br from-teal-100 to-yellow-100 flex items-center justify-center">
                <div className="text-center">
                  <ChefHat className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                  <p className="text-teal-800 font-bold text-xl">
                    Homemade Food
                  </p>
                  <p className="text-teal-600 text-sm mt-2">
                    Fresh & Delicious
                  </p>
                </div>
              </div>
            ) : (
              <img
                src={imageSrc}
                alt="Delicious homemade food spread"
                className="relative z-10 rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white w-full h-auto"
                loading="lazy"
                onError={handleImageError}
              />
            )}

            {/* Floating Card */}
            <div className="absolute bottom-10 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden sm:block animate-bounce">
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-2 rounded-full">
                  <ChefHat className="text-teal-700" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">500+ Home Chefs</p>
                  <p className="text-xs text-gray-500">Registered in Dhaka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
};

export default Landing;
