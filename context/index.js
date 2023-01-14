import React from "react";
import { AuthProvider } from "./AuthContext";
import { TestProvider } from "./TestContext";
const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <TestProvider>
        {children}
      </TestProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
