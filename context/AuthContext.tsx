import { createContext, useReducer, useContext } from "react";
import authState from "../types/authState";
const AuthState: authState = {
  user: {},
  authenticated: false,
};

const reducer = (state = AuthState, action: { type: string; payload: any }) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

const AuthContext = createContext<any>(AuthState);

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, AuthState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
