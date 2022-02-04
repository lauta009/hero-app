import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../auth/authContext';

export const PublicRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    console.log(user.logged)
    return !user.logged 
    ? children
    : <Navigate to='/'/>
};
