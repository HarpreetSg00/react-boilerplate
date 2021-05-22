import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import Footer from '@container/Footer';
import Header from '@container/Header';
import appRoutes from '../../Routes';
import { changeLoaderStatus } from './Website.action';

/* check authentication on each route change */
const renderRoutes = routes => {
  const isAuthorized = true;
  return routes
    ? routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            if (isAuthorized) {
              return <route.component {...props} route={route} />;
            }
            return <Redirect to="/" />;
          }}
        />
      ))
    : null;
};

function WebsiteLayout() {
  return (
    <div>
      <Header />
      <Switch>{renderRoutes(appRoutes[0].routes)}</Switch>
      <Footer />
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ changeLoaderStatus }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WebsiteLayout));
