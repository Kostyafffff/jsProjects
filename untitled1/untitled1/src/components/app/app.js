import React from 'react';

import AppHeader from '../app-header'
import SearchPannel from '../search-panel'
import ToDoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter'


const App = () => {
    const toDoData = [
        {
            label : 'Drink Cofee', important : false, id : 1
        },
        {
            label : 'Make Awsome App', important : true, id : 2
        },
        {
            label : 'Have a lunch', important : false, id : 3
        }
    ];
    return (
        <div>
            <ItemStatusFilter />
            <SearchPannel />
            <AppHeader />
            <ToDoList todos = {toDoData}
            onDeleted={(id) => console.log('del', id)}
            />
        </div>
    );

};

export default App;