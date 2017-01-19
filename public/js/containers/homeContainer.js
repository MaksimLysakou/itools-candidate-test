import React, { Component } from 'react'
import Header from './headerContainer'
import Navigation from './navigationContainer'
import { Provider } from 'react-redux'


import configureStore from '../store/configureStore'
const store = configureStore();

export default class nav extends Component {

    render() {
        return  <div className="mainContainer">
                    <Header/>
                    <Provider store={store}>
                        <Navigation />
                    </Provider>
                    <div className="contentContainer">
                        <h2> Welcome to our Book Store! </h2>
                        <span> There you can find a lot of useful information about books, their authors etc. </span>
                        <h4> Have a fun! </h4>
                    </div>
                </div>
    }
}