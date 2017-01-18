import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Navigation from './containers/navigationContainer'
import configureStore from './store/configureStore'

import Home from './containers/navigationContainer'     //TODO add Home container
import Books from './containers/navigationContainer'    //TODO add Books container
import Authors from './containers/navigationContainer'  //TODO add Authors container


import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const store = configureStore();

render(
    <Provider store={store}>
        <Navigation />
    </Provider>,
    document.getElementById('navMenu')
);

render(
    <Router history={browserHistory}>
        <Route path='/' component={Home}>
            <IndexRoute component={Home} />
            <Route path='books' component={Books} />
            <Route path='authors' component={Authors} />
        </Route>
    </Router>,
    document.getElementById('content')
)