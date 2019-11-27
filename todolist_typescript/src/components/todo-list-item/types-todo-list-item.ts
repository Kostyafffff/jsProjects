export interface IState {
    done: boolean,
    important: boolean
}

export interface TodoListItemProps {
    label: string;
    onDeleted(): void;
    onToggleImportant(): void;
    onToggleDone(): void;
    done: boolean;
    important: boolean;
}