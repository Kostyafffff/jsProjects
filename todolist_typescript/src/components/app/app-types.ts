export interface IState {
    toDoData: IToDoItem[]
    term: string,
    filter: string
}

export interface IToDoItem {
    [key: string]: number | string | boolean;
    label: string,
    important: boolean,
    done: boolean,
    id: number
}