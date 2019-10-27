import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header'
import SearchPannel from './components/search-panel'
import ToDoListItem from './components/todo-list-item'
import ToDoList from './components/todo-list'


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
            <AppHeader />
            <SearchPannel />
            <ToDoList todos = {toDoData}/>
        </div>
    );

};
ReactDOM.render(<App />, document.getElementById('root'));
