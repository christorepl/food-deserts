import React, { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

export const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const notifications = [
    {
      id: uuid(),
      //success, info, warning, danger
      type: "SUCCESS",
      title: "Successfully did the thing!",
      message: "Successfully did the thing message",
    },
  ];

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "DELETE":
        return state.filter(
          (notification) => notification.id !== action.payload
        );
      default:
        return state;
    }
  }, notifications);

  // dispatch({type: 'ADD', payload: {id, type, title, message}})

  // dispatch({type:'DELETE', payload: id})

  return (
    <NotificationContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {" "}
      {props.children}{" "}
    </NotificationContext.Provider>
  );
};
