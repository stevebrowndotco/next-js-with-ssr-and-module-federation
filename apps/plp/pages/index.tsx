import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PlPList from '../components/pl-plist/pl-plist';

const queryClient = new QueryClient();
export function Index(props) {
  console.log('posts', props);
  return (
    <QueryClientProvider client={queryClient}>
      <PlPList />
    </QueryClientProvider>
  );
}

Index.getInitialProps = async () => {
  return { props: { message: 'test' } };
};

export default Index;
