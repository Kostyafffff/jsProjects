export interface TodoListItemProps {
    label: string;
    done: boolean;
    important: boolean;
    onDeleted(): void;
    onToggleImportant(): void;
    onToggleDone(): void;
}