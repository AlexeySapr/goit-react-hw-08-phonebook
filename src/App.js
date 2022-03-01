import Appbar from 'components/appbar/Appbar';
import Login from 'pages/Login';
import PrivateRoute from 'pages/PrivateRoute';
import Signup from 'pages/Signup';
import UserPage from 'pages/UserPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Appbar />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="user"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
          {/* <Route path="user" element={<UserPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
