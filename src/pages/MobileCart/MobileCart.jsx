import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { useCart } from "../../contexts/CartContext";
import Button from "../../components/Button/Button";
import { ROUTES } from "../../constants/routes";

const MobileCart = () => {
  const navigate = useNavigate();
  const { cart, updateQty, getCartTotals } = useCart();
  const { total } = getCartTotals();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-teal-900 text-white p-4 flex items-center gap-3 sticky top-0">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={24}/>
        </button>
        <h2 className="font-bold text-lg">Your Cart</h2>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Your cart is empty</p>
            <Button 
              onClick={() => navigate(ROUTES.KITCHENS)} 
              className="mt-4"
              variant="primary"
            >
              Browse Kitchens
            </Button>
          </div>
        ) : (
          cart.map(item => (
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
                  <Minus size={14}/>
                </button>
                <span className="font-bold">{item.qty}</span>
                <button 
                  onClick={() => updateQty(item.id, 1)} 
                  className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center"
                >
                  <Plus size={14}/>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="p-4 border-t bg-gray-50">
          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Total</span>
            <span>৳ {total}</span>
          </div>
          <Button fullWidth onClick={() => navigate(ROUTES.SUCCESS)}>
            Confirm Order
          </Button>
        </div>
      )}
    </div>
  );
};

export default MobileCart;

