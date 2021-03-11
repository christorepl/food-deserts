import React, { useContext } from "react";
import { NotificationContext } from "../../Context/NotificationContext";
import {
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaRegWindowClose,
} from "react-icons/fa";

const Notification = () => {
  const { state, dispatch } = useContext(NotificationContext);

  const iconPicker = (type) => {
    switch (type) {
      case "INFO":
        return <FaInfoCircle />;
      case "WARNING":
        return <FaExclamationTriangle />;
      case "DANGER":
        return <FaExclamationCircle />;
      case "SUCCESS":
        return <FaCheck />;
      default:
        return;
    }
  };

  const bgColorPicker = (type) => {
    switch (type) {
      case "INFO":
        return "blue";
      case "WARNING":
        return "yellow";
      case "DANGER":
        return "red";
      case "SUCCESS":
        return "green";
      default:
        return;
    }
  };

  return (
    <div className="notification-container">
      {state.map((notification, i) => {
        return (
          <div
            key={notification.id}
            className={`notification box ${bgColorPicker(notification.type)}`}
          >
            <FaRegWindowClose
              onClick={() =>
                dispatch({ type: "DELETE", payload: notification.id })
              }
              className="close-button"
            />
            <div className="notification-icon">
              {iconPicker(notification.type)}
            </div>
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
