import React, { Component } from 'react'
import { connect } from 'react-redux'

class content extends Component {
    render() {
        const content = this.props.content.content;
        //
        // if (links.length > 0) {
        //     navTemplate = links.map(function(item, index) {
        //         return (
        //             <div key={index} className='navElement'> +
        //                 <a href={item.href} > {item.label} </a> +
        //             </div>
        //         )
        //     })
        // }

        return {content}
    }
}

function mapStateToProps (state) {
    return {
        content: state.content
    }
}

export default connect(mapStateToProps)(content)