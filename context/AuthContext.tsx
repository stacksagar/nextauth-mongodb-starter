import { createContext, useReducer, useContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import axiosInstance from "../lib/axiosInstance";
import authStateType, { userType } from "../types/authStateType";

const AuthState: authStateType = {
  user: {},
  orders: [],
  withdraw: [],
  deposits: [],
};

export interface authActionsType {
  type: "set_user" | "set_orders" | "set_withdraw" | "set_deposits";
  payload?: any;
}

const reducer = (state: authStateType, action: authActionsType) => {
  const { type, payload } = action;
  switch (type) {
    case "set_user":
      return { ...state, user: payload };

    case "set_orders":
      return { ...state, orders: payload };

    case "set_deposits":
      return { ...state, deposits: payload };

    case "set_withdraw":
      return { ...state, withdraw: payload };

    default:
      return state;
  }
};

const AuthContext = createContext<any>(AuthState);

const AuthProvider = ({ children }: any) => {
  const { data: session } = useSession<any>();
  const [state, dispatch] = useReducer(reducer, AuthState);
  useEffect(() => {
    if (session?.user?.email && !state?.user?.email) {
      axiosInstance
        .get(`/api/auth/get_user_info`, {
          headers: {
            email: session?.user?.email,
          },
        })

        .then((res) => {
          const { _id, balance, email, image, name }: any = res.data?.user;
          dispatch({
            type: "set_user",
            payload: {
              _id,
              balance,
              email,
              image:
                image ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              name,
            },
          });
        })

        .catch((error) => {
          console.log("errro ", error?.message);
        });
    }
  }, [session]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export interface useAuthContextType {
  state: authStateType;
  dispatch: authActionsType;
}

export { AuthProvider, useAuthContext };
