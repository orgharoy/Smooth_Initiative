import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopbarWebsite from '../navigations/TopbarWebsite';


const Layout = () => {
  const [sideBarSize, setSideBarSize] = useState('small')

  return (
    <div className="relative h-screen flex flex-col bg-background">
        <TopbarWebsite />
        <main className="container mx-auto p-5 w-full">
            <Outlet />
        </main>
    </div>
  );
};

export default Layout;