import React, { Component } from 'react';
import classNames from 'classnames';
import { IState, TodoListItemProps } from './types-todo-list-item';

export class TodoListItem extends Component<TodoListItemProps, IState>{

    state : IState = {
        done: false,
        important: false
    };

    render(): JSX.Element {
        const {
            label,
            onDeleted,
            onToggleImportant,
            onToggleDone,
            important,
            done
        } = this.props;

        const className: string = classNames('todo-list-item', {
            'done': done,
            'important': important,
        });

        return(
            <span className={className}>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}>
                {label}
                </span>
                <div className="button-wrapper">
                    <button type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={onToggleImportant}
                    >
                    <i className="fa fa-exclamation"/>
                </button>
                <button type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={onDeleted}
                >
                    <i className="fa fa-trash-o"/>
                </button>
                </div>
        </span>);
    }
}