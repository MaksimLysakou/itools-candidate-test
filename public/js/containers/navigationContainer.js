import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as navigationActions from '../actions/navAction'
import  Navigation from '../components/navigation'

class nav extends Component {

    render() {
        const navigation = this.props.navigation;
        const { setActive } = this.props.navActions;
        return <Navigation links={navigation.links} setActive={setActive} />
    }
}

function mapStateToProps (state) {
    return {
        navigation: state.navigation
    }
}

function mapDispatchToProps(dispatch) {
    return {
        navActions: bindActionCreators(navigationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(nav)