export interface IPropsApp {
    toDoData: IToDoItem[];
}

export interface IToDoItem {
    [key: string]: number | string | boolean;
    label: string,
    important: boolean,
    done: boolean,
    id: string;
}