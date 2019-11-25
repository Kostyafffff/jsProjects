import * as React from 'react';

interface IProps {
    toDo?: string;
    done?: string;
}

const AppHeader: React.FC<IProps> = ({ toDo, done }): JSX.Element => {
    return (
        <div className="app-header d-flex">
            <h1>My ToDo List</h1>
            <h2>{toDo} more to do, {done}</h2>
        </div>
    )
};

// tslint:disable-next-line:no-default-export
export default AppHeader;