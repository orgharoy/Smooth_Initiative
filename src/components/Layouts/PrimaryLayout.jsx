import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '@/components/navigations/Topbar'
import Sidebar from '@/components/navigations/Sidebar'

const Layout = () => {
  const [sideBarSize, setSideBarSize] = useState('large')

  return (
    <div className="relative">
      <Topbar setSideBarSize = {setSideBarSize}/>
      <div className="flex relative">
        <Sidebar sideBarSize={sideBarSize} />
        <main className={`p-3 md:p-5 w-full bg-muted overflow-hidden flex-grow-0 ${sideBarSize === "large" ? 'md:max-w-[calc(100vw-256px)]': 'md:max-w-calc(100vw-80px)'}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;