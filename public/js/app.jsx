import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import routes from './routes.jsx';

import configureStore from './store/configureStore.js'
const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,

    document.getElementById('root')
);