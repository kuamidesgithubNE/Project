// AuthContext.js
import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    // Simulating an API call. Replace with actual API call.

    try {
      const response = await fetch("/user.json");
      const users = await response.json();
      const authenticatedUser = users.find(
        (user) => user.username === username && user.password === password
      );
      if (authenticatedUser) {
        setUser(authenticatedUser);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
