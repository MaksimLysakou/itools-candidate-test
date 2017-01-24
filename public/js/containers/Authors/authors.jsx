import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authorsActions from '../../actions/authorsActions.js'
import * as booksActions from '../../actions/booksActions.js'
import Authors from '../../components/Authors'

class authors extends Component {

    render() {
        const { authorsCollection, isDirty}  = this.props.authors;
        const { booksCollection } = this.props.books;
        const { getAuthors, saveAuthors, setDirty } = this.props.authorsActions;
        const { getBooks } = this.props.booksActions;
        return  <Authors
                    authors={authorsCollection}
                    books={booksCollection}
                    isDirty={isDirty}
                    saveAuthors={saveAuthors}
                    setDirty={setDirty}
                    getAuthors={getAuthors}
                    getBooks={getBooks}
                />
    }
}

const mapStateToProps = (state) => ({
    authors: state.authors,
    books: state.books
});

const mapDispatchToProps = (dispatch) => ({
    authorsActions: bindActionCreators(authorsActions, dispatch),
    booksActions: bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(authors)