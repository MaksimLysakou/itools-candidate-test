import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authorsActions from '../../actions/authorsActions.js'
import Authors from '../../components/Authors'

class authors extends Component {

    render() {
        const { authorsCollection, isDirty}  = this.props.authors;
        const { saveAuthors, setDirty } = this.props.actions;
        return  <Authors
                    authors={authorsCollection}
                    isDirty={isDirty}
                    saveAuthors={saveAuthors}
                    setDirty={setDirty}
                />
    }
}

const mapStateToProps = (state) => ({
    authors: state.authors
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(authorsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(authors)