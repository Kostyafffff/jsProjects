export interface IButtons {
    name: string;
    label: string;
}

export interface IPropsItemStatusFilter {
    filter: string;
    onFilterChange(filter: string): void;
}