import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import router from './routes/index';
export const queryClient = new QueryClient();


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}