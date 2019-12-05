import { IToDoItem } from '../app/app-types';

export interface TodoListProps {
    todos: IToDoItem[];
    onDeleted(id: number): void;
    onToggleImportant(id: number): void;
    onToggleDone(id: number): void;
 }
