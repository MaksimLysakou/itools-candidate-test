import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as booksActions from '../../actions/booksActions.js'
import * as authorsActions from '../../actions/authorsActions.js'
import Books from '../../components/Books'

class books extends Component {

    render() {
        const { booksCollection, isDirty}  = this.props.books;
        const { authorsCollection } = this.props.authors;
        const { getBooks, saveBooks, setDirty } = this.props.booksActions;
        const { getAuthors } = this.props.authorsActions;
        return  <Books
                    books={booksCollection}
                    authors={authorsCollection}
                    isDirty={isDirty}
                    saveBooks={saveBooks}
                    setDirty={setDirty}
                    getBooks={getBooks}
                    getAuthors={getAuthors}
                />
    }
}

const mapStateToProps = (state) => ({
    authors: state.authors,
    books: state.books
});

const mapDispatchToProps = (dispatch) => ({
    booksActions: bindActionCreators(booksActions, dispatch),
    authorsActions: bindActionCreators(authorsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(books)