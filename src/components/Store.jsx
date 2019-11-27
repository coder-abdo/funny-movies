import React, { createContext } from "react";

export const Data = createContext(null);
export const Store = ({ children }) => {
  const initialState = {
    user: {},
    movies: []
  };
  const val = { initialState };
  return <Data.Provider value={val}>{children}</Data.Provider>;
};
