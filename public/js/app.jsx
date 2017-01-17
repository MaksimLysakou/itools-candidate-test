import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Navigation from './components/navigation'
import Content from './components/content'
import configureStore from './store/configureStore'

const store = configureStore();

render(
    <Provider store={store}>
        <Navigation />
    </Provider>,
    document.getElementById('navMenu')
);

render(
    <Provider store={store}>
        <Content />
    </Provider>,
    document.getElementById('content')
);
