export interface IState {
    done: boolean,
    important: boolean
}

export interface TodoListItemProps {
    label: string;
    done: boolean;
    important: boolean;
    onDeleted(): void;
    onToggleImportant(): void;
    onToggleDone(): void;
}