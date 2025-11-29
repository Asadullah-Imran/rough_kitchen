import { useNavigate } from "react-router-dom";
import { ShoppingBag, Plus, Minus } from "lucide-react";
import { useCart } from "../../contexts/CartContext";
import Button from "../Button/Button";
import { ROUTES } from "../../constants/routes";

const CartSidebar = () => {
  const navigate = useNavigate();
  const { cart, updateQty, getCartTotals } = useCart();
  const { subtotal, delivery, total } = getCartTotals();
  
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
      <h3 className="font-bold text-xl text-teal-900 mb-6 flex items-center gap-2">
        <ShoppingBag size={20}/> Your Basket
      </h3>
      
      {cart.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-200">
          <ShoppingBag size={32} className="mx-auto text-gray-300 mb-2"/>
          <p className="text-gray-500 text-sm">Basket is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-start group">
                <div>
                  <p className="font-medium text-gray-800 text-sm line-clamp-1">{item.name}</p>
                  <p className="text-xs text-gray-500">৳ {item.price * item.qty}</p>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                  <button 
                    onClick={() => updateQty(item.id, -1)} 
                    className="p-1 hover:bg-white rounded-md shadow-sm text-gray-600 transition"
                  >
                    <Minus size={12}/>
                  </button>
                  <span className="text-xs font-bold w-3 text-center">{item.qty}</span>
                  <button 
                    onClick={() => updateQty(item.id, 1)} 
                    className="p-1 hover:bg-white rounded-md shadow-sm text-teal-600 transition"
                  >
                    <Plus size={12}/>
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
          
          <Button fullWidth onClick={() => navigate(ROUTES.SUCCESS)}>
            Checkout (COD)
          </Button>
        </>
      )}
    </div>
  );
};

export default CartSidebar;

