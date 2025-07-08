import { createContext, useEffect, useState, type ReactNode } from "react";
import { API_CONFIG } from "config";

interface User {
  uniqueName: string;
  nickName: string;
  email: string;
  id: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthentificated: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch(`${API_CONFIG.BACKEND_URL}check-auth`, {
        credentials: "include",
      });

      if (response.ok) {
        const userData = await response.json();
        console.log(userData);
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (err: unknown) {
      console.error("Auth check failed", err);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const isAuthentificated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthentificated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
