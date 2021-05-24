import {ChangeEvent} from "react";

export interface IPropsCar {
    carName: string;
    year: number;
    areCarsShown?: boolean;
    className?: string;

    onChangeTitle?(): void;
    onDelete(): void;
    onChangeName?(event:ChangeEvent<HTMLInputElement>): void;
}
