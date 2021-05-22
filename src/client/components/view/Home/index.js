import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSomeDataAction } from './action';
import homeStyle from './home.module.scss';

function Home(props) {
  React.useEffect(() => {
    props.getSomeDataFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={homeStyle.homeWrapper}>
      <div className={homeStyle['logo-img']}>
        <img src="/images/react.svg" alt="logo" />
      </div>
      <div className={homeStyle.content}>
        <h1>Welcome to Your React.js App</h1>
        <p>
          For a guide and recipes on how to configure this project,
          <br />
          check out <strong>README.md</strong> file.
        </p>
        <h3>Installed Package</h3>
        <ul className={homeStyle['list-packages']}>
          <li>react-router-dom</li>
          <li>redux</li>
          <li>axios</li>
          <li>many more</li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  someData: state.homeReducer.someData,
});

const mapDispatchToProps = dispatch => ({
  getSomeDataFn: bindActionCreators(getSomeDataAction, dispatch),
});

function loadHomeData({ store }) {
  return Promise.all([store.dispatch(getSomeDataAction()) /* store.dispatch(getWhatWeDoList()) */]);
}

export { loadHomeData };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
