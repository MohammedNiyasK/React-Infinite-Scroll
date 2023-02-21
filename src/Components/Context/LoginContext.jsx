import React, { createContext, useState } from "react";

export const UserContext = createContext();
const LoginContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default LoginContextProvider;
