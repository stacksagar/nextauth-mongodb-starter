import { createContext, useReducer, useContext, useEffect } from "react";

const TestState = {
  name: "Test Context",
};

const reducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

const TestContext = createContext<any>(TestState);

const TestProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, TestState);

  return (
    <TestContext.Provider value={{ state, dispatch }}>
      {children}
    </TestContext.Provider>
  );
};

const useTestContext = () => useContext(TestContext);

export { TestProvider, useTestContext };
