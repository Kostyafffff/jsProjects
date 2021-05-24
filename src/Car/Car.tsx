import React from "react";
import { IPropsCar } from "./types";
import {StyledCarWrapper} from "./styles";

export const Car: React.FC<IPropsCar> = ({
   carName,
   year,
   onChangeName,
   onDelete,
className
}) => {

    return (
        <StyledCarWrapper>
            <p className={className}>
                <h3>Car Name: {carName}</h3>
                <p>Year: {year}</p>
                <input type='text' onChange={onChangeName} value={carName} autoFocus />
                <button onClick={onDelete}>Delete</button>
                <div>{'-------------------'}</div>
            </p>
        </StyledCarWrapper>
    );
}
