import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as navigationActions from '../actions/navAction'

export default class nav extends Component {

    render() {
        return  <div className="headerContailer">
                    <div className="logoImg">
                        📖
                    </div>
                    <div className="logoText">
                        Book Store
                    </div>
                </div>
    }
}