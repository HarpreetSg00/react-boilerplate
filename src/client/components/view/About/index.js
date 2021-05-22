import React from 'react';
import homeStyle from '../Home/home.module.scss';

function About() {
  return (
    <div className={homeStyle.homeWrapper}>
      <div className={homeStyle['logo-img']}>
        <img src="/images/react.svg" alt="logo" />
      </div>
      <div className={homeStyle.content}>
        <h1>About Page</h1>
      </div>
    </div>
  );
}

export default About;
