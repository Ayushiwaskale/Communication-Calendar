// src/components/NotificationIcon.jsx
import React from "react";
import "./NotificationComponent.css";  // Add your styles here

const NotificationIcon = ({ onClick }) => {
  return (
    <div className="notification-icon" onClick={onClick}>
      <i className="fas fa-bell"></i> {/* Use Font Awesome or any icon library */}
    </div>
  );
};

export default NotificationIcon;
