export interface IStateItemAddForm {
    label: string;
}

export interface IPropsItemAddForm {
    fieldValue: string;
    setAddFieldValue(label: string): void;
}