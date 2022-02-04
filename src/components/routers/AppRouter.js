import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginScreen } from '../login/LoginScreen';


import { AdminRoutes } from './AdminRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoutes';

export const AppRouter = () => {
  return <BrowserRouter>
      
      <Routes>
        
        <Route path="/login" element={
          <PublicRoute>
            <LoginScreen></LoginScreen>
          </PublicRoute>} />
        <Route path="/*" element={
          <PrivateRoute>
            <AdminRoutes/>
          </PrivateRoute>}/>
        
      </Routes>
  </BrowserRouter>;
};

 
