import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import PlPList from './pl-plist/pl-plist';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PlPList />
    </QueryClientProvider>
  );
}

export default App;
