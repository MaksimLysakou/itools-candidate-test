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
        this.props.saveAuthors(this.elements);
    }

    setDirty() {
        if(!this.props.isDirty) {
            this.props.setDirty(true);
        }
    }

    componentWillMount() {
        this.props.getBooks();
        this.props.getAuthors();
    }

    customRenderer(instance, td, row, col, prop, value, cellProperties) {
        let idArray;
        let rootDiv = document.createElement('div');

        try {
            idArray = JSON.parse(value);

            if(idArray instanceof Array) {

                idArray.forEach((element) => {
                    this.props.books.forEach((book) => {
                        if (book["_id"] == element) {
                            const bookType = ((book["ebook"]) ? "Электронная книга" : "Книга");
                            rootDiv.innerHTML +=    `<div class = "subCell">` +
                                                        `ID: ${book["_id"]}
                                                         ${bookType}: <b>${book["name"]}</b> 
                                                         Издательство: ${book["publishing"]} 
                                                         Год выпуска: ${book["year"]} 
                                                         ISBN: ${book["isbn"]} 
                                                         Кол-во страниц: ${book["pages"]}` +
                                                    `</div>`;
                        }
                    })
                });
            } else {
                rootDiv.innerHTML = "Отсутствуют";
            }

            if( rootDiv.innerHTML == "" ) {
                rootDiv.innerHTML = "Отсутствуют";
            }

        } catch (error) {
            rootDiv.innerHTML = "Отсутствуют";
        }

        Handsontable.Dom.empty(td);
        td.appendChild(rootDiv);

        return td;
    }

    render() {

        const vm = this;
        const columnsHeaders = ['Id', 'Фамилия', 'Имя', 'Дата рождения', 'Email', 'Книги'];
        const columnsType = [
            {
                data: '_id'
            },
            {
                data: 'secondName'
            },
            {
                data: 'firstName',
            },
            {
                data: 'birthDate',
                type: 'date',
                dateFormat: 'DD/MM/YYYY',
                correctFormat: true,
                // datePicker additional options (see https://github.com/dbushell/Pikaday#configuration)
                datePickerConfig: {
                    // First day of the week (0: Sunday, 1: Monday, etc)
                    firstDay: 0,
                    showWeekNumber: true,
                    numberOfMonths: 3
                }
            },
            {
                data: 'email',
            },
            {
                data: 'book',
                renderer: vm.customRenderer.bind(vm)
            }
        ];

        vm.elements = JSON.parse(JSON.stringify(vm.props.authors)); // TODO: FixMe!

        return (
            <div className="contentContainer">
                <button
                    onClick={vm.saveAuthors.bind(vm)}
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
                            manualColumnResize={true}
                            afterSetDataAtCell={vm.setDirty.bind(vm)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Authors.propTypes = {
    getBooks: PropTypes.func.isRequired,
    getAuthors: PropTypes.func.isRequired,
    saveAuthors: PropTypes.func.isRequired,
    setDirty: PropTypes.func.isRequired,
    authors: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    isDirty: PropTypes.bool.isRequired
};