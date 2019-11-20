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
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ],
        term: ''
    };

    onSearchChange = (term) => {
        this.setState({ term });
    };

    toggleProperty(arr, id, propName){

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
            return { ...it };
        });
    };

    deleteItem = (id) => {
        this.setState(({toDoData}) => {

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

        this.setState(( {toDoData} ) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, 'important')
            }
        });
    };

    search(items, term){
       return items.filter( (item) => {
           if(term.length === 0){
               return items;
           }
            return item.label.indexOf(term) > -1;
        });
    }

    onToggleDone = (id) => {
        this.setState(( {toDoData} ) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, 'done')
            }
        });
    };

    render() {

        const { toDoData, term } = this.state;

        const visibleItems = this.search(toDoData, term);

        const doneCount = toDoData
            .filter( (element) => element.done).length;

        const toDoCount = toDoData.length - doneCount;

        return (
            <div>
                <ItemStatusFilter/>
                <SearchPannel
                    onSearchChange = {this.onSearchChange}
                />
                <AppHeader toDo={toDoCount} done={doneCount}/>
                <ToDoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onAddItem={this.onAddItem}/>
            </div>
        )
    }
}
