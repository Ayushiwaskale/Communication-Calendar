// src/components/NotificationPanel.jsx
import React from "react";
import "./NotificationComponent.css";

const NotificationPanel = ({ notifications, isVisible, onClose }) => {
  return (
    isVisible && (
      <div className="notification-panel">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h3>Notifications</h3>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>
    )
  );
};

export default NotificationPanel;
