/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const ProtectedRoute = ({ children }) => {
  const { user, loading} = useContext(AuthContext);
  console.log(user)

  if(loading) {
    return <LoadingSpinner/>
  }

  if (user) {
    return children
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default ProtectedRoute;

