import React, { createContext, useReducer } from "react";
import uuid from "uuid/v4";
export const SET_USER = "SET_USER";
export const Data = createContext(null);
const reducers = (state, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      };

    default:
      return state;
  }
};
const initialState = {
  user: {},
  movies: [
    {
      src: "https://www.youtube.com/embed/kH0BlHWrILg",
      id: uuid(),
      title: "Epic Anime Mix - Fighting/Motivational Anime OST 2017",
      sharedBy: "anyone@gmail.com"
    },
    {
      src: "https://www.youtube.com/embed/UIwK1w52_9Q",
      id: uuid(),
      title: "The Best of Attack on Titan Soundtracks Collection (S1 & S2)",
      sharedBy: "anyone@gmail.com"
    },
    {
      src: "https://www.youtube.com/embed/1HDv2jC_QHg",
      id: uuid(),
      title:
        "Most Emotional Music Collection - Shigatsu wa Kimi no Uso - [四月は君の嘘 OST]",
      sharedBy: "anyone@gmail.com"
    }
  ]
};
export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return <Data.Provider value={{ state, dispatch }}>{children}</Data.Provider>;
};
