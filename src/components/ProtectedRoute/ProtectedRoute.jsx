/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);


  if (!user) {
    children
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default ProtectedRoute;

