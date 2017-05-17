import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Splash from './react';
import Code from './react/code.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Splash} />
    <Route path='/code' component={Code} />
  </Router>,
  document.getElementById('app')
);
