import React, { Component } from 'react'
import Header from './headerContainer'
import Navigation from './navigationContainer'
import { Provider } from 'react-redux'

import configureStore from '../store/configureStore'
const store = configureStore();

export default class books extends Component {

    render() {
        return  <div className="mainContainer">
                    <Header/>
                    <Provider store={store}>
                        <Navigation />
                    </Provider>
                    <div className="contentContainer">
                        This is a books page. Handsontable will be here.
                    </div>
                </div>
    }
}