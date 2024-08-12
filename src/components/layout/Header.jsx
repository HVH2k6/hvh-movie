import React from 'react';
import './style/layout.scss';
import { Link, NavLink } from 'react-router-dom';
import CountryCategory from '../movie/CountryCategory';
const Header = () => {
  const [showInputSearch, setShowInputSearch] = React.useState(false);
  return (
    <header className='header'>
      <ul className='header-menu'>
        <li className='header-menu-item'>
          <NavLink to={'/'} className='header-menu-link'>
            Danh sách phim
          </NavLink>
        </li>
        <li className='header-menu-item'>
          <span  className='header-menu-link'>
            Quốc gia
           <CountryCategory></CountryCategory>
          </span>
        </li>
        <li className='header-menu-item'>
          <NavLink to={'/'} className='header-menu-link'>
            Thể loại
          </NavLink>
        </li>
      </ul>
      <div className='header-action'>
        <div className='header-action-search'>
          <input
            type='text'
            className={`header-action-input-search ${
              showInputSearch ? 'active' : ''
            }`}
          />
          <span onClick={() => setShowInputSearch(!showInputSearch)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M21 21L16.65 16.65'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
        </div>
        <div className='header-action-auth'>
          <Link to={'/login'}>Đăng nhập</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
