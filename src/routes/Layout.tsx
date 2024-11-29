import { Outlet } from 'react-router-dom';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@components/Error/ErrorFallback';

const Layout = () => {
  return (
    <>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </>
  );
};

export default Layout;
