import React, { Component } from 'react'
import { connect } from 'react-redux'

class nav extends Component {
    render() {
        const links = this.props.navigation.links;
        let navTemplate = "";

        if (links.length > 0) {

            navTemplate = links.map(function (item, index) {
                return (
                    <div key={index} className='navElement'>
                        <a href={item.href}> {item.label} </a>
                    </div>
                )
            });
        }


        return  <div className="navContainer">
                    {navTemplate}
                </div>
    }
}

function mapStateToProps (state) {
    return {
        navigation: state.navigation
    }
}

export default connect(mapStateToProps)(nav)