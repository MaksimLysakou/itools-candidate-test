import React, { PropTypes, Component } from 'react'

import 'react-dom';
import 'moment';
import 'numbro';
import 'pikaday';
import 'zeroclipboard';
import 'handsontable';

import HandsOnTable from '../../static/handsontable';
import 'handsontable/dist/handsontable.full.css';

export default class Books extends Component {
    saveBooks() {
        console.log("Save button has been clicked!");
        this.props.saveBooks(this.elements);
    }

    setDirty() {
        if(!this.props.isDirty) {
            this.props.setDirty(true);
        }
    }

    setClear() {
        if(this.props.isDirty) {
            this.props.setDirty(false);
        }
    }

    render() {
        const vm = this;
        const columnsHeaders = ['Название', 'Издательство', 'Эл. книга', 'Год', 'isbn', 'Страницы', 'Авторы'];
        const columnsType = [
            {
                data: 'name'
            },
            {
                data: 'publishing'
            },
            {
                data: 'ebook',
                type: 'checkbox'
            },
            {
                data: 'year',
                type: 'numeric'
            },
            {
                data: 'isbn'
            },
            {
                data: 'pages',
                type: 'numeric'
            },
            {
                data: 'author',
                renderer: "html"
            }
        ];

        vm.elements = JSON.parse(JSON.stringify(vm.props.books)); // TODO: FixMe!

        return (
            <div className="contentContainer">
                <button
                    onClick={vm.saveBooks.bind(vm)}
                    className={"saveBtn" + (!(vm.props.isDirty)? " invisible" : "")}
                >
                    { "Save" }
                </button>
                <div className="hotRootContainer">
                    <div className="hotContainer">
                        <HandsOnTable
                            colHeaders={columnsHeaders}
                            data={vm.elements}
                            stretchH="last"
                            columns={columnsType}
                            columnSorting={true}
                            afterSetDataAtCell={vm.setDirty.bind(vm)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Books.propTypes = {
    saveBooks: PropTypes.func.isRequired,
    setDirty: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    isDirty: PropTypes.bool.isRequired
};