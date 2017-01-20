import React from 'react';
import { IndexRoute, Route }  from 'react-router';

import App from './components/App'

import Home from './components/Home'
import Books from './containers/Books'
import Authors from './containers/Authors'

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/books' component={Books} />
        <Route path='/authors' component={Authors} />
    </Route>
);