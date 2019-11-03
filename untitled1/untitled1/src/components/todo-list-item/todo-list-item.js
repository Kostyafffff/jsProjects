import React, {Component} from "react";
import "./todo-list-item.css";


export default class ToDoListItem extends Component {
    state = {
        done: false
    };

    onLabelClick = () => {
        this.setState({
            done: true
        });
    };

    render() {
        const {label, important = false} = this.props;
        const {done} = this.state;

        let classNames = 'todo-list-item';

        if( done ){
            classNames += ' done';
        }

        const liStyle = {
            color: important ? 'tomato' : 'black'
        };
        return (
            <span className={classNames}>
                <span
                    className='todo-list-item-label'
                    style={liStyle}
                    onClick={this.onLabelClick}>
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
    }
}

