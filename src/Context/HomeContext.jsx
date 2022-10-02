import { useState, createContext } from "react";
export const HomeContext = createContext();

export default function HomeContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [Rdata, setRdata] = useState([]);
  return (
    <HomeContext.Provider
      value={{
        loading: loading,
        setLoading: setLoading,
        Rdata: Rdata,
        setRdata: setRdata,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
