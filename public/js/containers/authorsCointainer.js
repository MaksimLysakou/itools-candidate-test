import React, { Component } from 'react'
import Header from './headerContainer'
import Navigation from './navigationContainer'
import Authors from './authorsPage'

import { Provider } from 'react-redux'

import configureStore from '../store/configureStore'
const store = configureStore();

export default class authors extends Component {

    render() {
        return  <div className="mainContainer">
            <Header/>
            <Provider store={store}>
                <Navigation />
            </Provider>
            <Provider store={store}>
                <Authors />
            </Provider>
        </div>
    }
}