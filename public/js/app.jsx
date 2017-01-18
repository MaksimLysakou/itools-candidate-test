import React from 'react'
import { render } from 'react-dom'

import Home from './containers/homeContainer'
import Books from './containers/booksContainer'
import Authors from './containers/authorsContainer'

import { Router, Route, browserHistory } from 'react-router'

render(
        <Router history={browserHistory}>
            <Route path='/' component={Home} />
            <Route path='/books' component={Books} />
            <Route path='/authors' component={Authors} />
        </Router>,
    document.getElementById('root')
);