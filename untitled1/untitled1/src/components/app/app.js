import React, {Component} from 'react';

import AppHeader from '../app-header'
import SearchPannel from '../search-panel'
import ToDoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from "../item-add-form";


export default class App extends Component {

    maxId = 100;

    createTodoItem = (label) => {
        return {
            label,
            important: false,
            id: this.maxId++
        }
    };

    state = {
        toDoData: [
            this.createTodoItem('Drink Cofee'),
            this.createTodoItem('Make Awsome App'),
            this.createTodoItem('Have a lunch'),
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

    onAddItem = (text) => {

        const newItem = this.createTodoItem(text);

        this.setState(({toDoData}) => {

            const newList = [
                newItem,
                ...toDoData
            ];

            return {
                toDoData: newList
            }
        });
    };

    onToggleImportant = (id) => {

        this.setState(({toDoData}) => {
            const index = toDoData.findIndex((element) => element.id === id);
        });

        console.log('toggle Important', id);
    };

    onToggleDone = (id) => {
        console.log('toggle done', id);
        this.setState(({toDoData}) => {
            const index = toDoData.findIndex((element) => element.id === id);

            const oldItem = toDoData[index];

            //новый объект с свойсвтом, которое изменило своё значение

            const newItem = {
                ...oldItem,
                done: !oldItem.done
            };

            const newArray = [
                ...toDoData.slice(0, index),
                newItem,
                ...toDoData.slice(index + 1)
            ];

            return {
                toDoData: newArray
            }
        });
    };

    render() {

        const doneCount = this.state.toDoData.filter(
            ( element) => element.done).length;

        const toDoCount = this.state.toDoData.length - doneCount;

        return (
            <div>
                <ItemStatusFilter/>
                <SearchPannel/>
                <AppHeader toDo={ toDoCount } done={doneCount}/>
                <ToDoList
                    todos={this.state.toDoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onAddItem={this.onAddItem}/>
            </div>
        )
    }
}
