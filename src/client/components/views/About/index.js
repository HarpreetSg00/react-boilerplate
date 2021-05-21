import React from 'react';
import { useHistory } from "react-router-dom";
import useStyles from 'isomorphic-style-loader/useStyles';

import s from '../Home/style.scss';

function About() {
  useStyles(s);
  const history = useHistory();

  return (
    <div className={s.homeWrapper}>
      <div className={s['logo-img']}>
        <img src="/images/react.svg" role="img" alt="logo" />
      </div>
      <div className={s.content}>
        <h1>About Page</h1>
      </div>
      <p onClick={() => history.push('/')}>Go to homepage</p>
    </div>
  );
}

export default About;
