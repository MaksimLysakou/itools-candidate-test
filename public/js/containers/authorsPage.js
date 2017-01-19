import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authorsActions from '../actions/authorsAction'
import AuthorsTable from '../components/authors'

class authors extends Component {

    render() {
        const authors = this.props.authors;
        const { handleSaveAuthors } = this.props.authorsActions;
        console.log(authors.authorsCollection);
        return <AuthorsTable authorsCollection={authors.authorsCollection} saveAuthors={handleSaveAuthors} />
    }
}

const mapStateToProps = (state) => ({
    authors: state.authors
});

const mapDispatchToProps = (dispatch) => ({
    authorsActions: bindActionCreators(authorsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(authors)