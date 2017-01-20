import React, { Component, PropTypes } from 'react';

import Header from '../Header'
import Navigation from '../../containers/Navigation'

const propTypes = {
  children: PropTypes.node
};

class App extends Component {
    render() {
        return (
            <div className="mainContainer">
                <Header/>
                <Navigation />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;