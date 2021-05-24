import React from "react";
import { IPropsCar } from "./types";

export const Car: React.FC<IPropsCar> = ({ carName,
                                             year,
                                             onChangeName,
                                             onChangeTitle
}) => {

    return (
        <p>
            <h3>Car Name: {carName}</h3>
            <p>Year: {year}</p>
            <input type='text' onChange={onChangeName} value={carName} autoFocus />
            {/*<button onClick={onChangeTitle}>Click</button>*/}
            <div>{'-------------------'}</div>
        </p>
    );
}
