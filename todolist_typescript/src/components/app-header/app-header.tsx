import React from "react";

import { IProps } from './types-app-header';
import './app-header.css'

export const AppHeader: React.FC<IProps> = ({ toDo, done }): JSX.Element => {
    return (
        <div className="app-header d-flex">
            <h1>My ToDo List</h1>
            <h2>{toDo} more to do, {done}</h2>
        </div>
    )
};
