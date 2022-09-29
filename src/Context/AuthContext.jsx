import { useRef } from "react";
import { Children, createContext } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const authenticate = useRef();

  return (
    <AuthContext.Provider value={{ authenticate: authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};
