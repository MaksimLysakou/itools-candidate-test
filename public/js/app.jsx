import React from 'react'
import { render } from 'react-dom'

import Home from './containers/homeContainer'
import Books from './containers/booksContainer'
import Authors from './containers/authorsCointainer'


import { Router, Route, browserHistory, IndexRoute } from 'react-router'

render(
        <Router history={browserHistory}>
            <Route path='/' component={Home} />
            <Route path='/books' component={Books} />
            <Route path='/authors' component={Authors} />
        </Router>,

    document.getElementById('root')
);
//
// {/*<Router history={browserHistory}>
//  <Route path='/' component={Home}>
//  <IndexRoute component={Home} />
//  <Route path='books' component={Books} />
//  <Route path='authors' component={Authors} />
//  </Route>
//  </Router>,*/}