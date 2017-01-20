import React, { PropTypes, Component } from 'react'

import 'react-dom';
import 'moment';
import 'numbro';
import 'pikaday';
import 'zeroclipboard';
import 'handsontable';

import HandsOnTable from '../../static/handsontable';
import 'handsontable/dist/handsontable.full.css';

export default class Authors extends Component {
    saveAuthors() {
        console.log("Save button has been clicked!");
        this.props.saveAuthors(this.elements);
    }

    render() {
        const vm = this;
        const columnsHeaders = ['Фамилия', 'Имя', 'Дата рождения', 'Email', 'Книги'];
        const columnsWidth = ['Фамилия', 'Имя', 'Дата рождения', 'Email', 'Книги'];

        vm.elements = Object.assign([], vm.props.authors);

        //will receive props component
        //state
        //react lifecycle
        //vm.elements -> state

        return (
            <div className="contentElementsContainer">
                <div className="hotContainer">
                    <button onClick={vm.saveAuthors.bind(vm)}> Save </button>
                    <HandsOnTable
                        colHeaders={columnsHeaders}
                        data={vm.elements}
                        stretchH="last"
                    />
                </div>
            </div>
        );
    }
}

Authors.propTypes = {
    saveAuthors: PropTypes.func.isRequired,
    authors: PropTypes.array.isRequired
};

