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
                <div className="contentContainer">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;