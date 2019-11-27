export interface IState {
    toDoData: IToDoItem[]
    term: string,
    filter: string
}

export interface IToDoItem {
    label: string,
    important: boolean,
    done: boolean,
    id: number
}