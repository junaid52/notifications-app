import React from 'react';
import useNotifications from '../hooks/useNotifications';

const NotificationBadge = () => {
  const { notifications } = useNotifications();
  const unreadCount = notifications.filter((n) => !n.read).length;

  return <div className="badge">{unreadCount}</div>;
};

export default NotificationBadge;
