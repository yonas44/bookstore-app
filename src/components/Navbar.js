import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './styles/Navbar.css';
import { RxAvatar } from 'react-icons/rx';

const Navbar = () => (
  <div className="page-wrapper">
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li>
            <NavLink className="link" to="/">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/categories">
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
      <div id="profile">
        <RxAvatar style={{ scale: '3' }} />
      </div>
    </header>
    <Outlet />
  </div>
);

export default Navbar;
