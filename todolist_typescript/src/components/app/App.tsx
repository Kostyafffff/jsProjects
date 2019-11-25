import * as React from 'react';
import { Component } from 'react';
import AppHeader from '../app-header/app-header'
import { ItemAddForm } from '../item-add-form/item-add-form';
import { ItemStatusFilter } from '../item-status-filter/item-status-filter';

interface IState {
    //toDoData: IToDoItem,
    toDoData: object[]
    term: string,
    filter: string
}

interface IToDoItem {
    label : string,
    important: boolean,
    id : number
}

interface IElement {
    id: number
}

export class App extends Component<Readonly<{}>, IState> {

    maxId: number = 100;

    createTodoItem = (label: string): IToDoItem => ({
        label,
        important: false,
        id: this.maxId++
    });

    state: IState = {
        toDoData: [
            this.createTodoItem('Drink Cofee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ],
        term: '',
        filter: 'active'
    };

    onAddItem = (text: string): void => {

        const newItem: object = this.createTodoItem(text);

        this.setState(({ toDoData }) => {
            return {
                toDoData: [newItem, toDoData]
            }
        });
    };

    togleProperty(arr: IElement[], id: number, propName: string): object {
        
        return arr.map(element => {
            
            if ( element.id === id ) {
                return {
                    ...element,
                    [propName]: !element[propName],
                }
            }

            return { ...element };
        });
    }
    
    onSearchChange = (term: string): void => {
        this.setState({ term });
    };

    onFilterChange = (filter: string): void => {
        this.setState({ filter })
    };

    render(): JSX.Element {
        const { toDoData, term, filter } = this.state;
        return (
            <div>
                <AppHeader
                    done="done"
                    toDo="toDo"
                />
                <ItemStatusFilter
                    filter={filter}
                onFilterChange={this.onFilterChange}
                />
                <ItemAddForm onAddItem={this.onAddItem}/>
            </div>
        )
    }
}