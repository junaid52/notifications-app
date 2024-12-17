import { useEffect } from 'react';
import { io } from 'socket.io-client';

const useSocket = (url, onNotificationReceived) => {
  useEffect(() => {
    const socket = io(url);

    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    socket.on('notification', (notification) => {
      onNotificationReceived(notification); // Callback to add notifications
    });

    socket.on('disconnect', () => {
      console.error('WebSocket disconnected');
    });

    return () => {
      socket.disconnect();
    };
  }, [url, onNotificationReceived]);
};

export default useSocket;
