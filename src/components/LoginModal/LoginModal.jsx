import { useNavigate } from "react-router-dom";
import { X, ChefHat, Utensils, ArrowRight } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { ROUTES } from "../../constants/routes";

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { login } = useAuth();

  if (!isOpen) return null;

  const handleLogin = (role) => {
    login(role);
    onClose();
    if (role === 'buyer') {
      navigate(ROUTES.KITCHENS);
    } else if (role === 'seller') {
      navigate(ROUTES.SELLER_DASHBOARD);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24}/>
        </button>
        
        <h2 className="text-2xl font-bold text-teal-900 text-center mb-2">Welcome to GhoroaRanna</h2>
        <p className="text-gray-500 text-center mb-8">Please select how you want to continue</p>
        
        <div className="grid gap-4">
          {/* Buyer Option */}
          <button 
            onClick={() => handleLogin('buyer')}
            className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-100 hover:border-yellow-400 hover:bg-yellow-50 transition-all group text-left"
          >
            <div className="bg-yellow-100 text-yellow-700 p-3 rounded-full group-hover:scale-110 transition">
              <Utensils size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">I want to Order Food</h3>
              <p className="text-xs text-gray-500">Login as a Foodie (Buyer)</p>
            </div>
            <ArrowRight className="ml-auto text-gray-300 group-hover:text-yellow-500" />
          </button>

          {/* Seller Option */}
          <button 
            onClick={() => handleLogin('seller')}
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
              onClose();
              navigate(ROUTES.CHEF_REGISTRATION);
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

export default LoginModal;

