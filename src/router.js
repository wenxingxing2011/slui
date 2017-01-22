import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import SysPage from './routes/SysPage';
import AboutPage from './routes/AboutPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />

      <Route path="/SysPage" component ={SysPage} />
      <Route path="/About" component ={AboutPage} />
    </Router>
  );
}

export default RouterConfig;
