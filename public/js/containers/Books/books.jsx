import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as booksActions from '../../actions/booksActions.js'
import Books from '../../components/Books'

class books extends Component {

    render() {
        const { booksCollection, isDirty}  = this.props.books;
        const { authorsCollection } = this.props.authors;
        const { saveBooks, setDirty } = this.props.actions;
        return  <Books
                    books={booksCollection}
                    authors={authorsCollection}
                    isDirty={isDirty}
                    saveBooks={saveBooks}
                    setDirty={setDirty}
                />
    }
}

const mapStateToProps = (state) => ({
    authors: state.authors,
    books: state.books
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(books)