import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authorsActions from '../../actions/authorsActions.js'
import Authors from '../../components/Authors'

class authors extends Component {

    render() {
        const { authorsCollection, isDirty}  = this.props.authors;
        const { booksCollection } = this.props.books;
        const { saveAuthors, setDirty } = this.props.actions;
        return  <Authors
                    authors={authorsCollection}
                    books={booksCollection}
                    isDirty={isDirty}
                    saveAuthors={saveAuthors}
                    setDirty={setDirty}
                />
    }
}

const mapStateToProps = (state) => ({
    authors: state.authors,
    books: state.books
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(authorsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(authors)