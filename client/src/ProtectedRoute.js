import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({token}) => {
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute