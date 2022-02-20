import { QueryClientProvider, QueryClient } from 'react-query';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';

const Client = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={Client}>
        <Routes />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
