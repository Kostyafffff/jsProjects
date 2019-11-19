import React, {Component} from 'react';

import AppHeader from '../app-header'
import SearchPannel from '../search-panel'
import ToDoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter'


export default class App extends Component {
    state = {
        toDoData: [
            {
                label: 'Drink Cofee', important: false, id: 1
            },
            {
                label: 'Make Awsome App', important: true, id: 2
            },
            {
                label: 'Have a lunch', important: false, id: 3
            }
        ]
    };

    deleteItem = (id) => {
        this.setState(({toDoData}) => {

            // в этом блочке мы не изменяем state
            const index = toDoData.findIndex((element) => element.id === id);

            const newList = [
                ...toDoData.slice(0, index),
                ...toDoData.slice(index + 1)
            ];

            return {
                toDoData: newList
            };
        });
    };

    render() {
        return (
            <div>
                <ItemStatusFilter/>
                <SearchPannel/>
                <AppHeader/>
                <ToDoList
                    todos={this.state.toDoData}
                    onDeleted={this.deleteItem}
                />
            </div>
        )
    }
}
