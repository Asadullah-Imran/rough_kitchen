import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Button from "../../components/Button/Button";
import { useCart } from "../../contexts/CartContext";
import { ROUTES } from "../../constants/routes";

const Success = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handleBackToHome = () => {
    clearCart();
    navigate(ROUTES.KITCHENS);
  };

  return (
    <div className="min-h-screen bg-teal-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl animate-bounce">
        <CheckCircle className="text-teal-600 w-12 h-12" />
      </div>
      <h2 className="text-3xl font-bold text-teal-900 mb-2">Order Confirmed!</h2>
      <p className="text-teal-700 mb-8 max-w-xs">
        Your home chef has received the order. Get ready for some delicious food.
      </p>
      <Button onClick={handleBackToHome}>Back to Home</Button>
    </div>
  );
};

export default Success;

