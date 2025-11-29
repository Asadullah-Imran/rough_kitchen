import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { LoginModalProvider } from "./contexts/LoginModalContext";
import { StockProvider } from "./contexts/StockContext";

// Pages
import ChefRegistration from "./pages/ChefRegistration/ChefRegistration";
import KitchenDetail from "./pages/KitchenDetail/KitchenDetail";
import KitchenListing from "./pages/KitchenListing/KitchenListing";
import Landing from "./pages/Landing/Landing";
import MobileCart from "./pages/MobileCart/MobileCart";
import RegistrationSuccess from "./pages/RegistrationSuccess/RegistrationSuccess";
import SellerDashboard from "./pages/SellerDashboard/SellerDashboard";
import Success from "./pages/Success/Success";

// Components
import LoginModal from "./components/LoginModal/LoginModal";
import { useLoginModal } from "./contexts/LoginModalContext";

function LoginModalWrapper() {
  const { isOpen, closeModal } = useLoginModal();
  return <LoginModal isOpen={isOpen} onClose={closeModal} />;
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <LoginModalProvider>
          <BrowserRouter>
            <LoginModalWrapper />
            <Routes>
              <Route path={ROUTES.HOME} element={<Landing />} />
              <Route path={ROUTES.KITCHENS} element={<KitchenListing />} />
              <Route path={ROUTES.KITCHEN_DETAIL} element={<KitchenDetail />} />
              <Route
                path={ROUTES.SELLER_DASHBOARD}
                element={
                  <StockProvider>
                    <SellerDashboard />
                  </StockProvider>
                }
              />
              <Route path={ROUTES.SUCCESS} element={<Success />} />
              <Route path={ROUTES.CART} element={<MobileCart />} />
              <Route
                path={ROUTES.CHEF_REGISTRATION}
                element={<ChefRegistration />}
              />
              <Route
                path={ROUTES.REGISTRATION_SUCCESS}
                element={<RegistrationSuccess />}
              />
              <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
            </Routes>
          </BrowserRouter>
        </LoginModalProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
