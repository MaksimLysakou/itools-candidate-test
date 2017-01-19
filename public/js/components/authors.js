import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import numbro from 'numbro';
import pikaday from 'pikaday';
import Zeroclipboard from 'zeroclipboard';
import Handsontable from 'handsontable';
import HotTable from '../static/handsontable';
import 'handsontable/dist/handsontable.full.css';

export default class AuthorsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '[[1, 2, 3, 4], [1, 2, 3, 4]]',
            val: JSON.parse('[[1, 2, 3, 4], [1, 2, 3, 4]]'),
            readOnly: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleChange(event) {
        let valid = true;

        try {
            JSON.parse(event.target.value);

        } catch (error) {
            valid = false;
        }

        if (valid) {
            this.setState({val: JSON.parse(event.target.value)});
        }

        this.setState({value: event.target.value});
    }

    handleCheckboxChange(event) {
        this.setState({val: void 0, readOnly: event.target.checked});
    }

    render() {
        return (
            <div>
                <textarea onChange={this.handleChange} value={this.state.value} /><br/>
                Make read-only: <input onChange={this.handleCheckboxChange} type="checkbox"/><br/>
                <HotTable
                    root="hot"
                    contextMenu={true}
                    colHeaders={true}
                    width="600"
                    height="300"
                    stretchH="all"
                    readOnly={this.state.readOnly}
                    data={this.state.val}
                />
            </div>
        );
    }
}