export interface IStore {
    searchField: string;
    addField: string;
    todoList: IStoreTodoListItem[];
    filterBy: FILTER;
}

export interface IStoreTodoListItem {
    label: string;
    important: boolean;
    done: boolean;
    id: string;
}

export enum FILTER {
    ALL = 'ALL',
    ACTIVE = 'ACTIVE',
    DONE = 'DONE',
}
