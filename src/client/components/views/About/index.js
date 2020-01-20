import React from 'react';
import '../Home/style.scss';

function About() {
  return (
    <div className="home-wrapper">
      <div className="logo-img">
        <img src="/images/react.svg" role="img" alt="logo" />
      </div>
      <div className="content">
        <h1>About Page</h1>
      </div>
    </div>
  );
}

export default About;
