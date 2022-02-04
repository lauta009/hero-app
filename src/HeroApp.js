import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './components/auth/authContext';
import { authReducer } from './components/auth/authReducer';
import { AppRouter } from './components/routers/AppRouter';

const init = ()=>{
  return JSON.parse(localStorage.getItem('user')) || {logged: false}
}
export const HeroApp = () => {
  const [user, dispatch]=useReducer(authReducer, {}, init)
  useEffect(() => {
    if(!user) return;
    localStorage.setItem('user', JSON.stringify(user))
  
  }, [user]);
  
  return <div>
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter/>
    </AuthContext.Provider>
  </div>;
};
