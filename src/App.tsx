import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global, ThemeProvider } from '@emotion/react';

import GlobalStyle from '@styles/global';
import theme from '@styles/theme';
import pageRoutes from '@/routes/pageRoutes';

const App = () => {
  const router = createBrowserRouter(pageRoutes);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        throwOnError: true,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyle} />
          <RouterProvider router={router} />
        </ThemeProvider>
        <div style={{ fontSize: '16px' }}>
          <ReactQueryDevtools />
        </div>
      </QueryClientProvider>
    </>
  );
};

export default App;
