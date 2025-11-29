import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userRole, setUserRole] = useState(null);

  const login = (role) => {
    setUserRole(role);
  };

  const logout = () => {
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{
      userRole,
      login,
      logout,
      isBuyer: userRole === 'buyer',
      isSeller: userRole === 'seller',
      isAuthenticated: !!userRole
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

