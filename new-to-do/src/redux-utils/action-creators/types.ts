export interface IActionBase {
    type: string;
}

export interface IAction<P> extends IActionBase{
    payload: P;
}