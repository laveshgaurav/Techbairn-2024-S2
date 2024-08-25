import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import { useAppContext } from './contexts/AppContext';

function App() {
  const { isLoggedIn, accessToken, userData } = useAppContext();

  const IsLoggedIn: boolean | null =
    isLoggedIn && !!accessToken && !!userData?.userName;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={IsLoggedIn ? <Navigate to="/home" /> : <SignIn />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute isLoggedIn={IsLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

interface ProtectedRouteProps {
  isLoggedIn: boolean | null;
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isLoggedIn,
  children,
}) => {
  return isLoggedIn ? children : <Navigate to="/" />;
};
