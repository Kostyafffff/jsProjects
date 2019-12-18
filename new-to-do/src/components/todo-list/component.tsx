import * as React from 'react';

import { TodoListProps } from './types-todo-list';
import './todo-list.css';
import { TodoListItem } from "../todo-list-item/component";

export const Component: React.FC<TodoListProps> = ({ todos, onDeleted, onToggleImportant, onToggleDone }): JSX.Element => {
    const elements = todos.map(item => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={(): void => onDeleted(id)}
                    onToggleImportant={(): void => onToggleImportant(id)}
                    onToggleDone={(): void => onToggleDone(id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
    //make connect
};
