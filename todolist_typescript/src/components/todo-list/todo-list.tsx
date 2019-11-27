import * as React from 'react';
import { IToDoItem } from '../app/app-types';
import { TodoListItem } from '../todo-list-item/todo-list-item';

export const ToDoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = todos.map(( item : IToDoItem ) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}

                              onDeleted={(): void => onDeleted()}
                              onToggleImportant = {(): void => onToggleImportant() }
                              onToggleDone = {(): void => onToggleDone() }
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};
