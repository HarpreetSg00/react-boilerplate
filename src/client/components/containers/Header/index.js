import React from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from 'isomorphic-style-loader/useStyles';
import s from './style.scss';

function Header() {
  useStyles(s);
  return (
    <section className={s.navigation}>
      <div className={s['nav-container']}>
        <div>
          <img
            alt="StudioGraphene"
            src="/images/logo.png"
            srcSet="/images/logo.png 1x, /images/logo@2x.png 2x"
          />
        </div>
        <nav>
          <ul className={s['nav-list']}>
            <li>
              <NavLink exact className={s.link} activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className={s.link}
                activeClassName="active"
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
