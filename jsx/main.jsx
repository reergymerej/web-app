import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import WebApp from './WebApp.jsx'
import Home from './Home.jsx'
import Foo from './Foo.jsx'
import Bar from './Bar.jsx'
import Login from './Login.jsx'
import Profile from './Profile.jsx'

const content = document.getElementById('content');
// TODO: figure out an easy way to define the paths & navigation in one

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={WebApp}>
      <IndexRoute component={Home} />
      <Route path="foo" component={Foo} />
      <Route path="bar" component={Bar} />
      <Route path="login" component={Login} />
      <Route path="profile" component={Profile} />
    </Route>
  </Router>,
  content);
