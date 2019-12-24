import React from 'react';
import { AppHeader } from '../app-header'
import { ItemStatusFilter } from '../item-status-filter';
import { SearchPanel } from '../search-panel';
import { ItemAddForm } from '../item-add-form';
import { TodoList } from '../todo-list';

export class App extends React.Component {

    render(): JSX.Element {
        return(
            <div>
                <AppHeader />
                <SearchPanel />
                <ItemStatusFilter />
                <ItemAddForm />
                <TodoList />
            </div>
        )
    }
}