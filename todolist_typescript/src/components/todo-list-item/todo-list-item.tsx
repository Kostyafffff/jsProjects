import * as React from 'react';
import classNames from 'classnames';
import { TodoListItemProps } from './types-todo-list-item';
import './todo-list-item.css';

export const TodoListItem: React.FC<TodoListItemProps> = ({
    label,
    onDeleted,
    onToggleImportant,
    onToggleDone,
    important,
    done,
}): JSX.Element => {
    const className: string = classNames('todo-list-item', {
        done,
        important,
    });

    return(
        <span className={className}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}
            >
                { label }
            </span>
            <div className="button-wrapper">
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation" />
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        </span>
    );
};
