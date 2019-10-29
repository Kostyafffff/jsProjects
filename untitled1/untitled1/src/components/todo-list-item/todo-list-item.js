import React from 'react';
import "./todo-list-item.css";
import ReactDOM from 'react-dom';

const ToDoListItem = ({label, important = false}) => {
    const liStyle = {
        color: important ? 'tomato' : 'black'
    };
    return (
        <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={liStyle}>
                {label}
            </span>
             <button type="button"
                     className="btn btn-outline-success btn-sm"/>
             <i className="fa fa-exclamation"/>
                          <button type="button"
                                  className="btn btn-outline-danger btn-sm"/>
             <i className="fa fa-trash-o"/>

        </span>
    )
};

export default ToDoListItem;