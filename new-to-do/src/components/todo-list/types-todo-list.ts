import { IToDoItem } from '../app/app-types';

export interface TodoListProps {
    todoList: IToDoItem[];
    onDeleted(id: string): void;
    onToggleImportant(id: string): void;
    onToggleDone(id: string): void;
 }
