// src/components/NotificationComponent.jsx
import React, { useState } from "react";
import NotificationIcon from "./NotificationIcon";
import NotificationPanel from "./NotificationPanel";

const NotificationComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notifications] = useState([
    "You have 5 new messages",
    "Your report is ready",
    "New comment on your post",
  ]);

  const toggleNotificationPanel = () => {
    setIsVisible((prevState) => !prevState);
  };

  const closeNotificationPanel = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <NotificationIcon onClick={toggleNotificationPanel} />
      <NotificationPanel
        notifications={notifications}
        isVisible={isVisible}
        onClose={closeNotificationPanel}
      />
    </div>
  );
};

export default NotificationComponent;
