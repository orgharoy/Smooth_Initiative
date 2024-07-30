import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';


const Layout = () => {

  return (
    <main className="h-screen w-screen bg-background">
        <Outlet />
    </main>
  );
};

export default Layout;