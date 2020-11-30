export interface ILabelProps {
    className?: string;
    text: string;
    type: string;
    value: string;
    placeholder: string;
    onChange(e: any): void;
}
