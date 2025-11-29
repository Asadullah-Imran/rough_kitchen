import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ChefHat, ShoppingBag, Menu, X, LogOut } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useLoginModal } from "../../contexts/LoginModalContext";
import Button from "../Button/Button";
import { ROUTES } from "../../constants/routes";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userRole, logout, isBuyer } = useAuth();
  const { cart } = useCart();
  const { openModal } = useLoginModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME);
  };

  return (
    <nav className="bg-teal-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center gap-3 cursor-pointer">
            <div className="bg-yellow-400 p-1.5 rounded-lg text-teal-900">
              <ChefHat size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight">
              Ghoroa<span className="text-yellow-400">Ranna</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {isBuyer && (
              <>
                <Link 
                  to={ROUTES.KITCHENS} 
                  className={`text-sm font-medium hover:text-yellow-400 transition ${
                    location.pathname === ROUTES.KITCHENS ? 'text-yellow-400' : 'text-gray-200'
                  }`}
                >
                  Browse Kitchens
                </Link>
                <button className="text-sm font-medium text-gray-200 hover:text-yellow-400 transition">
                  My Orders
                </button>
              </>
            )}

            {userRole ? (
              <div className="flex items-center gap-4 pl-8 border-l border-teal-700">
                <div className="text-right hidden lg:block">
                  <p className="text-xs text-teal-300">Welcome,</p>
                  <p className="font-bold text-sm">{isBuyer ? 'Foodie' : 'Chef'}</p>
                </div>
                <button 
                  onClick={handleLogout} 
                  className="p-2 bg-teal-900 rounded-full hover:bg-teal-700 transition"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <button 
                  onClick={openModal}
                  className="text-gray-200 hover:text-white font-medium"
                >
                  Log in
                </button>
                <Button 
                  onClick={() => navigate(ROUTES.CHEF_REGISTRATION)} 
                  variant="primary" 
                  className="px-6"
                >
                  Join as Chef
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {isBuyer && (
              <Link to={ROUTES.CART} className="relative p-2">
                <ShoppingBag size={24} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-yellow-400 text-teal-900 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </Link>
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-teal-900 p-4 space-y-4 border-t border-teal-700">
          <Link 
            to={ROUTES.KITCHENS} 
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-left py-2 font-medium"
          >
            Browse Kitchens
          </Link>
          <button className="block w-full text-left py-2 font-medium">My Orders</button>
          <div className="pt-4 border-t border-teal-700">
            {userRole ? (
              <button 
                onClick={handleLogout} 
                className="flex items-center gap-2 text-red-300"
              >
                <LogOut size={16}/> Sign Out
              </button>
            ) : (
              <div className="grid gap-2">
                <Button 
                  onClick={() => {
                    openModal();
                    setMobileMenuOpen(false);
                  }} 
                  fullWidth
                >
                  Log In
                </Button>
                <Button 
                  onClick={() => {
                    navigate(ROUTES.CHEF_REGISTRATION);
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
};

export default Navbar;

