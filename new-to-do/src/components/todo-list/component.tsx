import * as React from 'react';

import { TodoListProps } from './types-todo-list';
import './todo-list.css';
import { TodoListItem } from '../todo-list-item/component';
import { IToDoItem } from '../app/app-types';

const filter = (items : IToDoItem[], filter: string) : IToDoItem[] => {
    switch (filter) {
        case 'active':
            return items.filter((item: IToDoItem) => !item.done);

        case 'done':
            return items.filter((item: IToDoItem) => item.done);

        case 'all':
        default:
            return items;
    }
};

const search = (items: IToDoItem[], term: string): IToDoItem[] => {
    return items.filter((item: IToDoItem) => {
            if (term.length === 0) {
                return items;
            }

            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        }
    )
};

export const TodoList: React.FC<TodoListProps> = ({
    todoList,
    onDeleted,
    onToggleImportant,
    onToggleDone,
    filterValue,
    searchValue,
}): JSX.Element => {
    const elements = filter(search(todoList, searchValue), filterValue).map(item => {
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
