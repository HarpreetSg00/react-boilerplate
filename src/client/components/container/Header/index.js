import React from 'react';
import { NavLink } from 'react-router-dom';
import headerStyle from './header.module.scss';

function Header() {
  return (
    <section className={headerStyle.navigation}>
      <div className={headerStyle['nav-container']}>
        <div>
          <img
            alt="StudioGraphene"
            src="/images/logo.png"
            srcSet="/images/logo.png 1x, /images/logo@2x.png 2x"
          />
        </div>
        <nav>
          <ul className={headerStyle['nav-list']}>
            <li>
              <NavLink
                exact
                className={headerStyle.link}
                activeClassName={headerStyle.active}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className={headerStyle.link}
                activeClassName={headerStyle.active}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Header;
