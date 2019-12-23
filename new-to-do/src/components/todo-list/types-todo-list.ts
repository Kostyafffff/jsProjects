import { IToDoItem } from '../app/app-types';
import { FILTER } from 'redux/store/types';

export interface TodoListProps {
    todoList: IToDoItem[];
    searchValue: string;
    filterValue: FILTER;
    onDeleted(id: string): void;
    onToggleImportant(id: string): void;
    onToggleDone(id: string): void;
 }
