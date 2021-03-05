import React, { useContext } from "react";
import { NotificationContext } from "../../Context/NotificationContext";

const Notification = () => {
  const { state, dispatch } = useContext(NotificationContext);
  return (
    <div className="notification-container">
      {state.map((notification, i) => {
        return (
          <div key={notification.id} className="notification">
            <div className="notification-icon"> </div>
            <div>
              <p className="notification-title"> {notification.title} </p>
              <p className="notification-message"> {notification.message} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notification;
