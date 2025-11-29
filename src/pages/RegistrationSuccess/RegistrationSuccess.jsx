import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Button from "../../components/Button/Button";
import { ROUTES } from "../../constants/routes";

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-teal-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl animate-bounce">
        <CheckCircle className="text-teal-600 w-12 h-12" />
      </div>
      <h2 className="text-3xl font-bold text-teal-900 mb-2">Application Submitted!</h2>
      <p className="text-teal-700 mb-8 max-w-md">
        Thank you for applying to be a Chef on GhoroaRanna. <br/>
        Our team will verify your details and call you within 24 hours.
      </p>
      <Button onClick={() => navigate(ROUTES.HOME)}>Back to Home</Button>
    </div>
  );
};

export default RegistrationSuccess;

