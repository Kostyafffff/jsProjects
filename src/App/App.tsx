import React, {ChangeEvent, useCallback, useState} from "react";
import { Car } from "../Car/Car";
import { ICar } from "./types";

export const App: React.FC = () => {
    const initialState: ICar[] = [
        {name: 'Porsche', year: 2021},
        {name: 'Mercedes', year: 1995},
        {name: 'Jiguly', year: 2500},
    ];

    const [cars, setCars] = useState(initialState);
    const [title, setTitle] = useState('Hello World');
    const [isHiddenCars, hideCars] = useState(false);

    const onChangeName = useCallback((name: string, index: number): void => {
        const car = cars[index];
        car.name = name;

        const newCars = [...cars];
        newCars[index] = car;

        setCars([...newCars])
    }, [cars, setCars]);

    const toggleCarsHandler = (): void => {
        hideCars(!isHiddenCars);
    };

    return (
      <div style={{textAlign: 'center'}}>
        <div>{title}</div>

          <input type='text' />

          <button onClick={toggleCarsHandler}>Toggle Cars</button>
          {isHiddenCars && cars.map((car, index) =>
              <Car
                  year={car.year}
                  carName={car.name}
                  onChangeName={(event:ChangeEvent<HTMLInputElement>) => {
                      onChangeName(event.currentTarget.value, index)
                  }}
                  key={`${index}${car.name}}`}
              />
          )}
      </div>
  );
};
