import { FILTER, IStore } from './types';
import uuid from 'uuid/v4';

export const initialStore: IStore = {
    addField: '',
    searchField: '',
    filterBy: FILTER.ALL,
    todoList: [
        {
            label: 'Setup React project ToDo List',
            important: false,
            done: false,
            id: uuid(),
        },
        {
            label: 'Rewrite project with TypeScript',
            important: false,
            done: false,
            id: uuid(),
        },
        {
            label: 'Add Redux to project',
            important: false,
            done: false,
            id: uuid(),
        },
    ],
};
