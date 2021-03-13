import React from "react";
import {
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";
import AppContext from "../../Context/AppContext";

export default class Notification extends React.Component {
  static contextType = AppContext;
  render() {
    // const notificationDisplay = this.context.isNotificationHidden
    //   ? "hidden-notification"
    //   : "";

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

    const titlePicker = (type) => {
      switch (type) {
        case "INFO":
          return "You might want to know...";
        case "WARNING":
          return "Sorry, but...";
        case "DANGER":
          return "You can't do that! Or there was a server error...";
        case "SUCCESS":
          return "Task completed";
        default:
          return;
      }
    };

    const style = {
      right: this.context.right,
    };

    return (
      <div className={`notification-container`} style={style}>
        <div
          key={`notification-${this.context.type}`}
          className={`notification box ${bgColorPicker(this.context.type)}`}
        >
          <div className="notification-icon">
            {iconPicker(this.context.type)}
          </div>
          <div>
            <p className="notification-title">
              {titlePicker(this.context.type)}
            </p>
            <p className="notification-message">{this.context.message}</p>
          </div>
        </div>
      </div>
    );
  }
}
