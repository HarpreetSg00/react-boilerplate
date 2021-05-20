import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from '../Home/style.scss';

function About() {
  useStyles(s);
  return (
    <div className={s.homeWrapper}>
      <div className={s['logo-img']}>
        <img src="/images/react.svg" role="img" alt="logo" />
      </div>
      <div className={s.content}>
        <h1>About Page</h1>
      </div>
    </div>
  );
}

export default About;
