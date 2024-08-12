import React from 'react';
import { NavLink } from 'react-router-dom';

import './style/layout.scss';
import LogoIcon from '../icon/LogoIcon';
import { MenuSideBarAction, MenuSideBarBottom, MenuSideBarTop } from '@/utils/constantsUi';

const Sidebar = () => {
  
  return (
    <div className='sidebar'>
      <div className='sidebar-logo'>
        <span className='icon-logo'>
          <LogoIcon />
        </span>

        <h3>Movie</h3>
      </div>
      <div className='sidebar-menu'>
        <ul className='sidebar-menu-top'>
          {MenuSideBarTop.map((item, index) => (
            <li className='sidebar-item' key={index}>
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'sidebar-item-link active'
                    : 'sidebar-item-link'
                }
              >
                <span className='icon-sidebar'>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className='sidebar-menu-bottom'>
          {MenuSideBarBottom.map((item, index) => (
            <li className='sidebar-item' key={index}>
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'sidebar-item-link active'
                    : 'sidebar-item-link'
                }
              >
                <span className='icon-sidebar'>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='sidebar-action'>
      {MenuSideBarAction.map((item, index) => (
            <li className='sidebar-item' key={index}>
              <NavLink
                to={item.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'sidebar-item-link active'
                    : 'sidebar-item-link'
                }
              >
                <span className='icon-sidebar'>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
