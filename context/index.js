import React from "react";
import { AuthProvider } from "./AuthContext";
const ContextProvider = ({ children }) => {
  return <AuthProvider> {children} </AuthProvider>;
};

export default ContextProvider;
