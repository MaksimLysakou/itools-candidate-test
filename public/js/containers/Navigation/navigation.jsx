import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as navigationActions from '../../actions/navActions.js'
import  Navigation from '../../components/Navigation'

class nav extends Component {

    render() {
        const navigation = this.props.navigation;
        const { setActive } = this.props.navActions;
        return <Navigation links={navigation.links} setActive={setActive} />
    }
}

const mapStateToProps = (state) => ({
    navigation: state.navigation
});

const mapDispatchToProps = (dispatch) => ({
    navActions: bindActionCreators(navigationActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(nav)