import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  let location = useLocation();
  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

// const PrivateRoute = ({ children }) => {
//   const isLoggedIn = useSelector(selectors.getIsLoggedIn);
//   let location = useLocation();

//   if (!isLoggedIn) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

export default PrivateRoute;
