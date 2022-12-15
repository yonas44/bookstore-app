import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './styles/Navbar.css';
import { RxAvatar } from 'react-icons/rx';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prevProp) => !prevProp);
  };

  return (
    <div className="page-wrapper">
      <header>
        <button id="burger-menu" type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ scale: '4', color: '#fff' }} />
          ) : (
            <FiMenu style={{ scale: '3' }} />
          )}
        </button>
        <h1>Bookstore CMS</h1>
        <nav>
          <ul className={`${navbarOpen ? 'open' : ''}`}>
            <li>
              <NavLink onClick={handleToggle} className="link" to="/">
                Books
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleToggle} className="link" to="/categories">
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
};

export default Navbar;
