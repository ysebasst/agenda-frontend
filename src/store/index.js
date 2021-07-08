import { useReducer, createContext } from "react";

import { userReducer, initialState } from "./reducer";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, userDispatch] = useReducer(userReducer, initialState);

  return (
    <userContext.Provider value={{ user, userDispatch }}>
      {children}
    </userContext.Provider>
  );
};
