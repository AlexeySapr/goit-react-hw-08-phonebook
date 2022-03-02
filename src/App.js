import Appbar from 'components/appbar/Appbar';
import Login from 'pages/Login';
import PrivateRoute from 'pages/PrivateRoute';
import PublicRoute from 'pages/PublicRoute';
import Signup from 'pages/Signup';
import UserPage from 'pages/UserPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Appbar />}>
          <Route
            index
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />

          <Route
            path="user"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;

/* <Route path="signup" element={<Signup />} /> */
