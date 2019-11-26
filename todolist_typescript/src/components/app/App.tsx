import * as React from 'react';
import { Component } from 'react';
import AppHeader from '../app-header/app-header'
import { ItemAddForm } from '../item-add-form/item-add-form';
import { ItemStatusFilter } from '../item-status-filter/item-status-filter';
import { IState, IToDoItem } from './app-types';

export class App extends Component<Readonly<{}>, IState> {

    maxId: number = 100;

    createTodoItem = (label: string): IToDoItem => ({
        label,
        important: false,
        done: false,
        id: this.maxId++
    });

    state: IState = {
        toDoData: [
            this.createTodoItem('Drink Cofee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ],
        term: '',
        filter: 'active',
    };

    onAddItem = (text: string): void => {

        const newItem: object = this.createTodoItem(text);

        this.setState(({ toDoData }) => {
            return {
                toDoData: [newItem, ...toDoData]
            }
        });
    };

    onToggleImportant = (id : number) : void => {

        this.setState( ({ toDoData }) => {
            return {
                toDoData: this.togleProperty( toDoData, id, 'important')
            }
        })
    };

    filter(items : IToDoItem[], filter: string) : IToDoItem[] {
        switch (filter) {
            case 'active':
                return items.filter((item : IToDoItem) => !item.done);

            case 'done':
                return items.filter((item : IToDoItem) => item.done);

            case 'all':
            default:
                return items;
        }
    }

    deleteItem = ( id : number ) : void => {
        this.setState(( { toDoData } ) => {
            return { toDoData: toDoData.filter(( element :  IToDoItem ) => element.id !== id) };
        });
    };

    togleProperty(arr: IToDoItem[], id: number, propName: string): IToDoItem[] {

        return arr.map(element => {

            if (element.id === id) {
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
        const { toDoData, filter, term } = this.state;

        return(
            <div>
                <AppHeader
                    done="done"
                    toDo="toDo"
                />
                <ItemStatusFilter
                    filter={ filter }
                    onFilterChange={this.onFilterChange}
                />
                <ItemAddForm onAddItem={this.onAddItem}/>
            </div>
        )
    }
}