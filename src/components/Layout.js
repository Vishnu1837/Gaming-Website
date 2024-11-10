import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layout({ isSidebarOpen, toggleSidebar }) {
  return (
    <div className={`App ${isSidebarOpen ? 'sidebar-expanded' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout; 