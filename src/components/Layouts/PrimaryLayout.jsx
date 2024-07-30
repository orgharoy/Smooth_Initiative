import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../navigations/Topbar';
import Sidebar from '../navigations/Sidebar';

const Layout = () => {
  const [sideBarSize, setSideBarSize] = useState('large')

  return (
    <div className="relative">
      <Topbar setSideBarSize = {setSideBarSize}/>
      <div className="flex relative">
        <Sidebar sideBarSize={sideBarSize} />
        <main className="p-3 md:p-5 w-full bg-muted">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;