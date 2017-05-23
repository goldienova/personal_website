import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';

import Splash from './react';
import Code from './react/code.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Code} />
    {
    //<Route path='/code' component={Code} />
    //<IndexRedirect path='/code' />
  }

  </Router>,
  document.getElementById('app')
);
