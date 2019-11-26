export interface IState {
    //toDoData: IToDoItem,
    toDoData: object[]
    term: string,
    filter: string
}

// export interface IToDoData {
//     createToDoItem();
// }

export interface IToDoItem {
    label : string,
    important: boolean,
    done: boolean,
    id : number
}

export interface IElement {
    id: number
}