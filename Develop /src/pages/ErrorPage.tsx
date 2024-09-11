import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  // Type guard to check if error has statusText or message properties
  const isErrorWithMessage = (err: unknown): err is { statusText?: string; message?: string } => {
    return typeof err === 'object' && err !== null && ('statusText' in err || 'message' in err);
  };

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>We encountered an error.</p>
      {isErrorWithMessage(error) && (
        <div className="error-details">
          <p><strong>Error:</strong> {error.statusText || error.message}</p>
        </div>
      )}
      <a href="/">Go Back Home</a>
    </div>
  );
};

export default ErrorPage;
