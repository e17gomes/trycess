"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { User } from "~/types/userType";

type AuthContextType = {
  user: Omit<User, "password"> | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Omit<User, "password"> | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("loggedInUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);


  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext deve estar dentro de <AuthProvider>");
  return context;
};
