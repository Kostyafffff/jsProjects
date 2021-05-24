import {ChangeEvent} from "react";

export interface IPropsCar {
    carName: string;
    year: number;
    areCarsShown?: boolean;

    onChangeTitle?(): void;
    onChangeName?(event:ChangeEvent<HTMLInputElement>): void;
}
