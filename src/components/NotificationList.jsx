import React from 'react';
import useNotifications from '../hooks/useNotifications';

const NotificationList = () => {
  const { notifications, markAsRead } = useNotifications();

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            style={{ background: notification.read ? '#eee' : '#fff' }}
            onClick={() => markAsRead(notification.id)}
          >
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
