import React, { Component } from 'react';
import { IState } from './types-todo-list-item';

export class TodoListItem extends Component<Readonly<{}>>{
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

        let classNames : string = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        if (important) {
            classNames += ' important';
        }
        
        return(
            <span className={classNames}>
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