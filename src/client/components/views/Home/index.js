import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSomeData } from './action';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './style.scss';
class Home extends React.Component {
  constructor(props) {
    super(props);
    /* 
            //Only use if you want to render the component with SSR
            loadHomeData();
        */
  }

  componentDidMount() { }

  render() {
    return (
      <div className={s.homeWrapper}>
        <div className={s['logo-img']}>
          <img src="/images/react.svg" role="img" alt="logo" />
        </div>
        <div className={s.content}>
          <h1>Welcome to Your React.js App Testing 123</h1>
          <p>
            For a guide and recipes on how to configure this project,
            <br />
            check out <strong>README.md</strong> file.
          </p>
          <h3>Installed Package</h3>
          <ul className={s['list-packages']}>
            <li>react-router-dom</li>
            <li>redux</li>
            <li>redux-thunk</li>
            <li>axios</li>
            <li>many more</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  someData: state.homeReducer.someData,
});

const mapDispatchToProps = dispatch => ({
  getSomeData: bindActionCreators(getSomeData, dispatch),
});

function loadHomeData({ store }) {
  return Promise.all([
    store.dispatch(getSomeData()) /* store.dispatch(getWhatWeDoList()) */,
  ]);
}

export { loadHomeData };

const HomeComponent = connect(mapStateToProps, mapDispatchToProps)(Home);
export default withStyles(s)(HomeComponent);
