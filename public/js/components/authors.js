import React, { PropTypes, Component } from 'react'

import 'react-dom';
import 'moment';
import 'numbro';
import 'pikaday';
import 'zeroclipboard';
import 'handsontable';

import HandsOnTable from '../static/handsontable';
import 'handsontable/dist/handsontable.full.css';

export default class AuthorsGrid extends Component {
    saveAuthors() {
        console.log("Save button has been clicked!");
        this.props.saveAuthors(this.elements);
    }

    render() {
        const vm = this;

        console.log(vm.props.authorsCollection);
        vm.elements = Object.assign([], vm.props.authorsCollection);
        console.log(vm.elements);
            //will receive props component
            //state
            //react lifecycle
        //vm.elements -> state

        return (
            <div className="">
                <button onClick={vm.saveAuthors.bind(vm)}> Save </button>
                <HandsOnTable
                    id="AuthorsHotTable"
                    root="hot"
                    contextMenu={false}
                    colHeaders={['Фамилия', 'Имя', 'Дата рождения', 'Email', 'Книги']}
                    colWidths={["118","120","147","223","500"]}
                    readOnly={false}
                    data={vm.elements}
                />
            </div>
        );
    }
}

AuthorsGrid.propTypes = {
    saveAuthors: PropTypes.func.isRequired,
};

