export interface IState {
    toDoData: IToDoItem[]
    filter: string
}

export interface IToDoItem {
    [key: string]: number | string | boolean;
    label: string,
    important: boolean,
    done: boolean,
    id: number
}

export interface IPropsApp {

}