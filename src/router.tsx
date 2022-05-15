import React from 'react';
import { Router, Route, Switch,Redirect } from 'dva/router';
import Product from './route/Product';
function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => (<Redirect to="/product" />)}/>
        <Route path="/product" exact component={Product} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;