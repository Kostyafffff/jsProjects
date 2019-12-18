import * as React from 'react';
// @ts-ignore
import { Component } from 'react';
import { AppHeader } from '../app-header/app-header'
import { ItemStatusFilter } from '../item-status-filter/component';
import { SearchPanel } from '../search-panel';
// @ts-ignore
import { Component } from '../todo-list/todo-list';
import { IToDoItem, IState } from './app-types';
import { ItemAddForm } from "../item-add-form";
export class App extends Component<IToDoItem, IState> {

    maxId: number = 100;

    createTodoItem = (label: string): IToDoItem => ({
        label,
        important: false,
        done: false,
        id: this.maxId++
    });

    state: IState = {
        toDoData: [
            this.createTodoItem('Setup React project ToDo List'),
            this.createTodoItem('Rewrite ToDo list with typescript'),
            this.createTodoItem('Create tests with Jest and Enzyme'),
        ],
        filter: 'active',
    };

    onAddItem = (text: string): void => {
        const newItem = this.createTodoItem(text);

        this.setState(({ toDoData }) => {
            return {
                toDoData: [newItem, ...toDoData]
            }
        });
    };

    onToggleImportant = (id: number): void => this.setState( ({ toDoData }) => ({
        toDoData: this.toggleProperty(toDoData, id, 'important'),
    }));

    filter(items : IToDoItem[], filter: string) : IToDoItem[] {
        switch (filter) {
            case 'active':
                return items.filter((item: IToDoItem) => !item.done);

            case 'done':
                return items.filter((item: IToDoItem) => item.done);

            case 'all':
            default:
                return items;
        }
    }

    search(items: IToDoItem[], term: string): IToDoItem[] {
        return items.filter((item: IToDoItem) => {
                if (term.length === 0) {
                    return items;
                }

                return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
            }
        )
    }

    deleteItem = ( id : number ) : void => {
        this.setState(( { toDoData } ) => {
            return { toDoData: toDoData.filter(( element: IToDoItem ) => element.id !== id) };
        });
    };

    toggleProperty = (
        arr: IToDoItem[],
        id: number,
        propName: string,
    ): IToDoItem[] => arr.map(element => {
        if (element.id === id) {
            return {
                ...element,
                [propName]: !element[propName],
            };
        }

        return { ...element };
    });

    onToggleDone = (id: number): void => {
        this.setState(({ toDoData }) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, 'done')
            }
        })
    };

    onSearchChange = (): void => this.setState({  });

    onFilterChange = (filter: string): void => this.setState({ filter });

    render(): JSX.Element {
        const { toDoData, filter } = this.state;

        const visibleItems: IToDoItem[] = this.filter( this.search(toDoData, ''), filter);

        const doneCount = toDoData.filter(element => element.done).length;

        const toDoCount: number = toDoData.length - doneCount;

        return(
            <div>
                <AppHeader toDo={toDoCount} done={doneCount} />
                <SearchPanel />
                <ItemStatusFilter
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                />
                <ItemAddForm />
                <Component
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
            </div>
        )
    }
}
//onAddItem={this.onAddItem}