import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Landing from './pages/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Recommendations from './pages/Recommendations';
import Colleges from './pages/Colleges';
import Admin from './pages/Admin';
import Notifications from './pages/Notifications';
// ok done

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/auth/login" />;
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/auth/login"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/auth/register"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />}
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/quiz"
        element={
          <PrivateRoute>
            <Quiz />
          </PrivateRoute>
        }
      />
      <Route
        path="/recommendations"
        element={
          <PrivateRoute>
            <Recommendations />
          </PrivateRoute>
        }
      />
      <Route
        path="/colleges"
        element={
          <PrivateRoute>
            <Colleges />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <PrivateRoute>
            <Notifications />
          </PrivateRoute>
        }
      />

      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
