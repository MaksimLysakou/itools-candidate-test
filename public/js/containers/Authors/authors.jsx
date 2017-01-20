import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authorsActions from '../../actions/authorsActions.js'
import Authors from '../../components/Authors'

class authors extends Component {

    render() {
        const authorsCollection = this.props.authorsCollection;
        const { saveAuthors } = this.props.actions;
        return <Authors authors={authorsCollection} saveAuthors={saveAuthors} />
    }
}

const mapStateToProps = (state) => ({
    authorsCollection: state.authors.authorsCollection,
    isDirty: state.authors.isDirty
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(authorsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(authors)