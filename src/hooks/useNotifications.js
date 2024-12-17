import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const fetchNotifications = async () => {
//   const { data } = await axios.get('/api/notifications');
  return [];
};

const useNotifications = () => {
  const queryClient = useQueryClient();

  // Fetch notifications using TanStack Query
  const { data: notifications = [], refetch } = useQuery({
    queryKey: ['notifications'],
    queryFn: fetchNotifications,
    refetchInterval: 10000, // Poll every 10 seconds
  });

  // Add real-time notifications dynamically
  const addNotification = (newNotification) => {
    queryClient.setQueryData(['notifications'], (oldNotifications) => [
      newNotification,
      ...(oldNotifications || []),
    ]);
  };

  // Mark a notification as read
  const markAsRead = (id) => {
    queryClient.setQueryData(['notifications'], (oldNotifications) =>
      oldNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return { notifications, addNotification, markAsRead, refetch };
};

export default useNotifications;
