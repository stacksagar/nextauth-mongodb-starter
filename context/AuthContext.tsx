import { createContext, useReducer, useContext } from "react";
import authStateType from "../types/authStateType";
const AuthState: authStateType = {
  user: {},
  authenticated: false,
};

export interface authActionsType {
  type: "set_user" | "set_authenticated";
  payload?: any;
}

const reducer = (state: authStateType, action: authActionsType) => {
  const { type, payload } = action;
  switch (type) {
    case "set_user":
      return { ...state, user: payload };

    case "set_authenticated":
      return { ...state, authenticated: payload };

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
