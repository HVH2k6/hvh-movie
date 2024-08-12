import React from 'react';
import './style/layout.scss';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div className='main-layout'>
      <Sidebar></Sidebar>
      <div className='main-layout-content'>
          <Header></Header>
        <Outlet>
          {children}
        </Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
