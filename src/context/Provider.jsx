import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
const [cars, setCars] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
})

function moveCar(car, side) {
  setCars({
    ...cars,
    [car]: side
  })
};

const objState = {
  moveCar,
  cars,
}
  return (
    <CarsContext.Provider value={objState}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
