import React from 'react';
import './FacebookTimeNotification.css';

export default function FacebookTimeNotification() {
  const notificationCount = 5; // Number of notifications to display
  const notifications = Array.from({ length: notificationCount });

  return (
    <div className="notifications-container">
      {notifications.map((_, index) => (
        <div className="notification" key={index}>
          <div className="notification-content">
            <div className="notification-icon">
              <i className="fa fa-bell"></i>
            </div>
            <div className="notification-text">
              <p>Rana Sb new user.</p>
              <span>2 minutes ago</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
