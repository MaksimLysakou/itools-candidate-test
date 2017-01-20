import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class Navigation extends Component {
    setActiveTab(e) {
        const id = +e.target.id.substring("navButton".length);
        this.props.setActive(id);
    }

    render() {
        const links = this.props.links;
        let navTemplate = "";

        if (links.length > 0) {

            navTemplate = links.map((item, index) => {
                return (<div key={index} className='navElement'>
                            <Link
                                id={"navButton" + index}
                                to={item.href}
                                activeClassName='active'
                                onlyActiveOnIndex={true}
                                onClick={this.setActiveTab.bind(this)}
                            >
                                {item.label}
                            </Link>
                        </div>)
            });
        }

        return  <div className='navContainer'>
                    {navTemplate}
                </div>
    }
}

Navigation.propTypes = {
    links: PropTypes.array.isRequired,
    setActive: PropTypes.func.isRequired
};