import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NotificationList from './components/NotificationList';
import NotificationBadge from './components/NotificationBadge';
import UserPreferencesModal from './components/UserPreferencesModal';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <NotificationBadge />
        <NotificationList />
        <UserPreferencesModal />
      </div>
    </QueryClientProvider>
  );
};

export default App;

