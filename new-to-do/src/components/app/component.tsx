import React from 'react';
import { AppHeader } from '../app-header/app-header'
import { ItemStatusFilter } from '../item-status-filter';
import { SearchPanel } from '../search-panel';
import { IPropsApp } from './app-types';
import { ItemAddForm } from '../item-add-form';
import { TodoList } from '../todo-list';

export class App extends React.Component<IPropsApp> {

  //  maxId: number = 100;

    // createTodoItem = (label: string): IToDoItem => ({
    //     label,
    //     important: false,
    //     done: false,
    //     id: this.maxId++
    // });

    // state: IState = {
    //     toDoData: [
    //         this.createTodoItem('Setup React project ToDo List'),
    //         this.createTodoItem('Rewrite ToDo list with typescript'),
    //         this.createTodoItem('Create tests with Jest and Enzyme'),
    //     ],
    //     filter: 'active',
    // };

    // onAddItem = (text: string): void => {
    //     const newItem = this.createTodoItem(text);
    //
    //     this.setState(({ toDoData }) => {
    //         return {
    //             toDoData: [newItem, ...toDoData]
    //         }
    //     });
    // };

    // onToggleImportant = (id: string): void => this.setState( ({ toDoData }) => ({
    //     toDoData: this.toggleProperty(toDoData, id, 'important'),
    // }));

    // filter(items : IToDoItem[], filter: string) : IToDoItem[] {
    //     switch (filter) {
    //         case 'active':
    //             return items.filter((item: IToDoItem) => !item.done);
    //
    //         case 'done':
    //             return items.filter((item: IToDoItem) => item.done);
    //
    //         case 'all':
    //         default:
    //             return items;
    //     }
    // }
    //
    // search(items: IToDoItem[], term: string): IToDoItem[] {
    //     return items.filter((item: IToDoItem) => {
    //             if (term.length === 0) {
    //                 return items;
    //             }
    //
    //             return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    //         }
    //     )
    // }

    // deleteItem = ( id : string ) : void => {
    //     this.setState(( { toDoData } ) => {
    //         return { toDoData: toDoData.filter(( element: IToDoItem ) => element.id !== id) };
    //     });
    // };

    // toggleProperty = (
    //     arr: IToDoItem[],
    //     id: string,
    //     propName: string,
    // ): IToDoItem[] => arr.map(element => {
    //     if (element.id === id) {
    //         return {
    //             ...element,
    //             [propName]: !element[propName],
    //         };
    //     }
    //
    //     return { ...element };
    // });

    // onToggleDone = (id: string): void => {
    //     this.setState(({ toDoData }) => {
    //         return {
    //             toDoData: this.toggleProperty(toDoData, id, 'done')
    //         }
    //     })
    // };

    render(): JSX.Element {
        const { toDoData } = this.props;

        const doneCount = toDoData.filter(element => element.done).length;

        const toDoCount: number = toDoData.length - doneCount;

        return(
            <div>
                <AppHeader toDo={toDoCount} done={doneCount} />
                <SearchPanel />
                <ItemStatusFilter />
                <ItemAddForm />
                <TodoList />
            </div>
        )
    }
}
//onAddItem={this.onAddItem}