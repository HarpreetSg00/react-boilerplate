import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import s from './style.scss';


function Footer() {
  useStyles(s);
  return (
    <footer className={s.footer}>
      <p>No copyright issues</p>
    </footer>
  );
}

export default Footer;
