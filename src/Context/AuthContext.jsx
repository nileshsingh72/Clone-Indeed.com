import { useState } from "react";
import { Children, createContext } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [Auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ Auth: Auth, setAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
