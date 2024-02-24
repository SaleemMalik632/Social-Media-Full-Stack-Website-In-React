import React, { useState } from 'react';
import { Outlet, useLocation, Navigate, Routes, Route } from 'react-router-dom';
import { Home, Profile, Login, ResetPassword, Register } from './pages/Index';
import { useSelector } from 'react-redux';


function Layout() {
  const user = null;
  const location = useLocation();
  return user?.token ? (
    <Outlet />
  ) : <Navigate to="/login" state={{ from: location }} replace />;
};

function App() {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <> 
      <div className='w-full min-w-[100vh]'>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id?" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;