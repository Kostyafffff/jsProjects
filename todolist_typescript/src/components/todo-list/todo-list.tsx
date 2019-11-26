import { IToDoItem } from '../app/app-types';
import { TodoListItem } from '../todo-list-item/todo-list-item';

const ToDoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {

    const elements = todos.map(( item : IToDoItem ) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                              onDeleted={ () => onDeleted(id)}
                              onToggleImportant = { () => onToggleImportant(id)}
                              onToggleDone = { () => onToggleDone(id)}
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

// tslint:disable-next-line:no-default-export
export default ToDoList;