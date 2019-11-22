import React, {Component} from 'react';

import AppHeader from '../app-header'
import SearchPannel from '../search-panel'
import ToDoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from "../item-add-form";


export default class App extends Component {

    maxId = 100;

    createTodoItem = (label) => ({
        label,
        important: false,
        id: this.maxId++
    });

    state = {
        toDoData: [
            this.createTodoItem('Drink Cofee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ],
        term: '',
        filter: 'active'
    };

    onSearchChange = (term) => {
        this.setState({term});
    };

    onFilterChange = (filter) => {
        this.setState({filter});
    };

    toggleProperty(arr, id, propName) {

        // const index = arr.findIndex((element) => element.id === id);
        //
        // const oldItem = arr[index];
        //
        // //новый объект с свойсвтом, которое изменило своё значение
        //
        // const newItem = {
        //     ...oldItem,
        //     [propName]: !oldItem[propName]
        // };

        // return {
        //     ...arr.slice(0, index),
        //     newItem,
        //     ...arr.slice(index + 1)
        // }

        return arr.map(it => {

            if (it.id === id) {
                return {
                    ...it,
                    [propName]: !it[propName],
                };
            }
            return {...it};
        });
    };

    deleteItem = (id) => {
        this.setState(({toDoData}) => {

            // const index = toDoData.findIndex((element) => element.id === id);
            //
            // const newList = [
            //     ...toDoData.slice(0, index),
            //     ...toDoData.slice(index + 1)
            // ];

            return { toDoData: toDoData.filter((element) => element.id !== id) };
        });
    };

    onAddItem = (text) => {

        const newItem = this.createTodoItem(text);

        this.setState(({toDoData}) => {

            // const newList = ;

            return {
                toDoData: [
                    newItem,
                    ...toDoData
                ]
            }
        });
    };

    onToggleImportant = (id) => {

        this.setState(({toDoData}) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, 'important')
            }
        });
    };

    filter(items, filter) {
        switch (filter) {
            case 'active':
                return items.filter((item) => !item.done);

            case 'done':
                return items.filter((item) => item.done);

            case 'all':
            default:
                return items;
        }
    }

    search(items, term) {
        return items.filter((item) => {
            if (term.length === 0) {
                return items;
            }
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    onToggleDone = (id) => {
        this.setState(({toDoData}) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, 'done')
            }
        });
    };

    render() {

        const {toDoData, term, filter} = this.state;

        const visibleItems = this.filter(
            this.search(toDoData, term), filter
        );

        const doneCount = toDoData
            .filter((element) => element.done).length;

        const toDoCount = toDoData.length - doneCount;

        return (
            <div>
                <AppHeader toDo={toDoCount} done={doneCount}/>
                <SearchPannel
                    onSearchChange={this.onSearchChange}
                />
                <ItemStatusFilter
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                />
                <ItemAddForm onAddItem={this.onAddItem}/>
                <ToDoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
            </div>
        )
    }
}
